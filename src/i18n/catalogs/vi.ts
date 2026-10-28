import type { MessageCatalog } from './types';

export const vi: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, other {# lỗi}}',
  'board.cell':
    'Hàng {row}, cột {column}, {content}{pending, select, true {, đang kiểm tra} other {}}{invalid, select, true {, không hợp lệ} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Ngôn ngữ',
  'common.language.auto': 'Tự động',
  'accessibility.language.changed': 'Ngôn ngữ đã thay đổi thành {language}.',
  'common.difficulty.easy': 'Dễ dàng',
  'common.difficulty.medium': 'Trung bình',
  'common.difficulty.hard': 'Cứng',
  'common.difficulty.expert': 'chuyên gia',
  'common.difficulty.evil': 'Ác ma',
  'difficulty.easy.name': 'Dễ dàng',
  'difficulty.medium.name': 'Trung bình',
  'difficulty.hard.name': 'Cứng',
  'difficulty.expert.name': 'chuyên gia',
  'difficulty.evil.name': 'Ác ma',
  'hint.value-correction.title': 'Sửa giá trị này',
  'hint.candidate-correction.title': 'Sửa ô ứng viên này',
  'hint.value-correction.summary':
    'Giá trị tại {cell} xung đột với câu đố. Xóa nó trước khi tiếp tục.',
  'hint.candidate-correction.summary':
    'Trước khi tiếp tục, hãy lập lại các số ứng viên của {cell} dựa trên những số đã điền trong hàng, cột và ô vuông.',
  'hint.strategy.summary':
    'Thực hiện {steps} bước này để hiểu và áp dụng {strategy}.',
  'hint.value-correction.observe':
    'Kiểm tra {cell}. Giá trị này không phù hợp với bàn cờ.',
  'hint.value-correction.conclude':
    'Xóa giá trị tại {cell} để có thể kiểm tra lưới ứng viên tiếp theo.',
  'hint.candidate-correction.observe':
    'Kiểm tra {cell}. Các số ứng viên không khớp với bàn cờ.',
  'hint.candidate-correction.compare':
    'Lập lại các số ứng viên của ô này dựa trên những số đã điền trong hàng, cột và ô vuông.',
  'hint.candidate-correction.conclude':
    'Đặt lại các số ứng viên của {cell} thành mọi chữ số được phép trong hàng, cột và ô vuông.',
  'hint.strategy.observe':
    'Kiểm tra các ô, số ứng viên, hàng, cột và ô vuông được tô sáng.',
  'hint.strategy.compare':
    'So sánh các ràng buộc được tô sáng để tìm ra kết quả bắt buộc.',
  'hint.strategy.conclude':
    'Áp dụng kết quả được tô sáng. Mẫu này là {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Ứng viên {digit} tạo thành hai nhóm xen kẽ: A tại {group_a} và B tại {group_b}.',
  'hint.coloring.alternatives':
    'Mỗi liên kết rắn có nghĩa là chính xác một điểm cuối chứa {digit}, do đó, các ứng cử viên được liên kết sẽ luân phiên giữa các nhóm A và B. Một xung đột có thể loại trừ một nhóm, trong khi một ô nhìn thấy cả hai nhóm không thể chứa {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Các ứng viên được liên kết sẽ đưa ra kết quả cho {colored_digit}. Loại bỏ {candidates}. Mẫu này là {strategy}.',
  'hint.coloring.place':
    'Các ứng cử viên được liên kết cho {colored_digit} buộc phải có kết quả. Đặt {digit} vào {cell}. Mẫu này là {strategy}.',
  'hint.x-cycle.opening':
    'Trong {unit}, {digit} chỉ có thể đi trong {cells}. Một trong hai ô này phải chứa {digit}.',
  'hint.x-cycle.assume':
    'Giả sử {start} không phải là {digit}. Khi đó {forced} sẽ phải là {digit}. Nghĩa là {blocked} không thể là {digit} nên {unit} buộc {digit} thành {result}.',
  'hint.x-cycle.follow':
    'Vì {true_cell} là {digit} nên {blocked} không thể là {digit}. Do đó {unit} buộc {digit} thành {result}.',
  'hint.x-cycle.close':
    'Vì {true_cell} là {digit} nên {blocked} không thể là {digit}. Trong {unit}, điều đó khiến {result} trở thành nơi duy nhất dành cho {digit}.',
  'hint.x-cycle.place':
    'Giả định ban đầu rằng {assumption} không phải là {digit} dẫn đến {cell} là {digit}, vì vậy giả định này không thể đúng. Đặt {digit} vào {cell}. Mẫu này được gọi là {strategy}.',
  'hint.xy-chain.start':
    '{cell} chỉ còn các ứng viên {first_digit} và {second_digit}. Ô này hoặc là {endpoint_digit}, hoặc nếu không phải {endpoint_digit} thì phải là {other_digit}.',
  'hint.xy-chain.assume':
    'Giả sử {start} không phải {endpoint_digit}. Khi đó ô này phải là {start_value}. Vì {start} và {middle} cùng thuộc {first_unit}, {middle} không thể là {start_value} và phải là {middle_value}. Điều đó khiến {result} trong {second_unit} không thể là {middle_value}, nên phải là {result_value}.',
  'hint.xy-chain.follow':
    'Vì {start} là {start_value}, {middle} trong {first_unit} không thể là {start_value} và phải là {middle_value}. Vì {middle} và {result} cùng thuộc {second_unit}, {result} không thể là {middle_value} và phải là {result_value}.',
  'hint.xy-chain.reach':
    'Vì {start} là {start_value}, {endpoint} không thể là {shared_digit}. Ứng viên còn lại duy nhất là {endpoint_digit}, nên ô này phải là {endpoint_digit}.',
  'hint.xy-chain.place':
    'Nếu {first_endpoint} là {endpoint_digit}, đầu thứ nhất chứa {endpoint_digit}. Nếu không, chuỗi buộc {endpoint_digit} vào đầu còn lại là {second_endpoint}. Vì vậy ít nhất một đầu là {endpoint_digit}. {cell} nhìn thấy cả hai đầu nên không thể là {endpoint_digit}. Điền {digit} vào {cell}. Mẫu này được gọi là {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Bắt đầu với {cell}. Hàng, cột và khối của ô này đã có {excluded_digits}.',
  'hint.naked-single.only':
    'Vì vậy, {digit} là chữ số duy nhất có thể điền vào {cell}.',
  'hint.naked-single.apply':
    'Điền {digit} vào {cell}. Ô chỉ còn một ứng viên được gọi là {strategy}.',
  'hint.hidden-single.inspect':
    'Trong {unit}, hãy kiểm tra vị trí có thể điền {digit}.',
  'hint.hidden-single.blockers':
    'Các số {digit} đã có tại {blockers} loại {digit} khỏi mọi ô trống khác trong {unit}.',
  'hint.hidden-single.only': 'Chỉ {cell} vẫn có thể chứa {digit}.',
  'hint.hidden-single.apply':
    'Điền {digit} vào {cell}. Khi một chữ số chỉ còn một ô có thể điền trong hàng, cột hoặc khối, đó là {strategy}.',
  'hint.naked-pair.inspect':
    'Bắt đầu ở {unit}: {cell} chỉ có thể chứa {first_digit} hoặc {second_digit}.',
  'hint.naked-pair.match':
    '{cell} có cùng hai ứng viên: {first_digit} và {second_digit}.',
  'hint.naked-pair.reserve':
    'Hai ô này phải nhận {digits} theo một thứ tự nào đó, vì vậy ứng viên {digit} không thể còn ở bất kỳ ô nào khác trong {unit}.',
  'hint.naked-pair.apply':
    'Loại bỏ {candidates}; bước này không điền giá trị. Mẫu này là {strategy}.',
  'hint.naked-triple.first':
    'Bắt đầu ở {unit}: {cell} chỉ có thể chứa {first_digit} hoặc {second_digit}.',
  'hint.naked-triple.second':
    'Thêm {cell}; ô này chỉ có thể chứa {first_digit} hoặc {second_digit}.',
  'hint.naked-triple.third':
    'Thêm {cell}; ô này chỉ có thể chứa {first_digit} hoặc {second_digit}. Ba ô giờ chỉ chứa {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Ba ô này phải nhận {reserved_digits} theo một thứ tự nào đó. Vì vậy, loại {removed_digits} khỏi {cell}, chỉ còn {remaining_digit}.',
  'hint.naked-triple.apply':
    'Điền {digit} vào {cell}. Ba ô có ứng viên giới hạn trong cùng ba chữ số tạo thành một {strategy}.',
  'hint.subset-reservation.observe': 'Trong {unit}, {cells} chỉ chứa {digits}.',
  'hint.subset-reservation.explain':
    'Các ô đó giữ chỗ {digits} trong {unit}, vì vậy không ô nào khác ở đó có thể chứa các số này.',
  'hint.subset-reservation.apply':
    'Loại bỏ {candidates}. Mẫu này là {strategy}.',
  'hint.subset-reservation.place':
    'Điền {digit} vào {cell}. Mẫu này được gọi là {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'Trong {unit}, {digits} chỉ có thể xuất hiện ở {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Vì {digits} bị giới hạn trong các ô này của {unit}, các ô đó không thể chứa ứng viên khác.',
  'hint.hidden-subset-confinement.apply':
    'Loại {candidates} khỏi các ô bị giới hạn. Mẫu này là {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Điền {digit} vào {cell} sau khi loại các ứng viên khác. Mẫu này là {strategy}.',
  'hint.hidden-pair.first':
    'Trong {unit}, ứng viên {digit} chỉ xuất hiện ở {cells}.',
  'hint.hidden-pair.second':
    'Ứng viên {digit} cũng bị giới hạn trong cùng hai ô đó. Vì vậy, {digits} phải chiếm {cells} theo một thứ tự nào đó.',
  'hint.hidden-pair.consequence':
    'Hai ô đó được dành cho {digits}, nên các ứng viên khác không thể ở lại: {candidates}.',
  'hint.hidden-pair.apply':
    'Loại {candidates}. Mẫu này được gọi là {strategy}.',
  'hint.hidden-triple.first':
    'Trong {unit}, ứng viên {digit} chỉ xuất hiện ở {cells}.',
  'hint.hidden-triple.second':
    'Trong {unit}, {digits} chỉ có thể xuất hiện ở {cells}.',
  'hint.hidden-triple.third':
    'Trong {unit}, {digits} chỉ có thể xuất hiện ở {cells}.',
  'hint.hidden-triple.consequence':
    'Vì {digits} bị giới hạn trong các ô này của {unit}, các ô đó không thể chứa ứng viên khác.',
  'hint.hidden-triple.apply':
    'Loại {candidates} khỏi các ô bị giới hạn. Mẫu này là {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'Trong {source_unit}, ứng cử viên {digit} bị giới hạn ở {intersection_unit} tại {cells}.',
  'hint.intersection-confinement.explain':
    'Bởi vì mọi {digit} trong {source_unit} đều nằm trong {intersection_unit} nên các ô bên ngoài nguồn nhưng bên trong giao điểm không thể chứa nó.',
  'hint.intersection-confinement.apply':
    'Xóa ứng cử viên {digit} khỏi {cells}. Mẫu này là {strategy}.',
  'hint.intersection-confinement.place':
    'Đặt {digit} vào {cell} sau khi áp dụng giao điểm. Mẫu này là {strategy}.',
  'hint.fish-confinement.observe':
    'Trong {base_units}, ứng viên {digit} chỉ xuất hiện ở {cover_units}.',
  'hint.fish-confinement.explain':
    'Ứng viên {digit} bị giới hạn từ {base_units} vào {cover_units}, nên các đơn vị phủ phải nhận số đó qua những vị trí cơ sở được tô sáng.',
  'hint.swordfish.consequence':
    'Một số {digit} từ mỗi {base_units} phải nằm trong {cover_units}. Các vị trí đó sử dụng mỗi cột trong ba cột đúng một lần, nên không thể còn số {digit} nào khác trong các cột ấy.',
  'hint.fish-confinement.apply':
    'Loại bỏ ứng viên {digit} khỏi {cells}. Mẫu này là {strategy}.',
  'hint.x-wing.first':
    'Trong {base_unit}, ứng viên {digit} chỉ xuất hiện ở {cover_units}.',
  'hint.x-wing.second':
    'Điều tương tự cũng đúng với {base_unit}: ứng viên {digit} chỉ xuất hiện ở {cover_units}. Hai hàng dùng cùng hai cột.',
  'hint.x-wing.consequence':
    'Mỗi hàng trong {base_units} phải chứa một số {digit}, nên mỗi cột trong {cover_units} phải nhận một số {digit} từ một trong hai hàng đó. Có thể loại các ứng viên {digit} khác trong hai cột này.',
  'hint.x-wing.apply':
    'Loại ứng viên {digit} khỏi {cells}. Mẫu này được gọi là {strategy}.',
  'hint.pivot-wing.observe':
    'Tại {pivot}, ứng viên {pivot_digits} kết nối các ô cánh tại {wing_cells}.',
  'hint.pivot-wing.explain':
    'Mỗi cánh tại {wing_cells} chia sẻ một ứng cử viên với trục xoay tại {pivot} và cả hai cánh đều chứa {shared_digit}. Cho dù ứng cử viên trụ nào đúng thì một cánh phải chứa {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} chỉ còn các ứng viên {digits}. Ô này phải là một trong số đó.',
  'hint.xy-wing.case':
    'Nếu {pivot} là {pivot_digit}, {wing} không thể là {pivot_digit}. Ứng viên duy nhất còn lại là {shared_digit}, nên {wing} phải là {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Dù ứng viên nào đúng tại {pivot}, ít nhất một cánh {wing_cells} phải là {shared_digit}. Ta không cần biết cánh nào.',
  'hint.xy-wing.apply':
    '{cells} nhìn thấy cả hai cánh {wing_cells}. Vì ít nhất một cánh là {shared_digit}, hãy loại {shared_digit} khỏi các ô này. Mẫu này gọi là {strategy}.',
  'hint.xy-wing.place':
    '{cell} nhìn thấy cả hai cánh {wing_cells}. Vì ít nhất một cánh là {shared_digit}, {cell} không thể là {shared_digit}. Điền ứng viên duy nhất còn lại {digit}. Mẫu này gọi là {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} chỉ còn các ứng viên {digits}. Ô này phải là một trong số đó.',
  'hint.xyz-wing.case':
    'Nếu {pivot} là {pivot_digit}, thì {wing} trong cùng {unit} không thể là {pivot_digit}. Ứng viên còn lại duy nhất là {shared_digit}, nên {wing} phải là {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Nếu {pivot} là {shared_digit}, chính ô trục đã chứa {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Dù ứng viên nào đúng tại {pivot}, ít nhất một trong các ô {pattern_cells} phải là {shared_digit}. Ta không cần biết đó là ô nào.',
  'hint.xyz-wing.apply':
    '{target} cùng {first_unit} với {first_pattern_cell}, cùng {second_unit} với {second_pattern_cell}, và cùng {third_unit} với {third_pattern_cell}. Vì ít nhất một trong ba ô đó là {shared_digit}, {target} không thể là {shared_digit}. Hãy xóa ứng viên này. Mẫu này gọi là {strategy}.',
  'hint.strong-link-wing.observe':
    'Mỗi ô trong {wing_cells} chỉ có thể chứa {digits}.',
  'hint.strong-link-wing.bridge':
    'Trong {unit}, ứng viên {link_digit} chỉ có thể xuất hiện tại {link_cells}, nên ít nhất một trong các ô đó phải là {link_digit}.',
  'hint.strong-link-wing.force':
    'Nếu {first_link_cell} là {link_digit}, thì {first_wing_cell} không thể là {link_digit} và phải là {forced_digit}. Nếu {second_link_cell} là {link_digit}, thì {second_wing_cell} phải là {forced_digit}. Vì vậy, ít nhất một trong hai ô đó là {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Ít nhất một trong các ô {wing_cells} là {digit}. Loại ứng viên {digit} khỏi {cells} vì các ô này nhìn thấy cả hai. Mẫu này được gọi là {strategy}.',
  'hint.strong-link-wing.place':
    'Ít nhất một trong các ô {wing_cells} là {removed_digit}. Loại ứng viên {removed_digit} khỏi {cell} vì ô này nhìn thấy cả hai, rồi điền {digit}. Mẫu này được gọi là {strategy}.',
  'hint.relational-wing.apply':
    'Xóa ứng cử viên {digit} khỏi {cells}. Mẫu này là {strategy}.',
  'hint.relational-wing.place':
    'Xóa ứng cử viên {removed_digit} khỏi {cell}, sau đó đặt {digit} vào đó. Mẫu này là {strategy}.',
  'hint.bug-plus-one.observe':
    'Mọi ô chưa được giải khác đều có hai ứng cử viên, trong khi {cell} có {digits}.',
  'hint.bug-plus-one.explain':
    'Việc xóa {digit} khỏi {cell} sẽ để lại mọi giá trị kép của ô chưa được giải và làm cho giải pháp có thể hoán đổi cho nhau trên {units}, vì vậy {digit} phải đúng.',
  'hint.bug-plus-one.place':
    'Đặt {digit} vào {cell}. Ngoại lệ duy nhất này là {strategy}.',
  'hint.unique-rectangle.observe':
    'Các ô tại {cells} tạo thành một hình chữ nhật và tất cả đều chứa cặp {digits}.',
  'hint.unique-rectangle.type1':
    'Ba góc chứa chính xác {digits}. Nếu {cell} cũng sử dụng một trong hai chữ số thì hình chữ nhật sẽ cho phép hai giải pháp có thể hoán đổi cho nhau.',
  'hint.unique-rectangle.type2':
    'Hai góc mở rộng tại {cells} chia sẻ ứng cử viên bổ sung {digit}, vì vậy bất kỳ ô nào nhìn thấy cả hai góc đều không thể chứa {digit}.',
  'hint.unique-rectangle.type3':
    'Các chữ số bổ sung {digits} trong hình chữ nhật kết hợp với {cells} dưới dạng tập con dành riêng trong {unit}, vì vậy những chữ số đó có thể được xóa ở nơi khác trong đơn vị đó.',
  'hint.unique-rectangle.type4':
    'Ứng viên {digit} xuất hiện trong {cells} dưới dạng cặp liên hợp trong {unit}, vì vậy ứng viên {removed_digit} không thể chiếm góc mở rộng mà không tạo ra các giải pháp có thể hoán đổi cho nhau.',
  'hint.unique-rectangle.apply':
    'Xóa {candidates}. Mối quan hệ duy nhất này là {strategy}.',
  'hint.unique-rectangle.place':
    'Đặt {digit} vào {cell} sau khi áp dụng mối quan hệ duy nhất. Mẫu này là {strategy}.',
  'hint.implication-chain.observe':
    'Bắt đầu tại {cell}, ô chỉ có các ứng viên {digits}.',
  'hint.implication-chain.explain':
    '{from} và {to} có chung một ứng viên và nhìn thấy nhau, nên ứng viên đó không thể đúng ở cả hai; chuỗi suy luận tiếp tục.',
  'hint.implication-chain.apply':
    'Một đầu mút phải chứa {digit}, vì vậy hãy loại bỏ ứng viên {digit} khỏi {cells}. Mẫu này là {strategy}.',
  'hint.narration.apply': 'Áp dụng khoản khấu trừ: ',
  'hint.narration.look-at': 'Nhìn vào ',
  'hint.narration.value-conflict':
    '. Giá trị được nhập của nó xung đột với câu đố.',
  'hint.narration.clear-value': 'Xóa giá trị tại ',
  'hint.narration.clear-value-tail':
    ' để lưới ứng viên có thể được kiểm tra tiếp theo.',
  'hint.narration.candidate-inconsistent':
    '. Trạng thái ứng cử viên của nó không nhất quán với câu đố.',
  'hint.narration.reset-candidates': 'Đặt lại ứng viên được đặt tại ',
  'hint.narration.reset-candidates-tail':
    ' tới mọi chữ số được cho phép bởi các giá trị hàng, cột và hộp được chấp nhận.',
  'hint.narration.only-candidate': '. Nó chỉ có một ứng cử viên: ',
  'hint.narration.no-other-digit':
    'Vì không có chữ số nào khác có thể nhập vào ',
  'hint.narration.place': ', địa điểm ',
  'hint.narration.naked-single-tail':
    ' ở đó. Đây được gọi là Độc thân khỏa thân.',
  'hint.narration.in-unit': 'trong ',
  'hint.narration.consider-digit': ', xem xét ở đâu ',
  'hint.narration.can-appear': ' có thể xuất hiện.',
  'hint.narration.other-cells': 'Mọi ô trống khác trong ',
  'hint.narration.cannot-contain': ' không thể chứa ',
  'hint.narration.leaving-only': ', chỉ để lại ',
  'hint.narration.because-unit': 'Bởi vì ',
  'hint.narration.still-needs': ' vẫn cần ',
  'hint.narration.only-cell': ' và ',
  'hint.narration.hidden-single-tail': ' là ô, địa điểm duy nhất có thể ',
  'hint.narration.hidden-single-name': ' ở đó. Đây được gọi là Đĩa đơn ẩn.',
  'hint.narration.place-result': 'địa điểm ',
  'hint.narration.in': ' trong ',
  'hint.narration.remove': 'loại bỏ ứng viên ',
  'hint.narration.from': ' từ ',
  'hint.narration.strategy-result': '. Đây là kết quả {strategy}.',
  'welcome.eyebrow': 'Câu đố mới',
  'welcome.title': 'Chọn độ khó của bạn',
  'welcome.lede': 'Chọn một cấp độ và bắt đầu khi bạn đã sẵn sàng.',
  'welcome.difficulty': 'độ khó',
  'welcome.start': 'Bắt đầu câu đố {difficulty}',
  'welcome.starting': 'Đang bắt đầu câu đố {difficulty}…',
  'welcome.preview': 'Xem trước câu đố Sudoku',
  'loading.initial': 'Đang tải câu đố của bạn…',
  'loading.account.eyebrow': 'Tài khoản',
  'loading.account.title': 'Đang lưu câu đố vào tài khoản của bạn…',
  'loading.account.detail':
    'Tiến trình của bạn vẫn được giữ trên thiết bị này cho đến khi tài khoản xác nhận đã lưu.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Trở lại trang đầu…',
  'loading.home.detail':
    'Kiểm tra giao diện mới nhất trước khi hiển thị lựa chọn cấp độ.',
  'loading.restart.eyebrow': 'Câu đố tương tự',
  'loading.restart.title': 'Bắt đầu lại câu đố này…',
  'loading.restart.detail': 'Giữ bảng cũ bị khóa cho đến khi thử mới sẵn sàng.',
  'loading.new.eyebrow': 'Câu đố mới',
  'loading.new.title': 'Đang chuẩn bị bo mạch {difficulty} của bạn…',
  'loading.new.detail':
    'Tạo một câu đố mới ngay bây giờ. Bạn sẽ chơi trong giây lát.',
  'confirmation.home.eyebrow': 'Trở về nhà?',
  'confirmation.home.title': 'Để lại câu đố này',
  'confirmation.home.description':
    'Tiến trình hiện tại của bạn sẽ không còn tự động mở trên thiết bị này nữa.',
  'confirmation.home.cancel': 'Tiếp tục chơi',
  'confirmation.home.confirm': 'Trở về trang đầu',
  'confirmation.restart.eyebrow': 'Bắt đầu lại?',
  'confirmation.restart.title': 'Bắt đầu lại',
  'confirmation.restart.description':
    'Chơi lại câu đố này từ câu đố ban đầu hoặc chọn một câu đố khác.',
  'confirmation.restart.replay.title': 'Phát lại câu đố này',
  'confirmation.restart.replay.description':
    'Giữ những thông tin này và thiết lập lại lần thử này.',
  'confirmation.restart.different.title': 'Chơi một câu đố khác',
  'confirmation.restart.different.description':
    'Chọn một cấp độ cho một bảng mới.',
  'confirmation.restart.different.level': 'Cấp độ cho câu đố khác nhau',
  'common.cancel': 'Hủy bỏ',
  'account.confirm.deleteGame.eyebrow': 'Xóa trò chơi đã lưu?',
  'account.confirm.deleteGame.title': 'Xóa trò chơi này',
  'account.confirm.deleteGame.description':
    'Câu đố này và tiến trình của nó sẽ bị xóa vĩnh viễn khỏi Trò chơi của tôi. Điều này không thể hoàn tác được.',
  'account.confirm.deleteGame.action': 'Xóa trò chơi',
  'account.confirm.deleteGame.pending': 'Đang xóa trò chơi đã lưu…',
  'account.confirm.deleteAll.eyebrow': 'Xóa mọi trò chơi đã lưu?',
  'account.confirm.deleteAll.title': 'Xóa tất cả trò chơi',
  'account.confirm.deleteAll.description':
    'Mọi câu đố và mọi tiến trình trong Trò chơi của tôi sẽ bị xóa vĩnh viễn. Điều này không thể hoàn tác được.',
  'account.confirm.deleteAll.action': 'Xóa tất cả trò chơi',
  'account.confirm.deleteAll.pending': 'Đang xóa tất cả trò chơi…',
  'account.confirm.revoke.eyebrow': 'Bảo mật tài khoản',
  'account.confirm.revoke.title': 'Đăng xuất khỏi mọi thiết bị',
  'account.confirm.revoke.description':
    'Bạn sẽ đăng xuất khỏi mọi thiết bị, kể cả thiết bị này. Tài khoản và các ván đã lưu vẫn được giữ nguyên.',
  'account.confirm.revoke.action': 'Đăng xuất khỏi mọi thiết bị',
  'account.confirm.revoke.pending': 'Đang đăng xuất khỏi mọi thiết bị…',
  'account.confirm.deleteAccount.eyebrow': 'Hành động vĩnh viễn',
  'account.confirm.deleteAccount.title': 'Xóa tài khoản của bạn',
  'account.confirm.deleteAccount.description':
    'Danh tính của bạn, mọi phiên đăng nhập và tất cả trò chơi đã lưu sẽ bị xóa vĩnh viễn. Danh mục câu đố được chia sẻ không bị ảnh hưởng.',
  'account.confirm.deleteAccount.action': 'Xóa tài khoản',
  'account.confirm.deleteAccount.pending': 'Đang xóa tài khoản…',
  'account.confirm.typeEmail': 'Gõ {email} để xác nhận',
  'account.label': 'Tài khoản',
  'account.continue.title': 'Tiếp tục trên các thiết bị khác',
  'account.continue.detail':
    'Đăng nhập để tự động lưu trò chơi đang hoạt động của trình duyệt này.',
  'account.signIn': 'Đăng nhập bằng Google',
  'account.signIn.short': 'Đăng nhập',
  'game.title': 'Câu đố {difficulty}',
  'game.statusActions': 'Trạng thái và hành động của trò chơi',
  'game.elapsed': 'Thời gian đã trôi qua',
  'game.mistakes': 'Những sai lầm {count}',
  'game.resume': 'Tiếp tục',
  'game.pause': 'Tạm dừng',
  'status.resumed': 'Câu đố lại tiếp tục.',
  'status.paused': 'Câu đố đã tạm dừng.',
  'status.restarted':
    'Câu đố đã được khởi động lại. Nỗ lực mới, cùng một câu đố.',
  'status.hintClosed': 'Gợi ý đã đóng. Câu đố của bạn không thay đổi.',
  'status.strategyApplied':
    'Chiến lược được áp dụng. Bạn có thể hoàn tác nó trong một bước.',
  'status.correctionApplied':
    'Đã áp dụng sửa chữa. Bạn có thể hoàn tác nó trong một bước.',
  'status.hintAlreadyApplied': 'Gợi ý này đã được phản ánh trong bảng.',
  'status.hintRefreshed': 'Bàn cờ đã thay đổi nên gợi ý đã được cập nhật.',
  'status.accountSaved': 'Trò chơi đã được lưu vào tài khoản của bạn.',
  'status.waitBeforeLeaving':
    'Đợi các nước đi đang chờ xử lý trước khi rời khỏi câu đố này.',
  'status.selectEditableCell': 'Chọn một ô có thể chỉnh sửa trước khi nhập số.',
  'status.savingAccount': 'Đang lưu trò chơi địa phương vào tài khoản của bạn…',
  'status.restoring': 'Đang khôi phục câu đố của bạn…',
  'status.restored': 'Câu đố địa phương của bạn đã được khôi phục.',
  'status.puzzleReady': 'Câu đố {difficulty} đã sẵn sàng.',
  'status.puzzleRestored': 'Câu đố {difficulty} đã được khôi phục.',
  'status.waitBeforeStarting':
    'Đợi các bước di chuyển đang chờ xử lý trước khi bắt đầu một câu đố khác.',
  'status.solved': 'Đã giải xong! Làm tốt lắm.',
  'status.moveSaved': 'Đã lưu di chuyển.',
  'status.waitBeforeHint': 'Chờ các nước đi đang chờ xử lý trước khi mở gợi ý.',
  'status.hintReady': 'Gợi ý đã sẵn sàng. Bắt đầu với bước 1.',
  'status.openingSaved': 'Đang mở trò chơi đã lưu của bạn…',
  'status.savedDeleted': 'Trò chơi đã lưu đã bị xóa.',
  'status.allDeleted': 'Tất cả các trò chơi đã lưu đã bị xóa.',
  'status.signedOut': 'Đã đăng xuất. Trò chơi tài khoản của bạn vẫn được lưu.',
  'status.revoked':
    'Bạn đã đăng xuất khỏi mọi thiết bị. Hãy đăng nhập lại để tiếp tục.',
  'status.accountDeleted': 'Đã xóa tài khoản và trò chơi đã lưu.',
  'retry.saving': 'Hãy thử lưu lại',
  'retry.restoring': 'Hãy thử khôi phục lại',
  'retry.connection': 'Kiểm tra kết nối',
  'retry.starting': 'Hãy thử bắt đầu lại',
  'retry.move': 'Thử di chuyển lại',
  'retry.hint': 'Hãy thử gợi ý lại',
  'retry.time': 'Thử lại tiết kiệm thời gian',
  'retry.progress': 'Thử lưu lại tiến trình',
  'retry.leaving': 'Hãy thử rời đi lần nữa',
  'retry.opening': 'Hãy thử mở lại',
  'retry.deleting': 'Hãy thử xóa lại',
  'retry.signOut': 'Hãy thử đăng xuất lại',
  'retry.revoke': 'Thử đăng xuất khỏi mọi thiết bị lần nữa',
  'retry.deleteAccount': 'Hãy thử xóa tài khoản một lần nữa',
  'error.accountSave':
    'Trò chơi cục bộ của bạn an toàn nhưng không thể lưu vào tài khoản của bạn.',
  'error.restoring': 'Câu đố của bạn không thể được khôi phục.',
  'error.connection':
    'Không thể truy cập dịch vụ trò chơi. Hãy kiểm tra kết nối của bạn và thử lại.',
  'error.http': 'Dịch vụ trò chơi trả về lỗi {status}. Vui lòng thử lại.',
  'error.unavailable':
    'Dịch vụ trò chơi tạm thời không khả dụng. Bảng của bạn được an toàn; thử lại.',
  'error.starting': 'Trò chơi không thể bắt đầu.',
  'error.signInAgain': 'Đăng nhập lại để lưu nước đi.',
  'error.localUnavailable': 'Trò chơi địa phương không có sẵn.',
  'error.move': 'Việc di chuyển không thể được lưu.',
  'error.currentUnavailable': 'Trò chơi hiện tại không có sẵn.',
  'error.hintChanged': 'Bàn cờ đã thay đổi trong khi chuẩn bị gợi ý.',
  'error.hint': 'Gợi ý không thể được chuẩn bị.',
  'error.time': 'Không thể lưu thời gian trò chơi mới nhất.',
  'error.timer': 'Không thể lưu trạng thái hẹn giờ mới nhất.',
  'error.leaving': 'Câu đố địa phương không thể được giải quyết.',
  'error.opening': 'Trò chơi đã lưu đó không thể mở được.',
  'error.deleteGame': 'Không thể xóa trò chơi đã lưu.',
  'error.deleteAll': 'Không thể xóa các trò chơi đã lưu.',
  'error.signOut': 'Bạn không thể đăng xuất được.',
  'error.revoke': 'Phiên không thể bị thu hồi.',
  'error.deleteAccount': 'Không thể xóa tài khoản.',
  'error.invalid-request': 'Yêu cầu không hợp lệ.',
  'error.invalid-json': 'Yêu cầu chứa JSON không hợp lệ.',
  'error.unsupported-media-type': 'Yêu cầu Loại nội dung không được hỗ trợ.',
  'error.payload-too-large': 'Yêu cầu quá lớn.',
  'error.unauthorized': 'Cần có sự cho phép.',
  'error.forbidden-origin': 'Nguồn gốc yêu cầu này không được phép.',
  'error.session-not-found': 'Phiên trò chơi không được tìm thấy.',
  'error.revision-conflict':
    'Bàn cờ đã thay đổi trước khi nước đi này được áp dụng.',
  'error.invalid-session': 'Phiên trò chơi không hợp lệ.',
  'error.invalid-action': 'Hành động trò chơi này không hợp lệ.',
  'error.invalid-cell': 'Ô này không hợp lệ.',
  'error.immutable-cell': 'Một ô nhất định không thể thay đổi được.',
  'error.note-not-allowed': 'Không thể thay đổi ứng viên trong ô này.',
  'error.no-undo': 'Không có hành động nào để hoàn tác.',
  'error.no-redo': 'Không có hành động nào để làm lại.',
  'error.no-hint': 'Không có gợi ý nào có sẵn.',
  'error.stale-hint': 'Bàn cờ đã thay đổi sau khi gợi ý này được chuẩn bị.',
  'error.persistence-failed': 'Không thể lưu trò chơi.',
  'error.internal-error': 'Yêu cầu không thể được hoàn thành.',
  'error.account-unavailable': 'Các tính năng của tài khoản không khả dụng.',
  'error.account-unauthorized': 'Một phiên ứng dụng hợp lệ là bắt buộc.',
  'error.csrf-failed':
    'Không thể xác minh lần đăng nhập này. Hãy đăng nhập lại.',
  'error.account-game-not-found': 'Không tìm thấy trò chơi đã lưu.',
  'error.guest-revision-conflict':
    'Trò chơi cục bộ đã thay đổi trước khi hành động này được áp dụng.',
  'error.guest-claim-conflict':
    'Trò chơi địa phương này đã được lưu vào tài khoản.',
  'error.malformedDescriptor': 'Lời giải thích không thể được hiển thị.',
  'account.close': 'Đóng bảng tài khoản',
  'account.games.title': 'Trò chơi của tôi',
  'account.games.deleteAll': 'Xóa tất cả',
  'account.games.deletingAll': 'Đang xóa tất cả…',
  'account.games.empty': 'Chưa có trò chơi nào được lưu.',
  'account.games.puzzle': 'Câu đố {difficulty}',
  'account.games.finished': 'Đã hoàn thành',
  'account.games.inProgress': 'Đang tiến hành',
  'account.games.saved': 'Trò chơi đã lưu',
  'account.games.open': 'Mở',
  'account.games.opening': 'Khai mạc…',
  'account.games.delete': 'Xóa',
  'account.games.deleting': 'Đang xóa…',
  'account.signOut': 'Đăng xuất',
  'account.signingOut': 'Đang đăng xuất…',
  'account.settings': 'Cài đặt tài khoản',
  'account.revoke': 'Đăng xuất khỏi mọi thiết bị',
  'account.delete': 'Xóa tài khoản',
  'board.label': 'bảng trò chơi Sudoku',
  'board.cell.given': 'đã cho {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'trống, ứng viên {candidates}',
  'board.cell.empty': 'trống rỗng',
  'board.hint.focus': 'tiêu điểm gợi ý',
  'board.hint.premise': 'bằng chứng gợi ý',
  'board.hint.eliminated': 'ứng cử viên bị loại',
  'board.hint.conclusion': 'kết luận gợi ý',
  'board.hint.problem': 'cần chỉnh sửa',
  'board.hint.extra': 'ứng cử viên không thể',
  'board.hint.group': 'nhóm {group}',
  'board.hint.chain': 'vị trí chuỗi {position}',
  'board.paused.title': 'Câu đố đã tạm dừng',
  'board.paused.detail': 'Thời gian của bạn bị dừng lại.',
  'hint.label': 'gợi ý',
  'hint.close': 'Đóng',
  'hint.strategy.grade': 'Chiến lược {grade}',
  'hint.applying': 'Đang áp dụng gợi ý…',
  'hint.refreshing': 'Gợi ý đang làm mới…',
  'hint.step': 'Bước {current} của {total}',
  'hint.legend.label': 'Chú giải gợi ý trực quan',
  'hint.legend.strong': 'Chất rắn: phải chứa',
  'hint.legend.weak': 'Nét đứt: không thể cả hai',
  'hint.legend.implication': 'Mũi tên: hàm ý',
  'hint.legend.groups': 'A/B: các nhóm xen kẽ',
  'hint.legend.order': 'Số: thứ tự chuỗi',
  'hint.back': 'Quay lại',
  'hint.next': 'Tiếp theo',
  'hint.apply': 'Áp dụng gợi ý',
  'controls.label': 'Điều khiển trò chơi',
  'controls.digit.note': 'Thêm hoặc xóa ghi chú {digit}',
  'controls.digit.enter': 'Nhập {digit}',
  'controls.hint.preparing': 'Đang chuẩn bị gợi ý…',
  'controls.hint.preparingDetail':
    'Giữ câu đố có thể nhìn thấy được trong khi chuẩn bị bước tiếp theo.',
  'controls.complete.eyebrow': 'Câu đố hoàn thành',
  'controls.complete.title': 'Giải quyết trong {time}',
  'controls.complete.detail':
    'Giữ nhịp điệu với một bảng {difficulty} khác hoặc chọn một cấp độ khác.',
  'controls.complete.another': 'Chơi {difficulty} khác',
  'controls.complete.replay': 'Phát lại câu đố này',
  'controls.complete.choose': 'Chọn cấp độ khác',
  'controls.pad': 'Bàn phím số',
  'controls.pad.notes': 'Chế độ bàn phím số, ghi chú',
  'controls.modes': 'Chế độ đầu vào',
  'controls.notes.on': 'Ghi chú trên',
  'controls.notes.off': 'Tắt ghi chú',
  'controls.candidates.on': 'Ứng viên trên',
  'controls.candidates.off': 'Thí sinh nghỉ thi đấu',
  'controls.actions': 'Hành động giải đố',
  'controls.erase': 'Xóa',
  'controls.undo': 'Hoàn tác',
  'controls.undoing': 'Đang hoàn tác…',
  'controls.redo': 'Làm lại',
  'controls.redoing': 'Đang làm lại…',
  'controls.hint.reveal': 'Tiết lộ một gợi ý',
  'controls.shortcuts': 'Phím tắt',
  'controls.shortcuts.move': 'Di chuyển',
  'controls.shortcuts.arrows': 'Phím mũi tên',
  'controls.shortcuts.enter': 'Nhập một số',
  'controls.shortcuts.notes': 'Ghi chú/ứng viên',
  'controls.shortcuts.or': 'hoặc',
  'controls.shortcuts.pause': 'Tạm dừng hoặc tiếp tục',
  'controls.shortcuts.hint': 'Mở, nâng cao hoặc áp dụng gợi ý',
  'controls.shortcuts.hintOther': 'Điều khiển gợi ý khác',
  'hint.target.candidate.visible': 'ứng cử viên nổi bật này',
  'hint.target.candidate.accessible':
    'ứng viên {value} ở hàng {row}, cột {column}',
  'hint.target.cell.visible': 'ô được đánh dấu này',
  'hint.target.cell.accessible': 'hàng {row}, cột {column}',
  'hint.target.unit.visible': 'cái này được đánh dấu {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'hàng',
  'hint.target.column': 'cột',
  'hint.target.box': 'cái hộp',
  'chrome.home': 'nhà Sudoku',
  'chrome.appearance': 'Ngoại hình',
  'chrome.theme.use': 'Sử dụng chủ đề {theme}',
  'chrome.theme.systemTitle': 'Chủ đề hệ thống ({theme})',
  'chrome.theme.title': 'Chủ đề {theme}',
  'chrome.theme.system': 'Hệ thống',
  'chrome.theme.systemName': 'hệ thống',
  'chrome.theme.light': 'ánh sáng',
  'chrome.theme.dark': 'tối',
  'chrome.connection.connecting': 'Đang kết nối',
  'chrome.connection.unavailable': 'Dịch vụ không có sẵn',
  'chrome.footer.tagline': 'Chơi chu đáo, không có phiền nhiễu.',
  'chrome.footer.privacy': 'Quyền riêng tư',
  'chrome.footer.terms': 'Điều khoản',
  'chrome.footer.input': 'Bàn phím và cảm ứng đã sẵn sàng',
};
