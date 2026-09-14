import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type {
  ResolvedTheme,
  ThemePreference,
} from '../hooks/useThemePreference';

interface SiteHeaderProps {
  connection: 'checking' | 'online' | 'offline';
  onHome: MouseEventHandler<HTMLAnchorElement>;
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  onThemeChange: (theme: ThemePreference) => void;
}

export const SiteHeader = ({
  connection,
  onHome,
  theme,
  resolvedTheme,
  onThemeChange,
}: SiteHeaderProps) => {
  const changeTheme: ChangeEventHandler<HTMLSelectElement> = (event) =>
    onThemeChange(event.currentTarget.value as ThemePreference);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Sudoku home" onClick={onHome}>
        <span className="brand-mark" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </span>
        <span>Sudoku</span>
      </a>
      <div className="site-header-actions">
        <label className="theme-control">
          <span>Theme</span>
          <select
            aria-label="Theme"
            value={theme}
            onChange={changeTheme}
            title={`Theme: ${theme === 'system' ? `System (${resolvedTheme})` : theme}`}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <span className={`connection connection--${connection}`} role="status">
          <span className="connection-dot" aria-hidden="true" />
          <span className="connection-label">
            {connection === 'checking'
              ? 'Connecting'
              : connection === 'online'
                ? 'Game service ready'
                : 'Game service unavailable'}
          </span>
        </span>
      </div>
    </header>
  );
};

export const SiteFooter = () => (
  <footer>
    <span>Thoughtful play, without distractions.</span>
    <span>Keyboard and touch ready</span>
  </footer>
);
