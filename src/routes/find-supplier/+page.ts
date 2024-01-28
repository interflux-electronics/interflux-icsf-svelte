import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  console.log('⛵️');

  // Use 127.0.0.1 instead of localhost, otherwise Node blows up.
  // https://github.com/node-fetch/node-fetch/issues/1624
  const apiHost = 'http://127.0.0.1:3000';

  // The Interflux API is JSON API complient and requires this header.
  const options = { headers: { 'Content-Type': 'application/vnd.api+json' } };

  const responses = await Promise.all([
    fetch(`${apiHost}/v1/public/countries`, options),
    fetch(`${apiHost}/v1/public/companies?filter[shown_on_icsf_website]=true`, options)
  ]);

  const failed = responses.filter((res) => !res.ok);

  if (failed.length) {
    console.error('❌');
    return {};
  }

  const payload = {
    countries: await responses[0].json().then((json) => json.data),
    suppliers: await responses[1].json().then((json) => json.data)
  };

  console.log('✅', payload);

  return payload;
};
