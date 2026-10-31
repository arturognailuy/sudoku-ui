import type { MessageCatalog } from './types';

export const tr: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, other {# hata}}',
  'board.cell':
    'Satır {row}, sütun {column}, {content}{pending, select, true {, kontrol ediliyor} other {}}{invalid, select, true {, geçersiz} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Dil',
  'common.language.auto': 'Otomatik',
  'accessibility.language.changed': 'Dil {language} olarak değiştirildi.',
  'common.difficulty.easy': 'Kolay',
  'common.difficulty.medium': 'Orta',
  'common.difficulty.hard': 'Sert',
  'common.difficulty.expert': 'Uzman',
  'common.difficulty.evil': 'Kötülük',
  'difficulty.easy.name': 'Kolay',
  'difficulty.medium.name': 'Orta',
  'difficulty.hard.name': 'Sert',
  'difficulty.expert.name': 'Uzman',
  'difficulty.evil.name': 'Kötülük',
  'hint.value-correction.title': 'Bu değeri düzelt',
  'hint.candidate-correction.title': 'Bu aday hücreyi düzeltin',
  'hint.value-correction.summary':
    '{cell}’daki değer bulmacayla çelişiyor. Devam etmeden önce temizleyin.',
  'hint.candidate-correction.summary':
    'Devam etmeden önce {cell} hücresindeki adayları satır, sütun ve kutuda yerleştirilmiş sayılara göre yeniden belirleyin.',
  'hint.strategy.summary':
    '{strategy} tekniğini anlamak ve uygulamak için bu {steps} adımı izleyin.',
  'hint.value-correction.observe':
    '{cell} hücresini kontrol edin. Değer, tahtayla çelişiyor.',
  'hint.value-correction.conclude':
    'Aday kılavuzun daha sonra kontrol edilebilmesi için {cell}’daki değeri temizleyin.',
  'hint.candidate-correction.observe':
    '{cell} hücresini kontrol edin. Adaylar tahtayla uyuşmuyor.',
  'hint.candidate-correction.compare':
    'Bu hücrenin adaylarını satır, sütun ve kutuda yerleştirilmiş sayılara göre baştan belirleyin.',
  'hint.candidate-correction.conclude':
    '{cell} hücresindeki adayları satır, sütun ve kutunun izin verdiği tüm rakamlarla sıfırlayın.',
  'hint.coloring.pair':
    '{unit} içinde {digit} için yalnızca {cells} hücreleri mümkündür. Bu iki hücreden tam biri bu değeri almalıdır; olasılıkları A ve B olarak etiketleyin.',
  'hint.coloring.chain':
    'Her güçlü bağlantıyı sırayla izleyin. Bu bağlantının uçları, {digit} için bir satır, sütun veya kutudaki yalnızca iki olası konumdur. Bu yüzden etiketler zincir boyunca dönüşümlü ilerler: {group_a} hücreleri A, {group_b} hücreleri B olarak etiketlenir.',
  'hint.coloring.alternatives':
    'Ya A grubundaki tüm hücreler {digit} değerini içerir ve B grubundakiler içermez ya da B grubundaki tüm hücreler {digit} değerini içerir ve A grubundakiler içermez. Eleme için hangi dağılımın doğru olduğunu bilmemiz gerekmez.',
  'hint.coloring.elimination':
    '{cell} hücresi hem A grubundaki {group_a_cell} hücresini hem de B grubundaki {group_b_cell} hücresini görür. Bu iki hücreden biri mutlaka {digit} olacağından {digit} adayını bu hücreden kaldırın.',
  'hint.coloring.apply':
    'Her hedef hücre, {colored_digit} için iki olası renk grubunu da görür. Bu nedenle {candidates} adaylarını kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.coloring.place':
    '{colored_digit} için bağlantılı adaylar sonucu zorlar. {digit}’yu {cell}’ya yerleştirin. Bu model {strategy}’dur.',
  'hint.x-cycle.opening':
    '{unit} içinde {digit} adayının yalnızca iki olası konumu vardır: {cells}. Bu iki hücreden biri {digit} değerini almak zorundadır.',
  'hint.x-cycle.assume':
    '{start} hücresinin {digit} olmadığını varsayalım. Bu durumda {forced} hücresi {digit} olmak zorundadır. Dolayısıyla {blocked} hücresinde {digit} aday olamaz; böylece {unit} içinde {digit} için mümkün olan tek konum {result} hücresi kalır.',
  'hint.x-cycle.follow':
    '{true_cell} hücresinin değeri {digit} olduğundan {blocked} hücresinde {digit} aday olamaz. Böylece {unit} içinde {digit} için mümkün olan tek konum {result} hücresi kalır.',
  'hint.x-cycle.close':
    '{true_cell} hücresinin değeri {digit} olduğundan {blocked} hücresinde {digit} aday olamaz. Böylece {unit} içinde {digit} için geriye yalnızca {result} hücresi kalır.',
  'hint.x-cycle.place':
    '{assumption} hücresinin {digit} olmadığını varsaymak, zincirin sonunda {cell} hücresinin {digit} olmak zorunda olduğu sonucunu doğurur ve başlangıç varsayımıyla çelişir. Bu nedenle {cell} hücresine {digit} yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.xy-chain.start':
    '{cell} hücresinin yalnızca {first_digit} ve {second_digit} adayları vardır. Ya {endpoint_digit} değerini alır ya da {endpoint_digit} değilse {other_digit} olmak zorundadır.',
  'hint.xy-chain.assume':
    '{start} hücresinin {endpoint_digit} olmadığını varsayalım. O hâlde {start_value} olmalıdır. {start} ile {middle}, {first_unit} birimini paylaştığı için {middle} {start_value} olamaz ve {middle_value} olmalıdır. Böylece {result}, {second_unit} içinde {middle_value} olamaz ve {result_value} olmalıdır.',
  'hint.xy-chain.follow':
    '{start} {start_value} olduğundan {middle}, {first_unit} içinde {start_value} olamaz ve {middle_value} olmalıdır. {middle} ile {result}, {second_unit} birimini paylaştığı için {result} {middle_value} olamaz ve {result_value} olmalıdır.',
  'hint.xy-chain.reach':
    '{start} {start_value} olduğundan {endpoint} {shared_digit} olamaz. Diğer tek adayı {endpoint_digit} olduğundan {endpoint_digit} olmalıdır.',
  'hint.xy-chain.place':
    '{first_endpoint} {endpoint_digit} ise ilk uçta {endpoint_digit} vardır. Değilse zincir, diğer uç olan {second_endpoint} hücresini {endpoint_digit} olmaya zorlar. Bu nedenle uçlardan en az biri {endpoint_digit} değerindedir. {cell} iki ucu da gördüğü için {endpoint_digit} olamaz. {cell} hücresine {digit} yerleştirin. Bu desenin adı {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    '{cell} ile başlayın. Satırında, sütununda ve kutusunda {excluded_digits} zaten bulunuyor.',
  'hint.naked-single.only':
    'Bu nedenle {cell} hücresine gelebilecek tek rakam {digit}.',
  'hint.naked-single.apply':
    '{cell} hücresine {digit} yerleştirin. Tek adayı kalan hücreye {strategy} denir.',
  'hint.hidden-single.inspect':
    '{unit} içinde {digit} rakamının yerleşebileceği hücreleri inceleyin.',
  'hint.hidden-single.blockers':
    '{blockers} konumlarına yerleşmiş {digit} rakamları nedeniyle {unit} içindeki diğer tüm boş hücrelerden {digit} elenir.',
  'hint.hidden-single.only':
    '{digit} rakamının yerleşebileceği yalnızca {cell} hücresi kalır.',
  'hint.hidden-single.apply':
    '{cell} hücresine {digit} yerleştirin. Bir rakamın satır, sütun veya kutuda yerleşebileceği tek bir hücre kaldığında bu desen {strategy} olarak adlandırılır.',
  'hint.naked-pair.inspect':
    '{unit} içinde önce {cell} hücresini inceleyin. Bu hücrenin yalnızca {first_digit} ve {second_digit} adayları vardır.',
  'hint.naked-pair.match':
    '{cell} hücresinde de aynı iki aday vardır: {first_digit} ve {second_digit}.',
  'hint.naked-pair.reserve':
    'Bu iki hücre {digits} rakamlarını paylaşmak zorundadır. Bu nedenle {unit} içindeki diğer hücrelerde {digit} aday olamaz.',
  'hint.naked-pair.apply':
    '{candidates} adaylarını kaldırın; bu adımda hiçbir hücreye değer yerleştirilmez. Bu desen {strategy} olarak adlandırılır.',
  'hint.naked-triple.first':
    '{unit} içinde önce {cell} hücresini inceleyin: Bu hücre yalnızca {first_digit} veya {second_digit} olabilir.',
  'hint.naked-triple.second':
    'Şimdi {cell} hücresini ekleyin; bu hücre de yalnızca {first_digit} veya {second_digit} olabilir.',
  'hint.naked-triple.third':
    '{cell} hücresini de ekleyin; bu hücre yalnızca {first_digit} veya {second_digit} olabilir. Böylece bu üç hücrenin adayları topluca {reserved_digits} rakamlarıyla sınırlanır.',
  'hint.naked-triple.consequence':
    '{reserved_digits} rakamları bu üç hücre arasında paylaşılmak zorundadır. Bu nedenle {cell} hücresinden {removed_digits} elenir ve yalnızca {remaining_digit} kalır.',
  'hint.naked-triple.apply':
    '{cell} hücresine {digit} yerleştirin. Adayları aynı üç rakamla sınırlı üç hücre bir {strategy} oluşturur.',
  'hint.naked-quad.cell':
    '{unit} içinde {cell} hücresinde aday olarak yalnızca {digits} bulunur.',
  'hint.subset-reservation.observe':
    '{unit} içinde {cells} yalnızca {digits} içerir.',
  'hint.subset-reservation.explain':
    'Vurgulanan hücreler {unit} içinde {digits} rakamlarını kullanmak zorundadır. Bu nedenle bu rakamlar aynı birimdeki diğer tüm hücrelerden elenebilir.',
  'hint.subset-reservation.apply':
    '{candidates} adaylarını kaldırın. Bu desen {strategy}.',
  'hint.subset-reservation.place':
    '{cell} hücresine {digit} yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.hidden-subset-confinement.observe':
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-subset-confinement.explain':
    '{digits}, {unit} içindeki bu hücrelerle sınırlı olduğundan hücreler başka aday içeremez.',
  'hint.hidden-subset-confinement.apply':
    'Sınırlı hücrelerden {candidates} adaylarını kaldırın. Bu desen {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Diğer adayları kaldırdıktan sonra {cell} hücresine {digit} yerleştirin. Bu desen {strategy}.',
  'hint.hidden-pair.first':
    '{unit} içinde {digit} adayı yalnızca {cells} hücrelerinde bulunur.',
  'hint.hidden-pair.second':
    '{digit} adayı da aynı iki hücreyle sınırlıdır. Bu nedenle {digits}, {cells} hücrelerini herhangi bir sırayla doldurmalıdır.',
  'hint.hidden-pair.consequence':
    'Bu iki hücre {digits} için ayrılmıştır; diğer adaylar kalamaz: {candidates}.',
  'hint.hidden-pair.apply':
    '{candidates} adaylarını kaldırın. Bu desenin adı {strategy}.',
  'hint.hidden-triple.first':
    '{unit} içinde {digit} adayı yalnızca {cells} hücrelerinde bulunur.',
  'hint.hidden-triple.second':
    '{unit} içinde {digits} adayları yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-triple.third':
    '{unit} içinde {digits} adayları yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-triple.consequence':
    '{unit} içindeki {digits} adayları yalnızca bu hücrelerde bulunabildiğinden, söz konusu hücrelerde başka aday kalamaz.',
  'hint.hidden-triple.apply':
    'Belirlenen hücrelerden {candidates} adaylarını kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.hidden-quad.first':
    '{unit} içinde {digit} adayı yalnızca {cells} hücrelerinde bulunur.',
  'hint.hidden-quad.second':
    '{unit} içinde {digits} adayları yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.third':
    '{unit} içinde {digits} adayları yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.fourth':
    '{unit} içinde {digits} adayları yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.consequence':
    '{unit} içindeki {digits} adayları yalnızca bu hücrelerde bulunabildiğinden, söz konusu hücrelerde başka aday kalamaz.',
  'hint.hidden-quad.apply':
    'Belirlenen hücrelerden {candidates} adaylarını kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.pointing-pair.first':
    '{source_unit} içindeki {cell} hücresinde bulunan {digit} adayından başlayın. Aynı kutuda {digit} adayının bulunabileceği diğer tüm konumları inceleyin.',
  'hint.pointing-pair.second':
    '{source_unit} içinde {digit} için mümkün olan diğer tek konum {cell} hücresidir. Her iki konum da {intersection_unit} içinde yer alır.',
  'hint.pointing-pair.consequence':
    '{source_unit} içindeki {digit}, {intersection_unit} ile kesişen bu iki hücreden birine yerleşmek zorundadır. Bu nedenle {intersection_unit} içindeki diğer konumlardan {candidate} adayını kaldırın.',
  'hint.pointing-pair.apply':
    '{cell} hücresinde yalnızca {digit} adayı kaldığından buraya {digit} yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.intersection-confinement.observe':
    '{source_unit}’da aday {digit}, {cells}’daki {intersection_unit} ile sınırlıdır.',
  'hint.intersection-confinement.explain':
    '{source_unit}’daki her {digit}, {intersection_unit}’da bulunduğundan, kaynağın dışındaki ancak kesişimin içindeki hücreler onu içeremez.',
  'hint.intersection-confinement.apply':
    '{digit} adayını {cells}’dan çıkarın. Bu model {strategy}’dur.',
  'hint.intersection-confinement.place':
    'Kavşağı uyguladıktan sonra {digit}’yu {cell}’ya yerleştirin. Bu model {strategy}’dur.',
  'hint.fish-confinement.observe':
    '{base_units} içindeki {digit} adayı yalnızca {cover_units} ile kesişen konumlarda bulunabilir.',
  'hint.fish-confinement.explain':
    '{digit} adayı {base_units} birimlerinden {cover_units} birimlerine hapsolmuştur; bu örtü birimleri sayıyı vurgulanan taban konumlarından almalıdır.',
  'hint.swordfish.consequence':
    '{base_units} birimlerinin her birinde bir {digit}, {cover_units} ile kesişen konumlardan birine yerleşmek zorundadır. Bu yerleşimler üç örtü biriminin tamamını kapsadığından, bu birimlerde başka bir {digit} adayı kalamaz.',
  'hint.jellyfish.consequence':
    '{base_units} birimlerinin her birinde bir {digit}, {cover_units} ile kesişen konumlardan birine yerleşmek zorundadır. Bu yerleşimler dört örtü biriminin tamamını kapsadığından, bu birimlerde başka bir {digit} adayı kalamaz.',
  'hint.fish-confinement.apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.x-wing.first':
    '{base_unit} içinde {digit} adayı yalnızca {cover_units} ile kesişen konumlarda bulunabilir.',
  'hint.x-wing.second':
    '{base_unit} içinde de {digit} adayı yalnızca {cover_units} ile kesişen konumlarda bulunabilir. Böylece iki taban birimi aynı iki örtü birimini paylaşır.',
  'hint.x-wing.consequence':
    '{base_units} birimlerinin her birinde bir {digit}, {cover_units} ile kesişen konumlardan birine yerleşmek zorundadır. Bu iki yerleşim iki örtü birimini de kapsadığından, bu birimlerdeki diğer {digit} adayları elenir.',
  'hint.x-wing.apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.pivot-wing.observe':
    '{pivot}’da, {pivot_digits} adayları kanat hücrelerini {wing_cells}’ya bağlar.',
  'hint.pivot-wing.explain':
    '{wing_cells}’daki her kanat, {pivot}’daki pivotla bir adayı paylaşıyor ve her iki kanat da {shared_digit} içeriyor. Hangi pivot adayı doğru olursa olsun, bir kanadın {shared_digit} içermesi gerekir.',
  'hint.xy-wing.pivot':
    '{pivot} hücresinde yalnızca {digits} adayları var. Bunlardan biri olmalı.',
  'hint.xy-wing.case':
    '{pivot} {pivot_digit} ise {wing} {pivot_digit} olamaz. Diğer tek adayı {shared_digit} olduğundan {wing} {shared_digit} olmalıdır.',
  'hint.xy-wing.guarantee':
    '{pivot} hangi değeri alırsa alsın, {wing_cells} konumlarındaki kanatlardan en az biri {shared_digit} olmalıdır. Hangisi olduğunu bilmemiz gerekmez.',
  'hint.xy-wing.apply':
    '{cells}, {wing_cells} kanatlarının ikisini de görür. En az biri {shared_digit} olduğundan bu hücrelerden {shared_digit} adayını çıkarın. Bu desenin adı {strategy}.',
  'hint.xy-wing.place':
    '{cell} hücresi {wing_cells} konumlarındaki iki kanadı da görür. Kanatlardan en az biri {shared_digit} olduğundan {cell} hücresinin değeri {shared_digit} olamaz. Geriye kalan tek aday {digit} olduğuna göre bu hücreye {digit} yerleştirin. Bu desenin adı {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} hücresinde aday olarak yalnızca {digits} bulunur. Hücrenin değeri bunlardan biri olmak zorundadır.',
  'hint.xyz-wing.case':
    '{pivot} hücresinin değeri {pivot_digit} ise onunla {unit} paylaşan {wing} hücresinde {pivot_digit} aday olamaz. Diğer tek adayı {shared_digit} olduğundan {wing} hücresi {shared_digit} olmak zorundadır.',
  'hint.xyz-wing.pivot-case':
    '{pivot} hücresinin değeri {shared_digit} ise {shared_digit} zaten pivot hücresine yerleşmiş olur.',
  'hint.xyz-wing.guarantee':
    '{pivot} hangi değeri alırsa alsın, {pattern_cells} hücrelerinden en az birinin değeri {shared_digit} olmalıdır. Bunun hangi hücre olduğunu bilmemiz gerekmez.',
  'hint.xyz-wing.apply':
    '{target} hücresi {first_pattern_cell} ile {first_unit}, {second_pattern_cell} ile {second_unit}, {third_pattern_cell} ile de {third_unit} paylaşır. Bu üç hücreden en az birinin değeri {shared_digit} olduğundan {target} hücresinde {shared_digit} aday olamaz. Bu adayı kaldırın. Bu desen {strategy} olarak adlandırılır.',
  'hint.strong-link-wing.observe':
    '{wing_cells} hücrelerinin her birinde yalnızca {digits} adayları vardır.',
  'hint.strong-link-wing.bridge':
    '{unit} içinde {link_digit} adayı yalnızca {link_cells} hücrelerinde bulunabilir. Bu nedenle bu hücrelerden en az biri {link_digit} değerini almak zorundadır.',
  'hint.strong-link-wing.force':
    '{first_link_cell} hücresinin değeri {link_digit} ise {first_wing_cell} hücresinde {link_digit} aday olamaz; bu hücre {forced_digit} olmak zorundadır. {second_link_cell} hücresinin değeri {link_digit} ise {second_wing_cell} hücresi {forced_digit} olmak zorundadır. Dolayısıyla bu iki hücreden en az birinin değeri {forced_digit} olur.',
  'hint.strong-link-wing.apply':
    '{wing_cells} hücrelerinden en az biri {digit} değerindedir. Bu hücreler ikisini de gördüğü için {cells} içinden {digit} adayını çıkarın. Bu desenin adı {strategy}dır.',
  'hint.strong-link-wing.place':
    '{wing_cells} hücrelerinden en az birinin değeri {removed_digit} olur. {cell} hücresi bu iki hücreyi de gördüğünden burada {removed_digit} aday olamaz; geriye kalan {digit} değerini yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.relational-wing.apply':
    '{digit} adayını {cells}’dan çıkarın. Bu model {strategy}’dur.',
  'hint.relational-wing.place':
    '{removed_digit} adayını {cell}’dan çıkarın, böylece {digit}’yu oraya yerleştirin. Bu model {strategy}’dur.',
  'hint.bug-plus-one.bivalue':
    '{cell} dışında kalan çözülmemiş {count} hücrenin her birinde tam iki aday vardır.',
  'hint.bug-plus-one.trivalue':
    '{cell} hücresinin üç adayı {digits} rakamlarıdır. Böylece bu hücrede, diğer çözülmemiş hücrelerin her birinden tam bir aday fazla bulunur.',
  'hint.bug-plus-one.unit-count':
    '{unit} içinde {digit} adayının üç olası konumu, {other_digits} adaylarının ise ikişer olası konumu vardır.',
  'hint.bug-plus-one.explain':
    '{units} genelinde {digit} adayının, {other_digits} adaylarına göre bir fazla olası konumu vardır. {cell} hücresinin değeri {digit} olmasaydı çözülmemiş tüm hücreler tam iki adaylı kalırdı ve bulmaca benzersiz çözümünü yitirirdi. Bu nedenle {cell} hücresinin değeri {digit} olmak zorundadır.',
  'hint.bug-plus-one.place':
    '{cell} hücresine {digit} yerleştirin. Benzersizliği koruyan bu fazladan aday deseni {strategy} olarak adlandırılır.',
  'hint.unique-rectangle.rectangle':
    '{cells} konumlarındaki çözülmemiş dört hücre bir dikdörtgenin köşelerini oluşturur.',
  'hint.unique-rectangle.pair-corners':
    '{cells} konumlarındaki hücrelerin aday kümesi tam olarak {digits} rakamlarından oluşur.',
  'hint.unique-rectangle.third-corner':
    '{cell} hücresinin adayları da tam olarak {digits} rakamlarıdır. Böylece üç köşe aynı aday çiftini paylaşır.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} hücresinin adayları {digits} rakamlarıdır ve yalnızca bu köşede fazladan {extra_digit} adayı bulunur.',
  'hint.unique-rectangle.protect-uniqueness':
    '{cell} hücresi {digits} çiftindeki değerlerden birini alsaydı, bu iki rakam dört köşe arasında yer değiştirdiğinde tüm satır, sütun ve kutu kısıtları yine sağlanmış ve ikinci bir çözüm ortaya çıkmış olurdu. Bu nedenle {digits} adaylarını kaldırıp {extra_digit} adayını bırakın.',
  'hint.unique-rectangle.type1-place':
    '{cell} hücresinde yalnızca {digit} adayı kaldığından bu değeri yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.unique-rectangle.observe':
    '{cells}’daki hücreler bir dikdörtgen oluşturur ve tümü {digits} çiftini içerir.',
  'hint.unique-rectangle.type1':
    'Üç köşe tam olarak {digits} içerir. {cell} da her iki rakamı da kullansaydı dikdörtgen iki değiştirilebilir çözüme izin verirdi.',
  'hint.unique-rectangle.type2-first-expanded':
    '{cell} hücresinin aday kümesi {pair} çifti ile {extra_digit} ek adayından oluşur.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} hücresinin aday kümesi de {pair} çifti ile {extra_digit} ek adayından oluşur. Böylece genişletilmiş iki köşe aynı ek adayı, yani {extra_digit} adayını paylaşır.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Birbiriyle değiştirilebilir çözümlerin oluşmasını önlemek için {cells} hücrelerinden en az biri {extra_digit} değerini almak zorundadır. {target} hücresi ikisini de gördüğünden burada {extra_digit} aday olamaz.',
  'hint.unique-rectangle.type2-place':
    '{cell} hücresinde yalnızca {digit} adayı kaldığından bu değeri yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.unique-rectangle.type2':
    '{cells}’daki genişletilmiş iki köşe ekstra aday {digit}’yu paylaşıyor, dolayısıyla her iki köşeyi de gören herhangi bir hücre {digit} içeremez.',
  'hint.unique-rectangle.type3':
    'Dikdörtgendeki ekstra rakamlar {digits}, {unit}’da ayrılmış bir alt küme olarak {cells} ile birleşir, böylece bu rakamlar o ünitenin başka bir yerinde kaldırılabilir.',
  'hint.unique-rectangle.type3-first-expanded':
    '{cell} hücresinde {pair} adaylarına ek olarak {extra_digit} adayı da bulunur.',
  'hint.unique-rectangle.type3-second-expanded':
    '{cell} hücresinde {pair} adaylarına ek olarak {extra_digit} adayı da bulunur. Genişletilmiş köşelerden en az biri ek bir rakamı almak zorundadır; aksi hâlde dört köşedeki {pair} rakamları yer değiştirebilir ve iki farklı çözüm oluşabilir.',
  'hint.unique-rectangle.type3-partner':
    '{cell} hücresinde aday olarak yalnızca {digits} bulunur.',
  'hint.unique-rectangle.type3-reserve':
    '{corners} hücrelerinden biri {digits} adaylarından birini, {partner} hücresi de diğerini almak zorundadır. Bu adaylar {unit} içinde bu hücrelere ayrıldığından {target} hücresinde {removed_digit} aday olamaz.',
  'hint.unique-rectangle.type3-place':
    '{cell} hücresinde yalnızca {digit} adayı kaldı. Bu değeri yerleştirin. Bu desen {strategy} olarak adlandırılır.',
  'hint.unique-rectangle.type4-first-expanded':
    '{cell} hücresinde {pair} adaylarına ek olarak {extra_digit} adayı da bulunur.',
  'hint.unique-rectangle.type4-second-expanded':
    '{cell} hücresinde {pair} adaylarına ek olarak {extra_digit} adayı da bulunur. Böylece genişletilmiş iki köşe de dikdörtgenin aday çiftini içerir.',
  'hint.unique-rectangle.type4':
    '{unit} içindeki {cells} hücrelerinde {digit} adayı eşlenik bir çift oluşturur. Bu nedenle {removed_digit} adayı genişletilmiş köşelerin hiçbirinde yer alamaz; aksi hâlde değerlerin birbiriyle değiştirilebildiği iki çözüm oluşur.',
  'hint.unique-rectangle.type4-apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu benzersizlik ilişkisi {strategy} olarak adlandırılır.',
  'hint.unique-rectangle.apply':
    '{candidates}’yu çıkarın. Bu benzersizlik ilişkisi {strategy}’dur.',
  'hint.unique-rectangle.place':
    'Benzersizlik ilişkisini uyguladıktan sonra {digit}’yu {cell}’ya yerleştirin. Bu model {strategy}’dur.',
  'hint.implication-chain.observe':
    'Yalnızca {digits} adayları bulunan {cell} hücresinden başlayın.',
  'hint.implication-chain.explain':
    '{from} ile {to} bir adayı paylaşır ve birbirini görür; bu aday ikisinde birden doğru olamaz ve çıkarım sürer.',
  'hint.implication-chain.apply':
    'Uçlardan biri {digit} içermelidir; bu yüzden {cells} hücrelerinden {digit} adayını kaldırın. Bu desen {strategy}.',
  'hint.narration.apply': 'Kesintiyi uygulayın: ',
  'hint.narration.look-at': 'Bak ',
  'hint.narration.value-conflict': '. Girilen değeri bulmacayla çelişiyor.',
  'hint.narration.clear-value': 'Değeri temizle ',
  'hint.narration.clear-value-tail':
    ' böylece aday tablosu daha sonra kontrol edilebilir.',
  'hint.narration.candidate-inconsistent':
    '. Aday devleti bulmacayla tutarsız.',
  'hint.narration.reset-candidates': 'Aday ayarını sıfırla ',
  'hint.narration.reset-candidates-tail':
    ' kabul edilen satır, sütun ve kutu değerlerinin izin verdiği her rakama.',
  'hint.narration.only-candidate': '. Tek adayı var: ',
  'hint.narration.no-other-digit': 'Çünkü başka hiçbir rakam giremez ',
  'hint.narration.place': ', yer ',
  'hint.narration.naked-single-tail': ' orada. Buna Çıplak Single denir.',
  'hint.narration.in-unit': 'içinde ',
  'hint.narration.consider-digit': ', nerede olduğunu düşün ',
  'hint.narration.can-appear': ' görünebilir.',
  'hint.narration.other-cells': 'Her bir boş hücre ',
  'hint.narration.cannot-contain': ' içeremez ',
  'hint.narration.leaving-only': ', yalnızca ayrılıyorum ',
  'hint.narration.because-unit': 'Çünkü ',
  'hint.narration.still-needs': ' hala ihtiyaç var ',
  'hint.narration.only-cell': ' ve ',
  'hint.narration.hidden-single-tail': ' mümkün olan tek hücre, yer ',
  'hint.narration.hidden-single-name': ' orada. Buna Gizli Tekli denir.',
  'hint.narration.place-result': 'yer ',
  'hint.narration.in': ' içinde ',
  'hint.narration.remove': 'adayı kaldır ',
  'hint.narration.from': ' itibaren ',
  'hint.narration.strategy-result': '. Bu {strategy} sonucudur.',
  'welcome.eyebrow': 'Yeni bulmaca',
  'welcome.title': 'Zorluk seviyenizi seçin',
  'welcome.lede': 'Bir seviye seçin ve hazır olduğunuzda başlayın.',
  'welcome.difficulty': 'Zorluk',
  'welcome.start': '{difficulty} bulmacasını başlat',
  'welcome.starting': '{difficulty} bulmacası başlatılıyor…',
  'welcome.preview': 'Sudoku bulmaca önizlemesi',
  'loading.initial': 'Bulmacanız yükleniyor…',
  'loading.account.eyebrow': 'Hesap',
  'loading.account.title': 'Bulmacanız hesabınıza kaydediliyor…',
  'loading.account.detail':
    'Hesaba kaydedildiği doğrulanana kadar ilerlemeniz bu cihazda kalır.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Ön sayfaya dönüyoruz…',
  'loading.home.detail':
    'Seviye seçimini göstermeden önce en son arayüz kontrol ediliyor.',
  'loading.restart.eyebrow': 'Aynı bulmaca',
  'loading.restart.title': 'Bu bulmacayı yeniden başlatıyorum…',
  'loading.restart.detail':
    'Yeni deneme hazır olana kadar eski tahtayı kilitli tutmak.',
  'loading.new.eyebrow': 'Yeni bulmaca',
  'loading.new.title': '{difficulty} kartınız hazırlanıyor…',
  'loading.new.detail':
    'Şimdi yeni bir bulmaca oluşturuluyor. Birazdan oynamaya başlayacaksınız.',
  'confirmation.home.eyebrow': 'Eve dönmek mi?',
  'confirmation.home.title': 'Bu bulmacayı bırak',
  'confirmation.home.description':
    'Mevcut ilerlemeniz artık bu cihazda otomatik olarak açılmayacaktır.',
  'confirmation.home.cancel': 'Oynamaya devam et',
  'confirmation.home.confirm': 'Ön sayfaya dön',
  'confirmation.restart.eyebrow': 'Yeniden başlamak mı?',
  'confirmation.restart.title': 'Yeniden başla',
  'confirmation.restart.description':
    'Bu bulmacayı orijinal içeriğinden tekrar oynayın veya farklı bir bulmaca seçin.',
  'confirmation.restart.replay.title': 'Bu bulmacayı tekrar oyna',
  'confirmation.restart.replay.description':
    'Bu verilenleri saklayın ve bu girişimi sıfırlayın.',
  'confirmation.restart.different.title': 'Farklı bir bulmaca oyna',
  'confirmation.restart.different.description':
    'Yeni bir tahta için bir seviye seçin.',
  'confirmation.restart.different.level': 'Farklı bulmacanın seviyesi',
  'common.cancel': 'İptal',
  'account.confirm.deleteGame.eyebrow': 'Kaydedilen oyun silinsin mi?',
  'account.confirm.deleteGame.title': 'Bu oyunu sil',
  'account.confirm.deleteGame.description':
    'Bu bulmaca ve ilerlemesi Oyunlarım’dan kalıcı olarak kaldırılacak. Bu geri alınamaz.',
  'account.confirm.deleteGame.action': 'Oyunu sil',
  'account.confirm.deleteGame.pending': 'Kaydedilen oyun siliniyor…',
  'account.confirm.deleteAll.eyebrow': 'Kaydedilen tüm oyunlar silinsin mi?',
  'account.confirm.deleteAll.title': 'Tüm oyunları sil',
  'account.confirm.deleteAll.description':
    'Oyunlarımdaki her bulmaca ve tüm ilerlemeler kalıcı olarak kaldırılacaktır. Bu geri alınamaz.',
  'account.confirm.deleteAll.action': 'Tüm oyunları sil',
  'account.confirm.deleteAll.pending': 'Tüm oyunlar siliniyor…',
  'account.confirm.revoke.eyebrow': 'Hesap güvenliği',
  'account.confirm.revoke.title': 'Tüm cihazlardan çıkış yap',
  'account.confirm.revoke.description':
    'Bu cihaz dâhil tüm cihazlardan çıkış yapılır. Hesabınız ve kayıtlı oyunlarınız korunur.',
  'account.confirm.revoke.action': 'Tüm cihazlardan çıkış yap',
  'account.confirm.revoke.pending': 'Tüm cihazlardan çıkış yapılıyor…',
  'account.confirm.deleteAccount.eyebrow': 'Kalıcı eylem',
  'account.confirm.deleteAccount.title': 'Hesabınızı silin',
  'account.confirm.deleteAccount.description':
    'Kimliğiniz, oturum açtığınız her oturum ve kayıtlı tüm oyunlar kalıcı olarak kaldırılacaktır. Paylaşılan bulmaca kataloğu etkilenmez.',
  'account.confirm.deleteAccount.action': 'Hesabı sil',
  'account.confirm.deleteAccount.pending': 'Hesap siliniyor…',
  'account.confirm.typeEmail': 'Onaylamak için {email} yazın',
  'account.label': 'Hesap',
  'account.continue.title': 'Diğer cihazlarda devam et',
  'account.continue.detail':
    'Bu tarayıcının aktif oyununu otomatik olarak kaydetmek için oturum açın.',
  'account.signIn': 'Google ile oturum açın',
  'account.signIn.short': 'Oturum aç',
  'game.title': '{difficulty} bulmaca',
  'game.statusActions': 'Oyun durumu ve eylemler',
  'game.elapsed': 'Geçen süre',
  'game.mistakes': 'Hatalar {count}',
  'game.resume': 'Devam et',
  'game.pause': 'Duraklat',
  'status.resumed': 'Bulmaca devam etti.',
  'status.paused': 'Bulmaca duraklatıldı.',
  'status.restarted': 'Bulmaca yeniden başlatıldı. Yeni deneme, aynı bulmaca.',
  'status.hintClosed': 'İpucu kapatıldı. Bulmacanız değişmedi.',
  'status.strategyApplied':
    'Strateji uygulandı. Tek adımda bu işlemi geri alabilirsiniz.',
  'status.correctionApplied':
    'Düzeltme uygulandı. Tek adımda bu işlemi geri alabilirsiniz.',
  'status.hintAlreadyApplied': 'Bu ipucu zaten tahtaya yansıdı.',
  'status.hintRefreshed': 'Tahta değiştiği için ipucu yenilendi.',
  'status.accountSaved': 'Oyun hesabınıza kaydedildi.',
  'status.waitBeforeLeaving':
    'Bu bulmacadan ayrılmadan önce bekleyen hamleleri bekleyin.',
  'status.selectEditableCell':
    'Sayı girmeden önce düzenlenebilir bir hücre seçin.',
  'status.savingAccount': 'Yerel oyununuz hesabınıza kaydediliyor…',
  'status.restoring': 'Bulmacanız geri yükleniyor…',
  'status.restored': 'Yerel bulmacanız geri yüklendi.',
  'status.puzzleReady': '{difficulty} bulmacası hazır.',
  'status.puzzleRestored': '{difficulty} bulmacası geri yüklendi.',
  'status.waitBeforeStarting':
    'Başka bir bulmacaya başlamadan önce bekleyen hamleleri bekleyin.',
  'status.solved': 'Çözüldü! Harika iş.',
  'status.moveSaved': 'Taşı kaydedildi.',
  'status.waitBeforeHint':
    'Bir ipucu açmadan önce bekleyen hamleleri bekleyin.',
  'status.hintReady': 'İpucu hazır. 1. adımla başlayın.',
  'status.openingSaved': 'Kayıtlı oyununuz açılıyor…',
  'status.savedDeleted': 'Kaydedilen oyun silindi.',
  'status.allDeleted': 'Kaydedilen tüm oyunlar silindi.',
  'status.signedOut': 'Oturumu kapattım. Hesabınızdaki oyunlar kayıtlı kalır.',
  'status.revoked':
    'Tüm cihazlardan çıkış yapıldı. Devam etmek için yeniden giriş yapın.',
  'status.accountDeleted': 'Hesap ve kayıtlı oyunlar silindi.',
  'retry.saving': 'Tekrar kaydetmeyi deneyin',
  'retry.restoring': 'Tekrar geri yüklemeyi deneyin',
  'retry.connection': 'Bağlantıyı kontrol edin',
  'retry.starting': 'Tekrar başlamayı deneyin',
  'retry.move': 'Taşımayı yeniden dene',
  'retry.hint': 'İpucunu tekrar deneyin',
  'retry.time': 'Zamandan tasarruf etmeyi yeniden deneyin',
  'retry.progress': 'İlerlemeyi kaydetmeyi yeniden deneyin',
  'retry.leaving': 'Tekrar ayrılmayı dene',
  'retry.opening': 'Tekrar açmayı deneyin',
  'retry.deleting': 'Tekrar silmeyi deneyin',
  'retry.signOut': 'Oturumu tekrar kapatmayı deneyin',
  'retry.revoke': 'Tüm cihazlardan çıkış yapmayı yeniden dene',
  'retry.deleteAccount': 'Hesabı silmeyi tekrar deneyin',
  'error.accountSave': 'Yerel oyununuz güvende ancak hesabınıza kaydedilemedi.',
  'error.restoring': 'Bulmacanız geri yüklenemedi.',
  'error.connection':
    'Oyun servisine ulaşılamadı. Bağlantınızı kontrol edip tekrar deneyin.',
  'error.http': 'Oyun hizmeti {status} hatası döndürdü. Lütfen tekrar deneyin.',
  'error.unavailable':
    'Oyun hizmeti geçici olarak kullanılamıyor. Tahtanız güvende; tekrar deneyin.',
  'error.starting': 'Oyun başlatılamadı.',
  'error.signInAgain': 'Hareketleri kaydetmek için tekrar oturum açın.',
  'error.localUnavailable': 'Yerel oyun mevcut değil.',
  'error.move': 'Hareket kaydedilemedi.',
  'error.currentUnavailable': 'Mevcut oyun kullanılamıyor.',
  'error.hintChanged': 'İpucu hazırlanırken tahta değişti.',
  'error.hint': 'İpucu hazırlanamadı.',
  'error.time': 'En son oyun zamanı kaydedilemedi.',
  'error.timer': 'En son zamanlayıcı durumu kaydedilemedi.',
  'error.leaving': 'Yerel bulmaca temizlenemedi.',
  'error.opening': 'Kaydedilen oyun açılamadı.',
  'error.deleteGame': 'Kaydedilen oyun silinemedi.',
  'error.deleteAll': 'Kaydedilen oyunlar silinemedi.',
  'error.signOut': 'Oturumunuz kapatılamadı.',
  'error.revoke': 'Oturumlar iptal edilemedi.',
  'error.deleteAccount': 'Hesap silinemedi.',
  'error.invalid-request': 'İstek geçersiz.',
  'error.invalid-json': 'İstek geçersiz JSON içeriyor.',
  'error.unsupported-media-type': 'İçerik Türü isteği desteklenmiyor.',
  'error.payload-too-large': 'Talep çok büyük.',
  'error.unauthorized': 'Yetkilendirme gereklidir.',
  'error.forbidden-origin': 'Bu isteğin kaynağına izin verilmiyor.',
  'error.session-not-found': 'Oyun oturumu bulunamadı.',
  'error.revision-conflict': 'Bu hamle uygulanmadan önce tahta değişti.',
  'error.invalid-session': 'Oyun oturumu geçersiz.',
  'error.invalid-action': 'Bu oyun eylemi geçersiz.',
  'error.invalid-cell': 'Bu hücre geçersiz.',
  'error.immutable-cell': 'Belirli bir hücre değiştirilemez.',
  'error.note-not-allowed': 'Bu hücrede aday değiştirilemez.',
  'error.no-undo': 'Geri alınacak bir işlem yok.',
  'error.no-redo': 'Tekrarlanacak bir işlem yok.',
  'error.no-hint': 'Hiçbir ipucu mevcut değil.',
  'error.stale-hint': 'Bu ipucu hazırlandıktan sonra tahta değişti.',
  'error.persistence-failed': 'Oyun kaydedilemedi.',
  'error.internal-error': 'İstek tamamlanamadı.',
  'error.account-unavailable': 'Hesap özellikleri kullanılamıyor.',
  'error.account-unauthorized': 'Geçerli bir uygulama oturumu gereklidir.',
  'error.csrf-failed': 'Bu giriş doğrulanamadı. Lütfen yeniden giriş yapın.',
  'error.account-game-not-found': 'Kaydedilen oyun bulunamadı.',
  'error.guest-revision-conflict':
    'Bu eylem uygulanmadan önce yerel oyun değişti.',
  'error.guest-claim-conflict': 'Bu yerel oyun zaten bir hesaba kaydedilmiş.',
  'error.malformedDescriptor': 'Açıklama görüntülenemedi.',
  'account.close': 'Hesap panelini kapat',
  'account.games.title': 'Oyunlarım',
  'account.games.deleteAll': 'Tümünü sil',
  'account.games.deletingAll': 'Hepsi siliniyor…',
  'account.games.empty': 'Henüz kayıtlı oyun yok.',
  'account.games.puzzle': '{difficulty} bulmaca',
  'account.games.finished': 'Bitti',
  'account.games.inProgress': 'Devam ediyor',
  'account.games.saved': 'Kaydedilen oyun',
  'account.games.open': 'Açık',
  'account.games.opening': 'Açılıyor…',
  'account.games.delete': 'Sil',
  'account.games.deleting': 'Siliniyor…',
  'account.signOut': 'Oturumu kapat',
  'account.signingOut': 'Oturum kapatılıyor…',
  'account.settings': 'Hesap ayarları',
  'account.revoke': 'Tüm cihazlardan çıkış yap',
  'account.delete': 'Hesabı sil',
  'board.label': 'Sudoku oyun tahtası',
  'board.cell.given': 'verilen {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'boş, adaylar {candidates}',
  'board.cell.empty': 'boş',
  'board.hint.focus': 'ipucu odağı',
  'board.hint.premise': 'ipucu kanıtı',
  'board.hint.eliminated': 'aday elendi',
  'board.hint.conclusion': 'ipucu sonuç',
  'board.hint.problem': 'düzeltilmesi gerekiyor',
  'board.hint.extra': 'imkansız aday',
  'board.hint.group': 'grup {group}',
  'board.hint.chain': 'zincir konumu {position}',
  'board.paused.title': 'Bulmaca duraklatıldı',
  'board.paused.detail': 'Zamanınız durduruldu.',
  'hint.label': 'İpucu',
  'hint.close': 'Kapat',
  'hint.strategy.grade': '{grade} stratejisi',
  'hint.applying': 'İpucu uygulanıyor…',
  'hint.refreshing': 'Canlandırıcı ipucu…',
  'hint.step': '{total}’nun {current} Adımı',
  'hint.legend.label': 'Görsel ipucu efsanesi',
  'hint.legend.strong': 'Katı: içermelidir',
  'hint.legend.weak': 'Kesikli: her ikisi de olamaz',
  'hint.legend.implication': 'Ok: ima',
  'hint.legend.groups': 'A/B: alternatif gruplar',
  'hint.legend.order': 'Sayılar: zincirleme sıra',
  'hint.back': 'Geri',
  'hint.next': 'Sonraki',
  'hint.apply': 'İpucu uygula',
  'controls.label': 'Oyun kontrolleri',
  'controls.digit.note': '{digit} notunu ekle veya kaldır',
  'controls.digit.enter': '{digit}’yu girin',
  'controls.hint.preparing': 'İpucu hazırlanıyor…',
  'controls.hint.preparingDetail':
    'Bir sonraki adım hazırlanırken bulmacayı görünür tutmak.',
  'controls.complete.eyebrow': 'Bulmaca tamamlandı',
  'controls.complete.title': '{time}’da çözüldü',
  'controls.complete.detail':
    'Başka bir {difficulty} kartıyla ritmi koruyun veya farklı bir seviye seçin.',
  'controls.complete.another': 'Başka bir {difficulty} çal',
  'controls.complete.replay': 'Bu bulmacayı tekrar oyna',
  'controls.complete.choose': 'Başka bir seviye seçin',
  'controls.pad': 'Sayısal tuş takımı',
  'controls.pad.notes': 'Sayısal tuş takımı, notlar modu',
  'controls.modes': 'Giriş modları',
  'controls.notes.on': 'Hakkında notlar',
  'controls.notes.off': 'Notlar kapalı',
  'controls.candidates.on': 'Adaylar',
  'controls.candidates.off': 'Adaylar kapalı',
  'controls.actions': 'Bulmaca eylemleri',
  'controls.erase': 'Sil',
  'controls.undo': 'Geri al',
  'controls.undoing': 'Geri alınıyor…',
  'controls.redo': 'Yinele',
  'controls.redoing': 'Yeniden yapılıyor…',
  'controls.hint.reveal': 'Bir ipucunu açığa vur',
  'controls.shortcuts': 'Klavye kısayolları',
  'controls.shortcuts.move': 'Taşı',
  'controls.shortcuts.arrows': 'Ok tuşları',
  'controls.shortcuts.enter': 'Bir numara girin',
  'controls.shortcuts.notes': 'Notlar / adaylar',
  'controls.shortcuts.or': 'veya',
  'controls.shortcuts.pause': 'Duraklat veya devam ettir',
  'controls.shortcuts.hint': 'Bir ipucunu açın, ilerletin veya uygulayın',
  'controls.shortcuts.hintOther': 'Diğer ipucu kontrolleri',
  'hint.target.candidate.visible': 'bu öne çıkan aday',
  'hint.target.candidate.accessible':
    'aday {value}, {row} satırı, {column} sütunu',
  'hint.target.cell.visible': 'bu vurgulanan hücre',
  'hint.target.cell.accessible': 'satır {row}, sütun {column}',
  'hint.target.unit.visible': 'bu vurgulandı {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'sıra',
  'hint.target.column': 'sütun',
  'hint.target.box': 'kutu',
  'chrome.home': 'Sudoku ana sayfası',
  'chrome.appearance': 'Görünüm',
  'chrome.theme.use': '{theme} temasını kullanın',
  'chrome.theme.systemTitle': 'Sistem teması ({theme})',
  'chrome.theme.title': '{theme} teması',
  'chrome.theme.system': 'Sistem',
  'chrome.theme.systemName': 'sistem',
  'chrome.theme.light': 'ışık',
  'chrome.theme.dark': 'karanlık',
  'chrome.connection.connecting': 'Bağlanıyor',
  'chrome.connection.unavailable': 'Hizmet kullanılamıyor',
  'chrome.footer.tagline': 'Dikkat dağıtmadan, düşünceli bir oyun.',
  'chrome.footer.privacy': 'Gizlilik',
  'chrome.footer.terms': 'Şartlar',
  'chrome.footer.input': 'Klavye ve dokunmaya hazır',
};
