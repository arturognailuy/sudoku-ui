import { ar } from './ar';
import { cs } from './cs';
import { de } from './de';
import { sourceMessages } from './en';
import { es } from './es';
import { fil } from './fil';
import { fr } from './fr';
import { hi } from './hi';
import { id } from './id';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { ms } from './ms';
import { nl } from './nl';
import { pl } from './pl';
import { pseudoCatalog } from './pseudo';
import { ptBR } from './pt-BR';
import { ru } from './ru';
import { sv } from './sv';
import { th } from './th';
import { tr } from './tr';
import type { IntlMessageCatalog, RuntimeLocale } from './types';
import { uk } from './uk';
import { vi } from './vi';
import { zhHans } from './zh-Hans';
import { zhHant } from './zh-Hant';

export { sourceMessages } from './en';
export { pseudoCatalog } from './pseudo';
export type {
  IntlMessageCatalog,
  MessageCatalog,
  MessageId,
  ParsedMessageCatalog,
  RuntimeLocale,
} from './types';

export const catalogs: Record<RuntimeLocale, IntlMessageCatalog> = {
  en: sourceMessages,
  fil,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  cs,
  'pt-BR': ptBR,
  es,
  sv,
  ja,
  ko,
  ms,
  nl,
  pl,
  fr,
  de,
  ru,
  th,
  ar,
  id,
  hi,
  it,
  tr,
  vi,
  uk,
  'en-XA': pseudoCatalog,
};
