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
    render(
      <SiteHeader
        connection="online"
        onHome={onHome}
        theme="system"
        resolvedTheme="dark"
        onThemeChange={onThemeChange}
        accountControl={<a href="/login">Sign in</a>}
      />,
    );
    expect(screen.queryByRole('status')).toBeNull();
    expect(document.querySelector('.brand-mark')?.children).toHaveLength(9);
    fireEvent.click(screen.getByRole('link', { name: 'Sudoku home' }));
    expect(onHome).toHaveBeenCalledOnce();
    const system = screen.getByRole('button', { name: 'Use system theme' });
    expect(system).toHaveAttribute('aria-pressed', 'true');
    expect(system).toHaveAttribute('title', 'System theme (dark)');
    fireEvent.click(screen.getByRole('button', { name: 'Use light theme' }));
    expect(onThemeChange).toHaveBeenCalledWith('light');
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeVisible();
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
