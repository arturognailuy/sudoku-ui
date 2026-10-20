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

  it('uses a distinct browser-language label and clears pointer focus after selection', () => {
    const onLocaleChange = vi.fn();
    render(
      <SiteHeader
        connection="online"
        onHome={vi.fn()}
        theme="system"
        resolvedTheme="dark"
        onThemeChange={vi.fn()}
        localePreference="auto"
        onLocaleChange={onLocaleChange}
      />,
    );

    const locale = screen.getByRole('combobox', { name: 'Language' });
    expect(locale).toHaveDisplayValue('Browser');
    locale.focus();
    fireEvent.pointerDown(locale);
    fireEvent.change(locale, { target: { value: 'pt-BR' } });
    expect(onLocaleChange).toHaveBeenCalledWith('pt-BR');
    expect(locale).not.toHaveFocus();
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
