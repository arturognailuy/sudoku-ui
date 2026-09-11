import type { MouseEventHandler } from 'react';

interface SiteHeaderProps {
  connection: 'checking' | 'online' | 'offline';
  onHome: MouseEventHandler<HTMLAnchorElement>;
}

export const SiteHeader = ({ connection, onHome }: SiteHeaderProps) => (
  <header className="site-header">
    <a className="brand" href="/" aria-label="Sudoku home" onClick={onHome}>
      <span className="brand-mark" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </span>
      <span>Sudoku</span>
    </a>
    <span className={`connection connection--${connection}`} role="status">
      <span className="connection-dot" aria-hidden="true" />
      {connection === 'checking'
        ? 'Connecting'
        : connection === 'online'
          ? 'Game service ready'
          : 'Game service unavailable'}
    </span>
  </header>
);

export const SiteFooter = () => (
  <footer>
    <span>Thoughtful play, without distractions.</span>
    <span>Keyboard and touch ready</span>
  </footer>
);
