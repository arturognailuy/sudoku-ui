import type { MessageCatalog } from './types';

export const ptBR: MessageCatalog = {
  'common.language.auto': 'Automático',
  'common.language.label': 'Linguagem',
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.ja': '日本語',
  'common.language.es': 'Español',
  'common.language.ko': '한국어',
  'common.language.fr': 'Français',
  'common.language.de': 'Deutsch',
  'common.language.ru': 'Русский',
  'common.language.ar': 'العربية',
  'common.language.id': 'Bahasa Indonesia',
  'common.language.id.short': 'Indonesia',
  'common.language.hi': 'हिन्दी',
  'common.language.it': 'Italiano',
  'common.language.tr': 'Türkçe',
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
  'common.language.pt-BR': 'Português (Brasil)',
  'common.language.pt-BR.short': 'Português',
  'common.difficulty.easy': 'Fácil',
  'common.difficulty.medium': 'Médio',
  'common.difficulty.hard': 'Difícil',
  'common.difficulty.expert': 'Especialista',
  'accessibility.language.changed': 'Idioma alterado para {language}.',
  'common.difficulty.evil': 'Extremo',
  'difficulty.easy.name': 'Fácil',
  'difficulty.hard.name': 'Difícil',
  'difficulty.medium.name': 'Médio',
  'difficulty.evil.name': 'Extremo',
  'difficulty.expert.name': 'Especialista',
  'strategy.hidden-single.name': 'Hidden Single',
  'strategy.naked-single.name': 'Naked Single',
  'strategy.pointing-pair.name': 'Pointing Pairs / Box-Line Reduction',
  'strategy.naked-pair.name': 'Naked Pair',
  'strategy.naked-triple.name': 'Naked Triple',
  'strategy.xy-wing.name': 'XY-Wing',
  'strategy.hidden-pair.name': 'Hidden Pair',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.hidden-triple.name': 'Hidden Triple',
  'strategy.swordfish.name': 'Swordfish',
  'strategy.naked-quad.name': 'Naked Quad',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.hidden-quad.name': 'Hidden Quad',
  'strategy.simple-coloring.name': 'Simple Coloring',
  'strategy.xyz-wing.name': 'XYZ-Wing',
  'strategy.jellyfish.name': 'Jellyfish',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Unique Rectangle Type 1',
  'strategy.unique-rectangle-2.name': 'Unique Rectangle Type 2',
  'strategy.unique-rectangle-3.name': 'Unique Rectangle Type 3',
  'strategy.unique-rectangle-4.name': 'Unique Rectangle Type 4',
  'strategy.xy-chain.name': 'XY-Chain',
  'strategy.x-cycles.name': 'X-Cycles',
  'strategy.backtracker.name': 'Backtracker',
  'hint.value-correction.title': 'Corrija este valor',
  'hint.candidate-correction.title': 'Corrigir os candidatos desta célula',
  'hint.value-correction.summary':
    'O valor em {cell} entra em conflito com o quebra-cabeça. Limpe-o antes de continuar.',
  'hint.candidate-correction.summary':
    'Antes de continuar, refaça os candidatos de {cell} com base nos números já preenchidos na linha, coluna e bloco.',
  'hint.strategy.summary':
    'Siga estas {steps} etapas para entender e aplicar {strategy}.',
  'hint.value-correction.observe':
    'Confira {cell}. O valor entra em conflito com o tabuleiro.',
  'hint.value-correction.conclude':
    'Limpe o valor em {cell} para que a grade candidata possa ser verificada a seguir.',
  'hint.candidate-correction.observe':
    'Confira {cell}. Os candidatos não correspondem ao tabuleiro.',
  'hint.strategy.observe':
    'Confira as células, os candidatos, as linhas, as colunas e os blocos destacados.',
  'hint.candidate-correction.compare':
    'Recomece esta célula com base nos números já preenchidos na linha, coluna e bloco.',
  'hint.candidate-correction.conclude':
    'Redefina os candidatos de {cell} para todos os dígitos permitidos pela linha, coluna e bloco.',
  'hint.strategy.compare':
    'Compare as restrições destacadas para identificar o único resultado possível.',
  'hint.strategy.conclude':
    'Aplique o resultado destacado. Este padrão é {strategy}.',
  'hint.narration.value-conflict':
    '. O valor inserido entra em conflito com o quebra-cabeça.',
  'hint.narration.look-at': 'Olhe para',
  'hint.coloring.pair':
    'Em {unit}, as únicas posições possíveis para {digit} são {cells}. Exatamente uma delas contém esse dígito; marque as duas alternativas como A e B.',
  'hint.coloring.chain':
    'Continue pela cadeia de pares conjugados de {digit}. Cada par reúne as duas únicas posições possíveis em uma linha, coluna ou bloco, por isso os rótulos precisam se alternar ao longo de toda a cadeia: A em {group_a} e B em {group_b}.',
  'hint.coloring.alternatives':
    'Há duas possibilidades: todas as células A contêm {digit} e as B não, ou todas as células B contêm {digit} e as A não. Não é preciso saber qual das duas atribuições está correta para fazer a eliminação.',
  'hint.coloring.elimination':
    '{cell} vê a posição A em {group_a_cell} e a posição B em {group_b_cell}. Como um dos dois grupos necessariamente contém {digit}, essa célula sempre vê esse dígito e não pode contê-lo.',
  'hint.coloring.apply':
    'Remova {candidates}. Cada célula-alvo compartilha uma unidade com uma posição A e também com uma posição B; como uma dessas posições necessariamente contém {colored_digit}, esse candidato não pode permanecer na célula-alvo. Esse padrão se chama {strategy}.',
  'hint.coloring.place':
    'Os candidatos vinculados para {colored_digit} forçam o resultado. Coloque {digit} em {cell}. Este padrão é {strategy}.',
  'hint.x-cycle.opening':
    'Em {unit}, {digit} só pode aparecer em {cells}. Portanto, uma dessas duas células deve conter {digit}.',
  'hint.x-cycle.assume':
    'Suponha que {start} não contenha {digit}. Nesse caso, {forced} terá de conter {digit}; assim, {blocked} não poderá conter {digit}, e {unit} forçará {digit} em {result}.',
  'hint.x-cycle.follow':
    'Como {true_cell} contém {digit}, {blocked} não pode conter {digit}. Portanto, em {unit}, {result} é forçada a conter {digit}.',
  'hint.x-cycle.close':
    'Como {true_cell} contém {digit}, {blocked} não pode conter {digit}. Assim, em {unit}, {result} é a única posição restante para {digit}.',
  'hint.x-cycle.place':
    'A hipótese de que {assumption} não contém {digit} implica que {cell} contém justamente {digit}, o que é uma contradição. Portanto, coloque {digit} em {cell}. Esse padrão se chama {strategy}.',
  'hint.xy-chain.start':
    '{cell} tem apenas os candidatos {first_digit} e {second_digit}. Ou contém {endpoint_digit}, ou, se não contiver {endpoint_digit}, terá de conter {other_digit}.',
  'hint.xy-chain.assume':
    'Suponha que {start} não contenha {endpoint_digit}. Então, deve conter {start_value}. Como {start} e {middle} compartilham {first_unit}, {middle} não pode conter {start_value} e deve conter {middle_value}. Em {second_unit}, isso impede que {result} contenha {middle_value}, obrigando-a a conter {result_value}.',
  'hint.xy-chain.follow':
    'Como {start} contém {start_value}, {middle}, que compartilha {first_unit} com essa célula, não pode conter {start_value} e deve conter {middle_value}. Como {middle} e {result} compartilham {second_unit}, {result} não pode conter {middle_value} e deve conter {result_value}.',
  'hint.xy-chain.reach':
    'Como {start} contém {start_value}, {endpoint} não pode conter {shared_digit}. Seu único outro candidato é {endpoint_digit}; portanto, deve conter {endpoint_digit}.',
  'hint.xy-chain.place':
    'Se {first_endpoint} contiver {endpoint_digit}, essa primeira extremidade já terá {endpoint_digit}. Caso contrário, a cadeia forçará {endpoint_digit} na outra extremidade, {second_endpoint}. Portanto, pelo menos uma extremidade contém {endpoint_digit}. Como {cell} vê as duas, não pode conter {endpoint_digit}; preencha {cell} com {digit}. Esse padrão se chama {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Comece por {cell}. A linha, a coluna e o bloco já contêm {excluded_digits}.',
  'hint.naked-single.only':
    'Portanto, {digit} é o único dígito que pode entrar em {cell}.',
  'hint.naked-single.apply':
    'Coloque {digit} em {cell}. Uma célula com apenas um candidato é um {strategy}.',
  'hint.hidden-single.inspect':
    'Em {unit}, verifique onde {digit} pode entrar.',
  'hint.hidden-single.blockers':
    'Os {digit} já colocados em {blockers} eliminam {digit} de todas as outras células vazias de {unit}.',
  'hint.hidden-single.only': 'Somente {cell} ainda pode conter {digit}.',
  'hint.hidden-single.apply':
    'Coloque {digit} em {cell}. Quando um dígito tem apenas uma célula possível em uma linha, coluna ou bloco, isso é um {strategy}.',
  'hint.naked-pair.inspect':
    'Em {unit}, observe {cell}: seus únicos candidatos são {first_digit} e {second_digit}.',
  'hint.naked-pair.match':
    'A outra célula, {cell}, também tem somente os candidatos {first_digit} e {second_digit}.',
  'hint.naked-pair.reserve':
    'Como essas duas células terão de receber {digits}, em alguma ordem, o candidato {digit} não pode permanecer em nenhuma outra célula de {unit}.',
  'hint.naked-pair.apply':
    'Remova {candidates}; esta etapa apenas elimina candidatos, sem preencher nenhuma célula. Esse padrão é um {strategy}.',
  'hint.naked-triple.first':
    'Em {unit}, comece por {cell}, que só pode conter {first_digit} ou {second_digit}.',
  'hint.naked-triple.second':
    'Inclua {cell}; seus únicos candidatos são {first_digit} e {second_digit}.',
  'hint.naked-triple.third':
    'Inclua também {cell}; seus únicos candidatos são {first_digit} e {second_digit}. Consideradas em conjunto, as três células não têm candidatos além de {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Como essas três células precisam receber {reserved_digits}, em alguma ordem, elimine {removed_digits} de {cell}; assim, resta apenas {remaining_digit}.',
  'hint.naked-triple.apply':
    'Coloque {digit} em {cell}. Três células cujos candidatos se restringem aos mesmos três dígitos formam um {strategy}.',
  'hint.naked-quad.cell':
    'Em {unit}, os únicos candidatos de {cell} são {digits}.',
  'hint.subset-reservation.observe':
    'Em {unit}, {cells} contêm apenas {digits}.',
  'hint.subset-reservation.explain':
    'Em {unit}, os dígitos {digits} ficam reservados para essas quatro células; portanto, elimine-os das demais.',
  'hint.subset-reservation.apply':
    'Remova {candidates}. Esse padrão é {strategy}.',
  'hint.subset-reservation.place':
    'Coloque {digit} em {cell}. Esse padrão se chama {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'Em {unit}, {digits} só podem aparecer em {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Como {digits} estão restritos a essas células em {unit}, elas não podem conter outros candidatos.',
  'hint.hidden-subset-confinement.apply':
    'Remova {candidates} das células restritas. Este padrão é {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Coloque {digit} em {cell} após remover os outros candidatos. Este padrão é {strategy}.',
  'hint.hidden-pair.first':
    'Em {unit}, o candidato {digit} aparece apenas em {cells}.',
  'hint.hidden-pair.second':
    'O candidato {digit} também está restrito às mesmas duas células. Juntos, {digits} devem ocupar {cells} em alguma ordem.',
  'hint.hidden-pair.consequence':
    'Essas duas células estão reservadas para {digits}, então os outros candidatos não podem permanecer: {candidates}.',
  'hint.hidden-pair.apply':
    'Remova {candidates}. Esse padrão se chama {strategy}.',
  'hint.hidden-triple.first':
    'Em {unit}, o candidato {digit} só aparece em {cells}.',
  'hint.hidden-triple.second':
    'Em {unit}, os candidatos {digits} só aparecem em {cells}.',
  'hint.hidden-triple.third':
    'Em {unit}, os candidatos {digits} só aparecem em {cells}.',
  'hint.hidden-triple.consequence':
    'Como os candidatos {digits} estão confinados a essas células em {unit}, nenhum outro candidato pode permanecer nelas.',
  'hint.hidden-triple.apply':
    'Remova {candidates} das células identificadas. Esse padrão se chama {strategy}.',
  'hint.hidden-quad.first':
    'Em {unit}, o candidato {digit} só aparece em {cells}.',
  'hint.hidden-quad.second':
    'Em {unit}, os candidatos {digits} só aparecem em {cells}.',
  'hint.hidden-quad.third':
    'Em {unit}, os candidatos {digits} só aparecem em {cells}.',
  'hint.hidden-quad.fourth':
    'Em {unit}, os candidatos {digits} só aparecem em {cells}.',
  'hint.hidden-quad.consequence':
    'Como os candidatos {digits} estão confinados a essas células em {unit}, nenhum outro candidato pode permanecer nelas.',
  'hint.hidden-quad.apply':
    'Remova {candidates} das células identificadas. Esse padrão se chama {strategy}.',
  'hint.pointing-pair.first':
    'Em {source_unit}, observe o candidato {digit} em {cell} e localize todas as outras posições possíveis para {digit} nesse bloco.',
  'hint.pointing-pair.second':
    'Dentro de {source_unit}, a única outra posição possível para {digit} é {cell}. As duas posições ficam em {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Em {source_unit}, o {digit} terá de ocupar uma dessas duas posições de {intersection_unit}. Portanto, {candidate} não pode permanecer nas demais posições de {intersection_unit}.',
  'hint.pointing-pair.apply':
    'Em {cell}, resta apenas o candidato {digit}. Coloque {digit} nessa célula. Esse padrão se chama {strategy}.',
  'hint.intersection-confinement.observe':
    'Em {source_unit}, o candidato {digit} está confinado a {intersection_unit} em {cells}.',
  'hint.intersection-confinement.explain':
    'Como todo {digit} em {source_unit} está em {intersection_unit}, as células fora da origem, mas dentro da interseção, não podem contê-lo.',
  'hint.intersection-confinement.apply':
    'Remova o candidato {digit} de {cells}. Este padrão é {strategy}.',
  'hint.intersection-confinement.place':
    'Coloque {digit} em {cell} após aplicar a interseção. Este padrão é {strategy}.',
  'hint.fish-confinement.observe':
    'Considerando {base_units}, todas as posições possíveis do candidato {digit} ficam restritas a {cover_units}.',
  'hint.fish-confinement.explain':
    'O candidato {digit} fica restrito de {base_units} a {cover_units}, então essas unidades de cobertura devem recebê-lo pelas posições-base destacadas.',
  'hint.swordfish.consequence':
    'Cada unidade de base em {base_units} terá de colocar um {digit} em uma das unidades de cobertura em {cover_units}. Juntas, essas três colocações ocuparão todas as unidades de cobertura, portanto nenhum outro {digit} poderá permanecer nelas.',
  'hint.jellyfish.consequence':
    'Cada unidade de base em {base_units} terá de colocar um {digit} em uma das unidades de cobertura em {cover_units}. Juntas, essas quatro colocações ocuparão todas as unidades de cobertura, portanto nenhum outro {digit} poderá permanecer nelas.',
  'hint.fish-confinement.apply':
    'Remova o candidato {digit} de {cells}. Esse padrão se chama {strategy}.',
  'hint.x-wing.first':
    'Em {base_unit}, as posições possíveis do candidato {digit} ficam restritas a {cover_units}.',
  'hint.x-wing.second':
    'Em {base_unit}, as posições possíveis de {digit} também se limitam a {cover_units}. Assim, nas duas unidades indicadas, o candidato fica restrito às mesmas duas unidades perpendiculares.',
  'hint.x-wing.consequence':
    'Cada uma das unidades em {base_units} terá de receber um {digit} em uma das posições de {cover_units}. Juntas, essas duas colocações de {digit} ocuparão as duas unidades perpendiculares; por isso, nenhum outro {digit} pode permanecer nelas.',
  'hint.x-wing.apply':
    'Remova o candidato {digit} de {cells}. Esse padrão se chama {strategy}.',
  'hint.pivot-wing.observe':
    'Em {pivot}, os candidatos {pivot_digits} conectam as células da asa em {wing_cells}.',
  'hint.pivot-wing.explain':
    'Cada ala em {wing_cells} compartilha um candidato com o pivô em {pivot}, e ambas as alas contêm {shared_digit}. Qualquer que seja o candidato a pivô verdadeiro, uma ala deve conter {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} tem apenas os candidatos {digits}; portanto, deve conter um deles.',
  'hint.xy-wing.case':
    'Se {pivot} for {pivot_digit}, {wing} não poderá ser {pivot_digit}. Como o único outro candidato de {wing} é {shared_digit}, essa célula deverá conter {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Seja qual for o valor de {pivot}, pelo menos uma das duas células das asas, {wing_cells}, conterá {shared_digit}. Não é preciso saber qual delas.',
  'hint.xy-wing.apply':
    '{cells} enxergam as duas asas {wing_cells}. Como pelo menos uma é {shared_digit}, remova {shared_digit} dessas células. Esse padrão se chama {strategy}.',
  'hint.xy-wing.place':
    '{cell} vê as duas asas em {wing_cells}. Como pelo menos uma delas contém {shared_digit}, {cell} não pode conter {shared_digit}. Preencha-a com o único outro candidato, {digit}. Esse padrão se chama {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} tem apenas os candidatos {digits}; portanto, deve conter um deles.',
  'hint.xyz-wing.case':
    'Se {pivot} for {pivot_digit}, {wing}, que compartilha {unit} com o pivô, não poderá ser {pivot_digit}. Como o único outro candidato de {wing} é {shared_digit}, essa célula deverá conter {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Se {pivot} for {shared_digit}, o próprio pivô já conterá {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Seja qual for o valor de {pivot}, pelo menos uma das células em {pattern_cells} conterá {shared_digit}. Não é preciso saber qual delas.',
  'hint.xyz-wing.apply':
    '{target} compartilha {first_unit} com {first_pattern_cell}, {second_unit} com {second_pattern_cell} e {third_unit} com {third_pattern_cell}. Como pelo menos uma dessas três células contém {shared_digit}, {target} não pode conter {shared_digit}. Remova esse candidato. Esse padrão se chama {strategy}.',
  'hint.strong-link-wing.observe':
    'Cada célula em {wing_cells} tem apenas os candidatos {digits}.',
  'hint.strong-link-wing.bridge':
    'Em {unit}, o candidato {link_digit} só pode aparecer em {link_cells}; portanto, pelo menos uma dessas células deve conter {link_digit}.',
  'hint.strong-link-wing.force':
    'Se {first_link_cell} contiver {link_digit}, {first_wing_cell} não poderá conter {link_digit} e deverá ser {forced_digit}. Se {second_link_cell} contiver {link_digit}, {second_wing_cell} deverá ser {forced_digit}. Portanto, pelo menos uma dessas duas células das asas contém {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Pelo menos uma das células {wing_cells} é {digit}. Remova o candidato {digit} de {cells}, pois essas células veem ambas. Esse padrão é chamado de {strategy}.',
  'hint.strong-link-wing.place':
    'Pelo menos uma das células das asas em {wing_cells} contém {removed_digit}. Como {cell} vê ambas, remova dela o candidato {removed_digit} e preencha-a com {digit}. Esse padrão se chama {strategy}.',
  'hint.relational-wing.apply':
    'Remova o candidato {digit} de {cells}. Este padrão é {strategy}.',
  'hint.relational-wing.place':
    'Remova o candidato {removed_digit} de {cell}, então coloque {digit} lá. Este padrão é {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Com exceção de {cell}, cada uma das outras {count} células não resolvidas tem exatamente dois candidatos.',
  'hint.bug-plus-one.trivalue':
    '{cell} tem três candidatos — {digits} —, um a mais que qualquer outra célula não resolvida.',
  'hint.bug-plus-one.unit-count':
    'Em {unit}, o candidato {digit} tem três posições possíveis; cada um dos outros dígitos, {other_digits}, tem apenas duas.',
  'hint.bug-plus-one.explain':
    'Considerando {units}, o candidato {digit} tem uma posição possível a mais que cada um dos dígitos {other_digits}. Se {cell} não contivesse {digit}, todas as células não resolvidas teriam exatamente dois candidatos, e o sudoku deixaria de ter solução única. Portanto, {cell} deve conter {digit}.',
  'hint.bug-plus-one.place':
    'Coloque {digit} em {cell}. Esse padrão de candidato extra preserva a unicidade e se chama {strategy}.',
  'hint.unique-rectangle.rectangle':
    'As quatro células não resolvidas em {cells} ocupam os cantos de um retângulo.',
  'hint.unique-rectangle.pair-corners':
    'Nas células {cells}, os únicos candidatos são {digits}.',
  'hint.unique-rectangle.third-corner':
    '{cell} também tem exatamente os candidatos {digits}. Agora, três cantos contêm o mesmo par.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} contém {digits}. É o único canto do retângulo que também tem o candidato {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Se {cell} contivesse um dos dígitos do par {digits}, os quatro cantos poderiam trocar esses dois valores sem alterar nenhuma linha, coluna ou bloco. Isso produziria duas soluções; portanto, remova {digits} e mantenha {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'Só resta {digit} em {cell}. Preencha essa célula. Esse padrão se chama {strategy}.',
  'hint.unique-rectangle.observe':
    'As células em {cells} formam um retângulo e todas contêm o par {digits}.',
  'hint.unique-rectangle.type1':
    'Três cantos contêm exatamente {digits}. Se {cell} também usasse qualquer um dos dígitos, o retângulo permitiria duas soluções intercambiáveis.',
  'hint.unique-rectangle.type2-first-expanded':
    'Os candidatos de {cell} são {pair} e {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} também tem o par {pair}, além de {extra_digit}. Portanto, os dois cantos expandidos compartilham o candidato adicional {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Pelo menos uma das células em {cells} deve conter {extra_digit} para impedir soluções intercambiáveis. Como {target} vê as duas células, não pode conter {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'Só resta {digit} em {cell}. Preencha essa célula. Esse padrão se chama {strategy}.',
  'hint.unique-rectangle.type2':
    'Os dois cantos expandidos em {cells} compartilham o candidato extra {digit}, portanto, qualquer célula que veja ambos os cantos não pode conter {digit}.',
  'hint.unique-rectangle.type3':
    'Os dígitos extras {digits} no retângulo combinam-se com {cells} como um subconjunto reservado em {unit}, para que esses dígitos possam ser removidos em outro lugar nessa unidade.',
  'hint.unique-rectangle.type3-first-expanded':
    '{cell} também tem o par {pair}, além do candidato extra {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    '{cell} também tem o par {pair}, além do candidato extra {extra_digit}. Pelo menos um dos dois cantos expandidos deve usar um dígito extra; caso contrário, os quatro cantos poderiam trocar {pair} e produzir duas soluções.',
  'hint.unique-rectangle.type3-partner': '{cell} só pode conter {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Uma das células em {corners} deve usar um dos dígitos {digits}, e {partner} deve usar o outro. Esses dígitos ficam reservados em {unit}; portanto, {target} não pode conter {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'Só resta {digit} em {cell}. Preencha essa célula. Esse padrão se chama {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    '{cell} também tem o par {pair}, além do candidato extra {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    '{cell} também tem o par {pair}, além do candidato extra {extra_digit}. Agora, os dois cantos expandidos contêm o par do retângulo.',
  'hint.unique-rectangle.type4':
    'Em {unit}, o candidato {digit} forma um par conjugado nas células {cells}. Por isso, o candidato {removed_digit} não pode ocupar nenhum dos cantos expandidos sem criar soluções intercambiáveis.',
  'hint.unique-rectangle.type4-apply':
    'Remova o candidato {digit} de {cells}. Essa relação de unicidade se chama {strategy}.',
  'hint.unique-rectangle.apply':
    'Remova {candidates}. Esse relacionamento de exclusividade é {strategy}.',
  'hint.unique-rectangle.place':
    'Coloque {digit} em {cell} após aplicar o relacionamento de exclusividade. Este padrão é {strategy}.',
  'hint.implication-chain.observe':
    'Comece em {cell}, que tem apenas os candidatos {digits}.',
  'hint.implication-chain.explain':
    '{from} e {to} compartilham um candidato e se enxergam, então esse candidato não pode ser verdadeiro nos dois; a implicação continua.',
  'hint.implication-chain.apply':
    'Uma das extremidades deve conter {digit}, então remova o candidato {digit} de {cells}. Esse padrão é {strategy}.',
  'hint.narration.apply': 'Aplique a dedução:',
  'hint.narration.clear-value': 'Limpe o valor em',
  'hint.narration.clear-value-tail':
    'então a grade candidata pode ser verificada a seguir.',
  'hint.narration.candidate-inconsistent':
    '. Seu estado candidato é inconsistente com o quebra-cabeça.',
  'hint.narration.reset-candidates': 'Redefinir o candidato definido em',
  'hint.narration.period': '.',
  'hint.narration.reset-candidates-tail':
    'para cada dígito permitido pelos valores aceitos de linha, coluna e caixa.',
  'hint.narration.place': ', lugar',
  'hint.narration.no-other-digit': 'Porque nenhum outro dígito pode entrar',
  'hint.narration.only-candidate': '. Tem apenas um candidato:',
  'hint.narration.in-unit': 'Em',
  'hint.narration.naked-single-tail':
    ' nessa célula. Isso é chamado de Naked Single.',
  'hint.narration.can-appear': 'pode aparecer.',
  'hint.narration.consider-digit': ', considere onde',
  'hint.narration.other-cells': 'Todas as outras células vazias em',
  'hint.narration.because-unit': 'Porque',
  'hint.narration.leaving-only': ', deixando apenas',
  'hint.narration.cannot-contain': 'não pode conter',
  'hint.narration.only-cell': 'e',
  'hint.narration.hidden-single-tail': 'é a única célula possível, coloque',
  'hint.narration.place-result': 'lugar',
  'hint.narration.still-needs': 'ainda precisa',
  'hint.narration.in': 'em',
  'hint.narration.from': 'de',
  'hint.narration.separator': ',',
  'hint.narration.hidden-single-name':
    ' nessa célula. Isso é chamado de Hidden Single.',
  'hint.narration.remove': 'remover candidato',
  'hint.narration.strategy-result': '. Este é o resultado {strategy}.',
  'welcome.title': 'Escolha sua dificuldade',
  'welcome.eyebrow': 'Novo quebra-cabeça',
  'welcome.lede': 'Escolha um nível e comece quando estiver pronto.',
  'welcome.difficulty': 'Dificuldade',
  'welcome.start': 'Iniciar quebra-cabeça {difficulty}',
  'welcome.starting': 'Iniciando o quebra-cabeça {difficulty}…',
  'loading.account.eyebrow': 'Conta',
  'loading.initial': 'Carregando seu quebra-cabeça…',
  'welcome.preview': 'Antevisão do quebra-cabeça Sudoku',
  'loading.account.title': 'Salvando seu quebra-cabeça em sua conta…',
  'loading.home.eyebrow': 'Sudoku',
  'loading.account.detail':
    'Seu progresso fica neste dispositivo até que a conta confirme o salvamento.',
  'loading.home.title': 'Voltando à primeira página…',
  'loading.restart.eyebrow': 'Mesmo quebra-cabeça',
  'loading.home.detail':
    'Verificando a interface mais recente antes de mostrar a seleção de nível.',
  'loading.restart.title': 'Reiniciando este quebra-cabeça…',
  'loading.new.eyebrow': 'Novo quebra-cabeça',
  'loading.new.title': 'Preparando seu tabuleiro {difficulty}…',
  'loading.restart.detail':
    'Manter o tabuleiro antigo bloqueado até que a nova tentativa esteja pronta.',
  'loading.new.detail':
    'Criando um novo quebra-cabeça agora. Você estará jogando em um momento.',
  'confirmation.home.eyebrow': 'Voltar para casa?',
  'confirmation.home.description':
    'Seu progresso atual não será mais aberto automaticamente neste dispositivo.',
  'confirmation.home.cancel': 'Continue jogando',
  'confirmation.home.title': 'Deixe este quebra-cabeça',
  'confirmation.restart.title': 'Recomeçar',
  'confirmation.home.confirm': 'Voltar para a primeira página',
  'confirmation.restart.eyebrow': 'Recomeçar?',
  'confirmation.restart.description':
    'Repita este quebra-cabeça a partir de seus dados originais ou escolha um quebra-cabeça diferente.',
  'confirmation.restart.replay.title': 'Repita este quebra-cabeça',
  'confirmation.restart.replay.description':
    'Mantenha esses dados e reinicie esta tentativa.',
  'confirmation.restart.different.description':
    'Escolha um nível para um novo tabuleiro.',
  'common.cancel': 'Cancelar',
  'confirmation.restart.different.title': 'Jogue um quebra-cabeça diferente',
  'confirmation.restart.different.level':
    'Nível para o quebra-cabeça diferente',
  'account.confirm.deleteGame.eyebrow': 'Excluir jogo salvo?',
  'account.confirm.deleteGame.title': 'Excluir este jogo',
  'account.confirm.deleteGame.description':
    'Este quebra-cabeça e seu progresso serão removidos permanentemente de Meus jogos. Isto não pode ser desfeito.',
  'account.confirm.deleteGame.pending': 'Excluindo jogo salvo…',
  'account.confirm.deleteGame.action': 'Excluir jogo',
  'account.confirm.deleteAll.eyebrow': 'Excluir todos os jogos salvos?',
  'account.confirm.deleteAll.title': 'Excluir todos os jogos',
  'account.confirm.deleteAll.action': 'Excluir todos os jogos',
  'account.confirm.deleteAll.description':
    'Todos os quebra-cabeças e todo o progresso em Meus jogos serão removidos permanentemente. Isto não pode ser desfeito.',
  'account.confirm.revoke.eyebrow': 'Segurança da conta',
  'account.confirm.deleteAll.pending': 'Excluindo todos os jogos…',
  'account.confirm.revoke.title': 'Sair de todos os dispositivos',
  'account.confirm.revoke.description':
    'Isso encerra sua sessão em todos os dispositivos, inclusive neste. Sua conta e seus jogos salvos serão mantidos.',
  'account.confirm.deleteAccount.eyebrow': 'Ação permanente',
  'account.confirm.revoke.pending': 'Saindo de todos os dispositivos…',
  'account.confirm.revoke.action': 'Sair de todos os dispositivos',
  'account.confirm.deleteAccount.action': 'Excluir conta',
  'account.confirm.deleteAccount.pending': 'Excluindo conta…',
  'account.confirm.deleteAccount.title': 'Exclua sua conta',
  'account.label': 'Conta',
  'account.confirm.deleteAccount.description':
    'Sua identidade, todas as sessões de login e todos os jogos salvos serão removidos permanentemente. O catálogo de quebra-cabeças compartilhado não é afetado.',
  'account.continue.detail':
    'Faça login para salvar o jogo ativo deste navegador automaticamente.',
  'account.confirm.typeEmail': 'Digite {email} para confirmar',
  'account.signIn': 'Faça login com o Google',
  'account.signIn.short': 'Entrar',
  'account.continue.title': 'Continuar em outros dispositivos',
  'game.title': '{difficulty} quebra-cabeça',
  'game.statusActions': 'Status e ações do jogo',
  'game.mistakes': 'Erros {count}',
  'game.elapsed': 'Tempo decorrido',
  'game.resume': 'Retomar',
  'game.pause': 'Pausa',
  'status.resumed': 'O quebra-cabeça foi retomado.',
  'status.paused': 'Quebra-cabeça pausado.',
  'status.restarted':
    'Quebra-cabeça reiniciado. Nova tentativa, mesmo quebra-cabeça.',
  'status.hintClosed':
    'Dica encerrada. Seu quebra-cabeça permanece inalterado.',
  'status.strategyApplied':
    'Estratégia aplicada. Você pode desfazer isso em uma única etapa.',
  'status.correctionApplied':
    'Correção aplicada. Você pode desfazer isso em uma única etapa.',
  'status.hintAlreadyApplied': 'Essa dica já está refletida no quadro.',
  'status.hintRefreshed': 'O tabuleiro mudou, então a dica foi atualizada.',
  'status.accountSaved': 'Jogo salvo em sua conta.',
  'status.waitBeforeLeaving':
    'Aguarde os movimentos pendentes antes de sair deste quebra-cabeça.',
  'status.selectEditableCell':
    'Selecione uma célula editável antes de inserir um número.',
  'status.restoring': 'Restaurando seu quebra-cabeça…',
  'status.savingAccount': 'Salvando seu jogo local em sua conta…',
  'status.puzzleReady': '{difficulty} quebra-cabeça pronto.',
  'status.restored': 'Seu quebra-cabeça local foi restaurado.',
  'status.solved': 'Resolvido! Belo trabalho.',
  'status.puzzleRestored': '{difficulty} quebra-cabeça restaurado.',
  'status.waitBeforeStarting':
    'Aguarde os movimentos pendentes antes de iniciar outro quebra-cabeça.',
  'status.moveSaved': 'Movimento salvo.',
  'status.waitBeforeHint':
    'Aguarde os movimentos pendentes antes de abrir uma dica.',
  'status.hintReady': 'Dica pronta. Comece com a etapa 1.',
  'status.openingSaved': 'Abrindo seu jogo salvo…',
  'status.savedDeleted': 'Jogo salvo excluído.',
  'status.allDeleted': 'Todos os jogos salvos foram excluídos.',
  'status.signedOut': 'Desconectado. Os jogos da sua conta permanecem salvos.',
  'status.revoked':
    'Você saiu de todos os dispositivos. Entre novamente para continuar.',
  'retry.saving': 'Tente salvar novamente',
  'status.accountDeleted': 'Conta e jogos salvos excluídos.',
  'retry.connection': 'Verifique a conexão',
  'retry.restoring': 'Tente restaurar novamente',
  'retry.starting': 'Tente começar de novo',
  'retry.move': 'Tentar mover novamente',
  'retry.hint': 'Tente a dica novamente',
  'retry.time': 'Tente novamente economizando tempo',
  'retry.progress': 'Tente salvar novamente o progresso',
  'retry.opening': 'Tente abrir novamente',
  'retry.leaving': 'Tente sair novamente',
  'retry.deleting': 'Tente excluir novamente',
  'retry.revoke': 'Tentar sair de todos os dispositivos novamente',
  'retry.signOut': 'Tente sair novamente',
  'error.accountSave':
    'Seu jogo local é seguro, mas não foi possível salvá-lo em sua conta.',
  'retry.deleteAccount': 'Tente excluir a conta novamente',
  'error.connection':
    'O serviço de jogo não pôde ser alcançado. Verifique sua conexão e tente novamente.',
  'error.restoring': 'Não foi possível restaurar seu quebra-cabeça.',
  'error.http':
    'O serviço de jogo retornou o erro {status}. Por favor, tente novamente.',
  'error.starting': 'O jogo não pôde ser iniciado.',
  'error.signInAgain': 'Faça login novamente para salvar movimentos.',
  'error.unavailable':
    'O serviço de jogo está temporariamente indisponível. Seu tabuleiro está seguro; tente novamente.',
  'error.move': 'A mudança não pôde ser salva.',
  'error.localUnavailable': 'O jogo local não está disponível.',
  'error.currentUnavailable': 'O jogo atual não está disponível.',
  'error.hintChanged': 'O tabuleiro mudou enquanto a dica era preparada.',
  'error.hint': 'A dica não pôde ser preparada.',
  'error.time': 'Não foi possível salvar o último tempo do jogo.',
  'error.timer': 'O último estado do temporizador não pôde ser salvo.',
  'error.opening': 'Esse jogo salvo não pôde ser aberto.',
  'error.deleteGame': 'O jogo salvo não pôde ser excluído.',
  'error.leaving': 'O quebra-cabeça local não pôde ser resolvido.',
  'error.signOut': 'Não foi possível sair.',
  'error.revoke': 'As sessões não puderam ser revogadas.',
  'error.deleteAll': 'Os jogos salvos não puderam ser excluídos.',
  'error.deleteAccount': 'A conta não pôde ser excluída.',
  'error.invalid-request': 'A solicitação é inválida.',
  'error.invalid-json': 'A solicitação contém JSON inválido.',
  'error.unsupported-media-type': 'A solicitação Content-Type não é suportada.',
  'error.unauthorized': 'É necessária autorização.',
  'error.payload-too-large': 'A solicitação é muito grande.',
  'error.session-not-found': 'A sessão do jogo não foi encontrada.',
  'error.revision-conflict':
    'O tabuleiro mudou antes que esta jogada fosse aplicada.',
  'error.forbidden-origin': 'Esta origem de solicitação não é permitida.',
  'error.invalid-session': 'A sessão do jogo é inválida.',
  'error.invalid-cell': 'Esta célula é inválida.',
  'error.invalid-action': 'Esta ação do jogo é inválida.',
  'error.immutable-cell': 'Uma determinada célula não pode ser alterada.',
  'error.note-not-allowed':
    'Os candidatos não podem ser alterados nesta célula.',
  'error.no-undo': 'Não há nenhuma ação para desfazer.',
  'error.no-redo': 'Não há nenhuma ação para refazer.',
  'error.no-hint': 'Nenhuma dica está disponível.',
  'error.stale-hint': 'O tabuleiro mudou depois que esta dica foi preparada.',
  'error.account-unavailable': 'Os recursos da conta não estão disponíveis.',
  'error.persistence-failed': 'O jogo não pôde ser salvo.',
  'error.internal-error': 'A solicitação não pôde ser concluída.',
  'error.account-unauthorized': 'É necessária uma sessão de inscrição válida.',
  'error.csrf-failed':
    'Não foi possível verificar este login. Entre novamente.',
  'error.account-game-not-found': 'O jogo salvo não foi encontrado.',
  'error.guest-revision-conflict':
    'O jogo local mudou antes desta ação ser aplicada.',
  'error.malformedDescriptor': 'A explicação não pôde ser exibida.',
  'error.guest-claim-conflict': 'Este jogo local já foi salvo em uma conta.',
  'account.close': 'Fechar painel da conta',
  'account.games.deleteAll': 'Excluir tudo',
  'account.games.title': 'Meus jogos',
  'account.games.puzzle': '{difficulty} quebra-cabeça',
  'account.games.finished': 'Finalizado',
  'account.games.inProgress': 'Em andamento',
  'account.games.empty': 'Nenhum jogo salvo ainda.',
  'account.games.saved': 'Jogo salvo',
  'account.games.deletingAll': 'Excluindo tudo…',
  'account.games.open': 'Abrir',
  'account.games.opening': 'Abertura…',
  'account.games.delete': 'Excluir',
  'account.games.deleting': 'Excluindo…',
  'account.signOut': 'sair',
  'account.settings': 'Configurações de Conta',
  'account.revoke': 'Sair de todos os dispositivos',
  'account.delete': 'Excluir conta',
  'account.signingOut': 'Saindo…',
  'board.cell.given': 'dado {value}',
  'board.label': 'Tabuleiro de jogo Sudoku',
  'board.cell.value': '{value}',
  'board.cell.empty': 'vazio',
  'board.cell.candidates': 'vazio, candidatos {candidates}',
  'board.hint.focus': 'dica de foco',
  'board.hint.premise': 'evidência de dica',
  'board.hint.problem': 'precisa de correção',
  'board.hint.conclusion': 'dica conclusão',
  'board.hint.eliminated': 'candidato eliminado',
  'board.hint.group': 'grupo {group}',
  'board.hint.extra': 'candidato impossível',
  'board.hint.chain': 'posição da cadeia {position}',
  'hint.label': 'Dica',
  'hint.close': 'Fechar',
  'board.paused.title': 'Quebra-cabeça pausado',
  'board.paused.detail': 'Seu tempo está parado.',
  'hint.strategy.grade': 'Estratégia {grade}',
  'hint.applying': 'Aplicando dica…',
  'hint.step': 'Etapa {current} de {total}',
  'hint.legend.label': 'Legenda da dica visual',
  'hint.refreshing': 'Dica refrescante…',
  'hint.legend.strong': 'Sólido: deve conter',
  'hint.legend.weak': 'Tracejado: não é possível ambos',
  'hint.legend.implication': 'Flecha: implicação',
  'hint.legend.groups': 'A/B: grupos alternados',
  'hint.legend.order': 'Números: ordem da cadeia',
  'hint.back': 'Voltar',
  'hint.next': 'Próximo',
  'controls.label': 'Controles do jogo',
  'controls.digit.note': 'Adicionar ou remover nota {digit}',
  'controls.digit.enter': 'Digite {digit}',
  'hint.apply': 'Aplicar dica',
  'controls.complete.eyebrow': 'Quebra-cabeça completo',
  'controls.hint.preparing': 'Preparando dica…',
  'controls.hint.preparingDetail':
    'Manter o quebra-cabeça visível enquanto a próxima etapa é preparada.',
  'controls.complete.another': 'Jogue outro {difficulty}',
  'controls.complete.title': 'Resolvido em {time}',
  'controls.complete.replay': 'Repita este quebra-cabeça',
  'controls.complete.detail':
    'Continue no ritmo com outro tabuleiro {difficulty} ou escolha um nível diferente.',
  'controls.complete.choose': 'Escolha outro nível',
  'controls.pad': 'Teclado numérico',
  'controls.notes.on': 'Notas sobre',
  'controls.modes': 'Modos de entrada',
  'controls.pad.notes': 'Teclado numérico, modo de notas',
  'controls.notes.off': 'Notas desativadas',
  'controls.candidates.on': 'Candidatos em',
  'controls.erase': 'Apagar',
  'controls.undo': 'Desfazer',
  'controls.redo': 'Refazer',
  'controls.undoing': 'Desfazendo…',
  'controls.candidates.off': 'Candidatos desligados',
  'controls.actions': 'Ações de quebra-cabeça',
  'controls.shortcuts': 'Atalhos de teclado',
  'controls.shortcuts.move': 'Mover',
  'controls.shortcuts.arrows': 'Teclas de seta',
  'controls.hint.reveal': 'Revele uma dica',
  'controls.redoing': 'Refazendo…',
  'controls.shortcuts.or': 'ou',
  'controls.shortcuts.notes': 'Notas/candidatos',
  'controls.shortcuts.enter': 'Digite um número',
  'controls.shortcuts.pause': 'Pausar ou retomar',
  'controls.shortcuts.hint': 'Abrir, avançar ou aplicar uma dica',
  'controls.shortcuts.hintOther': 'Outros controles de dicas',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.visible': 'este candidato destacado',
  'hint.target.candidate.accessible':
    'candidato {value} na linha {row}, coluna {column}',
  'hint.target.cell.visible': 'esta célula destacada',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.unit.visible': 'isso destacado {kind}',
  'hint.target.cell.accessible': 'linha {row}, coluna {column}',
  'hint.target.row': 'linha',
  'hint.target.column': 'coluna',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.box': 'bloco',
  'chrome.appearance': 'Aparência',
  'chrome.theme.systemTitle': 'Tema do sistema ({theme})',
  'chrome.home': 'Página inicial do sudoku',
  'chrome.theme.use': 'Usar tema {theme}',
  'chrome.theme.system': 'Sistema',
  'chrome.theme.systemName': 'sistema',
  'chrome.theme.light': 'luz',
  'chrome.theme.dark': 'escuro',
  'chrome.connection.connecting': 'Conectando',
  'chrome.connection.unavailable': 'Serviço não disponível',
  'chrome.footer.tagline': 'Jogo atencioso, sem distrações.',
  'chrome.footer.privacy': 'Privacidade',
  'chrome.theme.title': '{theme} tema',
  'chrome.footer.terms': 'Termos',
  'game.mistakes.label': '{count, plural, one {# erro} other {# erros}}',
  'chrome.footer.input': 'Teclado e toque prontos',
  'board.cell':
    'Linha {row}, coluna {column}, {content}{pending, select, true {, verificando} other {}}{invalid, select, true {, inválido} other {}}{hint, select, none {} other {, {hint}}}',
};
