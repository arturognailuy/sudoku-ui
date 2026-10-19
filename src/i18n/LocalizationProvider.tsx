import { IntlProvider } from 'react-intl';
import { useEffect, type ReactNode } from 'react';
import { catalogs } from './catalogs';
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

  useEffect(() => {
    document.documentElement.lang = metadata.lang;
    document.documentElement.dir = metadata.dir;
  }, [metadata.dir, metadata.lang]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={catalogs[locale]}
    >
      {children}
    </IntlProvider>
  );
}
