import { describe, expect, it } from 'vitest';
import {
  localePreferenceStorageKey,
  readLocalePreference,
  resolveLocale,
  writeLocalePreference,
} from './locales';

describe('locale preference', () => {
  it.each([
    [['zh-TW'], 'zh-Hant'],
    [['zh-HK', 'en'], 'zh-Hant'],
    [['zh-Hans-CN'], 'zh-Hans'],
    [['zh-CN'], 'zh-Hans'],
    [['zh'], 'zh-Hans'],
    [['pt-BR', 'en'], 'en'],
  ] as const)('negotiates %j as %s', (languages, expected) => {
    expect(resolveLocale('auto', languages)).toBe(expected);
  });

  it('keeps an explicit preference independent of browser languages', () => {
    expect(resolveLocale('en', ['zh-TW'])).toBe('en');
    expect(resolveLocale('zh-Hant', ['en'])).toBe('zh-Hant');
  });

  it('reads only the versioned closed preference set', () => {
    expect(readLocalePreference({ getItem: () => 'zh-Hans' })).toBe('zh-Hans');
    expect(readLocalePreference({ getItem: () => 'fr' })).toBe('auto');
    expect(readLocalePreference({ getItem: () => null })).toBe('auto');
  });

  it('writes the versioned preference key', () => {
    let entry: [string, string] | undefined;
    writeLocalePreference(
      { setItem: (key, value) => (entry = [key, value]) },
      'zh-Hant',
    );
    expect(entry).toEqual([localePreferenceStorageKey, 'zh-Hant']);
  });
});
