import type { MessageId } from './catalogs';

export type MessageValue = string | number | MessageReference;

export interface MessageReference {
  id: MessageId;
  values?: Record<string, MessageValue>;
}

export const message = (
  id: MessageId,
  values?: Record<string, MessageValue>,
): MessageReference => (values ? { id, values } : { id });
