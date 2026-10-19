import { createContext, useContext } from 'react';
import { createIntl, createIntlCache, type IntlShape } from 'react-intl';
import { sourceMessages, type MessageId } from './catalogs';
import type { SupportedLocale } from './locales';

export const intlCache = createIntlCache();
const defaultIntl = createIntl(
  { locale: 'en', defaultLocale: 'en', messages: sourceMessages },
  intlCache,
);

export const LocalizationContext = createContext<{
  locale: SupportedLocale;
  intl: IntlShape;
}>({ locale: 'en', intl: defaultIntl });

export function useLocalization() {
  const { locale, intl } = useContext(LocalizationContext);
  return {
    locale,
    formatMessage: (
      id: MessageId,
      values?: Record<string, string | number>,
    ): string =>
      intl.formatMessage({ id, defaultMessage: sourceMessages[id] }, values),
  };
}
