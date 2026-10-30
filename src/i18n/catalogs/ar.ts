import type { MessageCatalog } from './types';

export const ar: MessageCatalog = {
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
    '{count, plural, zero {لا أخطاء} one {خطأ واحد} two {خطآن} few {# أخطاء} many {# خطأً} other {# خطأ}}',
  'board.cell':
    'الصف {row}، العمود {column}، {content}{pending, select, true {، جارٍ التحقق} other {}}{invalid, select, true {، غير صالح} other {}}{hint, select, none {} other {، {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'اللغة',
  'common.language.auto': 'تلقائي',
  'accessibility.language.changed': 'تم تغيير اللغة إلى {language}.',
  'common.difficulty.easy': 'سهل',
  'common.difficulty.medium': 'متوسط',
  'common.difficulty.hard': 'صعب',
  'common.difficulty.expert': 'خبير',
  'common.difficulty.evil': 'الشر',
  'difficulty.easy.name': 'سهل',
  'difficulty.medium.name': 'متوسط',
  'difficulty.hard.name': 'صعب',
  'difficulty.expert.name': 'خبير',
  'difficulty.evil.name': 'الشر',
  'hint.value-correction.title': 'إصلاح هذه القيمة',
  'hint.candidate-correction.title': 'إصلاح هذه الخلية المرشحة',
  'hint.value-correction.summary':
    'تتعارض القيمة الموجودة في {cell} مع اللغز. امسحها قبل المتابعة.',
  'hint.candidate-correction.summary':
    'قبل المتابعة، أعد تحديد مرشحي {cell} بالاعتماد على الأرقام المثبتة في الصف والعمود والمربع.',
  'hint.strategy.summary':
    'اتبع هذه الخطوات الـ {steps} لفهم {strategy} وتطبيقها.',
  'hint.value-correction.observe':
    'تحقق من {cell}. هذه القيمة تتعارض مع اللوحة.',
  'hint.value-correction.conclude':
    'امسح القيمة في {cell} حتى يمكن التحقق من الشبكة المرشحة بعد ذلك.',
  'hint.candidate-correction.observe':
    'تحقق من {cell}. المرشحون لا يتوافقون مع اللوحة.',
  'hint.candidate-correction.compare':
    'أعد تحديد مرشحي هذه الخلية من البداية بالاعتماد على الأرقام المثبتة في الصف والعمود والمربع.',
  'hint.candidate-correction.conclude':
    'اضبط مرشحي {cell} على جميع الأرقام المسموح بها في الصف والعمود والمربع.',
  'hint.strategy.observe':
    'تحقق من الخلايا والمرشحين والصفوف والأعمدة والمربعات المميزة.',
  'hint.strategy.compare': 'قارن القيود المميزة للعثور على النتيجة الحتمية.',
  'hint.strategy.conclude': 'طبّق النتيجة المميزة. هذا النمط هو {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'يشكل المرشح {digit} مجموعتين متناوبتين: A في {group_a} وB في {group_b}.',
  'hint.coloring.alternatives':
    'يعني كل رابط ثابت أن نقطة نهاية واحدة تحتوي بالضبط على {digit}، وبالتالي فإن المرشحين المرتبطين يتناوبون بين المجموعتين A وB. يمكن أن يستبعد التعارض مجموعة واحدة، في حين أن الخلية التي ترى كلا المجموعتين لا يمكن أن تحتوي على {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'يفرض المرشحون المرتبطون نتيجة {colored_digit}. إزالة {candidates}. هذا النمط هو {strategy}.',
  'hint.coloring.place':
    'المرشحين المرتبطين لـ {colored_digit} يفرضون النتيجة. ضع {digit} في {cell}. هذا النمط هو {strategy}.',
  'hint.x-cycle.opening':
    'في {unit}، يمكن لـ {digit} الانتقال إلى {cells} فقط. يجب أن تحتوي إحدى هاتين الخليتين على {digit}.',
  'hint.x-cycle.assume':
    'لنفترض أن {start} لم يكن {digit}. ثم يجب أن يكون {forced} هو {digit}. وهذا يعني أن {blocked} لا يمكن أن يكون {digit}، لذا فإن {unit} يجبر {digit} على {result}.',
  'hint.x-cycle.follow':
    'نظرًا لأن {true_cell} هو {digit}، فلا يمكن أن يكون {blocked} هو {digit}. وبالتالي فإن {unit} يفرض {digit} على {result}.',
  'hint.x-cycle.close':
    'نظرًا لأن {true_cell} هو {digit}، فلا يمكن أن يكون {blocked} هو {digit}. في {unit}، هذا يترك {result} باعتباره المكان الوحيد لـ {digit}.',
  'hint.x-cycle.place':
    'يؤدي الافتراض الأولي بأن {assumption} لم يكن {digit} إلى أن {cell} هو {digit}، لذلك لا يمكن أن يكون الافتراض صحيحًا. ضع {digit} في {cell}. هذا النمط يسمى {strategy}.',
  'hint.xy-chain.start':
    'لا تحتوي {cell} إلا على المرشحين {first_digit} و{second_digit}. إما أن تكون {endpoint_digit}، أو إذا لم تكن {endpoint_digit} فلا بد أن تكون {other_digit}.',
  'hint.xy-chain.assume':
    'افترض أن {start} ليست {endpoint_digit}. عندئذ يجب أن تكون {start_value}. ولأن {start} و{middle} في {first_unit} نفسها، فلا يمكن أن تكون {middle} هي {start_value} ويجب أن تكون {middle_value}. وهذا يمنع {result} من أن تكون {middle_value} في {second_unit}، لذا يجب أن تكون {result_value}.',
  'hint.xy-chain.follow':
    'بما أن {start} هي {start_value}، فلا يمكن أن تكون {middle} في {first_unit} هي {start_value} ويجب أن تكون {middle_value}. ولأن {middle} و{result} في {second_unit} نفسها، فلا يمكن أن تكون {result} هي {middle_value} ويجب أن تكون {result_value}.',
  'hint.xy-chain.reach':
    'بما أن {start} هي {start_value}، فلا يمكن أن تكون {endpoint} هي {shared_digit}. ومرشحها الآخر الوحيد هو {endpoint_digit}، لذا يجب أن تكون {endpoint_digit}.',
  'hint.xy-chain.place':
    'إذا كانت {first_endpoint} هي {endpoint_digit}، فالنهاية الأولى تحتوي على {endpoint_digit}. وإذا لم تكن كذلك، تفرض السلسلة {endpoint_digit} في النهاية الأخرى {second_endpoint}. لذلك تحتوي إحدى النهايتين على الأقل على {endpoint_digit}. ترى {cell} كلتا النهايتين، فلا يمكن أن تكون {endpoint_digit}. ضع {digit} في {cell}. يسمى هذا النمط {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'ابدأ من {cell}. يحتوي صفها وعمودها ومربعها بالفعل على {excluded_digits}.',
  'hint.naked-single.only':
    'لذلك، الرقم {digit} هو الرقم الوحيد الممكن في {cell}.',
  'hint.naked-single.apply':
    'ضع {digit} في {cell}. الخلية التي لا يبقى لها سوى مرشح واحد تسمى {strategy}.',
  'hint.hidden-single.inspect':
    'في {unit}، تحقّق من المواضع التي يمكن أن يوضع فيها {digit}.',
  'hint.hidden-single.blockers':
    'الأرقام {digit} الموضوعة في {blockers} تمنع {digit} من كل خلية فارغة أخرى في {unit}.',
  'hint.hidden-single.only':
    'لم تعد هناك خلية يمكن أن تحتوي {digit} سوى {cell}.',
  'hint.hidden-single.apply':
    'ضع {digit} في {cell}. عندما لا يبقى لرقم سوى خلية واحدة ممكنة في صف أو عمود أو مربع، تسمى هذه الطريقة {strategy}.',
  'hint.naked-pair.inspect':
    'ابدأ في {unit}: لا يمكن أن تحتوي {cell} إلا على {first_digit} أو {second_digit}.',
  'hint.naked-pair.match':
    'تحتوي {cell} على المرشحين نفسيهما: {first_digit} و{second_digit}.',
  'hint.naked-pair.reserve':
    'يجب أن تأخذ هاتان الخليتان {digits} بترتيب ما، لذا لا يمكن أن يبقى المرشح {digit} في أي خلية أخرى في {unit}.',
  'hint.naked-pair.apply':
    'احذف {candidates}؛ هذه الخطوة لا تضع قيمة. هذا النمط هو {strategy}.',
  'hint.naked-triple.first':
    'ابدأ في {unit}: لا يمكن أن تحتوي {cell} إلا على {first_digit} أو {second_digit}.',
  'hint.naked-triple.second':
    'أضف {cell}؛ لا يمكن أن تحتوي إلا على {first_digit} أو {second_digit}.',
  'hint.naked-triple.third':
    'أضف {cell}؛ لا يمكن أن تحتوي إلا على {first_digit} أو {second_digit}. أصبحت الخلايا الثلاث الآن محصورة في {reserved_digits}.',
  'hint.naked-triple.consequence':
    'يجب أن تأخذ هذه الخلايا الثلاث {reserved_digits} بأي ترتيب. لذلك يُحذف {removed_digits} من {cell}، فلا يبقى إلا {remaining_digit}.',
  'hint.naked-triple.apply':
    'ضع {digit} في {cell}. ثلاث خلايا تقتصر مرشحاتها على الأرقام الثلاثة نفسها تكوّن {strategy}.',
  'hint.naked-quad.cell': 'في {unit}، لا تحتوي {cell} إلا على {digits}.',
  'hint.subset-reservation.observe':
    'في {unit}، لا تحتوي {cells} إلا على {digits}.',
  'hint.subset-reservation.explain':
    'تحجز هذه الخلايا {digits} في {unit}، لذلك لا يمكن لأي خلية أخرى هناك أن تحتوي على هذه الأرقام.',
  'hint.subset-reservation.apply':
    'احذف {candidates}. هذا النمط هو {strategy}.',
  'hint.subset-reservation.place':
    'ضع {digit} في {cell}. يُسمّى هذا النمط {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-subset-confinement.explain':
    'لأن {digits} محصورة في هذه الخلايا ضمن {unit}، فلا يمكن أن تحتوي الخلايا على مرشحين آخرين.',
  'hint.hidden-subset-confinement.apply':
    'احذف {candidates} من الخلايا المحصورة. هذا النمط هو {strategy}.',
  'hint.hidden-subset-confinement.place':
    'ضع {digit} في {cell} بعد حذف المرشحين الآخرين. هذا النمط هو {strategy}.',
  'hint.hidden-pair.first': 'في {unit}، لا يظهر المرشح {digit} إلا في {cells}.',
  'hint.hidden-pair.second':
    'المرشح {digit} محصور أيضًا في الخليتين نفسيهما. معًا، يجب أن تشغل {digits} الخليتين {cells} بترتيب ما.',
  'hint.hidden-pair.consequence':
    'هاتان الخليتان محجوزتان لـ {digits}، لذلك يجب حذف المرشحين الآخرين: {candidates}.',
  'hint.hidden-pair.apply': 'احذف {candidates}. يُسمّى هذا النمط {strategy}.',
  'hint.hidden-triple.first':
    'في {unit}، لا يظهر المرشح {digit} إلا في {cells}.',
  'hint.hidden-triple.second':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-triple.third':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-triple.consequence':
    'لأن {digits} محصورة في هذه الخلايا ضمن {unit}، فلا يمكن أن تحتوي الخلايا على مرشحين آخرين.',
  'hint.hidden-triple.apply':
    'احذف {candidates} من الخلايا المحصورة. هذا النمط هو {strategy}.',
  'hint.hidden-quad.first': 'في {unit}، لا يظهر المرشح {digit} إلا في {cells}.',
  'hint.hidden-quad.second':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-quad.third':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-quad.fourth':
    'في {unit}، لا يمكن أن تظهر {digits} إلا في {cells}.',
  'hint.hidden-quad.consequence':
    'لأن {digits} محصورة في هذه الخلايا ضمن {unit}، فلا يمكن أن تحتوي الخلايا على مرشحين آخرين.',
  'hint.hidden-quad.apply':
    'احذف {candidates} من الخلايا المحصورة. هذا النمط هو {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'في {source_unit}، يقتصر المرشح {digit} على {intersection_unit} عند {cells}.',
  'hint.intersection-confinement.explain':
    'نظرًا لأن كل {digit} في {source_unit} يقع في {intersection_unit}، فإن الخلايا الموجودة خارج المصدر ولكن داخل التقاطع لا يمكن أن تحتوي عليه.',
  'hint.intersection-confinement.apply':
    'قم بإزالة المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.intersection-confinement.place':
    'ضع {digit} في {cell} بعد تطبيق التقاطع. هذا النمط هو {strategy}.',
  'hint.fish-confinement.observe':
    'في {base_units}، لا يظهر المرشح {digit} إلا في {cover_units}.',
  'hint.fish-confinement.explain':
    'المرشح {digit} محصور من {base_units} في {cover_units}، لذا يجب أن تستقبله وحدات التغطية عبر مواضع الأساس المميزة.',
  'hint.swordfish.consequence':
    'يجب أن يوضع {digit} واحد من كل من {base_units} ضمن {cover_units}. معًا، تستخدم هذه المواضع كل عمود من الأعمدة الثلاثة مرة واحدة، لذلك لا يمكن أن يبقى أي {digit} آخر فيها.',
  'hint.jellyfish.consequence':
    'يجب أن يوضع {digit} واحد من كل من {base_units} ضمن {cover_units}. معًا، تستخدم هذه المواضع كل عمود من الأعمدة الأربعة مرة واحدة، لذلك لا يمكن أن يبقى أي {digit} آخر فيها.',
  'hint.fish-confinement.apply':
    'احذف المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.x-wing.first':
    'في {base_unit}، لا يظهر المرشح {digit} إلا في {cover_units}.',
  'hint.x-wing.second':
    'وينطبق الأمر نفسه على {base_unit}: لا يظهر المرشح {digit} إلا في {cover_units}. يستخدم الصفان العمودين نفسيهما.',
  'hint.x-wing.consequence':
    'يجب أن يحتوي كل صف من {base_units} على الرقم {digit}، لذلك يجب أن يأخذ كل عمود من {cover_units} الرقم {digit} من أحد هذين الصفين. يمكن حذف بقية مرشحات {digit} من هذين العمودين.',
  'hint.x-wing.apply':
    'احذف المرشح {digit} من {cells}. يُسمى هذا النمط {strategy}.',
  'hint.pivot-wing.observe':
    'في {pivot}، يقوم المرشح {pivot_digits} بتوصيل خلايا الجناح في {wing_cells}.',
  'hint.pivot-wing.explain':
    'كل جناح في {wing_cells} يشترك في مرشح واحد مع المحور في {pivot}، وكلا الجناحين يحتويان على {shared_digit}. أيًا كان المرشح المحوري صحيحًا، يجب أن يحتوي أحد الأجنحة على {shared_digit}.',
  'hint.xy-wing.pivot':
    'لا يبقى في {pivot} سوى المرشحين {digits}، ويجب أن تكون قيمته أحدهما.',
  'hint.xy-wing.case':
    'إذا كانت {pivot} تساوي {pivot_digit}، فلا يمكن أن تكون {wing} مساوية لـ {pivot_digit}. مرشحها الآخر الوحيد هو {shared_digit}، لذا يجب أن تكون {wing} مساوية لـ {shared_digit}.',
  'hint.xy-wing.guarantee':
    'أيًا كان المرشح الصحيح في {pivot}، فلا بد أن يحتوي جناح واحد على الأقل من {wing_cells} على {shared_digit}. لا نحتاج إلى معرفة أيهما.',
  'hint.xy-wing.apply':
    'ترى {cells} كلا الجناحين {wing_cells}. ولأن أحدهما على الأقل يحتوي على {shared_digit}، احذف المرشح {shared_digit} من هذه الخلايا. يسمى هذا النمط {strategy}.',
  'hint.xy-wing.place':
    'ترى {cell} كلا الجناحين {wing_cells}. ولأن أحدهما على الأقل يحتوي على {shared_digit}، فلا يمكن أن تكون {cell} مساوية لـ {shared_digit}. مرشحها الآخر الوحيد هو {digit}، لذا ضع {digit}. يسمى هذا النمط {strategy}.',
  'hint.xyz-wing.pivot':
    'لم يبقَ في {pivot} سوى المرشحين {digits}. ولا بد أن يكون أحدهم صحيحًا.',
  'hint.xyz-wing.case':
    'إذا كانت {pivot} تساوي {pivot_digit}، فلا يمكن أن تساوي {wing} في {unit} نفسها الرقم {pivot_digit}. والمرشح الآخر الوحيد هو {shared_digit}، لذا يجب أن تكون {wing} مساوية له.',
  'hint.xyz-wing.pivot-case':
    'إذا كانت {pivot} تساوي {shared_digit}، فإن خلية الارتكاز نفسها تحتويه بالفعل.',
  'hint.xyz-wing.guarantee':
    'أيًا كان المرشح الصحيح في {pivot}، فلا بد أن تكون إحدى الخلايا {pattern_cells} على الأقل مساوية لـ {shared_digit}. ولا نحتاج إلى معرفة أيها.',
  'hint.xyz-wing.apply':
    'تشترك {target} في {first_unit} مع {first_pattern_cell}، وفي {second_unit} مع {second_pattern_cell}، وفي {third_unit} مع {third_pattern_cell}. وبما أن واحدة على الأقل من هذه الخلايا الثلاث تساوي {shared_digit}، فلا يمكن أن تحتويه {target}. احذف المرشح {shared_digit}. يسمى هذا النمط {strategy}.',
  'hint.strong-link-wing.observe':
    'لا يمكن أن تحتوي كل خلية من {wing_cells} إلا على {digits}.',
  'hint.strong-link-wing.bridge':
    'في {unit}، لا يمكن أن يظهر المرشح {link_digit} إلا في {link_cells}، لذا يجب أن تحتوي خلية واحدة على الأقل منهما على {link_digit}.',
  'hint.strong-link-wing.force':
    'إذا كانت {first_link_cell} تساوي {link_digit}، فلا يمكن أن تكون {first_wing_cell} مساوية لـ {link_digit} ويجب أن تكون {forced_digit}. وإذا كانت {second_link_cell} تساوي {link_digit}، فيجب أن تكون {second_wing_cell} مساوية لـ {forced_digit}. لذلك، واحدة على الأقل من هاتين الخليتين تساوي {forced_digit}.',
  'hint.strong-link-wing.apply':
    'واحدة على الأقل من {wing_cells} تساوي {digit}. احذف المرشح {digit} من {cells} لأن هذه الخلايا ترى كلتيهما. يسمى هذا النمط {strategy}.',
  'hint.strong-link-wing.place':
    'واحدة على الأقل من {wing_cells} تساوي {removed_digit}. احذف المرشح {removed_digit} من {cell} لأنها ترى كلتيهما، ثم ضع {digit} فيها. يسمى هذا النمط {strategy}.',
  'hint.relational-wing.apply':
    'قم بإزالة المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.relational-wing.place':
    'قم بإزالة المرشح {removed_digit} من {cell}، لذا ضع {digit} هناك. هذا النمط هو {strategy}.',
  'hint.bug-plus-one.bivalue':
    'باستثناء {cell}، تحتوي كل خلية من الخلايا {count} الأخرى غير المحلولة على مرشحين اثنين فقط.',
  'hint.bug-plus-one.trivalue':
    'تحتوي {cell} على ثلاثة مرشحين: {digits}، أي أكثر بمرشح واحد من أي خلية أخرى غير محلولة.',
  'hint.bug-plus-one.unit-count':
    'في {unit}، للمرشح {digit} ثلاثة مواضع ممكنة، بينما لكل من {other_digits} موضعان.',
  'hint.bug-plus-one.explain':
    'في {units}، للمرشح {digit} موضع ممكن إضافي مقارنةً بـ {other_digits}. إذا لم تكن {cell} هي {digit}، فستصبح كل الخلايا غير المحلولة ثنائية المرشحين ولن يبقى للحل تفرد. لذلك يجب أن تكون {cell} هي {digit}.',
  'hint.bug-plus-one.place':
    'ضع {digit} في {cell}. استثناء التفرد هذا هو {strategy}.',
  'hint.unique-rectangle.rectangle':
    'الخلايا الأربع التي لم يتم حلها في {cells} تقع في زوايا المستطيل.',
  'hint.unique-rectangle.pair-corners':
    'في {cells}، المرشحون الوحيدون هم {digits}.',
  'hint.unique-rectangle.third-corner':
    '{cell} هو أيضًا {digits} تمامًا. ثلاث زوايا الآن لديها نفس الزوج.',
  'hint.unique-rectangle.expanded-corner':
    'يحتوي {cell} على {digits}. إنها الزاوية الوحيدة التي تحتوي على المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'إذا احتفظ {cell} بأي من المرشحين من الزوج {digits}، فيمكن لجميع الزوايا الأربع تبديل هذين الرقمين دون تغيير أي صف أو عمود أو مربع. سيكون للغز حلان، لذا قم بإزالة {digits} واحتفظ بـ {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'يبقى {digit} فقط في {cell}. ضعه هناك. هذا النمط هو {strategy}.',
  'hint.unique-rectangle.observe':
    'تشكل الخلايا الموجودة في {cells} مستطيلاً وتحتوي جميعها على الزوج {digits}.',
  'hint.unique-rectangle.type1':
    'ثلاث زوايا تحتوي بالضبط على {digits}. إذا استخدم {cell} أيضًا أيًا من الرقمين، فسيسمح المستطيل بوجود حلين قابلين للتبديل.',
  'hint.unique-rectangle.type2-first-expanded':
    'يمكن أن تحتوي {cell} على {pair} أو {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'تحتوي {cell} أيضًا على {pair} و{extra_digit}. لذلك تشترك الزاويتان الموسعتان في المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'يجب أن تكون واحدة على الأقل من {cells} هي {extra_digit} لتجنب حلين قابلين للتبادل. ترى {target} الخليتين، لذلك لا يمكن أن تكون {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'لم يتبقَّ في {cell} سوى {digit}. ضعها هناك. هذا النمط هو {strategy}.',
  'hint.unique-rectangle.type2':
    'تشترك الزاويتان الموسعتان في {cells} في المرشح الإضافي {digit}، لذلك لا يمكن لأي خلية ترى كلا الزاويتين أن تحتوي على {digit}.',
  'hint.unique-rectangle.type3':
    'تتحد الأرقام الإضافية {digits} في المستطيل مع {cells} كمجموعة فرعية محجوزة في {unit}، بحيث يمكن إزالة هذه الأرقام في مكان آخر في تلك الوحدة.',
  'hint.unique-rectangle.type3-first-expanded':
    'تحتوي {cell} أيضًا على {pair}، ومعها المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'تحتوي {cell} أيضًا على {pair}، ومعها المرشح الإضافي {extra_digit}. يجب أن تستخدم إحدى الزاويتين العلويتين رقمًا إضافيًا، وإلا أمكن تبديل {pair} بين الزوايا الأربع والحصول على حلين.',
  'hint.unique-rectangle.type3-partner':
    'لا يمكن أن تحتوي {cell} إلا على {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'يجب أن تستخدم إحدى الخليتين {corners} رقمًا من {digits}، وتستخدم {partner} الرقم الآخر. وبذلك يُحجز الرقمان في {unit}، لذا لا يمكن أن تحتوي {target} على {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'لم يتبقَّ في {cell} سوى {digit}. ضعها هناك. هذا النمط هو {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'تحتوي {cell} أيضًا على {pair}، ومعها المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'تحتوي {cell} أيضًا على {pair}، ومعها المرشح الإضافي {extra_digit}. والآن تحتوي كلتا الزاويتين الموسعتين على زوج المستطيل.',
  'hint.unique-rectangle.type4':
    'يظهر المرشح {digit} في {cells} كزوج مترافق في {unit}، لذلك لا يمكن للمرشح {removed_digit} أن يشغل أي زاوية موسعة دون إنشاء حلول قابلة للتبديل.',
  'hint.unique-rectangle.type4-apply':
    'أزل المرشح {digit} من {cells}. تُسمّى علاقة التفرد هذه {strategy}.',
  'hint.unique-rectangle.apply':
    'إزالة {candidates}. علاقة التفرد هذه هي {strategy}.',
  'hint.unique-rectangle.place':
    'ضع {digit} في {cell} بعد تطبيق علاقة التفرد. هذا النمط هو {strategy}.',
  'hint.implication-chain.observe':
    'ابدأ من {cell}، التي لا تضم سوى المرشحين {digits}.',
  'hint.implication-chain.explain':
    'يشترك {from} و{to} في مرشح ويرى كل منهما الآخر، لذلك لا يمكن أن يكون المرشح صحيحًا في كليهما؛ ويستمر الاستلزام.',
  'hint.implication-chain.apply':
    'يجب أن يحتوي أحد الطرفين على {digit}، لذا احذف المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.narration.apply': 'تطبيق الخصم: ',
  'hint.narration.look-at': 'انظر الى ',
  'hint.narration.value-conflict': '. القيمة المدخلة تتعارض مع اللغز.',
  'hint.narration.clear-value': 'امسح القيمة عند ',
  'hint.narration.clear-value-tail':
    ' لذلك يمكن التحقق من الشبكة المرشحة بعد ذلك.',
  'hint.narration.candidate-inconsistent': '. حالتها المرشحة لا تتفق مع اللغز.',
  'hint.narration.reset-candidates': 'إعادة تعيين المرشح المحدد في ',
  'hint.narration.reset-candidates-tail':
    ' إلى كل رقم تسمح به قيم الصف والعمود والمربع المقبولة.',
  'hint.narration.only-candidate': '. لديها مرشح واحد فقط: ',
  'hint.narration.no-other-digit': 'لأنه لا يمكن لأي رقم آخر الدخول ',
  'hint.narration.place': 'مكان ',
  'hint.narration.naked-single-tail': ' هناك. وهذا ما يسمى عازبة عارية.',
  'hint.narration.in-unit': 'في ',
  'hint.narration.consider-digit': '، فكر في المكان ',
  'hint.narration.can-appear': ' يمكن أن تظهر.',
  'hint.narration.other-cells': 'كل خلية فارغة أخرى في ',
  'hint.narration.cannot-contain': ' لا يمكن أن تحتوي ',
  'hint.narration.leaving-only': '، ولم يبق إلا ',
  'hint.narration.because-unit': 'لان ',
  'hint.narration.still-needs': ' لا يزال يحتاج ',
  'hint.narration.only-cell': ' و ',
  'hint.narration.hidden-single-tail': ' هي الخلية الوحيدة الممكنة، المكان ',
  'hint.narration.hidden-single-name': ' هناك. وهذا ما يسمى واحدة مخفية.',
  'hint.narration.place-result': 'مكان ',
  'hint.narration.in': ' في ',
  'hint.narration.remove': 'إزالة المرشح ',
  'hint.narration.from': ' من ',
  'hint.narration.strategy-result': '. هذه هي نتيجة {strategy}.',
  'welcome.eyebrow': 'لغز جديد',
  'welcome.title': 'اختر الصعوبة الخاصة بك',
  'welcome.lede': 'اختر المستوى، ثم ابدأ عندما تكون جاهزًا.',
  'welcome.difficulty': 'صعوبة',
  'welcome.start': 'ابدأ لغز {difficulty}',
  'welcome.starting': 'جارٍ بدء لغز {difficulty}...',
  'welcome.preview': 'معاينة لغز سودوكو',
  'loading.initial': 'جارٍ تحميل اللغز…',
  'loading.account.eyebrow': 'الحساب',
  'loading.account.title': 'جارٍ حفظ اللغز الخاص بك في حسابك...',
  'loading.account.detail':
    'يبقى تقدمك على هذا الجهاز إلى أن يؤكد الحساب عملية الحفظ.',
  'loading.home.eyebrow': 'سودوكو',
  'loading.home.title': 'العودة إلى الصفحة الأولى…',
  'loading.home.detail': 'التحقق من أحدث واجهة قبل إظهار اختيار المستوى.',
  'loading.restart.eyebrow': 'نفس اللغز',
  'loading.restart.title': 'إعادة تشغيل هذا اللغز ...',
  'loading.restart.detail':
    'إبقاء اللوحة القديمة مغلقة حتى تصبح المحاولة الجديدة جاهزة.',
  'loading.new.eyebrow': 'لغز جديد',
  'loading.new.title': 'تحضير لوحة {difficulty} الخاصة بك...',
  'loading.new.detail': 'إنشاء لغز جديد الآن. سوف تلعب في لحظة.',
  'confirmation.home.eyebrow': 'العودة إلى المنزل؟',
  'confirmation.home.title': 'اترك هذا اللغز',
  'confirmation.home.description':
    'لن يتم فتح تقدمك الحالي تلقائيًا على هذا الجهاز.',
  'confirmation.home.cancel': 'استمر في اللعب',
  'confirmation.home.confirm': 'العودة إلى الصفحة الأولى',
  'confirmation.restart.eyebrow': 'البدء من جديد؟',
  'confirmation.restart.title': 'ابدأ من جديد',
  'confirmation.restart.description':
    'أعد تشغيل هذا اللغز من معطياته الأصلية، أو اختر لغزًا مختلفًا.',
  'confirmation.restart.replay.title': 'أعد تشغيل هذا اللغز',
  'confirmation.restart.replay.description':
    'احتفظ بهذه الفرضيات وأعد ضبط هذه المحاولة.',
  'confirmation.restart.different.title': 'لعب لغز مختلف',
  'confirmation.restart.different.description': 'اختر مستوى للوحة جديدة.',
  'confirmation.restart.different.level': 'مستوى اللغز المختلفة',
  'common.cancel': 'إلغاء',
  'account.confirm.deleteGame.eyebrow': 'هل تريد حذف اللعبة المحفوظة؟',
  'account.confirm.deleteGame.title': 'احذف هذه اللعبة',
  'account.confirm.deleteGame.description':
    'ستتم إزالة هذا اللغز وتقدمه نهائيًا من ألعابي. لا يمكن التراجع عن هذا.',
  'account.confirm.deleteGame.action': 'حذف اللعبة',
  'account.confirm.deleteGame.pending': 'جارٍ حذف اللعبة المحفوظة…',
  'account.confirm.deleteAll.eyebrow': 'هل تريد حذف كل لعبة محفوظة؟',
  'account.confirm.deleteAll.title': 'حذف جميع الألعاب',
  'account.confirm.deleteAll.description':
    'ستتم إزالة كل لغز وكل تقدم في ألعابي نهائيًا. لا يمكن التراجع عن هذا.',
  'account.confirm.deleteAll.action': 'حذف جميع الألعاب',
  'account.confirm.deleteAll.pending': 'حذف جميع الألعاب...',
  'account.confirm.revoke.eyebrow': 'أمان الحساب',
  'account.confirm.revoke.title': 'تسجيل الخروج من جميع الأجهزة',
  'account.confirm.revoke.description':
    'سيتم تسجيل خروجك من جميع الأجهزة، بما فيها هذا الجهاز. سيبقى حسابك وألعابك المحفوظة.',
  'account.confirm.revoke.action': 'تسجيل الخروج من جميع الأجهزة',
  'account.confirm.revoke.pending': 'جارٍ تسجيل الخروج من جميع الأجهزة…',
  'account.confirm.deleteAccount.eyebrow': 'العمل الدائم',
  'account.confirm.deleteAccount.title': 'احذف حسابك',
  'account.confirm.deleteAccount.description':
    'ستتم إزالة هويتك وكل جلسة تم تسجيل الدخول فيها وجميع الألعاب المحفوظة نهائيًا. كتالوج الألغاز المشترك لم يتأثر.',
  'account.confirm.deleteAccount.action': 'حذف الحساب',
  'account.confirm.deleteAccount.pending': 'جارٍ حذف الحساب…',
  'account.confirm.typeEmail': 'اكتب {email} للتأكيد',
  'account.label': 'الحساب',
  'account.continue.title': 'تابع على الأجهزة الأخرى',
  'account.continue.detail':
    'قم بتسجيل الدخول لحفظ اللعبة النشطة لهذا المتصفح تلقائيًا.',
  'account.signIn': 'قم بتسجيل الدخول باستخدام جوجل',
  'account.signIn.short': 'تسجيل الدخول',
  'game.title': 'لغز {difficulty}',
  'game.statusActions': 'حالة اللعبة والإجراءات',
  'game.elapsed': 'الوقت المنقضي',
  'game.mistakes': 'أخطاء {count}',
  'game.resume': 'استئناف',
  'game.pause': 'وقفة',
  'status.resumed': 'تم استئناف اللغز.',
  'status.paused': 'تم إيقاف اللغز مؤقتًا.',
  'status.restarted': 'تم إعادة تشغيل اللغز. محاولة جديدة، نفس اللغز.',
  'status.hintClosed': 'تم إغلاق التلميح. اللغز الخاص بك لم يتغير.',
  'status.strategyApplied':
    'تم تطبيق الإستراتيجية. يمكنك التراجع عن ذلك في خطوة واحدة.',
  'status.correctionApplied':
    'تم تطبيق التصحيح. يمكنك التراجع عن ذلك في خطوة واحدة.',
  'status.hintAlreadyApplied': 'وينعكس هذا التلميح بالفعل في اللوحة.',
  'status.hintRefreshed': 'تغيرت اللوحة، لذا تم تحديث التلميح.',
  'status.accountSaved': 'تم حفظ اللعبة في حسابك.',
  'status.waitBeforeLeaving': 'انتظر التحركات المعلقة قبل مغادرة هذا اللغز.',
  'status.selectEditableCell': 'حدد خلية قابلة للتحرير قبل إدخال رقم.',
  'status.savingAccount': 'جارٍ حفظ لعبتك المحلية في حسابك...',
  'status.restoring': 'جارٍ استعادة اللغز...',
  'status.restored': 'تمت استعادة اللغز المحلي الخاص بك.',
  'status.puzzleReady': 'لغز {difficulty} جاهز.',
  'status.puzzleRestored': 'تمت استعادة لغز {difficulty}.',
  'status.waitBeforeStarting': 'انتظر التحركات المعلقة قبل البدء في لغز آخر.',
  'status.solved': 'تم الحل! عمل رائع.',
  'status.moveSaved': 'تم حفظ النقل.',
  'status.waitBeforeHint': 'انتظر التحركات المعلقة قبل فتح التلميح.',
  'status.hintReady': 'تلميح جاهز. ابدأ بالخطوة 1.',
  'status.openingSaved': 'جارٍ فتح لعبتك المحفوظة…',
  'status.savedDeleted': 'تم حذف اللعبة المحفوظة.',
  'status.allDeleted': 'تم حذف جميع الألعاب المحفوظة.',
  'status.signedOut': 'تم تسجيل الخروج. تظل ألعاب حسابك محفوظة.',
  'status.revoked':
    'تم تسجيل خروجك من جميع الأجهزة. سجّل الدخول مجددًا للمتابعة.',
  'status.accountDeleted': 'تم حذف الحساب والألعاب المحفوظة.',
  'retry.saving': 'حاول الحفظ مرة أخرى',
  'retry.restoring': 'حاول الاستعادة مرة أخرى',
  'retry.connection': 'تحقق من الاتصال',
  'retry.starting': 'حاول البدء مرة أخرى',
  'retry.move': 'أعد محاولة التحرك',
  'retry.hint': 'حاول التلميح مرة أخرى',
  'retry.time': 'أعد المحاولة لتوفير الوقت',
  'retry.progress': 'أعد محاولة حفظ التقدم',
  'retry.leaving': 'حاول المغادرة مرة أخرى',
  'retry.opening': 'حاول الفتح مرة أخرى',
  'retry.deleting': 'حاول الحذف مرة أخرى',
  'retry.signOut': 'حاول تسجيل الخروج مرة أخرى',
  'retry.revoke': 'إعادة محاولة تسجيل الخروج من جميع الأجهزة',
  'retry.deleteAccount': 'حاول حذف الحساب مرة أخرى',
  'error.accountSave': 'لعبتك المحلية آمنة، لكن لا يمكن حفظها في حسابك.',
  'error.restoring': 'لا يمكن استعادة اللغز الخاص بك.',
  'error.connection':
    'لا يمكن الوصول إلى خدمة اللعبة. تحقق من اتصالك وحاول مرة أخرى.',
  'error.http': 'أرجعت خدمة اللعبة الخطأ {status}. يرجى المحاولة مرة أخرى.',
  'error.unavailable': 'خدمة اللعبة غير متاحة مؤقتًا. لوحتك آمنة؛ حاول ثانية.',
  'error.starting': 'لا يمكن بدء اللعبة.',
  'error.signInAgain': 'قم بتسجيل الدخول مرة أخرى لحفظ التحركات.',
  'error.localUnavailable': 'اللعبة المحلية غير متوفرة.',
  'error.move': 'لا يمكن حفظ هذه الخطوة.',
  'error.currentUnavailable': 'اللعبة الحالية غير متوفرة.',
  'error.hintChanged': 'تغيرت اللوحة أثناء إعداد التلميح.',
  'error.hint': 'لا يمكن إعداد التلميح.',
  'error.time': 'لا يمكن حفظ آخر وقت للعبة.',
  'error.timer': 'تعذر حفظ أحدث حالة للمؤقت.',
  'error.leaving': 'لا يمكن مسح اللغز المحلي.',
  'error.opening': 'لا يمكن فتح هذه اللعبة المحفوظة.',
  'error.deleteGame': 'لا يمكن حذف اللعبة المحفوظة.',
  'error.deleteAll': 'لا يمكن حذف الألعاب المحفوظة.',
  'error.signOut': 'لا يمكن تسجيل الخروج.',
  'error.revoke': 'لا يمكن إبطال الجلسات.',
  'error.deleteAccount': 'لا يمكن حذف الحساب.',
  'error.invalid-request': 'الطلب غير صالح.',
  'error.invalid-json': 'يحتوي الطلب على JSON غير صالح.',
  'error.unsupported-media-type': 'نوع محتوى الطلب غير مدعوم.',
  'error.payload-too-large': 'الطلب كبير جدًا.',
  'error.unauthorized': 'مطلوب إذن.',
  'error.forbidden-origin': 'أصل الطلب هذا غير مسموح به.',
  'error.session-not-found': 'لم يتم العثور على جلسة اللعبة.',
  'error.revision-conflict': 'تغيرت اللوحة قبل تطبيق هذه الخطوة.',
  'error.invalid-session': 'جلسة اللعبة غير صالحة.',
  'error.invalid-action': 'إجراء اللعبة هذا غير صالح.',
  'error.invalid-cell': 'هذه الخلية غير صالحة.',
  'error.immutable-cell': 'لا يمكن تغيير خلية معينة.',
  'error.note-not-allowed': 'لا يمكن تغيير المرشحين في هذه الخلية.',
  'error.no-undo': 'لا يوجد أي إجراء للتراجع عنه.',
  'error.no-redo': 'لا يوجد أي إجراء لإعادة.',
  'error.no-hint': 'لا يوجد تلميح متاح.',
  'error.stale-hint': 'تغيرت اللوحة بعد إعداد هذا التلميح.',
  'error.persistence-failed': 'لا يمكن حفظ اللعبة.',
  'error.internal-error': 'لا يمكن إكمال الطلب.',
  'error.account-unavailable': 'ميزات الحساب غير متوفرة.',
  'error.account-unauthorized': 'مطلوب جلسة تطبيق صالحة.',
  'error.csrf-failed': 'تعذر التحقق من تسجيل الدخول هذا. سجّل الدخول مجددًا.',
  'error.account-game-not-found': 'لم يتم العثور على اللعبة المحفوظة.',
  'error.guest-revision-conflict':
    'تغيرت اللعبة المحلية قبل تطبيق هذا الإجراء.',
  'error.guest-claim-conflict': 'تم حفظ هذه اللعبة المحلية بالفعل في حساب.',
  'error.malformedDescriptor': 'لا يمكن عرض التفسير.',
  'account.close': 'إغلاق لوحة الحساب',
  'account.games.title': 'العابي',
  'account.games.deleteAll': 'احذف الكل',
  'account.games.deletingAll': 'جارٍ حذف الكل…',
  'account.games.empty': 'لا توجد ألعاب محفوظة حتى الآن.',
  'account.games.puzzle': 'لغز {difficulty}',
  'account.games.finished': 'انتهى',
  'account.games.inProgress': 'قيد التقدم',
  'account.games.saved': 'اللعبة المحفوظة',
  'account.games.open': 'مفتوح',
  'account.games.opening': 'الافتتاح…',
  'account.games.delete': 'حذف',
  'account.games.deleting': 'جارٍ الحذف...',
  'account.signOut': 'تسجيل الخروج',
  'account.signingOut': 'تسجيل الخروج...',
  'account.settings': 'إعدادات الحساب',
  'account.revoke': 'تسجيل الخروج من جميع الأجهزة',
  'account.delete': 'حذف الحساب',
  'board.label': 'لوحة لعبة سودوكو',
  'board.cell.given': 'نظرا {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'فارغة، المرشحين {candidates}',
  'board.cell.empty': 'فارغ',
  'board.hint.focus': 'التركيز التلميح',
  'board.hint.premise': 'أدلة تلميح',
  'board.hint.eliminated': 'تم القضاء على المرشح',
  'board.hint.conclusion': 'استنتاج تلميح',
  'board.hint.problem': 'يحتاج إلى تصحيح',
  'board.hint.extra': 'مرشح مستحيل',
  'board.hint.group': 'مجموعة {group}',
  'board.hint.chain': 'موقف السلسلة {position}',
  'board.paused.title': 'تم إيقاف اللغز مؤقتًا',
  'board.paused.detail': 'وقتك متوقف',
  'hint.label': 'تلميح',
  'hint.close': 'إغلاق',
  'hint.strategy.grade': 'استراتيجية {grade}',
  'hint.applying': 'جارٍ تطبيق التلميح...',
  'hint.refreshing': 'تلميح منعش…',
  'hint.step': 'الخطوة {current} من {total}',
  'hint.legend.label': 'أسطورة التلميح المرئي',
  'hint.legend.strong': 'الصلبة: يجب أن تحتوي',
  'hint.legend.weak': 'متقطع: لا يمكن كلاهما',
  'hint.legend.implication': 'السهم: ضمنا',
  'hint.legend.groups': 'أ/ب: المجموعات المتناوبة',
  'hint.legend.order': 'الأرقام: ترتيب السلسلة',
  'hint.back': 'العودة',
  'hint.next': 'التالي',
  'hint.apply': 'تطبيق التلميح',
  'controls.label': 'ضوابط اللعبة',
  'controls.digit.note': 'إضافة أو إزالة الملاحظة {digit}',
  'controls.digit.enter': 'أدخل {digit}',
  'controls.hint.preparing': 'جارٍ تحضير التلميح…',
  'controls.hint.preparingDetail':
    'إبقاء اللغز مرئيًا أثناء تحضير الخطوة التالية.',
  'controls.complete.eyebrow': 'اللغز كامل',
  'controls.complete.title': 'تم الحل في {time}',
  'controls.complete.detail':
    'حافظ على الإيقاع مع لوحة {difficulty} أخرى، أو اختر مستوى مختلفًا.',
  'controls.complete.another': 'قم بتشغيل {difficulty} آخر',
  'controls.complete.replay': 'أعد تشغيل هذا اللغز',
  'controls.complete.choose': 'اختر مستوى آخر',
  'controls.pad': 'لوحة الأرقام',
  'controls.pad.notes': 'لوحة الأرقام، وضع الملاحظات',
  'controls.modes': 'أوضاع الإدخال',
  'controls.notes.on': 'ملاحظات على',
  'controls.notes.off': 'الملاحظات معطلة',
  'controls.candidates.on': 'المرشحين على',
  'controls.candidates.off': 'المرشحين قبالة',
  'controls.actions': 'إجراءات اللغز',
  'controls.erase': 'محو',
  'controls.undo': 'تراجع',
  'controls.undoing': 'جارٍ التراجع…',
  'controls.redo': 'إعادة',
  'controls.redoing': 'جارٍ إعادة…',
  'controls.hint.reveal': 'كشف تلميحا',
  'controls.shortcuts': 'اختصارات لوحة المفاتيح',
  'controls.shortcuts.move': 'تحرك',
  'controls.shortcuts.arrows': 'مفاتيح الأسهم',
  'controls.shortcuts.enter': 'أدخل رقما',
  'controls.shortcuts.notes': 'ملاحظات / المرشحين',
  'controls.shortcuts.or': 'أو',
  'controls.shortcuts.pause': 'وقفة أو استئناف',
  'controls.shortcuts.hint': 'افتح أو تقدم أو قم بتطبيق تلميح',
  'controls.shortcuts.hintOther': 'ضوابط تلميح أخرى',
  'hint.target.candidate.visible': 'أبرز هذا المرشح',
  'hint.target.candidate.accessible':
    'المرشح {value} في الصف {row}، العمود {column}',
  'hint.target.cell.visible': 'هذه الخلية المميزة',
  'hint.target.cell.accessible': 'الصف {row}، العمود {column}',
  'hint.target.unit.visible': 'هذا أبرز {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'صف',
  'hint.target.column': 'عمود',
  'hint.target.box': 'مربع',
  'chrome.home': 'سودوكو المنزل',
  'chrome.appearance': 'المظهر',
  'chrome.theme.use': 'استخدم موضوع {theme}',
  'chrome.theme.systemTitle': 'سمة النظام ({theme})',
  'chrome.theme.title': 'موضوع {theme}',
  'chrome.theme.system': 'النظام',
  'chrome.theme.systemName': 'نظام',
  'chrome.theme.light': 'ضوء',
  'chrome.theme.dark': 'داكن',
  'chrome.connection.connecting': 'الاتصال',
  'chrome.connection.unavailable': 'الخدمة غير متوفرة',
  'chrome.footer.tagline': 'اللعب مدروس، دون الانحرافات.',
  'chrome.footer.privacy': 'الخصوصية',
  'chrome.footer.terms': 'الشروط',
  'chrome.footer.input': 'لوحة المفاتيح واللمس جاهزة',
};
