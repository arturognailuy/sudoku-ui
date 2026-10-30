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
  'hint.strategy.observe':
    'Sprawdź wyróżnione komórki, kandydatów, wiersze, kolumny i pola.',
  'hint.strategy.compare':
    'Porównaj podświetlone wiązania, aby znaleźć wymuszony wynik.',
  'hint.strategy.conclude':
    'Zastosuj podświetlony wynik. Ten wzór to {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Kandydat {digit} tworzy dwie naprzemienne grupy: A w {group_a} i B w {group_b}.',
  'hint.coloring.alternatives':
    'Każde pełne łącze oznacza, że \u200b\u200bdokładnie jeden punkt końcowy zawiera {digit}, więc połączeni kandydaci przełączają się między grupami A i B. Konflikt może wykluczyć jedną grupę, natomiast komórka, która widzi obie grupy, nie może zawierać {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Połączeni kandydaci wymuszają wynik dla {colored_digit}. Usuń {candidates}. Ten wzór to {strategy}.',
  'hint.coloring.place':
    'Połączeni kandydaci na {colored_digit} wymuszają wynik. Umieść {digit} w {cell}. Ten wzór to {strategy}.',
  'hint.x-cycle.opening':
    'W {unit}, {digit} może przejść tylko w {cells}. Jedna z tych dwóch komórek musi zawierać {digit}.',
  'hint.x-cycle.assume':
    'Załóżmy, że {start} nie jest {digit}. Wtedy {forced} musiałoby być {digit}. Oznacza to, że {blocked} nie może być {digit}, więc {unit} wymusza {digit} na {result}.',
  'hint.x-cycle.follow':
    'Ponieważ {true_cell} to {digit}, {blocked} nie może być {digit}. Dlatego {unit} wymusza {digit} na {result}.',
  'hint.x-cycle.close':
    'Ponieważ {true_cell} to {digit}, {blocked} nie może być {digit}. W {unit} pozostawia to {result} jako jedyne miejsce dla {digit}.',
  'hint.x-cycle.place':
    'Początkowe założenie, że {assumption} nie było {digit}, prowadzi z powrotem do {cell} będącego {digit}, zatem założenie to nie może być prawdziwe. Umieść {digit} w {cell}. Ten wzór nazywa się {strategy}.',
  'hint.xy-chain.start':
    '{cell} ma tylko kandydatów {first_digit} i {second_digit}. Albo ma wartość {endpoint_digit}, albo — jeśli nie jest to {endpoint_digit} — musi mieć wartość {other_digit}.',
  'hint.xy-chain.assume':
    'Załóżmy, że {start} nie ma wartości {endpoint_digit}. Musi więc mieć wartość {start_value}. Ponieważ {start} i {middle} należą do {first_unit}, {middle} nie może mieć wartości {start_value} i musi mieć {middle_value}. To sprawia, że {result} w {second_unit} nie może mieć wartości {middle_value}, więc musi mieć {result_value}.',
  'hint.xy-chain.follow':
    'Ponieważ {start} ma wartość {start_value}, {middle} w {first_unit} nie może mieć wartości {start_value} i musi mieć {middle_value}. Ponieważ {middle} i {result} należą do {second_unit}, {result} nie może mieć wartości {middle_value} i musi mieć {result_value}.',
  'hint.xy-chain.reach':
    'Ponieważ {start} ma wartość {start_value}, {endpoint} nie może mieć wartości {shared_digit}. Jedynym innym kandydatem jest {endpoint_digit}, więc musi mieć wartość {endpoint_digit}.',
  'hint.xy-chain.place':
    'Jeśli {first_endpoint} ma wartość {endpoint_digit}, pierwszy koniec zawiera {endpoint_digit}. W przeciwnym razie łańcuch wymusza {endpoint_digit} na drugim końcu, {second_endpoint}. Zatem co najmniej jeden koniec ma wartość {endpoint_digit}. {cell} widzi oba końce, więc nie może mieć wartości {endpoint_digit}. Wstaw {digit} w {cell}. Ten wzorzec to {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Zacznij od {cell}. W jej wierszu, kolumnie i bloku są już {excluded_digits}.',
  'hint.naked-single.only':
    'Dlatego {digit} jest jedyną cyfrą, którą można wpisać w {cell}.',
  'hint.naked-single.apply':
    'Wpisz {digit} w {cell}. Pole z tylko jednym kandydatem to {strategy}.',
  'hint.hidden-single.inspect': 'W {unit} sprawdź, gdzie można wpisać {digit}.',
  'hint.hidden-single.blockers':
    'Wpisane cyfry {digit} w {blockers} wykluczają {digit} ze wszystkich pozostałych pustych pól w {unit}.',
  'hint.hidden-single.only': 'Tylko {cell} może jeszcze zawierać {digit}.',
  'hint.hidden-single.apply':
    'Wpisz {digit} w {cell}. Gdy cyfra ma tylko jedno możliwe pole w wierszu, kolumnie lub bloku, jest to {strategy}.',
  'hint.naked-pair.inspect':
    'Zacznij od {unit}: {cell} może zawierać tylko {first_digit} albo {second_digit}.',
  'hint.naked-pair.match':
    '{cell} ma te same dwie możliwości: {first_digit} i {second_digit}.',
  'hint.naked-pair.reserve':
    'Te dwie komórki muszą zawierać {digits} w dowolnej kolejności, więc kandydat {digit} nie może pozostać w żadnej innej komórce w {unit}.',
  'hint.naked-pair.apply':
    'Usuń {candidates}; ten krok nie wpisuje żadnej wartości. Ten układ to {strategy}.',
  'hint.naked-triple.first':
    'Zacznij w {unit}: {cell} może zawierać tylko {first_digit} lub {second_digit}.',
  'hint.naked-triple.second':
    'Dodaj {cell}; może zawierać tylko {first_digit} lub {second_digit}.',
  'hint.naked-triple.third':
    'Dodaj {cell}; może zawierać tylko {first_digit} lub {second_digit}. Te trzy pola zawierają teraz wyłącznie {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Te trzy pola muszą zawierać {reserved_digits} w dowolnej kolejności. Dlatego z {cell} można usunąć {removed_digits}, pozostawiając tylko {remaining_digit}.',
  'hint.naked-triple.apply':
    'Wstaw {digit} w {cell}. Trzy pola, których kandydaci są ograniczeni do tych samych trzech cyfr, tworzą {strategy}.',
  'hint.naked-quad.cell': 'W {unit} komórka {cell} zawiera tylko {digits}.',
  'hint.subset-reservation.observe':
    'W {unit} komórki {cells} zawierają tylko {digits}.',
  'hint.subset-reservation.explain':
    'Te komórki rezerwują {digits} w {unit}, więc żadna inna komórka nie może zawierać tych cyfr.',
  'hint.subset-reservation.apply':
    'Usuń {candidates}. Ten układ to {strategy}.',
  'hint.subset-reservation.place':
    'Wpisz {digit} w {cell}. Ten układ to {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Ponieważ {digits} są ograniczone do tych pól w {unit}, pola te nie mogą zawierać innych kandydatów.',
  'hint.hidden-subset-confinement.apply':
    'Usuń {candidates} z tych pól. Ten układ to {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Wpisz {digit} w {cell} po usunięciu pozostałych kandydatów. Ten układ to {strategy}.',
  'hint.hidden-pair.first':
    'W {unit} kandydat {digit} występuje tylko w {cells}.',
  'hint.hidden-pair.second':
    'Kandydat {digit} również jest ograniczony do tych samych dwóch pól. Cyfry {digits} muszą więc w dowolnej kolejności zająć {cells}.',
  'hint.hidden-pair.consequence':
    'Te dwa pola są zarezerwowane dla {digits}, więc pozostałe kandydatury trzeba usunąć: {candidates}.',
  'hint.hidden-pair.apply': 'Usuń {candidates}. Ten układ to {strategy}.',
  'hint.hidden-triple.first':
    'W {unit} kandydat {digit} występuje tylko w {cells}.',
  'hint.hidden-triple.second':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-triple.third':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-triple.consequence':
    'Ponieważ {digits} są ograniczone do tych pól w {unit}, pola te nie mogą zawierać innych kandydatów.',
  'hint.hidden-triple.apply':
    'Usuń {candidates} z tych pól. Ten układ to {strategy}.',
  'hint.hidden-quad.first':
    'W {unit} kandydat {digit} występuje tylko w {cells}.',
  'hint.hidden-quad.second':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-quad.third':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-quad.fourth':
    'W {unit} cyfry {digits} mogą wystąpić tylko w {cells}.',
  'hint.hidden-quad.consequence':
    'Ponieważ {digits} są ograniczone do tych pól w {unit}, pola te nie mogą zawierać innych kandydatów.',
  'hint.hidden-quad.apply':
    'Usuń {candidates} z tych pól. Ten układ to {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'W {source_unit} kandydat {digit} jest ograniczony do {intersection_unit} w {cells}.',
  'hint.intersection-confinement.explain':
    'Ponieważ każdy {digit} w {source_unit} leży w {intersection_unit}, komórki poza źródłem, ale wewnątrz przecięcia nie mogą go zawierać.',
  'hint.intersection-confinement.apply':
    'Usuń kandydata {digit} z {cells}. Ten wzór to {strategy}.',
  'hint.intersection-confinement.place':
    'Po zastosowaniu skrzyżowania umieść {digit} w {cell}. Ten wzór to {strategy}.',
  'hint.fish-confinement.observe':
    'W {base_units} kandydat {digit} występuje tylko w {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandydat {digit} jest ograniczony z {base_units} do {cover_units}, więc te jednostki pokrywające muszą otrzymać go przez podświetlone pozycje bazowe.',
  'hint.swordfish.consequence':
    'Jedna {digit} z każdego z {base_units} musi znaleźć się w {cover_units}. Razem te pozycje zajmują każdą z trzech kolumn dokładnie raz, więc żadna inna {digit} nie może w nich pozostać.',
  'hint.jellyfish.consequence':
    'Jedna {digit} z każdego z {base_units} musi znaleźć się w {cover_units}. Razem te pozycje zajmują każdą z czterech kolumn dokładnie raz, więc żadna inna {digit} nie może w nich pozostać.',
  'hint.fish-confinement.apply':
    'Usuń kandydata {digit} z {cells}. Ten układ to {strategy}.',
  'hint.x-wing.first':
    'W {base_unit} kandydat {digit} występuje tylko w {cover_units}.',
  'hint.x-wing.second':
    'Tak samo jest w {base_unit}: kandydat {digit} występuje tylko w {cover_units}. Oba wiersze korzystają z tych samych dwóch kolumn.',
  'hint.x-wing.consequence':
    'Każdy z {base_units} musi zawierać {digit}, więc każda z {cover_units} musi otrzymać {digit} z jednego z tych wierszy. Pozostałe {digit} w tych kolumnach można usunąć.',
  'hint.x-wing.apply':
    'Usuń kandydata {digit} z {cells}. Ten układ to {strategy}.',
  'hint.pivot-wing.observe':
    'W {pivot} kandydaci {pivot_digits} łączą komórki skrzydełkowe w {wing_cells}.',
  'hint.pivot-wing.explain':
    'Każde skrzydło w {wing_cells} ma jednego kandydata z osią w {pivot}, a oba skrzydła zawierają {shared_digit}. Niezależnie od tego, który z kandydatów obrotu jest prawdziwy, jedno skrzydło musi zawierać {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} ma tylko kandydatów {digits}. Musi być jednym z nich.',
  'hint.xy-wing.case':
    'Jeśli {pivot} to {pivot_digit}, {wing} nie może być {pivot_digit}. Jedynym innym kandydatem jest {shared_digit}, więc {wing} musi być {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Niezależnie od kandydata w {pivot}, co najmniej jedno skrzydło {wing_cells} musi zawierać {shared_digit}. Nie musimy wiedzieć które.',
  'hint.xy-wing.apply':
    '{cells} widzą oba skrzydła {wing_cells}. Ponieważ co najmniej jedno ma {shared_digit}, usuń {shared_digit} z tych pól. Ten układ to {strategy}.',
  'hint.xy-wing.place':
    '{cell} widzi oba skrzydła {wing_cells}. Ponieważ co najmniej jedno ma {shared_digit}, {cell} nie może mieć {shared_digit}. Wpisz jedynego innego kandydata {digit}. Ten układ to {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} ma tylko kandydatów {digits}. Musi być jednym z nich.',
  'hint.xyz-wing.case':
    'Jeśli {pivot} to {pivot_digit}, wtedy {wing} w tej samej {unit} nie może być {pivot_digit}. Jedynym innym kandydatem jest {shared_digit}, więc {wing} musi być {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Jeśli {pivot} to {shared_digit}, sam pivot już zawiera {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Którykolwiek kandydat jest prawdziwy w {pivot}, co najmniej jedna z komórek {pattern_cells} musi być {shared_digit}. Nie musimy wiedzieć która.',
  'hint.xyz-wing.apply':
    '{target} dzieli {first_unit} z {first_pattern_cell}, {second_unit} z {second_pattern_cell} oraz {third_unit} z {third_pattern_cell}. Ponieważ co najmniej jedna z tych trzech komórek to {shared_digit}, {target} nie może nim być. Usuń kandydata {shared_digit}. Ten wzorzec to {strategy}.',
  'hint.strong-link-wing.observe':
    'Każda z komórek {wing_cells} może zawierać tylko {digits}.',
  'hint.strong-link-wing.bridge':
    'W {unit} kandydat {link_digit} może wystąpić tylko w {link_cells}, więc co najmniej jedna z tych komórek musi zawierać {link_digit}.',
  'hint.strong-link-wing.force':
    'Jeśli {first_link_cell} ma wartość {link_digit}, to {first_wing_cell} nie może mieć wartości {link_digit} i musi mieć {forced_digit}. Jeśli {second_link_cell} ma wartość {link_digit}, to {second_wing_cell} musi mieć {forced_digit}. Zatem co najmniej jedna z tych dwóch komórek ma wartość {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Co najmniej jedna z komórek {wing_cells} ma wartość {digit}. Usuń kandydata {digit} z {cells}, ponieważ te komórki widzą obie. Ten układ nazywa się {strategy}.',
  'hint.strong-link-wing.place':
    'Co najmniej jedna z komórek {wing_cells} ma wartość {removed_digit}. Usuń kandydata {removed_digit} z {cell}, ponieważ widzi ona obie, i wpisz tam {digit}. Ten układ nazywa się {strategy}.',
  'hint.relational-wing.apply':
    'Usuń kandydata {digit} z {cells}. Ten wzór to {strategy}.',
  'hint.relational-wing.place':
    'Usuń kandydata {removed_digit} z {cell}, więc umieść tam {digit}. Ten wzór to {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Poza {cell} pozostałe {count} nierozwiązanych pól ma dokładnie po dwóch kandydatów.',
  'hint.bug-plus-one.trivalue':
    '{cell} ma trzech kandydatów: {digits}, czyli o jednego więcej niż każde inne nierozwiązane pole.',
  'hint.bug-plus-one.unit-count':
    'W {unit} kandydat {digit} ma trzy możliwe pozycje, a {other_digits} mają po dwie.',
  'hint.bug-plus-one.explain':
    'W {units} kandydat {digit} ma o jedną możliwą pozycję więcej niż {other_digits}. Gdyby {cell} nie było {digit}, każde nierozwiązane pole miałoby dwóch kandydatów, a łamigłówka nie miałaby już jednego rozwiązania. Dlatego {cell} musi mieć wartość {digit}.',
  'hint.bug-plus-one.place':
    'Umieść {digit} w {cell}. Ten wyjątek wyjątkowości to {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Cztery nierozwiązane komórki w {cells} znajdują się w rogach prostokąta.',
  'hint.unique-rectangle.pair-corners':
    'W {cells} jedynymi kandydatami są {digits}.',
  'hint.unique-rectangle.third-corner':
    '{cell} to także dokładnie {digits}. Trzy rogi mają teraz tę samą parę.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} zawiera {digits}. To jedyny zakręt z dodatkowym kandydatem {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Jeśli {cell} zachowałby któregokolwiek kandydata z pary {digits}, wszystkie cztery rogi mogłyby zamienić te dwie cyfry bez zmiany żadnego wiersza, kolumny lub pola. Zagadka miałaby dwa rozwiązania, więc usuń {digits} i zachowaj {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'W {cell} pozostaje tylko {digit}. Umieść to tam. Ten wzór to {strategy}.',
  'hint.unique-rectangle.observe':
    'Komórki w {cells} tworzą prostokąt i wszystkie zawierają parę {digits}.',
  'hint.unique-rectangle.type1':
    'Trzy rogi zawierają dokładnie {digits}. Jeżeli w {cell} użyto również którejkolwiek cyfry, prostokąt umożliwiłby dwa wymienne rozwiązania.',
  'hint.unique-rectangle.type2-first-expanded':
    '{cell} może zawierać {pair} lub {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} ma również kandydatów {pair} i {extra_digit}. Oba rozszerzone narożniki mają więc wspólnego dodatkowego kandydata {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Co najmniej jedna z komórek {cells} musi zawierać {extra_digit}, aby uniknąć dwóch zamiennych rozwiązań. {target} widzi obie komórki, więc nie może zawierać {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'W {cell} pozostaje tylko {digit}. Wpisz tę cyfrę. Ten układ to {strategy}.',
  'hint.unique-rectangle.type2':
    'Dwa rozwinięte rogi w {cells} mają wspólnego dodatkowego kandydata {digit}, więc żadna komórka, która widzi oba rogi, nie może zawierać {digit}.',
  'hint.unique-rectangle.type3':
    'Dodatkowe cyfry {digits} w prostokącie łączą się z {cells} jako zarezerwowany podzbiór w {unit}, więc cyfry te można usunąć w innym miejscu tej jednostki.',
  'hint.unique-rectangle.type3-first-expanded':
    '{cell} ma również {pair} oraz dodatkowego kandydata {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    '{cell} ma również {pair} oraz dodatkowego kandydata {extra_digit}. Co najmniej jeden górny narożnik musi użyć dodatkowej cyfry, inaczej cztery narożniki mogłyby zamienić {pair} i dać dwa rozwiązania.',
  'hint.unique-rectangle.type3-partner':
    'W {cell} mogą znajdować się tylko {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Jedna z komórek {corners} musi użyć jednej z cyfr {digits}, a {partner} drugiej. Te cyfry są zarezerwowane w {unit}, więc {target} nie może zawierać {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'W {cell} pozostaje tylko {digit}. Wpisz tę cyfrę. Ten układ to {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    '{cell} ma również {pair} oraz dodatkowego kandydata {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    '{cell} ma również {pair} oraz dodatkowego kandydata {extra_digit}. Oba rozszerzone narożniki zawierają teraz parę prostokąta.',
  'hint.unique-rectangle.type4':
    'Kandydat {digit} pojawia się w {cells} jako para sprzężona w {unit}, więc kandydat {removed_digit} nie może zajmować żadnego rozszerzonego narożnika bez tworzenia wymiennych rozwiązań.',
  'hint.unique-rectangle.type4-apply':
    'Usuń kandydata {digit} z {cells}. Ta relacja jednoznaczności nazywa się {strategy}.',
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
