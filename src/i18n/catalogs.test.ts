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
      'pt-BR',
      'es',
      'ja',
      'ko',
      'fr',
      'de',
      'ru',
      'ar',
      'id',
      'hi',
      'it',
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

  it('keeps the reviewed English and Chinese product language distinct', () => {
    expect(sourceMessages['account.confirm.revoke.action']).toBe(
      'Sign out everywhere',
    );
    expect(sourceMessages['error.csrf-failed']).toBe(
      'This sign-in could not be verified. Please sign in again.',
    );
    expect(sourceMessages['status.hintRefreshed']).toContain('board changed');

    expect(catalogs['zh-Hans']['controls.notes.on']).toBe('笔记开启');
    expect(catalogs['zh-Hans']['controls.candidates.on']).toBe(
      '候选数显示开启',
    );
    expect(catalogs['zh-Hans']['hint.strategy.observe']).toContain(
      '行、列、宫',
    );
    expect(catalogs['zh-Hans']['strategy.naked-single.name']).toBe(
      '唯一候选数（裸单）',
    );

    expect(catalogs['zh-Hant']['controls.notes.on']).toBe('筆記開啟');
    expect(catalogs['zh-Hant']['controls.candidates.on']).toBe('顯示候選數');
    expect(catalogs['zh-Hant']['hint.strategy.observe']).toContain(
      '列、欄、宮',
    );
    expect(catalogs['zh-Hant']['strategy.naked-single.name']).toBe(
      '唯一候選數（裸單）',
    );
  });
});
