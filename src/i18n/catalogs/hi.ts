import type { MessageCatalog } from './types';

export const hi: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, one {# गलती} other {# गलतियाँ}}',
  'board.cell':
    'पंक्ति {row}, स्तंभ {column}, {content}{pending, select, true {, जाँच जारी} other {}}{invalid, select, true {, अमान्य} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'भाषा',
  'common.language.auto': 'ऑटो',
  'accessibility.language.changed': 'भाषा बदलकर {language} कर दी गई.',
  'common.difficulty.easy': 'आसान',
  'common.difficulty.medium': 'मध्यम',
  'common.difficulty.hard': 'कठिन',
  'common.difficulty.expert': 'विशेषज्ञ',
  'common.difficulty.evil': 'दुष्ट',
  'difficulty.easy.name': 'आसान',
  'difficulty.medium.name': 'मध्यम',
  'difficulty.hard.name': 'कठिन',
  'difficulty.expert.name': 'विशेषज्ञ',
  'difficulty.evil.name': 'दुष्ट',
  'hint.value-correction.title': 'इस मान को ठीक करें',
  'hint.candidate-correction.title': 'इस उम्मीदवार सेल को ठीक करें',
  'hint.value-correction.summary':
    '{cell} का मान पहेली से टकराता है। जारी रखने से पहले इसे साफ़ करें.',
  'hint.candidate-correction.summary':
    'आगे बढ़ने से पहले, पंक्ति, स्तंभ और बॉक्स में भरे अंकों के आधार पर {cell} के उम्मीदवार फिर से तय करें।',
  'hint.strategy.summary':
    '{strategy} को समझने और लागू करने के लिए ये {steps} चरण पूरे करें।',
  'hint.value-correction.observe':
    '{cell} जाँचें। यह अंक बोर्ड से मेल नहीं खाता।',
  'hint.value-correction.conclude':
    '{cell} पर मान साफ़ करें ताकि उम्मीदवार ग्रिड की अगली जाँच की जा सके।',
  'hint.candidate-correction.observe':
    '{cell} जाँचें। इसके उम्मीदवार बोर्ड से मेल नहीं खाते।',
  'hint.candidate-correction.compare':
    'पंक्ति, स्तंभ और बॉक्स में भरे अंकों के आधार पर इस खाने के उम्मीदवार फिर से तय करें।',
  'hint.candidate-correction.conclude':
    '{cell} के उम्मीदवारों को उसकी पंक्ति, स्तंभ और बॉक्स में अनुमत सभी अंकों पर रीसेट करें।',
  'hint.strategy.observe':
    'हाइलाइट किए गए खाने, उम्मीदवार, पंक्तियाँ, स्तंभ और बॉक्स जाँचें।',
  'hint.strategy.compare':
    'निश्चित परिणाम खोजने के लिए हाइलाइट की गई बाधाओं की तुलना करें।',
  'hint.strategy.conclude':
    'हाइलाइट किया गया परिणाम लागू करें। यह पैटर्न {strategy} है।',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'उम्मीदवार {digit} दो वैकल्पिक समूह बनाते हैं: A {group_a} पर और B {group_b} पर।',
  'hint.coloring.alternatives':
    'प्रत्येक ठोस लिंक का अर्थ है कि बिल्कुल एक समापन बिंदु में {digit} शामिल है, इसलिए लिंक किए गए उम्मीदवार समूह ए और बी के बीच वैकल्पिक होते हैं। एक संघर्ष एक समूह को खारिज कर सकता है, जबकि एक सेल जो दोनों समूहों को देखता है उसमें {digit} नहीं हो सकता है।',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'लिंक किए गए उम्मीदवार {colored_digit} के परिणाम को बाध्य करते हैं। {candidates} हटाएं. यह पैटर्न {strategy} है।',
  'hint.coloring.place':
    '{colored_digit} के लिए लिंक किए गए उम्मीदवार परिणाम को बाध्य करते हैं। {digit} को {cell} में रखें। यह पैटर्न {strategy} है।',
  'hint.x-cycle.opening':
    '{unit} में, {digit} केवल {cells} में ही जा सकता है। इन दो कोशिकाओं में से एक में {digit} अवश्य होना चाहिए।',
  'hint.x-cycle.assume':
    'मान लीजिए कि {start}, {digit} नहीं थे। तब {forced} को {digit} होना होगा। इसका मतलब है कि {blocked}, {digit} नहीं हो सकता है, इसलिए {unit}, {digit} को {result} में बदल देता है।',
  'hint.x-cycle.follow':
    'चूँकि {true_cell} {digit} है, {blocked} {digit} नहीं हो सकता। इसलिए {unit}, {digit} को {result} में बाध्य करता है।',
  'hint.x-cycle.close':
    'चूँकि {true_cell} {digit} है, {blocked} {digit} नहीं हो सकता। {unit} में, {digit} के लिए {result} ही एकमात्र स्थान रह जाता है।',
  'hint.x-cycle.place':
    'प्रारंभिक धारणा कि {assumption}, {digit} नहीं था, {cell} के {digit} होने की ओर वापस ले जाता है, इसलिए यह धारणा सत्य नहीं हो सकती। {digit} को {cell} में रखें। इस पैटर्न को {strategy} कहा जाता है.',
  'hint.xy-chain.start':
    '{cell} में केवल {first_digit} और {second_digit} उम्मीदवार हैं। या तो यह {endpoint_digit} है, या यदि यह {endpoint_digit} नहीं है तो इसे {other_digit} होना होगा।',
  'hint.xy-chain.assume':
    'मान लें कि {start}, {endpoint_digit} नहीं है। तब इसे {start_value} होना होगा। क्योंकि {start} और {middle}, {first_unit} साझा करते हैं, {middle}, {start_value} नहीं हो सकता और उसे {middle_value} होना होगा। इससे {second_unit} में {result}, {middle_value} नहीं हो सकता, इसलिए उसे {result_value} होना होगा।',
  'hint.xy-chain.follow':
    'क्योंकि {start}, {start_value} है, {first_unit} में {middle}, {start_value} नहीं हो सकता और उसे {middle_value} होना होगा। क्योंकि {middle} और {result}, {second_unit} साझा करते हैं, {result}, {middle_value} नहीं हो सकता और उसे {result_value} होना होगा।',
  'hint.xy-chain.reach':
    'क्योंकि {start}, {start_value} है, {endpoint}, {shared_digit} नहीं हो सकता। उसका एकमात्र दूसरा उम्मीदवार {endpoint_digit} है, इसलिए उसे {endpoint_digit} होना होगा।',
  'hint.xy-chain.place':
    'यदि {first_endpoint}, {endpoint_digit} है तो पहले छोर में {endpoint_digit} है। यदि नहीं, तो श्रृंखला दूसरे छोर {second_endpoint} में {endpoint_digit} को बाध्य करती है। इसलिए कम से कम एक छोर {endpoint_digit} है। {cell} दोनों छोरों को देखता है, इसलिए यह {endpoint_digit} नहीं हो सकता। {cell} में {digit} भरें। इस पैटर्न को {strategy} कहते हैं।',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    '{cell} से शुरू करें। इसकी पंक्ति, स्तंभ और बॉक्स में {excluded_digits} पहले से मौजूद हैं।',
  'hint.naked-single.only': 'इसलिए {cell} में केवल {digit} ही रखा जा सकता है।',
  'hint.naked-single.apply':
    '{cell} में {digit} रखें। केवल एक उम्मीदवार वाली सेल को {strategy} कहते हैं।',
  'hint.hidden-single.inspect':
    '{unit} में देखें कि {digit} कहाँ रखा जा सकता है।',
  'hint.hidden-single.blockers':
    '{blockers} में रखे हुए {digit}, {unit} की बाकी सभी खाली कोशिकाओं से {digit} को बाहर कर देते हैं।',
  'hint.hidden-single.only': 'अब केवल {cell} में ही {digit} हो सकता है।',
  'hint.hidden-single.apply':
    '{cell} में {digit} रखें। जब किसी अंक के लिए पंक्ति, स्तंभ या बॉक्स में केवल एक संभव कोशिका बचती है, तो उसे {strategy} कहते हैं।',
  'hint.naked-pair.inspect':
    '{unit} से शुरू करें: {cell} में केवल {first_digit} या {second_digit} हो सकता है।',
  'hint.naked-pair.match':
    '{cell} में भी यही दो उम्मीदवार हैं: {first_digit} और {second_digit}।',
  'hint.naked-pair.reserve':
    'इन दोनों खाने में {digits} किसी क्रम में आने चाहिए, इसलिए उम्मीदवार {digit}, {unit} के किसी अन्य खाने में नहीं रह सकता।',
  'hint.naked-pair.apply':
    '{candidates} हटाएँ; इस चरण में कोई अंक नहीं भरा जाता। यह पैटर्न {strategy} है।',
  'hint.naked-triple.first':
    '{unit} से शुरू करें: {cell} में केवल {first_digit} या {second_digit} आ सकता है।',
  'hint.naked-triple.second':
    '{cell} को जोड़ें; इसमें केवल {first_digit} या {second_digit} आ सकता है।',
  'hint.naked-triple.third':
    '{cell} को जोड़ें; इसमें केवल {first_digit} या {second_digit} आ सकता है। अब इन तीनों खानों में केवल {reserved_digits} आ सकते हैं।',
  'hint.naked-triple.consequence':
    'इन तीनों खानों में किसी क्रम में {reserved_digits} ही आएँगे। इसलिए {cell} से {removed_digits} हटते हैं और केवल {remaining_digit} बचता है।',
  'hint.naked-triple.apply':
    '{cell} में {digit} भरें। जिन तीन खानों के उम्मीदवार उन्हीं तीन अंकों तक सीमित हों, वे {strategy} बनाते हैं।',
  'hint.naked-quad.cell': '{unit} में {cell} में केवल {digits} हो सकते हैं।',
  'hint.subset-reservation.observe':
    '{unit} में {cells} में केवल {digits} हो सकते हैं।',
  'hint.subset-reservation.explain':
    'ये खाने {unit} में {digits} को सुरक्षित रखते हैं, इसलिए वहाँ कोई दूसरा खाना इन अंकों को नहीं रख सकता।',
  'hint.subset-reservation.apply':
    '{candidates} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.subset-reservation.place':
    '{cell} में {digit} रखें। इस पैटर्न को {strategy} कहते हैं।',
  'hint.hidden-subset-confinement.observe':
    '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-subset-confinement.explain':
    'क्योंकि {digits}, {unit} की इन्हीं कोशिकाओं तक सीमित हैं, इन कोशिकाओं में कोई अन्य उम्मीदवार नहीं हो सकता।',
  'hint.hidden-subset-confinement.apply':
    'सीमित कोशिकाओं से {candidates} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.hidden-subset-confinement.place':
    'अन्य उम्मीदवार हटाने के बाद {cell} में {digit} रखें। यह पैटर्न {strategy} है।',
  'hint.hidden-pair.first':
    '{unit} में उम्मीदवार {digit} केवल {cells} में आता है।',
  'hint.hidden-pair.second':
    'उम्मीदवार {digit} भी इन्हीं दो कोशिकाओं तक सीमित है। इसलिए {digits} को किसी क्रम में {cells} में होना होगा।',
  'hint.hidden-pair.consequence':
    'ये दोनों कोशिकाएँ {digits} के लिए आरक्षित हैं, इसलिए अन्य उम्मीदवार नहीं रह सकते: {candidates}।',
  'hint.hidden-pair.apply':
    '{candidates} हटाएँ। इस पैटर्न को {strategy} कहते हैं।',
  'hint.hidden-triple.first':
    '{unit} में उम्मीदवार {digit} केवल {cells} में आता है।',
  'hint.hidden-triple.second':
    '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-triple.third':
    '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-triple.consequence':
    'क्योंकि {digits}, {unit} की इन्हीं कोशिकाओं तक सीमित हैं, इन कोशिकाओं में कोई अन्य उम्मीदवार नहीं हो सकता।',
  'hint.hidden-triple.apply':
    'सीमित कोशिकाओं से {candidates} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.hidden-quad.first':
    '{unit} में उम्मीदवार {digit} केवल {cells} में आता है।',
  'hint.hidden-quad.second': '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-quad.third': '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-quad.fourth': '{unit} में {digits} केवल {cells} में आ सकते हैं।',
  'hint.hidden-quad.consequence':
    'क्योंकि {digits}, {unit} की इन्हीं कोशिकाओं तक सीमित हैं, इन कोशिकाओं में कोई अन्य उम्मीदवार नहीं हो सकता।',
  'hint.hidden-quad.apply':
    'सीमित कोशिकाओं से {candidates} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    '{source_unit} में, उम्मीदवार {digit} {cells} पर {intersection_unit} तक सीमित है।',
  'hint.intersection-confinement.explain':
    'क्योंकि {source_unit} में प्रत्येक {digit} {intersection_unit} में निहित है, स्रोत के बाहर लेकिन चौराहे के अंदर की कोशिकाएं इसे शामिल नहीं कर सकती हैं।',
  'hint.intersection-confinement.apply':
    '{cells} से उम्मीदवार {digit} को हटा दें। यह पैटर्न {strategy} है।',
  'hint.intersection-confinement.place':
    'चौराहा लगाने के बाद {digit} को {cell} में रखें। यह पैटर्न {strategy} है।',
  'hint.fish-confinement.observe':
    '{base_units} में उम्मीदवार {digit} केवल {cover_units} में दिखाई देता है।',
  'hint.fish-confinement.explain':
    'उम्मीदवार {digit}, {base_units} से {cover_units} तक सीमित है, इसलिए इन कवर इकाइयों को हाइलाइट किए गए आधार स्थानों से यह अंक मिलना चाहिए।',
  'hint.swordfish.consequence':
    '{base_units} में से हर एक का एक {digit}, {cover_units} में होना चाहिए। ये स्थान मिलकर तीनों स्तंभों का एक-एक बार उपयोग करते हैं, इसलिए उनमें कोई और {digit} नहीं रह सकता।',
  'hint.jellyfish.consequence':
    '{base_units} में से हर एक का एक {digit}, {cover_units} में होना चाहिए। ये स्थान मिलकर चारों स्तंभों का एक-एक बार उपयोग करते हैं, इसलिए उनमें कोई और {digit} नहीं रह सकता।',
  'hint.fish-confinement.apply':
    '{cells} से उम्मीदवार {digit} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.x-wing.first':
    '{base_unit} में उम्मीदवार {digit} केवल {cover_units} में आता है।',
  'hint.x-wing.second':
    '{base_unit} में भी यही स्थिति है: उम्मीदवार {digit} केवल {cover_units} में आता है। दोनों पंक्तियाँ उन्हीं दो स्तंभों का उपयोग करती हैं।',
  'hint.x-wing.consequence':
    '{base_units} में से हर पंक्ति में एक {digit} होना चाहिए, इसलिए {cover_units} में से हर स्तंभ को इन पंक्तियों में से किसी एक से {digit} मिलेगा। इन स्तंभों के बाकी {digit} हटाए जा सकते हैं।',
  'hint.x-wing.apply':
    '{cells} से उम्मीदवार {digit} हटाएँ। इस पैटर्न को {strategy} कहते हैं।',
  'hint.pivot-wing.observe':
    '{pivot} पर, उम्मीदवार {pivot_digits} विंग कोशिकाओं को {wing_cells} पर जोड़ते हैं।',
  'hint.pivot-wing.explain':
    '{wing_cells} में प्रत्येक विंग {pivot} पर धुरी के साथ एक उम्मीदवार को साझा करता है, और दोनों विंग में {shared_digit} होता है। जो भी धुरी उम्मीदवार सत्य है, एक विंग में {shared_digit} शामिल होना चाहिए।',
  'hint.xy-wing.pivot':
    '{pivot} में केवल {digits} उम्मीदवार बचे हैं। इनमें से एक अवश्य होगा।',
  'hint.xy-wing.case':
    'यदि {pivot} {pivot_digit} है, तो {wing} {pivot_digit} नहीं हो सकता। उसका एकमात्र दूसरा उम्मीदवार {shared_digit} है, इसलिए {wing} {shared_digit} होना चाहिए।',
  'hint.xy-wing.guarantee':
    '{pivot} में कोई भी उम्मीदवार सही हो, {wing_cells} में कम से कम एक विंग {shared_digit} होना चाहिए। हमें यह जानने की आवश्यकता नहीं कि कौन-सा।',
  'hint.xy-wing.apply':
    '{cells}, दोनों विंग {wing_cells} को देखते हैं। कम से कम एक विंग {shared_digit} है, इसलिए इन खानों से उम्मीदवार {shared_digit} हटाएँ। इस पैटर्न को {strategy} कहते हैं।',
  'hint.xy-wing.place':
    '{cell}, दोनों विंग {wing_cells} को देखता है। कम से कम एक विंग {shared_digit} है, इसलिए {cell} {shared_digit} नहीं हो सकता। एकमात्र दूसरा उम्मीदवार {digit} है, इसलिए {digit} रखें। इस पैटर्न को {strategy} कहते हैं।',
  'hint.xyz-wing.pivot':
    '{pivot} में केवल {digits} उम्मीदवार बचे हैं। यह इनमें से एक होना चाहिए।',
  'hint.xyz-wing.case':
    'यदि {pivot} {pivot_digit} है, तो उसी {unit} में {wing} {pivot_digit} नहीं हो सकता। उसका एकमात्र दूसरा उम्मीदवार {shared_digit} है, इसलिए {wing} {shared_digit} होना चाहिए।',
  'hint.xyz-wing.pivot-case':
    'यदि {pivot} {shared_digit} है, तो पिवट में पहले से ही {shared_digit} है।',
  'hint.xyz-wing.guarantee':
    '{pivot} में कोई भी उम्मीदवार सही हो, {pattern_cells} में से कम से कम एक {shared_digit} होना चाहिए। हमें यह जानने की जरूरत नहीं कि कौन सा।',
  'hint.xyz-wing.apply':
    '{target}, {first_pattern_cell} के साथ {first_unit}, {second_pattern_cell} के साथ {second_unit}, और {third_pattern_cell} के साथ {third_unit} साझा करता है। इन तीन में से कम से कम एक सेल {shared_digit} है, इसलिए {target} {shared_digit} नहीं हो सकता। यह उम्मीदवार हटाएँ। इस पैटर्न को {strategy} कहते हैं।',
  'hint.strong-link-wing.observe':
    '{wing_cells} की प्रत्येक कोशिका में केवल {digits} ही हो सकते हैं।',
  'hint.strong-link-wing.bridge':
    '{unit} में उम्मीदवार {link_digit} केवल {link_cells} में आ सकता है, इसलिए उन कोशिकाओं में से कम से कम एक में {link_digit} होना चाहिए।',
  'hint.strong-link-wing.force':
    'यदि {first_link_cell} में {link_digit} है, तो {first_wing_cell} में {link_digit} नहीं हो सकता और वहाँ {forced_digit} होना चाहिए। यदि {second_link_cell} में {link_digit} है, तो {second_wing_cell} में {forced_digit} होना चाहिए। इसलिए इन दोनों कोशिकाओं में से कम से कम एक में {forced_digit} है।',
  'hint.strong-link-wing.apply':
    '{wing_cells} में से कम से कम एक में {digit} है। {cells} दोनों कोशिकाओं को देखती हैं, इसलिए वहाँ से उम्मीदवार {digit} हटाएँ। इस पैटर्न को {strategy} कहते हैं।',
  'hint.strong-link-wing.place':
    '{wing_cells} में से कम से कम एक में {removed_digit} है। {cell} दोनों कोशिकाओं को देखती है, इसलिए वहाँ से उम्मीदवार {removed_digit} हटाकर {digit} रखें। इस पैटर्न को {strategy} कहते हैं।',
  'hint.relational-wing.apply':
    '{cells} से उम्मीदवार {digit} को हटा दें। यह पैटर्न {strategy} है।',
  'hint.relational-wing.place':
    '{cell} से उम्मीदवार {removed_digit} को हटा दें, इसलिए वहां {digit} रखें। यह पैटर्न {strategy} है।',
  'hint.bug-plus-one.bivalue':
    '{cell} को छोड़कर बाकी {count} खाली खानों में ठीक दो-दो उम्मीदवार हैं।',
  'hint.bug-plus-one.trivalue':
    '{cell} में तीन उम्मीदवार हैं: {digits}, यानी बाकी खाली खानों से एक अधिक।',
  'hint.bug-plus-one.unit-count':
    '{unit} में उम्मीदवार {digit} के लिए तीन संभावित स्थान हैं, जबकि {other_digits} के लिए दो-दो।',
  'hint.bug-plus-one.explain':
    '{units} में उम्मीदवार {digit} के लिए {other_digits} से एक स्थान अधिक है। यदि {cell} में {digit} न हो, तो हर खाली खाने में दो उम्मीदवार रह जाएंगे और पहेली का समाधान अद्वितीय नहीं रहेगा। इसलिए {cell} में {digit} होना चाहिए।',
  'hint.bug-plus-one.place':
    '{digit} को {cell} में रखें। यह विशिष्टता अपवाद {strategy} है।',
  'hint.unique-rectangle.rectangle':
    '{cells} पर चार अनसुलझी कोशिकाएँ एक आयत के कोनों पर स्थित हैं।',
  'hint.unique-rectangle.pair-corners':
    '{cells} पर, एकमात्र उम्मीदवार {digits} हैं।',
  'hint.unique-rectangle.third-corner':
    '{cell} भी बिल्कुल {digits} है। तीन कोनों में अब एक ही जोड़ी है।',
  'hint.unique-rectangle.expanded-corner':
    '{cell} में {digits} शामिल है। यह अतिरिक्त उम्मीदवार {extra_digit} वाला एकमात्र कोना है।',
  'hint.unique-rectangle.protect-uniqueness':
    'यदि {cell} जोड़ी {digits} में से किसी एक उम्मीदवार को रखता है, तो सभी चार कोने किसी भी पंक्ति, स्तंभ या बॉक्स को बदले बिना उन दो अंकों को स्वैप कर सकते हैं। पहेली के दो समाधान होंगे, इसलिए {digits} को हटा दें और {extra_digit} को रखें।',
  'hint.unique-rectangle.type1-place':
    '{cell} में केवल {digit} ही बचा है। इसे वहां रखें. यह पैटर्न {strategy} है।',
  'hint.unique-rectangle.observe':
    '{cells} की कोशिकाएँ एक आयत बनाती हैं और सभी में जोड़ी {digits} होती है।',
  'hint.unique-rectangle.type1':
    'तीन कोनों में बिल्कुल {digits} होता है। यदि {cell} भी किसी अंक का उपयोग करता है, तो आयत दो विनिमेय समाधानों की अनुमति देगा।',
  'hint.unique-rectangle.type2':
    '{cells} पर दो विस्तारित कोने अतिरिक्त उम्मीदवार {digit} साझा करते हैं, इसलिए कोई भी सेल जो दोनों कोनों को देखता है उसमें {digit} नहीं हो सकता है।',
  'hint.unique-rectangle.type3':
    'आयत में अतिरिक्त अंक {digits}, {unit} में आरक्षित उपसमुच्चय के रूप में {cells} के साथ संयोजित होते हैं, इसलिए उन अंकों को उस इकाई में कहीं और हटाया जा सकता है।',
  'hint.unique-rectangle.type4':
    'उम्मीदवार {digit} {cells} में {unit} में एक संयुग्मी जोड़ी के रूप में दिखाई देता है, इसलिए उम्मीदवार {removed_digit} विनिमेय समाधान बनाए बिना किसी भी विस्तारित कोने पर कब्जा नहीं कर सकता है।',
  'hint.unique-rectangle.apply':
    '{candidates} निकालें. यह विशिष्टता संबंध {strategy} है।',
  'hint.unique-rectangle.place':
    'विशिष्टता संबंध लागू करने के बाद {digit} को {cell} में रखें। यह पैटर्न {strategy} है।',
  'hint.implication-chain.observe':
    '{cell} से शुरू करें, जिसमें केवल {digits} उम्मीदवार हैं।',
  'hint.implication-chain.explain':
    '{from} और {to} में एक साझा उम्मीदवार है और वे एक-दूसरे को देखते हैं, इसलिए वह उम्मीदवार दोनों में सही नहीं हो सकता; निहितार्थ आगे बढ़ता है।',
  'hint.implication-chain.apply':
    'किसी एक अंतिम बिंदु में {digit} होना चाहिए, इसलिए {cells} से उम्मीदवार {digit} हटाएँ। यह पैटर्न {strategy} है।',
  'hint.narration.apply': 'कटौती लागू करें: ',
  'hint.narration.look-at': 'देखो ',
  'hint.narration.value-conflict':
    '. इसका दर्ज किया गया मूल्य पहेली के साथ संघर्ष करता है।',
  'hint.narration.clear-value': 'पर मान साफ़ करें ',
  'hint.narration.clear-value-tail':
    ' ताकि उम्मीदवार ग्रिड को आगे जांचा जा सके।',
  'hint.narration.candidate-inconsistent':
    '. इसका उम्मीदवार राज्य पहेली से असंगत है।',
  'hint.narration.reset-candidates': 'उम्मीदवार सेट को रीसेट करें ',
  'hint.narration.reset-candidates-tail':
    ' स्वीकृत पंक्ति, स्तंभ और बॉक्स मानों द्वारा अनुमत प्रत्येक अंक तक।',
  'hint.narration.only-candidate': '. इसका केवल एक ही उम्मीदवार है: ',
  'hint.narration.no-other-digit': 'क्योंकि कोई दूसरा अंक अंदर नहीं जा सकता ',
  'hint.narration.place': ', जगह ',
  'hint.narration.naked-single-tail': ' वहाँ. इसे नेकेड सिंगल कहा जाता है.',
  'hint.narration.in-unit': 'में ',
  'hint.narration.consider-digit': ', कहाँ पर विचार करें ',
  'hint.narration.can-appear': ' प्रकट हो सकता है.',
  'hint.narration.other-cells': 'हर दूसरी खाली कोशिका ',
  'hint.narration.cannot-contain': ' शामिल नहीं हो सकता ',
  'hint.narration.leaving-only': ', केवल छोड़कर ',
  'hint.narration.because-unit': 'क्योंकि ',
  'hint.narration.still-needs': ' अभी भी जरूरत है ',
  'hint.narration.only-cell': ' और ',
  'hint.narration.hidden-single-tail': ' एकमात्र संभावित सेल, स्थान है ',
  'hint.narration.hidden-single-name': ' वहाँ. इसे हिडन सिंगल कहा जाता है.',
  'hint.narration.place-result': 'जगह ',
  'hint.narration.in': ' में ',
  'hint.narration.remove': 'उम्मीदवार हटाओ ',
  'hint.narration.from': ' से ',
  'hint.narration.strategy-result': '. यह {strategy} परिणाम है.',
  'welcome.eyebrow': 'नई पहेली',
  'welcome.title': 'अपनी कठिनाई चुनें',
  'welcome.lede': 'एक स्तर चुनें, फिर जब आप तैयार हों तब शुरू करें।',
  'welcome.difficulty': 'कठिनाई',
  'welcome.start': '{difficulty} पहेली प्रारंभ करें',
  'welcome.starting': '{difficulty} पहेली शुरू हो रही है…',
  'welcome.preview': 'सुडोकू पहेली पूर्वावलोकन',
  'loading.initial': 'आपकी पहेली लोड हो रही है...',
  'loading.account.eyebrow': 'खाता',
  'loading.account.title': 'आपकी पहेली आपके खाते में सहेजी जा रही है...',
  'loading.account.detail':
    'खाते में सेव होने की पुष्टि तक आपकी प्रगति इस डिवाइस पर बनी रहती है।',
  'loading.home.eyebrow': 'सुडोकू',
  'loading.home.title': 'पहले पन्ने पर लौट रहा हूँ...',
  'loading.home.detail':
    'स्तर चयन दिखाने से पहले नवीनतम इंटरफ़ेस की जाँच कर रहा है।',
  'loading.restart.eyebrow': 'वही पहेली',
  'loading.restart.title': 'इस पहेली को पुनः प्रारंभ कर रहा हूँ...',
  'loading.restart.detail':
    'नया प्रयास तैयार होने तक पुराने बोर्ड को बंद रखें।',
  'loading.new.eyebrow': 'नई पहेली',
  'loading.new.title': 'आपका {difficulty} बोर्ड तैयार किया जा रहा है...',
  'loading.new.detail':
    'अब एक ताज़ा पहेली बना रहा हूँ। आप कुछ ही देर में खेल रहे होंगे.',
  'confirmation.home.eyebrow': 'घर लौटें?',
  'confirmation.home.title': 'ये पहेली छोड़ो',
  'confirmation.home.description':
    'आपकी वर्तमान प्रगति अब इस डिवाइस पर स्वचालित रूप से नहीं खुलेगी।',
  'confirmation.home.cancel': 'खेलते रहो',
  'confirmation.home.confirm': 'पहले पन्ने पर लौटें',
  'confirmation.restart.eyebrow': 'फिर से शुरू करें?',
  'confirmation.restart.title': 'फिर से शुरू करें',
  'confirmation.restart.description':
    'इस पहेली को उसके मूल दिए गए शब्दों से दोबारा खेलें, या कोई भिन्न पहेली चुनें।',
  'confirmation.restart.replay.title': 'इस पहेली को दोबारा खेलें',
  'confirmation.restart.replay.description':
    'इन दिए गए बिंदुओं को रखें और इस प्रयास को रीसेट करें।',
  'confirmation.restart.different.title': 'एक अलग पहेली खेलें',
  'confirmation.restart.different.description':
    'नए बोर्ड के लिए एक स्तर चुनें.',
  'confirmation.restart.different.level': 'विभिन्न पहेली के लिए स्तर',
  'common.cancel': 'रद्द करें',
  'account.confirm.deleteGame.eyebrow': 'सहेजा गया गेम हटाएँ?',
  'account.confirm.deleteGame.title': 'इस गेम को हटाएं',
  'account.confirm.deleteGame.description':
    'यह पहेली और इसकी प्रगति माई गेम्स से स्थायी रूप से हटा दी जाएगी। इसे असंपादित नहीं किया जा सकता है।',
  'account.confirm.deleteGame.action': 'गेम हटाएं',
  'account.confirm.deleteGame.pending': 'सहेजा गया गेम हटाया जा रहा है...',
  'account.confirm.deleteAll.eyebrow': 'प्रत्येक सहेजा गया गेम हटाएं?',
  'account.confirm.deleteAll.title': 'सभी गेम हटाएं',
  'account.confirm.deleteAll.description':
    'माई गेम्स की प्रत्येक पहेली और सभी प्रगति स्थायी रूप से हटा दी जाएगी। इसे असंपादित नहीं किया जा सकता है।',
  'account.confirm.deleteAll.action': 'सभी गेम हटाएं',
  'account.confirm.deleteAll.pending': 'सभी गेम हटाये जा रहे हैं...',
  'account.confirm.revoke.eyebrow': 'खाता सुरक्षा',
  'account.confirm.revoke.title': 'सभी डिवाइस से साइन आउट करें',
  'account.confirm.revoke.description':
    'यह आपको इस डिवाइस समेत सभी डिवाइस से साइन आउट कर देगा। आपका खाता और सेव किए गए गेम बने रहेंगे।',
  'account.confirm.revoke.action': 'सभी डिवाइस से साइन आउट करें',
  'account.confirm.revoke.pending': 'सभी डिवाइस से साइन आउट किया जा रहा है…',
  'account.confirm.deleteAccount.eyebrow': 'स्थायी कार्रवाई',
  'account.confirm.deleteAccount.title': 'अपना खाता हटाएं',
  'account.confirm.deleteAccount.description':
    'आपकी पहचान, प्रत्येक साइन-इन सत्र और सभी सहेजे गए गेम स्थायी रूप से हटा दिए जाएंगे। साझा पहेली सूची अप्रभावित है.',
  'account.confirm.deleteAccount.action': 'खाता हटाएँ',
  'account.confirm.deleteAccount.pending': 'खाता हटाया जा रहा है...',
  'account.confirm.typeEmail': 'पुष्टि करने के लिए {email} टाइप करें',
  'account.label': 'खाता',
  'account.continue.title': 'अन्य डिवाइस पर जारी रखें',
  'account.continue.detail':
    'इस ब्राउज़र के सक्रिय गेम को स्वचालित रूप से सहेजने के लिए साइन इन करें।',
  'account.signIn': 'Google से साइन इन करें',
  'account.signIn.short': 'साइन इन करें',
  'game.title': '{difficulty} पहेली',
  'game.statusActions': 'खेल की स्थिति और क्रियाएँ',
  'game.elapsed': 'बीता हुआ समय',
  'game.mistakes': 'गलतियाँ {count}',
  'game.resume': 'बायोडाटा',
  'game.pause': 'विराम',
  'status.resumed': 'पहेली फिर शुरू हुई.',
  'status.paused': 'पहेली रुकी.',
  'status.restarted': 'पहेली फिर से शुरू हुई. ताज़ा प्रयास, वही पहेली।',
  'status.hintClosed': 'संकेत बंद. आपकी पहेली अपरिवर्तित है.',
  'status.strategyApplied':
    'रणनीति लागू की गई. आप इसे एक चरण में पूर्ववत कर सकते हैं.',
  'status.correctionApplied':
    'सुधार लागू किया गया. आप इसे एक चरण में पूर्ववत कर सकते हैं.',
  'status.hintAlreadyApplied':
    'यह संकेत पहले से ही बोर्ड पर परिलक्षित होता है।',
  'status.hintRefreshed': 'बोर्ड बदल गया, इसलिए संकेत अपडेट किया गया।',
  'status.accountSaved': 'गेम आपके खाते में सहेजा गया.',
  'status.waitBeforeLeaving':
    'इस पहेली को छोड़ने से पहले लंबित चालों की प्रतीक्षा करें।',
  'status.selectEditableCell':
    'कोई संख्या दर्ज करने से पहले एक संपादन योग्य सेल का चयन करें।',
  'status.savingAccount': 'आपका स्थानीय गेम आपके खाते में सहेजा जा रहा है…',
  'status.restoring': 'आपकी पहेली पुनर्स्थापित की जा रही है...',
  'status.restored': 'आपकी स्थानीय पहेली पुनर्स्थापित कर दी गई.',
  'status.puzzleReady': '{difficulty} पहेली तैयार।',
  'status.puzzleRestored': '{difficulty} पहेली पुनर्स्थापित की गई।',
  'status.waitBeforeStarting':
    'दूसरी पहेली शुरू करने से पहले लंबित चालों की प्रतीक्षा करें।',
  'status.solved': 'हल हो गया! बहुत बढ़िया।',
  'status.moveSaved': 'ले जाएँ सहेजा गया.',
  'status.waitBeforeHint': 'संकेत खोलने से पहले लंबित चालों की प्रतीक्षा करें।',
  'status.hintReady': 'संकेत तैयार. चरण 1 से प्रारंभ करें.',
  'status.openingSaved': 'आपका सहेजा गया गेम खोला जा रहा है...',
  'status.savedDeleted': 'सहेजा गया गेम हटा दिया गया.',
  'status.allDeleted': 'सभी सहेजे गए गेम हटा दिए गए.',
  'status.signedOut': 'साइन आउट कर दिया गया. आपके खाते के गेम सहेजे रहते हैं.',
  'status.revoked':
    'सभी डिवाइस से साइन आउट हो गया। जारी रखने के लिए फिर से साइन इन करें।',
  'status.accountDeleted': 'खाता और सहेजे गए गेम हटा दिए गए.',
  'retry.saving': 'पुनः सहेजने का प्रयास करें',
  'retry.restoring': 'पुनः पुनर्स्थापित करने का प्रयास करें',
  'retry.connection': 'कनेक्शन की जाँच करें',
  'retry.starting': 'पुनः प्रारंभ करने का प्रयास करें',
  'retry.move': 'पुनः प्रयास करें',
  'retry.hint': 'फिर से संकेत देने का प्रयास करें',
  'retry.time': 'समय बचाने का पुनः प्रयास करें',
  'retry.progress': 'प्रगति को सहेजने का पुनः प्रयास करें',
  'retry.leaving': 'पुनः छोड़ने का प्रयास करें',
  'retry.opening': 'पुनः खोलने का प्रयास करें',
  'retry.deleting': 'पुनः हटाने का प्रयास करें',
  'retry.signOut': 'पुनः साइन आउट करने का प्रयास करें',
  'retry.revoke': 'सभी डिवाइस से साइन आउट करने की फिर कोशिश करें',
  'retry.deleteAccount': 'खाता पुनः हटाने का प्रयास करें',
  'error.accountSave':
    'आपका स्थानीय गेम सुरक्षित है, लेकिन इसे आपके खाते में सहेजा नहीं जा सका.',
  'error.restoring': 'आपकी पहेली पुनर्स्थापित नहीं की जा सकी.',
  'error.connection':
    'गेम सेवा तक नहीं पहुंचा जा सका. अपना कनेक्शन जांचें और पुनः प्रयास करें।',
  'error.http': 'गेम सेवा ने त्रुटि {status} लौटाई। कृपया पुन: प्रयास करें।',
  'error.unavailable':
    'गेम सेवा अस्थायी रूप से अनुपलब्ध है. आपका बोर्ड सुरक्षित है; पुनः प्रयास करें।',
  'error.starting': 'खेल प्रारंभ नहीं हो सका.',
  'error.signInAgain': 'चालें सहेजने के लिए फिर से साइन इन करें।',
  'error.localUnavailable': 'स्थानीय खेल अनुपलब्ध है.',
  'error.move': 'इस कदम को सहेजा नहीं जा सका.',
  'error.currentUnavailable': 'वर्तमान गेम अनुपलब्ध है.',
  'error.hintChanged': 'संकेत तैयार करते समय बोर्ड बदल गया।',
  'error.hint': 'इशारा तैयार नहीं हो सका.',
  'error.time': 'नवीनतम गेम का समय सहेजा नहीं जा सका.',
  'error.timer': 'नवीनतम टाइमर स्थिति सहेजी नहीं जा सकी.',
  'error.leaving': 'स्थानीय पहेली सुलझ नहीं सकी.',
  'error.opening': 'वह सहेजा गया गेम खोला नहीं जा सका.',
  'error.deleteGame': 'सहेजा गया गेम हटाया नहीं जा सका.',
  'error.deleteAll': 'सहेजे गए गेम को हटाया नहीं जा सका.',
  'error.signOut': 'आपको साइन आउट नहीं किया जा सका.',
  'error.revoke': 'सत्र निरस्त नहीं किये जा सके.',
  'error.deleteAccount': 'खाता हटाया नहीं जा सका.',
  'error.invalid-request': 'अनुरोध अमान्य है.',
  'error.invalid-json': 'अनुरोध में अमान्य JSON शामिल है.',
  'error.unsupported-media-type': 'अनुरोध सामग्री-प्रकार समर्थित नहीं है.',
  'error.payload-too-large': 'अनुरोध बहुत बड़ा है.',
  'error.unauthorized': 'प्राधिकरण आवश्यक है.',
  'error.forbidden-origin': 'इस अनुरोध की उत्पत्ति की अनुमति नहीं है.',
  'error.session-not-found': 'खेल सत्र नहीं मिला.',
  'error.revision-conflict': 'यह चाल लागू होने से पहले बोर्ड बदल गया।',
  'error.invalid-session': 'खेल सत्र अमान्य है.',
  'error.invalid-action': 'यह गेम क्रिया अमान्य है.',
  'error.invalid-cell': 'यह सेल अमान्य है.',
  'error.immutable-cell': 'किसी दिए गए सेल को बदला नहीं जा सकता.',
  'error.note-not-allowed': 'इस कक्ष में अभ्यर्थी नहीं बदले जा सकेंगे।',
  'error.no-undo': 'पूर्ववत करने के लिए कोई कार्रवाई नहीं है.',
  'error.no-redo': 'दोबारा करने के लिए कोई कार्रवाई नहीं है.',
  'error.no-hint': 'कोई संकेत उपलब्ध नहीं है.',
  'error.stale-hint': 'यह संकेत तैयार होने के बाद बोर्ड बदल गया।',
  'error.persistence-failed': 'खेल को बचाया नहीं जा सका.',
  'error.internal-error': 'अनुरोध पूरा नहीं किया जा सका.',
  'error.account-unavailable': 'खाता सुविधाएँ अनुपलब्ध हैं.',
  'error.account-unauthorized': 'एक वैध आवेदन सत्र आवश्यक है.',
  'error.csrf-failed':
    'इस साइन-इन की पुष्टि नहीं हो सकी। कृपया फिर से साइन इन करें।',
  'error.account-game-not-found': 'सहेजा गया गेम नहीं मिला.',
  'error.guest-revision-conflict':
    'इस क्रिया के लागू होने से पहले स्थानीय खेल बदल गया।',
  'error.guest-claim-conflict':
    'यह स्थानीय गेम पहले से ही एक खाते में सहेजा गया था।',
  'error.malformedDescriptor': 'स्पष्टीकरण प्रदर्शित नहीं किया जा सका.',
  'account.close': 'खाता पैनल बंद करें',
  'account.games.title': 'मेरे खेल',
  'account.games.deleteAll': 'सभी हटाएं',
  'account.games.deletingAll': 'सभी को हटाया जा रहा है...',
  'account.games.empty': 'अभी तक कोई सहेजा गया गेम नहीं.',
  'account.games.puzzle': '{difficulty} पहेली',
  'account.games.finished': 'समाप्त',
  'account.games.inProgress': 'प्रगति पर है',
  'account.games.saved': 'खेल सहेजा गया',
  'account.games.open': 'खुला',
  'account.games.opening': 'खुल रहा है...',
  'account.games.delete': 'हटाएँ',
  'account.games.deleting': 'हटाया जा रहा है...',
  'account.signOut': 'साइन आउट करें',
  'account.signingOut': 'साइन आउट हो रहा है...',
  'account.settings': 'खाता सेटिंग',
  'account.revoke': 'सभी डिवाइस से साइन आउट करें',
  'account.delete': 'खाता हटाएँ',
  'board.label': 'सुडोकू गेम बोर्ड',
  'board.cell.given': '{value} दिया गया',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'खाली, उम्मीदवार {candidates}',
  'board.cell.empty': 'खाली',
  'board.hint.focus': 'संकेत फोकस',
  'board.hint.premise': 'संकेत साक्ष्य',
  'board.hint.eliminated': 'उम्मीदवार हटा दिया गया',
  'board.hint.conclusion': 'संकेत निष्कर्ष',
  'board.hint.problem': 'सुधार की आवश्यकता है',
  'board.hint.extra': 'असंभव उम्मीदवार',
  'board.hint.group': 'समूह {group}',
  'board.hint.chain': 'चेन स्थिति {position}',
  'board.paused.title': 'पहेली रुकी',
  'board.paused.detail': 'आपका समय रुक गया है.',
  'hint.label': 'संकेत',
  'hint.close': 'बंद करें',
  'hint.strategy.grade': '{grade} रणनीति',
  'hint.applying': 'संकेत लागू किया जा रहा है...',
  'hint.refreshing': 'ताज़ा संकेत...',
  'hint.step': '{total} का चरण {current}',
  'hint.legend.label': 'दृश्य संकेत कथा',
  'hint.legend.strong': 'ठोस: अवश्य होना चाहिए',
  'hint.legend.weak': 'धराशायी: दोनों नहीं कर सकते',
  'hint.legend.implication': 'तीर: निहितार्थ',
  'hint.legend.groups': 'ए/बी: वैकल्पिक समूह',
  'hint.legend.order': 'संख्याएँ: श्रृंखला क्रम',
  'hint.back': 'वापस',
  'hint.next': 'अगला',
  'hint.apply': 'संकेत लागू करें',
  'controls.label': 'खेल नियंत्रण',
  'controls.digit.note': 'नोट {digit} जोड़ें या हटाएँ',
  'controls.digit.enter': '{digit} दर्ज करें',
  'controls.hint.preparing': 'संकेत तैयार किया जा रहा है...',
  'controls.hint.preparingDetail':
    'अगला चरण तैयार होने तक पहेली को दृश्यमान रखें।',
  'controls.complete.eyebrow': 'पहेली पूरी',
  'controls.complete.title': '{time} में हल किया गया',
  'controls.complete.detail':
    'किसी अन्य {difficulty} बोर्ड के साथ लय बनाए रखें, या एक अलग स्तर चुनें।',
  'controls.complete.another': 'एक और {difficulty} चलायें',
  'controls.complete.replay': 'इस पहेली को दोबारा खेलें',
  'controls.complete.choose': 'दूसरा स्तर चुनें',
  'controls.pad': 'नंबर पैड',
  'controls.pad.notes': 'नंबर पैड, नोट्स मोड',
  'controls.modes': 'इनपुट मोड',
  'controls.notes.on': 'पर नोट्स',
  'controls.notes.off': 'नोट बंद',
  'controls.candidates.on': 'उम्मीदवार चालू',
  'controls.candidates.off': 'अभ्यर्थी बाहर',
  'controls.actions': 'पहेली क्रियाएँ',
  'controls.erase': 'मिटाओ',
  'controls.undo': 'पूर्ववत करें',
  'controls.undoing': 'पूर्ववत किया जा रहा है...',
  'controls.redo': 'पुनः करें',
  'controls.redoing': 'पुनः कर रहा हूँ...',
  'controls.hint.reveal': 'एक संकेत प्रकट करें',
  'controls.shortcuts': 'कीबोर्ड शॉर्टकट',
  'controls.shortcuts.move': 'हटो',
  'controls.shortcuts.arrows': 'तीर कुंजियाँ',
  'controls.shortcuts.enter': 'एक नंबर दर्ज करें',
  'controls.shortcuts.notes': 'नोट्स/उम्मीदवार',
  'controls.shortcuts.or': 'या',
  'controls.shortcuts.pause': 'रोकें या फिर से शुरू करें',
  'controls.shortcuts.hint': 'खोलें, आगे बढ़ें, या संकेत लागू करें',
  'controls.shortcuts.hintOther': 'अन्य संकेत नियंत्रण',
  'hint.target.candidate.visible': 'इस पर प्रकाश डाला गया उम्मीदवार',
  'hint.target.candidate.accessible':
    'उम्मीदवार {value} पंक्ति {row}, कॉलम {column} पर',
  'hint.target.cell.visible': 'यह हाइलाइट किया गया सेल',
  'hint.target.cell.accessible': 'पंक्ति {row}, स्तंभ {column}',
  'hint.target.unit.visible': 'इसने {kind} पर प्रकाश डाला',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'पंक्ति',
  'hint.target.column': 'स्तंभ',
  'hint.target.box': 'बक्सा',
  'chrome.home': 'सुडोकू घर',
  'chrome.appearance': 'दिखावट',
  'chrome.theme.use': '{theme} थीम का उपयोग करें',
  'chrome.theme.systemTitle': 'सिस्टम थीम ({theme})',
  'chrome.theme.title': '{theme} थीम',
  'chrome.theme.system': 'सिस्टम',
  'chrome.theme.systemName': 'प्रणाली',
  'chrome.theme.light': 'रोशनी',
  'chrome.theme.dark': 'अंधेरा',
  'chrome.connection.connecting': 'जुड़ रहा है',
  'chrome.connection.unavailable': 'सेवा अनुपलब्ध',
  'chrome.footer.tagline': 'ध्यान भटकाए बिना, विचारशील खेल।',
  'chrome.footer.privacy': 'गोपनीयता',
  'chrome.footer.terms': 'शर्तें',
  'chrome.footer.input': 'कीबोर्ड और स्पर्श तैयार',
};
