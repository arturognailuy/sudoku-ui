import {
  parse,
  TYPE,
  type MessageFormatElement,
} from '@formatjs/icu-messageformat-parser';
import { sourceMessages } from './en';
import type { ParsedMessageCatalog } from './types';

const pseudoText = (value: string) => {
  const accents: Record<string, string> = {
    a: 'åå',
    e: 'ëë',
    i: 'ïï',
    o: 'öö',
    u: 'üü',
    A: 'ÅÅ',
    E: 'ËË',
    I: 'ÏÏ',
    O: 'ÖÖ',
    U: 'ÜÜ',
  };
  return [...value]
    .map((character) => accents[character] ?? character)
    .join('');
};

const pseudoElements = (
  elements: MessageFormatElement[],
): MessageFormatElement[] =>
  elements.map((element) => {
    if (element.type === TYPE.literal) {
      return { ...element, value: pseudoText(element.value) };
    }
    if (element.type === TYPE.select || element.type === TYPE.plural) {
      return {
        ...element,
        options: Object.fromEntries(
          Object.entries(element.options).map(([key, option]) => [
            key,
            { ...option, value: pseudoElements(option.value) },
          ]),
        ),
      } as MessageFormatElement;
    }
    if (element.type === TYPE.tag) {
      return { ...element, children: pseudoElements(element.children) };
    }
    return element;
  });

export const pseudoCatalog = Object.fromEntries(
  Object.entries(sourceMessages).map(([id, source]) => [
    id,
    [
      { type: TYPE.literal, value: '⟦' },
      ...pseudoElements(parse(source)),
      { type: TYPE.literal, value: '⟧' },
    ],
  ]),
) as ParsedMessageCatalog;
