import App from './App';
import { LocalizationProvider } from './i18n/LocalizationProvider';
import { useLocalePreference } from './i18n/useLocalePreference';

export function LocalizedApp() {
  const locale = useLocalePreference();
  const testLocale =
    import.meta.env.DEV &&
    new URLSearchParams(window.location.search).get('locale') === 'pseudo'
      ? 'en-XA'
      : locale.locale;
  return (
    <LocalizationProvider locale={testLocale}>
      <App
        localePreference={locale.preference}
        onLocaleChange={locale.setPreference}
      />
    </LocalizationProvider>
  );
}
