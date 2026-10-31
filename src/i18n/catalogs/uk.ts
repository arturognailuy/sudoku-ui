import type { MessageCatalog } from './types';

export const uk: MessageCatalog = {
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
    '{count, plural, one {# помилка} few {# помилки} many {# помилок} other {# помилки}}',
  'board.cell':
    'Рядок {row}, стовпець {column}, {content}{pending, select, true {, перевіряється} other {}}{invalid, select, true {, недійсне} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Мова',
  'common.language.auto': 'Авто',
  'accessibility.language.changed': 'Мову змінено на {language}.',
  'common.difficulty.easy': 'легко',
  'common.difficulty.medium': 'Середній',
  'common.difficulty.hard': 'важко',
  'common.difficulty.expert': 'Експерт',
  'common.difficulty.evil': 'зло',
  'difficulty.easy.name': 'легко',
  'difficulty.medium.name': 'Середній',
  'difficulty.hard.name': 'важко',
  'difficulty.expert.name': 'Експерт',
  'difficulty.evil.name': 'зло',
  'hint.value-correction.title': 'Зафіксуйте це значення',
  'hint.candidate-correction.title': 'Виправте цю клітинку-кандидата',
  'hint.value-correction.summary':
    'Значення {cell} конфліктує з головоломкою. Очистіть його, перш ніж продовжити.',
  'hint.candidate-correction.summary':
    'Перш ніж продовжити, заново визначте кандидатів для {cell} за вже заповненими цифрами в рядку, стовпці та блоці.',
  'hint.strategy.summary':
    'Пройдіть ці {steps} кроки, щоб зрозуміти й застосувати {strategy}.',
  'hint.value-correction.observe':
    'Перевірте {cell}. Значення суперечить поточному полю.',
  'hint.value-correction.conclude':
    'Очистіть значення в {cell}, щоб потім можна було перевірити сітку-кандидата.',
  'hint.candidate-correction.observe':
    'Перевірте {cell}. Кандидати не відповідають поточному полю.',
  'hint.candidate-correction.compare':
    'Заново визначте кандидатів для цієї клітинки за вже заповненими цифрами в рядку, стовпці та блоці.',
  'hint.candidate-correction.conclude':
    'Залиште в {cell} усі цифри, дозволені в її рядку, стовпці та блоці.',
  'hint.strategy.observe':
    'Перевірте виділені клітинки, кандидати, рядки, стовпці та блоки.',
  'hint.strategy.compare':
    'Зіставте виділені обмеження, щоб знайти однозначний результат.',
  'hint.strategy.conclude':
    'Застосуйте виділений результат. Це прийом {strategy}.',
  'hint.coloring.pair':
    'У {unit} для цифри {digit} можливі лише дві клітинки — {cells}. Рівно в одній із них стоятиме ця цифра, тому позначте ці дві можливості як A і B.',
  'hint.coloring.chain':
    'Продовжуйте ланцюжок суцільними зв’язками, кожен із яких сполучає дві позиції, що є єдино можливими для цифри {digit} в рядку, стовпці або блоці. Уздовж усього ланцюжка позначки мають чергуватися: A — у {group_a}, B — у {group_b}.',
  'hint.coloring.alternatives':
    'Або {digit} стоїть у всіх клітинках кольору A й у жодній клітинці кольору B, або {digit} стоїть у всіх клітинках кольору B й у жодній клітинці кольору A. Для вилучення не потрібно знати, який із цих варіантів правильний.',
  'hint.coloring.elimination':
    'Клітинка {cell} бачить позицію групи A в {group_a_cell} і позицію групи B в {group_b_cell}. За будь-якого правильного розфарбування в одній із цих позицій стоятиме {digit}, тому ця цифра в цільовій клітинці неможлива.',
  'hint.coloring.apply':
    'Вилучіть {candidates}. Кожна цільова клітинка бачить позицію групи A та позицію групи B для цифри {colored_digit}, тому незалежно від правильного розфарбування цей кандидат у ній неможливий. Цей прийом має назву {strategy}.',
  'hint.coloring.place':
    'Пов’язані кандидати для {colored_digit} форсують результат. Помістіть {digit} у {cell}. Цей шаблон {strategy}.',
  'hint.x-cycle.opening':
    'У {unit} цифра {digit} може стояти лише в клітинках {cells}. Одна з цих двох клітинок обов’язково містить цю цифру.',
  'hint.x-cycle.assume':
    'Припустімо, що в {start} не стоїть {digit}. Тоді в {forced} мусить стояти {digit}, а отже, в {blocked} не може бути {digit}. Тому в {unit} для {digit} залишається лише клітинка {result}.',
  'hint.x-cycle.follow':
    'Оскільки в {true_cell} стоїть {digit}, у {blocked} не може бути {digit}. Тому в {unit} цифра {digit} мусить стояти в {result}.',
  'hint.x-cycle.close':
    'Оскільки в {true_cell} стоїть {digit}, у {blocked} не може бути {digit}. Отже, в {unit} єдиним місцем для {digit} залишається {result}.',
  'hint.x-cycle.place':
    'Початкове припущення, що в {assumption} не стоїть {digit}, зрештою змушує поставити {digit} у {cell}. Отже, припущення хибне: поставте {digit} у {cell}. Цей прийом має назву {strategy}.',
  'hint.xy-chain.start':
    'У {cell} можливі лише кандидати {first_digit} і {second_digit}. Або в цій клітинці стоїть {endpoint_digit}, або, якщо це не так, у ній має стояти {other_digit}.',
  'hint.xy-chain.assume':
    'Припустімо, що в {start} не стоїть {endpoint_digit}. Тоді там має стояти {start_value}. Клітинки {start} і {middle} бачать одна одну через {first_unit}, тому в {middle} не може стояти {start_value} і має стояти {middle_value}. Через {second_unit} це виключає {middle_value} з {result}, тож у {result} має стояти {result_value}.',
  'hint.xy-chain.follow':
    'Клітинки {start} і {middle} бачать одна одну через {first_unit}. Оскільки в першій стоїть {start_value}, у другій не може стояти {start_value}, тож там має стояти {middle_value}. Клітинки {middle} і {result} бачать одна одну через {second_unit}, тому в клітинці {result} не може стояти {middle_value} і має стояти {result_value}.',
  'hint.xy-chain.reach':
    'Оскільки в {start} стоїть {start_value}, у {endpoint} не може стояти {shared_digit}. Єдиний інший кандидат — {endpoint_digit}, тому в цій клітинці має стояти {endpoint_digit}.',
  'hint.xy-chain.place':
    'Якщо в {first_endpoint} стоїть {endpoint_digit}, то перша кінцева клітинка містить {endpoint_digit}. Якщо ж у ній немає {endpoint_digit}, ланцюжок змушує поставити {endpoint_digit} в іншу кінцеву клітинку — {second_endpoint}. Отже, принаймні одна з кінцевих клітинок містить {endpoint_digit}. Клітинка {cell} бачить обидві кінцеві клітинки, тому кандидат {endpoint_digit} у ній неможливий. Поставте {digit} у {cell}. Цей прийом називається {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Почніть із {cell}. У рядку, стовпці та блоці цієї клітинки вже стоять {excluded_digits}.',
  'hint.naked-single.only':
    'Отже, {digit} — єдина цифра, яку можна поставити в {cell}.',
  'hint.naked-single.apply':
    'Поставте {digit} у {cell}. Клітинка з єдиним кандидатом — це {strategy}.',
  'hint.hidden-single.inspect':
    'Перевірте, де в {unit} може стояти цифра {digit}.',
  'hint.hidden-single.blockers':
    'Цифра {digit}, уже розміщена в клітинках {blockers}, виключає {digit} з усіх інших порожніх клітинок у {unit}.',
  'hint.hidden-single.only': 'Цифра {digit} може стояти лише в {cell}.',
  'hint.hidden-single.apply':
    'Поставте {digit} у {cell}. Якщо для цифри в рядку, стовпці або блоці залишається лише одна можлива клітинка, це {strategy}.',
  'hint.naked-pair.inspect':
    'Почніть з {unit}: у {cell} можливі лише {first_digit} і {second_digit}.',
  'hint.naked-pair.match':
    'У {cell} є та сама пара кандидатів: {first_digit} і {second_digit}.',
  'hint.naked-pair.reserve':
    'У цих двох клітинках мають у певному порядку стояти {digits}. Тому кандидат {digit} неможливий у всіх інших клітинках {unit}.',
  'hint.naked-pair.apply':
    'Вилучіть {candidates}. На цьому кроці жодна цифра не ставиться. Цей прийом має назву {strategy}.',
  'hint.naked-triple.first':
    '{unit}: у {cell} можливі лише {first_digit} або {second_digit}.',
  'hint.naked-triple.second':
    'Додайте {cell}: у цій клітинці можливі лише {first_digit} або {second_digit}.',
  'hint.naked-triple.third':
    'Додайте {cell}: у цій клітинці можливі лише {first_digit} або {second_digit}. Отже, кандидати трьох клітинок обмежені набором {reserved_digits}.',
  'hint.naked-triple.consequence':
    'У цих трьох клітинках мають у певному порядку стояти {reserved_digits}. Тому з {cell} можна вилучити {removed_digits}; залишається лише {remaining_digit}.',
  'hint.naked-triple.apply':
    'Поставте {digit} у {cell}. Три клітинки, кандидати яких обмежені тими самими трьома цифрами, утворюють {strategy}.',
  'hint.naked-quad.cell':
    '{unit}: для клітинки {cell} можливі лише кандидати {digits}.',
  'hint.subset-reservation.observe':
    'У {unit} клітинки {cells} містять лише {digits}.',
  'hint.subset-reservation.explain':
    'У межах {unit} зазначені клітинки зарезервовані для цифр {digits}, тому в інших клітинках ці цифри неможливі.',
  'hint.subset-reservation.apply':
    'Вилучіть {candidates}. Цей прийом — {strategy}.',
  'hint.subset-reservation.place':
    'Поставте {digit} у {cell}. Цей прийом — {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'У {unit} цифри {digits} можуть бути лише в {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Оскільки {digits} обмежені цими клітинками в {unit}, у них не може бути інших кандидатів.',
  'hint.hidden-subset-confinement.apply':
    'Вилучіть {candidates} із цих клітинок. Цей прийом — {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Поставте {digit} у {cell} після вилучення інших кандидатів. Цей прийом — {strategy}.',
  'hint.hidden-pair.first':
    '{unit}: кандидат {digit} можливий лише в клітинках {cells}.',
  'hint.hidden-pair.second':
    'Кандидат {digit} також можливий лише в цих двох клітинках. Отже, цифри {digits} мають у певному порядку зайняти {cells}.',
  'hint.hidden-pair.consequence':
    'Клітинки цієї пари зарезервовані для {digits}, тому інші кандидати в них неможливі: {candidates}.',
  'hint.hidden-pair.apply':
    'Вилучіть {candidates}. Цей прийом має назву {strategy}.',
  'hint.hidden-triple.first':
    '{unit}: кандидат {digit} можливий лише в клітинках {cells}.',
  'hint.hidden-triple.second':
    '{unit}: цифри {digits} можуть стояти лише в клітинках {cells}.',
  'hint.hidden-triple.third':
    '{unit}: цифри {digits} можуть стояти лише в клітинках {cells}.',
  'hint.hidden-triple.consequence':
    'У межах {unit} цифри {digits} можуть стояти лише в зазначених клітинках, тому всі інші кандидати в цих клітинках неможливі.',
  'hint.hidden-triple.apply':
    'Вилучіть {candidates} із зазначених клітинок. Цей прийом має назву {strategy}.',
  'hint.hidden-quad.first':
    '{unit}: кандидат {digit} можливий лише в клітинках {cells}.',
  'hint.hidden-quad.second':
    '{unit}: цифри {digits} можуть стояти лише в клітинках {cells}.',
  'hint.hidden-quad.third':
    '{unit}: цифри {digits} можуть стояти лише в клітинках {cells}.',
  'hint.hidden-quad.fourth':
    '{unit}: цифри {digits} можуть стояти лише в клітинках {cells}.',
  'hint.hidden-quad.consequence':
    'У межах {unit} цифри {digits} можуть стояти лише в зазначених клітинках, тому всі інші кандидати в цих клітинках неможливі.',
  'hint.hidden-quad.apply':
    'Вилучіть {candidates} із зазначених клітинок. Цей прийом має назву {strategy}.',
  'hint.pointing-pair.first':
    'У {source_unit} почніть із кандидата {digit} у клітинці {cell}. Знайдіть усі інші клітинки цього блока, у яких може стояти {digit}.',
  'hint.pointing-pair.second':
    'У {source_unit} для цифри {digit} залишається лише одна інша можлива позиція — {cell}. Обидві позиції належать до {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'У {source_unit} цифра {digit} мусить займати одну з двох можливих клітинок, і обидві вони належать до {intersection_unit}. Тому вилучіть {candidate} з решти клітинок у {intersection_unit}.',
  'hint.pointing-pair.apply':
    'У {cell} залишився лише кандидат {digit}, тож поставте туди {digit}. Цей прийом має назву {strategy}.',
  'hint.intersection-confinement.observe':
    'У {source_unit} кандидат {digit} обмежується {intersection_unit} у {cells}.',
  'hint.intersection-confinement.explain':
    'Оскільки кожен {digit} у {source_unit} лежить у {intersection_unit}, комірки поза джерелом, але всередині перетину, не можуть містити його.',
  'hint.intersection-confinement.apply':
    'Видалити кандидата {digit} із {cells}. Цей шаблон - {strategy}.',
  'hint.intersection-confinement.place':
    'Помістіть {digit} у {cell} після застосування перетину. Цей шаблон - {strategy}.',
  'hint.fish-confinement.observe':
    'У межах {base_units} кандидат {digit} можливий лише в {cover_units}.',
  'hint.fish-confinement.explain':
    'Кандидат {digit} обмежений з {base_units} до {cover_units}, тому ці покривні області мають отримати його через виділені базові позиції.',
  'hint.swordfish.consequence':
    '{base_units}: у кожній із цих трьох областей цифра {digit} має зайняти одну клітинку в межах {cover_units}. Отже, три обов’язкові позиції припадуть по одній на кожну з трьох областей покриття, тому всіх інших кандидатів {digit} у них можна вилучити.',
  'hint.jellyfish.consequence':
    '{base_units}: у кожній із цих чотирьох областей цифра {digit} має зайняти одну клітинку в межах {cover_units}. Отже, чотири обов’язкові позиції припадуть по одній на кожну з чотирьох областей покриття, тому всіх інших кандидатів {digit} у них можна вилучити.',
  'hint.fish-confinement.apply':
    'Вилучіть кандидата {digit} із клітинок {cells}. Цей прийом — {strategy}.',
  'hint.x-wing.first':
    'У {base_unit} кандидат {digit} можливий лише в {cover_units}.',
  'hint.x-wing.second':
    'У {base_unit} кандидат {digit} так само можливий лише в {cover_units}. Отже, в обох базових областях його позиції обмежені тими самими двома областями покриття.',
  'hint.x-wing.consequence':
    '{base_units}: у кожній із цих двох областей цифра {digit} має зайняти одну клітинку в межах {cover_units}. Отже, дві обов’язкові позиції припадуть по одній на кожну область покриття, тому решту кандидатів {digit} у них можна вилучити.',
  'hint.x-wing.apply':
    'Вилучіть кандидата {digit} із клітинок {cells}. Цей прийом має назву {strategy}.',
  'hint.pivot-wing.observe':
    'У {pivot} кандидати {pivot_digits} з’єднують клітини крил у {wing_cells}.',
  'hint.pivot-wing.explain':
    'Кожне крило на {wing_cells} поділяє одного кандидата з центром на {pivot}, і обидва крила містять {shared_digit}. Незалежно від того, який кандидат на опору є вірним, одне крило має містити {shared_digit}.',
  'hint.xy-wing.pivot':
    'У {pivot} залишилися лише кандидати {digits}, тож у цій клітинці обов’язково стоятиме один із них.',
  'hint.xy-wing.case':
    'Якщо в {pivot} стоїть {pivot_digit}, то в {wing} не може стояти {pivot_digit}. Єдиний інший кандидат у {wing} — {shared_digit}, тому там має стояти {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Який би кандидат не стояв у {pivot}, принаймні в одному з крил — {wing_cells} — має стояти {shared_digit}. З’ясовувати, у якому саме, не потрібно.',
  'hint.xy-wing.apply':
    '{cells} бачать обидва крила {wing_cells}. Оскільки принаймні одне містить {shared_digit}, вилучіть {shared_digit} із цих клітинок. Цей прийом називається {strategy}.',
  'hint.xy-wing.place':
    'Клітинка {cell} бачить обидва крила — {wing_cells}. Оскільки принаймні в одному з них стоїть {shared_digit}, ця цифра в {cell} неможлива. Єдиний інший кандидат — {digit}, тож поставте його в цю клітинку. Цей прийом має назву {strategy}.',
  'hint.xyz-wing.pivot':
    'У {pivot} залишилися лише кандидати {digits}, тож у цій клітинці обов’язково стоятиме один із них.',
  'hint.xyz-wing.case':
    'Якщо в опорній клітинці {pivot} стоїть {pivot_digit}, то ця опорна клітинка й клітинка {wing} належать до {unit}. Тому в клітинці-крилі не може стояти {pivot_digit}; її єдиний інший кандидат — {shared_digit}, отже, там має стояти {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Якщо в {pivot} стоїть {shared_digit}, то ця цифра вже міститься в опорній клітинці.',
  'hint.xyz-wing.guarantee':
    'Який би кандидат не стояв у {pivot}, принаймні в одній із клітинок {pattern_cells} має стояти {shared_digit}. З’ясовувати, у якій саме, не потрібно.',
  'hint.xyz-wing.apply':
    'Клітинка {target} бачить {first_pattern_cell} через {first_unit}, {second_pattern_cell} через {second_unit} і {third_pattern_cell} через {third_unit}. Оскільки принаймні в одній із цих трьох клітинок стоїть {shared_digit}, у {target} ця цифра неможлива. Вилучіть із неї кандидата {shared_digit}. Цей прийом має назву {strategy}.',
  'hint.strong-link-wing.observe':
    'У кожній із клітинок {wing_cells} можливі лише {digits}.',
  'hint.strong-link-wing.bridge':
    'У {unit} кандидат {link_digit} можливий лише в клітинках {link_cells}, тому принаймні в одній із них має стояти {link_digit}.',
  'hint.strong-link-wing.force':
    'Якщо в {first_link_cell} стоїть {link_digit}, то кандидат {link_digit} виключається з {first_wing_cell}, тож у цій клітинці мусить стояти {forced_digit}. Якщо ж {link_digit} стоїть у {second_link_cell}, тоді {second_wing_cell} мусить містити {forced_digit}. Отже, принаймні одна з цих двох клітинок містить {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Принаймні одна з клітинок {wing_cells} дорівнює {digit}. Видаліть кандидата {digit} з {cells}, бо ці клітинки бачать обидві. Цей прийом називається {strategy}.',
  'hint.strong-link-wing.place':
    'Принаймні в одній із клітинок {wing_cells} стоїть {removed_digit}. Клітинка {cell} бачить їх обидві, тому вилучіть із неї кандидата {removed_digit} і поставте {digit}. Цей прийом має назву {strategy}.',
  'hint.relational-wing.apply':
    'Видалити кандидата {digit} із {cells}. Цей шаблон - {strategy}.',
  'hint.relational-wing.place':
    'Видаліть кандидата {removed_digit} із {cell}, тож помістіть туди {digit}. Цей шаблон - {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Усі нерозв’язані клітинки, крім {cell}, мають рівно по два кандидати; таких клітинок — {count}.',
  'hint.bug-plus-one.trivalue':
    'У {cell} є три кандидати: {digits}. Це на одного кандидата більше, ніж у будь-якій іншій нерозв’язаній клітинці.',
  'hint.bug-plus-one.unit-count':
    'У {unit} кандидат {digit} має три можливі позиції, а кожна із цифр {other_digits} — лише дві.',
  'hint.bug-plus-one.explain':
    'В областях {units} кандидат {digit} має на одну можливу позицію більше, ніж {other_digits}. Якби в {cell} не стояла цифра {digit}, усі нерозв’язані клітинки мали б рівно по два кандидати, і головоломка більше не мала б унікального розв’язку. Отже, у {cell} має стояти {digit}.',
  'hint.bug-plus-one.place':
    'Поставте {digit} у {cell}. Вибір цього додаткового кандидата зберігає унікальність розв’язку; така схема має назву {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Чотири нерозв’язані клітинки {cells} розташовані в кутах прямокутника.',
  'hint.unique-rectangle.pair-corners':
    'У клітинках {cells} кандидатами є лише {digits}.',
  'hint.unique-rectangle.third-corner':
    'У {cell} набір кандидатів також складається рівно із {digits}. Отже, три кути мають однакову пару.',
  'hint.unique-rectangle.expanded-corner':
    'У {cell} можливі {digits}, серед яких є єдиний додатковий кандидат {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Якби в {cell} остаточно поставили будь-яку цифру з пари {digits}, значення в чотирьох кутах можна було б переставити, не порушивши жодного рядка, стовпця чи блока, й отримати другий розв’язок. Тому вилучіть {digits} і залиште {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'У {cell} залишилася лише цифра {digit}, тож поставте її туди. Цей прийом — {strategy}.',
  'hint.unique-rectangle.observe':
    'Комірки в {cells} утворюють прямокутник і всі містять пару {digits}.',
  'hint.unique-rectangle.type1':
    'Три кути містять рівно {digits}. Якби {cell} також використовував будь-яку цифру, прямокутник дозволяв би два взаємозамінних рішення.',
  'hint.unique-rectangle.type2-first-expanded':
    'У {cell} можливі кандидати {pair} разом із {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'У {cell} знову можливі кандидати {pair} разом із {extra_digit}. Отже, обидві кутові клітинки з розширеним набором мають спільного додаткового кандидата {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Щоб не виникли взаємозамінні розв’язки, принаймні в одній із клітинок {cells} має стояти {extra_digit}. Клітинка {target} бачить їх обидві, тому ця цифра в ній неможлива.',
  'hint.unique-rectangle.type2-place':
    'У {cell} залишилася лише цифра {digit}, тож поставте її туди. Цей прийом має назву {strategy}.',
  'hint.unique-rectangle.type2':
    'Два розширені кути в {cells} спільно використовують додатковий кандидат {digit}, тому будь-яка клітинка, яка бачить обидва кути, не може містити {digit}.',
  'hint.unique-rectangle.type3':
    'Додаткові цифри {digits} у прямокутнику поєднуються з {cells} як зарезервована підмножина в {unit}, тому ці цифри можна видалити в іншому місці цього блоку.',
  'hint.unique-rectangle.type3-first-expanded':
    'У {cell} також є пара {pair} і додатковий кандидат {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'У {cell} також є пара {pair} і додатковий кандидат {extra_digit}. Принаймні в одній із двох кутових клітинок із розширеним набором має стояти додаткова цифра, інакше значення {pair} у чотирьох кутах можна було б поміняти місцями й отримати два розв’язки.',
  'hint.unique-rectangle.type3-partner':
    'У {cell} можливі лише кандидати {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'В одній із клітинок {corners} має стояти одна із цифр {digits}, а в {partner} — інша. У {unit} ці дві цифри зарезервовані за цими клітинками, тому в {target} кандидат {removed_digit} неможливий.',
  'hint.unique-rectangle.type3-place':
    'У {cell} залишилася лише цифра {digit}. Поставте її туди. Цей прийом має назву {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'У {cell} також є пара {pair} і додатковий кандидат {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'У {cell} також є пара {pair} і додатковий кандидат {extra_digit}. Отже, обидві кутові клітинки з розширеним набором містять пару прямокутника.',
  'hint.unique-rectangle.type4':
    'У клітинках {cells} кандидат {digit} утворює спряжену пару в {unit}. Тому кандидат {removed_digit} не може стояти в жодному з двох розширених кутів, інакше виникли б взаємозамінні розв’язки.',
  'hint.unique-rectangle.type4-apply':
    'Вилучіть кандидата {digit} із клітинок {cells}. Це схема {strategy}.',
  'hint.unique-rectangle.apply':
    'Видаліть {candidates}. Це співвідношення унікальності - {strategy}.',
  'hint.unique-rectangle.place':
    'Помістіть {digit} у {cell} після застосування зв’язку унікальності. Цей шаблон - {strategy}.',
  'hint.implication-chain.observe':
    'Почніть із {cell}, де можливі лише кандидати {digits}.',
  'hint.implication-chain.explain':
    '{from} і {to} мають спільного кандидата та бачать одна одну, тому цей кандидат не може бути істинним в обох; імплікація триває.',
  'hint.implication-chain.apply':
    'Одна з кінцевих точок має містити {digit}, тому вилучіть кандидата {digit} з {cells}. Цей прийом — {strategy}.',
  'hint.narration.apply': 'Застосувати відрахування: ',
  'hint.narration.look-at': 'Подивіться на ',
  'hint.narration.value-conflict':
    '. Його введене значення конфліктує з головоломкою.',
  'hint.narration.clear-value': 'Очистити значення at ',
  'hint.narration.clear-value-tail':
    ' тому сітку кандидатів можна перевірити далі.',
  'hint.narration.candidate-inconsistent':
    '. Його держава-кандидат не відповідає загадці.',
  'hint.narration.reset-candidates': 'Скинути набір кандидатів на ',
  'hint.narration.reset-candidates-tail':
    ' до кожної цифри, дозволеної прийнятими значеннями рядка, стовпця та поля.',
  'hint.narration.only-candidate': '. Є лише один кандидат: ',
  'hint.narration.no-other-digit': 'Тому що жодна інша цифра не може ввійти ',
  'hint.narration.place': ', місце ',
  'hint.narration.naked-single-tail': ' там. Це називається голий сингл.',
  'hint.narration.in-unit': 'в ',
  'hint.narration.consider-digit': ', поміркуйте де ',
  'hint.narration.can-appear': ' може з’явитися.',
  'hint.narration.other-cells': 'Кожна друга порожня клітинка в ',
  'hint.narration.cannot-contain': ' не може містити ',
  'hint.narration.leaving-only': ', залишаючи тільки ',
  'hint.narration.because-unit': 'Тому що ',
  'hint.narration.still-needs': ' ще потребує ',
  'hint.narration.only-cell': ' і ',
  'hint.narration.hidden-single-tail': ' є єдино можливим осередком, місцем ',
  'hint.narration.hidden-single-name':
    ' там. Це називається прихованим синглом.',
  'hint.narration.place-result': 'місце ',
  'hint.narration.in': ' в ',
  'hint.narration.remove': 'видалити кандидата ',
  'hint.narration.from': ' від ',
  'hint.narration.strategy-result': '. Це результат {strategy}.',
  'welcome.eyebrow': 'Нова головоломка',
  'welcome.title': 'Виберіть свою складність',
  'welcome.lede': 'Виберіть рівень і почніть, коли будете готові.',
  'welcome.difficulty': 'Складність',
  'welcome.start': 'Розпочніть головоломку {difficulty}',
  'welcome.starting': 'Запуск головоломки {difficulty}…',
  'welcome.preview': 'Попередній перегляд головоломки судоку',
  'loading.initial': 'Завантаження головоломки…',
  'loading.account.eyebrow': 'Обліковий запис',
  'loading.account.title': 'Зберігання головоломки у вашому обліковому записі…',
  'loading.account.detail':
    'Ваш прогрес залишатиметься на цьому пристрої, доки збереження в обліковому записі не буде підтверджено.',
  'loading.home.eyebrow': 'Судоку',
  'loading.home.title': 'Повертаючись до першої сторінки…',
  'loading.home.detail':
    'Перевірка найновішого інтерфейсу перед показом вибору рівня.',
  'loading.restart.eyebrow': 'Така сама головоломка',
  'loading.restart.title': 'Перезапуск цієї головоломки…',
  'loading.restart.detail':
    'Зберігайте стару дошку заблокованою, доки не буде готова нова спроба.',
  'loading.new.eyebrow': 'Нова головоломка',
  'loading.new.title': 'Підготовка вашої плати {difficulty}…',
  'loading.new.detail':
    'Створення нової головоломки. Ви почнете грати за мить.',
  'confirmation.home.eyebrow': 'Повернутися додому?',
  'confirmation.home.title': 'Залиште цю загадку',
  'confirmation.home.description':
    'Ваш поточний прогрес більше не відкриватиметься автоматично на цьому пристрої.',
  'confirmation.home.cancel': 'Продовжуйте грати',
  'confirmation.home.confirm': 'Повернутися на першу сторінку',
  'confirmation.restart.eyebrow': 'Почати спочатку?',
  'confirmation.restart.title': 'Почніть спочатку',
  'confirmation.restart.description':
    'Відтворіть цю головоломку з початкових даних або виберіть іншу головоломку.',
  'confirmation.restart.replay.title': 'Повторіть цю головоломку',
  'confirmation.restart.replay.description':
    'Збережіть ці дані та скиньте цю спробу.',
  'confirmation.restart.different.title': 'Грайте в іншу головоломку',
  'confirmation.restart.different.description':
    'Виберіть рівень для нової дошки.',
  'confirmation.restart.different.level': 'Рівень для різної головоломки',
  'common.cancel': 'Скасувати',
  'account.confirm.deleteGame.eyebrow': 'Видалити збережену гру?',
  'account.confirm.deleteGame.title': 'Видалити цю гру',
  'account.confirm.deleteGame.description':
    'Цю головоломку та її прогрес буде назавжди видалено з Моїх ігор. Це неможливо скасувати.',
  'account.confirm.deleteGame.action': 'Видалити гру',
  'account.confirm.deleteGame.pending': 'Видалення збереженої гри…',
  'account.confirm.deleteAll.eyebrow': 'Видалити кожну збережену гру?',
  'account.confirm.deleteAll.title': 'Видалити всі ігри',
  'account.confirm.deleteAll.description':
    'Кожна головоломка та весь прогрес у Моїх іграх буде видалено назавжди. Це неможливо скасувати.',
  'account.confirm.deleteAll.action': 'Видалити всі ігри',
  'account.confirm.deleteAll.pending': 'Видалення всіх ігор…',
  'account.confirm.revoke.eyebrow': 'Безпека облікового запису',
  'account.confirm.revoke.title': 'Вийти на всіх пристроях',
  'account.confirm.revoke.description':
    'Ви вийдете з облікового запису на всіх пристроях, включно з цим. Обліковий запис і збережені ігри залишаться.',
  'account.confirm.revoke.action': 'Вийти на всіх пристроях',
  'account.confirm.revoke.pending': 'Вихід на всіх пристроях…',
  'account.confirm.deleteAccount.eyebrow': 'Постійна дія',
  'account.confirm.deleteAccount.title': 'Видалити обліковий запис',
  'account.confirm.deleteAccount.description':
    'Вашу особу, кожен сеанс, під час якого ви ввійшли, і всі збережені ігри буде видалено назавжди. Спільний каталог головоломок не впливає.',
  'account.confirm.deleteAccount.action': 'Видалити акаунт',
  'account.confirm.deleteAccount.pending': 'Видалення облікового запису…',
  'account.confirm.typeEmail': 'Введіть {email} для підтвердження',
  'account.label': 'Обліковий запис',
  'account.continue.title': 'Продовжте на інших пристроях',
  'account.continue.detail':
    'Увійдіть, щоб автоматично зберегти активну гру цього браузера.',
  'account.signIn': 'Увійдіть за допомогою Google',
  'account.signIn.short': 'Увійдіть',
  'game.title': 'Головоломка {difficulty}',
  'game.statusActions': 'Статус гри та дії',
  'game.elapsed': 'Час, що минув',
  'game.mistakes': 'Помилки {count}',
  'game.resume': 'Резюме',
  'game.pause': 'Пауза',
  'status.resumed': 'Головоломку відновлено.',
  'status.paused': 'Головоломку призупинено.',
  'status.restarted':
    'Головоломку перезапущено. Нова спроба, та сама головоломка.',
  'status.hintClosed': 'Підказку закрито. Ваша головоломка не змінилася.',
  'status.strategyApplied':
    'Стратегія застосована. Ви можете скасувати це одним кроком.',
  'status.correctionApplied':
    'Виправлення застосовано. Ви можете скасувати це одним кроком.',
  'status.hintAlreadyApplied': 'Ця підказка вже відображена на дошці.',
  'status.hintRefreshed': 'Поле змінилося, тому підказку оновлено.',
  'status.accountSaved': 'Гра збережена у вашому обліковому записі.',
  'status.waitBeforeLeaving':
    'Дочекайтеся незавершених ходів, перш ніж покинути цю головоломку.',
  'status.selectEditableCell':
    'Виберіть клітинку, яку можна редагувати, перш ніж вводити число.',
  'status.savingAccount':
    'Зберігання локальної гри у вашому обліковому записі…',
  'status.restoring': 'Відновлення головоломки…',
  'status.restored': 'Ваш локальний пазл відновлено.',
  'status.puzzleReady': 'Головоломка {difficulty} готова.',
  'status.puzzleRestored': 'Головоломку {difficulty} відновлено.',
  'status.waitBeforeStarting':
    'Зачекайте незавершених ходів, перш ніж починати іншу головоломку.',
  'status.solved': 'Готово! Чудова робота.',
  'status.moveSaved': 'Переїзд збережено.',
  'status.waitBeforeHint':
    'Перш ніж відкривати підказку, дочекайтеся незавершених ходів.',
  'status.hintReady': 'Підказка готова. Почніть з кроку 1.',
  'status.openingSaved': 'Відкриття збереженої гри…',
  'status.savedDeleted': 'Збережену гру видалено.',
  'status.allDeleted': 'Усі збережені ігри видалено.',
  'status.signedOut':
    'Вийшов. Ігри вашого облікового запису залишаються збереженими.',
  'status.revoked':
    'Ви вийшли з облікового запису на всіх пристроях. Увійдіть знову, щоб продовжити.',
  'status.accountDeleted': 'Обліковий запис і збережені ігри видалено.',
  'retry.saving': 'Спробуйте зберегти ще раз',
  'retry.restoring': 'Спробуйте відновити знову',
  'retry.connection': 'Перевірте підключення',
  'retry.starting': 'Спробуйте почати знову',
  'retry.move': 'Повторити рух',
  'retry.hint': 'Спробуйте підказку ще раз',
  'retry.time': 'Повторіть спробу, щоб зберегти час',
  'retry.progress': 'Спробуйте зберегти прогрес',
  'retry.leaving': 'Спробуйте піти знову',
  'retry.opening': 'Спробуйте відкрити знову',
  'retry.deleting': 'Спробуйте видалити знову',
  'retry.signOut': 'Спробуйте вийти знову',
  'retry.revoke': 'Ще раз спробувати вийти на всіх пристроях',
  'retry.deleteAccount': 'Спробуйте видалити обліковий запис знову',
  'error.accountSave':
    'Ваша локальна гра безпечна, але її не вдалося зберегти у вашому обліковому записі.',
  'error.restoring': 'Вашу головоломку не вдалося відновити.',
  'error.connection':
    'Не вдалося зв’язатися з ігровою службою. Перевірте підключення та повторіть спробу.',
  'error.http': 'Ігровий сервіс повернув помилку {status}. Спробуйте ще раз.',
  'error.unavailable':
    'Ігровий сервіс тимчасово недоступний. Ваша дошка в безпеці; спробуйте ще раз.',
  'error.starting': 'Не вдалося розпочати гру.',
  'error.signInAgain': 'Увійдіть знову, щоб зберегти ходи.',
  'error.localUnavailable': 'Локальна гра недоступна.',
  'error.move': 'Переїзд не вдалося зберегти.',
  'error.currentUnavailable': 'Поточна гра недоступна.',
  'error.hintChanged': 'Поле змінилося під час підготовки підказки.',
  'error.hint': 'Підказку не вдалося підготувати.',
  'error.time': 'Не вдалося зберегти час останньої гри.',
  'error.timer': 'Не вдалося зберегти останній стан таймера.',
  'error.leaving': 'Локальну головоломку не вдалося очистити.',
  'error.opening': 'Цю збережену гру не вдалося відкрити.',
  'error.deleteGame': 'Не вдалося видалити збережену гру.',
  'error.deleteAll': 'Не вдалося видалити збережені ігри.',
  'error.signOut': 'Ви не можете вийти.',
  'error.revoke': 'Сеанси не можна було скасувати.',
  'error.deleteAccount': 'Не вдалося видалити обліковий запис.',
  'error.invalid-request': 'Запит недійсний.',
  'error.invalid-json': 'Запит містить недійсний JSON.',
  'error.unsupported-media-type': 'Запит Content-Type не підтримується.',
  'error.payload-too-large': 'Запит занадто великий.',
  'error.unauthorized': 'Потрібна авторизація.',
  'error.forbidden-origin': 'Це джерело запиту неприпустимо.',
  'error.session-not-found': 'Сеанс гри не знайдено.',
  'error.revision-conflict': 'Поле змінилося до застосування цього ходу.',
  'error.invalid-session': 'Ігровий сеанс недійсний.',
  'error.invalid-action': 'Ця ігрова дія недійсна.',
  'error.invalid-cell': 'Ця клітинка недійсна.',
  'error.immutable-cell': 'Дану клітинку не можна змінити.',
  'error.note-not-allowed': 'У цій клітинці не можна змінювати кандидатів.',
  'error.no-undo': 'Немає дії, яку можна скасувати.',
  'error.no-redo': 'Немає дії для повторення.',
  'error.no-hint': 'Підказка недоступна.',
  'error.stale-hint': 'Поле змінилося після підготовки цієї підказки.',
  'error.persistence-failed': 'Гру не вдалося зберегти.',
  'error.internal-error': 'Не вдалося виконати запит.',
  'error.account-unavailable': 'Функції облікового запису недоступні.',
  'error.account-unauthorized': 'Потрібен дійсний сеанс застосування.',
  'error.csrf-failed': 'Не вдалося підтвердити вхід. Увійдіть знову.',
  'error.account-game-not-found': 'Збережену гру не знайдено.',
  'error.guest-revision-conflict':
    'Локальна гра змінилася до застосування цієї дії.',
  'error.guest-claim-conflict':
    'Цю локальну гру вже збережено в обліковому записі.',
  'error.malformedDescriptor': 'Не вдалося відобразити пояснення.',
  'account.close': 'Закрити панель облікового запису',
  'account.games.title': 'Мої ігри',
  'account.games.deleteAll': 'Видалити все',
  'account.games.deletingAll': 'Видалення всіх…',
  'account.games.empty': 'Ще немає збережених ігор.',
  'account.games.puzzle': 'Головоломка {difficulty}',
  'account.games.finished': 'Готово',
  'account.games.inProgress': 'В роботі',
  'account.games.saved': 'Збережена гра',
  'account.games.open': 'відкритий',
  'account.games.opening': 'Відкриття…',
  'account.games.delete': 'Видалити',
  'account.games.deleting': 'Видалення…',
  'account.signOut': 'Вийти',
  'account.signingOut': 'Вихід…',
  'account.settings': 'Налаштування облікового запису',
  'account.revoke': 'Вийти на всіх пристроях',
  'account.delete': 'Видалити акаунт',
  'board.label': 'Ігрова дошка судоку',
  'board.cell.given': 'подано {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'порожній, кандидати {candidates}',
  'board.cell.empty': 'порожній',
  'board.hint.focus': 'фокус підказки',
  'board.hint.premise': 'докази натяку',
  'board.hint.eliminated': 'кандидат відсторонений',
  'board.hint.conclusion': 'підказка висновок',
  'board.hint.problem': 'потребує корекції',
  'board.hint.extra': 'неможливий кандидат',
  'board.hint.group': 'група {group}',
  'board.hint.chain': 'положення ланцюга {position}',
  'board.paused.title': 'Головоломку призупинено',
  'board.paused.detail': 'Ваш час зупинився.',
  'hint.label': 'Підказка',
  'hint.close': 'Закрити',
  'hint.strategy.grade': 'Стратегія {grade}',
  'hint.applying': 'Застосування підказки…',
  'hint.refreshing': 'Оновлення підказки…',
  'hint.step': 'Крок {current} з {total}',
  'hint.legend.label': 'Легенда візуальної підказки',
  'hint.legend.strong': 'Твердий: повинен містити',
  'hint.legend.weak': 'Пунктир: не можна обидва',
  'hint.legend.implication': 'Стрілка: наслідки',
  'hint.legend.groups': 'A/B: чергування груп',
  'hint.legend.order': 'Числа: ланцюжок',
  'hint.back': 'Назад',
  'hint.next': 'Далі',
  'hint.apply': 'Застосувати підказку',
  'controls.label': 'Управління грою',
  'controls.digit.note': 'Додати або видалити примітку {digit}',
  'controls.digit.enter': 'Введіть {digit}',
  'controls.hint.preparing': 'Підготовка підказки…',
  'controls.hint.preparingDetail':
    'Збереження головоломки видимою під час підготовки наступного кроку.',
  'controls.complete.eyebrow': 'Головоломка готова',
  'controls.complete.title': 'Вирішено в {time}',
  'controls.complete.detail':
    'Підтримуйте ритм з іншою дошкою {difficulty} або виберіть інший рівень.',
  'controls.complete.another': 'Зіграйте інший {difficulty}',
  'controls.complete.replay': 'Повторіть цю головоломку',
  'controls.complete.choose': 'Виберіть інший рівень',
  'controls.pad': 'Цифровий блокнот',
  'controls.pad.notes': 'Цифровий блок, режим нотаток',
  'controls.modes': 'Режими введення',
  'controls.notes.on': 'Примітки до',
  'controls.notes.off': 'Нотатки вимкнені',
  'controls.candidates.on': 'Кандидати на',
  'controls.candidates.off': 'Кандидати геть',
  'controls.actions': 'Дії головоломки',
  'controls.erase': 'Стерти',
  'controls.undo': 'Скасувати',
  'controls.undoing': 'Скасування...',
  'controls.redo': 'Повторити',
  'controls.redoing': 'Переробка…',
  'controls.hint.reveal': 'Розкрийте підказку',
  'controls.shortcuts': 'Комбінації клавіш',
  'controls.shortcuts.move': 'рухатися',
  'controls.shortcuts.arrows': 'клавіші зі стрілками',
  'controls.shortcuts.enter': 'Введіть число',
  'controls.shortcuts.notes': 'Примітки / канд',
  'controls.shortcuts.or': 'або',
  'controls.shortcuts.pause': 'Призупинити або відновити',
  'controls.shortcuts.hint': 'Відкрийте, перейдіть або застосуйте підказку',
  'controls.shortcuts.hintOther': 'Інші елементи керування підказками',
  'hint.target.candidate.visible': 'цього виділеного кандидата',
  'hint.target.candidate.accessible':
    'кандидат {value} у рядку {row}, стовпці {column}',
  'hint.target.cell.visible': 'ця виділена клітинка',
  'hint.target.cell.accessible': 'рядок {row}, стовпець {column}',
  'hint.target.unit.visible': 'це виділено {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'рядок',
  'hint.target.column': 'колонка',
  'hint.target.box': 'коробка',
  'chrome.home': 'Судоку додому',
  'chrome.appearance': 'Зовнішній вигляд',
  'chrome.theme.use': 'Використовуйте тему {theme}',
  'chrome.theme.systemTitle': 'Системна тема ({theme})',
  'chrome.theme.title': 'Тема {theme}',
  'chrome.theme.system': 'система',
  'chrome.theme.systemName': 'система',
  'chrome.theme.light': 'світло',
  'chrome.theme.dark': 'темний',
  'chrome.connection.connecting': 'Підключення',
  'chrome.connection.unavailable': 'Послуга недоступна',
  'chrome.footer.tagline': 'Продумана гра, без відволікань.',
  'chrome.footer.privacy': 'Конфіденційність',
  'chrome.footer.terms': 'Терміни',
  'chrome.footer.input': 'Клавіатура та сенсорна панель готові',
};
