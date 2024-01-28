<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { dev } from '$app/environment';
  import Button from '$lib/components/Button.svelte';
  import iconWarningRed from '$lib/images/icon-warning-red.svg';

  export let label: string = 'Select image';
  export let imageURL: string | null = null;
  export let errorMessage: string | null = null;
  export let maxSize: number = 10;

  const dispatch = createEventDispatcher();
  const apiHost = dev ? 'http://localhost:3000' : 'https://rails.api.interflux.com';
  const apiHeaders = {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  };

  let uploading = false;
  let progress = 0; // %

  // For the progress bar
  $: loadBarStyle = `width: ${progress}%;`;

  // For swapping views
  $: view = imageURL ? 'done' : errorMessage ? 'error' : uploading ? 'busy' : 'todo';
  $: showTodo = view === 'todo';
  $: showBusy = view === 'busy';
  $: showDone = view === 'done';
  $: showError = view === 'error';

  async function onImageSelect(event: any) {
    reset();

    const files: File[] = event.target.files;
    const file: File = files[0];

    if (!file) {
      errorMessage = `No file selected...`;
      return;
    }

    const size = Math.round((file.size / 1024 / 1024).toFixed(4) * 10) / 10; // MB

    if (size > maxSize) {
      errorMessage = `File size is too large: ${size}MB.`;
      return;
    }

    uploading = true;

    const imageURL = await uploadImage(file);

    if (!imageURL) {
      errorMessage = `Sorry, we were unable to upload your file.`;
      view = 'error';
      console.error('image not uploaded!');
      return;
    }

    dispatch('uploadcomplete', { imageURL });
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // The start of the upload can be quite slow. For several seconds user get to see 0% and
  // it then picks up speed. This fake progress aims to make people patient at the start.
  async function fakeProgress(fakeProgress: number, ms: number) {
    await delay(ms);
    if (progress < fakeProgress) {
      progress = fakeProgress;
    }
  }

  async function uploadImage(file: File) {
    console.log('uploadImage()');
    console.log({ file });

    const date = new Date().toLocaleString('sv', { timeZone: 'UTC' }).replace(/:|\s/g, '-');
    const fileExt = file.name.split('.').pop(-1);
    const fileName = `${date}.${fileExt}`;

    fakeProgress(3, 1);
    fakeProgress(8, 500);
    fakeProgress(12, 1000);
    fakeProgress(19, 1500);
    fakeProgress(23, 2000);
    fakeProgress(27, 2500);
    fakeProgress(31, 3000);
    fakeProgress(36, 3500);

    // Hit API for pre-signed URL
    const response = await fetchUploadURL(fileName);

    if (!response) {
      console.warn('no response');
      return null;
    }

    const { uploadURL, cdnPath } = response;

    console.log({ uploadURL, cdnPath });

    if (!uploadURL) {
      console.warn('no uploadURL');
      return null;
    }

    if (!cdnPath) {
      console.warn('no cdnPath');
      return null;
    }

    // Hit CDN API for uploading file
    const uploadSuccess = await uploadFileToCDN(uploadURL, file);

    console.debug({ uploadSuccess });

    if (!uploadSuccess) {
      console.warn('upload failed');
      return null;
    }

    console.log('upload success');

    return `https://cdn-interflux.fra1.digitaloceanspaces.com/${cdnPath}`;
  }

  async function fetchUploadURL(fileName: string) {
    return new Promise((resolve, reject) => {
      const url = `${apiHost}/v1/public/simulation-requests/image-upload-url`;

      console.log('---');
      console.log('fetchUploadURL');
      console.log({ apiHost, url, fileName });
      console.log('---');

      return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ fileName }),
        headers: new Headers(apiHeaders)
      })
        .then((response) => response.json())
        .then((data) => {
          resolve({
            uploadURL: data['upload-url'],
            cdnPath: data['cdn-path']
          });
        })
        .catch((response) => {
          console.error('failed to fetch upload URL');
          console.error(response);
          errorMessage = 'Sorry, we were unable to upload your image.';
          reject();
        });
    });
  }

  async function uploadFileToCDN(uploadURL: string, file: File) {
    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (ev) => {
          const uploadProgress = Math.round((ev.loaded / ev.total) * 100);
          console.log(`${uploadProgress}%`);
          if (progress < uploadProgress) {
            progress = uploadProgress;
          }
        });
        xhr.addEventListener('load', () => resolve(true));
        xhr.addEventListener('error', () => reject(false));
        xhr.addEventListener('abort', () => reject(false));
        xhr.open('PUT', uploadURL);
        xhr.overrideMimeType(file.type);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
        xhr.send(file);
      } catch (error) {
        console.error('some random error occured');
        reject(false);
      }
    });
  }

  function removePreviewImage() {
    console.log('removePreviewImage()');
    reset();
    dispatch('removeimage');
  }

  function reset() {
    progress = 0;
    errorMessage = null;
    uploading = false;
  }
