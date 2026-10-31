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
  'hint.coloring.pair':
    'V {unit} lze číslici {digit} umístit pouze do buněk {cells}. Právě jedna z nich musí tuto číslici obsahovat, proto obě možnosti označte A a B.',
  'hint.coloring.chain':
    'Pokračujte po silných vazbách, z nichž každá spojuje jediné dvě možné pozice kandidáta {digit} v řádku, sloupci nebo bloku. Podél celého řetězce se musí střídat označení A a B: A v buňkách {group_a} a B v buňkách {group_b}.',
  'hint.coloring.alternatives':
    'Buď je {digit} ve všech buňkách skupiny A a v žádné buňce skupiny B, nebo naopak. Která z těchto možností je správná, není pro eliminaci nutné určovat; číslice {digit} vždy obsadí právě jednu barevnou skupinu.',
  'hint.coloring.elimination':
    'Buňka {cell} vidí pozici skupiny A v buňce {group_a_cell} i pozici skupiny B v buňce {group_b_cell}. Jedna z těchto barevných skupin musí obsahovat {digit}, takže cílová buňka tuto číslici vždy vidí a sama ji obsahovat nemůže.',
  'hint.coloring.apply':
    'Odstraňte {candidates}. Každá cílová buňka vidí pozici skupiny A i pozici skupiny B pro číslici {colored_digit}, takže v ní tento kandidát nemůže zůstat. Tento postup se nazývá {strategy}.',
  'hint.coloring.place':
    'Propojení kandidáti na {colored_digit} vynutí výsledek. Umístěte {digit} do {cell}. Tento vzor je {strategy}.',
  'hint.x-cycle.opening':
    'V {unit} lze číslici {digit} umístit pouze do buněk {cells}. Jedna z nich proto musí obsahovat {digit}.',
  'hint.x-cycle.assume':
    'Pokud v {start} není {digit}, musí být {digit} v {forced}. V {blocked} pak {digit} být nemůže, takže v {unit} zbývá pro {digit} jediná možnost: {result}.',
  'hint.x-cycle.follow':
    'Protože v {true_cell} je {digit}, v {blocked} být {digit} nemůže. V {unit} tak pro {digit} zbývá jediná buňka: {result}.',
  'hint.x-cycle.close':
    'Protože v {true_cell} je {digit}, v {blocked} být {digit} nemůže. V {unit} tak zbývá pro {digit} jediné místo: {result}.',
  'hint.x-cycle.place':
    'Předpoklad, že v {assumption} není {digit}, vede zpět k závěru, že v {cell} musí být {digit}. Předpoklad tedy nemůže platit. Doplňte {digit} do buňky {cell}. Tento postup se nazývá {strategy}.',
  'hint.xy-chain.start':
    'Buňka {cell} má pouze kandidáty {first_digit} a {second_digit}. Buď obsahuje {endpoint_digit}, nebo po vyloučení {endpoint_digit} musí obsahovat {other_digit}.',
  'hint.xy-chain.assume':
    'Předpokládejme, že v {start} není {endpoint_digit}. Musí tam tedy být {start_value}. Buňky {start} a {middle} sdílejí {first_unit}, takže v {middle} nemůže být {start_value} a musí tam být {middle_value}. V {second_unit} pak {middle_value} nemůže být v {result}, kde proto musí být {result_value}.',
  'hint.xy-chain.follow':
    'Protože v {start} je {start_value}, v buňce {middle} v {first_unit} být {start_value} nemůže a musí tam být {middle_value}. Buňky {middle} a {result} sdílejí {second_unit}, takže v {result} nemůže být {middle_value} a musí tam být {result_value}.',
  'hint.xy-chain.reach':
    'Protože v {start} je {start_value}, buňka {endpoint} nemůže obsahovat {shared_digit}. Zbývá jí jediný další kandidát, {endpoint_digit}, takže musí obsahovat {endpoint_digit}.',
  'hint.xy-chain.place':
    'Pokud první koncová buňka {first_endpoint} obsahuje číslici {endpoint_digit}, je tato číslice na jednom konci řetězce. Pokud v ní {endpoint_digit} není, řetězec vynutí {endpoint_digit} ve druhé koncové buňce {second_endpoint}. Alespoň jedna koncová buňka tedy obsahuje {endpoint_digit}. Buňka {cell} vidí obě koncové buňky, takže nemůže obsahovat {endpoint_digit}. Doplňte {digit} do buňky {cell}. Tento postup se nazývá {strategy}.',
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
    'Číslice {digit} už umístěné v buňkách {blockers} znemožňují použít {digit} ve všech ostatních prázdných buňkách v {unit}.',
  'hint.hidden-single.only': 'Číslici {digit} může stále obsahovat jen {cell}.',
  'hint.hidden-single.apply':
    'Umístěte {digit} do {cell}. Pokud má číslice v řádku, sloupci nebo bloku jedinou možnou buňku, jde o {strategy}.',
  'hint.naked-pair.inspect':
    'Začněte v {unit}: buňka {cell} může obsahovat pouze {first_digit} nebo {second_digit}.',
  'hint.naked-pair.match':
    'Stejné dva kandidáty, {first_digit} a {second_digit}, má také buňka {cell}.',
  'hint.naked-pair.reserve':
    'Tyto dvě buňky musí v některém pořadí obsahovat číslice {digits}. Kandidát {digit} proto nemůže zůstat v žádné jiné buňce v {unit}.',
  'hint.naked-pair.apply':
    'Odstraňte {candidates}. V tomto kroku pouze vyřazujete kandidáty, žádnou číslici zatím neumísťujete. Tento postup se nazývá {strategy}.',
  'hint.naked-triple.first':
    'Začněte v {unit}: buňka {cell} má pouze kandidáty {first_digit} a {second_digit}.',
  'hint.naked-triple.second':
    'Přidejte buňku {cell}; také v ní zbývají pouze kandidáti {first_digit} a {second_digit}.',
  'hint.naked-triple.third':
    'Přidejte ještě buňku {cell}, jejíž jediní kandidáti jsou {first_digit} a {second_digit}. Ve všech třech buňkách jsou tak kandidáti omezeni na číslice {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Číslice {reserved_digits} musí v nějakém pořadí připadnout na tyto tři buňky. Z buňky {cell} proto odstraňte kandidáty {removed_digits}; zbude pouze {remaining_digit}.',
  'hint.naked-triple.apply':
    'Doplňte {digit} do buňky {cell}. Tři buňky, jejichž kandidáti jsou omezeni na stejné tři číslice, tvoří {strategy}.',
  'hint.naked-quad.cell': 'V {unit} má buňka {cell} pouze kandidáty {digits}.',
  'hint.subset-reservation.observe':
    'V {unit} obsahují {cells} pouze {digits}.',
  'hint.subset-reservation.explain':
    'Číslice {digits} musí v {unit} připadnout na tyto zvýrazněné buňky, proto je lze odstranit ze všech ostatních buněk této jednotky.',
  'hint.subset-reservation.apply':
    'Odstraňte {candidates}. Tento vzor se nazývá {strategy}.',
  'hint.subset-reservation.place':
    'Doplňte {digit} do buňky {cell}. Tento postup se nazývá {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'V {unit} se mohou {digits} objevit pouze v {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Protože jsou {digits} omezeny na tato pole v {unit}, tato pole nemohou obsahovat jiné kandidáty.',
  'hint.hidden-subset-confinement.apply':
    'Odstraňte {candidates} z omezených polí. Tento vzor je {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Po odstranění ostatních kandidátů vložte {digit} do {cell}. Tento vzor je {strategy}.',
  'hint.hidden-pair.first':
    'V {unit} se kandidát {digit} vyskytuje pouze v buňkách {cells}.',
  'hint.hidden-pair.second':
    'Také kandidát {digit} se může nacházet jen v těchto dvou buňkách. Číslice {digits} proto musí v nějakém pořadí připadnout na buňky {cells}.',
  'hint.hidden-pair.consequence':
    'Tyto dvě buňky jsou vyhrazeny pro číslice {digits}, takže v nich nemohou zůstat žádní další kandidáti: {candidates}.',
  'hint.hidden-pair.apply':
    'Odstraňte kandidáty {candidates}. Tento postup se nazývá {strategy}.',
  'hint.hidden-triple.first':
    'V {unit} se kandidát {digit} může nacházet pouze v buňkách {cells}.',
  'hint.hidden-triple.second':
    'V {unit} se číslice {digits} mohou nacházet pouze v buňkách {cells}.',
  'hint.hidden-triple.third':
    'Také číslice {digits} se v {unit} mohou nacházet pouze v buňkách {cells}.',
  'hint.hidden-triple.consequence':
    'Číslice {digits} jsou v {unit} omezeny na tyto tři buňky, takže v nich nemohou zůstat žádní další kandidáti.',
  'hint.hidden-triple.apply':
    'Z těchto tří vyhrazených buněk odstraňte {candidates}. Tento postup se nazývá {strategy}.',
  'hint.hidden-quad.first':
    'V {unit} se kandidát {digit} vyskytuje pouze v buňkách {cells}.',
  'hint.hidden-quad.second':
    'V {unit} se číslice {digits} mohou nacházet pouze v buňkách {cells}.',
  'hint.hidden-quad.third':
    'Také číslice {digits} se v {unit} mohou nacházet pouze v buňkách {cells}.',
  'hint.hidden-quad.fourth':
    'Totéž platí pro číslice {digits}: v {unit} se mohou nacházet pouze v buňkách {cells}.',
  'hint.hidden-quad.consequence':
    'Číslice {digits} jsou v {unit} omezeny na tyto čtyři buňky, takže v nich nemohou zůstat žádní jiní kandidáti.',
  'hint.hidden-quad.apply':
    'Z těchto čtyř buněk odstraňte ostatní kandidáty {candidates}. Tento postup se nazývá {strategy}.',
  'hint.pointing-pair.first':
    'V {source_unit} se zaměřte na kandidáta {digit} v buňce {cell}. Najděte všechna další místa v tomto bloku, kam lze umístit {digit}.',
  'hint.pointing-pair.second':
    'V {source_unit} lze číslici {digit} umístit už jen do jediné další buňky, {cell}. Obě možné pozice leží v {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Číslice {digit} tedy musí v {source_unit} obsadit jednu z těchto dvou pozic v {intersection_unit}. Kandidáta {candidate} proto odstraňte ze všech ostatních buněk v {intersection_unit}.',
  'hint.pointing-pair.apply':
    'V buňce {cell} zbývá jako jediný kandidát {digit}, proto tam doplňte {digit}. Tento postup se nazývá {strategy}.',
  'hint.intersection-confinement.observe':
    'V {source_unit} je kandidát {digit} omezen na {intersection_unit} na {cells}.',
  'hint.intersection-confinement.explain':
    'Protože každé {digit} v {source_unit} leží v {intersection_unit}, buňky mimo zdroj, ale uvnitř průsečíku jej nemohou obsahovat.',
  'hint.intersection-confinement.apply':
    'Odeberte kandidáta {digit} z {cells}. Tento vzor je {strategy}.',
  'hint.intersection-confinement.place':
    'Umístěte {digit} do {cell} po použití průsečíku. Tento vzor je {strategy}.',
  'hint.fish-confinement.observe':
    'V jednotkách {base_units} se kandidát {digit} může nacházet pouze na průsečících s jednotkami {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidát {digit} je omezen z {base_units} na {cover_units}, takže ho tyto krycí jednotky musí získat přes zvýrazněné základní pozice.',
  'hint.swordfish.consequence':
    'V každé z jednotek {base_units} musí být číslice {digit} na jednom z průsečíků s jednotkami {cover_units}. Tato tři umístění společně obsadí všechny tři protínající jednotky, takže v nich nemůže zůstat žádný další kandidát {digit}.',
  'hint.jellyfish.consequence':
    'V každé z jednotek {base_units} musí být číslice {digit} na jednom z průsečíků s jednotkami {cover_units}. Tato čtyři umístění společně obsadí všechny čtyři protínající jednotky, takže v nich nemůže zůstat žádný další kandidát {digit}.',
  'hint.fish-confinement.apply':
    'Odstraňte kandidáta {digit} z buněk {cells}. Tento postup se nazývá {strategy}.',
  'hint.x-wing.first':
    'V {base_unit} je kandidát {digit} omezen na průsečíky s jednotkami {cover_units}.',
  'hint.x-wing.second':
    'Také v {base_unit} se kandidát {digit} může nacházet pouze na průsečících s jednotkami {cover_units}. V obou základních jednotkách tedy leží jeho možné pozice na průsečících se stejnými dvěma jednotkami.',
  'hint.x-wing.consequence':
    'V každé z jednotek {base_units} musí být číslice {digit} na jednom z průsečíků s jednotkami {cover_units}. Tato dvě vynucená umístění obsadí obě protínající jednotky číslicí {digit}, takže z nich lze odstranit všechny ostatní výskyty kandidáta {digit}.',
  'hint.x-wing.apply':
    'Odstraňte kandidáta {digit} z buněk {cells}. Tento postup se nazývá {strategy}.',
  'hint.pivot-wing.observe':
    'Na {pivot} kandidáti {pivot_digits} spojují křídlové buňky na {wing_cells}.',
  'hint.pivot-wing.explain':
    'Každé křídlo u {wing_cells} sdílí jednoho kandidáta s čepem u {pivot} a obě křídla obsahují {shared_digit}. Ať je správný kandidát na pivot, jedno křídlo musí obsahovat {shared_digit}.',
  'hint.xy-wing.pivot':
    'Buňka {pivot} má pouze kandidáty {digits}, takže musí obsahovat jednu z těchto číslic.',
  'hint.xy-wing.case':
    'Pokud buňka {pivot} obsahuje {pivot_digit}, v buňce {wing} {pivot_digit} být nemůže. Jejím jediným dalším kandidátem je {shared_digit}, takže buňka {wing} musí obsahovat {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Ať buňka {pivot} obsahuje kteréhokoli ze svých kandidátů, alespoň jedna z křídlových buněk {wing_cells} musí obsahovat {shared_digit}. Není třeba určovat, která.',
  'hint.xy-wing.apply':
    '{cells} vidí obě křídla {wing_cells}. Protože alespoň jedno je {shared_digit}, odstraňte z těchto buněk kandidáta {shared_digit}. Tento vzor se nazývá {strategy}.',
  'hint.xy-wing.place':
    'Buňka {cell} vidí obě křídlové buňky {wing_cells}. Protože alespoň jedna z nich obsahuje {shared_digit}, nemůže být {shared_digit} v buňce {cell}. Zbývá jediný kandidát {digit}, proto tam doplňte {digit}. Tento postup se nazývá {strategy}.',
  'hint.xyz-wing.pivot':
    'Buňka {pivot} má pouze kandidáty {digits}, takže musí obsahovat jednu z těchto číslic.',
  'hint.xyz-wing.case':
    'Pokud buňka {pivot} obsahuje {pivot_digit}, nemůže buňka {wing} obsahovat {pivot_digit}, protože s pivotem sdílí {unit}. Jejím jediným dalším kandidátem je {shared_digit}, takže buňka {wing} musí obsahovat {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Pokud buňka {pivot} obsahuje {shared_digit}, je číslice {shared_digit} už přímo v pivotu.',
  'hint.xyz-wing.guarantee':
    'Ať buňka {pivot} obsahuje kteréhokoli ze svých kandidátů, alespoň jedna z buněk {pattern_cells} musí obsahovat {shared_digit}. Není třeba určovat, která.',
  'hint.xyz-wing.apply':
    'Buňka {target} sdílí {first_unit} s buňkou {first_pattern_cell}, {second_unit} s buňkou {second_pattern_cell} a {third_unit} s buňkou {third_pattern_cell}. Protože alespoň jedna z těchto tří buněk obsahuje {shared_digit}, nemůže buňka {target} obsahovat {shared_digit}. Odstraňte z ní tohoto kandidáta. Tento postup se nazývá {strategy}.',
  'hint.strong-link-wing.observe':
    'Každá z buněk {wing_cells} má pouze kandidáty {digits}.',
  'hint.strong-link-wing.bridge':
    'V {unit} lze kandidáta {link_digit} umístit pouze do buněk {link_cells}, takže alespoň jedna z nich musí obsahovat {link_digit}.',
  'hint.strong-link-wing.force':
    'Pokud je v buňce {first_link_cell} číslice {link_digit}, v buňce {first_wing_cell} {link_digit} být nemůže, a musí v ní tedy být {forced_digit}. Pokud je {link_digit} v buňce {second_link_cell}, musí být {forced_digit} v buňce {second_wing_cell}. Alespoň jedna z těchto dvou křídlových buněk proto obsahuje {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Alespoň jedna z buněk {wing_cells} je {digit}. Odstraňte kandidáta {digit} z {cells}, protože tyto buňky vidí obě. Tento vzor se nazývá {strategy}.',
  'hint.strong-link-wing.place':
    'Alespoň jedna z buněk {wing_cells} obsahuje {removed_digit}. Buňka {cell} vidí obě, proto z ní odstraňte kandidáta {removed_digit} a doplňte {digit}. Tento postup se nazývá {strategy}.',
  'hint.relational-wing.apply':
    'Odeberte kandidáta {digit} z {cells}. Tento vzor je {strategy}.',
  'hint.relational-wing.place':
    'Odstraňte kandidáta {removed_digit} ze {cell}, takže tam umístěte {digit}. Tento vzor je {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Kromě buňky {cell} zbývá právě {count} nevyřešených buněk a každá z nich má přesně dva kandidáty.',
  'hint.bug-plus-one.trivalue':
    'Buňka {cell} má tři kandidáty, {digits}, tedy o jednoho více než každá jiná nevyřešená buňka.',
  'hint.bug-plus-one.unit-count':
    'V {unit} má kandidát {digit} tři možné pozice, zatímco každá z číslic {other_digits} má pouze dvě.',
  'hint.bug-plus-one.explain':
    'V jednotkách {units} má kandidát {digit} o jednu možnou pozici více než kandidáti {other_digits}. Kdyby buňka {cell} neobsahovala {digit}, měla by každá nevyřešená buňka právě dva kandidáty a úloha by přestala mít jednoznačné řešení. V buňce {cell} proto musí být {digit}.',
  'hint.bug-plus-one.place':
    'Doplňte {digit} do buňky {cell}. Tento vzor s jedním kandidátem navíc zachovává jednoznačnost řešení a nazývá se {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Nevyřešené buňky {cells} tvoří čtyři rohy obdélníku.',
  'hint.unique-rectangle.pair-corners':
    'V buňkách {cells} jsou jedinými kandidáty číslice {digits}.',
  'hint.unique-rectangle.third-corner':
    'Buňka {cell} má také právě kandidáty {digits}. Stejnou dvojici tak mají už tři rohy.',
  'hint.unique-rectangle.expanded-corner':
    'Buňka {cell} má kandidáty {digits}; jako jediný roh navíc obsahuje kandidáta {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Kdyby byla v buňce {cell} umístěna kterákoli z číslic {digits}, bylo by možné tyto dvě číslice ve všech čtyřech rozích zaměnit, aniž by se porušilo kterékoli omezení v příslušných řádcích, sloupcích nebo blocích. Úloha by pak měla dvě řešení. Odstraňte proto {digits} a ponechte {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'V buňce {cell} zbývá jediná číslice: {digit}. Doplňte ji. Tento postup se nazývá {strategy}.',
  'hint.unique-rectangle.observe':
    'Buňky v {cells} tvoří obdélník a všechny obsahují pár {digits}.',
  'hint.unique-rectangle.type1':
    'Tři rohy obsahují přesně {digits}. Pokud by {cell} také používal jednu z číslic, obdélník by umožňoval dvě zaměnitelná řešení.',
  'hint.unique-rectangle.type2-first-expanded':
    'Kandidáty buňky {cell} tvoří číslice {pair} a navíc {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'Také buňka {cell} má kandidáty {pair} a navíc {extra_digit}. Oba rozšířené rohy tedy sdílejí dodatečného kandidáta {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Alespoň jedna z buněk {cells} musí obsahovat {extra_digit}, jinak by záměnou hodnot v obdélníku vzniklo druhé řešení. Buňka {target} vidí obě tyto buňky, a proto nemůže obsahovat {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'V buňce {cell} zbývá jediná číslice: {digit}. Doplňte ji. Tento postup se nazývá {strategy}.',
  'hint.unique-rectangle.type2':
    'Dva rozšířené rohy u {cells} sdílejí dalšího kandidáta {digit}, takže žádná buňka, která vidí oba rohy, nemůže obsahovat {digit}.',
  'hint.unique-rectangle.type3':
    'Další číslice {digits} v obdélníku se kombinují se {cells} jako vyhrazená podmnožina v {unit}, takže tyto číslice mohou být odstraněny jinde v této jednotce.',
  'hint.unique-rectangle.type3-first-expanded':
    'Také buňka {cell} má kandidáty {pair} a navíc {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Také buňka {cell} má kandidáty {pair} a navíc {extra_digit}. Alespoň jeden z rozšířených rohů musí obsahovat dodatečnou číslici; jinak by bylo možné dvojici {pair} ve všech čtyřech rozích zaměnit a získat dvě řešení.',
  'hint.unique-rectangle.type3-partner':
    'Buňka {cell} může obsahovat pouze číslice {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Jedna z buněk {corners} musí obsahovat jednu z číslic {digits} a buňka {partner} druhou. Tyto číslice jsou v {unit} vyhrazené, takže buňka {target} nemůže obsahovat {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'V buňce {cell} zbývá jediná číslice: {digit}. Doplňte ji. Tento postup se nazývá {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Také buňka {cell} má kandidáty {pair} a navíc {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Také buňka {cell} má kandidáty {pair} a navíc {extra_digit}. Oba rozšířené rohy nyní obsahují dvojici obdélníku.',
  'hint.unique-rectangle.type4':
    'Kandidát {digit} tvoří v buňkách {cells} konjugovaný pár v {unit}. Kandidát {removed_digit} proto nemůže zůstat v žádném z rozšířených rohů, protože by tím byla možná záměna hodnot vedoucí ke druhému řešení.',
  'hint.unique-rectangle.type4-apply':
    'Odstraňte kandidáta {digit} z buněk {cells}. Tento postup založený na zachování jednoznačnosti řešení se nazývá {strategy}.',
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
