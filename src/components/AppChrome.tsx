import type { MouseEventHandler, ReactNode } from 'react';
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
  accountControl?: ReactNode;
}

export const SiteHeader = ({
  connection,
  onHome,
  theme,
  resolvedTheme,
  onThemeChange,
  accountControl,
}: SiteHeaderProps) => (
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
      <fieldset className="theme-control" aria-label="Appearance">
        <legend>Appearance</legend>
        {(['system', 'light', 'dark'] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-label={`Use ${option} theme`}
            aria-pressed={theme === option}
            title={
              option === 'system'
                ? `System theme (${resolvedTheme})`
                : `${option[0].toUpperCase()}${option.slice(1)} theme`
            }
            onClick={() => onThemeChange(option)}
          >
            <span aria-hidden="true">
              {option === 'system' ? 'A' : option === 'light' ? '☼' : '☾'}
            </span>
            <span className="theme-option-label">
              {option === 'system' ? 'Auto' : option}
            </span>
          </button>
        ))}
      </fieldset>
      {connection !== 'online' && (
        <span className={`connection connection--${connection}`} role="status">
          <span className="connection-dot" aria-hidden="true" />
          <span className="connection-label">
            {connection === 'checking' ? 'Connecting' : 'Service unavailable'}
          </span>
        </span>
      )}
      {accountControl}
    </div>
  </header>
);

export const SiteFooter = () => (
  <footer>
    <span>Thoughtful play, without distractions.</span>
    <span className="footer-links">
      <a href={`${import.meta.env.BASE_URL}privacy/`}>Privacy</a>
      <a href={`${import.meta.env.BASE_URL}terms/`}>Terms</a>
      <span>Keyboard and touch ready</span>
    </span>
  </footer>
);
