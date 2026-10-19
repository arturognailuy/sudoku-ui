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

export const strategyMessageIds: Record<string, MessageId> = {
  'naked-single': 'strategy.naked-single.name',
  'hidden-single': 'strategy.hidden-single.name',
  'naked-pair': 'strategy.naked-pair.name',
  'naked-triple': 'strategy.naked-triple.name',
  'pointing-pair': 'strategy.pointing-pair.name',
  'hidden-pair': 'strategy.hidden-pair.name',
  'x-wing': 'strategy.x-wing.name',
  'xy-wing': 'strategy.xy-wing.name',
  'hidden-triple': 'strategy.hidden-triple.name',
  'w-wing': 'strategy.w-wing.name',
  swordfish: 'strategy.swordfish.name',
  'naked-quad': 'strategy.naked-quad.name',
  'simple-coloring': 'strategy.simple-coloring.name',
  'hidden-quad': 'strategy.hidden-quad.name',
  'xyz-wing': 'strategy.xyz-wing.name',
  jellyfish: 'strategy.jellyfish.name',
  'bug-plus-one': 'strategy.bug-plus-one.name',
  'unique-rectangle': 'strategy.unique-rectangle.name',
  'unique-rectangle-2': 'strategy.unique-rectangle-2.name',
  'unique-rectangle-3': 'strategy.unique-rectangle-3.name',
  'unique-rectangle-4': 'strategy.unique-rectangle-4.name',
  'x-cycles': 'strategy.x-cycles.name',
  'xy-chain': 'strategy.xy-chain.name',
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
