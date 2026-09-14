import { useCallback, useLayoutEffect, useState } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

export const THEME_PREFERENCE_KEY = 'sudoku-ui.theme.v1';

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === 'system' || value === 'light' || value === 'dark';

export const readThemePreference = (): ThemePreference => {
  try {
    const value = localStorage.getItem(THEME_PREFERENCE_KEY);
    return isThemePreference(value) ? value : 'system';
  } catch {
    return 'system';
  }
};

const systemTheme = (): ResolvedTheme =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

export const useThemePreference = () => {
  const [preference, setPreference] =
    useState<ThemePreference>(readThemePreference);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    preference === 'system' ? systemTheme() : preference,
  );

  useLayoutEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const resolved = preference === 'system' ? systemTheme() : preference;
      setResolvedTheme(resolved);
      document.documentElement.dataset.theme = resolved;
      document.documentElement.dataset.themePreference = preference;
    };

    applyTheme();
    if (preference !== 'system' || !media) return;
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [preference]);

  const setThemePreference = useCallback((next: ThemePreference) => {
    localStorage.setItem(THEME_PREFERENCE_KEY, next);
    setPreference(next);
  }, []);

  return { preference, resolvedTheme, setThemePreference };
};
