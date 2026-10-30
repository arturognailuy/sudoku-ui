import type { MessageCatalog } from './types';

export const cs: MessageCatalog = {
  'common.language.label': '',
  'common.language.auto': 'Auto',
  'common.language.en': 'anglicky',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'portugalština (Brazílie)',
  'common.language.pt-BR.short': 'Portugalsko',
  'common.language.es': 'Španělština',
  'common.language.ja': '日本語',
  'common.language.ko': '한국어',
  'common.language.fr': 'Francie',
  'common.language.de': 'německy',
  'common.language.ru': 'Русский',
  'common.language.ar': 'العربية',
  'common.language.id': 'Bahasa Indonésie',
  'common.language.id.short': 'Indonésie',
  'common.language.hi': 'हिन्दी',
  'common.language.it': 'italsky',
  'common.language.tr': 'Turecko',
  'common.language.vi': 'Tiếng Việt',
  'common.language.uk': 'Українська',
  'common.language.nl': 'Nizozemsko',
  'common.language.pl': 'Polski',
  'common.language.th': 'ไทย',
  'common.language.fil': 'Filipino',
  'common.language.ms': 'Bahasa Melayu',
  'common.language.ms.short': 'Melayu',
  'common.language.cs': 'Čeština',
  'common.language.sv': 'Svenska',
  'accessibility.language.changed': 'Jazyk změněn na {language}.',
  'common.difficulty.easy': 'Snadné',
  'common.difficulty.medium': 'Střední',
  'common.difficulty.hard': 'Tvrdý',
  'common.difficulty.expert': 'Expert',
  'common.difficulty.evil': 'Zlo',
  'difficulty.easy.name': 'Snadno',
  'difficulty.medium.name': 'Střední',
  'difficulty.hard.name': 'Tvrdý',
  'difficulty.expert.name': 'Expert',
  'difficulty.evil.name': 'Zlo',
  'strategy.naked-single.name': 'Nahý singl',
  'strategy.hidden-single.name': 'Skrytý singl',
  'strategy.naked-pair.name': 'Nahý pár',
  'strategy.naked-triple.name': 'Nahý trojitý',
  'strategy.pointing-pair.name': 'Polohovací páry / Redukce Box-Line',
  'strategy.hidden-pair.name': 'skrytý pár',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.xy-wing.name': 'XY-křídlo',
  'strategy.hidden-triple.name': 'skrytý trojitý',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.swordfish.name': 'Mečoun',
  'strategy.naked-quad.name': 'Nahá čtyřkolka',
  'strategy.simple-coloring.name': 'Jednoduché zbarvení',
  'strategy.hidden-quad.name': 'Skrytá čtyřkolka',
  'strategy.xyz-wing.name': 'XYZ-křídlo',
  'strategy.jellyfish.name': 'Medúza',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Typ jedinečného obdélníku 1',
  'strategy.unique-rectangle-2.name': 'Jedinečný obdélníkový typ 2',
  'strategy.unique-rectangle-3.name': 'Jedinečný obdélníkový typ 3',
  'strategy.unique-rectangle-4.name': 'Jedinečný obdélníkový typ 4',
  'strategy.x-cycles.name': 'X-cykly',
  'strategy.xy-chain.name': 'XY řetěz\nBacktracker',
  'strategy.backtracker.name': '',
  'hint.value-correction.title': 'Opravte tuto hodnotu',
  'hint.candidate-correction.title': 'Opravte tuto kandidátskou buňku',
  'hint.value-correction.summary':
    'Hodnota v {cell} je v konfliktu s hádankou. Před pokračováním jej vymažte.',
  'hint.candidate-correction.summary':
    'Než budete pokračovat, znovu vytvořte kandidáty na {cell} z přijatých hodnot v jeho řádku, sloupci a poli.',
  'hint.strategy.summary':
    'Projděte si kroky {steps}, abyste pochopili a použili {strategy}.',
  'hint.value-correction.observe':
    'Zkontrolujte {cell}. Jeho hodnota je v rozporu s deskou.',
  'hint.value-correction.conclude':
    'Vymažte hodnotu na {cell}, aby bylo možné následně zkontrolovat kandidátskou mřížku.',
  'hint.candidate-correction.observe':
    'Zkontrolujte {cell}. Její kandidáti neodpovídají představenstvu.',
  'hint.candidate-correction.compare':
    'Spusťte tuto buňku znovu od přijatých hodnot v jejím řádku, sloupci a poli.',
  'hint.candidate-correction.conclude':
    'Resetujte kandidáty na {cell} na každou číslici povolenou jeho řádkem, sloupcem a rámečkem.',
  'hint.strategy.observe':
    'Zkontrolujte zvýrazněné buňky, kandidáty, řádky, sloupce a rámečky.',
  'hint.strategy.compare':
    'Porovnejte zvýrazněná omezení a najděte vynucený výsledek.',
  'hint.strategy.conclude':
    'Použijte zvýrazněný výsledek. Tento vzor je {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Kandidát {digit} tvoří dvě střídající se skupiny: A na {group_a} a B na {group_b}.',
  'hint.coloring.alternatives':
    'Každý pevný odkaz znamená, že právě jeden koncový bod obsahuje {digit}, takže propojení kandidáti se střídají mezi skupinami A a B. Konflikt může vyloučit jednu skupinu, zatímco buňka, která vidí obě skupiny, nemůže obsahovat {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Propojení kandidáti vynutí výsledek pro {colored_digit}. Odebrat {candidates}. Tento vzor je {strategy}.',
  'hint.coloring.place':
    'Propojení kandidáti na {colored_digit} vynutí výsledek. Umístěte {digit} do {cell}. Tento vzor je {strategy}.',
  'hint.x-cycle.opening':
    'V {unit}, {digit} může jít pouze v {cells}. Jedna z těchto dvou buněk musí obsahovat {digit}.',
  'hint.x-cycle.assume':
    'Předpokládejme, že {start} nebylo {digit}. Pak by {forced} muselo být {digit}. To znamená, že {blocked} nemůže být {digit}, takže {unit} vnutí {digit} do {result}.',
  'hint.x-cycle.follow':
    'Protože {true_cell} je {digit}, {blocked} nemůže být {digit}. {unit} tedy vnutí {digit} do {result}.',
  'hint.x-cycle.close':
    'Protože {true_cell} je {digit}, {blocked} nemůže být {digit}. V {unit} to ponechává {result} jako jediné místo pro {digit}.',
  'hint.x-cycle.place':
    'Výchozí předpoklad, že {assumption} nebylo {digit}, vede zpět k tomu, že {cell} je {digit}, takže předpoklad nemůže být pravdivý. Umístěte {digit} do {cell}. Tento vzor se nazývá {strategy}.',
  'hint.xy-chain.start':
    '{cell} má pouze kandidáty {first_digit} a {second_digit}. Buď je to {endpoint_digit}, nebo pokud to není {endpoint_digit}, musí to být {other_digit}.',
  'hint.xy-chain.assume':
    'Předpokládejme, že {start} není {endpoint_digit}. Pak musí být {start_value}. Protože {start} a {middle} sdílejí {first_unit}, {middle} nemůže být {start_value} a musí být {middle_value}. Tím pádem {result} v {second_unit} nemůže být {middle_value}, takže musí být {result_value}.',
  'hint.xy-chain.follow':
    'Protože {start} je {start_value}, {middle} v {first_unit} nemůže být {start_value} a musí být {middle_value}. Protože {middle} a {result} sdílejí {second_unit}, {result} nemůže být {middle_value} a musí být {result_value}.',
  'hint.xy-chain.reach':
    'Protože {start} je {start_value}, {endpoint} nemůže být {shared_digit}. Její jediný další kandidát je {endpoint_digit}, takže musí být {endpoint_digit}.',
  'hint.xy-chain.place':
    'Pokud {first_endpoint} je {endpoint_digit}, první konec obsahuje {endpoint_digit}. Pokud ne, řetězec vynutí {endpoint_digit} na druhém konci {second_endpoint}. Alespoň jeden konec tedy obsahuje {endpoint_digit}. {cell} vidí oba konce, takže nemůže být {endpoint_digit}. Umístěte {digit} do {cell}. Tento vzor se nazývá {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Začněte u {cell}. V jejím řádku, sloupci a bloku už jsou {excluded_digits}.',
  'hint.naked-single.only':
    'Proto je {digit} jediná číslice, kterou lze do {cell} doplnit.',
  'hint.naked-single.apply':
    'Doplňte {digit} do {cell}. Buňka s jediným kandidátem je {strategy}.',
  'hint.hidden-single.inspect':
    'V {unit} zkontrolujte, kam lze umístit {digit}.',
  'hint.hidden-single.blockers':
    'Umístěné číslice {digit} v {blockers} vylučují {digit} ze všech ostatních prázdných buněk v {unit}.',
  'hint.hidden-single.only': 'Číslici {digit} může stále obsahovat jen {cell}.',
  'hint.hidden-single.apply':
    'Umístěte {digit} do {cell}. Pokud má číslice v řádku, sloupci nebo bloku jedinou možnou buňku, jde o {strategy}.',
  'hint.naked-pair.inspect':
    'Začněte v {unit}: {cell} může obsahovat jen {first_digit} nebo {second_digit}.',
  'hint.naked-pair.match':
    '{cell} má stejné dva kandidáty: {first_digit} a {second_digit}.',
  'hint.naked-pair.reserve':
    'Tyto dvě buňky musí v určitém pořadí obsahovat {digits}, takže kandidát {digit} nemůže zůstat v žádné jiné buňce v {unit}.',
  'hint.naked-pair.apply':
    'Odstraňte {candidates}; tento krok nevloží žádnou hodnotu. Tento vzor je {strategy}.',
  'hint.naked-triple.first':
    'Začněte v {unit}: {cell} může obsahovat jen {first_digit} nebo {second_digit}.',
  'hint.naked-triple.second':
    'Přidejte {cell}; může obsahovat jen {first_digit} nebo {second_digit}.',
  'hint.naked-triple.third':
    'Přidejte {cell}; může obsahovat jen {first_digit} nebo {second_digit}. Tyto tři buňky nyní obsahují pouze {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Tyto tři buňky musí v libovolném pořadí obsahovat {reserved_digits}. Z {cell} proto odstraňte {removed_digits}; zůstane jen {remaining_digit}.',
  'hint.naked-triple.apply':
    'Vložte {digit} do {cell}. Tři buňky, jejichž kandidáti jsou omezeni na stejné tři číslice, tvoří {strategy}.',
  'hint.naked-quad.cell': 'V {unit} obsahuje {cell} pouze {digits}.',
  'hint.subset-reservation.observe':
    'V {unit} obsahují {cells} pouze {digits}.',
  'hint.subset-reservation.explain':
    'Tyto buňky rezervují {digits} v {unit}, takže žádná jiná buňka tam tyto číslice obsahovat nemůže.',
  'hint.subset-reservation.apply':
    'Odstraňte {candidates}. Tento vzor se nazývá {strategy}.',
  'hint.subset-reservation.place':
    'Umístěte {digit} do {cell}. Tento vzor se nazývá {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Protože jsou {digits} omezeny na tato pole v {unit}, tato pole nemohou obsahovat jiné kandidáty.',
  'hint.hidden-subset-confinement.apply':
    'Odstraňte {candidates} z omezených polí. Tento vzor je {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Po odstranění ostatních kandidátů vložte {digit} do {cell}. Tento vzor je {strategy}.',
  'hint.hidden-pair.first':
    'V {unit} se kandidát {digit} vyskytuje pouze v {cells}.',
  'hint.hidden-pair.second':
    'Kandidát {digit} je rovněž omezen na stejná dvě pole. Čísla {digits} proto musí v nějakém pořadí obsadit {cells}.',
  'hint.hidden-pair.consequence':
    'Tato dvě pole jsou vyhrazena pro {digits}, takže ostatní kandidáti musí pryč: {candidates}.',
  'hint.hidden-pair.apply':
    'Odstraňte {candidates}. Tento vzor se nazývá {strategy}.',
  'hint.hidden-triple.first':
    'V {unit} se kandidát {digit} vyskytuje pouze v {cells}.',
  'hint.hidden-triple.second':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-triple.third':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-triple.consequence':
    'Protože jsou {digits} omezeny na tato pole v {unit}, tato pole nemohou obsahovat jiné kandidáty.',
  'hint.hidden-triple.apply':
    'Odstraňte {candidates} z omezených polí. Tento vzor je {strategy}.',
  'hint.hidden-quad.first':
    'V {unit} se kandidát {digit} vyskytuje pouze v {cells}.',
  'hint.hidden-quad.second':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-quad.third':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-quad.fourth':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-quad.consequence':
    'Protože jsou {digits} omezeny na tato pole v {unit}, tato pole nemohou obsahovat jiné kandidáty.',
  'hint.hidden-quad.apply':
    'Odstraňte {candidates} z omezených polí. Tento vzor je {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'V {source_unit} je kandidát {digit} omezen na {intersection_unit} na {cells}.',
  'hint.intersection-confinement.explain':
    'Protože každé {digit} v {source_unit} leží v {intersection_unit}, buňky mimo zdroj, ale uvnitř průsečíku jej nemohou obsahovat.',
  'hint.intersection-confinement.apply':
    'Odeberte kandidáta {digit} z {cells}. Tento vzor je {strategy}.',
  'hint.intersection-confinement.place':
    'Umístěte {digit} do {cell} po použití průsečíku. Tento vzor je {strategy}.',
  'hint.fish-confinement.observe':
    'V {base_units} se kandidát {digit} objevuje pouze v {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidát {digit} je omezen z {base_units} na {cover_units}, takže ho tyto krycí jednotky musí získat přes zvýrazněné základní pozice.',
  'hint.swordfish.consequence':
    'Jedna {digit} z každé z {base_units} musí být v {cover_units}. Tato umístění společně využijí každý ze tří sloupců právě jednou, takže v nich žádná další {digit} nezůstane.',
  'hint.jellyfish.consequence':
    'Jedna {digit} z každé z {base_units} musí být v {cover_units}. Tato umístění společně využijí každý ze čtyř sloupců právě jednou, takže v nich žádná další {digit} nezůstane.',
  'hint.fish-confinement.apply':
    'Odstraňte kandidáta {digit} z {cells}. Tento vzor se nazývá {strategy}.',
  'hint.x-wing.first':
    'V {base_unit} se kandidát {digit} nachází pouze v {cover_units}.',
  'hint.x-wing.second':
    'Totéž platí v {base_unit}: kandidát {digit} se nachází pouze v {cover_units}. Oba řádky používají stejné dva sloupce.',
  'hint.x-wing.consequence':
    'Každý z {base_units} musí obsahovat jednu {digit}, takže každý z {cover_units} musí získat {digit} z jednoho z těchto řádků. Ostatní {digit} v těchto sloupcích lze odstranit.',
  'hint.x-wing.apply':
    'Odstraňte kandidáta {digit} z {cells}. Tento vzor se nazývá {strategy}.',
  'hint.pivot-wing.observe':
    'Na {pivot} kandidáti {pivot_digits} spojují křídlové buňky na {wing_cells}.',
  'hint.pivot-wing.explain':
    'Každé křídlo u {wing_cells} sdílí jednoho kandidáta s čepem u {pivot} a obě křídla obsahují {shared_digit}. Ať je správný kandidát na pivot, jedno křídlo musí obsahovat {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} má jen kandidáty {digits}. Musí být jedním z nich.',
  'hint.xy-wing.case':
    'Pokud je {pivot} číslo {pivot_digit}, pak {wing} nemůže být {pivot_digit}. Jediným dalším kandidátem je {shared_digit}, takže {wing} musí být {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Ať je v {pivot} správný kterýkoli kandidát, alespoň jedno křídlo {wing_cells} musí být {shared_digit}. Nemusíme vědět které.',
  'hint.xy-wing.apply':
    '{cells} vidí obě křídla {wing_cells}. Protože alespoň jedno je {shared_digit}, odstraňte z těchto buněk kandidáta {shared_digit}. Tento vzor se nazývá {strategy}.',
  'hint.xy-wing.place':
    '{cell} vidí obě křídla {wing_cells}. Protože alespoň jedno je {shared_digit}, {cell} nemůže být {shared_digit}. Zbývá jen {digit}, proto vložte {digit}. Tento vzor se nazývá {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} má pouze kandidáty {digits}. Musí být jedním z nich.',
  'hint.xyz-wing.case':
    'Pokud je {pivot} rovno {pivot_digit}, pak {wing} ve stejné {unit} nemůže být {pivot_digit}. Jeho jediným dalším kandidátem je {shared_digit}, takže {wing} musí být {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Pokud je {pivot} rovno {shared_digit}, samotný pivot už obsahuje {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Ať v {pivot} platí kterýkoli kandidát, alespoň jedno z polí {pattern_cells} musí být {shared_digit}. Nemusíme vědět které.',
  'hint.xyz-wing.apply':
    '{target} sdílí {first_unit} s {first_pattern_cell}, {second_unit} s {second_pattern_cell} a {third_unit} s {third_pattern_cell}. Protože alespoň jedno z těchto tří polí je {shared_digit}, {target} jím být nemůže. Odstraňte kandidáta {shared_digit}. Tento vzor se nazývá {strategy}.',
  'hint.strong-link-wing.observe':
    'Každá z buněk {wing_cells} může obsahovat pouze {digits}.',
  'hint.strong-link-wing.bridge':
    'V {unit} se kandidát {link_digit} může objevit pouze v {link_cells}, takže alespoň jedna z těchto buněk musí obsahovat {link_digit}.',
  'hint.strong-link-wing.force':
    'Pokud je {first_link_cell} rovno {link_digit}, pak {first_wing_cell} nemůže být {link_digit} a musí být {forced_digit}. Pokud je {second_link_cell} rovno {link_digit}, pak {second_wing_cell} musí být {forced_digit}. Alespoň jedna z těchto dvou buněk je tedy {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Alespoň jedna z buněk {wing_cells} je {digit}. Odstraňte kandidáta {digit} z {cells}, protože tyto buňky vidí obě. Tento vzor se nazývá {strategy}.',
  'hint.strong-link-wing.place':
    'Alespoň jedna z buněk {wing_cells} je {removed_digit}. Odstraňte kandidáta {removed_digit} z {cell}, protože vidí obě, a vložte tam {digit}. Tento vzor se nazývá {strategy}.',
  'hint.relational-wing.apply':
    'Odeberte kandidáta {digit} z {cells}. Tento vzor je {strategy}.',
  'hint.relational-wing.place':
    'Odstraňte kandidáta {removed_digit} ze {cell}, takže tam umístěte {digit}. Tento vzor je {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Kromě {cell} mají zbývající {count} nevyřešená pole právě dva kandidáty.',
  'hint.bug-plus-one.trivalue':
    '{cell} má tři kandidáty: {digits}, tedy o jednoho více než každé jiné nevyřešené pole.',
  'hint.bug-plus-one.unit-count':
    'V {unit} má kandidát {digit} tři možné pozice, zatímco {other_digits} mají každý dvě.',
  'hint.bug-plus-one.explain':
    'V {units} má kandidát {digit} o jednu možnou pozici více než {other_digits}. Kdyby {cell} nebylo {digit}, všechna nevyřešená pole by měla dva kandidáty a úloha by už neměla jediné řešení. Proto musí být {cell} rovno {digit}.',
  'hint.bug-plus-one.place':
    'Umístěte {digit} do {cell}. Tato výjimka jedinečnosti je {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Čtyři nevyřešené buňky na {cells} jsou umístěny v rozích obdélníku.',
  'hint.unique-rectangle.pair-corners':
    'U {cells} jsou jedinými kandidáty {digits}.',
  'hint.unique-rectangle.third-corner':
    '{cell} je také přesně {digits}. Tři rohy mají nyní stejný pár.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} obsahuje {digits}. Je to jediný roh s extra kandidátem {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Pokud by si {cell} ponechal jednoho z kandidátů z páru {digits}, všechny čtyři rohy by mohly prohodit tyto dvě číslice beze změny jakéhokoli řádku, sloupce nebo rámečku. Hádanka by měla dvě řešení, takže odstraňte {digits} a ponechte {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'V {cell} zůstává pouze {digit}. Umístěte to tam. Tento vzor je {strategy}.',
  'hint.unique-rectangle.observe':
    'Buňky v {cells} tvoří obdélník a všechny obsahují pár {digits}.',
  'hint.unique-rectangle.type1':
    'Tři rohy obsahují přesně {digits}. Pokud by {cell} také používal jednu z číslic, obdélník by umožňoval dvě zaměnitelná řešení.',
  'hint.unique-rectangle.type2-first-expanded':
    '{cell} může obsahovat {pair} nebo {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} má také kandidáty {pair} a {extra_digit}. Oba rozšířené rohy tedy sdílejí dodatečného kandidáta {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Alespoň jedna z buněk {cells} musí být {extra_digit}, aby nevznikla dvě zaměnitelná řešení. {target} vidí obě buňky, takže nemůže obsahovat {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'V {cell} zbývá pouze {digit}. Umístěte ji tam. Tento vzor se nazývá {strategy}.',
  'hint.unique-rectangle.type2':
    'Dva rozšířené rohy u {cells} sdílejí dalšího kandidáta {digit}, takže žádná buňka, která vidí oba rohy, nemůže obsahovat {digit}.',
  'hint.unique-rectangle.type3':
    'Další číslice {digits} v obdélníku se kombinují se {cells} jako vyhrazená podmnožina v {unit}, takže tyto číslice mohou být odstraněny jinde v této jednotce.',
  'hint.unique-rectangle.type3-first-expanded':
    '{cell} má také kandidáty {pair} a navíc {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    '{cell} má také kandidáty {pair} a navíc {extra_digit}. Alespoň jeden horní roh musí použít dodatečnou číslici, jinak by se {pair} mohly ve čtyřech rozích prohodit a vznikla by dvě řešení.',
  'hint.unique-rectangle.type3-partner': 'V {cell} mohou být pouze {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Jedna z buněk {corners} musí použít jednu z číslic {digits} a {partner} musí použít druhou. Tyto číslice jsou v {unit} rezervované, takže {target} nemůže obsahovat {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'V {cell} zbývá pouze {digit}. Umístěte ji tam. Tento vzor se nazývá {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    '{cell} má také kandidáty {pair} a navíc {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    '{cell} má také kandidáty {pair} a navíc {extra_digit}. Oba rozšířené rohy nyní obsahují dvojici obdélníku.',
  'hint.unique-rectangle.type4':
    'Kandidát {digit} se objeví v {cells} jako konjugovaný pár v {unit}, takže kandidát {removed_digit} nemůže obsadit žádný rozšířený roh bez vytvoření zaměnitelných řešení.',
  'hint.unique-rectangle.type4-apply':
    'Odeberte kandidáta {digit} z {cells}. Tento vztah jednoznačnosti se nazývá {strategy}.',
  'hint.unique-rectangle.apply':
    'Odebrat {candidates}. Tento vztah jedinečnosti je {strategy}.',
  'hint.unique-rectangle.place':
    'Umístěte {digit} do {cell} po použití vztahu jedinečnosti. Tento vzor je {strategy}.',
  'hint.implication-chain.observe':
    'Začněte u {cell}, která má pouze kandidáty {digits}.',
  'hint.implication-chain.explain':
    '{from} a {to} sdílejí kandidáta a navzájem se vidí, takže tento kandidát nemůže platit v obou; implikace pokračuje.',
  'hint.implication-chain.apply':
    'Jeden koncový bod musí obsahovat {digit}, proto odstraňte kandidáta {digit} z {cells}. Tento vzor se nazývá {strategy}.',
  'hint.narration.apply': 'Uplatněte odpočet:',
  'hint.narration.look-at': 'Podívejte se',
  'hint.narration.value-conflict':
    '. Jeho zadaná hodnota je v rozporu s hádankou.',
  'hint.narration.clear-value': 'Vymažte hodnotu při',
  'hint.narration.clear-value-tail':
    ', takže kandidátskou mřížku lze zkontrolovat jako další.',
  'hint.narration.candidate-inconsistent':
    '. Jeho kandidátský stát je v rozporu s hádankou.',
  'hint.narration.reset-candidates': 'Resetujte kandidáta nastaveného na',
  'hint.narration.reset-candidates-tail':
    'na každou číslici povolenou přijatými hodnotami řádků, sloupců a rámečků.',
  'hint.narration.only-candidate': '. Má pouze jednoho kandidáta:',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'Protože žádná jiná číslice nemůže být',
  'hint.narration.place': ', místo',
  'hint.narration.naked-single-tail': 'tam. Tomu se říká Naked Single.',
  'hint.narration.in-unit': 'In',
  'hint.narration.consider-digit': ', zvažte kde \nMůže se objevit',
  'hint.narration.can-appear': '.',
  'hint.narration.other-cells': 'Každá další prázdná buňka v',
  'hint.narration.cannot-contain': 'nemůže obsahovat',
  'hint.narration.leaving-only': ', zbývá pouze',
  'hint.narration.because-unit': 'Protože',
  'hint.narration.still-needs': 'stále potřebuje',
  'hint.narration.only-cell': 'a',
  'hint.narration.hidden-single-tail': 'je jediná možná buňka, místo',
  'hint.narration.hidden-single-name': 'tam. Tomu se říká skrytý singl.',
  'hint.narration.place-result': '',
  'hint.narration.in': 'palec',
  'hint.narration.remove': 'odstranit kandidáta',
  'hint.narration.from': 'od',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. Toto je výsledek {strategy}.',
  'welcome.eyebrow': 'Nové puzzle',
  'welcome.title': 'Vyberte si obtížnost',
  'welcome.lede': 'Vyberte si úroveň a začněte, až budete připraveni.',
  'welcome.difficulty': 'Obtížnost',
  'welcome.start': 'Spusťte puzzle {difficulty}',
  'welcome.starting': 'Spouštění puzzle {difficulty}…\nNáhled sudoku',
  'welcome.preview': '',
  'loading.initial': 'Načítání vaší hádanky…\nÚčet',
  'loading.account.eyebrow': '',
  'loading.account.title': 'Ukládání puzzle na váš účet…',
  'loading.account.detail':
    'Váš postup zůstane na tomto zařízení, dokud nebude potvrzeno uložení účtu.\nSudoku',
  'loading.home.eyebrow': '',
  'loading.home.title': 'Návrat na titulní stránku…',
  'loading.home.detail':
    'Kontrola nejnovějšího rozhraní před zobrazením výběru úrovně.',
  'loading.restart.eyebrow': 'Stejná hádanka',
  'loading.restart.title': 'Restartování této hádanky…',
  'loading.restart.detail':
    'Udržení staré desky uzamčené, dokud nebude připraven nový pokus.',
  'loading.new.eyebrow': 'Nové puzzle',
  'loading.new.title': 'Příprava desky {difficulty}…',
  'loading.new.detail': 'Nyní vytváříme novou hádanku. Za chvíli budete hrát.',
  'confirmation.home.eyebrow': 'Vrátit se domů?',
  'confirmation.home.title': 'Nechte tuto hádanku',
  'confirmation.home.description':
    'Váš aktuální postup se již nebude na tomto zařízení automaticky otevírat.',
  'confirmation.home.cancel': 'Hrajte dál',
  'confirmation.home.confirm': 'Návrat na titulní stránku',
  'confirmation.restart.eyebrow': 'Začít znovu?',
  'confirmation.restart.title': 'Začněte znovu',
  'confirmation.restart.description':
    'Přehrajte si tuto hádanku z její původní podoby nebo si vyberte jinou hádanku.',
  'confirmation.restart.replay.title': 'Přehrajte si tuto hádanku znovu',
  'confirmation.restart.replay.description':
    'Zachovejte tyto údaje a resetujte tento pokus.',
  'confirmation.restart.different.title': 'Zahrajte si jinou hádanku',
  'confirmation.restart.different.description':
    'Vyberte úroveň pro novou desku.',
  'confirmation.restart.different.level': 'Úroveň pro různé puzzle',
  'common.cancel': 'Zrušit',
  'account.confirm.deleteGame.eyebrow': 'Smazat uloženou hru?',
  'account.confirm.deleteGame.title': 'Smazat tuto hru',
  'account.confirm.deleteGame.description':
    'Tato hádanka a její postup budou trvale odstraněny z mých her. Toto nelze vrátit zpět.',
  'account.confirm.deleteGame.action': 'Smazat hru',
  'account.confirm.deleteGame.pending': 'Mazání uložené hry…',
  'account.confirm.deleteAll.eyebrow': 'Smazat všechny uložené hry?',
  'account.confirm.deleteAll.title': 'Smazat všechny hry',
  'account.confirm.deleteAll.description':
    'Každá hádanka a veškerý pokrok v mých hrách budou trvale odstraněny. Toto nelze vrátit zpět.',
  'account.confirm.deleteAll.action': 'Smazat všechny hry',
  'account.confirm.deleteAll.pending': 'Mazání všech her…',
  'account.confirm.revoke.eyebrow': 'Zabezpečení účtu',
  'account.confirm.revoke.title': 'Odhlaste se všude',
  'account.confirm.revoke.description':
    'Toto vás odhlásí na každém zařízení, včetně tohoto. Váš účet a uložené hry zůstanou.',
  'account.confirm.revoke.action': 'Odhlaste se všude',
  'account.confirm.revoke.pending': 'Odhlašování všude…',
  'account.confirm.deleteAccount.eyebrow': 'Trvalá akce',
  'account.confirm.deleteAccount.title': 'Smažte svůj účet',
  'account.confirm.deleteAccount.description':
    'Vaše identita, každá přihlášená relace a všechny uložené hry budou trvale odstraněny. Sdílený katalog hádanek není ovlivněn.',
  'account.confirm.deleteAccount.action': 'Smazat účet',
  'account.confirm.deleteAccount.pending': 'Mazání účtu…',
  'account.confirm.typeEmail': 'Potvrďte zadáním {email}\nÚčet',
  'account.label': '',
  'account.continue.title': 'Pokračujte na dalších zařízeních',
  'account.continue.detail':
    'Chcete-li automaticky uložit aktivní hru tohoto prohlížeče, přihlaste se.',
  'account.signIn': 'Přihlaste se pomocí Google',
  'account.signIn.short': 'Přihlaste se\nPuzzle',
  'game.title': '{difficulty}',
  'game.statusActions': 'Stav hry a akce',
  'game.elapsed': 'Uplynulý čas',
  'game.mistakes': 'Chyby {count}',
  'game.mistakes.label': '{count, plural, one{# chyba} other{# chyb}}',
  'game.resume': 'Pokračovat',
  'game.pause': 'Pauza',
  'status.resumed': 'Puzzle obnoveno.',
  'status.paused': 'Puzzle pozastaveno.',
  'status.restarted': 'Puzzle restartováno. Nový pokus, stejná hádanka.',
  'status.hintClosed':
    'Nápověda uzavřena. Vaše hádanka je nezměněna.\nByla použita strategie',
  'status.strategyApplied': '. Můžete to vrátit jedním krokem.',
  'status.correctionApplied':
    'Byla provedena oprava. Můžete to vrátit jedním krokem.',
  'status.hintAlreadyApplied': 'Tato nápověda se již odráží na desce.',
  'status.hintRefreshed': 'Deska se změnila, takže nápověda byla obnovena.',
  'status.accountSaved': 'Hra uložena do vašeho účtu.',
  'status.waitBeforeLeaving':
    'Před opuštěním této hádanky počkejte na čekající tahy.',
  'status.selectEditableCell': 'Před zadáním čísla vyberte upravitelnou buňku.',
  'status.savingAccount': 'Ukládání místní hry do vašeho účtu…',
  'status.restoring': 'Obnovování vaší hádanky…',
  'status.restored': 'Vaše místní hádanka byla obnovena.',
  'status.puzzleReady': '{difficulty} puzzle připraveno.\nHádanka',
  'status.puzzleRestored': '{difficulty} obnovena.',
  'status.waitBeforeStarting':
    'Před zahájením další hádanky počkejte na čekající tahy.',
  'status.solved': 'Vyřešeno! Krásná práce.',
  'status.moveSaved': 'Přesun uložen.',
  'status.waitBeforeHint':
    'Před otevřením nápovědy počkejte na čekající pohyby.',
  'status.hintReady': 'Tip připraven. Začněte krokem 1.',
  'status.openingSaved': 'Otevírání uložené hry…',
  'status.savedDeleted': 'Uložená hra byla smazána.',
  'status.allDeleted': 'Všechny uložené hry byly smazány.',
  'status.signedOut': 'Odhlášeno. Hry vašeho účtu zůstanou uloženy.',
  'status.revoked':
    'Všude odhlášeno. Chcete-li pokračovat, znovu se přihlaste.\nÚčet',
  'status.accountDeleted': 'a uložené hry byly smazány.',
  'retry.saving': 'Zkuste uložit znovu',
  'retry.restoring': 'Zkuste obnovit znovu',
  'retry.connection': 'Zkontrolujte připojení',
  'retry.starting': 'Zkuste začít znovu',
  'retry.move': 'Opakujte pohyb',
  'retry.hint': 'Zkuste nápovědu znovu',
  'retry.time': 'Opakujte pokus šetřící čas',
  'retry.progress': 'Opakujte průběh ukládání',
  'retry.leaving': 'Zkuste odejít znovu',
  'retry.opening': 'Zkuste znovu otevřít',
  'retry.deleting': 'Zkuste vymazat znovu',
  'retry.signOut': 'Zkuste se znovu odhlásit',
  'retry.revoke': 'Zkuste se všude znovu odhlásit',
  'retry.deleteAccount': 'Zkuste účet smazat znovu',
  'error.accountSave':
    'Vaše místní hra je bezpečná, ale nepodařilo se ji uložit do vašeho účtu.',
  'error.restoring': 'Vaše puzzle se nepodařilo obnovit.',
  'error.connection':
    'Herní služba není dostupná. Zkontrolujte připojení a zkuste to znovu.',
  'error.http': 'Herní služba vrátila chybu {status}. Zkuste to prosím znovu.',
  'error.unavailable':
    'Herní služba je dočasně nedostupná. Vaše deska je v bezpečí; zkuste to znovu.',
  'error.starting': 'Hru nelze spustit.',
  'error.signInAgain': 'Pro uložení tahů se znovu přihlaste.',
  'error.localUnavailable': 'Místní hra není k dispozici.',
  'error.move': 'Přesun nelze uložit.',
  'error.currentUnavailable': 'Aktuální hra není k dispozici.',
  'error.hintChanged': 'Během přípravy nápovědy se deska změnila.',
  'error.hint': 'Nápovědu nelze připravit.',
  'error.time': 'Poslední herní čas nelze uložit.',
  'error.timer': 'Poslední stav časovače nelze uložit.',
  'error.leaving': 'Místní hádanku nelze vymazat.',
  'error.opening': 'Uloženou hru nelze otevřít.',
  'error.deleteGame': 'Uloženou hru nelze smazat.',
  'error.deleteAll': 'Uložené hry nelze smazat.',
  'error.signOut': 'Nemůžete být odhlášeni.',
  'error.revoke': 'Relace nebylo možné odvolat.',
  'error.deleteAccount': 'Účet nelze smazat.',
  'error.invalid-request': 'Požadavek je neplatný.',
  'error.invalid-json': 'Požadavek obsahuje neplatný JSON.',
  'error.unsupported-media-type': 'Požadavek Content-Type není podporován.',
  'error.payload-too-large':
    'Požadavek je příliš velký.\nJe vyžadována autorizace',
  'error.unauthorized': '.',
  'error.forbidden-origin': 'Tento původ požadavku není povolen.',
  'error.session-not-found': 'Herní relace nebyla nalezena.',
  'error.revision-conflict': 'Před provedením tohoto pohybu se deska změnila.',
  'error.invalid-session': 'Herní relace je neplatná.',
  'error.invalid-action': 'Tato herní akce je neplatná.',
  'error.invalid-cell': 'Tato buňka je neplatná.',
  'error.immutable-cell': 'Danou buňku nelze změnit.',
  'error.note-not-allowed': 'V této buňce nelze změnit kandidáty.',
  'error.no-undo': 'Není možné vrátit zpět žádnou akci.',
  'error.no-redo': 'Není potřeba nic opakovat.',
  'error.no-hint': 'Není k dispozici žádná nápověda.',
  'error.stale-hint': 'Po přípravě této nápovědy se deska změnila.',
  'error.persistence-failed': 'Hru nelze uložit.',
  'error.internal-error': 'Požadavek nelze dokončit.\nFunkce účtu',
  'error.account-unavailable': 'nejsou k dispozici.',
  'error.account-unauthorized': 'Je vyžadována platná relace aplikace.',
  'error.csrf-failed':
    'Toto přihlášení nebylo možné ověřit. Přihlaste se prosím znovu.',
  'error.account-game-not-found': 'Uložená hra nebyla nalezena.',
  'error.guest-revision-conflict':
    'Před provedením této akce se místní hra změnila.',
  'error.guest-claim-conflict': 'Tato místní hra již byla uložena na účet.',
  'error.malformedDescriptor': 'Vysvětlení nelze zobrazit.',
  'account.close': 'Zavřete panel účtu',
  'account.games.title': 'Moje hry',
  'account.games.deleteAll': 'Smazat vše',
  'account.games.deletingAll': 'Mazání všech…',
  'account.games.empty': 'Dosud žádné uložené hry.\nPuzzle',
  'account.games.puzzle': '{difficulty}',
  'account.games.finished': 'Hotovo',
  'account.games.inProgress': 'Probíhá',
  'account.games.saved': 'Uložená hra',
  'account.games.open': 'Otevřeno',
  'account.games.opening': 'Otevírání…',
  'account.games.delete': 'Smazat',
  'account.games.deleting': 'Mazání…',
  'account.signOut': 'Odhlaste se',
  'account.signingOut': 'Odhlašování…',
  'account.settings': 'Nastavení účtu',
  'account.revoke': 'Odhlaste se všude',
  'account.delete': 'Smazat účet\nHerní deska',
  'board.label': 'Sudoku',
  'board.cell':
    'Řádek {row}, sloupec {column}, {content}{pending, select, true {, kontroluje se} other {}}{invalid, select, true {, neplatné} other {}}{hint, select, none {} other {, {hint}}}',
  'board.cell.given': 'dané {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'prázdné, kandidáti {candidates}',
  'board.cell.empty': 'prázdné',
  'board.hint.focus': 'nápověda zaměření\nDůkaz nápovědy',
  'board.hint.premise': 'Kandidát',
  'board.hint.eliminated': 'vyloučen\nZávěr nápovědy',
  'board.hint.conclusion': '',
  'board.hint.problem': 'vyžaduje opravu',
  'board.hint.extra': 'nemožný kandidát',
  'board.hint.group': 'skupina {group}\nPoloha řetězu',
  'board.hint.chain': '{position}',
  'board.paused.title': 'Puzzle pozastaveno',
  'board.paused.detail': 'Váš čas je zastaven.',
  'hint.label': 'Nápověda',
  'hint.close': 'Zavřít\nStrategie',
  'hint.strategy.grade': '{grade}',
  'hint.applying': 'Použití nápovědy…',
  'hint.refreshing': 'Osvěžující tip…',
  'hint.step': 'Krok {current} z {total}',
  'hint.legend.label': 'Legenda vizuální nápovědy',
  'hint.legend.strong': 'Solid: musí obsahovat',
  'hint.legend.weak': 'Přerušovaná: nelze obojí',
  'hint.legend.implication': 'Šipka: implikace',
  'hint.legend.groups': 'A/B: střídavé skupiny',
  'hint.legend.order': 'Čísla: pořadí řetězu',
  'hint.back': 'Zpět',
  'hint.next': 'Další',
  'hint.apply': 'Použijte nápovědu',
  'controls.label': 'Ovládání hry',
  'controls.digit.note': 'Přidat nebo odebrat poznámku {digit}',
  'controls.digit.enter': 'Zadejte {digit}',
  'controls.hint.preparing': 'Příprava nápovědy…',
  'controls.hint.preparingDetail':
    'Udržujte hádanku viditelnou, zatímco je připraven další krok.',
  'controls.complete.eyebrow': 'Puzzle kompletní',
  'controls.complete.title': 'Vyřešeno v {time}',
  'controls.complete.detail':
    'Udržujte rytmus s jinou deskou {difficulty} nebo zvolte jinou úroveň.',
  'controls.complete.another': 'Zahrajte si další {difficulty}',
  'controls.complete.replay': 'Zopakujte si tuto hádanku',
  'controls.complete.choose': 'Vyberte jinou úroveň',
  'controls.pad': 'Číselná klávesnice',
  'controls.pad.notes': 'Číselná klávesnice, režim poznámek',
  'controls.modes': 'Vstupní režimy',
  'controls.notes.on': 'Poznámky k',
  'controls.notes.off': 'Poznámky vypnuty',
  'controls.candidates.on': 'Kandidáti na',
  'controls.candidates.off': 'Kandidáti vypnuti',
  'controls.actions': 'Logické akce',
  'controls.erase': 'Vymazat',
  'controls.undo': 'Zpět',
  'controls.undoing': 'Vrácení zpět…',
  'controls.redo': 'Znovu',
  'controls.redoing': 'Opakuji…',
  'controls.hint.reveal': 'Odhalte nápovědu',
  'controls.shortcuts': 'Klávesové zkratky',
  'controls.shortcuts.move': 'Přesun',
  'controls.shortcuts.arrows': 'Klávesy se šipkami',
  'controls.shortcuts.enter': 'Zadejte číslo',
  'controls.shortcuts.notes': 'Poznámky / kandidáti',
  'controls.shortcuts.or': 'nebo',
  'controls.shortcuts.pause': 'Pozastavení nebo obnovení',
  'controls.shortcuts.hint': 'Otevřete, posuňte nebo použijte nápovědu',
  'controls.shortcuts.hintOther': 'Další ovládací prvky nápovědy',
  'hint.target.candidate.visible': 'tento zvýrazněný kandidát',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'kandidát {value} na řádku {row}, sloupci {column}',
  'hint.target.cell.visible': 'tato zvýrazněná buňka',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'řádek {row}, sloupec {column}',
  'hint.target.unit.visible': 'toto zvýraznilo {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}\nŘada',
  'hint.target.row': 'Sloupec',
  'hint.target.column': 'Krabice',
  'hint.target.box': 'Domácí sudoku',
  'chrome.home': '',
  'chrome.appearance': 'Vzhled',
  'chrome.theme.use': 'Použijte motiv {theme}',
  'chrome.theme.systemTitle': 'Systémové téma ({theme})',
  'chrome.theme.title': '{theme}\nSystém',
  'chrome.theme.system': 'Systém',
  'chrome.theme.systemName': 'Světlo',
  'chrome.theme.light': '',
  'chrome.theme.dark': 'tmavý',
  'chrome.connection.connecting': 'Připojení\nSlužba',
  'chrome.connection.unavailable': 'není k dispozici',
  'chrome.footer.tagline': 'Promyšlená hra bez rozptylování.',
  'chrome.footer.privacy': 'Ochrana osobních údajů\nPodmínky',
  'chrome.footer.terms': '',
  'chrome.footer.input': 'Klávesnice a dotyk jsou připraveny',
};
