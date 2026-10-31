import type { MessageCatalog } from './types';

export const pl: MessageCatalog = {
  'common.language.label': 'Język',
  'common.language.auto': 'Automatyczny',
  'common.language.en': 'angielski',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'Português (Brazylia)',
  'common.language.pt-BR.short': 'portugalski',
  'common.language.es': 'hiszpański',
  'common.language.ja': '日本語',
  'common.language.ko': '한국어',
  'common.language.fr': 'francuski',
  'common.language.de': 'niemiecki',
  'common.language.ru': 'Rosyjski',
  'common.language.ar': 'العربية',
  'common.language.id': 'Bahasa Indonezja',
  'common.language.id.short': 'Indonezja',
  'common.language.hi': 'हिन्दी',
  'common.language.it': 'włoski',
  'common.language.tr': 'turecki',
  'common.language.vi': 'Tiếng Việt',
  'common.language.uk': 'Українська',
  'common.language.nl': 'Holandia',
  'common.language.pl': 'Polski',
  'common.language.th': 'ไทย',
  'common.language.fil': 'Filipino',
  'common.language.ms': 'Bahasa Melayu',
  'common.language.ms.short': 'Melayu',
  'common.language.cs': 'Čeština',
  'common.language.sv': 'Svenska',
  'accessibility.language.changed': 'Język zmieniony na {language}.',
  'common.difficulty.easy': 'Łatwy',
  'common.difficulty.medium': 'Średni',
  'common.difficulty.hard': 'Trudny',
  'common.difficulty.expert': 'Ekspert',
  'common.difficulty.evil': 'Diabelski',
  'difficulty.easy.name': 'Łatwy',
  'difficulty.medium.name': 'Średni',
  'difficulty.hard.name': 'Trudny',
  'difficulty.expert.name': 'Ekspert',
  'difficulty.evil.name': 'Diabelski',
  'strategy.naked-single.name': 'Naked Single',
  'strategy.hidden-single.name': 'Hidden Single',
  'strategy.naked-pair.name': 'Naked Pair',
  'strategy.naked-triple.name': 'Naked Triple',
  'strategy.pointing-pair.name': 'Pointing Pairs / Box-Line Reduction',
  'strategy.hidden-pair.name': 'Hidden Pair',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.xy-wing.name': 'XY-Wing',
  'strategy.hidden-triple.name': 'Hidden Triple',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.swordfish.name': 'Swordfish',
  'strategy.naked-quad.name': 'Naked Quad',
  'strategy.simple-coloring.name': 'Simple Coloring',
  'strategy.hidden-quad.name': 'Hidden Quad',
  'strategy.xyz-wing.name': 'XYZ-Wing',
  'strategy.jellyfish.name': 'Jellyfish',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Unique Rectangle Type 1',
  'strategy.unique-rectangle-2.name': 'Unique Rectangle Type 2',
  'strategy.unique-rectangle-3.name': 'Unique Rectangle Type 3',
  'strategy.unique-rectangle-4.name': 'Unique Rectangle Type 4',
  'strategy.x-cycles.name': 'X-Cycles',
  'strategy.xy-chain.name': 'XY-Chain',
  'strategy.backtracker.name': 'Backtracker',
  'hint.value-correction.title': 'Napraw tę wartość',
  'hint.candidate-correction.title': 'Popraw kandydatów w tej komórce',
  'hint.value-correction.summary':
    'Wartość w {cell} jest sprzeczna z zagadką. Wyczyść je przed kontynuowaniem.',
  'hint.candidate-correction.summary':
    'Przed kontynuowaniem odbuduj kandydatów w {cell} na podstawie zaakceptowanych wartości w wierszu, kolumnie i bloku.',
  'hint.strategy.summary':
    'Wykonaj kroki {steps}, aby zrozumieć i zastosować {strategy}.',
  'hint.value-correction.observe':
    'Sprawdź {cell}. Jego wartość koliduje z planszą.',
  'hint.value-correction.conclude':
    'Wyczyść wartość w {cell}, aby można było następnie sprawdzić siatkę kandydatów.',
  'hint.candidate-correction.observe':
    'Sprawdź {cell}. Kandydaci nie pasują do planszy.',
  'hint.candidate-correction.compare':
    'Zacznij tę komórkę od nowa na podstawie zaakceptowanych wartości w wierszu, kolumnie i bloku.',
  'hint.candidate-correction.conclude':
    'Ustaw kandydatów w {cell} na wszystkie cyfry dozwolone przez wiersz, kolumnę i blok.',
  'hint.coloring.pair':
    'Sprawdź jednostkę {unit}. Jedynymi możliwymi miejscami dla cyfry {digit} są komórki {cells}. Dokładnie jedna z nich zawiera tę cyfrę, dlatego oznacz przeciwne możliwości jako A i B.',
  'hint.coloring.chain':
    'Przechodź kolejno po silnych połączeniach, z których każde łączy dwa jedyne miejsca dla cyfry {digit} w danym wierszu, kolumnie lub bloku. Oznaczenia w łańcuchu muszą występować naprzemiennie: A dla {group_a} i B dla {group_b}.',
  'hint.coloring.alternatives':
    'Albo cyfra {digit} występuje we wszystkich komórkach grupy A i w żadnej komórce grupy B, albo odwrotnie. Eliminację można przeprowadzić bez ustalania, który wariant jest prawidłowy.',
  'hint.coloring.elimination':
    'Komórka {cell} widzi zarówno pozycję A — {group_a_cell} — jak i pozycję B — {group_b_cell}. Jedna z tych pozycji musi zawierać cyfrę {digit}, więc niezależnie od prawidłowego kolorowania wskazana komórka widzi komórkę z tą cyfrą i sama nie może jej zawierać.',
  'hint.coloring.apply':
    'Usuń {candidates}. Każda komórka docelowa widzi po jednej pozycji z grupy A i z grupy B. Niezależnie od prawidłowego wariantu widzi więc komórkę zawierającą cyfrę {colored_digit} i nie może zachować tego kandydata. Ten układ nazywa się {strategy}.',
  'hint.coloring.place':
    'Połączeni kandydaci na {colored_digit} wymuszają wynik. Umieść {digit} w {cell}. Ten wzór to {strategy}.',
  'hint.x-cycle.opening':
    'Sprawdź jednostkę {unit}. Jedynymi możliwymi miejscami dla cyfry {digit} są komórki {cells}, więc jedna z nich musi zawierać cyfrę {digit}.',
  'hint.x-cycle.assume':
    'Załóżmy, że komórka {start} nie zawiera cyfry {digit}. Wtedy komórka {forced} musi zawierać cyfrę {digit}. Cyfra {digit} zostaje przez to wykluczona z komórki {blocked}, a jednostka {unit} wymusza wpisanie cyfry {digit} do komórki {result}.',
  'hint.x-cycle.follow':
    'Komórka {true_cell} zawiera cyfrę {digit}, więc komórka {blocked} nie może zawierać cyfry {digit}. Jednostka {unit} wymusza zatem wpisanie cyfry {digit} do komórki {result}.',
  'hint.x-cycle.close':
    'Komórka {true_cell} zawiera cyfrę {digit}, dlatego komórka {blocked} nie może zawierać cyfry {digit}. W jednostce {unit} jedynym pozostałym miejscem dla cyfry {digit} jest komórka {result}.',
  'hint.x-cycle.place':
    'Założenie, że komórka {assumption} nie zawiera cyfry {digit}, prowadzi do wniosku, że komórka {cell} musi zawierać cyfrę {digit}. Prowadzi to do sprzeczności, więc założenie było fałszywe. Wpisz {digit} do komórki {cell}. Ten układ nazywa się {strategy}.',
  'hint.xy-chain.start':
    'Jedynymi kandydatami komórki {cell} są {first_digit} i {second_digit}. Albo zawiera ona cyfrę {endpoint_digit}, albo — jeśli nie zawiera cyfry {endpoint_digit} — musi zawierać cyfrę {other_digit}.',
  'hint.xy-chain.assume':
    'Załóżmy, że komórka {start} nie zawiera cyfry {endpoint_digit}. Musi wtedy przyjąć cyfrę {start_value}. Komórki {start} i {middle} należą do tej samej jednostki — {first_unit} — więc komórka {middle} nie może zawierać cyfry {start_value} i musi przyjąć {middle_value}. W drugiej jednostce — {second_unit} — wyklucza to cyfrę {middle_value} z komórki {result}, która musi zatem przyjąć {result_value}.',
  'hint.xy-chain.follow':
    'Komórka {start} zawiera cyfrę {start_value}. Komórka {middle} należy z nią do jednostki {first_unit}, więc nie może zawierać cyfry {start_value} i musi przyjąć {middle_value}. Komórki {middle} i {result} należą do jednostki {second_unit}, dlatego komórka {result} nie może zawierać cyfry {middle_value} i musi przyjąć {result_value}.',
  'hint.xy-chain.reach':
    'Ponieważ komórka {start} zawiera cyfrę {start_value}, komórka końcowa {endpoint} nie może zawierać cyfry {shared_digit}. Jej jedynym innym kandydatem jest {endpoint_digit}, więc musi przyjąć cyfrę {endpoint_digit}.',
  'hint.xy-chain.place':
    'Jeśli pierwszy koniec łańcucha, {first_endpoint}, zawiera cyfrę {endpoint_digit}, to właśnie tam znajduje się {endpoint_digit}. Jeśli nie zawiera cyfry {endpoint_digit}, łańcuch wymusza {endpoint_digit} w drugim końcu — {second_endpoint}. Co najmniej jeden koniec zawiera zatem cyfrę {endpoint_digit}. Komórka {cell} jest powiązana z oboma końcami, więc nie może zawierać kandydata {endpoint_digit}. Wpisz do niej {digit}. Ten układ nazywa się {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Spójrz na komórkę {cell}. Cyfry {excluded_digits} występują już w jej wierszu, kolumnie lub bloku.',
  'hint.naked-single.only':
    'W komórce {cell} można więc wpisać tylko cyfrę {digit}.',
  'hint.naked-single.apply':
    'Wpisz {digit} do komórki {cell}. Komórka z jednym kandydatem tworzy układ {strategy}.',
  'hint.hidden-single.inspect':
    'Sprawdź wskazaną jednostkę — {unit} — i znajdź możliwe miejsca dla cyfry {digit}.',
  'hint.hidden-single.blockers':
    'Cyfra {digit} jest już wpisana w komórkach {blockers}. Wyklucza to cyfrę {digit} ze wszystkich pozostałych pustych komórek wskazanej jednostki — {unit}.',
  'hint.hidden-single.only':
    'Jedynym pozostałym miejscem dla cyfry {digit} jest komórka {cell}.',
  'hint.hidden-single.apply':
    'Wpisz {digit} do komórki {cell}. Gdy w wierszu, kolumnie lub bloku dana cyfra ma tylko jedno możliwe miejsce, powstaje układ {strategy}.',
  'hint.naked-pair.inspect':
    'Zacznij od jednostki {unit}. Komórka {cell} ma tylko dwóch kandydatów: {first_digit} i {second_digit}.',
  'hint.naked-pair.match':
    'Komórka {cell} ma tę samą parę kandydatów: {first_digit} i {second_digit}.',
  'hint.naked-pair.reserve':
    'Te dwie komórki muszą przyjąć cyfry {digits} w dowolnej kolejności. Kandydat {digit} nie może więc pozostać w żadnej innej komórce wskazanej jednostki — {unit}.',
  'hint.naked-pair.apply':
    'Usuń {candidates}. Ten krok nie wpisuje żadnej cyfry. Powstały układ to {strategy}.',
  'hint.naked-triple.first':
    'W jednostce {unit} komórka {cell} ma tylko dwóch kandydatów: {first_digit} i {second_digit}.',
  'hint.naked-triple.second':
    'Weź pod uwagę także komórkę {cell}. Jej jedynymi kandydatami są {first_digit} i {second_digit}.',
  'hint.naked-triple.third':
    'Dołącz komórkę {cell}, której jedynymi kandydatami są {first_digit} i {second_digit}. W tych trzech komórkach występują łącznie tylko cyfry {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Trzy wskazane komórki muszą przyjąć cyfry {reserved_digits} w dowolnej kolejności. Z komórki {cell} można zatem usunąć {removed_digits}; pozostanie tylko {remaining_digit}.',
  'hint.naked-triple.apply':
    'Wpisz {digit} do komórki {cell}. Trzy komórki, których kandydaci ograniczają się do tych samych trzech cyfr, tworzą układ {strategy}.',
  'hint.naked-quad.cell':
    'Sprawdź jednostkę {unit}. Jedynymi kandydatami komórki {cell} są cyfry {digits}.',
  'hint.subset-reservation.observe':
    'W {unit} komórki {cells} zawierają tylko {digits}.',
  'hint.subset-reservation.explain':
    'Wyróżnione komórki w jednostce {unit} muszą przyjąć cyfry {digits}. Cyfry te można więc usunąć ze wszystkich pozostałych komórek tej jednostki.',
  'hint.subset-reservation.apply':
    'Usuń {candidates}. Ten układ to {strategy}.',
  'hint.subset-reservation.place':
    'Wpisz {digit} do komórki {cell}. Ten układ to {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Ponieważ {digits} są ograniczone do tych pól w {unit}, pola te nie mogą zawierać innych kandydatów.',
  'hint.hidden-subset-confinement.apply':
    'Usuń {candidates} z tych pól. Ten układ to {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Wpisz {digit} w {cell} po usunięciu pozostałych kandydatów. Ten układ to {strategy}.',
  'hint.hidden-pair.first':
    'Sprawdź jednostkę {unit}. Kandydat {digit} występuje w niej tylko w komórkach {cells}.',
  'hint.hidden-pair.second':
    'Kandydat {digit} również występuje wyłącznie w tych samych dwóch komórkach. Cyfry {digits} muszą zatem zająć komórki {cells} w dowolnej kolejności.',
  'hint.hidden-pair.consequence':
    'Te dwie komórki są zarezerwowane dla cyfr {digits}, dlatego należy usunąć z nich wszystkich pozostałych kandydatów: {candidates}.',
  'hint.hidden-pair.apply':
    'Usuń {candidates}. Ten układ nazywa się {strategy}.',
  'hint.hidden-triple.first':
    'Sprawdź jednostkę {unit}. Kandydat {digit} występuje w niej tylko w komórkach {cells}.',
  'hint.hidden-triple.second':
    'W jednostce {unit} cyfry {digits} mogą wystąpić wyłącznie w komórkach {cells}.',
  'hint.hidden-triple.third':
    'W jednostce {unit} cyfry {digits} również mogą wystąpić wyłącznie w komórkach {cells}.',
  'hint.hidden-triple.consequence':
    'Cyfry {digits} są ograniczone do wskazanych komórek jednostki {unit}, dlatego pozostałych kandydatów w tych komórkach można usunąć.',
  'hint.hidden-triple.apply':
    'Usuń {candidates} ze wskazanych komórek. Ten układ nazywa się {strategy}.',
  'hint.hidden-quad.first':
    'Sprawdź jednostkę {unit}. Kandydat {digit} występuje w niej tylko w komórkach {cells}.',
  'hint.hidden-quad.second':
    'W jednostce {unit} cyfry {digits} mogą wystąpić wyłącznie w komórkach {cells}.',
  'hint.hidden-quad.third':
    'W jednostce {unit} cyfry {digits} również mogą wystąpić wyłącznie w komórkach {cells}.',
  'hint.hidden-quad.fourth':
    'W jednostce {unit} cyfry {digits} także mogą wystąpić wyłącznie w komórkach {cells}.',
  'hint.hidden-quad.consequence':
    'Cyfry {digits} są ograniczone do wskazanych komórek jednostki {unit}, dlatego pozostałych kandydatów w tych komórkach można usunąć.',
  'hint.hidden-quad.apply':
    'Usuń {candidates} ze wskazanych komórek. Ten układ nazywa się {strategy}.',
  'hint.pointing-pair.first':
    'Zacznij od kandydata {digit} w komórce {cell}. Jednostka źródłowa to {source_unit}. Znajdź w tym bloku wszystkie pozostałe miejsca dla cyfry {digit}.',
  'hint.pointing-pair.second':
    'W jednostce {source_unit} jedynym innym miejscem dla cyfry {digit} jest komórka {cell}. Obie pozycje należą do tej samej jednostki — {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'W jednostce źródłowej {source_unit} cyfra {digit} musi zająć jedną z dwóch wskazanych pozycji należących do jednostki {intersection_unit}. Usuń więc {candidate} z pozostałych komórek jednostki {intersection_unit}.',
  'hint.pointing-pair.apply':
    'W komórce {cell} pozostał tylko kandydat {digit}. Wpisz tam {digit}. Ten układ nazywa się {strategy}.',
  'hint.intersection-confinement.observe':
    'W {source_unit} kandydat {digit} jest ograniczony do {intersection_unit} w {cells}.',
  'hint.intersection-confinement.explain':
    'Ponieważ każdy {digit} w {source_unit} leży w {intersection_unit}, komórki poza źródłem, ale wewnątrz przecięcia nie mogą go zawierać.',
  'hint.intersection-confinement.apply':
    'Usuń kandydata {digit} z {cells}. Ten wzór to {strategy}.',
  'hint.intersection-confinement.place':
    'Po zastosowaniu skrzyżowania umieść {digit} w {cell}. Ten wzór to {strategy}.',
  'hint.fish-confinement.observe':
    'W jednostkach bazowych {base_units} kandydat {digit} może wystąpić wyłącznie w jednostkach pokrywających {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandydat {digit} jest ograniczony z {base_units} do {cover_units}, więc te jednostki pokrywające muszą otrzymać go przez podświetlone pozycje bazowe.',
  'hint.swordfish.consequence':
    'W każdej z trzech jednostek bazowych {base_units} trzeba wpisać jedną cyfrę {digit} w obrębie jednostek {cover_units}. Te trzy wpisy zajmą wszystkie trzy jednostki pokrywające, dlatego wszystkie pozostałe wystąpienia kandydata {digit} można z nich usunąć.',
  'hint.jellyfish.consequence':
    'W każdej z czterech jednostek bazowych {base_units} trzeba wpisać jedną cyfrę {digit} w obrębie jednostek {cover_units}. Te cztery wpisy zajmą wszystkie cztery jednostki pokrywające, dlatego wszystkie pozostałe wystąpienia kandydata {digit} można z nich usunąć.',
  'hint.fish-confinement.apply':
    'Usuń kandydata {digit} z komórek {cells}. Ten układ to {strategy}.',
  'hint.x-wing.first':
    'W jednostce bazowej {base_unit} kandydat {digit} występuje wyłącznie w dwóch jednostkach pokrywających: {cover_units}.',
  'hint.x-wing.second':
    'W drugiej jednostce bazowej — {base_unit} — kandydat {digit} także występuje wyłącznie w jednostkach {cover_units}. Obie jednostki bazowe mają więc te same dwie jednostki pokrywające.',
  'hint.x-wing.consequence':
    'W każdej z jednostek bazowych {base_units} trzeba wpisać jedną cyfrę {digit} w obrębie jednostek {cover_units}. Te dwa wpisy cyfry {digit} zajmą obie jednostki pokrywające, dlatego wszystkie pozostałe wystąpienia kandydata {digit} można z nich usunąć.',
  'hint.x-wing.apply':
    'Usuń kandydata {digit} z komórek {cells}. Ten układ nazywa się {strategy}.',
  'hint.pivot-wing.observe':
    'W {pivot} kandydaci {pivot_digits} łączą komórki skrzydełkowe w {wing_cells}.',
  'hint.pivot-wing.explain':
    'Każde skrzydło w {wing_cells} ma jednego kandydata z osią w {pivot}, a oba skrzydła zawierają {shared_digit}. Niezależnie od tego, który z kandydatów obrotu jest prawdziwy, jedno skrzydło musi zawierać {shared_digit}.',
  'hint.xy-wing.pivot':
    'Jedynymi kandydatami komórki centralnej {pivot} są {digits}, więc musi ona przyjąć jedną z tych cyfr.',
  'hint.xy-wing.case':
    'Jeśli komórka {pivot} przyjmie cyfrę {pivot_digit}, komórka skrzydła {wing} nie może zawierać cyfry {pivot_digit}. Jedynym innym kandydatem komórki {wing} jest {shared_digit}, więc musi ona przyjąć cyfrę {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Niezależnie od tego, który kandydat okaże się prawidłowy w komórce {pivot}, co najmniej jedna z komórek skrzydeł {wing_cells} musi zawierać cyfrę {shared_digit}. Nie trzeba ustalać, która z nich.',
  'hint.xy-wing.apply':
    '{cells} widzą oba skrzydła {wing_cells}. Ponieważ co najmniej jedno ma {shared_digit}, usuń {shared_digit} z tych pól. Ten układ to {strategy}.',
  'hint.xy-wing.place':
    'Komórka {cell} jest powiązana z obiema komórkami skrzydła: {wing_cells}. Ponieważ co najmniej jedna z nich zawiera cyfrę {shared_digit}, w komórce {cell} nie można wpisać tej cyfry. Pozostaje kandydat {digit}, więc wpisz go. Ten układ nazywa się {strategy}.',
  'hint.xyz-wing.pivot':
    'Jedynymi kandydatami komórki centralnej {pivot} są {digits}, więc musi ona przyjąć jedną z tych cyfr.',
  'hint.xyz-wing.case':
    'Jeśli komórka {pivot} przyjmie cyfrę {pivot_digit}, komórka skrzydła {wing} nie może zawierać cyfry {pivot_digit}, ponieważ obie należą do jednostki {unit}. Jedynym innym kandydatem komórki {wing} jest {shared_digit}, więc musi ona przyjąć cyfrę {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Jeśli komórka {pivot} przyjmie cyfrę {shared_digit}, wspólna cyfra {shared_digit} znajdzie się bezpośrednio w komórce centralnej.',
  'hint.xyz-wing.guarantee':
    'Niezależnie od tego, który kandydat okaże się prawidłowy w komórce {pivot}, co najmniej jedna z komórek układu {pattern_cells} musi zawierać cyfrę {shared_digit}. Nie trzeba ustalać, która z nich.',
  'hint.xyz-wing.apply':
    'Komórka docelowa {target} należy wraz z komórką {first_pattern_cell} do jednostki {first_unit}. Wraz z komórką {second_pattern_cell} należy też do jednostki {second_unit}, a wraz z komórką {third_pattern_cell} — do jednostki {third_unit}. Widzi zatem wszystkie trzy komórki układu. Co najmniej jedna z nich zawiera cyfrę {shared_digit}, dlatego komórka {target} nie może jej zawierać. Usuń z niej kandydata {shared_digit}. Ten układ nazywa się {strategy}.',
  'hint.strong-link-wing.observe':
    'Jedynymi kandydatami obu komórek skrzydłowych {wing_cells} są {digits}.',
  'hint.strong-link-wing.bridge':
    'Sprawdź jednostkę {unit}. Kandydat {link_digit} występuje w niej tylko w komórkach {link_cells}, więc co najmniej jedna z nich musi zawierać cyfrę {link_digit}.',
  'hint.strong-link-wing.force':
    'Jeśli komórka {first_link_cell} zawiera cyfrę {link_digit}, komórka {first_wing_cell} nie może zawierać cyfry {link_digit} i musi przyjąć cyfrę {forced_digit}. Jeśli cyfrę {link_digit} zawiera komórka {second_link_cell}, wówczas komórka {second_wing_cell} musi przyjąć cyfrę {forced_digit}. Co najmniej jedna z tych dwóch komórek zawiera zatem cyfrę {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Co najmniej jedna z komórek {wing_cells} ma wartość {digit}. Usuń kandydata {digit} z {cells}, ponieważ te komórki widzą obie. Ten układ nazywa się {strategy}.',
  'hint.strong-link-wing.place':
    'Co najmniej jedna z komórek skrzydła {wing_cells} zawiera cyfrę {removed_digit}. Komórka {cell} jest powiązana z obiema, dlatego usuń z niej kandydata {removed_digit} i wpisz {digit}. Ten układ nazywa się {strategy}.',
  'hint.relational-wing.apply':
    'Usuń kandydata {digit} z {cells}. Ten wzór to {strategy}.',
  'hint.relational-wing.place':
    'Usuń kandydata {removed_digit} z {cell}, więc umieść tam {digit}. Ten wzór to {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Komórka wyjątkowa to {cell}. Wszystkie pozostałe nierozwiązane komórki — jest ich {count} — mają dokładnie po dwóch kandydatów.',
  'hint.bug-plus-one.trivalue':
    'Komórka {cell} ma trzech kandydatów: {digits}. Ma więc o jednego kandydata więcej niż każda inna nierozwiązana komórka.',
  'hint.bug-plus-one.unit-count':
    'Sprawdź jednostkę {unit}. Kandydat {digit} ma w niej trzy możliwe pozycje, a każda z cyfr {other_digits} ma tylko dwie.',
  'hint.bug-plus-one.explain':
    'W jednostkach {units} kandydat {digit} ma o jedną możliwą pozycję więcej niż cyfry {other_digits}. Gdyby komórka {cell} nie zawierała cyfry {digit}, wszystkie nierozwiązane komórki miałyby dokładnie po dwóch kandydatów, a łamigłówka utraciłaby jednoznaczność. Komórka {cell} musi więc zawierać cyfrę {digit}.',
  'hint.bug-plus-one.place':
    'Wpisz {digit} do komórki {cell}. Ten dodatkowy kandydat pozwala zachować jednoznaczność rozwiązania i tworzy układ {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Cztery nierozwiązane komórki {cells} tworzą narożniki prostokąta.',
  'hint.unique-rectangle.pair-corners':
    'W komórkach {cells} występuje dokładnie para kandydatów {digits}.',
  'hint.unique-rectangle.third-corner':
    'Jedynymi kandydatami komórki {cell} są cyfry {digits}. Trzy narożniki mają więc tę samą parę.',
  'hint.unique-rectangle.expanded-corner':
    'Kandydatami komórki {cell} są {digits}, w tym jedyny dodatkowy kandydat {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Gdyby komórka {cell} przyjęła którąkolwiek cyfrę z pary {digits}, te dwie cyfry można byłoby zamienić miejscami w czterech narożnikach bez naruszania żadnego wiersza, kolumny ani bloku. Powstałoby drugie rozwiązanie, dlatego usuń {digits} i pozostaw {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'W komórce {cell} pozostała tylko cyfra {digit}. Wpisz ją. Ten układ to {strategy}.',
  'hint.unique-rectangle.observe':
    'Komórki w {cells} tworzą prostokąt i wszystkie zawierają parę {digits}.',
  'hint.unique-rectangle.type1':
    'Trzy rogi zawierają dokładnie {digits}. Jeżeli w {cell} użyto również którejkolwiek cyfry, prostokąt umożliwiłby dwa wymienne rozwiązania.',
  'hint.unique-rectangle.type2-first-expanded':
    'Kandydatami komórki {cell} są {pair} oraz dodatkowo {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'Kandydatami komórki {cell} również są {pair} oraz {extra_digit}. Oba rozszerzone narożniki mają zatem wspólnego dodatkowego kandydata {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Co najmniej jedna z komórek {cells} musi zawierać cyfrę {extra_digit}; w przeciwnym razie wartości pary można byłoby zamienić miejscami, uzyskując drugie rozwiązanie. Komórka {target} widzi obie te komórki, więc nie może zawierać cyfry {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'W komórce {cell} pozostała tylko cyfra {digit}. Wpisz ją. Ten układ to {strategy}.',
  'hint.unique-rectangle.type2':
    'Dwa rozwinięte rogi w {cells} mają wspólnego dodatkowego kandydata {digit}, więc żadna komórka, która widzi oba rogi, nie może zawierać {digit}.',
  'hint.unique-rectangle.type3':
    'Dodatkowe cyfry {digits} w prostokącie łączą się z {cells} jako zarezerwowany podzbiór w {unit}, więc cyfry te można usunąć w innym miejscu tej jednostki.',
  'hint.unique-rectangle.type3-first-expanded':
    'Kandydatami komórki {cell} są {pair} oraz dodatkowo {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Kandydatami komórki {cell} również są {pair} oraz dodatkowo {extra_digit}. Co najmniej jeden rozszerzony narożnik musi przyjąć dodatkową cyfrę; w przeciwnym razie wartości z pary {pair} mogłyby zamienić się miejscami w czterech narożnikach i utworzyć drugie rozwiązanie.',
  'hint.unique-rectangle.type3-partner':
    'Jedynymi kandydatami komórki {cell} są cyfry {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Jedna z komórek narożnych {corners} musi przyjąć jedną z cyfr {digits}, a komórka partnerska {partner} — drugą. Cyfry te są zarezerwowane w jednostce {unit}, dlatego komórka {target} nie może zawierać kandydata {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'W komórce {cell} pozostała tylko cyfra {digit}. Wpisz ją. Ten układ to {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Kandydatami komórki {cell} są {pair} oraz dodatkowo {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Kandydatami komórki {cell} również są {pair} oraz dodatkowo {extra_digit}. Oba rozszerzone narożniki zawierają zatem parę prostokąta.',
  'hint.unique-rectangle.type4':
    'W jednostce {unit} kandydat {digit} występuje w komórkach {cells} jako para sprzężona. Kandydat {removed_digit} nie może więc znaleźć się w żadnym rozszerzonym narożniku, ponieważ umożliwiłoby to zamianę cyfr i utworzenie drugiego rozwiązania.',
  'hint.unique-rectangle.type4-apply':
    'Usuń z komórek {cells} kandydata wskazanego w poprzednim kroku. Pozostaw w nich kandydata {digit}, który tworzy parę sprzężoną. Ten układ nazywa się {strategy}.',
  'hint.unique-rectangle.apply':
    'Usuń {candidates}. Ta relacja wyjątkowości to {strategy}.',
  'hint.unique-rectangle.place':
    'Umieść {digit} w {cell} po zastosowaniu relacji niepowtarzalności. Ten wzór to {strategy}.',
  'hint.implication-chain.observe':
    'Zacznij od {cell}, która ma tylko kandydatów {digits}.',
  'hint.implication-chain.explain':
    '{from} i {to} mają wspólnego kandydata i widzą się, więc nie może on być prawdziwy w obu; implikacja biegnie dalej.',
  'hint.implication-chain.apply':
    'Jeden z końców musi zawierać {digit}, więc usuń kandydata {digit} z {cells}. Ten układ to {strategy}.',
  'hint.narration.apply': 'Zastosuj odliczenie:',
  'hint.narration.look-at': 'Przyglądać się',
  'hint.narration.value-conflict':
    '. Wprowadzona wartość jest sprzeczna z łamigłówką.',
  'hint.narration.clear-value': 'Wyczyść wartość w',
  'hint.narration.clear-value-tail':
    'aby następnie można było sprawdzić siatkę kandydatów.',
  'hint.narration.candidate-inconsistent':
    '. Stan kandydatów jest niezgodny z planszą.',
  'hint.narration.reset-candidates': 'Ustaw ponownie kandydatów w ',
  'hint.narration.reset-candidates-tail':
    ' na wszystkie cyfry dozwolone przez zaakceptowane wartości w wierszu, kolumnie i bloku.',
  'hint.narration.only-candidate': '. Ma tylko jednego kandydata:',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'Ponieważ żadna inna cyfra nie może wejść',
  'hint.narration.place': ', miejsce',
  'hint.narration.naked-single-tail': 'w tym polu. To technika Naked Single.',
  'hint.narration.in-unit': 'W',
  'hint.narration.consider-digit': ', zastanów się gdzie',
  'hint.narration.can-appear': 'może się pojawić.',
  'hint.narration.other-cells': 'Co druga pusta komórka w',
  'hint.narration.cannot-contain': 'nie może zawierać',
  'hint.narration.leaving-only': ', tylko wyjeżdżając',
  'hint.narration.because-unit': 'Ponieważ',
  'hint.narration.still-needs': 'nadal potrzebuje',
  'hint.narration.only-cell': 'I',
  'hint.narration.hidden-single-tail': 'jest jedyną możliwą komórką, miejscem',
  'hint.narration.hidden-single-name': 'w tym polu. To technika Hidden Single.',
  'hint.narration.place-result': 'miejsce',
  'hint.narration.in': 'W',
  'hint.narration.remove': 'usunąć kandydata',
  'hint.narration.from': 'z',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. To jest wynik {strategy}.',
  'welcome.eyebrow': 'Nowa łamigłówka',
  'welcome.title': 'Wybierz poziom trudności',
  'welcome.lede': 'Wybierz poziom i rozpocznij, gdy będziesz gotowy.',
  'welcome.difficulty': 'Trudność',
  'welcome.start': 'Rozpocznij łamigłówkę: {difficulty}',
  'welcome.starting': 'Uruchamianie łamigłówki: {difficulty}…',
  'welcome.preview': 'Podgląd łamigłówki Sudoku',
  'loading.initial': 'Ładowanie układanki…',
  'loading.account.eyebrow': 'Konto',
  'loading.account.title': 'Zapisywanie układanki na Twoim koncie…',
  'loading.account.detail':
    'Twoje postępy pozostają na tym urządzeniu do czasu potwierdzenia zapisania konta.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Wracając do strony głównej…',
  'loading.home.detail':
    'Sprawdzanie najnowszego interfejsu przed wyświetleniem wyboru poziomu.',
  'loading.restart.eyebrow': 'Ta sama zagadka',
  'loading.restart.title': 'Zaczynając od nowa tę łamigłówkę…',
  'loading.restart.detail':
    'Trzymanie starej deski zamkniętej do czasu, aż nowa próba będzie gotowa.',
  'loading.new.eyebrow': 'Nowa łamigłówka',
  'loading.new.title': 'Przygotowywanie planszy: {difficulty}…',
  'loading.new.detail':
    'Tworzę teraz nową łamigłówkę. Za chwilę będziesz grać.',
  'confirmation.home.eyebrow': 'Powrót do domu?',
  'confirmation.home.title': 'Zostaw tę zagadkę',
  'confirmation.home.description':
    'Twoje obecne postępy nie będą już otwierać się automatycznie na tym urządzeniu.',
  'confirmation.home.cancel': 'Graj dalej',
  'confirmation.home.confirm': 'Wróć na stronę główną',
  'confirmation.restart.eyebrow': 'Zacząć od nowa?',
  'confirmation.restart.title': 'Zacznij od nowa',
  'confirmation.restart.description':
    'Odtwórz tę łamigłówkę od jej pierwotnej wersji lub wybierz inną łamigłówkę.',
  'confirmation.restart.replay.title': 'Powtórz tę łamigłówkę',
  'confirmation.restart.replay.description':
    'Zachowaj te dane i zresetuj tę próbę.',
  'confirmation.restart.different.title': 'Zagraj w inną łamigłówkę',
  'confirmation.restart.different.description':
    'Wybierz poziom dla nowej planszy.',
  'confirmation.restart.different.level': 'Poziom dla różnych puzzli',
  'common.cancel': 'Anulować',
  'account.confirm.deleteGame.eyebrow': 'Usunąć zapisaną grę?',
  'account.confirm.deleteGame.title': 'Usuń tę grę',
  'account.confirm.deleteGame.description':
    'Ta łamigłówka i jej postępy zostaną trwale usunięte z Moich gier. Tego nie można cofnąć.',
  'account.confirm.deleteGame.action': 'Usuń grę',
  'account.confirm.deleteGame.pending': 'Usuwanie zapisanej gry…',
  'account.confirm.deleteAll.eyebrow': 'Usunąć każdą zapisaną grę?',
  'account.confirm.deleteAll.title': 'Usuń wszystkie gry',
  'account.confirm.deleteAll.description':
    'Każda łamigłówka i cały postęp w Moich grach zostaną trwale usunięte. Tego nie można cofnąć.',
  'account.confirm.deleteAll.action': 'Usuń wszystkie gry',
  'account.confirm.deleteAll.pending': 'Usuwanie wszystkich gier…',
  'account.confirm.revoke.eyebrow': 'Bezpieczeństwo konta',
  'account.confirm.revoke.title': 'Wyloguj się wszędzie',
  'account.confirm.revoke.description':
    'Spowoduje to wylogowanie Cię na każdym urządzeniu, łącznie z tym. Twoje konto i zapisane gry pozostaną.',
  'account.confirm.revoke.action': 'Wyloguj się wszędzie',
  'account.confirm.revoke.pending': 'Wylogowywanie się wszędzie…',
  'account.confirm.deleteAccount.eyebrow': 'Działanie stałe',
  'account.confirm.deleteAccount.title': 'Usuń swoje konto',
  'account.confirm.deleteAccount.description':
    'Twoja tożsamość, każda sesja logowania i wszystkie zapisane gry zostaną trwale usunięte. Udostępniony katalog puzzli pozostaje nienaruszony.',
  'account.confirm.deleteAccount.action': 'Usuń konto',
  'account.confirm.deleteAccount.pending': 'Usuwanie konta…',
  'account.confirm.typeEmail': 'Wpisz {email}, aby potwierdzić',
  'account.label': 'Konto',
  'account.continue.title': 'Kontynuuj na innych urządzeniach',
  'account.continue.detail':
    'Zaloguj się, aby automatycznie zapisać aktywną grę w tej przeglądarce.',
  'account.signIn': 'Zaloguj się za pomocą Google',
  'account.signIn.short': 'Zalogować się',
  'game.title': 'Poziom: {difficulty}',
  'game.statusActions': 'Stan gry i działania',
  'game.elapsed': 'Czas, który upłynął',
  'game.mistakes': 'Błędy {count}',
  'game.mistakes.label': '{count, plural, one {# błąd} other {# błędy} }',
  'game.resume': 'Wznawiać',
  'game.pause': 'Pauza',
  'status.resumed': 'Zagadka wznowiona.',
  'status.paused': 'Zagadka wstrzymana.',
  'status.restarted':
    'Łamigłówka uruchomiona ponownie. Świeża próba, ta sama łamigłówka.',
  'status.hintClosed':
    'Podpowiedź zamknięta. Twoja zagadka pozostaje niezmieniona.',
  'status.strategyApplied':
    'Zastosowano strategię. Możesz to cofnąć w jednym kroku.',
  'status.correctionApplied':
    'Zastosowano korektę. Możesz to cofnąć w jednym kroku.',
  'status.hintAlreadyApplied':
    'Ta wskazówka jest już odzwierciedlona na tablicy.',
  'status.hintRefreshed':
    'Tablica się zmieniła, więc podpowiedź została odświeżona.',
  'status.accountSaved': 'Gra zapisana na Twoim koncie.',
  'status.waitBeforeLeaving':
    'Zanim opuścisz tę łamigłówkę, poczekaj na oczekujące ruchy.',
  'status.selectEditableCell':
    'Przed wprowadzeniem numeru wybierz edytowalną komórkę.',
  'status.savingAccount': 'Zapisywanie gry lokalnej na Twoim koncie…',
  'status.restoring': 'Przywracam puzzle…',
  'status.restored': 'Twoja lokalna łamigłówka została przywrócona.',
  'status.puzzleReady': 'Łamigłówka gotowa — poziom: {difficulty}.',
  'status.puzzleRestored': 'Łamigłówka przywrócona — poziom: {difficulty}.',
  'status.waitBeforeStarting':
    'Poczekaj na oczekujące ruchy przed rozpoczęciem kolejnej układanki.',
  'status.solved': 'Rozwiązany! Piękna praca.',
  'status.moveSaved': 'Przenieś zapisany.',
  'status.waitBeforeHint':
    'Poczekaj na oczekujące ruchy przed otwarciem podpowiedzi.',
  'status.hintReady': 'Wskazówka gotowa. Zacznij od kroku 1.',
  'status.openingSaved': 'Otwieram zapisaną grę…',
  'status.savedDeleted': 'Zapisana gra została usunięta.',
  'status.allDeleted': 'Wszystkie zapisane gry zostały usunięte.',
  'status.signedOut':
    'Wylogowałem się. Gry na Twoim koncie pozostają zapisane.',
  'status.revoked':
    'Wszędzie się wylogowałem. Zaloguj się ponownie, aby kontynuować.',
  'status.accountDeleted': 'Konto i zapisane gry usunięte.',
  'retry.saving': 'Spróbuj zapisać ponownie',
  'retry.restoring': 'Spróbuj przywrócić ponownie',
  'retry.connection': 'Sprawdź połączenie',
  'retry.starting': 'Spróbuj zacząć jeszcze raz',
  'retry.move': 'Ponów próbę ruchu',
  'retry.hint': 'Spróbuj ponownie podpowiedzi',
  'retry.time': 'Spróbuj ponownie, oszczędzając czas',
  'retry.progress': 'Spróbuj ponownie zapisać postęp',
  'retry.leaving': 'Spróbuj ponownie wyjść',
  'retry.opening': 'Spróbuj otworzyć ponownie',
  'retry.deleting': 'Spróbuj usunąć ponownie',
  'retry.signOut': 'Spróbuj wylogować się ponownie',
  'retry.revoke': 'Spróbuj ponownie wylogować się wszędzie',
  'retry.deleteAccount': 'Spróbuj ponownie usunąć konto',
  'error.accountSave':
    'Twoja gra lokalna jest bezpieczna, ale nie można jej zapisać na koncie.',
  'error.restoring': 'Nie udało się przywrócić Twojej układanki.',
  'error.connection':
    'Usługa gry nie była osiągalna. Sprawdź połączenie i spróbuj ponownie.',
  'error.http': 'Usługa gry zwróciła błąd {status}. Spróbuj ponownie.',
  'error.unavailable':
    'Usługa gry jest chwilowo niedostępna. Twoja deska jest bezpieczna; spróbuj ponownie.',
  'error.starting': 'Nie można rozpocząć gry.',
  'error.signInAgain': 'Zaloguj się ponownie, aby zapisać ruchy.',
  'error.localUnavailable': 'Gra lokalna jest niedostępna.',
  'error.move': 'Nie udało się zapisać ruchu.',
  'error.currentUnavailable': 'Bieżąca gra jest niedostępna.',
  'error.hintChanged':
    'Plansza uległa zmianie w trakcie przygotowywania podpowiedzi.',
  'error.hint': 'Nie udało się przygotować podpowiedzi.',
  'error.time': 'Nie można zapisać czasu ostatniej gry.',
  'error.timer': 'Nie można zapisać ostatniego stanu timera.',
  'error.leaving': 'Nie udało się rozwiązać lokalnej łamigłówki.',
  'error.opening': 'Nie można otworzyć zapisanej gry.',
  'error.deleteGame': 'Nie można usunąć zapisanej gry.',
  'error.deleteAll': 'Nie można usunąć zapisanych gier.',
  'error.signOut': 'Nie można Cię wylogować.',
  'error.revoke': 'Sesji nie można odwołać.',
  'error.deleteAccount': 'Nie udało się usunąć konta.',
  'error.invalid-request': 'Żądanie jest nieprawidłowe.',
  'error.invalid-json': 'Żądanie zawiera nieprawidłowy kod JSON.',
  'error.unsupported-media-type': 'Żądanie Content-Type nie jest obsługiwane.',
  'error.payload-too-large': 'Żądanie jest za duże.',
  'error.unauthorized': 'Wymagana jest autoryzacja.',
  'error.forbidden-origin': 'Źródło tego żądania jest niedozwolone.',
  'error.session-not-found': 'Nie znaleziono sesji gry.',
  'error.revision-conflict': 'Zarząd zmienił się przed wykonaniem tego ruchu.',
  'error.invalid-session': 'Sesja gry jest nieprawidłowa.',
  'error.invalid-action': 'Ta akcja w grze jest nieprawidłowa.',
  'error.invalid-cell': 'Ta komórka jest nieprawidłowa.',
  'error.immutable-cell': 'Dana komórka nie może zostać zmieniona.',
  'error.note-not-allowed': 'W tej komórce nie można zmieniać kandydatów.',
  'error.no-undo': 'Nie ma żadnej akcji, którą można cofnąć.',
  'error.no-redo': 'Nie ma żadnych działań do powtórzenia.',
  'error.no-hint': 'Żadna wskazówka nie jest dostępna.',
  'error.stale-hint': 'Po przygotowaniu tej wskazówki tablica uległa zmianie.',
  'error.persistence-failed': 'Nie udało się zapisać gry.',
  'error.internal-error': 'Nie można zrealizować żądania.',
  'error.account-unavailable': 'Funkcje konta są niedostępne.',
  'error.account-unauthorized': 'Wymagana jest ważna sesja aplikacji.',
  'error.csrf-failed':
    'Nie można zweryfikować tego logowania. Zaloguj się ponownie.',
  'error.account-game-not-found': 'Nie znaleziono zapisanej gry.',
  'error.guest-revision-conflict':
    'Gra lokalna uległa zmianie przed zastosowaniem tej akcji.',
  'error.guest-claim-conflict':
    'Ta gra lokalna została już zapisana na koncie.',
  'error.malformedDescriptor': 'Nie można wyświetlić wyjaśnienia.',
  'account.close': 'Zamknij panel konta',
  'account.games.title': 'Moje gry',
  'account.games.deleteAll': 'Usuń wszystko',
  'account.games.deletingAll': 'Usuwanie wszystkich…',
  'account.games.empty': 'Nie ma jeszcze zapisanych gier.',
  'account.games.puzzle': 'Układanka {difficulty}',
  'account.games.finished': 'Gotowy',
  'account.games.inProgress': 'W toku',
  'account.games.saved': 'Zapisana gra',
  'account.games.open': 'Otwarte',
  'account.games.opening': 'Otwór…',
  'account.games.delete': 'Usuwać',
  'account.games.deleting': 'Usuwanie…',
  'account.signOut': 'Wyloguj się',
  'account.signingOut': 'Wylogowuję się…',
  'account.settings': 'Ustawienia konta',
  'account.revoke': 'Wyloguj się wszędzie',
  'account.delete': 'Usuń konto',
  'board.label': 'Plansza do gry Sudoku',
  'board.cell':
    'Wiersz {row}, kolumna {column}, {content}{pending, select, true {, sprawdzanie} other {} }{invalid, select, true {, nieprawidłowy} other {} }{hint, select, none {} other {, {hint}} }',
  'board.cell.given': 'biorąc pod uwagę {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'pusty, kandydaci {candidates}',
  'board.cell.empty': 'pusty',
  'board.hint.focus': 'wskazówka skupienia',
  'board.hint.premise': 'dowód wskazujący',
  'board.hint.eliminated': 'kandydat wyeliminowany',
  'board.hint.conclusion': 'wskazówka, wniosek',
  'board.hint.problem': 'wymaga korekty',
  'board.hint.extra': 'kandydat niemożliwy',
  'board.hint.group': 'grupa {group}',
  'board.hint.chain': 'pozycja łańcucha {position}',
  'board.paused.title': 'Zagadka wstrzymana',
  'board.paused.detail': 'Twój czas się zatrzymał.',
  'hint.label': 'Wskazówka',
  'hint.close': 'Zamknąć',
  'hint.strategy.grade': 'Poziom {grade}',
  'hint.applying': 'Stosowanie podpowiedzi…',
  'hint.refreshing': 'Odświeżająca wskazówka…',
  'hint.step': 'Krok {current} z {total}',
  'hint.legend.label': 'Legenda podpowiedzi wizualnych',
  'hint.legend.strong': 'Ciało stałe: musi zawierać',
  'hint.legend.weak': 'Przerywana: nie można obu',
  'hint.legend.implication': 'Strzałka: implikacja',
  'hint.legend.groups': 'A/B: grupy naprzemienne',
  'hint.legend.order': 'Liczby: kolejność łańcuchowa',
  'hint.back': 'Z powrotem',
  'hint.next': 'Następny',
  'hint.apply': 'Zastosuj wskazówkę',
  'controls.label': 'Sterowanie grą',
  'controls.digit.note': 'Dodaj lub usuń notatkę {digit}',
  'controls.digit.enter': 'Wpisz {digit}',
  'controls.hint.preparing': 'Przygotowuję podpowiedź…',
  'controls.hint.preparingDetail':
    'Utrzymanie widoczności układanki podczas przygotowywania następnego kroku.',
  'controls.complete.eyebrow': 'Zagadka ukończona',
  'controls.complete.title': 'Rozwiązanie w {time}',
  'controls.complete.detail':
    'Utrzymuj rytm z inną płytą {difficulty} lub wybierz inny poziom.',
  'controls.complete.another': 'Zagraj w innego {difficulty}',
  'controls.complete.replay': 'Powtórz tę łamigłówkę',
  'controls.complete.choose': 'Wybierz inny poziom',
  'controls.pad': 'Klawiatura numeryczna',
  'controls.pad.notes': 'Klawiatura numeryczna, tryb notatek',
  'controls.modes': 'Tryby wprowadzania',
  'controls.notes.on': 'Notatki włączone',
  'controls.notes.off': 'Notatki wyłączone',
  'controls.candidates.on': 'Kandydaci włączeni',
  'controls.candidates.off': 'Kandydaci wyłączeni',
  'controls.actions': 'Działania logiczne',
  'controls.erase': 'Usuwać',
  'controls.undo': 'Anulować',
  'controls.undoing': 'Zguba…',
  'controls.redo': 'Przerobić',
  'controls.redoing': 'Ponawiam…',
  'controls.hint.reveal': 'Odkryj wskazówkę',
  'controls.shortcuts': 'Skróty klawiaturowe',
  'controls.shortcuts.move': 'Przenosić',
  'controls.shortcuts.arrows': 'Klawisze strzałek',
  'controls.shortcuts.enter': 'Wprowadź numer',
  'controls.shortcuts.notes': 'Notatki / kandydaci',
  'controls.shortcuts.or': 'Lub',
  'controls.shortcuts.pause': 'Wstrzymaj lub wznów',
  'controls.shortcuts.hint': 'Otwórz, przewiń lub zastosuj podpowiedź',
  'controls.shortcuts.hintOther': 'Inne elementy sterujące podpowiedziami',
  'hint.target.candidate.visible': 'ten wyróżniony kandydat',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'kandydat {value} w wierszu {row}, kolumnie {column}',
  'hint.target.cell.visible': 'tę podświetloną komórkę',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'wiersz {row}, kolumna {column}',
  'hint.target.unit.visible': 'to wyróżniło {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'wiersz',
  'hint.target.column': 'kolumna',
  'hint.target.box': 'blok',
  'chrome.home': 'Sudoku w domu',
  'chrome.appearance': 'Wygląd',
  'chrome.theme.use': 'Użyj motywu {theme}',
  'chrome.theme.systemTitle': 'Motyw systemowy ({theme})',
  'chrome.theme.title': 'Motyw {theme}',
  'chrome.theme.system': 'System',
  'chrome.theme.systemName': 'system',
  'chrome.theme.light': 'światło',
  'chrome.theme.dark': 'ciemny',
  'chrome.connection.connecting': 'Złączony',
  'chrome.connection.unavailable': 'Usługa niedostępna',
  'chrome.footer.tagline': 'Przemyślana gra, bez zakłóceń.',
  'chrome.footer.privacy': 'Prywatność',
  'chrome.footer.terms': 'Warunki',
  'chrome.footer.input': 'Klawiatura i dotyk gotowe',
} as const;
