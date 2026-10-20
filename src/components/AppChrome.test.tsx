// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SiteFooter, SiteHeader } from './AppChrome';

describe('AppChrome', () => {
  it.each([
    ['checking', 'Connecting'],
    ['offline', 'Service unavailable'],
  ] as const)(
    'renders the actionable %s connection state',
    (connection, label) => {
      render(
        <SiteHeader
          connection={connection}
          onHome={vi.fn()}
          theme="system"
          resolvedTheme="dark"
          onThemeChange={vi.fn()}
        />,
      );
      expect(screen.getByRole('status')).toHaveTextContent(label);
    },
  );

  it('keeps healthy technical status out of the header and exposes appearance choices', () => {
    const onHome = vi.fn();
    const onThemeChange = vi.fn();
    const onLocaleChange = vi.fn();
    render(
      <SiteHeader
        connection="online"
        onHome={onHome}
        theme="system"
        resolvedTheme="dark"
        onThemeChange={onThemeChange}
        localePreference="en"
        onLocaleChange={onLocaleChange}
        accountControl={<a href="/login">Sign in</a>}
      />,
    );
    expect(screen.queryByRole('status')).toBeNull();
    expect(document.querySelector('.brand-mark')?.children).toHaveLength(9);
    const homeLink = screen.getByRole('link', { name: 'Sudoku home' });
    expect(homeLink).toHaveAttribute('href', import.meta.env.BASE_URL);
    fireEvent.click(homeLink);
    expect(onHome).toHaveBeenCalledOnce();
    const system = screen.getByRole('button', { name: 'Use system theme' });
    expect(system).toHaveAttribute('aria-pressed', 'true');
    expect(system).toHaveAttribute('title', 'System theme (dark)');
    fireEvent.click(screen.getByRole('button', { name: 'Use light theme' }));
    expect(onThemeChange).toHaveBeenCalledWith('light');
    fireEvent.change(screen.getByRole('combobox', { name: 'Language' }), {
      target: { value: 'zh-Hant' },
    });
    expect(onLocaleChange).toHaveBeenCalledWith('zh-Hant');
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeVisible();
  });

  it('keeps complete menu names while showing a compact selected language and clears pointer focus', () => {
    const onLocaleChange = vi.fn();
    const sharedProps = {
      connection: 'online' as const,
      onHome: vi.fn(),
      theme: 'system' as const,
      resolvedTheme: 'dark' as const,
      onThemeChange: vi.fn(),
      onLocaleChange,
    };
    const { rerender } = render(
      <SiteHeader {...sharedProps} localePreference="auto" />,
    );

    const locale = screen.getByRole('combobox', { name: 'Language' });
    expect(locale).toHaveDisplayValue('Auto');
    expect(screen.getByTestId('selected-language')).toHaveTextContent('Auto');
    locale.focus();
    fireEvent.pointerDown(locale);
    fireEvent.change(locale, { target: { value: 'pt-BR' } });
    expect(onLocaleChange).toHaveBeenCalledWith('pt-BR');
    rerender(<SiteHeader {...sharedProps} localePreference="pt-BR" />);
    expect(locale).toHaveDisplayValue('Português (Brasil)');
    expect(screen.getByTestId('selected-language')).toHaveTextContent(
      'Português',
    );
    expect(locale).not.toHaveFocus();

    rerender(<SiteHeader {...sharedProps} localePreference="id" />);
    expect(locale).toHaveDisplayValue('Bahasa Indonesia');
    expect(screen.getByTestId('selected-language')).toHaveTextContent(
      'Indonesia',
    );

    expect(
      Array.from(locale.querySelectorAll('option'), (option) => option.value),
    ).toEqual([
      'auto',
      'ar',
      'zh-Hans',
      'zh-Hant',
      'en',
      'fr',
      'de',
      'hi',
      'id',
      'it',
      'ja',
      'ko',
      'pt-BR',
      'ru',
      'es',
      'tr',
      'uk',
      'vi',
    ]);
  });

  it('retains keyboard focus after a keyboard locale change', () => {
    render(
      <SiteHeader
        connection="online"
        onHome={vi.fn()}
        theme="system"
        resolvedTheme="dark"
        onThemeChange={vi.fn()}
        localePreference="auto"
        onLocaleChange={vi.fn()}
      />,
    );

    const locale = screen.getByRole('combobox', { name: 'Language' });
    locale.focus();
    fireEvent.keyDown(locale, { key: 'ArrowDown' });
    fireEvent.change(locale, { target: { value: 'en' } });
    expect(locale).toHaveFocus();
  });

  it('renders the product footer', () => {
    render(<SiteFooter />);
    expect(
      screen.getByText('Thoughtful play, without distractions.'),
    ).toBeTruthy();
    expect(screen.getByText('Keyboard and touch ready')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute(
      'href',
      '/privacy/',
    );
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute(
      'href',
      '/terms/',
    );
  });
});
