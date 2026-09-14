// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  readThemePreference,
  THEME_PREFERENCE_KEY,
  useThemePreference,
} from './useThemePreference';

const createColorScheme = (dark = false) => {
  const listeners = new Set<() => void>();
  let matches = dark;
  const media = {
    get matches() {
      return matches;
    },
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: vi.fn((_event: string, listener: () => void) =>
      listeners.add(listener),
    ),
    removeEventListener: vi.fn((_event: string, listener: () => void) =>
      listeners.delete(listener),
    ),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    change(next: boolean) {
      matches = next;
      listeners.forEach((listener) => listener());
    },
  };
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => media),
  );
  return media;
};

beforeEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
  delete document.documentElement.dataset.themePreference;
  vi.unstubAllGlobals();
});

describe('useThemePreference', () => {
  it('defaults invalid stored values to the system preference', () => {
    localStorage.setItem(THEME_PREFERENCE_KEY, 'sepia');
    expect(readThemePreference()).toBe('system');
  });

  it('follows system changes while system mode is selected', () => {
    const media = createColorScheme(false);
    const { result, unmount } = renderHook(() => useThemePreference());

    expect(result.current.preference).toBe('system');
    expect(result.current.resolvedTheme).toBe('light');
    expect(document.documentElement.dataset.theme).toBe('light');

    act(() => media.change(true));
    expect(result.current.resolvedTheme).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');

    unmount();
    expect(media.removeEventListener).toHaveBeenCalledOnce();
  });

  it('persists an explicit theme and ignores system changes', () => {
    const media = createColorScheme(true);
    const { result } = renderHook(() => useThemePreference());

    act(() => result.current.setThemePreference('light'));
    expect(localStorage.getItem(THEME_PREFERENCE_KEY)).toBe('light');
    expect(result.current.preference).toBe('light');
    expect(result.current.resolvedTheme).toBe('light');
    expect(document.documentElement.dataset.themePreference).toBe('light');

    act(() => media.change(false));
    expect(result.current.resolvedTheme).toBe('light');
  });
});
