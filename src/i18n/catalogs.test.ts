import {
  parse,
  TYPE,
  type MessageFormatElement,
} from '@formatjs/icu-messageformat-parser';
import { createIntl } from 'react-intl';
import { describe, expect, it } from 'vitest';
import {
  catalogs,
  pseudoCatalog,
  sourceMessages,
  type MessageCatalog,
} from './catalogs';

const argumentNames = (elements: MessageFormatElement[]): string[] => {
  const names = new Set<string>();
  const visit = (items: MessageFormatElement[]) => {
    for (const element of items) {
      if (
        element.type === TYPE.argument ||
        element.type === TYPE.number ||
        element.type === TYPE.date ||
        element.type === TYPE.time ||
        element.type === TYPE.select ||
        element.type === TYPE.plural
      ) {
        names.add(element.value);
      }
      if (element.type === TYPE.select || element.type === TYPE.plural) {
        Object.values(element.options).forEach((option) => visit(option.value));
      }
      if (element.type === TYPE.tag) visit(element.children);
    }
  };
  visit(elements);
  return [...names].sort();
};

describe('localization catalogs', () => {
  it('keeps every production catalog ICU-valid with the source arguments', () => {
    const sourceIds = Object.keys(sourceMessages).sort();
    for (const locale of [
      'en',
      'zh-Hans',
      'zh-Hant',
      'nl',
      'pt-BR',
      'es',
      'ja',
      'ko',
      'pl',
      'fr',
      'de',
      'ru',
      'ar',
      'id',
      'hi',
      'it',
      'th',
      'tr',
      'vi',
      'uk',
    ] as const) {
      const catalog = catalogs[locale] as MessageCatalog;
      expect(Object.keys(catalog).sort()).toEqual(sourceIds);
      for (const id of sourceIds as Array<keyof typeof sourceMessages>) {
        const sourceArguments = argumentNames(parse(sourceMessages[id]));
        expect(argumentNames(parse(catalog[id])), `${locale}:${id}`).toEqual(
          sourceArguments,
        );
      }
    }
  });

  it('formats the test-only pseudo-locale while preserving ICU arguments', () => {
    const errors: unknown[] = [];
    const intl = createIntl({
      locale: 'en-XA',
      messages: pseudoCatalog,
      onError: (error) => errors.push(error),
    });

    expect(
      intl.formatMessage({ id: 'game.mistakes.label' }, { count: 2 }),
    ).toMatch(/^⟦.*2.*⟧$/);
    expect(
      intl.formatMessage(
        { id: 'board.cell' },
        {
          row: 1,
          column: 2,
          content: '3',
          pending: 'false',
          invalid: 'false',
          hint: 'none',
        },
      ),
    ).toMatch(/^⟦.*1.*2.*3.*⟧$/);
    expect(errors).toEqual([]);
  });
});
