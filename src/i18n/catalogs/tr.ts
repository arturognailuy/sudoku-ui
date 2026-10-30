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
  'hint.strategy.observe':
    'Vurgulanan hücreleri, adayları, satırları, sütunları ve kutuları kontrol edin.',
  'hint.strategy.compare':
    'Kesin sonucu bulmak için vurgulanan kısıtlamaları karşılaştırın.',
  'hint.strategy.conclude':
    'Vurgulanan sonucu uygulayın. Bu desen {strategy} tekniğidir.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Aday {digit} iki alternatif grup oluşturur: {group_a}’da A ve {group_b}’da B.',
  'hint.coloring.alternatives':
    'Her katı bağlantı, tam olarak bir uç noktanın {digit} içerdiği anlamına gelir, dolayısıyla bağlı adaylar A ve B grupları arasında geçiş yapar. Bir çakışma bir grubu dışlayabilirken, her iki grubu da gören bir hücre {digit} içeremez.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Bağlantılı adaylar {colored_digit} sonucunu zorlar. {candidates}’yu kaldırın. Bu model {strategy}’dur.',
  'hint.coloring.place':
    '{colored_digit} için bağlantılı adaylar sonucu zorlar. {digit}’yu {cell}’ya yerleştirin. Bu model {strategy}’dur.',
  'hint.x-cycle.opening':
    '{unit}’te {digit} yalnızca {cells}’e gidebilir. Bu iki hücreden birinin {digit} içermesi gerekir.',
  'hint.x-cycle.assume':
    '{start}’in {digit} olmadığını varsayalım. O zaman {forced}’in {digit} olması gerekir. Bu, {blocked}’in {digit} olamayacağı anlamına gelir, dolayısıyla {unit}, {digit}’i {result}’e zorlar.',
  'hint.x-cycle.follow':
    '{true_cell}, {digit} olduğundan {blocked}, {digit} olamaz. Bu nedenle {unit}, {digit}’i {result}’e ​​zorlar.',
  'hint.x-cycle.close':
    '{true_cell}, {digit} olduğundan {blocked}, {digit} olamaz. {unit}’te bu, {result}’i {digit} için tek yer olarak bırakır.',
  'hint.x-cycle.place':
    '{assumption}’in {digit} olmadığı yönündeki başlangıç ​​varsayımı, {cell}’in {digit} olmasına yol açar, dolayısıyla varsayım doğru olamaz. {digit}’i {cell}’e yerleştirin. Bu modele {strategy} adı verilir.',
  'hint.xy-chain.start':
    '{cell} yalnızca {first_digit} ve {second_digit} adaylarına sahip. Ya {endpoint_digit} değerindedir ya da {endpoint_digit} değilse {other_digit} olmak zorundadır.',
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
    '{unit} içinde {digit} rakamının nereye gelebileceğini kontrol edin.',
  'hint.hidden-single.blockers':
    '{blockers} konumlarındaki yerleştirilmiş {digit} rakamları, {unit} içindeki diğer tüm boş hücrelerden {digit} olasılığını eler.',
  'hint.hidden-single.only': 'Yalnızca {cell} hâlâ {digit} içerebilir.',
  'hint.hidden-single.apply':
    '{cell} hücresine {digit} yerleştirin. Bir rakamın satır, sütun veya kutuda yalnızca bir olası hücresi kaldığında buna {strategy} denir.',
  'hint.naked-pair.inspect':
    '{unit} ile başlayın: {cell} yalnızca {first_digit} veya {second_digit} içerebilir.',
  'hint.naked-pair.match':
    '{cell} aynı iki adaya sahip: {first_digit} ve {second_digit}.',
  'hint.naked-pair.reserve':
    'Bu iki hücre {digits} değerlerini bir sırayla almalıdır; bu nedenle aday {digit}, {unit} içindeki başka hiçbir hücrede kalamaz.',
  'hint.naked-pair.apply':
    '{candidates} öğesini kaldırın; bu adım bir değer yerleştirmez. Bu desen bir {strategy}.',
  'hint.naked-triple.first':
    '{unit} ile başlayın: {cell} yalnızca {first_digit} veya {second_digit} içerebilir.',
  'hint.naked-triple.second':
    '{cell} hücresini ekleyin; yalnızca {first_digit} veya {second_digit} içerebilir.',
  'hint.naked-triple.third':
    '{cell} hücresini ekleyin; yalnızca {first_digit} veya {second_digit} içerebilir. Üç hücre artık yalnızca {reserved_digits} içeriyor.',
  'hint.naked-triple.consequence':
    'Bu üç hücre {reserved_digits} rakamlarını bir sırayla almalıdır. Bu yüzden {cell} hücresinden {removed_digits} çıkarılır ve yalnızca {remaining_digit} kalır.',
  'hint.naked-triple.apply':
    '{cell} hücresine {digit} yerleştirin. Adayları aynı üç rakamla sınırlı üç hücre bir {strategy} oluşturur.',
  'hint.naked-quad.cell': '{unit} içinde {cell} yalnızca {digits} içerebilir.',
  'hint.subset-reservation.observe':
    '{unit} içinde {cells} yalnızca {digits} içerir.',
  'hint.subset-reservation.explain':
    'Bu hücreler {unit} içinde {digits} sayılarını ayırır; bu yüzden oradaki başka hiçbir hücre bu sayıları içeremez.',
  'hint.subset-reservation.apply':
    '{candidates} adaylarını kaldırın. Bu desen {strategy}.',
  'hint.subset-reservation.place':
    '{cell} hücresine {digit} yerleştirin. Bu desenin adı {strategy}.',
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
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-triple.third':
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-triple.consequence':
    '{digits}, {unit} içindeki bu hücrelerle sınırlı olduğundan hücreler başka aday içeremez.',
  'hint.hidden-triple.apply':
    'Sınırlı hücrelerden {candidates} adaylarını kaldırın. Bu desen {strategy}.',
  'hint.hidden-quad.first':
    '{unit} içinde {digit} adayı yalnızca {cells} hücrelerinde bulunur.',
  'hint.hidden-quad.second':
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.third':
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.fourth':
    '{unit} içinde {digits} yalnızca {cells} hücrelerinde bulunabilir.',
  'hint.hidden-quad.consequence':
    '{digits}, {unit} içindeki bu hücrelerle sınırlı olduğundan hücreler başka aday içeremez.',
  'hint.hidden-quad.apply':
    'Sınırlı hücrelerden {candidates} adaylarını kaldırın. Bu desen {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    '{source_unit}’da aday {digit}, {cells}’daki {intersection_unit} ile sınırlıdır.',
  'hint.intersection-confinement.explain':
    '{source_unit}’daki her {digit}, {intersection_unit}’da bulunduğundan, kaynağın dışındaki ancak kesişimin içindeki hücreler onu içeremez.',
  'hint.intersection-confinement.apply':
    '{digit} adayını {cells}’dan çıkarın. Bu model {strategy}’dur.',
  'hint.intersection-confinement.place':
    'Kavşağı uyguladıktan sonra {digit}’yu {cell}’ya yerleştirin. Bu model {strategy}’dur.',
  'hint.fish-confinement.observe':
    '{base_units} içinde {digit} adayı yalnızca {cover_units} içinde görünür.',
  'hint.fish-confinement.explain':
    '{digit} adayı {base_units} birimlerinden {cover_units} birimlerine hapsolmuştur; bu örtü birimleri sayıyı vurgulanan taban konumlarından almalıdır.',
  'hint.swordfish.consequence':
    '{base_units} birimlerinin her birinden bir {digit}, {cover_units} içinde yer almalıdır. Bu yerleşimler üç sütunun her birini bir kez kullanır; bu nedenle bu sütunlarda başka bir {digit} kalamaz.',
  'hint.jellyfish.consequence':
    '{base_units} birimlerinin her birinden bir {digit}, {cover_units} içinde yer almalıdır. Bu yerleşimler dört sütunun her birini bir kez kullanır; bu nedenle bu sütunlarda başka bir {digit} kalamaz.',
  'hint.fish-confinement.apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu desen {strategy}.',
  'hint.x-wing.first':
    '{base_unit} içinde {digit} adayı yalnızca {cover_units} üzerinde bulunur.',
  'hint.x-wing.second':
    'Aynı durum {base_unit} için de geçerlidir: {digit} adayı yalnızca {cover_units} üzerinde bulunur. İki satır da aynı iki sütunu kullanır.',
  'hint.x-wing.consequence':
    '{base_units} birer {digit} içermelidir; bu yüzden {cover_units} bu satırlardan birinden birer {digit} alır. Bu sütunlardaki diğer {digit} adayları silinebilir.',
  'hint.x-wing.apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu desenin adı {strategy}.',
  'hint.pivot-wing.observe':
    '{pivot}’da, {pivot_digits} adayları kanat hücrelerini {wing_cells}’ya bağlar.',
  'hint.pivot-wing.explain':
    '{wing_cells}’daki her kanat, {pivot}’daki pivotla bir adayı paylaşıyor ve her iki kanat da {shared_digit} içeriyor. Hangi pivot adayı doğru olursa olsun, bir kanadın {shared_digit} içermesi gerekir.',
  'hint.xy-wing.pivot':
    '{pivot} hücresinde yalnızca {digits} adayları var. Bunlardan biri olmalı.',
  'hint.xy-wing.case':
    '{pivot} {pivot_digit} ise {wing} {pivot_digit} olamaz. Diğer tek adayı {shared_digit} olduğundan {wing} {shared_digit} olmalıdır.',
  'hint.xy-wing.guarantee':
    '{pivot} hücresinde hangi aday doğru olursa olsun, {wing_cells} kanatlarından en az biri {shared_digit} olmalıdır. Hangisi olduğunu bilmemiz gerekmez.',
  'hint.xy-wing.apply':
    '{cells}, {wing_cells} kanatlarının ikisini de görür. En az biri {shared_digit} olduğundan bu hücrelerden {shared_digit} adayını çıkarın. Bu desenin adı {strategy}.',
  'hint.xy-wing.place':
    '{cell}, {wing_cells} kanatlarının ikisini de görür. En az biri {shared_digit} olduğundan {cell} {shared_digit} olamaz. Diğer tek aday {digit}; {digit} yerleştirin. Bu desenin adı {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} hücresinde yalnızca {digits} adayları var. Bunlardan biri doğru olmalı.',
  'hint.xyz-wing.case':
    '{pivot} değeri {pivot_digit} ise aynı {unit} içindeki {wing}, {pivot_digit} olamaz. Diğer tek aday {shared_digit} olduğundan {wing} değeri {shared_digit} olmalıdır.',
  'hint.xyz-wing.pivot-case':
    '{pivot} değeri {shared_digit} ise pivotun kendisi zaten {shared_digit} içerir.',
  'hint.xyz-wing.guarantee':
    '{pivot} hücresinde hangi aday doğru olursa olsun {pattern_cells} hücrelerinden en az biri {shared_digit} olmalıdır. Hangisi olduğunu bilmemiz gerekmez.',
  'hint.xyz-wing.apply':
    '{target}; {first_pattern_cell} ile {first_unit}, {second_pattern_cell} ile {second_unit} ve {third_pattern_cell} ile {third_unit} paylaşır. Bu üç hücreden en az biri {shared_digit} olduğundan {target} bu değeri alamaz. {shared_digit} adayını kaldırın. Bu desenin adı {strategy}.',
  'hint.strong-link-wing.observe':
    '{wing_cells} hücrelerinin her biri yalnızca {digits} içerebilir.',
  'hint.strong-link-wing.bridge':
    '{unit} içinde {link_digit} adayı yalnızca {link_cells} hücrelerinde bulunabilir; bu nedenle bu hücrelerden en az biri {link_digit} olmalıdır.',
  'hint.strong-link-wing.force':
    '{first_link_cell} {link_digit} ise {first_wing_cell} {link_digit} olamaz ve {forced_digit} olmalıdır. {second_link_cell} {link_digit} ise {second_wing_cell} {forced_digit} olmalıdır. Dolayısıyla bu iki hücreden en az biri {forced_digit} değerindedir.',
  'hint.strong-link-wing.apply':
    '{wing_cells} hücrelerinden en az biri {digit} değerindedir. Bu hücreler ikisini de gördüğü için {cells} içinden {digit} adayını çıkarın. Bu desenin adı {strategy}dır.',
  'hint.strong-link-wing.place':
    '{wing_cells} hücrelerinden en az biri {removed_digit} değerindedir. {cell} ikisini de gördüğü için {removed_digit} adayını çıkarın ve oraya {digit} yerleştirin. Bu desenin adı {strategy}dır.',
  'hint.relational-wing.apply':
    '{digit} adayını {cells}’dan çıkarın. Bu model {strategy}’dur.',
  'hint.relational-wing.place':
    '{removed_digit} adayını {cell}’dan çıkarın, böylece {digit}’yu oraya yerleştirin. Bu model {strategy}’dur.',
  'hint.bug-plus-one.bivalue':
    '{cell} dışında, çözülmemiş diğer {count} hücrenin her birinde tam iki aday var.',
  'hint.bug-plus-one.trivalue':
    '{cell} hücresinde üç aday var: {digits}; bu, diğer çözülmemiş hücrelerden bir fazladır.',
  'hint.bug-plus-one.unit-count':
    '{unit} içinde {digit} adayının üç olası yeri, {other_digits} adaylarının ise ikişer yeri var.',
  'hint.bug-plus-one.explain':
    '{units} içinde {digit} adayının {other_digits} adaylarından bir fazla olası yeri var. {cell} hücresi {digit} olmasaydı tüm çözülmemiş hücreler iki adaylı olur ve bulmacanın tek çözümü kalmazdı. Bu nedenle {cell}, {digit} olmalıdır.',
  'hint.bug-plus-one.place':
    '{digit}’yu {cell}’ya yerleştirin. Bu benzersizlik istisnası {strategy}’dur.',
  'hint.unique-rectangle.rectangle':
    '{cells}’teki çözülmemiş dört hücre, bir dikdörtgenin köşelerinde bulunur.',
  'hint.unique-rectangle.pair-corners': '{cells}’te tek aday {digits}’tir.',
  'hint.unique-rectangle.third-corner':
    '{cell} aynı zamanda tam olarak {digits}’tir. Üç köşe artık aynı çifte sahip.',
  'hint.unique-rectangle.expanded-corner':
    '{cell}, {digits}’i içerir. Ekstra aday {extra_digit}’in bulunduğu tek köşedir.',
  'hint.unique-rectangle.protect-uniqueness':
    '{cell}, {digits} çiftinden herhangi bir adayı tutarsa, dört köşenin tümü herhangi bir satır, sütun veya kutuyu değiştirmeden bu iki rakamı değiştirebilir. Bulmacanın iki çözümü olacaktır, bu nedenle {digits}’i kaldırın ve {extra_digit}’i saklayın.',
  'hint.unique-rectangle.type1-place':
    '{cell}’te yalnızca {digit} kalır. Oraya yerleştirin. Bu model {strategy}’tir.',
  'hint.unique-rectangle.observe':
    '{cells}’daki hücreler bir dikdörtgen oluşturur ve tümü {digits} çiftini içerir.',
  'hint.unique-rectangle.type1':
    'Üç köşe tam olarak {digits} içerir. {cell} da her iki rakamı da kullansaydı dikdörtgen iki değiştirilebilir çözüme izin verirdi.',
  'hint.unique-rectangle.type2-first-expanded':
    '{cell}, {pair} veya {extra_digit} olabilir.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} hücresinde de {pair} ve {extra_digit} adayları var. Böylece iki genişletilmiş köşe, ek aday {extra_digit} değerini paylaşır.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Birbiriyle değiştirilebilir iki çözümü önlemek için {cells} hücrelerinden en az biri {extra_digit} olmalıdır. {target} iki hücreyi de gördüğü için {extra_digit} olamaz.',
  'hint.unique-rectangle.type2-place':
    '{cell} hücresinde yalnızca {digit} kaldı. Buraya yerleştirin. Bu desenin adı {strategy}.',
  'hint.unique-rectangle.type2':
    '{cells}’daki genişletilmiş iki köşe ekstra aday {digit}’yu paylaşıyor, dolayısıyla her iki köşeyi de gören herhangi bir hücre {digit} içeremez.',
  'hint.unique-rectangle.type3':
    'Dikdörtgendeki ekstra rakamlar {digits}, {unit}’da ayrılmış bir alt küme olarak {cells} ile birleşir, böylece bu rakamlar o ünitenin başka bir yerinde kaldırılabilir.',
  'hint.unique-rectangle.type3-first-expanded':
    '{cell} hücresinde {pair} ve ek aday {extra_digit} da var.',
  'hint.unique-rectangle.type3-second-expanded':
    '{cell} hücresinde {pair} ve ek aday {extra_digit} da var. Üst köşelerden en az biri ek bir rakam kullanmalıdır; aksi hâlde dört köşe {pair} değerlerini değiştirerek iki çözüm oluşturabilir.',
  'hint.unique-rectangle.type3-partner': '{cell} yalnızca {digits} içerebilir.',
  'hint.unique-rectangle.type3-reserve':
    '{corners} hücrelerinden biri {digits} değerlerinden birini, {partner} ise diğerini kullanmalıdır. Bu rakamlar {unit} içinde ayrılmıştır; bu yüzden {target}, {removed_digit} içeremez.',
  'hint.unique-rectangle.type3-place':
    '{cell} hücresinde yalnızca {digit} kaldı. Buraya yerleştirin. Bu desenin adı {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    '{cell} hücresinde {pair} ve ek aday {extra_digit} da var.',
  'hint.unique-rectangle.type4-second-expanded':
    '{cell} hücresinde {pair} ve ek aday {extra_digit} da var. Artık genişletilmiş iki köşe de dikdörtgen çiftini içeriyor.',
  'hint.unique-rectangle.type4':
    'Aday {digit}, {cells}’da {unit}’da eşlenik bir çift olarak görünür, dolayısıyla aday {removed_digit}, değiştirilebilir çözümler oluşturmadan genişletilmiş köşelerden herhangi birini işgal edemez.',
  'hint.unique-rectangle.type4-apply':
    '{cells} hücrelerinden {digit} adayını kaldırın. Bu benzersizlik ilişkisine {strategy} denir.',
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
