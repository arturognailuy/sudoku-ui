import type { SupportedLocale } from './locales';

export const sourceMessages = {
  'common.language.auto': 'Auto',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': 'Language changed to {language}.',
} as const;

export type MessageId = keyof typeof sourceMessages;
export type MessageCatalog = Record<MessageId, string>;

const zhHans: MessageCatalog = {
  'common.language.auto': '自动',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': '语言已更改为{language}。',
};

const zhHant: MessageCatalog = {
  'common.language.auto': '自動',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': '語言已變更為{language}。',
};

export const catalogs: Record<SupportedLocale, MessageCatalog> = {
  en: sourceMessages,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
};
