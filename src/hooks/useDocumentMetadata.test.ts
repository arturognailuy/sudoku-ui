// @vitest-environment jsdom
import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { useDocumentMetadata } from './useDocumentMetadata';
import type { ResolvedTheme } from './useThemePreference';

describe('useDocumentMetadata', () => {
  beforeEach(() => {
    document.head.innerHTML =
      '<meta name="theme-color" content="#f4f2eb"><title>Sudoku</title>';
  });

  it('front-loads the localized page state and keeps the product name', () => {
    const { rerender } = renderHook(
      ({ title }) => useDocumentMetadata(title, 'light'),
      { initialProps: { title: 'Choose your difficulty' } },
    );
    expect(document.title).toBe('Choose your difficulty | Sudoku');

    rerender({ title: 'Hard puzzle' });
    expect(document.title).toBe('Hard puzzle | Sudoku');
  });

  it('keeps browser chrome aligned with the resolved theme', () => {
    const { rerender } = renderHook(
      ({ theme }: { theme: ResolvedTheme }) =>
        useDocumentMetadata('Sudoku', theme),
      { initialProps: { theme: 'light' as ResolvedTheme } },
    );
    const themeColor = document.querySelector('meta[name="theme-color"]');
    expect(themeColor).toHaveAttribute('content', '#f4f2eb');

    rerender({ theme: 'dark' });
    expect(themeColor).toHaveAttribute('content', '#101715');
  });
});
