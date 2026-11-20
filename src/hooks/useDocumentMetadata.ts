import { useLayoutEffect } from 'react';
import type { ResolvedTheme } from './useThemePreference';

const productName = 'Sudoku';
const themeColors: Record<ResolvedTheme, string> = {
  light: '#f4f2eb',
  dark: '#101715',
};

export const useDocumentMetadata = (
  pageTitle: string,
  resolvedTheme: ResolvedTheme,
) => {
  useLayoutEffect(() => {
    document.title = `${pageTitle} | ${productName}`;
  }, [pageTitle]);

  useLayoutEffect(() => {
    const canvas = getComputedStyle(document.documentElement)
      .getPropertyValue('--canvas')
      .trim();
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', canvas || themeColors[resolvedTheme]);
  }, [resolvedTheme]);
};
