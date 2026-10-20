export const localePreferences = [
  'auto',
  'ar',
  'zh-Hans',
  'zh-Hant',
  'en',
  'fr',
  'de',
  'hi',
  'id',
  'it',
  'ja',
  'ko',
  'pt-BR',
  'ru',
  'es',
  'tr',
  'uk',
  'vi',
] as const;
export type LocalePreference = (typeof localePreferences)[number];
export type SupportedLocale = Exclude<LocalePreference, 'auto'>;

export const localePreferenceStorageKey = 'sudoku.locale.v1';

export function isLocalePreference(value: unknown): value is LocalePreference {
  return (
    typeof value === 'string' &&
    localePreferences.includes(value as LocalePreference)
  );
}

export function resolveLocale(
  preference: LocalePreference,
  browserLanguages: readonly string[] = [],
): SupportedLocale {
  if (preference !== 'auto') return preference;

  for (const language of browserLanguages) {
    const normalized = language.trim().replaceAll('_', '-').toLowerCase();
    if (normalized === 'en' || normalized.startsWith('en-')) return 'en';
    if (normalized === 'zh-hant' || normalized.startsWith('zh-hant-'))
      return 'zh-Hant';
    if (normalized === 'zh-hans' || normalized.startsWith('zh-hans-'))
      return 'zh-Hans';
    if (/^zh-(tw|hk|mo)(-|$)/.test(normalized)) return 'zh-Hant';
    if (/^zh-(cn|sg)(-|$)/.test(normalized) || normalized === 'zh')
      return 'zh-Hans';
    if (normalized === 'pt' || normalized.startsWith('pt-')) return 'pt-BR';
    if (normalized === 'es' || normalized.startsWith('es-')) return 'es';
    if (normalized === 'ja' || normalized.startsWith('ja-')) return 'ja';
    if (normalized === 'ko' || normalized.startsWith('ko-')) return 'ko';
    if (normalized === 'fr' || normalized.startsWith('fr-')) return 'fr';
    if (normalized === 'de' || normalized.startsWith('de-')) return 'de';
    if (normalized === 'ru' || normalized.startsWith('ru-')) return 'ru';
    if (normalized === 'ar' || normalized.startsWith('ar-')) return 'ar';
    if (normalized === 'id' || normalized.startsWith('id-')) return 'id';
    if (normalized === 'hi' || normalized.startsWith('hi-')) return 'hi';
    if (normalized === 'it' || normalized.startsWith('it-')) return 'it';
    if (normalized === 'tr' || normalized.startsWith('tr-')) return 'tr';
    if (normalized === 'vi' || normalized.startsWith('vi-')) return 'vi';
    if (normalized === 'uk' || normalized.startsWith('uk-')) return 'uk';
  }
  return 'en';
}

export function readLocalePreference(
  storage: Pick<Storage, 'getItem'>,
): LocalePreference {
  const stored = storage.getItem(localePreferenceStorageKey);
  return isLocalePreference(stored) ? stored : 'auto';
}

export function writeLocalePreference(
  storage: Pick<Storage, 'setItem'>,
  preference: LocalePreference,
): void {
  storage.setItem(localePreferenceStorageKey, preference);
}