</script>

{#if showTodo}
  <label class="to-do card" for="image-upload">
    <svg width="34" height="45" viewBox="0 0 34 45" fill="none">
      <path
        d="M20.7941 0.818848H4.39319C2.13807 0.818848 0.31347 2.78919 0.31347 5.19738L0.292969 40.2256C0.292969 42.6338 2.11757 44.6042 4.37269 44.6042H28.9945C31.2497 44.6042 33.0948 42.6338 33.0948 40.2256V13.9544L20.7941 0.818848ZM28.9945 40.2256H4.39319V5.19738H18.744V16.1437H28.9945V40.2256ZM8.49341 29.3012L11.3841 32.3881L14.6437 28.929V38.0364H18.744V28.929L22.0037 32.41L24.8943 29.3012L16.7144 20.5222L8.49341 29.3012Z"
        fill="#4A4A4A"
      />
    </svg>
    <p>Please select an image of your circuit board.</p>
    <p>Maximum file size: {maxSize}MB</p>
  </label>

  <input type="file" accept="image/*" id="image-upload" on:change={onImageSelect} />
{/if}

{#if showBusy}
  <div class="busy card">
    <p>{progress} %</p>
    <div class="progress-bar">
      <div class="progress" style={loadBarStyle} />
    </div>
  </div>
{/if}

{#if showDone}
  <div class="done card">
    <img src={imageURL} alt="" aria-hidden="true" />
    <div class="remove">
      <Button label="Remove" theme="secondary white" on:click={removePreviewImage} />
    </div>
  </div>
{/if}

{#if showError}
  <div class="error card">
    <img src={iconWarningRed} alt="" aria-hidden="true" />
    <p>{errorMessage}</p>
    <Button label="Try again" theme="blue-link" on:click={reset} />
  </div>
{/if}

<style>
  .card {
    width: 100%;
    padding: 30px 30px;
    height: 250px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
  }
  .card p {
    font-size: 16px;
    line-height: 150%;
  }
  .to-do {
    border: 2px dashed var(--grey-2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  .to-do p {
    color: var(--grey-7);
    font-size: 16px;
    text-align: center;
  }
  .to-do svg {
    margin: 12px;
  }
  .to-do svg [fill] {
    fill: var(--grey-5);
  }
  .to-do:hover {
    border: 2px dashed var(--blue-0);
  }
  .to-do:hover svg [fill] {
    fill: var(--blue-0);
  }
  input[type='file'] {
    display: none;
  }
  .busy {
    border: 2px solid var(--grey-2);
  }
  .progress-bar {
    width: 70%;
    height: 10px;
    background-color: var(--grey-1);
    position: relative;
    border-radius: 5px;
  }
  .busy .progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 30%;
    height: 100%;
    background-color: var(--green-2);
    border-radius: 5px;
  }
  .error {
    border: 2px solid var(--grey-2);
    gap: 8px;
  }
  .error img {
    margin-bottom: 8px;
  }
  .done {
    height: auto;
    background: var(--grey-1);
    padding: 0;
    position: relative;
  }
  .done img {
    width: 100%;
    height: auto;
  }
  .done .remove {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
</style>
