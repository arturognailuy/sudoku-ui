import type { MessageCatalog } from './types';

export const ko: MessageCatalog = {
  'common.language.auto': '자동',
  'common.language.label': '언어',
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
  'common.difficulty.easy': '쉬움',
  'common.difficulty.medium': '보통',
  'accessibility.language.changed': '언어가 {language}로 변경되었습니다.',
  'common.difficulty.hard': '어려움',
  'difficulty.easy.name': '쉬움',
  'common.difficulty.expert': '전문가',
  'common.difficulty.evil': '최고난도',
  'difficulty.medium.name': '보통',
  'difficulty.hard.name': '어려움',
  'difficulty.expert.name': '전문가',
  'difficulty.evil.name': '최고난도',
  'strategy.hidden-single.name': 'Hidden Single',
  'strategy.naked-single.name': 'Naked Single',
  'strategy.naked-pair.name': 'Naked Pair',
  'strategy.naked-triple.name': 'Naked Triple',
  'strategy.hidden-pair.name': 'Hidden Pair',
  'strategy.pointing-pair.name': 'Pointing Pairs / Box-Line Reduction',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.xy-wing.name': 'XY-Wing',
  'strategy.hidden-triple.name': 'Hidden Triple',
  'strategy.swordfish.name': 'Swordfish',
  'strategy.naked-quad.name': 'Naked Quad',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.simple-coloring.name': 'Simple Coloring',
  'strategy.jellyfish.name': 'Jellyfish',
  'strategy.xyz-wing.name': 'XYZ-Wing',
  'strategy.hidden-quad.name': 'Hidden Quad',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Unique Rectangle Type 1',
  'strategy.unique-rectangle-3.name': 'Unique Rectangle Type 3',
  'strategy.unique-rectangle-2.name': 'Unique Rectangle Type 2',
  'strategy.unique-rectangle-4.name': 'Unique Rectangle Type 4',
  'strategy.backtracker.name': 'Backtracker',
  'strategy.xy-chain.name': 'XY-Chain',
  'strategy.x-cycles.name': 'X-Cycles',
  'hint.value-correction.title': '이 값을 수정하세요.',
  'hint.candidate-correction.title': '이 후보 셀을 수정하세요.',
  'hint.value-correction.summary':
    '{cell}의 값이 퍼즐과 충돌합니다. 계속하기 전에 지우십시오.',
  'hint.candidate-correction.summary':
    '계속하기 전에 같은 행, 열, 박스에 확정된 숫자를 기준으로 {cell}의 후보를 다시 정리하세요.',
  'hint.strategy.summary':
    '{steps}단계를 따라 {strategy}을 이해하고 적용해 보세요.',
  'hint.value-correction.observe':
    '{cell}을 확인하세요. 이 숫자는 현재 보드와 맞지 않습니다.',
  'hint.candidate-correction.observe':
    '{cell}을 확인하세요. 후보가 현재 보드와 맞지 않습니다.',
  'hint.value-correction.conclude':
    '다음에 후보 그리드를 확인할 수 있도록 {cell}에서 값을 지우세요.',
  'hint.candidate-correction.compare':
    '같은 행, 열, 박스에 확정된 숫자를 기준으로 이 칸의 후보를 처음부터 다시 살펴보세요.',
  'hint.candidate-correction.conclude':
    '{cell}의 후보를 같은 행, 열, 박스에서 가능한 모든 숫자로 다시 설정하세요.',
  'hint.strategy.observe': '강조된 칸, 후보, 행, 열, 박스를 확인하세요.',
  'hint.strategy.compare':
    '강조된 조건을 비교해 반드시 성립하는 결과를 찾으세요.',
  'hint.strategy.conclude':
    '강조된 결과를 적용하세요. 이 패턴이 {strategy}입니다.',
  'hint.narration.look-at': '봐',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    '후보 {digit}는 {group_a}의 A와 {group_b}의 B라는 두 개의 교대 그룹을 구성합니다.',
  'hint.coloring.alternatives':
    '각 솔리드 링크는 정확히 하나의 엔드포인트에 {digit}가 포함되어 있으므로 링크된 후보가 그룹 A와 B를 번갈아 포함한다는 의미입니다. 충돌로 인해 하나의 그룹이 제외될 수 있지만 두 그룹을 모두 보는 셀은 {digit}를 포함할 수 없습니다.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    '연결된 후보는 {colored_digit}에 대한 결과를 강제합니다. {candidates}를 제거합니다. 이 패턴은 {strategy}입니다.',
  'hint.coloring.place':
    '{colored_digit}에 연결된 후보가 결과를 강제합니다. {cell}에 {digit}를 배치합니다. 이 패턴은 {strategy}입니다.',
  'hint.x-cycle.opening':
    '{unit}에서는 {digit}는 {cells}로만 갈 수 있습니다. 이 두 셀 중 하나에는 {digit}가 포함되어야 합니다.',
  'hint.x-cycle.assume':
    '{start}가 {digit}가 아니라고 가정합니다. 그러면 {forced}는 {digit}가 되어야 합니다. 즉, {blocked}는 {digit}가 될 수 없으므로 {unit}는 {digit}를 {result}로 강제합니다.',
  'hint.x-cycle.follow':
    '{true_cell}는 {digit}이므로 {blocked}는 {digit}가 될 수 없습니다. 따라서 {unit}는 {digit}를 {result}로 강제합니다.',
  'hint.x-cycle.close':
    '{true_cell}는 {digit}이므로 {blocked}는 {digit}가 될 수 없습니다. {unit}에서는 {result}가 {digit}의 유일한 장소가 됩니다.',
  'hint.x-cycle.place':
    '{assumption}가 {digit}가 아니라는 시작 가정은 {cell}가 {digit}라는 결과로 이어지므로 이 가정은 참일 수 없습니다. {digit}를 {cell}에 배치합니다. 이 패턴을 {strategy}라고 합니다.',
  'hint.xy-chain.start':
    '{cell}의 후보는 {first_digit}과 {second_digit}뿐입니다. {endpoint_digit}이거나, {endpoint_digit}이 아니라면 반드시 {other_digit}입니다.',
  'hint.xy-chain.assume':
    '{start}가 {endpoint_digit}이 아니라고 가정합니다. 그러면 {start_value}여야 합니다. {start}와 {middle}가 {first_unit}을 공유하므로 {middle}는 {start_value}일 수 없고 {middle_value}여야 합니다. 따라서 {second_unit}의 {result}는 {middle_value}일 수 없고 {result_value}여야 합니다.',
  'hint.xy-chain.follow':
    '{start}가 {start_value}이므로 {first_unit}의 {middle}는 {start_value}일 수 없고 {middle_value}여야 합니다. {middle}와 {result}가 {second_unit}을 공유하므로 {result}는 {middle_value}일 수 없고 {result_value}여야 합니다.',
  'hint.xy-chain.reach':
    '{start}가 {start_value}이므로 {endpoint}는 {shared_digit}일 수 없습니다. 남은 유일한 후보는 {endpoint_digit}이므로 {endpoint_digit}입니다.',
  'hint.xy-chain.place':
    '{first_endpoint}가 {endpoint_digit}이면 첫 번째 끝점에 {endpoint_digit}이 있습니다. 아니라면 연쇄가 다른 끝점 {second_endpoint}에 {endpoint_digit}을 강제합니다. 따라서 적어도 한 끝점은 {endpoint_digit}입니다. {cell}은 두 끝점을 모두 보므로 {endpoint_digit}일 수 없습니다. {cell}에 {digit}을 넣으세요. 이 패턴을 {strategy}이라고 합니다.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    '{cell}부터 살펴봅니다. 같은 행, 열, 박스에 이미 {excluded_digits}이 있습니다.',
  'hint.naked-single.only':
    '따라서 {cell}에 들어갈 수 있는 숫자는 {digit}뿐입니다.',
  'hint.naked-single.apply':
    '{cell}에 {digit}을 놓습니다. 후보가 하나만 남은 칸을 {strategy}이라고 합니다.',
  'hint.hidden-single.inspect':
    '{unit}에서 {digit}이 들어갈 수 있는 곳을 확인하세요.',
  'hint.hidden-single.blockers':
    '{blockers}에 놓인 {digit} 때문에 {unit}의 다른 모든 빈칸에는 {digit}을 넣을 수 없습니다.',
  'hint.hidden-single.only': '이제 {digit}을 넣을 수 있는 곳은 {cell}뿐입니다.',
  'hint.hidden-single.apply':
    '{cell}에 {digit}을 놓으세요. 한 숫자가 행, 열 또는 박스에서 들어갈 수 있는 칸이 하나뿐이면 {strategy}입니다.',
  'hint.naked-pair.inspect':
    '{unit}부터 살펴보세요. {cell}에는 {first_digit} 또는 {second_digit}만 들어갈 수 있습니다.',
  'hint.naked-pair.match':
    '{cell}에도 같은 두 후보 {first_digit}과 {second_digit}이 있습니다.',
  'hint.naked-pair.reserve':
    '이 두 칸에는 {digits}이 어떤 순서로든 들어가야 하므로 후보 {digit}은 {unit}의 다른 칸에 남을 수 없습니다.',
  'hint.naked-pair.apply':
    '{candidates}을 제거하세요. 이 단계에서는 값을 넣지 않습니다. 이 패턴은 {strategy}입니다.',
  'hint.naked-triple.first':
    '{unit}부터 살펴보세요. {cell}에는 {first_digit} 또는 {second_digit}만 들어갈 수 있습니다.',
  'hint.naked-triple.second':
    '{cell}을 추가하세요. 이 칸에는 {first_digit} 또는 {second_digit}만 들어갈 수 있습니다.',
  'hint.naked-triple.third':
    '{cell}도 추가하세요. 이 칸에는 {first_digit} 또는 {second_digit}만 들어갈 수 있습니다. 이제 세 칸의 후보는 {reserved_digits}뿐입니다.',
  'hint.naked-triple.consequence':
    '이 세 칸에는 {reserved_digits}이 어떤 순서로든 들어가야 합니다. 따라서 {cell}에서 {removed_digits}을 제거하면 {remaining_digit}만 남습니다.',
  'hint.naked-triple.apply':
    '{cell}에 {digit}을 놓으세요. 세 칸의 후보가 같은 세 숫자로만 제한되면 {strategy}입니다.',
  'hint.subset-reservation.observe':
    '{unit}에서 {cells}에는 {digits}만 들어갈 수 있습니다.',
  'hint.subset-reservation.explain':
    '이 칸들이 {unit}의 {digits}을 차지하므로, 그곳의 다른 칸에는 이 숫자들이 들어갈 수 없습니다.',
  'hint.subset-reservation.apply':
    '{candidates}을 제거하세요. 이 패턴은 {strategy}입니다.',
  'hint.subset-reservation.place':
    '{cell}에 {digit}을 놓으세요. 이 패턴을 {strategy}이라고 합니다.',
  'hint.hidden-subset-confinement.observe':
    '{unit}에서 {digits}은(는) {cells}에만 들어갈 수 있습니다.',
  'hint.hidden-subset-confinement.explain':
    '{digits}이(가) {unit}의 이 칸들에 한정되므로, 이 칸들에는 다른 후보가 들어갈 수 없습니다.',
  'hint.hidden-subset-confinement.apply':
    '한정된 칸에서 {candidates}을(를) 제거하세요. 이 패턴은 {strategy}입니다.',
  'hint.hidden-subset-confinement.place':
    '다른 후보를 제거한 뒤 {cell}에 {digit}을(를) 넣으세요. 이 패턴은 {strategy}입니다.',
  'hint.hidden-pair.first':
    '{unit}에서 후보 {digit}은(는) {cells}에만 있습니다.',
  'hint.hidden-pair.second':
    '후보 {digit}도 같은 두 칸에만 있습니다. 따라서 {digits}은(는) 순서와 관계없이 {cells}을(를) 차지해야 합니다.',
  'hint.hidden-pair.consequence':
    '이 두 칸은 {digits}을(를) 위해 예약되므로 다른 후보는 남을 수 없습니다: {candidates}.',
  'hint.hidden-pair.apply':
    '{candidates}을(를) 제거하세요. 이 패턴을 {strategy}이라고 합니다.',
  'hint.hidden-triple.first':
    '{unit}에서 후보 {digit}은(는) {cells}에만 있습니다.',
  'hint.hidden-triple.second':
    '{unit}에서 {digits}은(는) {cells}에만 들어갈 수 있습니다.',
  'hint.hidden-triple.third':
    '{unit}에서 {digits}은(는) {cells}에만 들어갈 수 있습니다.',
  'hint.hidden-triple.consequence':
    '{digits}이(가) {unit}의 이 칸들에 한정되므로, 이 칸들에는 다른 후보가 들어갈 수 없습니다.',
  'hint.hidden-triple.apply':
    '한정된 칸에서 {candidates}을(를) 제거하세요. 이 패턴은 {strategy}입니다.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    '{source_unit}에서 후보 {digit}는 {cells}의 {intersection_unit}로 제한됩니다.',
  'hint.intersection-confinement.explain':
    '{source_unit}의 모든 {digit}는 {intersection_unit}에 있으므로 소스 외부에 있지만 교차점 내부에 있는 셀은 이를 포함할 수 없습니다.',
  'hint.intersection-confinement.apply':
    '{cells}에서 후보 {digit}를 제거합니다. 이 패턴은 {strategy}입니다.',
  'hint.intersection-confinement.place':
    '교차점을 적용한 후 {cell}에 {digit}를 배치합니다. 이 패턴은 {strategy}입니다.',
  'hint.fish-confinement.observe':
    '{base_units}에서 후보 {digit}은 {cover_units}에만 나타납니다.',
  'hint.fish-confinement.explain':
    '후보 {digit}은 {base_units}에서 {cover_units}로 제한되므로, 각 커버 단위는 강조된 기준 위치를 통해 이 숫자를 받아야 합니다.',
  'hint.fish-confinement.apply':
    '{cells}에서 후보 {digit}을 제거하세요. 이 패턴은 {strategy}입니다.',
  'hint.x-wing.first':
    '{base_unit}에서 후보 {digit}은(는) {cover_units}에만 있습니다.',
  'hint.x-wing.second':
    '{base_unit}도 같습니다. 후보 {digit}은(는) {cover_units}에만 있으며, 두 행이 같은 두 열을 사용합니다.',
  'hint.x-wing.consequence':
    '{base_units}에는 각각 {digit}이(가) 하나씩 있어야 하므로 {cover_units}에는 각각 이 두 행 중 하나에서 {digit}이(가) 들어갑니다. 따라서 이 열들의 다른 {digit} 후보는 제거할 수 있습니다.',
  'hint.x-wing.apply':
    '{cells}에서 후보 {digit}을(를) 제거하세요. 이 패턴을 {strategy}이라고 합니다.',
  'hint.pivot-wing.observe':
    '{pivot}에서 후보 {pivot_digits}는 {wing_cells}의 날개 셀을 연결합니다.',
  'hint.pivot-wing.explain':
    '{wing_cells}의 각 날개는 {pivot}의 피벗과 하나의 후보를 공유하며 두 날개 모두 {shared_digit}를 포함합니다. 어느 피벗 후보가 참이던 간에 하나의 날개에는 {shared_digit}가 포함되어야 합니다.',
  'hint.xy-wing.pivot':
    '{pivot}에는 후보 {digits}만 남아 있습니다. 둘 중 하나여야 합니다.',
  'hint.xy-wing.case':
    '{pivot}이 {pivot_digit}이면 {wing}은 {pivot_digit}일 수 없습니다. 다른 후보는 {shared_digit}뿐이므로 {wing}은 {shared_digit}이어야 합니다.',
  'hint.xy-wing.guarantee':
    '{pivot}에서 어느 후보가 참이든 날개 {wing_cells} 중 적어도 하나는 {shared_digit}입니다. 어느 쪽인지 알 필요는 없습니다.',
  'hint.xy-wing.apply':
    '{cells}은 두 날개 {wing_cells}를 모두 봅니다. 적어도 하나가 {shared_digit}이므로 이 칸들에서 {shared_digit}을 제거합니다. 이 패턴을 {strategy}이라고 합니다.',
  'hint.xy-wing.place':
    '{cell}은 두 날개 {wing_cells}를 모두 봅니다. 적어도 하나가 {shared_digit}이므로 {cell}은 {shared_digit}일 수 없습니다. 남은 후보 {digit}을 넣습니다. 이 패턴을 {strategy}이라고 합니다.',
  'hint.xyz-wing.pivot':
    '{pivot}에는 후보 {digits}만 남았습니다. 이 중 하나여야 합니다.',
  'hint.xyz-wing.case':
    '{pivot}가 {pivot_digit}이면 같은 {unit}의 {wing}에는 {pivot_digit}이 올 수 없습니다. 다른 후보는 {shared_digit}뿐이므로 {wing}는 {shared_digit}입니다.',
  'hint.xyz-wing.pivot-case':
    '{pivot}가 {shared_digit}이면 피벗 자체에 이미 {shared_digit}이 있습니다.',
  'hint.xyz-wing.guarantee':
    '{pivot}의 어느 후보가 맞더라도 {pattern_cells} 중 적어도 한 칸은 {shared_digit}입니다. 어느 칸인지는 알 필요가 없습니다.',
  'hint.xyz-wing.apply':
    '{target}는 {first_pattern_cell}와 {first_unit}, {second_pattern_cell}와 {second_unit}, {third_pattern_cell}와 {third_unit}을 공유합니다. 이 세 칸 중 적어도 하나가 {shared_digit}이므로 {target}에는 {shared_digit}이 올 수 없습니다. 후보 {shared_digit}을 제거합니다. 이 패턴을 {strategy}이라고 합니다.',
  'hint.strong-link-wing.observe':
    '{wing_cells}의 각 셀에는 {digits}만 들어갈 수 있습니다.',
  'hint.strong-link-wing.bridge':
    '{unit}에서 후보 {link_digit}가 들어갈 수 있는 곳은 {link_cells}뿐이므로, 두 셀 중 적어도 하나에는 {link_digit}가 들어갑니다.',
  'hint.strong-link-wing.force':
    '{first_link_cell}이 {link_digit}이면 {first_wing_cell}은 {link_digit}가 될 수 없으므로 {forced_digit}입니다. {second_link_cell}이 {link_digit}이면 {second_wing_cell}은 {forced_digit}입니다. 따라서 이 두 셀 중 적어도 하나는 {forced_digit}입니다.',
  'hint.strong-link-wing.apply':
    '{wing_cells} 중 적어도 하나는 {digit}입니다. {cells}은 두 셀을 모두 볼 수 있으므로 후보 {digit}를 제거합니다. 이 패턴을 {strategy}이라고 합니다.',
  'hint.strong-link-wing.place':
    '{wing_cells} 중 적어도 하나는 {removed_digit}입니다. {cell}은 두 셀을 모두 볼 수 있으므로 후보 {removed_digit}를 제거하고 {digit}를 놓습니다. 이 패턴을 {strategy}이라고 합니다.',
  'hint.relational-wing.apply':
    '{cells}에서 후보 {digit}를 제거합니다. 이 패턴은 {strategy}입니다.',
  'hint.relational-wing.place':
    '{cell}에서 후보 {removed_digit}를 제거하여 거기에 {digit}를 배치합니다. 이 패턴은 {strategy}입니다.',
  'hint.bug-plus-one.observe':
    '해결되지 않은 다른 모든 셀에는 두 개의 후보가 있고 {cell}에는 {digits}가 있습니다.',
  'hint.bug-plus-one.explain':
    '{cell}에서 {digit}를 제거하면 해결되지 않은 모든 셀 이중값이 남고 {units}에서 솔루션을 상호 교환할 수 있게 되므로 {digit}는 true여야 합니다.',
  'hint.bug-plus-one.place':
    '{cell}에 {digit}를 배치합니다. 이 고유성 예외는 {strategy}입니다.',
  'hint.unique-rectangle.observe':
    '{cells}의 셀은 직사각형을 형성하며 모두 {digits} 쌍을 포함합니다.',
  'hint.unique-rectangle.type1':
    '세 모서리에는 정확히 {digits}가 포함됩니다. {cell}도 두 숫자 중 하나를 사용한 경우 직사각형은 두 개의 상호 교환 가능한 솔루션을 허용합니다.',
  'hint.unique-rectangle.type2':
    '{cells}의 확장된 두 모서리는 추가 후보 {digit}를 공유하므로 두 모서리를 모두 보는 셀은 {digit}를 포함할 수 없습니다.',
  'hint.unique-rectangle.type3':
    '직사각형의 추가 숫자 {digits}는 {unit}의 예약된 하위 집합으로 {cells}와 결합되므로 해당 숫자는 해당 단위의 다른 곳에서 제거될 수 있습니다.',
  'hint.unique-rectangle.type4':
    '후보 {digit}는 {cells}에 {unit}의 공액 쌍으로 나타나므로 후보 {removed_digit}는 상호 교환 가능한 솔루션을 만들지 않고는 확장된 모서리를 차지할 수 없습니다.',
  'hint.unique-rectangle.apply':
    '{candidates}를 제거합니다. 이 고유성 관계는 {strategy}입니다.',
  'hint.unique-rectangle.place':
    '고유성 관계를 적용한 후 {cell}에 {digit}를 배치합니다. 이 패턴은 {strategy}입니다.',
  'hint.implication-chain.observe':
    '후보가 {digits}뿐인 {cell}에서 시작하세요.',
  'hint.implication-chain.explain':
    '{from}와 {to}는 후보 하나를 공유하고 서로 볼 수 있으므로, 그 후보가 둘 다에서 참일 수 없습니다. 연쇄가 계속됩니다.',
  'hint.implication-chain.apply':
    '두 끝점 중 하나에는 {digit}이 들어가므로 {cells}에서 후보 {digit}을 제거하세요. 이 패턴은 {strategy}입니다.',
  'hint.narration.apply': '추론을 적용하세요: ',
  'hint.narration.value-conflict': '. 입력된 값이 퍼즐과 충돌합니다.',
  'hint.narration.candidate-inconsistent':
    '. 후보 상태가 퍼즐과 일치하지 않습니다.',
  'hint.narration.clear-value': '다음 값을 지웁니다.',
  'hint.narration.clear-value-tail':
    '그러면 후보 그리드를 다음에 확인할 수 있습니다.',
  'hint.narration.reset-candidates': '후보 세트를 다음에서 재설정하세요.',
  'hint.narration.reset-candidates-tail':
    '허용되는 행, 열 및 상자 값이 허용하는 모든 숫자에 적용됩니다.',
  'hint.narration.period': '.',
  'hint.narration.only-candidate': '. 후보는 단 하나뿐입니다.',
  'hint.narration.place': ', 장소',
  'hint.narration.in-unit': '~ 안에',
  'hint.narration.no-other-digit': '다른 숫자는 들어갈 수 없기 때문에',
  'hint.narration.naked-single-tail':
    '에 배치하세요. 이를 Naked Single이라고 합니다.',
  'hint.narration.consider-digit': ', 어디를 고려하십시오',
  'hint.narration.can-appear': '나타날 수 있습니다.',
  'hint.narration.other-cells': '다른 모든 빈 셀',
  'hint.narration.because-unit': '왜냐하면',
  'hint.narration.only-cell': '그리고',
  'hint.narration.leaving-only': ', 만 남음',
  'hint.narration.cannot-contain': '포함할 수 없습니다',
  'hint.narration.still-needs': '여전히 필요하다',
  'hint.narration.hidden-single-tail': '유일한 가능한 세포, 장소입니다',
  'hint.narration.place-result': '장소',
  'hint.narration.in': '~에',
  'hint.narration.from': '~에서',
  'hint.narration.separator': ',',
  'hint.narration.remove': '후보 제거',
  'hint.narration.hidden-single-name':
    '에 배치하세요. 이를 Hidden Single이라고 합니다.',
  'hint.narration.strategy-result': '. 이것이 {strategy}의 결과입니다.',
  'welcome.title': '난이도를 선택하세요',
  'welcome.difficulty': '어려움',
  'welcome.lede': '레벨을 선택한 다음 준비가 되면 시작하세요.',
  'welcome.eyebrow': '새로운 퍼즐',
  'welcome.start': '{difficulty} 퍼즐 시작',
  'welcome.preview': '스도쿠 퍼즐 미리보기',
  'welcome.starting': '{difficulty} 퍼즐 시작 중…',
  'loading.account.eyebrow': '계정',
  'loading.initial': '퍼즐 로드 중…',
  'loading.account.title': '퍼즐을 계정에 저장하는 중…',
  'loading.home.eyebrow': '스도쿠',
  'loading.account.detail':
    '계정 저장이 확인될 때까지 진행 상황은 이 기기에 남아 있습니다.',
  'loading.home.title': '첫 페이지로 돌아가기…',
  'loading.home.detail':
    '레벨 선택을 표시하기 전에 최신 인터페이스를 확인합니다.',
  'loading.restart.eyebrow': '같은 퍼즐',
  'loading.restart.title': '퍼즐을 다시 시작하는 중…',
  'loading.new.eyebrow': '새로운 퍼즐',
  'loading.new.title': '{difficulty} 보드 준비 중…',
  'loading.restart.detail':
    '새로운 시도가 준비될 때까지 이전 보드를 잠긴 상태로 유지합니다.',
  'loading.new.detail':
    '지금 새로운 퍼즐을 만들어 보세요. 잠시 후 플레이를 시작하게 됩니다.',
  'confirmation.home.title': '이 퍼즐을 남겨주세요',
  'confirmation.home.eyebrow': '집으로 돌아가시겠어요?',
  'confirmation.home.description':
    '현재 진행 상황은 더 이상 이 장치에서 자동으로 열리지 않습니다.',
  'confirmation.restart.title': '다시 시작하세요',
  'confirmation.restart.eyebrow': '다시 시작하시겠습니까?',
  'confirmation.home.cancel': '계속 플레이하세요',
  'confirmation.home.confirm': '첫 페이지로 돌아가기',
  'confirmation.restart.description':
    '원래 주어진 퍼즐에서 이 퍼즐을 다시 플레이하거나 다른 퍼즐을 선택하세요.',
  'confirmation.restart.replay.title': '이 퍼즐을 다시 플레이해보세요',
  'confirmation.restart.replay.description':
    '이러한 조건을 유지하고 이 시도를 재설정하세요.',
  'confirmation.restart.different.title': '다른 퍼즐을 플레이해보세요',
  'common.cancel': '취소',
  'confirmation.restart.different.description': '새 보드의 레벨을 선택하세요.',
  'confirmation.restart.different.level': '다른 퍼즐의 레벨',
  'account.confirm.deleteGame.eyebrow': '저장된 게임을 삭제하시겠습니까?',
  'account.confirm.deleteGame.description':
    '이 퍼즐과 진행 상황은 내 게임에서 영구적으로 제거됩니다. 이 작업은 취소할 수 없습니다.',
  'account.confirm.deleteGame.title': '이 게임 삭제',
  'account.confirm.deleteGame.action': '게임 삭제',
  'account.confirm.deleteGame.pending': '저장된 게임 삭제 중…',
  'account.confirm.deleteAll.eyebrow': '저장된 게임을 모두 삭제하시겠습니까?',
  'account.confirm.deleteAll.description':
    '내 게임의 모든 퍼즐과 진행 상황이 영구적으로 제거됩니다. 이 작업은 취소할 수 없습니다.',
  'account.confirm.revoke.eyebrow': '계정 보안',
  'account.confirm.deleteAll.action': '모든 게임 삭제',
  'account.confirm.deleteAll.pending': '모든 게임을 삭제하는 중…',
  'account.confirm.deleteAll.title': '모든 게임 삭제',
  'account.confirm.revoke.description':
    '현재 기기를 포함한 모든 기기에서 로그아웃합니다. 계정과 저장된 게임은 그대로 유지됩니다.',
  'account.confirm.revoke.title': '모든 기기에서 로그아웃',
  'account.confirm.revoke.action': '모든 기기에서 로그아웃',
  'account.confirm.revoke.pending': '모든 기기에서 로그아웃하는 중…',
  'account.confirm.deleteAccount.title': '계정 삭제',
  'account.confirm.deleteAccount.eyebrow': '영구 조치',
  'account.confirm.deleteAccount.action': '계정 삭제',
  'account.confirm.deleteAccount.description':
    '귀하의 신원, 로그인한 모든 세션, 저장된 모든 게임이 영구적으로 제거됩니다. 공유된 퍼즐 카탈로그는 영향을 받지 않습니다.',
  'account.confirm.deleteAccount.pending': '계정 삭제 중…',
  'account.label': '계정',
  'account.confirm.typeEmail': '확인하려면 {email}을 입력하세요.',
  'account.continue.title': '다른 기기에서 계속',
  'account.continue.detail':
    '이 브라우저의 활성 게임을 자동으로 저장하려면 로그인하세요.',
  'account.signIn.short': '로그인',
  'game.elapsed': '경과 시간',
  'account.signIn': 'Google로 로그인',
  'game.title': '{difficulty} 퍼즐',
  'game.statusActions': '게임 상태 및 동작',
  'game.resume': '재개하다',
  'game.pause': '정지시키다',
  'game.mistakes': '실수 {count}',
  'status.resumed': '퍼즐이 재개되었습니다.',
  'status.restarted': '퍼즐이 다시 시작되었습니다. 신선한 시도, 같은 퍼즐.',
  'status.paused': '퍼즐이 일시중지되었습니다.',
  'status.hintClosed': '힌트가 닫혔습니다. 당신의 퍼즐은 변함이 없습니다.',
  'status.strategyApplied':
    '전략이 적용되었습니다. 한 단계만 거치면 취소할 수 있습니다.',
  'status.hintAlreadyApplied': '이 힌트는 이미 게시판에 반영되어 있습니다.',
  'status.hintRefreshed': '보드가 바뀌어 힌트를 새로 고쳤습니다.',
  'status.correctionApplied':
    '수정사항이 적용되었습니다. 한 단계만 거치면 취소할 수 있습니다.',
  'status.accountSaved': '귀하의 계정에 게임이 저장되었습니다.',
  'status.waitBeforeLeaving':
    '이 퍼즐을 떠나기 전에 대기 중인 이동을 기다리세요.',
  'status.selectEditableCell':
    '숫자를 입력하기 전에 편집 가능한 셀을 선택하세요.',
  'status.savingAccount': '로컬 게임을 계정에 저장하는 중…',
  'status.restoring': '퍼즐을 복원하는 중…',
  'status.restored': '로컬 퍼즐이 복원되었습니다.',
  'status.puzzleReady': '{difficulty} 퍼즐이 준비되었습니다.',
  'status.puzzleRestored': '{difficulty} 퍼즐이 복원되었습니다.',
  'status.solved': '완성! 멋지게 풀었어요.',
  'status.waitBeforeStarting':
    '다른 퍼즐을 시작하기 전에 대기 중인 이동을 기다리세요.',
  'status.waitBeforeHint': '힌트를 열기 전에 보류 중인 동작을 기다리세요.',
  'status.moveSaved': '이동이 저장되었습니다.',
  'status.openingSaved': '저장된 게임을 여는 중…',
  'status.savedDeleted': '저장된 게임이 삭제되었습니다.',
  'status.hintReady': '힌트가 준비되었습니다. 1단계부터 시작하세요.',
  'status.signedOut':
    '로그아웃되었습니다. 귀하의 계정 게임은 저장된 상태로 유지됩니다.',
  'status.allDeleted': '저장된 게임이 모두 삭제되었습니다.',
  'status.revoked':
    '모든 기기에서 로그아웃했습니다. 계속하려면 다시 로그인하세요.',
  'status.accountDeleted': '계정 및 저장된 게임이 삭제되었습니다.',
  'retry.saving': '다시 저장해 보세요',
  'retry.restoring': '다시 복원해 보세요',
  'retry.starting': '다시 시작해 보세요',
  'retry.connection': '연결 확인',
  'retry.progress': '진행 상황을 다시 저장해 보세요.',
  'retry.time': '시간을 절약해 다시 시도하세요',
  'retry.hint': '힌트를 다시 시도해보세요',
  'retry.move': '이동 재시도',
  'retry.opening': '다시 열어보세요',
  'retry.leaving': '다시 출발해 보세요',
  'retry.deleting': '다시 삭제해 보세요',
  'retry.signOut': '다시 로그아웃해 보세요',
  'retry.revoke': '모든 기기에서 다시 로그아웃 시도',
  'retry.deleteAccount': '계정을 다시 삭제해 보세요',
  'error.restoring': '퍼즐을 복원할 수 없습니다.',
  'error.accountSave': '로컬 게임은 안전하지만 계정에 저장할 수 없습니다.',
  'error.connection':
    '게임 서비스에 연결할 수 없습니다. 연결을 확인하고 다시 시도하세요.',
  'error.http':
    '게임 서비스에서 {status} 오류를 반환했습니다. 다시 시도해 주세요.',
  'error.unavailable':
    '일시적으로 게임 서비스를 이용할 수 없습니다. 귀하의 보드는 안전합니다. 다시 시도해 보세요.',
  'error.starting': '게임을 시작할 수 없습니다.',
  'error.signInAgain': '동작을 저장하려면 다시 로그인하세요.',
  'error.localUnavailable': '로컬 게임을 사용할 수 없습니다.',
  'error.currentUnavailable': '현재 게임을 이용할 수 없습니다.',
  'error.move': '이동을 저장할 수 없습니다.',
  'error.hint': '힌트를 준비할 수 없습니다.',
  'error.hintChanged': '힌트를 준비하는 동안 보드가 바뀌었습니다.',
  'error.timer': '최신 타이머 상태를 저장할 수 없습니다.',
  'error.time': '최근 경기 시간을 저장할 수 없습니다.',
  'error.deleteGame': '저장된 게임을 삭제할 수 없습니다.',
  'error.opening': '저장된 게임을 열 수 없습니다.',
  'error.leaving': '로컬 퍼즐을 클리어할 수 없습니다.',
  'error.signOut': '로그아웃할 수 없습니다.',
  'error.revoke': '세션을 취소할 수 없습니다.',
  'error.deleteAll': '저장된 게임을 삭제할 수 없습니다.',
  'error.invalid-json': '요청에 잘못된 JSON이 포함되어 있습니다.',
  'error.deleteAccount': '계정을 삭제할 수 없습니다.',
  'error.invalid-request': '요청이 잘못되었습니다.',
  'error.unsupported-media-type': '요청 Content-Type이 지원되지 않습니다.',
  'error.payload-too-large': '요청이 너무 큽니다.',
  'error.forbidden-origin': '이 요청 출처는 허용되지 않습니다.',
  'error.unauthorized': '승인이 필요합니다.',
  'error.session-not-found': '게임 세션을 찾을 수 없습니다.',
  'error.revision-conflict': '이 수를 적용하기 전에 보드가 바뀌었습니다.',
  'error.invalid-session': '게임 세션이 유효하지 않습니다.',
  'error.invalid-action': '이 게임 작업은 유효하지 않습니다.',
  'error.invalid-cell': '이 셀은 유효하지 않습니다.',
  'error.immutable-cell': '특정 셀은 변경할 수 없습니다.',
  'error.note-not-allowed': '이 셀에서는 후보자를 변경할 수 없습니다.',
  'error.no-undo': '실행취소할 작업이 없습니다.',
  'error.no-redo': '다시 실행할 작업이 없습니다.',
  'error.no-hint': '힌트가 없습니다.',
  'error.persistence-failed': '게임을 저장할 수 없습니다.',
  'error.stale-hint': '이 힌트를 준비한 뒤 보드가 바뀌었습니다.',
  'error.internal-error': '요청을 완료할 수 없습니다.',
  'error.account-unavailable': '계정 기능을 사용할 수 없습니다.',
  'error.account-unauthorized': '유효한 애플리케이션 세션이 필요합니다.',
  'error.csrf-failed': '로그인을 확인할 수 없습니다. 다시 로그인하세요.',
  'error.account-game-not-found': '저장된 게임을 찾을 수 없습니다.',
  'error.guest-revision-conflict':
    '이 작업이 적용되기 전에 로컬 게임이 변경되었습니다.',
  'error.guest-claim-conflict': '이 로컬 게임은 이미 계정에 저장되었습니다.',
  'account.games.title': '내 게임',
  'account.games.deleteAll': '모두 삭제',
  'error.malformedDescriptor': '설명을 표시할 수 없습니다.',
  'account.close': '계정 패널 닫기',
  'account.games.deletingAll': '모두 삭제 중…',
  'account.games.puzzle': '{difficulty} 퍼즐',
  'account.games.finished': '완성된',
  'account.games.inProgress': '진행 중',
  'account.games.empty': '아직 저장된 게임이 없습니다.',
  'account.games.open': '열려 있는',
  'account.games.opening': '열기…',
  'account.games.delete': '삭제',
  'account.games.deleting': '삭제 중…',
  'account.signOut': '로그아웃',
  'account.games.saved': '저장된 게임',
  'account.settings': '계정 설정',
  'account.revoke': '모든 기기에서 로그아웃',
  'account.delete': '계정 삭제',
  'board.label': '스도쿠 게임 보드',
  'account.signingOut': '로그아웃 중…',
  'board.cell.candidates': '비어 있음, 후보 {candidates}',
  'board.cell.empty': '비어 있는',
  'board.cell.given': '주어진 {value}',
  'board.cell.value': '{value}',
  'board.hint.premise': '힌트 증거',
  'board.hint.focus': '힌트 포커스',
  'board.hint.problem': '수정이 필요하다',
  'board.hint.eliminated': '후보자가 제거됨',
  'board.hint.conclusion': '힌트 결론',
  'board.hint.group': '그룹 {group}',
  'board.hint.extra': '불가능한 후보',
  'board.hint.chain': '체인 위치 {position}',
  'board.paused.title': '퍼즐이 일시중지되었습니다.',
  'hint.label': '힌트',
  'hint.close': '닫다',
  'hint.strategy.grade': '{grade} 전략',
  'board.paused.detail': '당신의 시간은 정지되어 있습니다.',
  'hint.applying': '힌트 적용 중…',
  'hint.refreshing': '상쾌한 힌트…',
  'hint.legend.label': '시각적 힌트 ​​범례',
  'hint.step': '{total}의 {current} 단계',
  'hint.legend.implication': '화살표: 의미',
  'hint.legend.strong': '고체: 반드시 포함해야 함',
  'hint.legend.weak': '점선: 둘 다 불가능',
  'hint.legend.groups': 'A/B: 교대 그룹',
  'hint.back': '뒤쪽에',
  'hint.next': '다음',
  'controls.label': '게임 컨트롤',
  'hint.apply': '힌트 적용',
  'hint.legend.order': '번호: 체인 순서',
  'controls.digit.note': '메모 {digit} 추가 또는 삭제',
  'controls.digit.enter': '{digit}을 입력하세요.',
  'controls.hint.preparing': '힌트 준비 중…',
  'controls.complete.eyebrow': '퍼즐 완성',
  'controls.hint.preparingDetail':
    '다음 단계가 준비되는 동안 퍼즐이 보이도록 유지합니다.',
  'controls.complete.title': '{time}에서 해결됨',
  'controls.complete.detail':
    '다른 {difficulty} 보드로 리듬을 유지하거나 다른 레벨을 선택하세요.',
  'controls.complete.replay': '이 퍼즐을 다시 플레이해보세요',
  'controls.complete.another': '다른 {difficulty} 재생',
  'controls.complete.choose': '다른 레벨을 선택하세요',
  'controls.pad': '숫자패드',
  'controls.pad.notes': '숫자 패드, 메모 모드',
  'controls.notes.on': '참고사항',
  'controls.modes': '입력 모드',
  'controls.notes.off': '메모 꺼짐',
  'controls.candidates.on': '후보자',
  'controls.candidates.off': '후보자 꺼짐',
  'controls.actions': '퍼즐 액션',
  'controls.erase': '지우다',
  'controls.undo': '끄르다',
  'controls.undoing': '타락…',
  'controls.redo': '다시 하다',
  'controls.shortcuts': '키보드 단축키',
  'controls.hint.reveal': '힌트 공개',
  'controls.redoing': '재실행 중…',
  'controls.shortcuts.move': '이동하다',
  'controls.shortcuts.arrows': '화살표 키',
  'controls.shortcuts.or': '또는',
  'controls.shortcuts.notes': '메모/후보',
  'controls.shortcuts.enter': '숫자를 입력하세요',
  'controls.shortcuts.pause': '일시중지 또는 재개',
  'controls.shortcuts.hint': '힌트 열기, 진행 또는 적용',
  'hint.target.candidate.visible': '이 강조된 후보',
  'controls.shortcuts.hintOther': '기타 힌트 컨트롤',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible': '행 {row}, 열 {column}의 후보 {value}',
  'hint.target.cell.visible': '강조 표시된 이 셀',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': '행 {row}, 열 {column}',
  'hint.target.unit.visible': '{kind}이 강조표시되었습니다.',
  'hint.target.row': '열',
  'hint.target.column': '열',
  'hint.target.box': '박스',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'chrome.home': '스도쿠 홈',
  'chrome.appearance': '모습',
  'chrome.theme.use': '{theme} 테마 사용',
  'chrome.theme.title': '{theme} 테마',
  'chrome.theme.system': '시스템',
  'chrome.theme.systemTitle': '시스템 테마({theme})',
  'chrome.theme.systemName': '체계',
  'chrome.theme.light': '빛',
  'chrome.theme.dark': '어두운',
  'chrome.footer.privacy': '은둔',
  'chrome.footer.terms': '자귀',
  'chrome.connection.connecting': '연결 중',
  'chrome.connection.unavailable': '서비스 이용 불가',
  'chrome.footer.tagline': '산만함 없이 사려 깊은 플레이.',
  'game.mistakes.label': '{count, plural, one {# 실수} other {# 실수}}',
  'chrome.footer.input': '키보드 및 터치 지원',
  'board.cell':
    '행 {row}, 열 {column}, {content}{pending, select, true {, 확인 중} other {}}{invalid, select, true {, 유효하지 않은} other {}}{hint, select, none {} other {, {hint}}}',
};
