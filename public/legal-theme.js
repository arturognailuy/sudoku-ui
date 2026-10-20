(() => {
  const storageKey = 'sudoku-ui.theme.v1';
  const media = window.matchMedia?.('(prefers-color-scheme: dark)');

  const readPreference = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : 'system';
    } catch {
      return 'system';
    }
  };

  const applyTheme = () => {
    const preference = readPreference();
    const resolved =
      preference === 'system'
        ? media?.matches
          ? 'dark'
          : 'light'
        : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = preference;
  };

  applyTheme();
  media?.addEventListener('change', applyTheme);
  window.addEventListener('storage', (event) => {
    if (event.key === storageKey) applyTheme();
  });
})();
