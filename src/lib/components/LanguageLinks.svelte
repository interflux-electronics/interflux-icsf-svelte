<script lang="ts">
  import Flag from '$lib/components/Flag.svelte';

  const usa = {
    id: 'US',
    nameEnglish: 'USA',
    nameNative: 'USA'
  };

  const uk = {
    id: 'GB',
    nameEnglish: 'UK',
    nameNative: 'UK'
  };

  const japan = {
    id: 'JP',
    nameEnglish: 'Japan',
    nameNative: '日本'
  };
</script>

<div class="language-links">
  <a href="/en">
    <Flag country={usa} />
    <Flag country={uk} />
    <span>English</span>
  </a>

  <a href="/ja">
    <Flag country={japan} />
    <span>日本語</span>
  </a>
</div>

<style lang="scss">
  .language-links {
    display: flex;
    gap: 20px;
    a {
      display: flex;
      gap: 6px;
      color: white;
      :global(.flag) {
        width: 20px;
      }
    }
  }
</style>
