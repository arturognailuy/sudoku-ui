import { IntlProvider, createIntl } from 'react-intl';
import { useEffect, useMemo, type ReactNode } from 'react';
import { catalogs, type RuntimeLocale } from './catalogs';
import { intlCache, LocalizationContext } from './localization';

const localeMetadata: Record<
  RuntimeLocale,
  { lang: string; dir: 'ltr' | 'rtl' }
> = {
  en: { lang: 'en', dir: 'ltr' },
  'zh-Hans': { lang: 'zh-Hans', dir: 'ltr' },
  'zh-Hant': { lang: 'zh-Hant', dir: 'ltr' },
  'pt-BR': { lang: 'pt-BR', dir: 'ltr' },
  es: { lang: 'es', dir: 'ltr' },
  ja: { lang: 'ja', dir: 'ltr' },
  ko: { lang: 'ko', dir: 'ltr' },
  fr: { lang: 'fr', dir: 'ltr' },
  de: { lang: 'de', dir: 'ltr' },
  ru: { lang: 'ru', dir: 'ltr' },
  ar: { lang: 'ar', dir: 'rtl' },
  id: { lang: 'id', dir: 'ltr' },
  hi: { lang: 'hi', dir: 'ltr' },
  it: { lang: 'it', dir: 'ltr' },
  tr: { lang: 'tr', dir: 'ltr' },
  vi: { lang: 'vi', dir: 'ltr' },
  uk: { lang: 'uk', dir: 'ltr' },
  'en-XA': { lang: 'en-XA', dir: 'ltr' },
};

type LocalizationProviderProps = {
  locale: RuntimeLocale;
  children: ReactNode;
};

export function LocalizationProvider({
  locale,
  children,
}: LocalizationProviderProps) {
  const metadata = localeMetadata[locale];
  const intl = useMemo(
    () =>
      createIntl(
        { locale, defaultLocale: 'en', messages: catalogs[locale] },
        intlCache,
      ),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = metadata.lang;
    document.documentElement.dir = metadata.dir;
  }, [metadata.dir, metadata.lang]);

  return (
    <LocalizationContext.Provider value={{ locale, intl }}>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={catalogs[locale]}
      >
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
}
