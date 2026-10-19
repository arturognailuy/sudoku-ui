import type { MouseEventHandler, ReactNode } from 'react';
import type {
  ResolvedTheme,
  ThemePreference,
} from '../hooks/useThemePreference';
import { useLocalization } from '../i18n/localization';
import { localePreferences, type LocalePreference } from '../i18n/locales';
import type { MessageId } from '../i18n/catalogs';

interface SiteHeaderProps {
  connection: 'checking' | 'online' | 'offline';
  onHome: MouseEventHandler<HTMLAnchorElement>;
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  onThemeChange: (theme: ThemePreference) => void;
  localePreference?: LocalePreference;
  onLocaleChange?: (locale: LocalePreference) => void;
  accountControl?: ReactNode;
}

const localeMessageIds: Record<LocalePreference, MessageId> = {
  auto: 'common.language.auto',
  en: 'common.language.en',
  'zh-Hans': 'common.language.zh-Hans',
  'zh-Hant': 'common.language.zh-Hant',
};

const themeMessageIds: Record<ThemePreference, MessageId> = {
  system: 'chrome.theme.system',
  light: 'chrome.theme.light',
  dark: 'chrome.theme.dark',
};

export const SiteHeader = ({
  connection,
  onHome,
  theme,
  resolvedTheme,
  onThemeChange,
  localePreference = 'auto',
  onLocaleChange,
  accountControl,
}: SiteHeaderProps) => {
  const { formatMessage } = useLocalization();
  const themeName = (value: ThemePreference | ResolvedTheme) =>
    formatMessage(themeMessageIds[value]);
  const themeAriaLabel = (option: ThemePreference) =>
    formatMessage('chrome.theme.use', {
      theme:
        option === 'system'
          ? formatMessage('chrome.theme.systemName')
          : themeName(option),
    });
  const themeTitle = (option: ThemePreference) => {
    if (option === 'system') {
      return formatMessage('chrome.theme.systemTitle', {
        theme: themeName(resolvedTheme),
      });
    }
    return formatMessage('chrome.theme.title', { theme: themeName(option) });
  };

  return (
    <header className="site-header">
      <a
        className="brand"
        href={import.meta.env.BASE_URL}
        aria-label={formatMessage('chrome.home')}
        onClick={onHome}
      >
        <span className="brand-mark" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </span>
        <span>Sudoku</span>
      </a>
      <div className="site-header-actions">
        <label className="language-control">
          <span className="visually-hidden">
            {formatMessage('common.language.label')}
          </span>
          <select
            aria-label={formatMessage('common.language.label')}
            value={localePreference}
            onChange={(event) =>
              onLocaleChange?.(event.currentTarget.value as LocalePreference)
            }
          >
            {localePreferences.map((option) => (
              <option key={option} value={option}>
                {formatMessage(localeMessageIds[option])}
              </option>
            ))}
          </select>
        </label>
        <fieldset
          className="theme-control"
          aria-label={formatMessage('chrome.appearance')}
        >
          <legend>{formatMessage('chrome.appearance')}</legend>
          {(['system', 'light', 'dark'] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-label={themeAriaLabel(option)}
              aria-pressed={theme === option}
              title={themeTitle(option)}
              onClick={() => onThemeChange(option)}
            >
              <span className="theme-option-icon" aria-hidden="true">
                {option === 'system' ? (
                  <svg viewBox="0 0 16 16" focusable="false">
                    <rect x="2.25" y="2.75" width="11.5" height="8" rx="1.25" />
                    <path d="M5.5 13.25h5M8 10.75v2.5" />
                  </svg>
                ) : option === 'light' ? (
                  '☼'
                ) : (
                  '☾'
                )}
              </span>
              <span className="theme-option-label">{themeName(option)}</span>
            </button>
          ))}
        </fieldset>
        {connection !== 'online' && (
          <span
            className={`connection connection--${connection}`}
            role="status"
          >
            <span className="connection-dot" aria-hidden="true" />
            <span className="connection-label">
              {formatMessage(
                connection === 'checking'
                  ? 'chrome.connection.connecting'
                  : 'chrome.connection.unavailable',
              )}
            </span>
          </span>
        )}
        {accountControl}
      </div>
    </header>
  );
};

export const SiteFooter = () => {
  const { formatMessage } = useLocalization();
  return (
    <footer>
      <span>{formatMessage('chrome.footer.tagline')}</span>
      <span className="footer-links">
        <a href={`${import.meta.env.BASE_URL}privacy/`}>
          {formatMessage('chrome.footer.privacy')}
        </a>
        <a href={`${import.meta.env.BASE_URL}terms/`}>
          {formatMessage('chrome.footer.terms')}
        </a>
        <span>{formatMessage('chrome.footer.input')}</span>
      </span>
    </footer>
  );
};
