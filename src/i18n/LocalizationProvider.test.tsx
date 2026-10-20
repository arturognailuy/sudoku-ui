// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { useIntl } from 'react-intl';
import { afterEach, describe, expect, it } from 'vitest';
import { LocalizationProvider } from './LocalizationProvider';
import { useLocalization } from './localization';
import { message } from './messages';

const existingMessage = message('error.internal-error');

function Probe() {
  const intl = useIntl();
  const { formatReference } = useLocalization();
  return (
    <>
      <div>
        {intl.formatMessage(
          { id: 'accessibility.language.changed' },
          { language: '中文' },
        )}
      </div>
      <div>{formatReference(existingMessage)}</div>
    </>
  );
}

afterEach(() => {
  document.documentElement.removeAttribute('lang');
  document.documentElement.removeAttribute('dir');
});

describe('LocalizationProvider', () => {
  it('rerenders typed message references in the selected catalog', () => {
    const view = render(
      <LocalizationProvider locale="en">
        <Probe />
      </LocalizationProvider>,
    );
    expect(
      screen.getByText('The request could not be completed.'),
    ).toBeInTheDocument();

    view.rerender(
      <LocalizationProvider locale="zh-Hant">
        <Probe />
      </LocalizationProvider>,
    );
    expect(screen.getByText('語言已變更為中文。')).toBeInTheDocument();
    expect(screen.getByText('無法完成要求。')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('zh-Hant');
    expect(document.documentElement.dir).toBe('ltr');

    view.rerender(
      <LocalizationProvider locale="ar">
        <Probe />
      </LocalizationProvider>,
    );
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
  });
});
