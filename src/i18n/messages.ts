import type { MessageId } from './catalogs';

export interface MessageListReference {
  kind: 'list';
  items: MessageReference[];
}

export type MessageValue =
  string | number | MessageReference | MessageListReference;

export interface MessageReference {
  id: MessageId;
  values?: Record<string, MessageValue>;
}

export type DisplayMessage = MessageReference | { text: string };

export const message = (
  id: MessageId,
  values?: Record<string, MessageValue>,
): MessageReference => (values ? { id, values } : { id });
