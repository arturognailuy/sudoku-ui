// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { localePreferenceStorageKey } from './locales';
import { useLocalePreference } from './useLocalePreference';

describe('useLocalePreference', () => {
  beforeEach(() => window.localStorage.clear());

  it('persists an explicit selection and resolves it immediately', () => {
    const { result } = renderHook(() => useLocalePreference());
    act(() => result.current.setPreference('zh-Hant'));
    expect(result.current.preference).toBe('zh-Hant');
    expect(result.current.locale).toBe('zh-Hant');
    expect(window.localStorage.getItem(localePreferenceStorageKey)).toBe(
      'zh-Hant',
    );
  });

  it('reacts to browser language changes only in Auto', () => {
    const languages = vi.spyOn(window.navigator, 'languages', 'get');
    languages.mockReturnValue(['zh-TW']);
    const { result } = renderHook(() => useLocalePreference());
    expect(result.current.locale).toBe('zh-Hant');

    languages.mockReturnValue(['en']);
    act(() => window.dispatchEvent(new Event('languagechange')));
    expect(result.current.locale).toBe('en');

    act(() => result.current.setPreference('zh-Hans'));
    languages.mockReturnValue(['zh-TW']);
    act(() => window.dispatchEvent(new Event('languagechange')));
    expect(result.current.locale).toBe('zh-Hans');
  });
});
