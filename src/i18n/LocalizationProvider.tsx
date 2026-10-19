import { IntlProvider, createIntl } from 'react-intl';
import { useEffect, useMemo, type ReactNode } from 'react';
import { catalogs } from './catalogs';
import { intlCache, LocalizationContext } from './localization';
import type { SupportedLocale } from './locales';

const localeMetadata: Record<
  SupportedLocale,
  { lang: string; dir: 'ltr' | 'rtl' }
> = {
  en: { lang: 'en', dir: 'ltr' },
  'zh-Hans': { lang: 'zh-Hans', dir: 'ltr' },
  'zh-Hant': { lang: 'zh-Hant', dir: 'ltr' },
};

type LocalizationProviderProps = {
  locale: SupportedLocale;
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
