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
  'hint.coloring.pair':
    'In {unit} kan {digit} alleen in {cells} staan. Precies één van die twee cellen bevat dit cijfer; geef de ene cel label A en de andere label B.',
  'hint.coloring.chain':
    'Volg de doorgetrokken sterke koppelingen. Elke sterke koppeling verbindt de enige twee mogelijke posities voor {digit} in een rij, kolom of blok. De labels wisselen door de hele keten af: A bij {group_a} en B bij {group_b}.',
  'hint.coloring.alternatives':
    'Of {digit} staat in alle A-cellen en niet in de B-cellen, of {digit} staat in alle B-cellen en niet in de A-cellen. Voor de eliminatie hoeven we niet te weten welke van beide mogelijkheden geldt.',
  'hint.coloring.elimination':
    '{cell} ziet zowel de A-cel {group_a_cell} als de B-cel {group_b_cell}. Een van die twee bevat {digit}, ongeacht welke kleurgroep geldig is. Die kandidaat kan daarom niet in deze cel staan.',
  'hint.coloring.apply':
    'Verwijder {candidates}. Elke doelcel ziet zowel een A-cel als een B-cel en kan kandidaat {colored_digit} daarom bij geen van beide mogelijke kleurverdelingen behouden. Dit patroon heet {strategy}.',
  'hint.coloring.place':
    'De gekoppelde kandidaten voor {colored_digit} dwingen de uitslag af. Plaats {digit} in {cell}. Dit patroon is {strategy}.',
  'hint.x-cycle.opening':
    'In {unit} kan {digit} alleen in {cells} staan. Een van deze twee cellen moet {digit} bevatten.',
  'hint.x-cycle.assume':
    'Stel dat {start} geen {digit} bevat. Dan moet {forced} {digit} bevatten, waardoor {blocked} geen {digit} kan bevatten. In {unit} blijft dan voor {digit} alleen {result} over.',
  'hint.x-cycle.follow':
    'Omdat {true_cell} {digit} bevat, kan {blocked} geen {digit} bevatten. In {unit} blijft daardoor voor {digit} alleen {result} over.',
  'hint.x-cycle.close':
    'Omdat {true_cell} {digit} bevat, kan {blocked} geen {digit} bevatten. In {unit} is {result} daardoor de enige plaats voor {digit}.',
  'hint.x-cycle.place':
    'De aanname dat {assumption} geen {digit} bevat, leidt ertoe dat {cell} juist {digit} moet bevatten. De aanname kan dus niet kloppen. Plaats {digit} in {cell}. Dit patroon heet {strategy}.',
  'hint.xy-chain.start':
    '{cell} heeft alleen de kandidaten {first_digit} en {second_digit}. De cel bevat dus {endpoint_digit}, of — als {endpoint_digit} afvalt — de andere kandidaat {other_digit}.',
  'hint.xy-chain.assume':
    'Stel dat {start} geen {endpoint_digit} bevat. Dan moet daar {start_value} staan. Omdat {start} en {middle} samen in {first_unit} liggen, kan {middle} geen {start_value} bevatten en moet daar {middle_value} staan. Daardoor kan {result} in {second_unit} geen {middle_value} bevatten en moet daar {result_value} staan.',
  'hint.xy-chain.follow':
    'Omdat {start} {start_value} bevat, kan {middle} in {first_unit} geen {start_value} bevatten en moet daar {middle_value} staan. Omdat {middle} en {result} samen in {second_unit} liggen, kan {result} geen {middle_value} bevatten en moet daar {result_value} staan.',
  'hint.xy-chain.reach':
    'Omdat {start} {start_value} bevat, kan {endpoint} geen {shared_digit} bevatten. De enige andere kandidaat is {endpoint_digit}, dus moet daar {endpoint_digit} staan.',
  'hint.xy-chain.place':
    'Als {first_endpoint} {endpoint_digit} bevat, is het eerste eindpunt daarmee bepaald. Bevat die cel geen {endpoint_digit}, dan dwingt de keten {endpoint_digit} af in het andere eindpunt, {second_endpoint}. Minstens één eindpunt bevat dus {endpoint_digit}. Omdat {cell} beide eindpunten ziet, kan die cel geen {endpoint_digit} bevatten. Plaats {digit} in {cell}. Dit patroon heet {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Begin bij {cell}. De rij, kolom en het blok bevatten al {excluded_digits}.',
  'hint.naked-single.only':
    'Daarom is {digit} het enige cijfer dat in {cell} kan.',
  'hint.naked-single.apply':
    'Plaats {digit} in {cell}. Een cel met maar één kandidaat is een {strategy}.',
  'hint.hidden-single.inspect': 'Controleer in {unit} waar {digit} kan staan.',
  'hint.hidden-single.blockers':
    'In de cellen {blockers} is {digit} al ingevuld. Daardoor is {digit} uitgesloten in alle andere lege cellen van {unit}.',
  'hint.hidden-single.only': 'Alleen {cell} kan nog {digit} bevatten.',
  'hint.hidden-single.apply':
    'Plaats {digit} in {cell}. Als een cijfer in een rij, kolom of blok nog maar één mogelijke cel heeft, is dit een {strategy}.',
  'hint.naked-pair.inspect':
    'Begin in {unit}: {cell} kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-pair.match':
    'Ook {cell} heeft precies deze twee kandidaten: {first_digit} en {second_digit}.',
  'hint.naked-pair.reserve':
    'Deze twee cellen moeten samen {digits} bevatten, in de ene of de andere volgorde. Kandidaat {digit} kan daarom niet in een andere cel van {unit} blijven staan.',
  'hint.naked-pair.apply':
    'Verwijder {candidates}; met deze stap wordt geen cijfer ingevuld. Dit patroon is een {strategy}.',
  'hint.naked-triple.first':
    'Begin in {unit}: {cell} kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-triple.second':
    'Neem ook {cell}; deze cel kan alleen {first_digit} of {second_digit} bevatten.',
  'hint.naked-triple.third':
    'Neem ook {cell}; deze cel kan alleen {first_digit} of {second_digit} bevatten. In deze drie cellen komen alleen {reserved_digits} voor.',
  'hint.naked-triple.consequence':
    'De drie cellen moeten samen {reserved_digits} bevatten, in een nog onbekende verdeling. Verwijder daarom {removed_digits} uit {cell}; alleen {remaining_digit} blijft over.',
  'hint.naked-triple.apply':
    'Plaats {digit} in {cell}. Drie cellen waarvan de kandidaten samen tot dezelfde drie cijfers beperkt zijn, vormen een {strategy}.',
  'hint.naked-quad.cell':
    'In {unit} zijn {digits} de enige kandidaten voor {cell}.',
  'hint.subset-reservation.observe':
    'In {unit} bevatten {cells} alleen {digits}.',
  'hint.subset-reservation.explain':
    'De gemarkeerde cellen in {unit} zijn voor {digits} gereserveerd. Deze cijfers kunnen daarom uit alle andere cellen van die eenheid worden verwijderd.',
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
    'Ook kandidaat {digit} is tot diezelfde twee cellen beperkt. Samen moeten {digits} over {cells} worden verdeeld.',
  'hint.hidden-pair.consequence':
    'Die twee cellen zijn voor {digits} gereserveerd. De andere kandidaten kunnen er dus niet blijven staan: {candidates}.',
  'hint.hidden-pair.apply':
    'Verwijder {candidates}. Dit patroon heet {strategy}.',
  'hint.hidden-triple.first':
    'In {unit} komt kandidaat {digit} alleen voor in {cells}.',
  'hint.hidden-triple.second':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-triple.third':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-triple.consequence':
    'Omdat {digits} in {unit} tot die drie cellen beperkt zijn, kunnen die cellen geen andere kandidaten bevatten.',
  'hint.hidden-triple.apply':
    'Verwijder {candidates} uit die drie cellen. Dit patroon heet {strategy}.',
  'hint.hidden-quad.first':
    'In {unit} komt kandidaat {digit} alleen voor in {cells}.',
  'hint.hidden-quad.second':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.third':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.fourth':
    'In {unit} kunnen {digits} alleen voorkomen in {cells}.',
  'hint.hidden-quad.consequence':
    'Omdat {digits} in {unit} tot die vier cellen beperkt zijn, kunnen die cellen geen andere kandidaten bevatten.',
  'hint.hidden-quad.apply':
    'Verwijder {candidates} uit die vier cellen. Dit patroon heet {strategy}.',
  'hint.pointing-pair.first':
    'Begin in {source_unit} met kandidaat {digit} in {cell}. Bekijk vervolgens waar {digit} nog meer in dit blok kan staan.',
  'hint.pointing-pair.second':
    'Binnen {source_unit} is {cell} de enige andere mogelijke cel voor {digit}. Beide mogelijkheden liggen in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Binnen {source_unit} moet {digit} in een van deze twee cellen in {intersection_unit} staan. Verwijder daarom {candidate} uit de overige cellen van {intersection_unit}.',
  'hint.pointing-pair.apply':
    'In {cell} blijft alleen kandidaat {digit} over. Vul daar {digit} in. Dit patroon heet {strategy}.',
  'hint.intersection-confinement.observe':
    'In {source_unit} is kandidaat {digit} beperkt tot {intersection_unit} bij {cells}.',
  'hint.intersection-confinement.explain':
    'Omdat elke {digit} in {source_unit} in {intersection_unit} ligt, kunnen cellen buiten de bron maar binnen het snijpunt deze niet bevatten.',
  'hint.intersection-confinement.apply':
    'Kandidaat {digit} verwijderen uit {cells}. Dit patroon is {strategy}.',
  'hint.intersection-confinement.place':
    'Plaats {digit} in {cell} na het aanbrengen van de kruising. Dit patroon is {strategy}.',
  'hint.fish-confinement.observe':
    'Voor kandidaat {digit} zijn binnen {base_units} alleen posities in {cover_units} mogelijk.',
  'hint.fish-confinement.explain':
    'Kandidaat {digit} is van {base_units} beperkt tot {cover_units}; die dekkende eenheden moeten hem dus via de gemarkeerde basisposities krijgen.',
  'hint.swordfish.consequence':
    'In elk van {base_units} moet één {digit} binnen {cover_units} staan. Deze drie noodzakelijke plaatsingen bezetten elk een andere rij of kolom uit die groep. Kandidaat {digit} kan daarom uit alle overige cellen van die drie rijen of kolommen worden verwijderd.',
  'hint.jellyfish.consequence':
    'In elk van {base_units} moet één {digit} binnen {cover_units} staan. Deze vier noodzakelijke plaatsingen bezetten elk een andere rij of kolom uit die groep. Kandidaat {digit} kan daarom uit alle overige cellen van die vier rijen of kolommen worden verwijderd.',
  'hint.fish-confinement.apply':
    'Verwijder kandidaat {digit} uit {cells}. Dit patroon heet {strategy}.',
  'hint.x-wing.first':
    'In {base_unit} kan kandidaat {digit} alleen op posities binnen {cover_units} staan.',
  'hint.x-wing.second':
    'Ook in {base_unit} kan kandidaat {digit} alleen op posities binnen {cover_units} staan. In beide betrokken rijen of kolommen is deze kandidaat dus beperkt tot dezelfde twee kruisende rijen of kolommen.',
  'hint.x-wing.consequence':
    'In elk van {base_units} moet precies één {digit} binnen {cover_units} staan. Daarmee bezetten de twee plaatsingen van {digit} beide bedoelde rijen of kolommen. Alle andere kandidaten voor {digit} kunnen daarom uit die twee rijen of kolommen worden verwijderd.',
  'hint.x-wing.apply':
    'Verwijder kandidaat {digit} uit {cells}. Dit patroon heet {strategy}.',
  'hint.pivot-wing.observe':
    'Bij {pivot} verbinden kandidaten {pivot_digits} de vleugelcellen bij {wing_cells}.',
  'hint.pivot-wing.explain':
    'Elke vleugel bij {wing_cells} deelt één kandidaat met de spil bij {pivot}, en beide vleugels bevatten {shared_digit}. Welke draaikandidaat ook waar is, één vleugel moet {shared_digit} bevatten.',
  'hint.xy-wing.pivot':
    '{pivot} heeft alleen de kandidaten {digits} en moet dus een van beide bevatten.',
  'hint.xy-wing.case':
    'Als {pivot} {pivot_digit} bevat, kan {wing} geen {pivot_digit} bevatten. De enige andere kandidaat is {shared_digit}, dus moet {wing} {shared_digit} bevatten.',
  'hint.xy-wing.guarantee':
    'Ongeacht welk cijfer {pivot} bevat, minstens één van de vleugelcellen {wing_cells} moet {shared_digit} bevatten. Welke van de twee dat is, hoeven we niet te weten.',
  'hint.xy-wing.apply':
    '{cells} zien beide vleugels {wing_cells}. Omdat minstens één {shared_digit} is, verwijder je {shared_digit} uit die cellen. Dit patroon heet {strategy}.',
  'hint.xy-wing.place':
    '{cell} ziet beide vleugelcellen in {wing_cells}. Omdat minstens één daarvan {shared_digit} bevat, kan {cell} geen {shared_digit} bevatten. Vul daarom de enige andere kandidaat, {digit}, in. Dit patroon heet {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} heeft alleen de kandidaten {digits} en moet dus een van deze kandidaten bevatten.',
  'hint.xyz-wing.case':
    'Als {pivot} {pivot_digit} bevat, kan {wing} geen {pivot_digit} bevatten, omdat beide cellen in {unit} liggen. De enige andere kandidaat van {wing} is {shared_digit}, dus moet die cel {shared_digit} bevatten.',
  'hint.xyz-wing.pivot-case':
    'Als {pivot} {shared_digit} bevat, staat {shared_digit} al in de spilcel.',
  'hint.xyz-wing.guarantee':
    'Welke kandidaat uiteindelijk ook in {pivot} staat, minstens één van {pattern_cells} bevat {shared_digit}. We hoeven niet te weten welke cel dat is.',
  'hint.xyz-wing.apply':
    '{target} deelt {first_unit} met {first_pattern_cell}, {second_unit} met {second_pattern_cell} en {third_unit} met {third_pattern_cell}. Omdat minstens één van die drie cellen {shared_digit} bevat, kan {target} dat cijfer niet bevatten. Verwijder kandidaat {shared_digit}. Dit patroon heet {strategy}.',
  'hint.strong-link-wing.observe':
    'De cellen {wing_cells} hebben elk alleen {digits} als kandidaten.',
  'hint.strong-link-wing.bridge':
    'In {unit} kan kandidaat {link_digit} alleen in {link_cells} staan. Minstens één van die cellen moet dus {link_digit} bevatten.',
  'hint.strong-link-wing.force':
    'Als {first_link_cell} {link_digit} bevat, kan {first_wing_cell} geen {link_digit} bevatten en moet daar {forced_digit} staan. Als {second_link_cell} {link_digit} bevat, moet {second_wing_cell} {forced_digit} bevatten. Minstens één van die twee vleugelcellen bevat dus {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Minstens één van de cellen {wing_cells} is {digit}. Verwijder kandidaat {digit} uit {cells}, omdat die cellen beide zien. Dit patroon heet {strategy}.',
  'hint.strong-link-wing.place':
    'Minstens één van de cellen {wing_cells} bevat {removed_digit}. Omdat {cell} beide cellen ziet, kan kandidaat {removed_digit} daar worden verwijderd en kan {digit} worden ingevuld. Dit patroon heet {strategy}.',
  'hint.relational-wing.apply':
    'Kandidaat {digit} verwijderen uit {cells}. Dit patroon is {strategy}.',
  'hint.relational-wing.place':
    'Verwijder kandidaat {removed_digit} uit {cell}, dus plaats daar {digit}. Dit patroon is {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Behalve {cell} hebben de overige {count} onopgeloste cellen precies twee kandidaten.',
  'hint.bug-plus-one.trivalue':
    '{cell} heeft drie kandidaten: {digits}. Dat is één kandidaat meer dan in elke andere onopgeloste cel.',
  'hint.bug-plus-one.unit-count':
    'In {unit} heeft kandidaat {digit} drie mogelijke posities, terwijl {other_digits} er elk maar twee hebben.',
  'hint.bug-plus-one.explain':
    'Binnen {units} heeft kandidaat {digit} één mogelijke positie meer dan {other_digits}. Als {cell} geen {digit} zou bevatten, zouden alle onopgeloste cellen precies twee kandidaten hebben en zou de puzzel zijn unieke oplossing verliezen. Daarom moet {cell} {digit} bevatten.',
  'hint.bug-plus-one.place':
    'Plaats {digit} in {cell}. Zo blijft dankzij de extra kandidaat in deze ene cel de oplossing uniek; dit patroon heet {strategy}.',
  'hint.unique-rectangle.rectangle':
    'De vier onopgeloste cellen {cells} vormen de hoeken van een rechthoek.',
  'hint.unique-rectangle.pair-corners':
    'De cellen {cells} hebben alleen de kandidaten {digits}.',
  'hint.unique-rectangle.third-corner':
    'Ook {cell} heeft precies de kandidaten {digits}. Drie hoeken hebben nu hetzelfde kandidatenpaar.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} heeft de kandidaten {digits}. Dit is de enige hoekcel met de extra kandidaat {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Als {cell} een van de cijfers uit het paar {digits} zou krijgen, zouden de waarden in de vier hoeken kunnen worden verwisseld zonder een rij, kolom of blok te veranderen. De puzzel zou dan twee oplossingen hebben. Verwijder daarom {digits} en behoud {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'In {cell} blijft alleen {digit} over. Plaats dit cijfer daar. Dit patroon is {strategy}.',
  'hint.unique-rectangle.observe':
    'De cellen bij {cells} vormen een rechthoek en bevatten allemaal het paar {digits}.',
  'hint.unique-rectangle.type1':
    'Drie hoeken bevatten precies {digits}. Als {cell} ook een van beide cijfers zou gebruiken, zou de rechthoek twee uitwisselbare oplossingen mogelijk maken.',
  'hint.unique-rectangle.type2-first-expanded':
    '{cell} heeft de kandidaten {pair} en {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'Ook {cell} heeft {pair} en daarnaast {extra_digit}. De twee hoekcellen met een extra kandidaat hebben dus allebei {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Minstens één van {cells} moet {extra_digit} bevatten om twee verwisselbare oplossingen te voorkomen. {target} ziet beide cellen en kan daarom geen {extra_digit} bevatten.',
  'hint.unique-rectangle.type2-place':
    'In {cell} blijft alleen {digit} over. Plaats dit cijfer daar. Dit patroon heet {strategy}.',
  'hint.unique-rectangle.type2':
    'De twee uitgevouwen hoeken bij {cells} delen de extra kandidaat {digit}, dus elke cel die beide hoeken ziet, kan {digit} niet bevatten.',
  'hint.unique-rectangle.type3':
    'De extra cijfers {digits} in de rechthoek worden gecombineerd met {cells} als een gereserveerde subset in {unit}, zodat die cijfers elders in die eenheid kunnen worden verwijderd.',
  'hint.unique-rectangle.type3-first-expanded':
    'Ook {cell} heeft {pair}, met daarnaast de extra kandidaat {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Ook {cell} heeft {pair}, met daarnaast de extra kandidaat {extra_digit}. Minstens één van deze hoekcellen moet een extra cijfer bevatten; anders kunnen de twee waarden uit {pair} onderling over de vier hoekcellen worden omgewisseld en ontstaat een tweede oplossing.',
  'hint.unique-rectangle.type3-partner': '{cell} kan alleen {digits} bevatten.',
  'hint.unique-rectangle.type3-reserve':
    'Een van {corners} moet een van de cijfers {digits} bevatten en {partner} het andere. Deze cijfers zijn daarom in {unit} gereserveerd, zodat {target} geen {removed_digit} kan bevatten.',
  'hint.unique-rectangle.type3-place':
    'In {cell} blijft alleen {digit} over. Plaats dit cijfer daar. Dit patroon heet {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Ook {cell} heeft {pair}, met daarnaast de extra kandidaat {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Ook {cell} heeft {pair}, met daarnaast de extra kandidaat {extra_digit}. Beide hoekcellen met een extra kandidaat bevatten nu het rechthoekpaar.',
  'hint.unique-rectangle.type4':
    'In {unit} zijn {cells} de enige twee posities voor kandidaat {digit}; deze cellen zijn dus sterk gekoppeld. Daarom kan kandidaat {removed_digit} uit beide hoekcellen worden verwijderd, omdat anders twee verwisselbare oplossingen mogelijk worden.',
  'hint.unique-rectangle.type4-apply':
    'Verwijder kandidaat {digit} uit {cells}. Deze uniciteitsrelatie heet {strategy}.',
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
