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
    render(<SiteHeader connection={connection} onHome={onHome} />);
    expect(screen.getByRole('status')).toHaveTextContent(label);
    expect(document.querySelector('.brand-mark')?.children).toHaveLength(9);
    fireEvent.click(screen.getByRole('link', { name: 'Sudoku home' }));
    expect(onHome).toHaveBeenCalledOnce();
  });

  it('renders the product footer', () => {
    render(<SiteFooter />);
    expect(
      screen.getByText('Thoughtful play, without distractions.'),
    ).toBeTruthy();
    expect(screen.getByText('Keyboard and touch ready')).toBeTruthy();
  });
});
