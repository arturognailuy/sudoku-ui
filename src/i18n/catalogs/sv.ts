import type { MessageCatalog } from './types';

export const sv: MessageCatalog = {
  'common.language.label': 'Språk',
  'common.language.auto': 'Auto',
  'common.language.en': 'engelska',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'Português (Brasilien)',
  'common.language.pt-BR.short': 'Português',
  'common.language.es': 'Español',
  'common.language.ja': '日本語',
  'common.language.ko': '한국어',
  'common.language.fr': 'Français',
  'common.language.de': 'Deutsch',
  'common.language.ru': 'Русский',
  'common.language.ar': 'العربية',
  'common.language.id': 'Bahasa Indonesia',
  'common.language.id.short': 'Indonesien',
  'common.language.hi': 'हिन्दी',
  'common.language.it': 'Italiano',
  'common.language.tr': 'Türkçe',
  'common.language.vi': 'Tiếng Việt',
  'common.language.uk': 'Українська',
  'common.language.nl': 'nederländska',
  'common.language.pl': 'Polski',
  'common.language.th': 'ไทย',
  'common.language.fil': 'Filipino',
  'common.language.ms': 'Bahasa Melayu',
  'common.language.ms.short': 'Melayu',
  'common.language.cs': 'Čeština',
  'common.language.sv': 'Svenska',
  'accessibility.language.changed': 'Språket har ändrats till {language}.',
  'common.difficulty.easy': 'Lätt',
  'common.difficulty.medium': 'Medium',
  'common.difficulty.hard': 'Hård',
  'common.difficulty.expert': 'Expert',
  'common.difficulty.evil': 'Evil',
  'difficulty.easy.name': 'Lätt',
  'difficulty.medium.name': 'Medium',
  'difficulty.hard.name': 'Hård',
  'difficulty.expert.name': 'Expert',
  'difficulty.evil.name': 'Evil',
  'strategy.naked-single.name': 'Naken singel',
  'strategy.hidden-single.name': 'Dold singel',
  'strategy.naked-pair.name': 'Naket par',
  'strategy.naked-triple.name': 'Naken Trippel',
  'strategy.pointing-pair.name': 'Pekpar / Box-Line Reduction',
  'strategy.hidden-pair.name': 'dolt par',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.xy-wing.name': 'XY-vinge',
  'strategy.hidden-triple.name': 'Hidden Trippel',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.swordfish.name': 'Svärdfisk',
  'strategy.naked-quad.name': 'Naked Quad',
  'strategy.simple-coloring.name': 'Enkel färgläggning',
  'strategy.hidden-quad.name': 'Hidden Quad',
  'strategy.xyz-wing.name': 'XYZ-Wing',
  'strategy.jellyfish.name': 'Maneter',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Unik rektangeltyp 1',
  'strategy.unique-rectangle-2.name': 'Unik rektangeltyp 2',
  'strategy.unique-rectangle-3.name': 'Unik rektangeltyp 3',
  'strategy.unique-rectangle-4.name': 'Unik rektangeltyp 4',
  'strategy.x-cycles.name': 'X-cykler',
  'strategy.xy-chain.name': 'XY-kedja',
  'strategy.backtracker.name': 'Backtracker',
  'hint.value-correction.title': 'Fixa detta värde',
  'hint.candidate-correction.title': 'Fixa den här kandidatcellen',
  'hint.value-correction.summary':
    'Värdet vid {cell} är i konflikt med pusslet. Rensa det innan du fortsätter.',
  'hint.candidate-correction.summary':
    'Bygg om kandidaterna på {cell} från de accepterade värdena i dess rad, kolumn och ruta innan du fortsätter.',
  'hint.strategy.summary':
    'Arbeta igenom {steps} steg för att förstå och tillämpa {strategy}.',
  'hint.value-correction.observe':
    'Kontrollera {cell}. Dess värde står i konflikt med styrelsen.',
  'hint.value-correction.conclude':
    'Ta bort värdet vid {cell} så att kandidatrutnätet kan kontrolleras härnäst.',
  'hint.candidate-correction.observe':
    'Kontrollera {cell}. Dess kandidater matchar inte styrelsen.',
  'hint.candidate-correction.compare':
    'Starta den här cellen igen från de accepterade värdena i dess rad, kolumn och ruta.',
  'hint.candidate-correction.conclude':
    'Återställ kandidaterna på {cell} till varje siffra som tillåts av dess rad, kolumn och ruta.',
  'hint.strategy.observe':
    'Granska de markerade cellerna, kandidaterna, raderna, kolumnerna och blocken.',
  'hint.strategy.compare':
    'Jämför de markerade begränsningarna och avgör vilken slutsats som är den enda möjliga.',
  'hint.strategy.conclude':
    'Tillämpa den markerade slutsatsen. Mönstret kallas {strategy}.',
  'hint.coloring.pair':
    'I {unit} är {cells} de enda möjliga platserna för {digit}. Exakt en av cellerna innehåller siffran, så märk alternativen A och B.',
  'hint.coloring.chain':
    'Fortsätt längs de starka länkarna, som förbinder de enda två möjliga placeringarna för {digit} i en rad, kolumn eller ett block. Markeringarna måste växla genom hela kedjan, med A i {group_a} och B i {group_b}.',
  'hint.coloring.alternatives':
    'Antingen innehåller alla A-celler {digit} och inga B-celler gör det, eller så innehåller alla B-celler {digit} och inga A-celler gör det. Uteslutningen gäller utan att vi behöver veta vilket alternativ som är rätt.',
  'hint.coloring.elimination':
    '{cell} ser den A-färgade platsen i {group_a_cell} och den B-färgade platsen i {group_b_cell}. Oavsett vilken färg som innehåller {digit} ser målcellen den placeringen och kan därför inte ha den kandidaten.',
  'hint.coloring.apply':
    'Ta bort {candidates}. Varje berörd cell ser platser från båda möjliga färgtilldelningarna för {colored_digit}, så den kandidaten kan inte finnas kvar där. Mönstret kallas {strategy}.',
  'hint.coloring.place':
    'De länkade kandidaterna för {colored_digit} tvingar fram resultatet. Placera {digit} i {cell}. Detta mönster är {strategy}.',
  'hint.x-cycle.opening':
    'I {unit} har {digit} bara två möjliga celler: {cells}. En av dem måste innehålla {digit}.',
  'hint.x-cycle.assume':
    'Anta att {start} inte innehåller {digit}. Då måste {forced} innehålla {digit}, vilket utesluter {digit} från {blocked}. I {unit} återstår därför bara {result} för {digit}.',
  'hint.x-cycle.follow':
    'Eftersom {true_cell} innehåller {digit} kan {blocked} inte innehålla {digit}. I {unit} återstår därför bara {result} för {digit}.',
  'hint.x-cycle.close':
    'Eftersom {true_cell} innehåller {digit} kan {blocked} inte innehålla {digit}. I {unit} blir {result} då den enda möjliga cellen för {digit}.',
  'hint.x-cycle.place':
    'Antagandet att {assumption} inte innehåller {digit} leder tillbaka till att {cell} måste innehålla {digit}. Antagandet är alltså omöjligt. Placera {digit} i {cell}. Mönstret kallas {strategy}.',
  'hint.xy-chain.start':
    '{cell} har bara kandidaterna {first_digit} och {second_digit}. Antingen är cellen {endpoint_digit}, eller så måste den vara {other_digit} om den inte är {endpoint_digit}.',
  'hint.xy-chain.assume':
    'Anta att {start} inte är {endpoint_digit}. Då måste cellen vara {start_value}. Eftersom {start} och {middle} delar {first_unit} kan {middle} inte vara {start_value} utan måste vara {middle_value}. Då kan {result} inte vara {middle_value} i {second_unit}, så den måste vara {result_value}.',
  'hint.xy-chain.follow':
    'Eftersom {start} är {start_value} kan {middle} i {first_unit} inte vara {start_value} utan måste vara {middle_value}. Eftersom {middle} och {result} delar {second_unit} kan {result} inte vara {middle_value} utan måste vara {result_value}.',
  'hint.xy-chain.reach':
    'Eftersom {start} är {start_value} kan {endpoint} inte vara {shared_digit}. Den enda andra kandidaten är {endpoint_digit}, så cellen måste vara {endpoint_digit}.',
  'hint.xy-chain.place':
    'Om {first_endpoint} är {endpoint_digit} innehåller den första ändpunkten {endpoint_digit}. Annars tvingar kedjan {endpoint_digit} till den andra ändpunkten, {second_endpoint}. Minst en ändpunkt är alltså {endpoint_digit}. {cell} ser båda ändpunkterna och kan därför inte vara {endpoint_digit}. Placera {digit} i {cell}. Mönstret kallas {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Börja med {cell}. Dess rad, kolumn och block innehåller redan {excluded_digits}.',
  'hint.naked-single.only':
    'Därför är {digit} den enda siffran som kan stå i {cell}.',
  'hint.naked-single.apply':
    'Placera {digit} i {cell}. En cell med bara en kandidat bildar mönstret {strategy}.',
  'hint.hidden-single.inspect':
    'Kontrollera var {digit} kan placeras i {unit}.',
  'hint.hidden-single.blockers':
    'Siffran {digit} finns redan i {blockers}, vilket utesluter {digit} från alla andra tomma celler i {unit}.',
  'hint.hidden-single.only': 'Bara {cell} kan fortfarande innehålla {digit}.',
  'hint.hidden-single.apply':
    'Placera {digit} i {cell}. När en siffra bara har en möjlig cell i en rad, kolumn eller ett block kallas mönstret {strategy}.',
  'hint.naked-pair.inspect':
    'Börja i {unit}: {cell} kan bara innehålla {first_digit} eller {second_digit}.',
  'hint.naked-pair.match':
    'Även {cell} har exakt dessa två kandidater: {first_digit} och {second_digit}.',
  'hint.naked-pair.reserve':
    'De två cellerna måste tillsammans innehålla {digits}, i endera ordningen. Därför kan kandidat {digit} inte finnas kvar i någon annan cell i {unit}.',
  'hint.naked-pair.apply':
    'Ta bort {candidates}. Ingen siffra fylls i i det här steget. Mönstret kallas {strategy}.',
  'hint.naked-triple.first':
    'Börja i {unit}: {cell} kan bara innehålla {first_digit} eller {second_digit}.',
  'hint.naked-triple.second':
    'Lägg till {cell}; den kan bara innehålla {first_digit} eller {second_digit}.',
  'hint.naked-triple.third':
    'Lägg till {cell}; den kan bara innehålla {first_digit} eller {second_digit}. De tre cellerna innehåller nu bara {reserved_digits}.',
  'hint.naked-triple.consequence':
    'De tre cellerna måste innehålla {reserved_digits} i någon ordning. Då tas {removed_digits} bort från {cell}, så att bara {remaining_digit} återstår.',
  'hint.naked-triple.apply':
    'Placera {digit} i {cell}. Tre celler vars kandidater är begränsade till samma tre siffror bildar en {strategy}.',
  'hint.naked-quad.cell': 'I {unit} är {digits} de enda kandidaterna i {cell}.',
  'hint.subset-reservation.observe':
    'I {unit} innehåller {cells} bara {digits}.',
  'hint.subset-reservation.explain':
    'De fyra markerade cellerna i {unit} måste tillsammans innehålla {digits}. Därför kan de kandidaterna tas bort från alla andra celler i enheten.',
  'hint.subset-reservation.apply':
    'Ta bort {candidates}. Mönstret är {strategy}.',
  'hint.subset-reservation.place':
    'Placera {digit} i {cell}. Mönstret kallas {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'I {unit} kan {digits} bara finnas i {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Eftersom {digits} är begränsade till dessa rutor i {unit} kan rutorna inte innehålla andra kandidater.',
  'hint.hidden-subset-confinement.apply':
    'Ta bort {candidates} från de begränsade rutorna. Mönstret är {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Placera {digit} i {cell} efter att de andra kandidaterna tagits bort. Mönstret är {strategy}.',
  'hint.hidden-pair.first':
    'I {unit} förekommer kandidat {digit} bara i {cells}.',
  'hint.hidden-pair.second':
    'Även kandidat {digit} är begränsad till samma två celler. Siffrorna {digits} måste därför placeras i {cells}, en i varje cell.',
  'hint.hidden-pair.consequence':
    'De två cellerna är reserverade för {digits}, så deras övriga kandidater måste tas bort: {candidates}.',
  'hint.hidden-pair.apply': 'Ta bort {candidates}. Mönstret kallas {strategy}.',
  'hint.hidden-triple.first':
    'I {unit} förekommer kandidat {digit} bara i {cells}.',
  'hint.hidden-triple.second':
    'I {unit} kan {digits} bara förekomma i {cells}.',
  'hint.hidden-triple.third': 'I {unit} kan {digits} bara förekomma i {cells}.',
  'hint.hidden-triple.consequence':
    'Eftersom {digits} bara kan placeras i de här cellerna i {unit} kan cellerna inte ha några andra kandidater.',
  'hint.hidden-triple.apply':
    'Ta bort {candidates} från de berörda cellerna. Mönstret kallas {strategy}.',
  'hint.hidden-quad.first':
    'I {unit} förekommer kandidat {digit} bara i {cells}.',
  'hint.hidden-quad.second': 'I {unit} kan {digits} bara förekomma i {cells}.',
  'hint.hidden-quad.third': 'I {unit} kan {digits} bara förekomma i {cells}.',
  'hint.hidden-quad.fourth': 'I {unit} kan {digits} bara förekomma i {cells}.',
  'hint.hidden-quad.consequence':
    'Eftersom {digits} bara kan placeras i de här cellerna i {unit} kan cellerna inte ha några andra kandidater.',
  'hint.hidden-quad.apply':
    'Ta bort {candidates} från de berörda cellerna. Mönstret kallas {strategy}.',
  'hint.pointing-pair.first':
    'Utgå från kandidat {digit} i {cell} i {source_unit}. Leta sedan efter alla andra möjliga platser för {digit} i blocket.',
  'hint.pointing-pair.second':
    'I {source_unit} är {cell} den enda andra möjliga platsen för {digit}. Båda platserna ligger i {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'I {source_unit} måste {digit} ligga på en av de två möjliga platserna i {intersection_unit}. Därför kan {candidate} tas bort från resten av {intersection_unit}.',
  'hint.pointing-pair.apply':
    'I {cell} återstår bara kandidat {digit}. Placera {digit} där. Mönstret kallas {strategy}.',
  'hint.intersection-confinement.observe':
    'I {source_unit} är kandidat {digit} begränsad till {intersection_unit} vid {cells}.',
  'hint.intersection-confinement.explain':
    'Eftersom varje {digit} i {source_unit} ligger i {intersection_unit}, kan celler utanför källan men innanför korsningen inte innehålla den.',
  'hint.intersection-confinement.apply':
    'Ta bort kandidat {digit} från {cells}. Detta mönster är {strategy}.',
  'hint.intersection-confinement.place':
    'Placera {digit} i {cell} efter att ha applicerat korsningen. Detta mönster är {strategy}.',
  'hint.fish-confinement.observe':
    'I {base_units} kan kandidat {digit} bara förekomma i {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidat {digit} är begränsad från {base_units} till {cover_units}, så dessa täckenheter måste få den via de markerade baspositionerna.',
  'hint.swordfish.consequence':
    'Var och en av {base_units} måste innehålla en {digit} i någon av {cover_units}. De tre placeringarna måste hamna i var sin av dessa korsande enheter, så alla andra förekomster av kandidat {digit} där kan tas bort.',
  'hint.jellyfish.consequence':
    'Var och en av {base_units} måste innehålla en {digit} i någon av {cover_units}. De fyra placeringarna måste hamna i var sin av dessa korsande enheter, så alla andra förekomster av kandidat {digit} där kan tas bort.',
  'hint.fish-confinement.apply':
    'Ta bort kandidat {digit} från {cells}. Mönstret kallas {strategy}.',
  'hint.x-wing.first':
    'I {base_unit} förekommer kandidat {digit} bara i {cover_units}.',
  'hint.x-wing.second':
    'Detsamma gäller i {base_unit}: kandidat {digit} förekommer bara i {cover_units}. Kandidaten är alltså begränsad till samma två korsande enheter i båda basenheterna.',
  'hint.x-wing.consequence':
    'I var och en av {base_units} måste en {digit} placeras. Placeringarna ger då en {digit} i vardera av {cover_units}, så alla övriga {digit} där kan tas bort.',
  'hint.x-wing.apply':
    'Ta bort kandidat {digit} från {cells}. Mönstret kallas {strategy}.',
  'hint.pivot-wing.observe':
    'Vid {pivot} kopplar kandidaterna {pivot_digits} samman vingcellerna vid {wing_cells}.',
  'hint.pivot-wing.explain':
    'Varje ving på {wing_cells} delar en kandidat med pivoten vid {pivot}, och båda vingarna innehåller {shared_digit}. Oavsett vilken pivotkandidat som är sann, måste en vinge innehålla {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} har bara kandidaterna {digits} och måste därför innehålla en av dem.',
  'hint.xy-wing.case':
    'Om {pivot} är {pivot_digit} kan {wing} inte vara {pivot_digit}. Dess enda andra kandidat är {shared_digit}, så cellen måste innehålla {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Vilket värde {pivot} än får måste minst en av de två vingcellerna i {wing_cells} innehålla {shared_digit}. Det spelar ingen roll vilken av dem det är.',
  'hint.xy-wing.apply':
    '{cells} ser båda vingarna {wing_cells}. Eftersom minst en är {shared_digit}, ta bort {shared_digit} från rutorna. Mönstret kallas {strategy}.',
  'hint.xy-wing.place':
    '{cell} ser båda vingcellerna i {wing_cells}. Eftersom minst en av vingcellerna innehåller {shared_digit} kan den kandidaten strykas från {cell}. Den enda återstående kandidaten är {digit}, så placera den där. Mönstret kallas {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} har bara kandidaterna {digits}. Den måste vara en av dem.',
  'hint.xyz-wing.case':
    'Om {pivot} är {pivot_digit} kan {wing} i samma {unit} inte vara {pivot_digit}. Den enda andra kandidaten är {shared_digit}, så {wing} måste vara {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Om {pivot} är {shared_digit} innehåller pivotcellen redan {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Oavsett vilken kandidat som gäller i {pivot} måste minst en av {pattern_cells} vara {shared_digit}. Vi behöver inte veta vilken.',
  'hint.xyz-wing.apply':
    '{target} delar {first_unit} med {first_pattern_cell}, {second_unit} med {second_pattern_cell} och {third_unit} med {third_pattern_cell}. Eftersom minst en av dessa tre celler är {shared_digit} kan kandidaten inte finnas i målcellen. Ta bort kandidat {shared_digit} från {target}. Mönstret kallas {strategy}.',
  'hint.strong-link-wing.observe':
    'Cellerna {wing_cells} kan var och en endast innehålla {digits}.',
  'hint.strong-link-wing.bridge':
    'I {unit} kan kandidat {link_digit} bara finnas i {link_cells}, så minst en av dessa celler måste innehålla {link_digit}.',
  'hint.strong-link-wing.force':
    'Om {first_link_cell} är {link_digit}, kan {first_wing_cell} inte vara {link_digit} och måste vara {forced_digit}. Om {second_link_cell} är {link_digit}, måste {second_wing_cell} vara {forced_digit}. Minst en av dessa två celler är därför {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Minst en av cellerna {wing_cells} är {digit}. Ta bort kandidat {digit} från {cells}, eftersom dessa celler ser båda. Mönstret kallas {strategy}.',
  'hint.strong-link-wing.place':
    'Minst en av cellerna {wing_cells} är {removed_digit}. Ta bort kandidat {removed_digit} från {cell}, eftersom den ser båda, och placera {digit} där. Mönstret kallas {strategy}.',
  'hint.relational-wing.apply':
    'Ta bort kandidat {digit} från {cells}. Detta mönster är {strategy}.',
  'hint.relational-wing.place':
    'Ta bort kandidat {removed_digit} från {cell}, så placera {digit} där. Detta mönster är {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Förutom {cell} har var och en av de övriga {count} olösta cellerna exakt två kandidater.',
  'hint.bug-plus-one.trivalue':
    '{cell} har tre kandidater: {digits}. Det är en kandidat fler än i alla andra olösta celler.',
  'hint.bug-plus-one.unit-count':
    'I {unit} har kandidat {digit} tre möjliga positioner, medan {other_digits} har två var.',
  'hint.bug-plus-one.explain':
    'I {units} har kandidat {digit} en möjlig position mer än var och en av kandidaterna {other_digits}. Om {cell} inte vore {digit} skulle alla olösta celler ha exakt två kandidater och pusslet förlora sin unika lösning. Därför måste {cell} vara {digit}.',
  'hint.bug-plus-one.place':
    'Placera {digit} i {cell}. Det här entydighetsbaserade undantaget kallas {strategy}.',
  'hint.unique-rectangle.rectangle':
    'De fyra olösta cellerna i {cells} utgör hörnen i en rektangel.',
  'hint.unique-rectangle.pair-corners':
    'Cellerna i {cells} har bara kandidaterna {digits}.',
  'hint.unique-rectangle.third-corner':
    'Även {cell} har exakt kandidaterna {digits}. Tre hörn har nu samma kandidatpar.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} har kandidaterna {digits} och är det enda hörnet som dessutom har extrakandidaten {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Om {cell} fick någon av siffrorna i paret {digits} skulle de två siffrorna kunna byta plats mellan rektangelns fyra hörn utan att påverka någon rad, kolumn eller något block. Det skulle ge två lösningar, så ta bort {digits} och behåll {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'Bara {digit} återstår i {cell}. Placera {digit} där. Mönstret kallas {strategy}.',
  'hint.unique-rectangle.observe':
    'Cellerna vid {cells} bildar en rektangel och alla innehåller paret {digits}.',
  'hint.unique-rectangle.type1':
    'Tre hörn innehåller exakt {digits}. Om {cell} också använde endera siffran, skulle rektangeln tillåta två utbytbara lösningar.',
  'hint.unique-rectangle.type2-first-expanded':
    'Kandidaterna i {cell} är {pair} och {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'Även {cell} har {pair} samt {extra_digit}. De två utökade hörnen delar alltså extrakandidaten {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Minst en av cellerna i {cells} måste innehålla {extra_digit}; annars skulle siffrorna i kandidatparet kunna byta plats mellan rektangelns hörn och ge två giltiga lösningar. {target} ser båda cellerna och kan därför inte innehålla {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'Bara {digit} återstår i {cell}. Placera {digit} där. Mönstret kallas {strategy}.',
  'hint.unique-rectangle.type2':
    'De två utökade hörnen vid {cells} delar extra kandidat {digit}, så alla celler som ser båda hörnen kan inte innehålla {digit}.',
  'hint.unique-rectangle.type3':
    'De extra siffrorna {digits} i rektangeln kombineras med {cells} som en reserverad delmängd i {unit}, så dessa siffror kan tas bort någon annanstans i den enheten.',
  'hint.unique-rectangle.type3-first-expanded':
    'Även {cell} har {pair} samt extrakandidaten {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Även {cell} har {pair} samt extrakandidaten {extra_digit}. Minst ett av de två utökade hörnen måste innehålla en extra siffra; annars skulle siffrorna i {pair} kunna byta plats runt rektangeln och ge två lösningar.',
  'hint.unique-rectangle.type3-partner': '{cell} kan bara innehålla {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'En av cellerna i {corners} måste innehålla en av siffrorna {digits}, och {partner} måste innehålla den andra. Siffrorna är därför reserverade i {unit}, så {target} kan inte innehålla {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'Bara {digit} återstår i {cell}. Placera {digit} där. Mönstret kallas {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Även {cell} har {pair} samt extrakandidaten {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Även {cell} har {pair} samt extrakandidaten {extra_digit}. Båda de utökade hörnen innehåller nu rektangelparet.',
  'hint.unique-rectangle.type4':
    'I {unit} förekommer kandidat {digit} bara i {cells} och bildar därmed ett konjugatpar. Om {removed_digit} placerades i något av de utökade hörnen skulle rektangelns siffror kunna byta plats och skapa en andra lösning.',
  'hint.unique-rectangle.type4-apply':
    'Ta bort kandidat {digit} från {cells}. Den här entydighetsrelationen kallas {strategy}.',
  'hint.unique-rectangle.apply':
    'Ta bort {candidates}. Detta unika förhållande är {strategy}.',
  'hint.unique-rectangle.place':
    'Placera {digit} i {cell} efter att ha tillämpat unikhetsförhållandet. Detta mönster är {strategy}.',
  'hint.implication-chain.observe':
    'Börja vid {cell}, som bara har kandidaterna {digits}.',
  'hint.implication-chain.explain':
    '{from} och {to} delar en kandidat och ser varandra, så kandidaten kan inte vara sann i båda; implikationen fortsätter.',
  'hint.implication-chain.apply':
    'En ändpunkt måste innehålla {digit}, så ta bort kandidat {digit} från {cells}. Mönstret är {strategy}.',
  'hint.narration.apply': 'Tillämpa avdraget:',
  'hint.narration.look-at': 'Titta på',
  'hint.narration.value-conflict':
    '. Dess ingångna värde står i konflikt med pusslet.',
  'hint.narration.clear-value': 'Rensa värdet vid',
  'hint.narration.clear-value-tail':
    'så att kandidatrutnätet kan kontrolleras härnäst.',
  'hint.narration.candidate-inconsistent':
    '. Dess kandidatstat är oförenligt med pusslet.',
  'hint.narration.reset-candidates': 'Återställ kandidaten inställd på',
  'hint.narration.reset-candidates-tail':
    'till varje siffra som tillåts av de accepterade rad-, kolumn- och boxvärdena.',
  'hint.narration.only-candidate': '. Den har bara en kandidat:',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'Eftersom ingen annan siffra kan gå in',
  'hint.narration.place': ', plats',
  'hint.narration.naked-single-tail': 'där. Detta kallas en naken singel.',
  'hint.narration.in-unit': 'In',
  'hint.narration.consider-digit': ', fundera över var',
  'hint.narration.can-appear': 'kan visas.',
  'hint.narration.other-cells': 'Varannan tom cell in',
  'hint.narration.cannot-contain': 'kan inte innehålla',
  'hint.narration.leaving-only': ', endast lämnar',
  'hint.narration.because-unit': 'Eftersom',
  'hint.narration.still-needs': 'behöver fortfarande',
  'hint.narration.only-cell': 'och',
  'hint.narration.hidden-single-tail': 'är den enda möjliga cellen, platsen',
  'hint.narration.hidden-single-name': 'där. Detta kallas en Hidden Single.',
  'hint.narration.place-result': 'plats',
  'hint.narration.in': 'in',
  'hint.narration.remove': 'ta bort kandidat',
  'hint.narration.from': 'från',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. Detta är {strategy}-resultatet.',
  'welcome.eyebrow': 'Nytt pussel',
  'welcome.title': 'Välj din svårighetsgrad',
  'welcome.lede': 'Välj en nivå och börja sedan när du är redo.',
  'welcome.difficulty': 'Svårighet',
  'welcome.start': 'Starta {difficulty} pussel',
  'welcome.starting': 'Startar {difficulty}-pussel...',
  'welcome.preview': 'Sudoku pussel förhandsvisning',
  'loading.initial': 'Laddar ditt pussel...',
  'loading.account.eyebrow': 'konto',
  'loading.account.title': 'Sparar ditt pussel på ditt konto...',
  'loading.account.detail':
    'Dina framsteg stannar på den här enheten tills kontosparningen har bekräftats.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Återgår till förstasidan...',
  'loading.home.detail':
    'Söker efter det senaste gränssnittet innan nivåval visas.',
  'loading.restart.eyebrow': 'Samma pussel',
  'loading.restart.title': 'Startar om detta pussel...',
  'loading.restart.detail':
    'Håller det gamla kortet låst tills det nya försöket är klart.',
  'loading.new.eyebrow': 'Nytt pussel',
  'loading.new.title': 'Förbereder ditt {difficulty}-kort...',
  'loading.new.detail':
    'Skapar ett nytt pussel nu. Du kommer att spela om ett ögonblick.',
  'confirmation.home.eyebrow': 'Återvänd hem?',
  'confirmation.home.title': 'Lämna det här pusslet',
  'confirmation.home.description':
    'Dina aktuella framsteg kommer inte längre att öppnas automatiskt på den här enheten.',
  'confirmation.home.cancel': 'Fortsätt spela',
  'confirmation.home.confirm': 'Återgå till förstasidan',
  'confirmation.restart.eyebrow': 'Börja om?',
  'confirmation.restart.title': 'Börja om',
  'confirmation.restart.description':
    'Spela om detta pussel från dess ursprungliga givna, eller välj ett annat pussel.',
  'confirmation.restart.replay.title': 'Spela om detta pussel',
  'confirmation.restart.replay.description':
    'Behåll dessa givna uppgifter och återställ detta försök.',
  'confirmation.restart.different.title': 'Spela ett annat pussel',
  'confirmation.restart.different.description':
    'Välj en nivå för ett nytt bräde.',
  'confirmation.restart.different.level': 'Nivå för olika pussel',
  'common.cancel': 'Avbryt',
  'account.confirm.deleteGame.eyebrow': 'Ta bort sparat spel?',
  'account.confirm.deleteGame.title': 'Ta bort det här spelet',
  'account.confirm.deleteGame.description':
    'Detta pussel och dess framsteg kommer att tas bort permanent från Mina spel. Detta kan inte ångras.',
  'account.confirm.deleteGame.action': 'Ta bort spel',
  'account.confirm.deleteGame.pending': 'Tar bort sparat spel...',
  'account.confirm.deleteAll.eyebrow': 'Ta bort alla sparade spel?',
  'account.confirm.deleteAll.title': 'Ta bort alla spel',
  'account.confirm.deleteAll.description':
    'Varje pussel och alla framsteg i Mina spel kommer att tas bort permanent. Detta kan inte ångras.',
  'account.confirm.deleteAll.action': 'Ta bort alla spel',
  'account.confirm.deleteAll.pending': 'Raderar alla spel...',
  'account.confirm.revoke.eyebrow': 'Kontosäkerhet',
  'account.confirm.revoke.title': 'Logga ut överallt',
  'account.confirm.revoke.description':
    'Detta loggar ut dig på alla enheter, inklusive den här. Ditt konto och sparade spel finns kvar.',
  'account.confirm.revoke.action': 'Logga ut överallt',
  'account.confirm.revoke.pending': 'Loggar ut överallt...',
  'account.confirm.deleteAccount.eyebrow': 'Permanent åtgärd',
  'account.confirm.deleteAccount.title': 'Ta bort ditt konto',
  'account.confirm.deleteAccount.description':
    'Din identitet, varje inloggad session och alla sparade spel kommer att tas bort permanent. Den delade pusselkatalogen påverkas inte.',
  'account.confirm.deleteAccount.action': 'Ta bort konto',
  'account.confirm.deleteAccount.pending': 'Tar bort konto...',
  'account.confirm.typeEmail': 'Skriv {email} för att bekräfta',
  'account.label': 'konto',
  'account.continue.title': 'Fortsätt på andra enheter',
  'account.continue.detail':
    'Logga in för att spara webbläsarens aktiva spel automatiskt.',
  'account.signIn': 'Logga in med Google',
  'account.signIn.short': 'Logga in',
  'game.title': '{difficulty} pussel',
  'game.statusActions': 'Spelstatus och åtgärder',
  'game.elapsed': 'Förfluten tid',
  'game.mistakes': 'Misstag {count}',
  'game.mistakes.label': '{count, plural, one{# misstag} other{# misstag}}',
  'game.resume': 'CV',
  'game.pause': 'Paus',
  'status.resumed': 'pusslet återupptogs.',
  'status.paused': 'Pussel pausad.',
  'status.restarted': 'Pussel startade om. Nytt försök, samma pussel.',
  'status.hintClosed': 'Tips stängd. Ditt pussel är oförändrat.',
  'status.strategyApplied': 'Strategi tillämpad. Du kan ångra det i ett steg.',
  'status.correctionApplied':
    'Korrigering tillämpad. Du kan ångra det i ett steg.',
  'status.hintAlreadyApplied': 'Detta tips återspeglas redan i tavlan.',
  'status.hintRefreshed': 'Kortet ändrades, så tipset uppdaterades.',
  'status.accountSaved': 'Spelet har sparats på ditt konto.',
  'status.waitBeforeLeaving':
    'Vänta på väntande drag innan du lämnar det här pusslet.',
  'status.selectEditableCell':
    'Välj en redigerbar cell innan du anger ett nummer.',
  'status.savingAccount': 'Sparar ditt lokala spel på ditt konto...',
  'status.restoring': 'Återställer ditt pussel...',
  'status.restored': 'Ditt lokala pussel har återställts.',
  'status.puzzleReady': '{difficulty} pussel redo.',
  'status.puzzleRestored': '{difficulty} pussel återställd.',
  'status.waitBeforeStarting':
    'Vänta på väntande drag innan du startar ett nytt pussel.',
  'status.solved': 'löst! Vackert arbete.',
  'status.moveSaved': 'Flytten sparad.',
  'status.waitBeforeHint': 'Vänta på väntande drag innan du öppnar ett tips.',
  'status.hintReady': 'Tips redo. Börja med steg 1.',
  'status.openingSaved': 'Öppnar ditt sparade spel...',
  'status.savedDeleted': 'Sparat spel raderat.',
  'status.allDeleted': 'Alla sparade spel raderade.',
  'status.signedOut': 'Utloggad. Dina kontospel förblir sparade.',
  'status.revoked': 'Utloggad överallt. Logga in igen för att fortsätta.',
  'status.accountDeleted': 'Konto och sparade spel raderade.',
  'retry.saving': 'Försök att spara igen',
  'retry.restoring': 'Försök att återställa igen',
  'retry.connection': 'Kontrollera anslutningen',
  'retry.starting': 'Försök att starta igen',
  'retry.move': 'Försök flytta igen',
  'retry.hint': 'Försök att tipsa igen',
  'retry.time': 'Försök att spara tid igen',
  'retry.progress': 'Försök att spara förloppet igen',
  'retry.leaving': 'Försök att lämna igen',
  'retry.opening': 'Försök öppna igen',
  'retry.deleting': 'Försök att radera igen',
  'retry.signOut': 'Försök att logga ut igen',
  'retry.revoke': 'Försök att logga ut överallt igen',
  'retry.deleteAccount': 'Försök att ta bort kontot igen',
  'error.accountSave':
    'Ditt lokala spel är säkert, men det kunde inte sparas på ditt konto.',
  'error.restoring': 'Ditt pussel kunde inte återställas.',
  'error.connection':
    'Speltjänsten kunde inte nås. Kontrollera din anslutning och försök igen.',
  'error.http': 'Speltjänsten returnerade felet {status}. Försök igen.',
  'error.unavailable':
    'Speltjänsten är tillfälligt otillgänglig. Din bräda är säker; försök igen.',
  'error.starting': 'Spelet kunde inte startas.',
  'error.signInAgain': 'Logga in igen för att spara drag.',
  'error.localUnavailable': 'Det lokala spelet är inte tillgängligt.',
  'error.move': 'Flytten kunde inte sparas.',
  'error.currentUnavailable': 'Det aktuella spelet är inte tillgängligt.',
  'error.hintChanged': 'Tavlan ändrades medan tipset förbereddes.',
  'error.hint': 'Tipset kunde inte förberedas.',
  'error.time': 'Den senaste speltiden kunde inte sparas.',
  'error.timer': 'Det senaste timertillståndet kunde inte sparas.',
  'error.leaving': 'Det lokala pusslet kunde inte rensas.',
  'error.opening': 'Det sparade spelet kunde inte öppnas.',
  'error.deleteGame': 'Det sparade spelet kunde inte raderas.',
  'error.deleteAll': 'De sparade spelen kunde inte raderas.',
  'error.signOut': 'Du kunde inte loggas ut.',
  'error.revoke': '-sessioner kunde inte återkallas.',
  'error.deleteAccount': 'Kontot kunde inte raderas.',
  'error.invalid-request': 'Begäran är ogiltig.',
  'error.invalid-json': 'Begäran innehåller ogiltig JSON.',
  'error.unsupported-media-type': 'Begäran Content-Type stöds inte.',
  'error.payload-too-large': 'Förfrågan är för stor.',
  'error.unauthorized': 'auktorisering krävs.',
  'error.forbidden-origin': 'Detta förfrågningsursprung är inte tillåtet.',
  'error.session-not-found': 'Spelsessionen hittades inte.',
  'error.revision-conflict': 'Styrelsen ändrades innan detta drag tillämpades.',
  'error.invalid-session': 'Spelsessionen är ogiltig.',
  'error.invalid-action': 'Denna spelåtgärd är ogiltig.',
  'error.invalid-cell': 'Denna cell är ogiltig.',
  'error.immutable-cell': 'En given cell kan inte ändras.',
  'error.note-not-allowed': 'Kandidater kan inte ändras i den här cellen.',
  'error.no-undo': 'Det finns ingen åtgärd att ångra.',
  'error.no-redo': 'Det finns ingen åtgärd att göra om.',
  'error.no-hint': 'Ingen ledtråd finns tillgänglig.',
  'error.stale-hint': 'Kortet ändrades efter att detta tips förberetts.',
  'error.persistence-failed': 'Spelet kunde inte sparas.',
  'error.internal-error': 'Begäran kunde inte slutföras.',
  'error.account-unavailable': 'Kontofunktioner är inte tillgängliga.',
  'error.account-unauthorized': 'En giltig applikationssession krävs.',
  'error.csrf-failed': 'Denna inloggning kunde inte verifieras. Logga in igen.',
  'error.account-game-not-found': 'Det sparade spelet hittades inte.',
  'error.guest-revision-conflict':
    'Det lokala spelet ändrades innan denna åtgärd tillämpades.',
  'error.guest-claim-conflict':
    'Det här lokala spelet har redan sparats på ett konto.',
  'error.malformedDescriptor': 'Förklaringen kunde inte visas.',
  'account.close': 'Stäng kontopanelen',
  'account.games.title': 'Mina spel',
  'account.games.deleteAll': 'Ta bort alla',
  'account.games.deletingAll': 'Raderar alla...',
  'account.games.empty': 'Inga sparade spel ännu.',
  'account.games.puzzle': '{difficulty} pussel',
  'account.games.finished': 'Färdig',
  'account.games.inProgress': 'Pågår',
  'account.games.saved': 'Sparat spel',
  'account.games.open': 'Öppna',
  'account.games.opening': 'Öppnar...',
  'account.games.delete': 'Ta bort',
  'account.games.deleting': 'Raderar...',
  'account.signOut': 'Logga ut',
  'account.signingOut': 'Loggar ut...',
  'account.settings': 'Kontoinställningar',
  'account.revoke': 'Logga ut överallt',
  'account.delete': 'Ta bort konto',
  'board.label': 'Sudoku spelplan',
  'board.cell':
    'Rad {row}, kolumn {column}, {content}{pending, select, true {, kontrolleras} other {}}{invalid, select, true {, ogiltig} other {}}{hint, select, none {} other {, {hint}}}',
  'board.cell.given': 'givet {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'tom, kandidater {candidates}',
  'board.cell.empty': 'tom',
  'board.hint.focus': 'tipsfokus',
  'board.hint.premise': 'ledtrådsbevis',
  'board.hint.eliminated': 'kandidat eliminerad',
  'board.hint.conclusion': 'ledtråd slutsats',
  'board.hint.problem': 'behöver korrigeras',
  'board.hint.extra': 'omöjlig kandidat',
  'board.hint.group': 'grupp {group}',
  'board.hint.chain': 'kedjeposition {position}',
  'board.paused.title': 'Pussel pausad',
  'board.paused.detail': 'Din tid är stoppad.',
  'hint.label': 'Tips',
  'hint.close': 'Stäng',
  'hint.strategy.grade': '{grade} strategi',
  'hint.applying': 'Använder tips...',
  'hint.refreshing': 'Uppfriskande tips...',
  'hint.step': 'Steg {current} av {total}',
  'hint.legend.label': 'Visuell ledtrådsförklaring',
  'hint.legend.strong': 'Solid: måste innehålla',
  'hint.legend.weak': 'Streckad: kan inte båda',
  'hint.legend.implication': 'Pil: implikation',
  'hint.legend.groups': 'A/B: alternerande grupper',
  'hint.legend.order': 'Nummer: kedjeordning',
  'hint.back': 'Tillbaka',
  'hint.next': 'Nästa',
  'hint.apply': 'Använd tips',
  'controls.label': 'Spelkontroller',
  'controls.digit.note': 'Lägg till eller ta bort anteckning {digit}',
  'controls.digit.enter': 'Ange {digit}',
  'controls.hint.preparing': 'Förbereder tips...',
  'controls.hint.preparingDetail':
    'Håller pusslet synligt medan nästa steg förbereds.',
  'controls.complete.eyebrow': 'pussel klar',
  'controls.complete.title': 'Löst i {time}',
  'controls.complete.detail':
    'Behåll rytmen med ett annat {difficulty}-kort, eller välj en annan nivå.',
  'controls.complete.another': 'Spela en annan {difficulty}',
  'controls.complete.replay': 'Spela om detta pussel',
  'controls.complete.choose': 'Välj en annan nivå',
  'controls.pad': 'Nummerlapp',
  'controls.pad.notes': 'Nummerblock, anteckningsläge',
  'controls.modes': 'Ingångslägen',
  'controls.notes.on': 'Anmärkningar om',
  'controls.notes.off': 'Anteckningar av',
  'controls.candidates.on': 'Kandidater på',
  'controls.candidates.off': 'Kandidater av',
  'controls.actions': 'Pusselåtgärder',
  'controls.erase': 'Radera',
  'controls.undo': 'Ångra',
  'controls.undoing': 'Ångra...',
  'controls.redo': 'Gör om',
  'controls.redoing': 'gör om...',
  'controls.hint.reveal': 'Avslöja ett tips',
  'controls.shortcuts': 'Kortkommandon',
  'controls.shortcuts.move': 'Flytta',
  'controls.shortcuts.arrows': 'Piltangenter',
  'controls.shortcuts.enter': 'Ange ett nummer',
  'controls.shortcuts.notes': 'Anteckningar / kandidater',
  'controls.shortcuts.or': 'eller',
  'controls.shortcuts.pause': 'Pausa eller återuppta',
  'controls.shortcuts.hint': 'Öppna, flytta fram eller använd en ledtråd',
  'controls.shortcuts.hintOther': 'Andra tipskontroller',
  'hint.target.candidate.visible': 'denna markerade kandidat',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    '-kandidat {value} på rad {row}, kolumn {column}',
  'hint.target.cell.visible': 'denna markerade cell',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'rad {row}, kolumn {column}',
  'hint.target.unit.visible': 'detta framhävde {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'rad',
  'hint.target.column': 'kolumn',
  'hint.target.box': 'box',
  'chrome.home': 'Sudoku hem',
  'chrome.appearance': 'Utseende',
  'chrome.theme.use': 'Använd temat {theme}',
  'chrome.theme.systemTitle': 'Systemtema ({theme})',
  'chrome.theme.title': '{theme} tema',
  'chrome.theme.system': 'System',
  'chrome.theme.systemName': '-system',
  'chrome.theme.light': 'ljus',
  'chrome.theme.dark': 'mörk',
  'chrome.connection.connecting': 'Ansluter',
  'chrome.connection.unavailable': 'Tjänsten är inte tillgänglig',
  'chrome.footer.tagline': 'Tankeväckande lek, utan distraktioner.',
  'chrome.footer.privacy': 'Sekretess',
  'chrome.footer.terms': 'Villkor',
  'chrome.footer.input': 'Tangentbord och beröringsklar',
};
