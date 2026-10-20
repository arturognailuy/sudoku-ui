import { describe, expect, it } from 'vitest';
import {
  localePreferenceStorageKey,
  readLocalePreference,
  resolveLocale,
  writeLocalePreference,
} from './locales';

describe('locale preference', () => {
  it.each([
    [['en-US', 'zh-CN'], 'en'],
    [['zh-TW'], 'zh-Hant'],
    [['zh-HK', 'en'], 'zh-Hant'],
    [['zh-Hans-CN'], 'zh-Hans'],
    [['zh-CN'], 'zh-Hans'],
    [['zh'], 'zh-Hans'],
    [['pt-BR', 'en'], 'pt-BR'],
    [['pt-PT', 'en'], 'pt-BR'],
    [['es-MX', 'en'], 'es'],
    [['ja-JP', 'en'], 'ja'],
    [['ko-KR', 'en'], 'ko'],
    [['fr-CA', 'en'], 'fr'],
    [['de-AT', 'en'], 'de'],
    [['ru-RU', 'en'], 'ru'],
    [['ar-EG', 'en'], 'ar'],
    [['id-ID', 'en'], 'id'],
    [['hi-IN', 'en'], 'hi'],
    [['it-IT', 'en'], 'it'],
    [['tr-TR', 'en'], 'tr'],
    [['vi-VN', 'en'], 'vi'],
    [['uk-UA', 'en'], 'uk'],
  ] as const)('negotiates %j as %s', (languages, expected) => {
    expect(resolveLocale('auto', languages)).toBe(expected);
  });

  it('keeps an explicit preference independent of browser languages', () => {
    expect(resolveLocale('en', ['zh-TW'])).toBe('en');
    expect(resolveLocale('zh-Hant', ['en'])).toBe('zh-Hant');
  });

  it('reads only the versioned closed preference set', () => {
    expect(readLocalePreference({ getItem: () => 'zh-Hans' })).toBe('zh-Hans');
    expect(readLocalePreference({ getItem: () => 'fr' })).toBe('fr');
    expect(readLocalePreference({ getItem: () => 'nl' })).toBe('auto');
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
