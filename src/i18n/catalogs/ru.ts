import type { MessageCatalog } from './types';

export const ru: MessageCatalog = {
  'common.language.en': 'English',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'Português (Brasil)',
  'common.language.pt-BR.short': 'Português',
  'common.language.es': 'Español',
  'common.language.ja': '日本語',
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
  'hint.narration.period': '.',
  'hint.narration.separator': ', ',
  'game.mistakes.label':
    '{count, plural, one {# ошибка} few {# ошибки} many {# ошибок} other {# ошибки}}',
  'board.cell':
    'Строка {row}, столбец {column}, {content}{pending, select, true {, проверка} other {}}{invalid, select, true {, недопустимо} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Язык',
  'common.language.auto': 'Авто',
  'accessibility.language.changed': 'Язык изменен на {language}.',
  'common.difficulty.easy': 'Легко',
  'common.difficulty.medium': 'Средний',
  'common.difficulty.hard': 'Жесткий',
  'common.difficulty.expert': 'Эксперт',
  'common.difficulty.evil': 'Зло',
  'difficulty.easy.name': 'Легко',
  'difficulty.medium.name': 'Средний',
  'difficulty.hard.name': 'Жесткий',
  'difficulty.expert.name': 'Эксперт',
  'difficulty.evil.name': 'Зло',
  'hint.value-correction.title': 'Исправьте это значение',
  'hint.candidate-correction.title': 'Исправьте эту ячейку-кандидата',
  'hint.value-correction.summary':
    'Значение {cell} противоречит задаче. Прежде чем продолжить, очистите его.',
  'hint.candidate-correction.summary':
    'Прежде чем продолжить, заново определите кандидатов для {cell} по уже заполненным цифрам в строке, столбце и блоке.',
  'hint.strategy.summary':
    'Пройдите эти {steps} шага, чтобы понять и применить {strategy}.',
  'hint.value-correction.observe':
    'Проверьте {cell}. Значение противоречит текущему полю.',
  'hint.value-correction.conclude':
    'Очистите значение {cell}, чтобы затем можно было проверить сетку кандидатов.',
  'hint.candidate-correction.observe':
    'Проверьте {cell}. Кандидаты не соответствуют текущему полю.',
  'hint.candidate-correction.compare':
    'Заново определите кандидатов для этой ячейки по уже заполненным цифрам в строке, столбце и блоке.',
  'hint.candidate-correction.conclude':
    'Оставьте в {cell} все цифры, допустимые в её строке, столбце и блоке.',
  'hint.strategy.observe':
    'Проверьте выделенные ячейки, кандидаты, строки, столбцы и блоки.',
  'hint.strategy.compare':
    'Сопоставьте выделенные ограничения, чтобы найти однозначный результат.',
  'hint.strategy.conclude':
    'Выполните показанное действие. Название приёма — {strategy}.',
  'hint.coloring.pair':
    'В {unit} для цифры {digit} остаются только две позиции — {cells}. Ровно в одной из них должна стоять эта цифра, поэтому обозначьте позиции противоположными цветами A и B.',
  'hint.coloring.chain':
    'Продолжайте цепочку по сильным связям. Каждая такая связь соединяет единственные две возможные позиции для {digit} в строке, столбце или блоке, поэтому цвета должны чередоваться: A в {group_a}, B в {group_b}.',
  'hint.coloring.alternatives':
    'Либо цифра {digit} стоит во всех ячейках цвета A и ни в одной ячейке цвета B, либо цифра {digit} стоит во всех ячейках цвета B и ни в одной ячейке цвета A. Определять верный вариант не нужно.',
  'hint.coloring.elimination':
    'Ячейка {cell} видит позицию цвета A в {group_a_cell} и позицию цвета B в {group_b_cell}. При любом допустимом распределении в одной из этих позиций стоит {digit}, поэтому эта цифра не может стоять в целевой ячейке.',
  'hint.coloring.apply':
    'Удалите {candidates}. Каждая целевая ячейка видит по одной позиции каждого цвета для цифры {colored_digit}; при любом допустимом распределении одна из них содержит эту цифру, поэтому кандидат в целевой ячейке исключается. Название приёма — {strategy}.',
  'hint.coloring.place':
    'Связанные кандидаты на {colored_digit} обеспечивают результат. Поместите {digit} в {cell}. Это шаблон {strategy}.',
  'hint.x-cycle.opening':
    'В {unit} цифра {digit} может стоять только в ячейках {cells}, поэтому одна из них обязательно содержит {digit}.',
  'hint.x-cycle.assume':
    'Предположим, что в {start} нет {digit}. Тогда в {forced} должна стоять цифра {digit}, а в {blocked} не может стоять {digit}. После этого в {unit} для цифры {digit} остаётся только ячейка {result}.',
  'hint.x-cycle.follow':
    'Поскольку в {true_cell} стоит {digit}, кандидат {digit} исключается из {blocked}. Поэтому в {unit} для цифры {digit} остаётся только ячейка {result}.',
  'hint.x-cycle.close':
    'Поскольку в {true_cell} стоит {digit}, кандидат {digit} исключается из {blocked}. В {unit} единственной оставшейся позицией для {digit} становится {result}.',
  'hint.x-cycle.place':
    'Предположение, что в {assumption} нет {digit}, приводит к выводу, что в {cell} должна стоять {digit}. Значит, предположение неверно: поставьте {digit} в {cell}. Название приёма — {strategy}.',
  'hint.xy-chain.start':
    'В {cell} остались только кандидаты {first_digit} и {second_digit}. Либо в этой ячейке стоит {endpoint_digit}, либо, если {endpoint_digit} исключён, в ней должна стоять цифра {other_digit}.',
  'hint.xy-chain.assume':
    'Предположим, что в {start} не стоит {endpoint_digit}. Тогда там должна стоять цифра {start_value}. Ячейки {start} и {middle} находятся в одной группе — {first_unit}, поэтому в {middle} не может стоять {start_value} и должна стоять цифра {middle_value}. В {second_unit} это исключает кандидата {middle_value} из ячейки {result}, поэтому там должна стоять цифра {result_value}.',
  'hint.xy-chain.follow':
    'В {start} стоит цифра {start_value}. Эта ячейка и {middle} находятся в одной группе — {first_unit}, поэтому в {middle} не может стоять {start_value} и должна стоять цифра {middle_value}. В {second_unit} это исключает кандидата {middle_value} из {result}, поэтому в {result} должна стоять цифра {result_value}.',
  'hint.xy-chain.reach':
    'Поскольку в {start} стоит {start_value}, из {endpoint} исключается {shared_digit}. Единственным другим кандидатом остаётся {endpoint_digit}, поэтому в конечной ячейке должна стоять цифра {endpoint_digit}.',
  'hint.xy-chain.place':
    'Если в {first_endpoint} стоит {endpoint_digit}, первая конечная ячейка содержит {endpoint_digit}. Если это не так, цепочка вынуждает поставить {endpoint_digit} во вторую конечную ячейку — {second_endpoint}. Значит, хотя бы в одной конечной ячейке стоит {endpoint_digit}. Ячейка {cell} видит обе конечные ячейки, поэтому кандидат {endpoint_digit} в ней невозможен. Поставьте {digit} в {cell}. Название приёма — {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Начните с {cell}. В строке, столбце и блоке этой клетки уже стоят {excluded_digits}.',
  'hint.naked-single.only':
    'Значит, в {cell} можно поставить только цифру {digit}.',
  'hint.naked-single.apply':
    'Поставьте {digit} в {cell}. Ячейка, в которой остался единственный кандидат, — это {strategy}.',
  'hint.hidden-single.inspect':
    'В {unit} проверьте, где может стоять цифра {digit}.',
  'hint.hidden-single.blockers':
    'Цифры {digit}, уже поставленные в ячейках {blockers}, исключают {digit} из всех остальных пустых ячеек в {unit}.',
  'hint.hidden-single.only':
    'Для цифры {digit} остаётся только одна возможная ячейка — {cell}.',
  'hint.hidden-single.apply':
    'Поставьте {digit} в {cell}. Если в строке, столбце или блоке для цифры остаётся только одна возможная ячейка, это {strategy}.',
  'hint.naked-pair.inspect':
    'Начните с {unit}: у {cell} только два кандидата — {first_digit} и {second_digit}.',
  'hint.naked-pair.match':
    'В {cell} та же пара кандидатов: {first_digit} и {second_digit}.',
  'hint.naked-pair.reserve':
    'В этих двух ячейках должны стоять {digits} в любом порядке. Поэтому кандидат {digit} исключается из всех остальных ячеек в {unit}.',
  'hint.naked-pair.apply':
    'Удалите {candidates}; на этом шаге цифру ставить не нужно. Этот приём — {strategy}.',
  'hint.naked-triple.first':
    'Начните с {unit}: у {cell} только два кандидата — {first_digit} и {second_digit}.',
  'hint.naked-triple.second':
    'Добавьте {cell}: у этой ячейки тоже только два кандидата — {first_digit} и {second_digit}.',
  'hint.naked-triple.third':
    'Добавьте {cell}: у неё только два кандидата — {first_digit} и {second_digit}. Итак, в этих трёх ячейках возможны только {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Цифры {reserved_digits} должны занять эти три ячейки в любом порядке. Поэтому из {cell} можно удалить {removed_digits}; останется только {remaining_digit}.',
  'hint.naked-triple.apply':
    'Поставьте {digit} в {cell}. Если набор кандидатов в трёх ячейках ограничен одними и теми же тремя цифрами, это {strategy}.',
  'hint.naked-quad.cell':
    'В {unit} единственные кандидаты для ячейки {cell} — {digits}.',
  'hint.subset-reservation.observe':
    'В {unit} клетки {cells} содержат только {digits}.',
  'hint.subset-reservation.explain':
    'В {unit} выделенные ячейки должны содержать цифры {digits}, поэтому эти цифры можно удалить из всех остальных ячеек этой группы.',
  'hint.subset-reservation.apply':
    'Удалите {candidates}. Этот приём — {strategy}.',
  'hint.subset-reservation.place':
    'Поставьте {digit} в {cell}. Название приёма — {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'В {unit} цифры {digits} могут находиться только в {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Поскольку {digits} ограничены этими клетками в {unit}, в них не может быть других кандидатов.',
  'hint.hidden-subset-confinement.apply':
    'Удалите {candidates} из этих клеток. Этот приём — {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Поставьте {digit} в {cell} после удаления остальных кандидатов. Этот приём — {strategy}.',
  'hint.hidden-pair.first':
    'В {unit} кандидат {digit} возможен только в ячейках {cells}.',
  'hint.hidden-pair.second':
    'Кандидат {digit} тоже возможен только в этих двух ячейках. Значит, цифры {digits} должны в любом порядке занять {cells}.',
  'hint.hidden-pair.consequence':
    'Ячейки этой пары отведены под цифры {digits}, поэтому остальные кандидаты в них нужно удалить: {candidates}.',
  'hint.hidden-pair.apply':
    'Удалите {candidates}. Название приёма — {strategy}.',
  'hint.hidden-triple.first':
    'В {unit} кандидат {digit} возможен только в ячейках {cells}.',
  'hint.hidden-triple.second':
    'В {unit} цифры {digits} могут стоять только в ячейках {cells}.',
  'hint.hidden-triple.third':
    'В {unit} цифры {digits} могут стоять только в ячейках {cells}.',
  'hint.hidden-triple.consequence':
    'В {unit} цифры {digits} могут стоять только в этих ячейках, поэтому все остальные кандидаты из них нужно удалить.',
  'hint.hidden-triple.apply':
    'Удалите {candidates} из этих ячеек. Название приёма — {strategy}.',
  'hint.hidden-quad.first':
    'В {unit} кандидат {digit} возможен только в ячейках {cells}.',
  'hint.hidden-quad.second':
    'В {unit} цифры {digits} могут стоять только в ячейках {cells}.',
  'hint.hidden-quad.third':
    'В {unit} цифры {digits} могут стоять только в ячейках {cells}.',
  'hint.hidden-quad.fourth':
    'В {unit} цифры {digits} могут стоять только в ячейках {cells}.',
  'hint.hidden-quad.consequence':
    'В {unit} цифры {digits} могут стоять только в этих ячейках, поэтому все остальные кандидаты из них нужно удалить.',
  'hint.hidden-quad.apply':
    'Удалите {candidates} из этих ячеек. Название приёма — {strategy}.',
  'hint.pointing-pair.first':
    'В {source_unit} начните с кандидата {digit} в ячейке {cell}. Найдите все остальные ячейки этого блока, где может стоять {digit}.',
  'hint.pointing-pair.second':
    'В {source_unit} для цифры {digit} остаётся лишь одна другая возможная ячейка — {cell}. Обе возможные ячейки находятся в {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'В {source_unit} цифра {digit} может стоять только в одной из двух отмеченных ячеек, и обе они находятся в {intersection_unit}. Поэтому исключите {candidate} из остальных ячеек в {intersection_unit}.',
  'hint.pointing-pair.apply':
    'В {cell} остался только кандидат {digit}. Поставьте туда {digit}. Название приёма — {strategy}.',
  'hint.intersection-confinement.observe':
    'В {source_unit} кандидат {digit} ограничен {intersection_unit} в {cells}.',
  'hint.intersection-confinement.explain':
    'Поскольку каждый {digit} в {source_unit} лежит в {intersection_unit}, ячейки вне источника, но внутри пересечения, не могут его содержать.',
  'hint.intersection-confinement.apply':
    'Удалить кандидата {digit} из {cells}. Это шаблон {strategy}.',
  'hint.intersection-confinement.place':
    'Поместите {digit} в {cell} после применения пересечения. Этот шаблон {strategy}.',
  'hint.fish-confinement.observe':
    'В {base_units} кандидат {digit} возможен только в {cover_units}.',
  'hint.fish-confinement.explain':
    'Кандидат {digit} ограничен из {base_units} в {cover_units}, поэтому эти покрывающие области должны получить его через выделенные базовые позиции.',
  'hint.swordfish.consequence':
    'В каждой из {base_units} цифра {digit} должна занять одну из позиций в {cover_units}. Три обязательных размещения вместе занимают все три покрывающие строки или столбца, поэтому остальные кандидаты {digit} в этих линиях можно исключить.',
  'hint.jellyfish.consequence':
    'В каждой из {base_units} цифра {digit} должна занять одну из позиций в {cover_units}. Четыре обязательных размещения вместе занимают все четыре покрывающие строки или столбца, поэтому остальные кандидаты {digit} в этих линиях можно исключить.',
  'hint.fish-confinement.apply':
    'Удалите кандидата {digit} из ячеек {cells}. Этот приём — {strategy}.',
  'hint.x-wing.first':
    'В {base_unit} кандидат {digit} возможен только в {cover_units}.',
  'hint.x-wing.second':
    'В {base_unit} кандидат {digit} также возможен только в {cover_units}. Значит, в обеих базовых строках или столбцах его позиции ограничены одними и теми же двумя пересекающими линиями.',
  'hint.x-wing.consequence':
    'В каждой из {base_units} цифра {digit} должна занять одну из позиций в {cover_units}. Два обязательных размещения цифры {digit} вместе занимают обе покрывающие строки или оба покрывающих столбца, поэтому остальные кандидаты {digit} в этих линиях можно исключить.',
  'hint.x-wing.apply':
    'Удалите кандидата {digit} из ячеек {cells}. Название приёма — {strategy}.',
  'hint.pivot-wing.observe':
    'В {pivot} кандидаты {pivot_digits} соединяют боковые ячейки в {wing_cells}.',
  'hint.pivot-wing.explain':
    'Каждое крыло в {wing_cells} имеет одного общего кандидата с центром в {pivot}, и оба крыла содержат {shared_digit}. Независимо от того, какой из кандидатов является верным, одно крыло должно содержать {shared_digit}.',
  'hint.xy-wing.pivot':
    'В {pivot} остались только кандидаты {digits}, поэтому одна из этих цифр обязательно должна стоять в этой ячейке.',
  'hint.xy-wing.case':
    'Если в {pivot} стоит {pivot_digit}, то в {wing} не может стоять {pivot_digit}. Там остаётся только {shared_digit}, поэтому в {wing} должна стоять цифра {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Какой бы кандидат ни оказался в {pivot}, хотя бы в одной из ячеек-крыльев {wing_cells} будет стоять {shared_digit}. Определять, в какой именно, не нужно.',
  'hint.xy-wing.apply':
    '{cells} видят оба крыла {wing_cells}. Так как хотя бы одно содержит {shared_digit}, удалите {shared_digit} из этих ячеек. Этот приём называется {strategy}.',
  'hint.xy-wing.place':
    'Ячейка {cell} видит оба крыла — {wing_cells}. Поскольку хотя бы в одном из них стоит {shared_digit}, исключите кандидата {shared_digit} из {cell}. В целевой ячейке останется только {digit}; поставьте эту цифру. Название приёма — {strategy}.',
  'hint.xyz-wing.pivot':
    'В {pivot} остались только кандидаты {digits}, поэтому одна из этих цифр обязательно должна стоять в этой ячейке.',
  'hint.xyz-wing.case':
    'Если в {pivot} стоит {pivot_digit}, то {wing}, находящаяся с ней в одной группе — {unit}, не может содержать {pivot_digit}. Единственный другой кандидат в {wing} — {shared_digit}, поэтому там должна стоять цифра {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Если в {pivot} стоит {shared_digit}, опорная ячейка уже содержит {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Какой бы кандидат ни оказался в {pivot}, хотя бы в одной из ячеек {pattern_cells} должна стоять цифра {shared_digit}. Определять, в какой именно, не нужно.',
  'hint.xyz-wing.apply':
    'Ячейка {target} находится с {first_pattern_cell} в одной группе — {first_unit}, с {second_pattern_cell} — в группе {second_unit}, а с {third_pattern_cell} — в группе {third_unit}. Хотя бы в одной из этих трёх ячеек стоит {shared_digit}, поэтому удалите кандидата {shared_digit} из {target}. Название приёма — {strategy}.',
  'hint.strong-link-wing.observe':
    'В каждой из ячеек {wing_cells} возможны только цифры {digits}.',
  'hint.strong-link-wing.bridge':
    'В {unit} кандидат {link_digit} возможен только в ячейках {link_cells}, поэтому хотя бы в одной из них должна стоять цифра {link_digit}.',
  'hint.strong-link-wing.force':
    'Если {link_digit} стоит в {first_link_cell}, кандидат {link_digit} исключается из {first_wing_cell}, и там вынужденно стоит {forced_digit}. Если {link_digit} стоит в {second_link_cell}, то в {second_wing_cell} вынужденно стоит {forced_digit}. Следовательно, хотя бы в одной из этих двух ячеек стоит {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Хотя бы одна из ячеек {wing_cells} равна {digit}. Удалите кандидата {digit} из {cells}, потому что эти ячейки видят обе. Этот приём называется {strategy}.',
  'hint.strong-link-wing.place':
    'Хотя бы в одной из ячеек {wing_cells} стоит {removed_digit}. Ячейка {cell} видит обе, поэтому удалите из неё кандидата {removed_digit} и поставьте туда {digit}. Название приёма — {strategy}.',
  'hint.relational-wing.apply':
    'Удалить кандидата {digit} из {cells}. Это шаблон {strategy}.',
  'hint.relational-wing.place':
    'Удалите кандидата {removed_digit} из {cell}, поэтому поместите туда {digit}. Это шаблон {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Кроме {cell}, в каждой из остальных {count} незаполненных ячеек ровно два кандидата.',
  'hint.bug-plus-one.trivalue':
    'В {cell} три кандидата: {digits}. Это на одного кандидата больше, чем в любой другой незаполненной ячейке.',
  'hint.bug-plus-one.unit-count':
    'В {unit} для кандидата {digit} остаются три позиции, а для {other_digits} — по две.',
  'hint.bug-plus-one.explain':
    'В {units} у кандидата {digit} на одну возможную позицию больше, чем у {other_digits}. Если исключить {digit} из {cell}, во всех незаполненных ячейках останется ровно по два кандидата, и решение перестанет быть единственным. Значит, в {cell} должна стоять цифра {digit}.',
  'hint.bug-plus-one.place':
    'Поставьте {digit} в {cell}. Особый случай, когда у одной незаполненной ячейки три кандидата, а у всех остальных — по два, — это {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Незаполненные ячейки {cells} расположены по углам прямоугольника.',
  'hint.unique-rectangle.pair-corners':
    'В ячейках {cells} возможны только кандидаты {digits}.',
  'hint.unique-rectangle.third-corner':
    'В {cell} также возможны только {digits}. Теперь в трёх угловых ячейках одна и та же пара кандидатов.',
  'hint.unique-rectangle.expanded-corner':
    'В {cell} возможны {digits}. Только в этой угловой ячейке есть дополнительный кандидат {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Если в {cell} поставить любую из цифр пары {digits}, значения в четырёх углах можно будет поменять местами, не нарушив ни строку, ни столбец, ни блок. Тогда у головоломки будет два решения, поэтому удалите {digits} и оставьте {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'В {cell} остался только кандидат {digit}. Поставьте эту цифру. Этот приём — {strategy}.',
  'hint.unique-rectangle.observe':
    'Ячейки {cells} образуют прямоугольник и все содержат пару {digits}.',
  'hint.unique-rectangle.type1':
    'Три угла содержат ровно {digits}. Если бы {cell} также использовал любую цифру, прямоугольник допускал бы два взаимозаменяемых решения.',
  'hint.unique-rectangle.type2-first-expanded':
    'В {cell} возможны кандидаты {pair} и {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'В {cell} также возможны {pair} и {extra_digit}. Значит, в обеих расширенных угловых ячейках есть один и тот же дополнительный кандидат {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Чтобы избежать двух взаимозаменяемых решений, хотя бы в одной из ячеек {cells} должна стоять цифра {extra_digit}. Ячейка {target} видит обе, поэтому {extra_digit} в ней исключается.',
  'hint.unique-rectangle.type2-place':
    'В {cell} остался только кандидат {digit}. Поставьте эту цифру. Название приёма — {strategy}.',
  'hint.unique-rectangle.type2':
    'Два расширенных угла {cells} имеют общего дополнительного кандидата {digit}, поэтому любая ячейка, которая видит оба угла, не может содержать {digit}.',
  'hint.unique-rectangle.type3':
    'Дополнительные цифры {digits} в прямоугольнике объединяются с {cells} как зарезервированное подмножество в {unit}, поэтому эти цифры можно удалить в другом месте этой единицы.',
  'hint.unique-rectangle.type3-first-expanded':
    'В {cell} также возможны кандидаты {pair}, а кроме них — {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'В {cell} также возможны кандидаты {pair}, а кроме них — {extra_digit}. Хотя бы в одной из этих двух угловых ячеек должна стоять дополнительная цифра, иначе две цифры из пары {pair} можно переставить между четырьмя углами и получить второе решение.',
  'hint.unique-rectangle.type3-partner':
    'В {cell} возможны только кандидаты {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'В одной из ячеек {corners} должна стоять одна из цифр {digits}, а в {partner} — другая. Эти цифры образуют пару в {unit}, поэтому кандидат {removed_digit} нужно удалить из {target}.',
  'hint.unique-rectangle.type3-place':
    'В {cell} остался только кандидат {digit}. Поставьте эту цифру. Название приёма — {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'В {cell} также возможны кандидаты {pair}, а кроме них — {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'В {cell} также возможны кандидаты {pair}, а кроме них — {extra_digit}. Теперь в обеих расширенных угловых ячейках присутствует исходная пара.',
  'hint.unique-rectangle.type4':
    'В {unit} ячейки {cells} образуют сопряжённую пару для кандидата {digit}. Если поставить {removed_digit} в любую из двух расширенных угловых ячеек, появятся взаимозаменяемые решения, поэтому этого кандидата нужно удалить из обеих ячеек.',
  'hint.unique-rectangle.type4-apply':
    'Удалите кандидата {digit} из ячеек {cells}. Название этого приёма, основанного на единственности решения, — {strategy}.',
  'hint.unique-rectangle.apply':
    'Удалите {candidates}. Это отношение уникальности {strategy}.',
  'hint.unique-rectangle.place':
    'Поместите {digit} в {cell} после применения отношения уникальности. Этот шаблон {strategy}.',
  'hint.implication-chain.observe':
    'Начните с {cell}, где возможны только кандидаты {digits}.',
  'hint.implication-chain.explain':
    '{from} и {to} имеют общего кандидата и видят друг друга, поэтому этот кандидат не может быть истинным в обеих клетках; цепочка продолжается.',
  'hint.implication-chain.apply':
    'Одна из конечных точек должна содержать {digit}, поэтому удалите кандидат {digit} из {cells}. Этот приём — {strategy}.',
  'hint.narration.apply': 'Применить вычет: ',
  'hint.narration.look-at': 'Посмотрите на ',
  'hint.narration.value-conflict': '. Введенное значение противоречит задаче.',
  'hint.narration.clear-value': 'Очистите значение в ',
  'hint.narration.clear-value-tail':
    ' чтобы затем можно было проверить сетку кандидатов.',
  'hint.narration.candidate-inconsistent':
    '. Его штат-кандидат не соответствует загадке.',
  'hint.narration.reset-candidates': 'Сбросить набор кандидатов в ',
  'hint.narration.reset-candidates-tail':
    ' до каждой цифры, разрешенной принятыми значениями строки, столбца и поля.',
  'hint.narration.only-candidate': '. У него есть только один кандидат: ',
  'hint.narration.no-other-digit':
    'Потому что никакая другая цифра не может войти ',
  'hint.narration.place': ', место ',
  'hint.narration.naked-single-tail': ' там. Это называется голый сингл.',
  'hint.narration.in-unit': 'В ',
  'hint.narration.consider-digit': ', подумайте, где ',
  'hint.narration.can-appear': ' может появиться.',
  'hint.narration.other-cells': 'Каждая вторая пустая ячейка в ',
  'hint.narration.cannot-contain': ' не может содержать ',
  'hint.narration.leaving-only': ', оставив только ',
  'hint.narration.because-unit': 'Потому что ',
  'hint.narration.still-needs': ' все еще нуждается ',
  'hint.narration.only-cell': ' и ',
  'hint.narration.hidden-single-tail': ' единственная возможная ячейка, место ',
  'hint.narration.hidden-single-name': ' там. Это называется «Скрытый сингл».',
  'hint.narration.place-result': 'место ',
  'hint.narration.in': ' в ',
  'hint.narration.remove': 'удалить кандидата ',
  'hint.narration.from': ' из ',
  'hint.narration.strategy-result': '. Это результат {strategy}.',
  'welcome.eyebrow': 'Новая головоломка',
  'welcome.title': 'Выберите свою сложность',
  'welcome.lede': 'Выберите уровень и начните, когда будете готовы.',
  'welcome.difficulty': 'Сложность',
  'welcome.start': 'Запустить головоломку {difficulty}',
  'welcome.starting': 'Запускаем головоломку {difficulty}…',
  'welcome.preview': 'Предварительный просмотр головоломки судоку',
  'loading.initial': 'Загрузка головоломки…',
  'loading.account.eyebrow': 'Аккаунт',
  'loading.account.title': 'Сохраняем головоломку в своей учетной записи…',
  'loading.account.detail':
    'Ваш прогресс останется на этом устройстве, пока сохранение в аккаунте не будет подтверждено.',
  'loading.home.eyebrow': 'Судоку',
  'loading.home.title': 'Возвращаясь на первую страницу…',
  'loading.home.detail':
    'Проверка наличия последней версии интерфейса перед отображением выбора уровня.',
  'loading.restart.eyebrow': 'Та же головоломка',
  'loading.restart.title': 'Перезапуск этой головоломки…',
  'loading.restart.detail':
    'Оставляем старую доску заблокированной до тех пор, пока не будет готова новая попытка.',
  'loading.new.eyebrow': 'Новая головоломка',
  'loading.new.title': 'Подготовка платы {difficulty}…',
  'loading.new.detail':
    'Создаем новую головоломку прямо сейчас. Вы начнете играть через мгновение.',
  'confirmation.home.eyebrow': 'Вернуться домой?',
  'confirmation.home.title': 'Оставь эту головоломку',
  'confirmation.home.description':
    'Ваш текущий прогресс больше не будет автоматически открываться на этом устройстве.',
  'confirmation.home.cancel': 'Продолжайте играть',
  'confirmation.home.confirm': 'Вернуться на главную страницу',
  'confirmation.restart.eyebrow': 'Начать сначала?',
  'confirmation.restart.title': 'Начать сначала',
  'confirmation.restart.description':
    'Воспроизведите эту головоломку с ее исходной точки зрения или выберите другую головоломку.',
  'confirmation.restart.replay.title': 'Переиграйте эту головоломку',
  'confirmation.restart.replay.description':
    'Сохраните эти данные и сбросьте попытку.',
  'confirmation.restart.different.title': 'Сыграйте в другую головоломку',
  'confirmation.restart.different.description':
    'Выберите уровень для новой доски.',
  'confirmation.restart.different.level': 'Уровень для разных головоломок',
  'common.cancel': 'Отмена',
  'account.confirm.deleteGame.eyebrow': 'Удалить сохраненную игру?',
  'account.confirm.deleteGame.title': 'Удалить эту игру',
  'account.confirm.deleteGame.description':
    'Эта головоломка и ее ход будут навсегда удалены из Моих игр. Это невозможно отменить.',
  'account.confirm.deleteGame.action': 'Удалить игру',
  'account.confirm.deleteGame.pending': 'Удаление сохраненной игры…',
  'account.confirm.deleteAll.eyebrow': 'Удалить все сохраненные игры?',
  'account.confirm.deleteAll.title': 'Удалить все игры',
  'account.confirm.deleteAll.description':
    'Все головоломки и весь прогресс в Моих играх будут безвозвратно удалены. Это невозможно отменить.',
  'account.confirm.deleteAll.action': 'Удалить все игры',
  'account.confirm.deleteAll.pending': 'Удаление всех игр…',
  'account.confirm.revoke.eyebrow': 'Безопасность аккаунта',
  'account.confirm.revoke.title': 'Выйти на всех устройствах',
  'account.confirm.revoke.description':
    'Вы выйдете из аккаунта на всех устройствах, включая это. Аккаунт и сохранённые игры останутся.',
  'account.confirm.revoke.action': 'Выйти на всех устройствах',
  'account.confirm.revoke.pending': 'Выход на всех устройствах…',
  'account.confirm.deleteAccount.eyebrow': 'Постоянное действие',
  'account.confirm.deleteAccount.title': 'Удалить свою учетную запись',
  'account.confirm.deleteAccount.description':
    'Ваша личность, каждый сеанс входа в систему и все сохраненные игры будут безвозвратно удалены. Общий каталог головоломок не будет затронут.',
  'account.confirm.deleteAccount.action': 'Удалить аккаунт',
  'account.confirm.deleteAccount.pending': 'Удаление аккаунта…',
  'account.confirm.typeEmail': 'Введите {email} для подтверждения.',
  'account.label': 'Аккаунт',
  'account.continue.title': 'Продолжить на других устройствах',
  'account.continue.detail':
    'Войдите в систему, чтобы автоматически сохранить активную игру в этом браузере.',
  'account.signIn': 'Войти через Google',
  'account.signIn.short': 'Войти',
  'game.title': 'Пазл {difficulty}',
  'game.statusActions': 'Статус игры и действия',
  'game.elapsed': 'Прошедшее время',
  'game.mistakes': 'Ошибки {count}',
  'game.resume': 'Резюме',
  'game.pause': 'Пауза',
  'status.resumed': 'Головоломка возобновилась.',
  'status.paused': 'Головоломка остановилась.',
  'status.restarted': 'Головоломка перезапущена. Новая попытка, та же загадка.',
  'status.hintClosed': 'Подсказка закрыта. Ваша головоломка не изменилась.',
  'status.strategyApplied':
    'Стратегия применена. Вы можете отменить его за один шаг.',
  'status.correctionApplied':
    'Исправление применено. Вы можете отменить его за один шаг.',
  'status.hintAlreadyApplied': 'Этот намек уже отражен на доске.',
  'status.hintRefreshed': 'Поле изменилось, поэтому подсказка была обновлена.',
  'status.accountSaved': 'Игра сохранена в вашем аккаунте.',
  'status.waitBeforeLeaving':
    'Прежде чем покинуть эту головоломку, дождитесь предстоящих ходов.',
  'status.selectEditableCell':
    'Прежде чем вводить число, выберите редактируемую ячейку.',
  'status.savingAccount': 'Сохранение локальной игры в вашей учетной записи…',
  'status.restoring': 'Восстановление головоломки…',
  'status.restored': 'Ваша местная головоломка была восстановлена.',
  'status.puzzleReady': 'Пазл {difficulty} готов.',
  'status.puzzleRestored': 'Пазл {difficulty} восстановлен.',
  'status.waitBeforeStarting':
    'Подождите, пока не будут сделаны ходы, прежде чем начинать новую головоломку.',
  'status.solved': 'Готово! Отличная работа.',
  'status.moveSaved': 'Перемещение сохранено.',
  'status.waitBeforeHint':
    'Прежде чем открыть подсказку, дождитесь ожидаемых ходов.',
  'status.hintReady': 'Подсказка готова. Начните с шага 1.',
  'status.openingSaved': 'Открытие сохраненной игры…',
  'status.savedDeleted': 'Сохраненная игра удалена.',
  'status.allDeleted': 'Все сохраненные игры удалены.',
  'status.signedOut':
    'Вышел из аккаунта. Игры вашего аккаунта остаются сохраненными.',
  'status.revoked':
    'Вы вышли из аккаунта на всех устройствах. Войдите снова, чтобы продолжить.',
  'status.accountDeleted': 'Аккаунт и сохраненные игры удалены.',
  'retry.saving': 'Попробуйте сохранить еще раз',
  'retry.restoring': 'Попробуйте восстановить еще раз',
  'retry.connection': 'Проверьте соединение',
  'retry.starting': 'Попробуйте начать заново',
  'retry.move': 'Повторить попытку',
  'retry.hint': 'Попробуйте подсказку еще раз',
  'retry.time': 'Повторить попытку, чтобы сэкономить время.',
  'retry.progress': 'Повторить попытку сохранения прогресса',
  'retry.leaving': 'Попробуйте выйти еще раз',
  'retry.opening': 'Попробуйте открыть еще раз',
  'retry.deleting': 'Попробуйте удалить еще раз',
  'retry.signOut': 'Попробуйте выйти еще раз',
  'retry.revoke': 'Снова попробовать выйти на всех устройствах',
  'retry.deleteAccount': 'Попробуйте удалить аккаунт еще раз',
  'error.accountSave':
    'Ваша локальная игра безопасна, но ее не удалось сохранить в вашей учетной записи.',
  'error.restoring': 'Ваш пазл не может быть восстановлен.',
  'error.connection':
    'Не удалось связаться с игровым сервисом. Проверьте подключение и повторите попытку.',
  'error.http':
    'Игровой сервис вернул ошибку {status}. Пожалуйста, попробуйте еще раз.',
  'error.unavailable':
    'Игровой сервис временно недоступен. Ваша доска в безопасности; Попробуйте еще раз.',
  'error.starting': 'Не удалось запустить игру.',
  'error.signInAgain': 'Войдите еще раз, чтобы сохранить ходы.',
  'error.localUnavailable': 'Локальная игра недоступна.',
  'error.move': 'Спасти ход не удалось.',
  'error.currentUnavailable': 'Текущая игра недоступна.',
  'error.hintChanged': 'Поле изменилось во время подготовки подсказки.',
  'error.hint': 'Подсказку подготовить не удалось.',
  'error.time': 'Не удалось сохранить последнее игровое время.',
  'error.timer': 'Не удалось сохранить последнее состояние таймера.',
  'error.leaving': 'Локальную загадку разгадать не удалось.',
  'error.opening': 'Эту сохраненную игру невозможно открыть.',
  'error.deleteGame': 'Сохраненную игру невозможно удалить.',
  'error.deleteAll': 'Сохраненные игры удалить невозможно.',
  'error.signOut': 'Не удалось выйти из системы.',
  'error.revoke': 'Сессии не могли быть отменены.',
  'error.deleteAccount': 'Аккаунт не удалось удалить.',
  'error.invalid-request': 'Запрос недействителен.',
  'error.invalid-json': 'Запрос содержит недопустимый JSON.',
  'error.unsupported-media-type': 'Запрос Content-Type не поддерживается.',
  'error.payload-too-large': 'Запрос слишком велик.',
  'error.unauthorized': 'Требуется авторизация.',
  'error.forbidden-origin': 'Этот источник запроса не разрешен.',
  'error.session-not-found': 'Игровая сессия не найдена.',
  'error.revision-conflict': 'Поле изменилось до применения этого хода.',
  'error.invalid-session': 'Игровая сессия недействительна.',
  'error.invalid-action': 'Это игровое действие недействительно.',
  'error.invalid-cell': 'Эта ячейка недействительна.',
  'error.immutable-cell': 'Данную ячейку нельзя изменить.',
  'error.note-not-allowed': 'Кандидатов в этой ячейке изменить нельзя.',
  'error.no-undo': 'Нет действий, которые можно было бы отменить.',
  'error.no-redo': 'Нет действий, которые можно было бы повторить.',
  'error.no-hint': 'Никакой подсказки не имеется.',
  'error.stale-hint': 'Поле изменилось после подготовки этой подсказки.',
  'error.persistence-failed': 'Не удалось сохранить игру.',
  'error.internal-error': 'Не удалось выполнить запрос.',
  'error.account-unavailable': 'Функции аккаунта недоступны.',
  'error.account-unauthorized': 'Требуется действительный сеанс приложения.',
  'error.csrf-failed': 'Не удалось подтвердить вход. Войдите снова.',
  'error.account-game-not-found': 'Сохраненная игра не найдена.',
  'error.guest-revision-conflict':
    'Локальная игра изменилась до того, как было применено это действие.',
  'error.guest-claim-conflict':
    'Эта локальная игра уже сохранена в учетной записи.',
  'error.malformedDescriptor': 'Объяснение не удалось отобразить.',
  'account.close': 'Закрыть панель аккаунта',
  'account.games.title': 'Мои игры',
  'account.games.deleteAll': 'Удалить все',
  'account.games.deletingAll': 'Удаление всех…',
  'account.games.empty': 'Сохраненных игр пока нет.',
  'account.games.puzzle': 'Пазл {difficulty}',
  'account.games.finished': 'Закончено',
  'account.games.inProgress': 'В процессе',
  'account.games.saved': 'Сохраненная игра',
  'account.games.open': 'Открыть',
  'account.games.opening': 'Открытие…',
  'account.games.delete': 'Удалить',
  'account.games.deleting': 'Удаление…',
  'account.signOut': 'Выйти',
  'account.signingOut': 'Выход из системы…',
  'account.settings': 'Настройки аккаунта',
  'account.revoke': 'Выйти на всех устройствах',
  'account.delete': 'Удалить аккаунт',
  'board.label': 'Доска для игры в судоку',
  'board.cell.given': 'данный {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'пусто, кандидаты {candidates}',
  'board.cell.empty': 'пустой',
  'board.hint.focus': 'намек на фокус',
  'board.hint.premise': 'намек на доказательства',
  'board.hint.eliminated': 'кандидат исключен',
  'board.hint.conclusion': 'намек на заключение',
  'board.hint.problem': 'требует исправления',
  'board.hint.extra': 'невозможный кандидат',
  'board.hint.group': 'группа {group}',
  'board.hint.chain': 'положение цепи {position}',
  'board.paused.title': 'Головоломка приостановлена',
  'board.paused.detail': 'Ваше время остановлено.',
  'hint.label': 'Подсказка',
  'hint.close': 'Закрыть',
  'hint.strategy.grade': 'Стратегия {grade}',
  'hint.applying': 'Применение подсказки…',
  'hint.refreshing': 'Освежающий намек…',
  'hint.step': 'Шаг {current} из {total}',
  'hint.legend.label': 'Легенда визуальной подсказки',
  'hint.legend.strong': 'Твердый: должен содержать',
  'hint.legend.weak': 'Пунктир: нельзя оба',
  'hint.legend.implication': 'Стрелка: значение',
  'hint.legend.groups': 'A/B: чередующиеся группы',
  'hint.legend.order': 'Числа: цепной порядок',
  'hint.back': 'Назад',
  'hint.next': 'Далее',
  'hint.apply': 'Применить подсказку',
  'controls.label': 'Управление игрой',
  'controls.digit.note': 'Добавить или удалить заметку {digit}',
  'controls.digit.enter': 'Введите {digit}.',
  'controls.hint.preparing': 'Готовим подсказку…',
  'controls.hint.preparingDetail':
    'Сохраняйте головоломку видимой, пока готовится следующий шаг.',
  'controls.complete.eyebrow': 'Головоломка завершена',
  'controls.complete.title': 'Решено в {time}',
  'controls.complete.detail':
    'Поддерживайте ритм с помощью другой доски {difficulty} или выберите другой уровень.',
  'controls.complete.another': 'Сыграй еще один {difficulty}',
  'controls.complete.replay': 'Переиграйте эту головоломку',
  'controls.complete.choose': 'Выбрать другой уровень',
  'controls.pad': 'Цифровая клавиатура',
  'controls.pad.notes': 'Цифровая клавиатура, режим заметок',
  'controls.modes': 'Режимы ввода',
  'controls.notes.on': 'Примечания к',
  'controls.notes.off': 'Примечания отключены',
  'controls.candidates.on': 'Кандидаты на',
  'controls.candidates.off': 'Кандидаты отключены',
  'controls.actions': 'Действия-головоломки',
  'controls.erase': 'Стереть',
  'controls.undo': 'Отменить',
  'controls.undoing': 'Отмена…',
  'controls.redo': 'Повторить',
  'controls.redoing': 'Переделка…',
  'controls.hint.reveal': 'Показать подсказку',
  'controls.shortcuts': 'Сочетания клавиш',
  'controls.shortcuts.move': 'Переместить',
  'controls.shortcuts.arrows': 'Клавиши со стрелками',
  'controls.shortcuts.enter': 'Введите номер',
  'controls.shortcuts.notes': 'Примечания/кандидаты',
  'controls.shortcuts.or': 'или',
  'controls.shortcuts.pause': 'Пауза или возобновление',
  'controls.shortcuts.hint': 'Открытие, продвижение или применение подсказки',
  'controls.shortcuts.hintOther': 'Другие элементы управления подсказками',
  'hint.target.candidate.visible': 'этот выделенный кандидат',
  'hint.target.candidate.accessible':
    'кандидат {value} в строке {row}, столбце {column}',
  'hint.target.cell.visible': 'эта выделенная ячейка',
  'hint.target.cell.accessible': 'строка {row}, столбец {column}',
  'hint.target.unit.visible': 'это выделено {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'строка',
  'hint.target.column': 'столбец',
  'hint.target.box': 'коробка',
  'chrome.home': 'Судоку дома',
  'chrome.appearance': 'Внешний вид',
  'chrome.theme.use': 'Используйте тему {theme}',
  'chrome.theme.systemTitle': 'Системная тема ({theme})',
  'chrome.theme.title': 'Тема {theme}',
  'chrome.theme.system': 'Система',
  'chrome.theme.systemName': 'система',
  'chrome.theme.light': 'свет',
  'chrome.theme.dark': 'темно',
  'chrome.connection.connecting': 'Подключение',
  'chrome.connection.unavailable': 'Сервис недоступен',
  'chrome.footer.tagline': 'Вдумчивая игра, без отвлекающих факторов.',
  'chrome.footer.privacy': 'Конфиденциальность',
  'chrome.footer.terms': 'Условия',
  'chrome.footer.input': 'Клавиатура и сенсорный экран готовы',
};
