import { useEffect, useMemo, useState } from 'react';
import { SudokuApiClient } from './api/client';
import './App.css';

const PREVIEW_PUZZLE =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';

const App = () => {
  const client = useMemo(() => new SudokuApiClient(), []);
  const [connection, setConnection] = useState<
    'checking' | 'online' | 'offline'
  >('checking');

  useEffect(() => {
    let active = true;
    client
      .health()
      .then(
        (healthy) => active && setConnection(healthy ? 'online' : 'offline'),
      )
      .catch(() => active && setConnection('offline'));
    return () => {
      active = false;
    };
  }, [client]);

  return (
    <main className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sudoku home">
          <span className="brand-mark" aria-hidden="true">
            9
          </span>
          <span>Sudoku</span>
        </a>
        <span className={`connection connection--${connection}`} role="status">
          <span aria-hidden="true" />
          {connection === 'checking'
            ? 'Connecting'
            : connection === 'online'
              ? 'Game service ready'
              : 'Game service unavailable'}
        </span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A calmer daily puzzle</p>
          <h1 id="hero-title">
            Clear your mind,
            <br />
            one square at a time.
          </h1>
          <p className="lede">
            A focused Sudoku experience backed by an authoritative game engine,
            built for quick play on any screen.
          </p>
          <button type="button" disabled aria-describedby="foundation-note">
            Start a new game
          </button>
          <p id="foundation-note" className="foundation-note">
            The playable board arrives in the next delivery slice.
          </p>
        </div>
        <div className="board-preview" aria-label="Sudoku board preview">
          {Array.from(PREVIEW_PUZZLE, (value, index) => {
            const isGiven = value !== '.';
            return (
              <span key={index} className={isGiven ? 'filled' : ''}>
                {isGiven ? value : ''}
              </span>
            );
          })}
        </div>
      </section>

      <footer>
        <span>Thoughtful play, without distractions.</span>
        <span>Keyboard and touch ready</span>
      </footer>
    </main>
  );
};

export default App;
