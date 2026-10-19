import type { SupportedLocale } from './locales';

export const sourceMessages = {
  'common.language.label': 'Language',
  'common.language.auto': 'Auto',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': 'Language changed to {language}.',
  'chrome.home': 'Sudoku home',
  'chrome.appearance': 'Appearance',
  'chrome.theme.use': 'Use {theme} theme',
  'chrome.theme.systemTitle': 'System theme ({theme})',
  'chrome.theme.title': '{theme} theme',
  'chrome.theme.system': 'Auto',
  'chrome.theme.systemName': 'system',
  'chrome.theme.light': 'light',
  'chrome.theme.dark': 'dark',
  'chrome.connection.connecting': 'Connecting',
  'chrome.connection.unavailable': 'Service unavailable',
  'chrome.footer.tagline': 'Thoughtful play, without distractions.',
  'chrome.footer.privacy': 'Privacy',
  'chrome.footer.terms': 'Terms',
  'chrome.footer.input': 'Keyboard and touch ready',
} as const;

export type MessageId = keyof typeof sourceMessages;
export type MessageCatalog = Record<MessageId, string>;

const zhHans: MessageCatalog = {
  'common.language.label': '语言',
  'common.language.auto': '自动',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': '语言已更改为{language}。',
  'chrome.home': '数独首页',
  'chrome.appearance': '外观',
  'chrome.theme.use': '使用{theme}主题',
  'chrome.theme.systemTitle': '跟随系统（{theme}）',
  'chrome.theme.title': '{theme}主题',
  'chrome.theme.system': '自动',
  'chrome.theme.systemName': '系统',
  'chrome.theme.light': '浅色',
  'chrome.theme.dark': '深色',
  'chrome.connection.connecting': '正在连接',
  'chrome.connection.unavailable': '服务暂不可用',
  'chrome.footer.tagline': '专注思考，不受打扰。',
  'chrome.footer.privacy': '隐私',
  'chrome.footer.terms': '条款',
  'chrome.footer.input': '支持键盘和触控',
};

const zhHant: MessageCatalog = {
  'common.language.label': '語言',
  'common.language.auto': '自動',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'accessibility.language.changed': '語言已變更為{language}。',
  'chrome.home': '數獨首頁',
  'chrome.appearance': '外觀',
  'chrome.theme.use': '使用{theme}主題',
  'chrome.theme.systemTitle': '跟隨系統（{theme}）',
  'chrome.theme.title': '{theme}主題',
  'chrome.theme.system': '自動',
  'chrome.theme.systemName': '系統',
  'chrome.theme.light': '淺色',
  'chrome.theme.dark': '深色',
  'chrome.connection.connecting': '正在連線',
  'chrome.connection.unavailable': '服務暫時無法使用',
  'chrome.footer.tagline': '專注思考，不受打擾。',
  'chrome.footer.privacy': '隱私',
  'chrome.footer.terms': '條款',
  'chrome.footer.input': '支援鍵盤和觸控',
};

export const catalogs: Record<SupportedLocale, MessageCatalog> = {
  en: sourceMessages,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
};
