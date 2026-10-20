export const localePreferences = [
  'auto',
  'en',
  'zh-Hans',
  'zh-Hant',
  'pt-BR',
  'es',
  'ja',
  'ko',
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
