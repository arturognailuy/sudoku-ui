import App from './App';
import { LocalizationProvider } from './i18n/LocalizationProvider';
import { useLocalePreference } from './i18n/useLocalePreference';

export function LocalizedApp() {
  const locale = useLocalePreference();
  return (
    <LocalizationProvider locale={locale.locale}>
      <App
        localePreference={locale.preference}
        onLocaleChange={locale.setPreference}
      />
    </LocalizationProvider>
  );
}
