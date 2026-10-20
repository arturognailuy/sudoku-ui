import type { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
import type { SupportedLocale } from '../locales';
import { sourceMessages } from './en';

export type MessageId = keyof typeof sourceMessages;
export type MessageCatalog = Record<MessageId, string>;
export type RuntimeLocale = SupportedLocale | 'en-XA';
export type ParsedMessageCatalog = Record<MessageId, MessageFormatElement[]>;
export type IntlMessageCatalog = MessageCatalog | ParsedMessageCatalog;
