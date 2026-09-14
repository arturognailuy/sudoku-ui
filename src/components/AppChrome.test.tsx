// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SiteFooter, SiteHeader } from './AppChrome';

describe('AppChrome', () => {
  it.each([
    ['checking', 'Connecting'],
    ['online', 'Game service ready'],
    ['offline', 'Game service unavailable'],
  ] as const)('renders the %s connection state', (connection, label) => {
    const onHome = vi.fn();
    const onThemeChange = vi.fn();
    render(
      <SiteHeader
        connection={connection}
        onHome={onHome}
        theme="system"
        resolvedTheme="dark"
        onThemeChange={onThemeChange}
      />,
    );
    expect(screen.getByRole('status')).toHaveTextContent(label);
    expect(document.querySelector('.brand-mark')?.children).toHaveLength(9);
    fireEvent.click(screen.getByRole('link', { name: 'Sudoku home' }));
    expect(onHome).toHaveBeenCalledOnce();
    expect(screen.getByRole('combobox', { name: 'Theme' })).toHaveAttribute(
      'title',
      'Theme: System (dark)',
    );
    fireEvent.change(screen.getByRole('combobox', { name: 'Theme' }), {
      target: { value: 'light' },
    });
    expect(onThemeChange).toHaveBeenCalledWith('light');
  });

  it('renders the product footer', () => {
    render(<SiteFooter />);
    expect(
      screen.getByText('Thoughtful play, without distractions.'),
    ).toBeTruthy();
    expect(screen.getByText('Keyboard and touch ready')).toBeTruthy();
  });
});
