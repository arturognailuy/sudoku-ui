import type { MessageCatalog } from './types';

export const nl: MessageCatalog = {
  'common.language.label': 'Taal',
  'common.language.auto': 'Auto',
  'common.language.en': 'Engels',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'Portugees (Brazilië)',
  'common.language.pt-BR.short': 'Portugees',
  'common.language.es': 'Spaans',
  'common.language.ja': '日本語',
  'common.language.ko': '한국어',
  'common.language.fr': 'Frans',
  'common.language.de': 'Duits',
  'common.language.ru': 'Русский',
  'common.language.ar': 'العربية',
  'common.language.id': 'Bahasa Indonesië',
  'common.language.id.short': 'Indonesië',
  'common.language.hi': 'Ja',
  'common.language.it': 'Italiaans',
  'common.language.tr': 'Turkçe',
  'common.language.vi': 'Tiếng Việt',
  'common.language.uk': 'Українська',
  'common.language.nl': 'Nederlands',
  'common.language.pl': 'Polski',
  'common.language.th': 'ไทย',
  'common.language.fil': 'Filipino',
  'common.language.ms': 'Bahasa Melayu',
  'common.language.ms.short': 'Melayu',
  'common.language.cs': 'Čeština',
  'common.language.sv': 'Svenska',
  'accessibility.language.changed': 'Taal gewijzigd in {language}.',
  'common.difficulty.easy': 'Makkelijk',
  'common.difficulty.medium': 'Gemiddeld',
  'common.difficulty.hard': 'Moeilijk',
  'common.difficulty.expert': 'Expert',
  'common.difficulty.evil': 'Extreem',
  'difficulty.easy.name': 'Makkelijk',
  'difficulty.medium.name': 'Gemiddeld',
  'difficulty.hard.name': 'Moeilijk',
  'difficulty.expert.name': 'Expert',
  'difficulty.evil.name': 'Extreem',
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
  'hint.value-correction.title': 'Corrigeer deze waarde',
  'hint.candidate-correction.title': 'Herstel de kandidaten in deze cel',
  'hint.value-correction.summary':
    'De waarde bij {cell} is in strijd met de puzzel. Wis het voordat u verdergaat.',
  'hint.candidate-correction.summary':
    'Bouw de kandidaten in {cell} opnieuw op aan de hand van de geaccepteerde waarden in de rij, kolom en het blok voordat je verdergaat.',
  'hint.strategy.summary':
    'Doorloop de {steps}-stappen om {strategy} te begrijpen en toe te passen.',
  'hint.value-correction.observe':
    'Controleer {cell}. De ingevoerde waarde past niet bij het bord.',
  'hint.value-correction.conclude':
    'Wis de waarde bij {cell} zodat het kandidatenraster vervolgens kan worden gecontroleerd.',
  'hint.candidate-correction.observe':
    'Controleer {cell}. De kandidaten komen niet overeen met het bord.',
  'hint.candidate-correction.compare':
    'Begin opnieuw met de geaccepteerde waarden in de rij, kolom en het blok.',
  'hint.candidate-correction.conclude':
    'Stel de kandidaten in {cell} opnieuw in op alle cijfers die volgens de rij, kolom en het blok zijn toegestaan.',
  'hint.strategy.observe':
    'Controleer de gemarkeerde cellen, kandidaten, rijen, kolommen en vakken.',
  'hint.strategy.compare':
    'Vergelijk de gemarkeerde beperkingen om het geforceerde resultaat te vinden.',
  'hint.strategy.conclude':
    'Pas het gemarkeerde resultaat toe. Dit patroon is {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Kandidaat {digit} vormt twee afwisselende groepen: A bij {group_a} en B bij {group_b}.',
  'hint.coloring.alternatives':
    'Elke solide link betekent dat precies één eindpunt {digit} bevat, dus de gekoppelde kandidaten wisselen af \u200b\u200btussen groepen A en B. Een conflict kan één groep uitsluiten, terwijl een cel die beide groepen ziet {digit} niet kan bevatten.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'De gekoppelde kandidaten dwingen de uitslag af voor {colored_digit}. {candidates} verwijderen. Dit patroon is {strategy}.',
  'hint.coloring.place':
    'De gekoppelde kandidaten voor {colored_digit} dwingen de uitslag af. Plaats {digit} in {cell}. Dit patroon is {strategy}.',
  'hint.x-cycle.opening':
    'In {unit} kan {digit} alleen in {cells} voorkomen. Eén van deze twee cellen moet {digit} bevatten.',
  'hint.x-cycle.assume':
    'Stel dat {start} niet {digit} was. Dan zou {forced} {digit} moeten zijn. Dat betekent dat {blocked} geen {digit} kan zijn, dus dwingt {unit} {digit} naar {result}.',
  'hint.x-cycle.follow':
    'Omdat {true_cell} {digit} is, kan {blocked} niet {digit} zijn. {unit} forceert daarom {digit} in {result}.',
  'hint.x-cycle.close':
    'Omdat {true_cell} {digit} is, kan {blocked} niet {digit} zijn. In {unit} blijft {result} de enige plaats voor {digit}.',
  'hint.x-cycle.place':
    'De uitgangsaanname dat {assumption} niet {digit} was, leidt ertoe dat {cell} {digit} is, dus de aanname kan niet waar zijn. Plaats {digit} in {cell}. Dit patroon heet {strategy}.',
  'hint.xy-chain.start':
    '{cell} heeft alleen de kandidaten {first_digit} en {second_digit}. De cel is {endpoint_digit}, of moet, als hij niet {endpoint_digit} is, {other_digit} zijn.',
  'hint.xy-chain.assume':
    'Stel dat {start} niet {endpoint_digit} is. Dan moet de cel {start_value} zijn. Omdat {start} en {middle} dezelfde {first_unit} delen, kan {middle} niet {start_value} zijn en moet die {middle_value} zijn. Daardoor kan {result} in {second_unit} niet {middle_value} zijn en moet die {result_value} zijn.',
  'hint.xy-chain.follow':
    'Omdat {start} {start_value} is, kan {middle} in {first_unit} niet {start_value} zijn en moet die {middle_value} zijn. Omdat {middle} en {result} dezelfde {second_unit} delen, kan {result} niet {middle_value} zijn en moet die {result_value} zijn.',
  'hint.xy-chain.reach':
    'Omdat {start} {start_value} is, kan {endpoint} niet {shared_digit} zijn. De enige andere kandidaat is {endpoint_digit}, dus moet de cel {endpoint_digit} zijn.',
  'hint.xy-chain.place':
    'Als {first_endpoint} {endpoint_digit} is, bevat het eerste eindpunt {endpoint_digit}. Zo niet, dan dwingt de keten {endpoint_digit} af in het andere eindpunt, {second_endpoint}. Minstens één eindpunt bevat dus {endpoint_digit}. {cell} ziet beide eindpunten en kan daarom niet {endpoint_digit} zijn. Plaats {digit} in {cell}. Dit patroon heet {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Begin bij {cell}. De rij, kolom en het blok bevatten al {excluded_digits}.',
  'hint.naked-single.only':
    'Daarom is {digit} het enige cijfer dat in {cell} kan.',
  'hint.naked-single.apply':
    'Plaats {digit} in {cell}. Een cel met maar één kandidaat is een {strategy}.',
  'hint.hidden-single.inspect': 'Controleer in {unit} waar {digit} kan staan.',
  'hint.hidden-single.blockers':
    'De geplaatste {digit}s in {blockers} sluiten {digit} uit in alle andere lege cellen van {unit}.',
  'hint.hidden-single.only': 'Alleen {cell} kan nog {digit} bevatten.',
  'hint.hidden-single.apply':
    'Plaats {digit} in {cell}. Als een cijfer in een rij, kolom of blok nog maar één mogelijke cel heeft, is dit een {strategy}.',
  'hint.naked-pair.inspect':
    'Begin in {unit}: {cell} kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-pair.match':
    '{cell} heeft dezelfde twee kandidaten: {first_digit} en {second_digit}.',
  'hint.naked-pair.reserve':
    'Deze twee cellen moeten {digits} in een bepaalde volgorde bevatten, dus kandidaat {digit} kan in geen enkele andere cel in {unit} blijven staan.',
  'hint.naked-pair.apply':
    'Verwijder {candidates}; met deze stap wordt geen waarde geplaatst. Dit patroon is een {strategy}.',
  'hint.naked-triple.first':
    'Begin in {unit}: {cell} kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-triple.second':
    'Voeg {cell} toe; deze kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-triple.third':
    'Voeg {cell} toe; deze kan alleen {first_digit} of {second_digit} bevatten. De drie cellen bevatten nu alleen {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Deze drie cellen moeten {reserved_digits} in een willekeurige volgorde bevatten. Daardoor verdwijnen {removed_digits} uit {cell} en blijft alleen {remaining_digit} over.',
  'hint.naked-triple.apply':
    'Plaats {digit} in {cell}. Drie cellen waarvan de kandidaten beperkt zijn tot dezelfde drie cijfers vormen een {strategy}.',
  'hint.naked-quad.cell': 'In {unit} bevat {cell} alleen {digits}.',
  'hint.subset-reservation.observe':
    'In {unit} bevatten {cells} alleen {digits}.',
  'hint.subset-reservation.explain':
    'Die vakjes reserveren {digits} in {unit}, zodat geen ander vakje daar deze cijfers kan bevatten.',
  'hint.subset-reservation.apply':
    'Verwijder {candidates}. Dit patroon heet {strategy}.',
  'hint.subset-reservation.place':
    'Plaats {digit} in {cell}. Dit patroon heet {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Omdat {digits} tot die vakjes in {unit} beperkt zijn, kunnen die vakjes geen andere kandidaten bevatten.',
  'hint.hidden-subset-confinement.apply':
    'Verwijder {candidates} uit de beperkte vakjes. Dit patroon heet {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Plaats {digit} in {cell} nadat de andere kandidaten zijn verwijderd. Dit patroon heet {strategy}.',
  'hint.hidden-pair.first':
    'In {unit} komt kandidaat {digit} alleen voor in {cells}.',
  'hint.hidden-pair.second':
    'Kandidaat {digit} is ook beperkt tot dezelfde twee vakjes. Samen moeten {digits} in een willekeurige volgorde {cells} bezetten.',
  'hint.hidden-pair.consequence':
    'Die twee vakjes zijn gereserveerd voor {digits}, dus hun andere kandidaten moeten weg: {candidates}.',
  'hint.hidden-pair.apply':
    'Verwijder {candidates}. Dit patroon heet {strategy}.',
  'hint.hidden-triple.first':
    'In {unit} komt kandidaat {digit} alleen voor in {cells}.',
  'hint.hidden-triple.second':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-triple.third':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-triple.consequence':
    'Omdat {digits} tot die vakjes in {unit} beperkt zijn, kunnen die vakjes geen andere kandidaten bevatten.',
  'hint.hidden-triple.apply':
    'Verwijder {candidates} uit de beperkte vakjes. Dit patroon heet {strategy}.',
  'hint.hidden-quad.first':
    'In {unit} komt kandidaat {digit} alleen voor in {cells}.',
  'hint.hidden-quad.second':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.third':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.fourth':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.consequence':
    'Omdat {digits} tot die vakjes in {unit} beperkt zijn, kunnen die vakjes geen andere kandidaten bevatten.',
  'hint.hidden-quad.apply':
    'Verwijder {candidates} uit de beperkte vakjes. Dit patroon heet {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'In {source_unit} is kandidaat {digit} beperkt tot {intersection_unit} bij {cells}.',
  'hint.intersection-confinement.explain':
    'Omdat elke {digit} in {source_unit} in {intersection_unit} ligt, kunnen cellen buiten de bron maar binnen het snijpunt deze niet bevatten.',
  'hint.intersection-confinement.apply':
    'Kandidaat {digit} verwijderen uit {cells}. Dit patroon is {strategy}.',
  'hint.intersection-confinement.place':
    'Plaats {digit} in {cell} na het aanbrengen van de kruising. Dit patroon is {strategy}.',
  'hint.fish-confinement.observe':
    'In {base_units} komt kandidaat {digit} alleen voor in {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidaat {digit} is van {base_units} beperkt tot {cover_units}; die dekkende eenheden moeten hem dus via de gemarkeerde basisposities krijgen.',
  'hint.swordfish.consequence':
    'Eén {digit} uit elk van {base_units} moet in {cover_units} komen. Samen gebruiken die plaatsingen elk van de drie kolommen één keer, dus kan daar geen andere {digit} blijven staan.',
  'hint.jellyfish.consequence':
    'Eén {digit} uit elk van {base_units} moet in {cover_units} komen. Samen gebruiken die plaatsingen elk van de vier kolommen één keer, dus kan daar geen andere {digit} blijven staan.',
  'hint.fish-confinement.apply':
    'Verwijder kandidaat {digit} uit {cells}. Dit patroon heet {strategy}.',
  'hint.x-wing.first':
    'In {base_unit} komt kandidaat {digit} alleen voor in {cover_units}.',
  'hint.x-wing.second':
    'Hetzelfde geldt in {base_unit}: kandidaat {digit} komt alleen voor in {cover_units}. Beide rijen gebruiken dezelfde twee kolommen.',
  'hint.x-wing.consequence':
    'Elk van {base_units} moet een {digit} bevatten, dus elk van {cover_units} krijgt een {digit} uit een van die rijen. Andere {digit}en in die kolommen kunnen weg.',
  'hint.x-wing.apply':
    'Verwijder kandidaat {digit} uit {cells}. Dit patroon heet {strategy}.',
  'hint.pivot-wing.observe':
    'Bij {pivot} verbinden kandidaten {pivot_digits} de vleugelcellen bij {wing_cells}.',
  'hint.pivot-wing.explain':
    'Elke vleugel bij {wing_cells} deelt één kandidaat met de spil bij {pivot}, en beide vleugels bevatten {shared_digit}. Welke draaikandidaat ook waar is, één vleugel moet {shared_digit} bevatten.',
  'hint.xy-wing.pivot':
    '{pivot} heeft alleen de kandidaten {digits}. Het moet er één van zijn.',
  'hint.xy-wing.case':
    'Als {pivot} {pivot_digit} is, kan {wing} geen {pivot_digit} zijn. De enige andere kandidaat is {shared_digit}, dus {wing} moet {shared_digit} zijn.',
  'hint.xy-wing.guarantee':
    'Welke kandidaat in {pivot} ook waar is, minstens één vleugel {wing_cells} moet {shared_digit} zijn. We hoeven niet te weten welke.',
  'hint.xy-wing.apply':
    '{cells} zien beide vleugels {wing_cells}. Omdat minstens één {shared_digit} is, verwijder je {shared_digit} uit die cellen. Dit patroon heet {strategy}.',
  'hint.xy-wing.place':
    '{cell} ziet beide vleugels {wing_cells}. Omdat minstens één {shared_digit} is, kan {cell} geen {shared_digit} zijn. Plaats de enige andere kandidaat {digit}. Dit patroon heet {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} heeft alleen de kandidaten {digits}. Het moet er één van zijn.',
  'hint.xyz-wing.case':
    'Als {pivot} {pivot_digit} is, kan {wing} in dezelfde {unit} geen {pivot_digit} zijn. De enige andere kandidaat is {shared_digit}, dus {wing} moet {shared_digit} zijn.',
  'hint.xyz-wing.pivot-case':
    'Als {pivot} {shared_digit} is, bevat de spil zelf al {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Welke kandidaat in {pivot} ook juist is, minstens één van {pattern_cells} moet {shared_digit} zijn. We hoeven niet te weten welke cel.',
  'hint.xyz-wing.apply':
    '{target} deelt {first_unit} met {first_pattern_cell}, {second_unit} met {second_pattern_cell} en {third_unit} met {third_pattern_cell}. Omdat minstens één van die drie cellen {shared_digit} is, kan {target} dat niet zijn. Verwijder kandidaat {shared_digit}. Dit patroon heet {strategy}.',
  'hint.strong-link-wing.observe':
    'De cellen {wing_cells} kunnen elk alleen {digits} bevatten.',
  'hint.strong-link-wing.bridge':
    'In {unit} kan kandidaat {link_digit} alleen voorkomen in {link_cells}, dus minstens één van die cellen moet {link_digit} bevatten.',
  'hint.strong-link-wing.force':
    'Als {first_link_cell} {link_digit} is, kan {first_wing_cell} geen {link_digit} zijn en moet die {forced_digit} zijn. Als {second_link_cell} {link_digit} is, moet {second_wing_cell} {forced_digit} zijn. Minstens één van die twee cellen is dus {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Minstens één van de cellen {wing_cells} is {digit}. Verwijder kandidaat {digit} uit {cells}, omdat die cellen beide zien. Dit patroon heet {strategy}.',
  'hint.strong-link-wing.place':
    'Minstens één van de cellen {wing_cells} is {removed_digit}. Verwijder kandidaat {removed_digit} uit {cell}, omdat die beide ziet, en plaats daar {digit}. Dit patroon heet {strategy}.',
  'hint.relational-wing.apply':
    'Kandidaat {digit} verwijderen uit {cells}. Dit patroon is {strategy}.',
  'hint.relational-wing.place':
    'Verwijder kandidaat {removed_digit} uit {cell}, dus plaats daar {digit}. Dit patroon is {strategy}.',
  'hint.bug-plus-one.observe':
    'Elke andere onopgeloste cel heeft twee kandidaten, terwijl {cell} {digits} heeft.',
  'hint.bug-plus-one.explain':
    'Als u {digit} uit {cell} verwijdert, blijft elke onopgeloste cel biwaarde en wordt de oplossing uitwisselbaar binnen {units}, dus {digit} moet waar zijn.',
  'hint.bug-plus-one.place':
    'Plaats {digit} in {cell}. Deze uniciteitsuitzondering is {strategy}.',
  'hint.unique-rectangle.observe':
    'De cellen bij {cells} vormen een rechthoek en bevatten allemaal het paar {digits}.',
  'hint.unique-rectangle.type1':
    'Drie hoeken bevatten precies {digits}. Als {cell} ook een van beide cijfers zou gebruiken, zou de rechthoek twee uitwisselbare oplossingen mogelijk maken.',
  'hint.unique-rectangle.type2':
    'De twee uitgevouwen hoeken bij {cells} delen de extra kandidaat {digit}, dus elke cel die beide hoeken ziet, kan {digit} niet bevatten.',
  'hint.unique-rectangle.type3':
    'De extra cijfers {digits} in de rechthoek worden gecombineerd met {cells} als een gereserveerde subset in {unit}, zodat die cijfers elders in die eenheid kunnen worden verwijderd.',
  'hint.unique-rectangle.type4':
    'Kandidaat {digit} verschijnt in {cells} als een geconjugeerd paar in {unit}, dus kandidaat {removed_digit} kan geen van beide uitgezette hoeken bezetten zonder verwisselbare oplossingen te creëren.',
  'hint.unique-rectangle.apply':
    'Verwijder {candidates}. Deze uniciteitsrelatie is {strategy}.',
  'hint.unique-rectangle.place':
    'Plaats {digit} in {cell} na het toepassen van de uniciteitsrelatie. Dit patroon is {strategy}.',
  'hint.implication-chain.observe':
    'Begin bij {cell}, met alleen de kandidaten {digits}.',
  'hint.implication-chain.explain':
    '{from} en {to} delen een kandidaat en zien elkaar, zodat die kandidaat niet in beide waar kan zijn; de implicatie gaat verder.',
  'hint.implication-chain.apply':
    'Eén eindpunt moet {digit} bevatten; verwijder daarom kandidaat {digit} uit {cells}. Dit patroon heet {strategy}.',
  'hint.narration.apply': 'Pas de aftrek toe:',
  'hint.narration.look-at': 'Kijken naar',
  'hint.narration.value-conflict':
    '. De ingevoerde waarde is in strijd met de puzzel.',
  'hint.narration.clear-value': 'Wis de waarde op',
  'hint.narration.clear-value-tail':
    'zodat het kandidatenraster vervolgens kan worden gecontroleerd.',
  'hint.narration.candidate-inconsistent':
    '. De kandidaatstatus komt niet overeen met de puzzel.',
  'hint.narration.reset-candidates': 'Stel de kandidaten opnieuw in bij ',
  'hint.narration.reset-candidates-tail':
    ' op alle cijfers die zijn toegestaan door de geaccepteerde waarden in de rij, kolom en het blok.',
  'hint.narration.only-candidate': '. Er is slechts één kandidaat:',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'Omdat er geen ander cijfer in kan',
  'hint.narration.place': ', plaats',
  'hint.narration.naked-single-tail': 'daar. Dit heet een Naked Single.',
  'hint.narration.in-unit': 'In',
  'hint.narration.consider-digit': ', bedenk waar',
  'hint.narration.can-appear': 'kan verschijnen.',
  'hint.narration.other-cells': 'Elke andere lege cel erin',
  'hint.narration.cannot-contain': 'kan niet bevatten',
  'hint.narration.leaving-only': ', alleen weggaan',
  'hint.narration.because-unit': 'Omdat',
  'hint.narration.still-needs': 'heeft nog steeds nodig',
  'hint.narration.only-cell': 'En',
  'hint.narration.hidden-single-tail': 'is de enige mogelijke cel, plaats',
  'hint.narration.hidden-single-name': 'daar. Dit heet een Hidden Single.',
  'hint.narration.place-result': 'plaats',
  'hint.narration.in': 'in',
  'hint.narration.remove': 'kandidaat verwijderen',
  'hint.narration.from': 'van',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. Dit is het {strategy}-resultaat.',
  'welcome.eyebrow': 'Nieuwe puzzel',
  'welcome.title': 'Kies een moeilijkheidsgraad',
  'welcome.lede': 'Kies een niveau en begin wanneer je er klaar voor bent.',
  'welcome.difficulty': 'Moeilijkheidsgraad',
  'welcome.start': 'Start een puzzel: {difficulty}',
  'welcome.starting': 'Puzzel starten: {difficulty}…',
  'welcome.preview': 'Sudoku-puzzelvoorbeeld',
  'loading.initial': 'Je puzzel laden…',
  'loading.account.eyebrow': 'Rekening',
  'loading.account.title': 'Je puzzel opslaan in je account…',
  'loading.account.detail':
    'Je voortgang blijft op dit apparaat staan ​​totdat het opslaan van het account wordt bevestigd.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Terugkerend naar de voorpagina…',
  'loading.home.detail':
    'Controleren op de nieuwste interface voordat de niveauselectie wordt weergegeven.',
  'loading.restart.eyebrow': 'Zelfde puzzel',
  'loading.restart.title': 'Deze puzzel opnieuw beginnen...',
  'loading.restart.detail':
    'Het oude bord op slot houden totdat de nieuwe poging klaar is.',
  'loading.new.eyebrow': 'Nieuwe puzzel',
  'loading.new.title': 'Een nieuw bord voorbereiden: {difficulty}…',
  'loading.new.detail': 'Maak nu een nieuwe puzzel. Je speelt zo.',
  'confirmation.home.eyebrow': 'Terug naar huis?',
  'confirmation.home.title': 'Laat deze puzzel liggen',
  'confirmation.home.description':
    'Je huidige voortgang wordt niet langer automatisch geopend op dit apparaat.',
  'confirmation.home.cancel': 'Blijf spelen',
  'confirmation.home.confirm': 'Terug naar de voorpagina',
  'confirmation.restart.eyebrow': 'Opnieuw beginnen?',
  'confirmation.restart.title': 'Begin opnieuw',
  'confirmation.restart.description':
    'Speel deze puzzel opnieuw vanuit de oorspronkelijke gegevens, of kies een andere puzzel.',
  'confirmation.restart.replay.title': 'Speel deze puzzel opnieuw',
  'confirmation.restart.replay.description':
    'Bewaar deze gegevens en reset deze poging.',
  'confirmation.restart.different.title': 'Speel een andere puzzel',
  'confirmation.restart.different.description':
    'Kies een niveau voor een nieuw bord.',
  'confirmation.restart.different.level':
    'Niveau voor de verschillende puzzels',
  'common.cancel': 'Annuleren',
  'account.confirm.deleteGame.eyebrow': 'Opgeslagen spel verwijderen?',
  'account.confirm.deleteGame.title': 'Verwijder dit spel',
  'account.confirm.deleteGame.description':
    'Deze puzzel en de voortgang ervan worden permanent verwijderd uit Mijn games. Dit kan niet ongedaan worden gemaakt.',
  'account.confirm.deleteGame.action': 'Spel verwijderen',
  'account.confirm.deleteGame.pending': 'Opgeslagen spel verwijderen…',
  'account.confirm.deleteAll.eyebrow': 'Elk opgeslagen spel verwijderen?',
  'account.confirm.deleteAll.title': 'Verwijder alle spellen',
  'account.confirm.deleteAll.description':
    'Elke puzzel en alle voortgang in Mijn games worden permanent verwijderd. Dit kan niet ongedaan worden gemaakt.',
  'account.confirm.deleteAll.action': 'Verwijder alle spellen',
  'account.confirm.deleteAll.pending': 'Alle games verwijderen…',
  'account.confirm.revoke.eyebrow': 'Accountbeveiliging',
  'account.confirm.revoke.title': 'Meld u overal af',
  'account.confirm.revoke.description':
    'Hiermee wordt u uitgelogd op elk apparaat, inclusief dit apparaat. Je account en opgeslagen spellen blijven behouden.',
  'account.confirm.revoke.action': 'Meld u overal af',
  'account.confirm.revoke.pending': 'Overal uitloggen...',
  'account.confirm.deleteAccount.eyebrow': 'Permanente actie',
  'account.confirm.deleteAccount.title': 'Verwijder uw account',
  'account.confirm.deleteAccount.description':
    'Uw identiteit, elke ingelogde sessie en alle opgeslagen games worden permanent verwijderd. De gedeelde puzzelcatalogus blijft onaangetast.',
  'account.confirm.deleteAccount.action': 'Account verwijderen',
  'account.confirm.deleteAccount.pending': 'Account verwijderen…',
  'account.confirm.typeEmail': 'Typ {email} om te bevestigen',
  'account.label': 'Rekening',
  'account.continue.title': 'Ga door op andere apparaten',
  'account.continue.detail':
    'Log in om het actieve spel van deze browser automatisch op te slaan.',
  'account.signIn': 'Log in met Google',
  'account.signIn.short': 'Log in',
  'game.title': 'Puzzel: {difficulty}',
  'game.statusActions': 'Spelstatus en acties',
  'game.elapsed': 'Verstreken tijd',
  'game.mistakes': 'Fouten {count}',
  'game.mistakes.label': '{count, plural, one {# fout} other {# fouten} }',
  'game.resume': 'Cv',
  'game.pause': 'Pauze',
  'status.resumed': 'Puzzel hervat.',
  'status.paused': 'Puzzel onderbroken.',
  'status.restarted': 'Puzzel opnieuw gestart. Nieuwe poging, zelfde puzzel.',
  'status.hintClosed': 'Tip gesloten. Je puzzel is ongewijzigd.',
  'status.strategyApplied':
    'Strategie toegepast. Je kunt het in één stap ongedaan maken.',
  'status.correctionApplied':
    'Correctie toegepast. Je kunt het in één stap ongedaan maken.',
  'status.hintAlreadyApplied': 'Deze hint is al terug te vinden op het bord.',
  'status.hintRefreshed': 'Het bord is veranderd, dus de hint is vernieuwd.',
  'status.accountSaved': 'Spel opgeslagen in je account.',
  'status.waitBeforeLeaving':
    'Wacht op lopende zetten voordat je deze puzzel verlaat.',
  'status.selectEditableCell':
    'Selecteer een bewerkbare cel voordat u een getal invoert.',
  'status.savingAccount': 'Je lokale spel opslaan op je account...',
  'status.restoring': 'Je puzzel herstellen...',
  'status.restored': 'Je lokale puzzel is hersteld.',
  'status.puzzleReady': 'Puzzel klaar: {difficulty}.',
  'status.puzzleRestored': 'Puzzel hersteld: {difficulty}.',
  'status.waitBeforeStarting':
    'Wacht op lopende zetten voordat je aan een nieuwe puzzel begint.',
  'status.solved': 'Opgelost! Prachtig werk.',
  'status.moveSaved': 'Verplaatsing opgeslagen.',
  'status.waitBeforeHint': 'Wacht op lopende zetten voordat je een hint opent.',
  'status.hintReady': 'Tip klaar. Begin met stap 1.',
  'status.openingSaved': 'Je opgeslagen spel openen…',
  'status.savedDeleted': 'Opgeslagen spel verwijderd.',
  'status.allDeleted': 'Alle opgeslagen spellen verwijderd.',
  'status.signedOut': 'Uitgelogd. Je accountgames blijven opgeslagen.',
  'status.revoked': 'Overal uitgelogd. Meld u opnieuw aan om door te gaan.',
  'status.accountDeleted': 'Account en opgeslagen games verwijderd.',
  'retry.saving': 'Probeer opnieuw op te slaan',
  'retry.restoring': 'Probeer opnieuw te herstellen',
  'retry.connection': 'Controleer de verbinding',
  'retry.starting': 'Probeer opnieuw te beginnen',
  'retry.move': 'Probeer de zet opnieuw',
  'retry.hint': 'Probeer het opnieuw',
  'retry.time': 'Probeer het opnieuw om tijd te besparen',
  'retry.progress': 'Probeer opnieuw de voortgang op te slaan',
  'retry.leaving': 'Probeer opnieuw te vertrekken',
  'retry.opening': 'Probeer opnieuw te openen',
  'retry.deleting': 'Probeer opnieuw te verwijderen',
  'retry.signOut': 'Probeer opnieuw uit te loggen',
  'retry.revoke': 'Probeer opnieuw overal uit te loggen',
  'retry.deleteAccount': 'Probeer het account opnieuw te verwijderen',
  'error.accountSave':
    'Je lokale spel is veilig, maar kan niet in je account worden opgeslagen.',
  'error.restoring': 'Je puzzel kan niet worden hersteld.',
  'error.connection':
    'De gameservice was niet bereikbaar. Controleer uw verbinding en probeer het opnieuw.',
  'error.http':
    'De gameservice heeft fout {status} geretourneerd. Probeer het opnieuw.',
  'error.unavailable':
    'De gameservice is tijdelijk niet beschikbaar. Je board is veilig; probeer het opnieuw.',
  'error.starting': 'Het spel kon niet worden gestart.',
  'error.signInAgain': 'Meld u opnieuw aan om zetten op te slaan.',
  'error.localUnavailable': 'Het lokale spel is niet beschikbaar.',
  'error.move': 'De zet kon niet worden opgeslagen.',
  'error.currentUnavailable': 'Het huidige spel is niet beschikbaar.',
  'error.hintChanged': 'Het bord veranderde terwijl de hint werd voorbereid.',
  'error.hint': 'De hint kon niet worden voorbereid.',
  'error.time': 'De laatste speeltijd kon niet worden opgeslagen.',
  'error.timer': 'De laatste timerstatus kon niet worden opgeslagen.',
  'error.leaving': 'De lokale puzzel kon niet worden opgelost.',
  'error.opening': 'Dat opgeslagen spel kon niet worden geopend.',
  'error.deleteGame': 'Het opgeslagen spel kon niet worden verwijderd.',
  'error.deleteAll': 'De opgeslagen spellen konden niet worden verwijderd.',
  'error.signOut': 'U kunt niet worden afgemeld.',
  'error.revoke': 'Sessies konden niet worden ingetrokken.',
  'error.deleteAccount': 'Het account kon niet worden verwijderd.',
  'error.invalid-request': 'Het verzoek is ongeldig.',
  'error.invalid-json': 'Het verzoek bevat ongeldige JSON.',
  'error.unsupported-media-type':
    'Het verzoek Content-Type wordt niet ondersteund.',
  'error.payload-too-large': 'Het verzoek is te groot.',
  'error.unauthorized': 'Er is toestemming vereist.',
  'error.forbidden-origin': 'Deze verzoekoorsprong is niet toegestaan.',
  'error.session-not-found': 'De gamesessie is niet gevonden.',
  'error.revision-conflict':
    'Het bord veranderde voordat deze zet werd toegepast.',
  'error.invalid-session': 'De spelsessie is ongeldig.',
  'error.invalid-action': 'Deze spelactie is ongeldig.',
  'error.invalid-cell': 'Deze cel is ongeldig.',
  'error.immutable-cell': 'Een bepaalde cel kan niet worden gewijzigd.',
  'error.note-not-allowed':
    'In deze cel kunnen kandidaten niet worden gewijzigd.',
  'error.no-undo': 'Er is geen actie die ongedaan kan worden gemaakt.',
  'error.no-redo': 'Er is geen actie om opnieuw uit te voeren.',
  'error.no-hint': 'Er is geen hint beschikbaar.',
  'error.stale-hint': 'Het bord veranderde nadat deze hint was voorbereid.',
  'error.persistence-failed': 'Het spel kon niet worden opgeslagen.',
  'error.internal-error': 'Het verzoek kon niet worden voltooid.',
  'error.account-unavailable': 'Accountfuncties zijn niet beschikbaar.',
  'error.account-unauthorized': 'Een geldige aanmeldingssessie is vereist.',
  'error.csrf-failed':
    'Deze aanmelding kan niet worden geverifieerd. Meld u opnieuw aan.',
  'error.account-game-not-found': 'Het opgeslagen spel is niet gevonden.',
  'error.guest-revision-conflict':
    'Het lokale spel veranderde voordat deze actie werd toegepast.',
  'error.guest-claim-conflict':
    'Dit lokale spel is al opgeslagen op een account.',
  'error.malformedDescriptor': 'De uitleg kon niet worden weergegeven.',
  'account.close': 'Sluit het accountpaneel',
  'account.games.title': 'Mijn spellen',
  'account.games.deleteAll': 'Alles verwijderen',
  'account.games.deletingAll': 'Alles verwijderen…',
  'account.games.empty': 'Nog geen opgeslagen spellen.',
  'account.games.puzzle': '{difficulty}-puzzel',
  'account.games.finished': 'Afgerond',
  'account.games.inProgress': 'In uitvoering',
  'account.games.saved': 'Opgeslagen spel',
  'account.games.open': 'Open',
  'account.games.opening': 'Opening…',
  'account.games.delete': 'Verwijderen',
  'account.games.deleting': 'Verwijderen…',
  'account.signOut': 'Meld u af',
  'account.signingOut': 'Afmelden…',
  'account.settings': 'Accountinstellingen',
  'account.revoke': 'Meld u overal af',
  'account.delete': 'Account verwijderen',
  'board.label': 'Sudoku-spelbord',
  'board.cell':
    'Rij {row}, kolom {column}, {content}{pending, select, true {, controle} other {} }{invalid, select, true {, ongeldig} other {} }{hint, select, none {} other {, {hint}} }',
  'board.cell.given': 'gegeven {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'leeg, kandidaten {candidates}',
  'board.cell.empty': 'leeg',
  'board.hint.focus': 'hint focus',
  'board.hint.premise': 'hint bewijs',
  'board.hint.eliminated': 'kandidaat geëlimineerd',
  'board.hint.conclusion': 'hint conclusie',
  'board.hint.problem': 'correctie nodig',
  'board.hint.extra': 'onmogelijke kandidaat',
  'board.hint.group': 'groep {group}',
  'board.hint.chain': 'kettingpositie {position}',
  'board.paused.title': 'Puzzel onderbroken',
  'board.paused.detail': 'Je tijd staat stil.',
  'hint.label': 'Tip',
  'hint.close': 'Dichtbij',
  'hint.strategy.grade': 'Niveau {grade}',
  'hint.applying': 'Tip toepassen...',
  'hint.refreshing': 'Verfrissende tip…',
  'hint.step': 'Stap {current} van {total}',
  'hint.legend.label': 'Visuele hintlegenda',
  'hint.legend.strong': 'Vast: moet bevatten',
  'hint.legend.weak': 'Onderbroken: kan niet allebei',
  'hint.legend.implication': 'Pijl: implicatie',
  'hint.legend.groups': 'A/B: afwisselende groepen',
  'hint.legend.order': 'Nummers: kettingvolgorde',
  'hint.back': 'Rug',
  'hint.next': 'Volgende',
  'hint.apply': 'Tip toepassen',
  'controls.label': 'Spelbesturing',
  'controls.digit.note': 'Notitie {digit} toevoegen of verwijderen',
  'controls.digit.enter': 'Voer {digit} in',
  'controls.hint.preparing': 'Tip voorbereiden…',
  'controls.hint.preparingDetail':
    'De puzzel zichtbaar houden terwijl de volgende stap wordt voorbereid.',
  'controls.complete.eyebrow': 'Puzzel compleet',
  'controls.complete.title': 'Opgelost in {time}',
  'controls.complete.detail':
    'Houd het ritme vast met een ander {difficulty}-bord, of kies een ander niveau.',
  'controls.complete.another': 'Speel nog een {difficulty}',
  'controls.complete.replay': 'Speel deze puzzel opnieuw',
  'controls.complete.choose': 'Kies een ander niveau',
  'controls.pad': 'Cijferblok',
  'controls.pad.notes': 'Numeriek toetsenblok, notitiemodus',
  'controls.modes': 'Invoermodi',
  'controls.notes.on': 'Notities aan',
  'controls.notes.off': 'Notities uit',
  'controls.candidates.on': 'Kandidaten aan',
  'controls.candidates.off': 'Kandidaten uit',
  'controls.actions': 'Puzzelacties',
  'controls.erase': 'Wissen',
  'controls.undo': 'Ongedaan maken',
  'controls.undoing': 'Ongedaan maken…',
  'controls.redo': 'Opnieuw uitvoeren',
  'controls.redoing': 'Opnieuw doen…',
  'controls.hint.reveal': 'Onthul een hint',
  'controls.shortcuts': 'Sneltoetsen',
  'controls.shortcuts.move': 'Beweging',
  'controls.shortcuts.arrows': 'Pijltjestoetsen',
  'controls.shortcuts.enter': 'Voer een nummer in',
  'controls.shortcuts.notes': 'Notities / kandidaten',
  'controls.shortcuts.or': 'of',
  'controls.shortcuts.pause': 'Pauzeer of hervat',
  'controls.shortcuts.hint': 'Open, ga verder of pas een hint toe',
  'controls.shortcuts.hintOther': 'Andere hintbedieningen',
  'hint.target.candidate.visible': 'deze uitgelichte kandidaat',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'kandidaat {value} op rij {row}, kolom {column}',
  'hint.target.cell.visible': 'deze gemarkeerde cel',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'rij {row}, kolom {column}',
  'hint.target.unit.visible': 'dit benadrukte {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'rij',
  'hint.target.column': 'kolom',
  'hint.target.box': 'blok',
  'chrome.home': 'Sudoku-huis',
  'chrome.appearance': 'Verschijning',
  'chrome.theme.use': 'Gebruik het {theme}-thema',
  'chrome.theme.systemTitle': 'Systeemthema ({theme})',
  'chrome.theme.title': '{theme}-thema',
  'chrome.theme.system': 'Systeem',
  'chrome.theme.systemName': 'systeem',
  'chrome.theme.light': 'licht',
  'chrome.theme.dark': 'donker',
  'chrome.connection.connecting': 'Verbinden',
  'chrome.connection.unavailable': 'Dienst niet beschikbaar',
  'chrome.footer.tagline': 'Bedachtzaam spelen, zonder afleiding.',
  'chrome.footer.privacy': 'Privacy',
  'chrome.footer.terms': 'Voorwaarden',
  'chrome.footer.input': 'Toetsenbord en aanraking gereed',
} as const;
