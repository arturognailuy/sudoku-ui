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
  'hint.strategy.conclude':
    'طبّق النتيجة المميزة. يُعرف هذا النمط باسم {strategy}.',
  'hint.coloring.pair':
    'في {unit}، الموضعان الوحيدان الممكنان للرقم {digit} هما {cells}. لا بد أن يوجد الرقم في أحدهما فقط، فسمِّ الاحتمالين A وB.',
  'hint.coloring.chain':
    'تابع السلسلة عبر كل رابط قوي للمرشح {digit}، أي الرابط بين موضعيه الوحيدين في صف أو عمود أو مربع. يجب أن تتعاقب العلامتان على طول السلسلة، فتكون A في {group_a} وB في {group_b}.',
  'hint.coloring.alternatives':
    'إما أن يشغل {digit} جميع خلايا A ولا يشغل أي خلية من B، وإما أن يشغل {digit} جميع خلايا B ولا يشغل أي خلية من A. ولا يلزم معرفة أي الاحتمالين هو الصحيح لإجراء الحذف.',
  'hint.coloring.elimination':
    'تشترك {cell} في وحدة مع موضع A عند {group_a_cell}، وفي وحدة مع موضع B عند {group_b_cell}. وبما أن إحدى المجموعتين لا بد أن تكون الصحيحة، ففي كلتا الحالتين تشترك هذه الخلية في وحدة مع خلية تحتوي على {digit}، لذا لا يمكن أن يبقى هذا الرقم مرشحًا فيها.',
  'hint.coloring.apply':
    'احذف {candidates}. كل خلية مستهدفة تشترك في وحدة مع موضع من كل مجموعة لونية للرقم {colored_digit}؛ وبما أن إحدى المجموعتين لا بد أن تحتوي الرقم، فلا يمكن أن يبقى هذا المرشح في الخلية المستهدفة. يُعرف هذا النمط باسم {strategy}.',
  'hint.coloring.place':
    'المرشحين المرتبطين لـ {colored_digit} يفرضون النتيجة. ضع {digit} في {cell}. هذا النمط هو {strategy}.',
  'hint.x-cycle.opening':
    'في {unit}، لا يتاح {digit} إلا في {cells}، لذا لا بد أن تحتوي إحدى هاتين الخليتين على {digit}.',
  'hint.x-cycle.assume':
    'افترض أن {start} لا تحتوي {digit}. عندئذ يجب أن تكون {forced} هي {digit}، فيُستبعد {digit} من {blocked}، ولا يبقى للرقم {digit} في {unit} سوى {result}.',
  'hint.x-cycle.follow':
    'بما أن {true_cell} تحتوي {digit}، فلا يمكن أن تحتوي {blocked} على {digit}. لذلك لا يبقى للرقم {digit} في {unit} سوى {result}.',
  'hint.x-cycle.close':
    'بما أن {true_cell} تحتوي {digit}، يُستبعد {digit} من {blocked}، فتصبح {result} الموضع الوحيد للرقم {digit} في {unit}.',
  'hint.x-cycle.place':
    'تؤدي نتائج افتراض أن {assumption} لا تحتوي {digit} إلى وجوب وجود {digit} في {cell} نفسها، وهذا يناقض الافتراض الابتدائي. لذا ضع {digit} في {cell}. يُسمّى هذا النمط {strategy}.',
  'hint.xy-chain.start':
    'لا تحتوي {cell} إلا على المرشحين {first_digit} و{second_digit}. فإما أن تكون قيمتها {endpoint_digit}، أو إن لم تكن {endpoint_digit} فلا بد أن تكون {other_digit}.',
  'hint.xy-chain.assume':
    'لنفترض أن {start} لا تحتوي {endpoint_digit}. عندئذ لا بد أن تكون قيمتها {start_value}. وبما أن {start} و{middle} تشتركان في {first_unit}، يُستبعد {start_value} من {middle}، فتتعين فيها قيمة {middle_value}. وعندئذ يُستبعد {middle_value} من {result} داخل {second_unit}، فلا يبقى في {result} سوى {result_value}.',
  'hint.xy-chain.follow':
    'بما أن قيمة {start} هي {start_value}، يُستبعد {start_value} من {middle} في {first_unit}، فتتعين فيها قيمة {middle_value}. وبما أن {middle} و{result} تشتركان في {second_unit}، يُستبعد {middle_value} من {result}، فتتعين فيها قيمة {result_value}.',
  'hint.xy-chain.reach':
    'بما أن قيمة {start} هي {start_value}، يُستبعد {shared_digit} من {endpoint}. ولم يبقَ لها سوى {endpoint_digit}، لذا يجب أن تكون هذه قيمتها.',
  'hint.xy-chain.place':
    'إذا كانت {first_endpoint} تساوي {endpoint_digit}، فالنهاية الأولى تحتوي {endpoint_digit}. وإن لم تكن كذلك، أجبرت السلسلة النهاية الأخرى، {second_endpoint}، على احتواء {endpoint_digit}. لذلك لا بد أن تحتوي إحدى النهايتين على {endpoint_digit}. وبما أن {cell} تشترك في صف أو عمود أو مربع مع كلتا النهايتين، فلا يمكن أن تحتوي {endpoint_digit}. ضع {digit} في {cell}. يُعرف هذا النمط باسم {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'ابدأ من {cell}. يحتوي صفها وعمودها ومربعها بالفعل على {excluded_digits}.',
  'hint.naked-single.only':
    'لذلك، الرقم {digit} هو الرقم الوحيد الممكن في {cell}.',
  'hint.naked-single.apply':
    'ضع {digit} في {cell}. الخلية التي لا يبقى لها سوى مرشح واحد تسمى {strategy}.',
  'hint.hidden-single.inspect':
    'في {unit}، ابحث عن المواضع التي يمكن أن يوضع فيها {digit}.',
  'hint.hidden-single.blockers':
    'وجود الرقم {digit} في الخلايا {blockers} يستبعد {digit} من جميع الخلايا الفارغة الأخرى في {unit}.',
  'hint.hidden-single.only':
    'وهكذا تصبح {cell} الخلية الوحيدة التي ما زالت تقبل {digit}.',
  'hint.hidden-single.apply':
    'ضع {digit} في {cell}. عندما لا يتاح لرقم ما سوى خلية واحدة في صف أو عمود أو مربع، تُسمّى هذه الطريقة {strategy}.',
  'hint.naked-pair.inspect':
    'ابدأ في {unit}: لا يمكن أن تحتوي {cell} إلا على {first_digit} أو {second_digit}.',
  'hint.naked-pair.match':
    'أما الخلية المطابقة، {cell}، فلها المرشحان نفسيهما: {first_digit} و{second_digit}.',
  'hint.naked-pair.reserve':
    'لا بد أن تشغل {digits} هاتين الخليتين بترتيب ما، لذا يُستبعد المرشح {digit} من كل خلية أخرى في {unit}.',
  'hint.naked-pair.apply':
    'احذف {candidates}؛ تقتصر هذه الخطوة على حذف المرشحين ولا تثبّت رقمًا في خلية. يُعرف هذا النمط باسم {strategy}.',
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
  'hint.naked-quad.cell': 'في {unit}، تقتصر مرشحات {cell} على {digits}.',
  'hint.subset-reservation.observe':
    'في {unit}، لا تحتوي {cells} إلا على {digits}.',
  'hint.subset-reservation.explain':
    'لا بد أن تتوزع {digits} على الخلايا المميزة داخل {unit}، لذا تُحذف هذه الأرقام من مرشحات جميع الخلايا الأخرى في الوحدة.',
  'hint.subset-reservation.apply':
    'احذف {candidates}. هذا النمط هو {strategy}.',
  'hint.subset-reservation.place':
    'ضع {digit} في {cell}. يُعرف هذا النمط باسم {strategy}.',
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
  'hint.hidden-triple.second': 'في {unit}، تنحصر {digits} في {cells}.',
  'hint.hidden-triple.third': 'في {unit}، تنحصر {digits} في {cells}.',
  'hint.hidden-triple.consequence':
    'بما أن {digits} محصورة في هذه الخلايا داخل {unit}، فلا يمكن أن تحتوي تلك الخلايا على مرشحين آخرين.',
  'hint.hidden-triple.apply':
    'احذف {candidates} من الخلايا المحصورة. يُعرف هذا النمط باسم {strategy}.',
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
    'احذف {candidates} من الخلايا المحصورة. يُسمّى هذا النمط {strategy}.',
  'hint.pointing-pair.first':
    'في {source_unit}، ابدأ بالمرشح {digit} في {cell}. تحقّق من الموضع الآخر الممكن للرقم {digit} داخل هذا المربع.',
  'hint.pointing-pair.second':
    'الموضع الآخر الوحيد للرقم {digit} في {source_unit} هو {cell}. كلا الموضعين يقعان في {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'لا بد أن يقع الرقم {digit} في أحد هذين الموضعين عند تقاطع {source_unit} مع {intersection_unit}. لذلك احذف {candidate} من بقية {intersection_unit}.',
  'hint.pointing-pair.apply':
    'لم يبقَ في {cell} سوى المرشح {digit}. ضع {digit} في هذه الخلية. يُسمّى هذا النمط {strategy}.',
  'hint.intersection-confinement.observe':
    'في {source_unit}، يقتصر المرشح {digit} على {intersection_unit} عند {cells}.',
  'hint.intersection-confinement.explain':
    'نظرًا لأن كل {digit} في {source_unit} يقع في {intersection_unit}، فإن الخلايا الموجودة خارج المصدر ولكن داخل التقاطع لا يمكن أن تحتوي عليه.',
  'hint.intersection-confinement.apply':
    'قم بإزالة المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.intersection-confinement.place':
    'ضع {digit} في {cell} بعد تطبيق التقاطع. هذا النمط هو {strategy}.',
  'hint.fish-confinement.observe':
    'في {base_units}، ينحصر المرشح {digit} في {cover_units}.',
  'hint.fish-confinement.explain':
    'المرشح {digit} محصور من {base_units} في {cover_units}، لذا يجب أن تستقبله وحدات التغطية عبر مواضع الأساس المميزة.',
  'hint.swordfish.consequence':
    'لا بد من وضع {digit} مرةً في كل وحدة من {base_units}، ضمن {cover_units}. وبذلك تُشغل وحدات التغطية الثلاث واحدةً واحدةً، فلا يمكن أن يبقى فيها أي مرشح آخر للرقم {digit}.',
  'hint.jellyfish.consequence':
    'لا بد من وضع {digit} مرةً في كل وحدة من {base_units}، ضمن {cover_units}. وبذلك تُشغل وحدات التغطية الأربع واحدةً واحدةً، فلا يمكن أن يبقى فيها أي مرشح آخر للرقم {digit}.',
  'hint.fish-confinement.apply':
    'احذف المرشح {digit} من {cells}. يُعرف هذا النمط باسم {strategy}.',
  'hint.x-wing.first': 'في {base_unit}، ينحصر المرشح {digit} في {cover_units}.',
  'hint.x-wing.second':
    'ينطبق الأمر نفسه في {base_unit}: ينحصر المرشح {digit} في {cover_units}. وهكذا تشترك وحدتا الأساس في وحدتي التغطية نفسيهما.',
  'hint.x-wing.consequence':
    'لا بد من وضع {digit} مرةً في كل وحدة من {base_units}، ضمن {cover_units}. وبذلك يشغل موضعا {digit} وحدتي التغطية كلتيهما، فلا يبقى {digit} مرشحًا في أي موضع آخر منهما.',
  'hint.x-wing.apply':
    'احذف المرشح {digit} من {cells}. يُعرف هذا النمط باسم {strategy}.',
  'hint.pivot-wing.observe':
    'في {pivot}، يقوم المرشح {pivot_digits} بتوصيل خلايا الجناح في {wing_cells}.',
  'hint.pivot-wing.explain':
    'كل جناح في {wing_cells} يشترك في مرشح واحد مع المحور في {pivot}، وكلا الجناحين يحتويان على {shared_digit}. أيًا كان المرشح المحوري صحيحًا، يجب أن يحتوي أحد الأجنحة على {shared_digit}.',
  'hint.xy-wing.pivot':
    'لا يبقى في {pivot} سوى المرشحين {digits}، ولا بد أن تكون قيمتها أحدهما.',
  'hint.xy-wing.case':
    'إذا كانت قيمة {pivot} هي {pivot_digit}، فلا يمكن أن يكون {pivot_digit} مرشحًا في {wing}. والمرشح الآخر الوحيد في {wing} هو {shared_digit}، لذا لا بد أن تكون قيمتها {shared_digit}.',
  'hint.xy-wing.guarantee':
    'أيًا كان المرشح الصحيح في {pivot}، فلا بد أن تحتوي إحدى خليتي الجناح في {wing_cells} على {shared_digit}. ولا يلزمنا تحديد أيتهما.',
  'hint.xy-wing.apply':
    'ترى {cells} كلا الجناحين {wing_cells}. ولأن أحدهما على الأقل يحتوي على {shared_digit}، احذف المرشح {shared_digit} من هذه الخلايا. يسمى هذا النمط {strategy}.',
  'hint.xy-wing.place':
    'تشترك {cell} في وحدة مع كل جناح من {wing_cells}. وبما أن أحدهما على الأقل يحتوي {shared_digit}، فلا يمكن أن تحتوي {cell} على {shared_digit}. لم يبقَ لها سوى المرشح {digit}، فضعه فيها. يُعرف هذا النمط باسم {strategy}.',
  'hint.xyz-wing.pivot':
    'تقتصر مرشحات {pivot} على {digits}، فلا بد أن تكون قيمتها واحدًا منها.',
  'hint.xyz-wing.case':
    'تشترك {pivot} و{wing} في {unit}. فإذا كانت قيمة {pivot} هي {pivot_digit}، استُبعد {pivot_digit} من {wing}، ولم يبقَ لها سوى {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'إذا كانت قيمة {pivot} هي {shared_digit}، فإن خلية الارتكاز نفسها تحتوي بالفعل على هذا الرقم.',
  'hint.xyz-wing.guarantee':
    'مهما يكن المرشح الصحيح في {pivot}، فلا بد أن تحتوي واحدة على الأقل من خلايا النمط {pattern_cells} على {shared_digit}، ولا نحتاج إلى تحديد أيها.',
  'hint.xyz-wing.apply':
    'تشترك {target} في {first_unit} مع {first_pattern_cell}، وفي {second_unit} مع {second_pattern_cell}، وفي {third_unit} مع {third_pattern_cell}. ولأن واحدة على الأقل من هذه الخلايا الثلاث تحتوي {shared_digit}، فلا يمكن أن تحتويه {target}. احذف المرشح {shared_digit} منها. يُعرف هذا النمط باسم {strategy}.',
  'hint.strong-link-wing.observe':
    'تقتصر مرشحات كل خلية من {wing_cells} على {digits}.',
  'hint.strong-link-wing.bridge':
    'في {unit}، لا يتاح المرشح {link_digit} إلا في {link_cells}، لذا لا بد أن تحتوي واحدة على الأقل من هاتين الخليتين على {link_digit}.',
  'hint.strong-link-wing.force':
    'إذا احتوت {first_link_cell} على {link_digit}، استُبعد {link_digit} من {first_wing_cell}، فأصبح مرشحها الآخر {forced_digit} حتميًا. وإذا احتوت {second_link_cell} على {link_digit}، انطبقت النتيجة نفسها على {second_wing_cell}. لذلك لا بد أن تحتوي إحدى خليتي الجناح على {forced_digit}.',
  'hint.strong-link-wing.apply':
    'واحدة على الأقل من {wing_cells} تساوي {digit}. احذف المرشح {digit} من {cells} لأن هذه الخلايا ترى كلتيهما. يسمى هذا النمط {strategy}.',
  'hint.strong-link-wing.place':
    'لا بد أن تحتوي إحدى الخليتين في {wing_cells} على {removed_digit}. ولأن {cell} تشترك في وحدة مع كلتيهما، احذف منها المرشح {removed_digit} ثم ضع فيها {digit}. يُعرف هذا النمط باسم {strategy}.',
  'hint.relational-wing.apply':
    'قم بإزالة المرشح {digit} من {cells}. هذا النمط هو {strategy}.',
  'hint.relational-wing.place':
    'قم بإزالة المرشح {removed_digit} من {cell}، لذا ضع {digit} هناك. هذا النمط هو {strategy}.',
  'hint.bug-plus-one.bivalue':
    'كل الخلايا غير المحلولة، باستثناء {cell}، لها مرشحان بالضبط، وعدد هذه الخلايا {count}.',
  'hint.bug-plus-one.trivalue':
    'أما {cell} فلديها ثلاثة مرشحين فقط: {digits}، أي إن لديها مرشحًا واحدًا أكثر من كل خلية أخرى غير محلولة.',
  'hint.bug-plus-one.unit-count':
    'في {unit}، يتاح للمرشح {digit} ثلاثة مواضع، بينما لا يتاح لكل رقم من {other_digits} سوى موضعين.',
  'hint.bug-plus-one.explain':
    'داخل {units}، يتاح للمرشح {digit} موضع إضافي مقارنةً بـ {other_digits}. ولو استُبعد هذا الرقم من {cell}، لأصبح لكل خلية غير محلولة مرشحان بالضبط، ولما بقي للغز حل فريد. لذلك لا بد أن تكون قيمتها {digit}.',
  'hint.bug-plus-one.place':
    'ضع {digit} في {cell}. يكشف نمط المرشح الزائد هذا القيمة اللازمة للحفاظ على تفرد الحل، ويُسمّى {strategy}.',
  'hint.unique-rectangle.rectangle':
    'تشكل الخلايا الأربع غير المحلولة في {cells} زوايا مستطيل.',
  'hint.unique-rectangle.pair-corners':
    'لكل خلية من {cells} مجموعة المرشحين نفسها بالضبط: {digits}.',
  'hint.unique-rectangle.third-corner':
    'تقتصر مرشحات {cell} أيضًا على {digits}، وبذلك تشترك ثلاث زوايا في الزوج نفسه.',
  'hint.unique-rectangle.expanded-corner':
    'مرشحات {cell} هي {digits}، وهي الزاوية الوحيدة التي تضم المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'لو أخذت {cell} أيًّا من قيمتي {digits}، لأمكن تبديل القيمتين بين الزوايا الأربع من دون تغيير أي صف أو عمود أو مربع، فينشأ حل ثانٍ. احذف {digits} وأبقِ {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'لم يبقَ في {cell} سوى {digit}، فضعه فيها. يُعرف هذا النمط باسم {strategy}.',
  'hint.unique-rectangle.observe':
    'تشكل الخلايا الموجودة في {cells} مستطيلاً وتحتوي جميعها على الزوج {digits}.',
  'hint.unique-rectangle.type1':
    'ثلاث زوايا تحتوي بالضبط على {digits}. إذا استخدم {cell} أيضًا أيًا من الرقمين، فسيسمح المستطيل بوجود حلين قابلين للتبديل.',
  'hint.unique-rectangle.type2-first-expanded':
    'مرشحات {cell} هي {pair}، إضافةً إلى {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'مرشحات {cell} أيضًا هي {pair}، إضافةً إلى {extra_digit}، لذا فإن زاويتي المستطيل اللتين تحتويان على مرشحات إضافية تشتركان في المرشح {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'لمنع تبادل قيم المستطيل من إنتاج حلّين مختلفين، لا بد أن تحتوي خلية واحدة على الأقل من {cells} على {extra_digit}. ولأن {target} تشترك في وحدة مع كلتا الخليتين، فلا يمكن أن تحتوي على هذا المرشح.',
  'hint.unique-rectangle.type2-place':
    'لم يبقَ في {cell} سوى {digit}، فضعه فيها. يُعرف هذا النمط باسم {strategy}.',
  'hint.unique-rectangle.type2':
    'تشترك الزاويتان الموسعتان في {cells} في المرشح الإضافي {digit}، لذلك لا يمكن لأي خلية ترى كلا الزاويتين أن تحتوي على {digit}.',
  'hint.unique-rectangle.type3':
    'تتحد الأرقام الإضافية {digits} في المستطيل مع {cells} كمجموعة فرعية محجوزة في {unit}، بحيث يمكن إزالة هذه الأرقام في مكان آخر في تلك الوحدة.',
  'hint.unique-rectangle.type3-first-expanded':
    'تحتوي {cell} أيضًا على الزوج {pair}، ومعه المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'تحتوي {cell} أيضًا على الزوج {pair}، إضافةً إلى المرشح {extra_digit}. ولا بد أن تأخذ إحدى زاويتي المستطيل ذواتي المرشحات الإضافية رقمًا إضافيًا، وإلا أمكن تبديل {pair} بين الزوايا الأربع والحصول على حلين.',
  'hint.unique-rectangle.type3-partner': 'تقتصر مرشحات {cell} على {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'لا بد أن تستخدم إحدى الخليتين في {corners} رقمًا من {digits}، وأن تستخدم {partner} الرقم الآخر. وهكذا يُحجز الرقمان داخل {unit}، فلا يمكن أن تحتوي {target} على {removed_digit}.',
  'hint.unique-rectangle.type3-place':
    'لم يبقَ في {cell} سوى {digit}. ضعه فيها. يُعرف هذا النمط باسم {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'تحتوي {cell} أيضًا على الزوج {pair}، ومعه المرشح الإضافي {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'تحتوي {cell} أيضًا على الزوج {pair}، إضافةً إلى المرشح {extra_digit}. وبذلك تتضمن كلتا الزاويتين الموسعتين زوج المستطيل نفسه مع مرشح إضافي.',
  'hint.unique-rectangle.type4':
    'لا يظهر المرشح {digit} داخل {unit} إلا في الخليتين {cells}، لذلك لا بد أن تحتوي إحداهما عليه. ومن ثم لا يمكن أن يكون {removed_digit} قيمةً لأي من زاويتي المستطيل اللتين تحتويان على مرشحات إضافية، وإلا أمكن تبادل قيم المستطيل والحصول على حل صحيح ثانٍ.',
  'hint.unique-rectangle.type4-apply':
    'احذف المرشح {digit} من {cells}. تُسمّى علاقة التفرد هذه {strategy}.',
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
