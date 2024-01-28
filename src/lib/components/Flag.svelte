<script lang="ts">
  import { dev } from '$app/environment';

  const cdnHost = dev ? 'http://localhost:9000' : 'https://cdn.interflux.com';

  export let country: any;
</script>

<img
  src="{cdnHost}/images/flags/{country.id}.svg"
  alt={country.nameEnglish}
  width="32"
  height="24"
  class="flag {country.id}"
  title={country.nameNative}
/>

<style lang="scss">
  img.flag {
    height: auto;
    width: 32px;
    &.BG,
    &.CZ,
    &.FI,
    &.ID,
    &.IT,
    &.KR,
    &.PH,
    &.PK,
    &.PL,
    &.RS,
    &.RU,
    &.SG,
    &.SI {
      outline: 1px solid var(--grey-1);
    }
  }
</style>
