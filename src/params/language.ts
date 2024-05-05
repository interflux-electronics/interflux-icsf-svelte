import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
  // At present we only support English and Japanese
  const validLanguage = ['en', 'ja'].includes(param);

  if (!validLanguage) {
    console.warn('the URL contains an invalid locale:', param);
  }

  return validLanguage;
};
