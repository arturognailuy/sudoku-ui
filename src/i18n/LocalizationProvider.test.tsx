// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { useIntl } from 'react-intl';
import { afterEach, describe, expect, it } from 'vitest';
import { LocalizationProvider } from './LocalizationProvider';
import { useLocalization } from './localization';

function Probe() {
  const intl = useIntl();
  const { localizeText } = useLocalization();
  return (
    <>
      <div>
        {intl.formatMessage(
          { id: 'accessibility.language.changed' },
          { language: '中文' },
        )}
      </div>
      <div>{localizeText('The request could not be completed.')}</div>
    </>
  );
}

afterEach(() => {
  document.documentElement.removeAttribute('lang');
  document.documentElement.removeAttribute('dir');
});

describe('LocalizationProvider', () => {
  it('formats the selected catalog and updates document metadata', () => {
    render(
      <LocalizationProvider locale="zh-Hant">
        <Probe />
      </LocalizationProvider>,
    );
    expect(screen.getByText('語言已變更為中文。')).toBeInTheDocument();
    expect(screen.getByText('無法完成要求。')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('zh-Hant');
    expect(document.documentElement.dir).toBe('ltr');
  });
});
