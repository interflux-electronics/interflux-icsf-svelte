<script lang="ts">
  import { page } from '$app/stores';

  export let phrase: string;
  export let hasMarkdown: boolean = false;

  interface TranslationPair {
    en: string;
    ja: string;
  }

  // The language to which we need to translate.
  $: locale = $page.data.locale;

  // The available translations.
  $: translations = $page.data.translations || [];

  $: pair = translations.find((t: TranslationPair) => t.en === phrase);
  $: hasTranslation = pair ? true : false;
  $: translation = translate(phrase, locale);
  $: translationWithHtml = convertMarkdown(translation);

  const translate = (p: string, loc: string) => {
    if (!hasTranslation) {
      return p;
    }

    if (!pair) {
      console.error(`❌ no translation for "${p}"`);
      return p;
    }

    return pair[loc];
  };

  const convertMarkdown = (str: string) => {
    if (!str) {
      return str;
    }

    let html = str;

    // Wrap **bolded** words with <strong>
    html = html.replace(/\*{2}([^*]+)\*{2}/g, '<strong>$1</strong>');

    // TODO: add support for links

    return html;
  };
</script>

{#key locale}
  <span data-translated={hasTranslation}>
    {#if hasMarkdown}
      {@html translationWithHtml}
    {:else}
      {translation}
    {/if}
  </span>
{/key}
