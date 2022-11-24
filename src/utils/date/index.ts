export const getLanguageCode = (): string =>
  (window.navigator as any).userLanguage ||
  window.navigator.language ||
  'en_US';

export const localeUses24HourTime = (
  langCode: string = getLanguageCode()
): boolean => {
  if (!Intl) {
    // TODO: handle this case
    return false;
  }

  // TODO: fix types
  return (
    new (Intl as any).DateTimeFormat(langCode, {
      hour: 'numeric',
    })
      .formatToParts(new Date(2020, 0, 1, 13))
      .find((part: any) => part.type === 'hour').value.length === 2
  );
};
