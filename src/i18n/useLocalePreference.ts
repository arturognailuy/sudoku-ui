import { useCallback, useEffect, useState } from 'react';
import {
  readLocalePreference,
  resolveLocale,
  writeLocalePreference,
  type LocalePreference,
  type SupportedLocale,
} from './locales';

const browserLanguages = () =>
  typeof navigator === 'undefined' ? [] : navigator.languages;

interface LocaleState {
  preference: LocalePreference;
  locale: SupportedLocale;
  setPreference: (preference: LocalePreference) => void;
}

export function useLocalePreference(): LocaleState {
  const [preference, setPreferenceState] = useState<LocalePreference>(() =>
    typeof window === 'undefined'
      ? 'auto'
      : readLocalePreference(window.localStorage),
  );
  const [locale, setLocale] = useState<SupportedLocale>(() =>
    resolveLocale(preference, browserLanguages()),
  );

  useEffect(() => {
    setLocale(resolveLocale(preference, browserLanguages()));
    if (preference !== 'auto' || typeof window === 'undefined') return;
    const update = () => setLocale(resolveLocale('auto', browserLanguages()));
    window.addEventListener('languagechange', update);
    return () => window.removeEventListener('languagechange', update);
  }, [preference]);

  const setPreference = useCallback((next: LocalePreference) => {
    setPreferenceState(next);
    setLocale(resolveLocale(next, browserLanguages()));
    if (typeof window !== 'undefined')
      writeLocalePreference(window.localStorage, next);
  }, []);

  return { preference, locale, setPreference };
}
