import { createContext, useContext } from 'react';
import { createIntl, createIntlCache, type IntlShape } from 'react-intl';
import type { Difficulty } from '../api/types';
import { sourceMessages, type MessageId } from './catalogs';
import type { SupportedLocale } from './locales';
import { localizeClientText } from './clientText';

export const intlCache = createIntlCache();
const defaultIntl = createIntl(
  { locale: 'en', defaultLocale: 'en', messages: sourceMessages },
  intlCache,
);

export const difficultyMessageIds: Record<Difficulty, MessageId> = {
  easy: 'common.difficulty.easy',
  medium: 'common.difficulty.medium',
  hard: 'common.difficulty.hard',
  expert: 'common.difficulty.expert',
  evil: 'common.difficulty.evil',
};

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
    localizeText: (text: string): string => localizeClientText(intl, text),
  };
}
