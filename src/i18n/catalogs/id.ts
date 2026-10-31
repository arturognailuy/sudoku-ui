import type { MessageCatalog } from './types';

export const id: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, other {# kesalahan}}',
  'board.cell':
    'Baris {row}, kolom {column}, {content}{pending, select, true {, sedang diperiksa} other {}}{invalid, select, true {, tidak valid} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Bahasa',
  'common.language.auto': 'Otomatis',
  'accessibility.language.changed': 'Bahasa diubah menjadi {language}.',
  'common.difficulty.easy': 'Mudah',
  'common.difficulty.medium': 'Sedang',
  'common.difficulty.hard': 'Keras',
  'common.difficulty.expert': 'Ahli',
  'common.difficulty.evil': 'Jahat',
  'difficulty.easy.name': 'Mudah',
  'difficulty.medium.name': 'Sedang',
  'difficulty.hard.name': 'Keras',
  'difficulty.expert.name': 'Ahli',
  'difficulty.evil.name': 'Jahat',
  'hint.value-correction.title': 'Perbaiki nilai ini',
  'hint.candidate-correction.title': 'Perbaiki sel kandidat ini',
  'hint.value-correction.summary':
    'Nilai di {cell} bertentangan dengan teka-teki. Hapus sebelum melanjutkan.',
  'hint.candidate-correction.summary':
    'Sebelum melanjutkan, susun ulang kandidat di {cell} berdasarkan angka yang sudah terisi pada baris, kolom, dan kotaknya.',
  'hint.strategy.summary':
    'Ikuti {steps} langkah ini untuk memahami dan menerapkan {strategy}.',
  'hint.value-correction.observe':
    'Periksa {cell}. Nilainya bertentangan dengan papan.',
  'hint.value-correction.conclude':
    'Hapus nilai pada {cell} sehingga kandidat grid dapat diperiksa selanjutnya.',
  'hint.candidate-correction.observe':
    'Periksa {cell}. Kandidatnya tidak sesuai dengan papan.',
  'hint.candidate-correction.compare':
    'Susun ulang kandidat sel ini berdasarkan angka yang sudah terisi pada baris, kolom, dan kotaknya.',
  'hint.candidate-correction.conclude':
    'Atur ulang kandidat di {cell} menjadi semua angka yang diizinkan oleh baris, kolom, dan kotaknya.',
  'hint.coloring.pair':
    'Di {unit}, hanya {cells} yang dapat berisi {digit}. Tepat satu dari kedua sel itu harus berisi angka tersebut; beri kedua kemungkinan itu label A dan B.',
  'hint.coloring.chain':
    'Lanjutkan melalui setiap tautan kuat, yaitu hubungan antara dua posisi yang menjadi satu-satunya tempat bagi {digit} dalam suatu baris, kolom, atau kotak. Label harus berselang-seling di sepanjang rantai, dengan A pada {group_a} dan B pada {group_b}.',
  'hint.coloring.alternatives':
    'Ada dua penetapan yang mungkin: semua sel A berisi {digit} dan semua sel B tidak, atau semua sel B berisi {digit} dan semua sel A tidak. Eliminasi tetap dapat dilakukan tanpa menentukan penetapan mana yang berlaku.',
  'hint.coloring.elimination':
    '{cell} berbagi baris, kolom, atau kotak dengan sel berlabel A di {group_a_cell} dan sel berlabel B di {group_b_cell}. Salah satu kelompok warna pasti berisi {digit}, sehingga sel ini tidak dapat memuat angka tersebut.',
  'hint.coloring.apply':
    'Hapus {candidates}. Setiap sel target berbagi unit dengan satu sel berlabel A dan satu sel berlabel B untuk {colored_digit}. Karena salah satu kelompok warna pasti berisi angka tersebut, kandidat itu harus dihapus dari sel target. Pola ini disebut {strategy}.',
  'hint.coloring.place':
    'Kandidat terkait untuk {colored_digit} memaksakan hasilnya. Tempatkan {digit} di {cell}. Pola ini adalah {strategy}.',
  'hint.x-cycle.opening':
    'Di {unit}, kandidat {digit} hanya dapat berada di {cells}. Salah satu dari kedua sel itu harus berisi {digit}.',
  'hint.x-cycle.assume':
    'Andaikan {start} bukan {digit}. Maka {forced} harus berisi {digit}. Akibatnya, {blocked} tidak dapat berisi {digit}; di {unit}, satu-satunya tempat yang tersisa untuk {digit} adalah {result}.',
  'hint.x-cycle.follow':
    'Karena {true_cell} berisi {digit}, {blocked} tidak dapat berisi {digit}. Di {unit}, keadaan ini memaksa {digit} ditempatkan di {result}.',
  'hint.x-cycle.close':
    'Karena {true_cell} berisi {digit}, {blocked} tidak dapat berisi {digit}. Di {unit}, kini {result} menjadi satu-satunya tempat bagi {digit}.',
  'hint.x-cycle.place':
    'Anggapan awal bahwa {assumption} bukan {digit} justru mengharuskan {cell} berisi {digit}, sehingga anggapan itu tidak mungkin benar. Isikan {digit} di {cell}. Pola ini disebut {strategy}.',
  'hint.xy-chain.start':
    '{cell} hanya memiliki kandidat {first_digit} dan {second_digit}. Entah sel itu berisi {endpoint_digit}, atau—jika bukan {endpoint_digit}—nilainya pasti {other_digit}.',
  'hint.xy-chain.assume':
    'Andaikan {start} bukan {endpoint_digit}. Sel itu harus berisi {start_value}. Karena {start} dan {middle} berada dalam {first_unit} yang sama, {middle} tidak dapat berisi {start_value} dan harus berisi {middle_value}. Akibatnya, di {second_unit}, {result} tidak dapat berisi {middle_value} dan harus berisi {result_value}.',
  'hint.xy-chain.follow':
    'Karena {start} berisi {start_value}, {middle} yang berada dalam {first_unit} yang sama tidak dapat berisi {start_value} dan harus berisi {middle_value}. Selanjutnya, karena {middle} dan {result} berbagi {second_unit}, {result} tidak dapat berisi {middle_value} dan harus berisi {result_value}.',
  'hint.xy-chain.reach':
    'Karena {start} berisi {start_value}, {endpoint} tidak dapat berisi {shared_digit}. Satu-satunya kandidat lain adalah {endpoint_digit}, sehingga sel tersebut harus berisi {endpoint_digit}.',
  'hint.xy-chain.place':
    'Jika {first_endpoint} berisi {endpoint_digit}, angka tersebut berada di ujung pertama. Jika tidak, rantai memaksa {endpoint_digit} berada di ujung lainnya, yaitu {second_endpoint}. Jadi, setidaknya salah satu ujung berisi {endpoint_digit}. Karena {cell} berbagi baris, kolom, atau kotak dengan kedua ujung, kandidat {endpoint_digit} harus dihapus dari sel itu. Setelah kandidat {endpoint_digit} dihapus, tempatkan {digit} di {cell}. Pola ini disebut {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Mulai dari {cell}. Baris, kolom, dan kotaknya sudah berisi {excluded_digits}.',
  'hint.naked-single.only':
    'Jadi, {digit} adalah satu-satunya angka yang dapat ditempatkan di {cell}.',
  'hint.naked-single.apply':
    'Tempatkan {digit} di {cell}. Sel yang hanya memiliki satu kandidat disebut {strategy}.',
  'hint.hidden-single.inspect':
    'Di {unit}, periksa di mana {digit} dapat ditempatkan.',
  'hint.hidden-single.blockers':
    'Keberadaan angka {digit} di {blockers} menyingkirkan kandidat {digit} dari semua sel kosong lain di {unit}.',
  'hint.hidden-single.only': 'Hanya {cell} yang masih dapat berisi {digit}.',
  'hint.hidden-single.apply':
    'Tempatkan {digit} di {cell}. Jika suatu angka hanya memiliki satu sel yang mungkin dalam baris, kolom, atau kotak, pola ini disebut {strategy}.',
  'hint.naked-pair.inspect':
    'Mulailah dari {unit}: kandidat untuk {cell} hanya {first_digit} atau {second_digit}.',
  'hint.naked-pair.match':
    '{cell} juga hanya memiliki dua kandidat yang sama, yaitu {first_digit} dan {second_digit}.',
  'hint.naked-pair.reserve':
    '{digits} pasti menempati kedua sel tersebut, tetapi belum diketahui angka mana yang berada di masing-masing sel. Karena itu, kandidat {digit} harus dihapus dari semua sel lain di {unit}.',
  'hint.naked-pair.apply':
    'Hapus {candidates}; langkah ini tidak mengisi nilai apa pun. Pola ini disebut {strategy}.',
  'hint.naked-triple.first':
    'Mulai dari {unit}: kandidat untuk {cell} hanya {first_digit} atau {second_digit}.',
  'hint.naked-triple.second':
    'Perhatikan pula {cell}; kandidat untuk sel ini hanya {first_digit} atau {second_digit}.',
  'hint.naked-triple.third':
    'Tambahkan {cell}, yang juga hanya memiliki kandidat {first_digit} atau {second_digit}. Dengan demikian, seluruh kandidat pada ketiga sel tersebut terbatas pada {reserved_digits}.',
  'hint.naked-triple.consequence':
    '{reserved_digits} harus menempati ketiga sel tersebut, meskipun belum diketahui angka mana yang berada di masing-masing sel. Karena itu, hapus {removed_digits} dari daftar kandidat {cell}; kini hanya {remaining_digit} yang tersisa.',
  'hint.naked-triple.apply':
    'Tempatkan {digit} di {cell}. Tiga sel yang seluruh kandidatnya terbatas pada tiga angka yang sama membentuk {strategy}.',
  'hint.naked-quad.cell': 'Di {unit}, kandidat untuk {cell} hanya {digits}.',
  'hint.subset-reservation.observe':
    'Di {unit}, {cells} hanya berisi {digits}.',
  'hint.subset-reservation.explain':
    'Di {unit}, {digits} harus mengisi sel-sel tersebut. Karena itu, angka-angka itu tidak dapat menjadi kandidat di sel lain dalam unit yang sama.',
  'hint.subset-reservation.apply':
    'Hapus {candidates}. Pola ini adalah {strategy}.',
  'hint.subset-reservation.place':
    'Isikan {digit} di {cell}. Pola ini disebut {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'Di {unit}, {digits} hanya dapat muncul di {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Karena {digits} terbatas pada sel-sel tersebut di {unit}, sel-sel itu tidak dapat berisi kandidat lain.',
  'hint.hidden-subset-confinement.apply':
    'Hapus {candidates} dari sel yang terbatas. Pola ini adalah {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Tempatkan {digit} di {cell} setelah menghapus kandidat lain. Pola ini adalah {strategy}.',
  'hint.hidden-pair.first':
    'Di {unit}, kandidat {digit} hanya muncul di {cells}.',
  'hint.hidden-pair.second':
    'Kandidat {digit} juga hanya dapat berada di dua sel yang sama. Jadi, {digits} harus menempati {cells}, meskipun belum diketahui angka mana yang berada di masing-masing sel.',
  'hint.hidden-pair.consequence':
    'Kedua sel itu disediakan untuk {digits}, jadi kandidat lainnya harus dihapus: {candidates}.',
  'hint.hidden-pair.apply': 'Hapus {candidates}. Pola ini disebut {strategy}.',
  'hint.hidden-triple.first':
    'Di {unit}, kandidat {digit} hanya dapat berada di {cells}.',
  'hint.hidden-triple.second':
    'Di {unit}, {digits} juga hanya dapat berada di {cells}.',
  'hint.hidden-triple.third':
    'Di {unit}, {digits} juga hanya dapat berada di {cells}.',
  'hint.hidden-triple.consequence':
    'Karena {digits} terbatas pada sel-sel tersebut di {unit}, sel-sel itu tidak dapat memuat kandidat lain.',
  'hint.hidden-triple.apply':
    'Hapus {candidates} dari sel-sel yang menjadi satu-satunya tempat bagi angka-angka tersebut. Pola ini disebut {strategy}.',
  'hint.hidden-quad.first':
    'Di {unit}, kandidat {digit} hanya dapat berada di {cells}.',
  'hint.hidden-quad.second':
    'Di {unit}, {digits} juga hanya dapat berada di {cells}.',
  'hint.hidden-quad.third':
    'Di {unit}, {digits} juga hanya dapat berada di {cells}.',
  'hint.hidden-quad.fourth':
    'Di {unit}, {digits} juga hanya dapat berada di {cells}.',
  'hint.hidden-quad.consequence':
    'Karena {digits} terbatas pada sel-sel tersebut di {unit}, sel-sel itu tidak dapat memuat kandidat lain.',
  'hint.hidden-quad.apply':
    'Hapus {candidates} dari sel-sel yang menjadi satu-satunya tempat bagi angka-angka tersebut. Pola ini disebut {strategy}.',
  'hint.pointing-pair.first':
    'Di {source_unit}, perhatikan kandidat {digit} pada {cell}, lalu cari semua posisi lain di kotak ini yang masih memungkinkan untuk {digit}.',
  'hint.pointing-pair.second':
    'Di {source_unit}, satu-satunya posisi lain untuk {digit} adalah {cell}. Kedua posisi yang memungkinkan itu sama-sama berada di {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Karena {digit} di {source_unit} pasti menempati salah satu dari dua posisi dalam {intersection_unit}, hapus {candidate} dari semua sel lain di {intersection_unit}.',
  'hint.pointing-pair.apply':
    'Kini, satu-satunya kandidat yang tersisa di {cell} adalah {digit}. Tempatkan {digit} di sel tersebut. Pola ini disebut {strategy}.',
  'hint.intersection-confinement.observe':
    'Di {source_unit}, kandidat {digit} dibatasi pada {intersection_unit} di {cells}.',
  'hint.intersection-confinement.explain':
    'Karena setiap {digit} di {source_unit} terletak di {intersection_unit}, sel di luar sumber tetapi di dalam persimpangan tidak dapat menampungnya.',
  'hint.intersection-confinement.apply':
    'Hapus kandidat {digit} dari {cells}. Pola ini adalah {strategy}.',
  'hint.intersection-confinement.place':
    'Tempatkan {digit} di {cell} setelah menerapkan persimpangan. Pola ini adalah {strategy}.',
  'hint.fish-confinement.observe':
    'Di setiap unit dalam {base_units}, semua posisi yang memungkinkan untuk kandidat {digit} berada pada perpotongan dengan {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidat {digit} dibatasi dari {base_units} ke {cover_units}, sehingga unit penutup tersebut harus menerimanya melalui posisi dasar yang disorot.',
  'hint.swordfish.consequence':
    'Setiap unit di {base_units} harus menempatkan satu {digit} pada salah satu perpotongannya dengan {cover_units}. Ketiga penempatan itu memastikan bahwa masing-masing unit penutup memuat satu {digit}, sehingga kandidat tersebut dapat dihapus dari semua sel lain di unit-unit penutup.',
  'hint.jellyfish.consequence':
    'Setiap unit di {base_units} harus menempatkan satu {digit} pada salah satu perpotongannya dengan {cover_units}. Keempat penempatan itu memastikan bahwa masing-masing unit penutup memuat satu {digit}, sehingga kandidat tersebut dapat dihapus dari semua sel lain di unit-unit penutup.',
  'hint.fish-confinement.apply':
    'Hapus kandidat {digit} dari {cells}. Pola ini disebut {strategy}.',
  'hint.x-wing.first':
    'Di {base_unit}, semua posisi yang memungkinkan untuk kandidat {digit} berada pada perpotongan dengan {cover_units}.',
  'hint.x-wing.second':
    'Di {base_unit}, semua posisi yang memungkinkan untuk kandidat {digit} juga berada pada perpotongan dengan {cover_units}. Jadi, kedua unit dasar memiliki dua unit penutup yang sama.',
  'hint.x-wing.consequence':
    'Setiap unit di {base_units} harus menempatkan satu {digit} pada salah satu perpotongannya dengan {cover_units}. Kedua penempatan {digit} itu memastikan bahwa setiap unit penutup memuat {digit}, sehingga kandidat tersebut dapat dihapus dari semua sel lain di unit-unit penutup.',
  'hint.x-wing.apply':
    'Hapus kandidat {digit} dari {cells}. Pola ini disebut {strategy}.',
  'hint.pivot-wing.observe':
    'Pada {pivot}, calon {pivot_digits} menghubungkan sel sayap pada {wing_cells}.',
  'hint.pivot-wing.explain':
    'Setiap sayap di {wing_cells} berbagi satu kandidat dengan poros di {pivot}, dan kedua sayap berisi {shared_digit}. Kandidat pivot mana pun yang benar, salah satu sayapnya harus berisi {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} hanya memiliki kandidat {digits}, jadi nilainya pasti salah satu dari keduanya.',
  'hint.xy-wing.case':
    'Jika {pivot} berisi {pivot_digit}, {wing} tidak dapat berisi {pivot_digit}. Karena satu-satunya kandidat lainnya adalah {shared_digit}, {wing} harus berisi {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Apa pun nilai {pivot}, setidaknya satu sel sayap di {wing_cells} pasti berisi {shared_digit}. Kita tidak perlu menentukan sel yang mana.',
  'hint.xy-wing.apply':
    '{cells} melihat kedua sayap {wing_cells}. Karena setidaknya satu sayap bernilai {shared_digit}, hapus kandidat {shared_digit} dari sel-sel tersebut. Pola ini disebut {strategy}.',
  'hint.xy-wing.place':
    '{cell} berbagi baris, kolom, atau kotak dengan kedua sel sayap di {wing_cells}. Karena setidaknya satu sayap berisi {shared_digit}, {cell} tidak dapat berisi {shared_digit}. Satu-satunya kandidat lain adalah {digit}, jadi isikan {digit}. Pola ini disebut {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} hanya memiliki kandidat {digits}, sehingga nilainya pasti salah satu kandidat tersebut.',
  'hint.xyz-wing.case':
    'Jika {pivot} adalah {pivot_digit}, maka {wing} di {unit} yang sama tidak dapat berisi {pivot_digit}. Satu-satunya kandidat lain adalah {shared_digit}, jadi {wing} harus berisi {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Jika {pivot} adalah {shared_digit}, sel pivot itu sendiri sudah berisi {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Apa pun nilai {pivot}, setidaknya satu sel di {pattern_cells} pasti berisi {shared_digit}. Kita tidak perlu menentukan sel yang mana.',
  'hint.xyz-wing.apply':
    '{target} berbagi {first_unit} dengan {first_pattern_cell}, {second_unit} dengan {second_pattern_cell}, dan {third_unit} dengan {third_pattern_cell}. Karena setidaknya satu dari ketiga sel itu berisi {shared_digit}, {target} tidak dapat berisi angka tersebut. Hapus kandidat {shared_digit}. Pola ini disebut {strategy}.',
  'hint.strong-link-wing.observe':
    'Setiap sel di {wing_cells} hanya memiliki kandidat {digits}.',
  'hint.strong-link-wing.bridge':
    'Di {unit}, kandidat {link_digit} hanya dapat berada di {link_cells}; jadi, setidaknya salah satu sel tersebut harus berisi {link_digit}.',
  'hint.strong-link-wing.force':
    'Jika {first_link_cell} berisi {link_digit}, {first_wing_cell} tidak dapat berisi {link_digit} dan harus berisi {forced_digit}. Jika {second_link_cell} berisi {link_digit}, {second_wing_cell} harus berisi {forced_digit}. Jadi, setidaknya salah satu dari kedua sel tersebut berisi {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Setidaknya salah satu dari {wing_cells} bernilai {digit}. Hapus kandidat {digit} dari {cells} karena sel-sel tersebut melihat keduanya. Pola ini disebut {strategy}.',
  'hint.strong-link-wing.place':
    'Setidaknya satu sel di {wing_cells} berisi {removed_digit}. Karena {cell} berbagi baris, kolom, atau kotak dengan kedua sel tersebut, hapus kandidat {removed_digit} dari sel itu, lalu isikan {digit}. Pola ini disebut {strategy}.',
  'hint.relational-wing.apply':
    'Hapus kandidat {digit} dari {cells}. Pola ini adalah {strategy}.',
  'hint.relational-wing.place':
    'Hapus kandidat {removed_digit} dari {cell}, jadi tempatkan {digit} di sana. Pola ini adalah {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Selain {cell}, masing-masing dari {count} sel lain yang belum terisi memiliki tepat dua kandidat.',
  'hint.bug-plus-one.trivalue':
    '{cell} memiliki tiga kandidat, yaitu {digits}. Jumlahnya satu lebih banyak daripada di setiap sel lain yang belum terisi.',
  'hint.bug-plus-one.unit-count':
    'Di {unit}, kandidat {digit} memiliki tiga kemungkinan posisi, sedangkan masing-masing kandidat dalam {other_digits} hanya memiliki dua.',
  'hint.bug-plus-one.explain':
    'Di seluruh {units}, kandidat {digit} memiliki satu kemungkinan posisi lebih banyak daripada {other_digits}. Jika {cell} bukan {digit}, semua sel yang belum terisi akan memiliki tepat dua kandidat dan teka-teki tidak lagi mempunyai solusi unik. Jadi, {cell} harus berisi {digit}.',
  'hint.bug-plus-one.place':
    'Isikan {digit} di {cell}. Kasus satu kandidat tambahan yang mempertahankan keunikan ini disebut {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Empat sel kosong di {cells} membentuk sudut-sudut sebuah persegi panjang.',
  'hint.unique-rectangle.pair-corners':
    'Kandidat pada {cells} tepat terdiri atas {digits}.',
  'hint.unique-rectangle.third-corner':
    '{cell} juga hanya memiliki pasangan kandidat {digits}. Kini, tiga sudut memiliki pasangan yang sama.',
  'hint.unique-rectangle.expanded-corner':
    '{cell} memiliki kandidat {digits}. Sel ini merupakan satu-satunya sudut dengan kandidat tambahan {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Jika {cell} mengambil salah satu angka dari pasangan {digits}, nilai pada keempat sudut dapat saling ditukar tanpa mengubah baris, kolom, atau kotak mana pun. Hal itu akan menghasilkan dua solusi; jadi, hapus {digits} dan sisakan {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    'Di {cell}, hanya {digit} yang tersisa. Isikan angka itu di sana. Pola ini disebut {strategy}.',
  'hint.unique-rectangle.observe':
    'Sel-sel di {cells} membentuk persegi panjang dan semuanya berisi pasangan {digits}.',
  'hint.unique-rectangle.type1':
    'Tiga sudut berisi persis {digits}. Jika {cell} juga menggunakan salah satu digitnya, persegi panjang tersebut akan memungkinkan dua solusi yang dapat dipertukarkan.',
  'hint.unique-rectangle.type2-first-expanded':
    'Selain pasangan {pair}, {cell} juga memiliki kandidat tambahan {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    '{cell} juga memiliki pasangan {pair} beserta kandidat tambahan {extra_digit}. Jadi, kedua sudut tersebut memiliki kandidat tambahan yang sama, yaitu {extra_digit}.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Agar solusi tetap unik, setidaknya satu sel di {cells} harus berisi {extra_digit}. Karena {target} berbagi baris, kolom, atau kotak dengan kedua sel tersebut, sel target tidak dapat berisi {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    'Kini, hanya {digit} yang tersisa di {cell}. Tempatkan angka tersebut di sana. Pola ini disebut {strategy}.',
  'hint.unique-rectangle.type2':
    'Kedua sudut yang diperluas di {cells} berbagi kandidat tambahan {digit}, sehingga sel mana pun yang melihat kedua sudut tidak boleh berisi {digit}.',
  'hint.unique-rectangle.type3':
    'Digit tambahan {digits} dalam persegi panjang digabungkan dengan {cells} sebagai subset yang dicadangkan di {unit}, sehingga digit tersebut dapat dihapus di tempat lain dalam unit tersebut.',
  'hint.unique-rectangle.type3-first-expanded':
    'Selain pasangan {pair}, {cell} juga memiliki kandidat tambahan {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Selain pasangan {pair}, {cell} juga memiliki kandidat tambahan {extra_digit}. Setidaknya satu dari kedua sudut yang memiliki kandidat tambahan harus memakai salah satunya; jika tidak, nilai {pair} pada keempat sudut dapat ditukar dan menghasilkan dua solusi.',
  'hint.unique-rectangle.type3-partner':
    'Kandidat untuk {cell} hanya {digits}.',
  'hint.unique-rectangle.type3-reserve':
    'Salah satu sel di {corners} harus berisi salah satu angka dari {digits}, sedangkan {partner} harus berisi angka lainnya. Kedua angka itu harus menempati kedua sel tersebut di {unit}, sehingga {removed_digit} harus dihapus dari kandidat {target}.',
  'hint.unique-rectangle.type3-place':
    'Kini, hanya {digit} yang tersisa di {cell}. Tempatkan angka tersebut di sana. Pola ini disebut {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Selain pasangan {pair}, {cell} juga memiliki kandidat tambahan {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Selain pasangan kandidat {pair}, {cell} juga memiliki kandidat tambahan {extra_digit}. Artinya, pasangan tersebut terdapat pada kedua sudut persegi panjang yang memiliki kandidat tambahan.',
  'hint.unique-rectangle.type4':
    'Di {unit}, kandidat {digit} pada {cells} membentuk pasangan konjugat, sehingga tepat satu dari kedua sel itu harus berisi angka tersebut. Agar tidak terbentuk dua solusi yang hanya berbeda karena nilainya tertukar, kandidat {removed_digit} harus dihapus dari masing-masing sudut yang memiliki kandidat tambahan.',
  'hint.unique-rectangle.type4-apply':
    'Hapus kandidat {digit} dari {cells}. Hubungan keunikan ini disebut {strategy}.',
  'hint.unique-rectangle.apply':
    'Hapus {candidates}. Hubungan keunikan ini adalah {strategy}.',
  'hint.unique-rectangle.place':
    'Tempatkan {digit} di {cell} setelah menerapkan hubungan keunikan. Pola ini adalah {strategy}.',
  'hint.implication-chain.observe':
    'Mulai dari {cell}, yang hanya memiliki kandidat {digits}.',
  'hint.implication-chain.explain':
    '{from} dan {to} berbagi kandidat dan saling melihat, sehingga kandidat itu tidak dapat benar di keduanya; implikasi berlanjut.',
  'hint.implication-chain.apply':
    'Salah satu ujung harus berisi {digit}, jadi hapus kandidat {digit} dari {cells}. Pola ini adalah {strategy}.',
  'hint.narration.apply': 'Terapkan pengurangan: ',
  'hint.narration.look-at': 'Lihat ',
  'hint.narration.value-conflict':
    '. Nilai yang dimasukkan bertentangan dengan teka-teki.',
  'hint.narration.clear-value': 'Hapus nilai di ',
  'hint.narration.clear-value-tail':
    ' sehingga grid kandidat dapat diperiksa selanjutnya.',
  'hint.narration.candidate-inconsistent':
    '. Calon negara bagiannya tidak sesuai dengan teka-teki yang ada.',
  'hint.narration.reset-candidates':
    'Setel ulang kandidat yang ditetapkan pada ',
  'hint.narration.reset-candidates-tail':
    ' ke setiap digit yang diizinkan oleh nilai baris, kolom, dan kotak yang diterima.',
  'hint.narration.only-candidate': '. Ia hanya memiliki satu kandidat: ',
  'hint.narration.no-other-digit':
    'Karena tidak ada digit lain yang bisa masuk ',
  'hint.narration.place': ', tempat ',
  'hint.narration.naked-single-tail': ' di sana. Ini disebut Single Telanjang.',
  'hint.narration.in-unit': 'Di ',
  'hint.narration.consider-digit': ', pertimbangkan di mana ',
  'hint.narration.can-appear': ' bisa muncul.',
  'hint.narration.other-cells': 'Setiap sel kosong lainnya masuk ',
  'hint.narration.cannot-contain': ' tidak dapat menampung ',
  'hint.narration.leaving-only': ', hanya menyisakan ',
  'hint.narration.because-unit': 'Karena ',
  'hint.narration.still-needs': ' masih membutuhkan ',
  'hint.narration.only-cell': ' dan ',
  'hint.narration.hidden-single-tail':
    ' adalah satu-satunya sel yang mungkin, tempat ',
  'hint.narration.hidden-single-name':
    ' di sana. Ini disebut Single Tersembunyi.',
  'hint.narration.place-result': 'tempat ',
  'hint.narration.in': ' di ',
  'hint.narration.remove': 'menghapus kandidat ',
  'hint.narration.from': ' dari ',
  'hint.narration.strategy-result': '. Ini adalah hasil {strategy}.',
  'welcome.eyebrow': 'Teka-teki baru',
  'welcome.title': 'Pilih tingkat kesulitan Anda',
  'welcome.lede': 'Pilih level, lalu mulai saat Anda siap.',
  'welcome.difficulty': 'Kesulitan',
  'welcome.start': 'Mulai teka-teki {difficulty}',
  'welcome.starting': 'Memulai teka-teki {difficulty}…',
  'welcome.preview': 'Pratinjau teka-teki Sudoku',
  'loading.initial': 'Memuat teka-teki Anda…',
  'loading.account.eyebrow': 'Akun',
  'loading.account.title': 'Menyimpan teka-teki Anda ke akun Anda…',
  'loading.account.detail':
    'Progres Anda tetap tersimpan di perangkat ini sampai penyimpanan ke akun dikonfirmasi.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Kembali ke halaman depan…',
  'loading.home.detail':
    'Memeriksa antarmuka terbaru sebelum menampilkan pilihan level.',
  'loading.restart.eyebrow': 'Teka-teki yang sama',
  'loading.restart.title': 'Memulai ulang teka-teki ini…',
  'loading.restart.detail':
    'Jaga agar papan lama tetap terkunci sampai percobaan baru siap.',
  'loading.new.eyebrow': 'Teka-teki baru',
  'loading.new.title': 'Mempersiapkan papan {difficulty} Anda…',
  'loading.new.detail':
    'Membuat teka-teki baru sekarang. Anda akan bermain sebentar lagi.',
  'confirmation.home.eyebrow': 'Kembali ke rumah?',
  'confirmation.home.title': 'Tinggalkan teka-teki ini',
  'confirmation.home.description':
    'Kemajuan Anda saat ini tidak lagi terbuka secara otomatis di perangkat ini.',
  'confirmation.home.cancel': 'Teruslah bermain',
  'confirmation.home.confirm': 'Kembali ke halaman depan',
  'confirmation.restart.eyebrow': 'Mulai lagi?',
  'confirmation.restart.title': 'Mulai dari awal',
  'confirmation.restart.description':
    'Putar ulang teka-teki ini dari aslinya, atau pilih teka-teki lain.',
  'confirmation.restart.replay.title': 'Putar ulang teka-teki ini',
  'confirmation.restart.replay.description':
    'Pertahankan pemberian ini dan setel ulang upaya ini.',
  'confirmation.restart.different.title': 'Mainkan teka-teki yang berbeda',
  'confirmation.restart.different.description': 'Pilih level untuk papan baru.',
  'confirmation.restart.different.level': 'Level untuk teka-teki yang berbeda',
  'common.cancel': 'Batalkan',
  'account.confirm.deleteGame.eyebrow': 'Hapus permainan yang disimpan?',
  'account.confirm.deleteGame.title': 'Hapus permainan ini',
  'account.confirm.deleteGame.description':
    'Teka-teki ini dan kemajuannya akan dihapus secara permanen dari Game Saya. Hal ini tidak dapat dibatalkan.',
  'account.confirm.deleteGame.action': 'Hapus permainan',
  'account.confirm.deleteGame.pending': 'Menghapus permainan yang disimpan…',
  'account.confirm.deleteAll.eyebrow': 'Hapus setiap game yang disimpan?',
  'account.confirm.deleteAll.title': 'Hapus semua game',
  'account.confirm.deleteAll.description':
    'Setiap teka-teki dan semua kemajuan dalam permainan Saya akan dihapus secara permanen. Hal ini tidak dapat dibatalkan.',
  'account.confirm.deleteAll.action': 'Hapus semua game',
  'account.confirm.deleteAll.pending': 'Menghapus semua game…',
  'account.confirm.revoke.eyebrow': 'Keamanan akun',
  'account.confirm.revoke.title': 'Keluar dari semua perangkat',
  'account.confirm.revoke.description':
    'Anda akan keluar dari semua perangkat, termasuk perangkat ini. Akun dan permainan tersimpan Anda tetap ada.',
  'account.confirm.revoke.action': 'Keluar dari semua perangkat',
  'account.confirm.revoke.pending': 'Keluar dari semua perangkat…',
  'account.confirm.deleteAccount.eyebrow': 'Tindakan permanen',
  'account.confirm.deleteAccount.title': 'Hapus akun Anda',
  'account.confirm.deleteAccount.description':
    'Identitas Anda, setiap sesi masuk, dan semua permainan yang disimpan akan dihapus secara permanen. Katalog teka-teki bersama tidak terpengaruh.',
  'account.confirm.deleteAccount.action': 'Hapus akun',
  'account.confirm.deleteAccount.pending': 'Menghapus akun…',
  'account.confirm.typeEmail': 'Ketik {email} untuk mengonfirmasi',
  'account.label': 'Akun',
  'account.continue.title': 'Lanjutkan di perangkat lain',
  'account.continue.detail':
    'Masuk untuk menyimpan permainan aktif browser ini secara otomatis.',
  'account.signIn': 'Masuk dengan Google',
  'account.signIn.short': 'Masuk',
  'game.title': 'Teka-teki {difficulty}',
  'game.statusActions': 'Status dan tindakan permainan',
  'game.elapsed': 'Waktu yang telah berlalu',
  'game.mistakes': 'Kesalahan {count}',
  'game.resume': 'Lanjutkan',
  'game.pause': 'Jeda',
  'status.resumed': 'Teka-teki dilanjutkan.',
  'status.paused': 'Teka-teki berhenti.',
  'status.restarted':
    'Teka-teki dimulai kembali. Upaya baru, teka-teki yang sama.',
  'status.hintClosed': 'Petunjuk ditutup. Teka-teki Anda tidak berubah.',
  'status.strategyApplied':
    'Strategi diterapkan. Anda dapat membatalkannya dalam satu langkah.',
  'status.correctionApplied':
    'Koreksi diterapkan. Anda dapat membatalkannya dalam satu langkah.',
  'status.hintAlreadyApplied': 'Petunjuk ini sudah tercermin di papan.',
  'status.hintRefreshed': 'Papan berubah, jadi petunjuk telah diperbarui.',
  'status.accountSaved': 'Game disimpan ke akun Anda.',
  'status.waitBeforeLeaving':
    'Tunggu langkah yang tertunda sebelum meninggalkan teka-teki ini.',
  'status.selectEditableCell':
    'Pilih sel yang dapat diedit sebelum memasukkan nomor.',
  'status.savingAccount': 'Menyimpan game lokal Anda ke akun Anda…',
  'status.restoring': 'Memulihkan teka-teki Anda…',
  'status.restored': 'Teka-teki lokal Anda telah dipulihkan.',
  'status.puzzleReady': 'Teka-teki {difficulty} sudah siap.',
  'status.puzzleRestored': 'Teka-teki {difficulty} dipulihkan.',
  'status.waitBeforeStarting':
    'Tunggu gerakan yang tertunda sebelum memulai teka-teki lainnya.',
  'status.solved': 'Selesai! Kerja bagus.',
  'status.moveSaved': 'Pindahkan disimpan.',
  'status.waitBeforeHint':
    'Tunggu gerakan yang tertunda sebelum membuka petunjuk.',
  'status.hintReady': 'Petunjuk sudah siap. Mulailah dengan langkah 1.',
  'status.openingSaved': 'Membuka permainan simpanan Anda…',
  'status.savedDeleted': 'Permainan yang disimpan dihapus.',
  'status.allDeleted': 'Semua permainan yang disimpan dihapus.',
  'status.signedOut': 'Keluar. Permainan akun Anda tetap tersimpan.',
  'status.revoked':
    'Anda telah keluar dari semua perangkat. Masuk kembali untuk melanjutkan.',
  'status.accountDeleted': 'Akun dan game simpanan dihapus.',
  'retry.saving': 'Coba simpan lagi',
  'retry.restoring': 'Coba pulihkan lagi',
  'retry.connection': 'Periksa koneksi',
  'retry.starting': 'Coba mulai lagi',
  'retry.move': 'Coba lagi pindah',
  'retry.hint': 'Coba petunjuk lagi',
  'retry.time': 'Coba lagi menghemat waktu',
  'retry.progress': 'Coba lagi menyimpan kemajuan',
  'retry.leaving': 'Coba pergi lagi',
  'retry.opening': 'Coba buka lagi',
  'retry.deleting': 'Coba hapus lagi',
  'retry.signOut': 'Coba keluar lagi',
  'retry.revoke': 'Coba keluar dari semua perangkat lagi',
  'retry.deleteAccount': 'Coba hapus akun lagi',
  'error.accountSave':
    'Game lokal Anda aman, tetapi tidak dapat disimpan ke akun Anda.',
  'error.restoring': 'Teka-teki Anda tidak dapat dipulihkan.',
  'error.connection':
    'Layanan game tidak dapat dihubungi. Periksa koneksi Anda dan coba lagi.',
  'error.http':
    'Layanan game mengembalikan kesalahan {status}. Silakan coba lagi.',
  'error.unavailable':
    'Layanan game untuk sementara tidak tersedia. Papan Anda aman; coba lagi.',
  'error.starting': 'Permainan tidak dapat dimulai.',
  'error.signInAgain': 'Masuk lagi untuk menyimpan gerakan.',
  'error.localUnavailable': 'Permainan lokal tidak tersedia.',
  'error.move': 'Perpindahan tersebut tidak dapat diselamatkan.',
  'error.currentUnavailable': 'Permainan saat ini tidak tersedia.',
  'error.hintChanged': 'Papan berubah saat petunjuk disiapkan.',
  'error.hint': 'Petunjuknya tidak dapat dipersiapkan.',
  'error.time': 'Waktu permainan terakhir tidak dapat disimpan.',
  'error.timer': 'Status pengatur waktu terkini tidak dapat disimpan.',
  'error.leaving': 'Teka-teki lokal tidak dapat diselesaikan.',
  'error.opening': 'Game simpanan itu tidak dapat dibuka.',
  'error.deleteGame': 'Permainan yang disimpan tidak dapat dihapus.',
  'error.deleteAll': 'Permainan yang disimpan tidak dapat dihapus.',
  'error.signOut': 'Anda tidak dapat keluar.',
  'error.revoke': 'Sesi tidak dapat dicabut.',
  'error.deleteAccount': 'Akun tidak dapat dihapus.',
  'error.invalid-request': 'Permintaan tersebut tidak valid.',
  'error.invalid-json': 'Permintaan berisi JSON yang tidak valid.',
  'error.unsupported-media-type': 'Permintaan Tipe Konten tidak didukung.',
  'error.payload-too-large': 'Permintaannya terlalu besar.',
  'error.unauthorized': 'Otorisasi diperlukan.',
  'error.forbidden-origin': 'Asal permintaan ini tidak diperbolehkan.',
  'error.session-not-found': 'Sesi permainan tidak ditemukan.',
  'error.revision-conflict': 'Papan berubah sebelum langkah ini diterapkan.',
  'error.invalid-session': 'Sesi permainan tidak valid.',
  'error.invalid-action': 'Aksi permainan ini tidak valid.',
  'error.invalid-cell': 'Sel ini tidak valid.',
  'error.immutable-cell': 'Sel tertentu tidak dapat diubah.',
  'error.note-not-allowed': 'Kandidat tidak dapat diubah di sel ini.',
  'error.no-undo': 'Tidak ada tindakan yang dapat dibatalkan.',
  'error.no-redo': 'Tidak ada tindakan yang perlu diulang.',
  'error.no-hint': 'Tidak ada petunjuk yang tersedia.',
  'error.stale-hint': 'Papan berubah setelah petunjuk ini disiapkan.',
  'error.persistence-failed': 'Permainan tidak dapat disimpan.',
  'error.internal-error': 'Permintaan tersebut tidak dapat diselesaikan.',
  'error.account-unavailable': 'Fitur akun tidak tersedia.',
  'error.account-unauthorized': 'Sesi aplikasi yang valid diperlukan.',
  'error.csrf-failed':
    'Login ini tidak dapat diverifikasi. Silakan masuk kembali.',
  'error.account-game-not-found': 'Permainan yang disimpan tidak ditemukan.',
  'error.guest-revision-conflict':
    'Permainan lokal berubah sebelum tindakan ini diterapkan.',
  'error.guest-claim-conflict': 'Game lokal ini sudah disimpan ke akun.',
  'error.malformedDescriptor': 'Penjelasannya tidak dapat ditampilkan.',
  'account.close': 'Tutup panel akun',
  'account.games.title': 'Permainan saya',
  'account.games.deleteAll': 'Hapus semua',
  'account.games.deletingAll': 'Menghapus semua…',
  'account.games.empty': 'Belum ada permainan yang disimpan.',
  'account.games.puzzle': 'Teka-teki {difficulty}',
  'account.games.finished': 'Selesai',
  'account.games.inProgress': 'Sedang berlangsung',
  'account.games.saved': 'Permainan yang disimpan',
  'account.games.open': 'Buka',
  'account.games.opening': 'Pembukaan…',
  'account.games.delete': 'Hapus',
  'account.games.deleting': 'Menghapus…',
  'account.signOut': 'Keluar',
  'account.signingOut': 'Keluar…',
  'account.settings': 'Pengaturan akun',
  'account.revoke': 'Keluar dari semua perangkat',
  'account.delete': 'Hapus akun',
  'board.label': 'Papan permainan Sudoku',
  'board.cell.given': 'diberikan {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'kosong, kandidat {candidates}',
  'board.cell.empty': 'kosong',
  'board.hint.focus': 'petunjuk fokus',
  'board.hint.premise': 'bukti petunjuk',
  'board.hint.eliminated': 'kandidat tersingkir',
  'board.hint.conclusion': 'petunjuk kesimpulan',
  'board.hint.problem': 'perlu koreksi',
  'board.hint.extra': 'calon yang mustahil',
  'board.hint.group': 'grup {group}',
  'board.hint.chain': 'posisi rantai {position}',
  'board.paused.title': 'Teka-teki berhenti',
  'board.paused.detail': 'Waktumu terhenti.',
  'hint.label': 'Petunjuk',
  'hint.close': 'Tutup',
  'hint.strategy.grade': 'Strategi {grade}',
  'hint.applying': 'Menerapkan petunjuk…',
  'hint.refreshing': 'Petunjuk yang menyegarkan…',
  'hint.step': 'Langkah {current} dari {total}',
  'hint.legend.label': 'Legenda petunjuk visual',
  'hint.legend.strong': 'Padat: harus mengandung',
  'hint.legend.weak': 'Putus-putus: tidak bisa keduanya',
  'hint.legend.implication': 'Panah: implikasi',
  'hint.legend.groups': 'A/B: grup bergantian',
  'hint.legend.order': 'Nomor: urutan rantai',
  'hint.back': 'Kembali',
  'hint.next': 'Selanjutnya',
  'hint.apply': 'Terapkan petunjuk',
  'controls.label': 'Kontrol permainan',
  'controls.digit.note': 'Tambahkan atau hapus catatan {digit}',
  'controls.digit.enter': 'Masukkan {digit}',
  'controls.hint.preparing': 'Mempersiapkan petunjuk…',
  'controls.hint.preparingDetail':
    'Menjaga agar teka-teki tetap terlihat saat langkah selanjutnya disiapkan.',
  'controls.complete.eyebrow': 'Teka-teki selesai',
  'controls.complete.title': 'Diselesaikan di {time}',
  'controls.complete.detail':
    'Pertahankan ritme dengan papan {difficulty} lainnya, atau pilih level lain.',
  'controls.complete.another': 'Mainkan {difficulty} lainnya',
  'controls.complete.replay': 'Putar ulang teka-teki ini',
  'controls.complete.choose': 'Pilih tingkat lain',
  'controls.pad': 'Papan angka',
  'controls.pad.notes': 'Papan angka, mode catatan',
  'controls.modes': 'Mode masukan',
  'controls.notes.on': 'Catatan tentang',
  'controls.notes.off': 'Catatan tidak aktif',
  'controls.candidates.on': 'Kandidat aktif',
  'controls.candidates.off': 'Kandidat keluar',
  'controls.actions': 'Tindakan teka-teki',
  'controls.erase': 'Hapus',
  'controls.undo': 'Membatalkan',
  'controls.undoing': 'Membatalkan…',
  'controls.redo': 'Ulangi',
  'controls.redoing': 'Mengulang…',
  'controls.hint.reveal': 'Ungkapkan petunjuk',
  'controls.shortcuts': 'Pintasan keyboard',
  'controls.shortcuts.move': 'Pindah',
  'controls.shortcuts.arrows': 'Tombol panah',
  'controls.shortcuts.enter': 'Masukkan nomor',
  'controls.shortcuts.notes': 'Catatan / kandidat',
  'controls.shortcuts.or': 'atau',
  'controls.shortcuts.pause': 'Jeda atau lanjutkan',
  'controls.shortcuts.hint': 'Buka, majukan, atau terapkan petunjuk',
  'controls.shortcuts.hintOther': 'Kontrol petunjuk lainnya',
  'hint.target.candidate.visible': 'kandidat yang disorot ini',
  'hint.target.candidate.accessible':
    'calon {value} pada baris {row}, kolom {column}',
  'hint.target.cell.visible': 'sel yang disorot ini',
  'hint.target.cell.accessible': 'baris {row}, kolom {column}',
  'hint.target.unit.visible': 'ini menyoroti {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'baris',
  'hint.target.column': 'kolom',
  'hint.target.box': 'kotak',
  'chrome.home': 'Sudoku pulang',
  'chrome.appearance': 'Penampilan',
  'chrome.theme.use': 'Gunakan tema {theme}',
  'chrome.theme.systemTitle': 'Tema sistem ({theme})',
  'chrome.theme.title': 'Tema {theme}',
  'chrome.theme.system': 'Sistem',
  'chrome.theme.systemName': 'sistem',
  'chrome.theme.light': 'ringan',
  'chrome.theme.dark': 'gelap',
  'chrome.connection.connecting': 'Menghubungkan',
  'chrome.connection.unavailable': 'Layanan tidak tersedia',
  'chrome.footer.tagline': 'Permainan yang bijaksana, tanpa gangguan.',
  'chrome.footer.privacy': 'Privasi',
  'chrome.footer.terms': 'Ketentuan',
  'chrome.footer.input': 'Keyboard dan sentuhan sudah siap',
};
