import type { MessageCatalog } from './types';

export const de: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, one {# Fehler} other {# Fehler}}',
  'board.cell':
    'Zeile {row}, Spalte {column}, {content}{pending, select, true {, wird geprüft} other {}}{invalid, select, true {, ungültig} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Sprache',
  'common.language.auto': 'Automatisch',
  'accessibility.language.changed': 'Die Sprache wurde in {language} geändert.',
  'common.difficulty.easy': 'Einfach',
  'common.difficulty.medium': 'Mittel',
  'common.difficulty.hard': 'Schwer',
  'common.difficulty.expert': 'Experte',
  'common.difficulty.evil': 'Böse',
  'difficulty.easy.name': 'Einfach',
  'difficulty.medium.name': 'Mittel',
  'difficulty.hard.name': 'Schwer',
  'difficulty.expert.name': 'Experte',
  'difficulty.evil.name': 'Böse',
  'hint.value-correction.title': 'Korrigieren Sie diesen Wert',
  'hint.candidate-correction.title': 'Korrigieren Sie diese Kandidatenzelle',
  'hint.value-correction.summary':
    'Der Wert bei {cell} steht im Konflikt mit dem Rätsel. Löschen Sie es, bevor Sie fortfahren.',
  'hint.candidate-correction.summary':
    'Ermitteln Sie vor dem Fortfahren die Kandidaten für {cell} anhand der bereits eingetragenen Zahlen in Zeile, Spalte und Block neu.',
  'hint.strategy.summary':
    'Arbeiten Sie diese {steps} Schritte durch, um {strategy} zu verstehen und anzuwenden.',
  'hint.value-correction.observe':
    'Prüfen Sie {cell}. Der Wert widerspricht dem Spielfeld.',
  'hint.value-correction.conclude':
    'Löschen Sie den Wert bei {cell}, damit das Kandidatenraster als nächstes überprüft werden kann.',
  'hint.candidate-correction.observe':
    'Prüfen Sie {cell}. Die Kandidaten stimmen nicht mit dem Spielfeld überein.',
  'hint.candidate-correction.compare':
    'Bestimmen Sie die Kandidaten dieser Zelle anhand der bereits eingetragenen Zahlen in Zeile, Spalte und Block neu.',
  'hint.candidate-correction.conclude':
    'Setzen Sie die Kandidaten für {cell} auf alle Ziffern zurück, die in Zeile, Spalte und Block zulässig sind.',
  'hint.strategy.observe':
    'Prüfen Sie die hervorgehobenen Zellen, Kandidaten, Zeilen, Spalten und Blöcke.',
  'hint.strategy.compare':
    'Vergleichen Sie die hervorgehobenen Bedingungen, um das zwingende Ergebnis zu finden.',
  'hint.strategy.conclude':
    'Wenden Sie das hervorgehobene Ergebnis an. Dieses Muster ist {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Kandidat {digit} bildet zwei alternierende Gruppen: A bei {group_a} und B bei {group_b}.',
  'hint.coloring.alternatives':
    'Jeder durchgezogene Link bedeutet, dass genau ein Endpunkt {digit} enthält, sodass die verknüpften Kandidaten zwischen den Gruppen A und B wechseln. Ein Konflikt kann eine Gruppe ausschließen, während eine Zelle, die beide Gruppen sieht, kein {digit} enthalten kann.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Die verknüpften Kandidaten erzwingen das Ergebnis für {colored_digit}. Entfernen Sie {candidates}. Dieses Muster ist {strategy}.',
  'hint.coloring.place':
    'Die verknüpften Kandidaten für {colored_digit} erzwingen das Ergebnis. Platzieren Sie {digit} in {cell}. Dieses Muster ist {strategy}.',
  'hint.x-cycle.opening':
    'In {unit} kann {digit} nur in {cells} gehen. Eine dieser beiden Zellen muss {digit} enthalten.',
  'hint.x-cycle.assume':
    'Angenommen, {start} wäre nicht {digit}. Dann müsste {forced} {digit} sein. Das bedeutet, dass {blocked} nicht {digit} sein kann, also zwingt {unit} {digit} zu {result}.',
  'hint.x-cycle.follow':
    'Da {true_cell} {digit} ist, kann {blocked} nicht {digit} sein. {unit} zwingt daher {digit} zu {result}.',
  'hint.x-cycle.close':
    'Da {true_cell} {digit} ist, kann {blocked} nicht {digit} sein. In {unit} bleibt {result} der einzige Ort für {digit}.',
  'hint.x-cycle.place':
    'Die anfängliche Annahme, dass {assumption} nicht {digit} war, führt darauf zurück, dass {cell} {digit} ist, sodass die Annahme nicht wahr sein kann. Platzieren Sie {digit} in {cell}. Dieses Muster heißt {strategy}.',
  'hint.xy-chain.start':
    '{cell} hat nur die Kandidaten {first_digit} und {second_digit}. Entweder ist die Zelle {endpoint_digit}, oder sie muss, falls sie nicht {endpoint_digit} ist, {other_digit} sein.',
  'hint.xy-chain.assume':
    'Angenommen, {start} ist nicht {endpoint_digit}. Dann muss die Zelle {start_value} sein. Da {start} und {middle} dieselbe {first_unit} teilen, kann {middle} nicht {start_value} sein und muss {middle_value} sein. Dadurch kann {result} in {second_unit} nicht {middle_value} sein und muss {result_value} sein.',
  'hint.xy-chain.follow':
    'Da {start} {start_value} ist, kann {middle} in {first_unit} nicht {start_value} sein und muss {middle_value} sein. Da {middle} und {result} dieselbe {second_unit} teilen, kann {result} nicht {middle_value} sein und muss {result_value} sein.',
  'hint.xy-chain.reach':
    'Da {start} {start_value} ist, kann {endpoint} nicht {shared_digit} sein. Der einzige andere Kandidat ist {endpoint_digit}, also muss die Zelle {endpoint_digit} sein.',
  'hint.xy-chain.place':
    'Wenn {first_endpoint} {endpoint_digit} ist, enthält der erste Endpunkt {endpoint_digit}. Andernfalls erzwingt die Kette {endpoint_digit} im anderen Endpunkt {second_endpoint}. Daher enthält mindestens ein Endpunkt {endpoint_digit}. {cell} sieht beide Endpunkte und kann deshalb nicht {endpoint_digit} sein. Setzen Sie {digit} in {cell}. Dieses Muster heißt {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Beginne mit {cell}. In der zugehörigen Zeile, Spalte und im Block stehen bereits {excluded_digits}.',
  'hint.naked-single.only':
    'Daher ist {digit} die einzige Ziffer, die in {cell} stehen kann.',
  'hint.naked-single.apply':
    'Trage {digit} in {cell} ein. Eine Zelle mit nur einem Kandidaten ist ein {strategy}.',
  'hint.hidden-single.inspect': 'Prüfe in {unit}, wo {digit} stehen kann.',
  'hint.hidden-single.blockers':
    'Die bereits gesetzten {digit}en in {blockers} schließen {digit} aus allen anderen leeren Zellen in {unit} aus.',
  'hint.hidden-single.only': 'Nur {cell} kann noch {digit} enthalten.',
  'hint.hidden-single.apply':
    'Setze {digit} in {cell}. Hat eine Ziffer in einer Zeile, Spalte oder einem Block nur noch eine mögliche Zelle, ist das ein {strategy}.',
  'hint.naked-pair.inspect':
    'Beginne in {unit}: {cell} kann nur {first_digit} oder {second_digit} enthalten.',
  'hint.naked-pair.match':
    '{cell} hat dieselben beiden Kandidaten: {first_digit} und {second_digit}.',
  'hint.naked-pair.reserve':
    'Diese beiden Zellen müssen {digits} in beliebiger Reihenfolge enthalten. Daher kann Kandidat {digit} in keiner anderen Zelle in {unit} verbleiben.',
  'hint.naked-pair.apply':
    'Entferne {candidates}; dieser Schritt setzt keinen Wert. Dieses Muster ist ein {strategy}.',
  'hint.naked-triple.first':
    'Beginne in {unit}: {cell} kann nur {first_digit} oder {second_digit} enthalten.',
  'hint.naked-triple.second':
    'Nimm {cell} hinzu; sie kann nur {first_digit} oder {second_digit} enthalten.',
  'hint.naked-triple.third':
    'Nimm {cell} hinzu; sie kann nur {first_digit} oder {second_digit} enthalten. Die drei Zellen enthalten jetzt nur {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Diese drei Zellen müssen {reserved_digits} in beliebiger Reihenfolge enthalten. Dadurch entfallen {removed_digits} aus {cell}, sodass nur {remaining_digit} bleibt.',
  'hint.naked-triple.apply':
    'Setze {digit} in {cell}. Drei Zellen, deren Kandidaten auf dieselben drei Ziffern beschränkt sind, bilden ein {strategy}.',
  'hint.naked-quad.cell': 'In {unit} enthält {cell} nur {digits}.',
  'hint.subset-reservation.observe':
    'In {unit} enthalten {cells} nur {digits}.',
  'hint.subset-reservation.explain':
    'Diese Zellen reservieren {digits} in {unit}; daher kann keine andere Zelle dort diese Ziffern enthalten.',
  'hint.subset-reservation.apply':
    'Entferne {candidates}. Dieses Muster heißt {strategy}.',
  'hint.subset-reservation.place':
    'Setze {digit} in {cell}. Dieses Muster heißt {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-subset-confinement.explain':
    'Da {digits} auf diese Zellen in {unit} beschränkt sind, können diese Zellen keine anderen Kandidaten enthalten.',
  'hint.hidden-subset-confinement.apply':
    'Entferne {candidates} aus den beschränkten Zellen. Dieses Muster heißt {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Setze {digit} in {cell}, nachdem die anderen Kandidaten entfernt wurden. Dieses Muster heißt {strategy}.',
  'hint.hidden-pair.first':
    'In {unit} kommt Kandidat {digit} nur in {cells} vor.',
  'hint.hidden-pair.second':
    'Auch Kandidat {digit} ist auf dieselben beiden Zellen beschränkt. Zusammen müssen {digits} in beliebiger Reihenfolge {cells} belegen.',
  'hint.hidden-pair.consequence':
    'Diese beiden Zellen sind für {digits} reserviert, daher müssen ihre anderen Kandidaten entfernt werden: {candidates}.',
  'hint.hidden-pair.apply':
    'Entferne {candidates}. Dieses Muster heißt {strategy}.',
  'hint.hidden-triple.first':
    'In {unit} kommt Kandidat {digit} nur in {cells} vor.',
  'hint.hidden-triple.second':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-triple.third':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-triple.consequence':
    'Da {digits} auf diese Zellen in {unit} beschränkt sind, können diese Zellen keine anderen Kandidaten enthalten.',
  'hint.hidden-triple.apply':
    'Entferne {candidates} aus den beschränkten Zellen. Dieses Muster heißt {strategy}.',
  'hint.hidden-quad.first':
    'In {unit} kommt Kandidat {digit} nur in {cells} vor.',
  'hint.hidden-quad.second':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-quad.third':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-quad.fourth':
    'In {unit} können {digits} nur in {cells} vorkommen.',
  'hint.hidden-quad.consequence':
    'Da {digits} auf diese Zellen in {unit} beschränkt sind, können diese Zellen keine anderen Kandidaten enthalten.',
  'hint.hidden-quad.apply':
    'Entferne {candidates} aus den beschränkten Zellen. Dieses Muster heißt {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'In {source_unit} ist der Kandidat {digit} auf {intersection_unit} bei {cells} beschränkt.',
  'hint.intersection-confinement.explain':
    'Da jedes {digit} in {source_unit} in {intersection_unit} liegt, können Zellen außerhalb der Quelle, aber innerhalb der Schnittmenge es nicht enthalten.',
  'hint.intersection-confinement.apply':
    'Entfernen Sie den Kandidaten {digit} aus {cells}. Dieses Muster ist {strategy}.',
  'hint.intersection-confinement.place':
    'Platzieren Sie {digit} in {cell}, nachdem Sie den Schnittpunkt angewendet haben. Dieses Muster ist {strategy}.',
  'hint.fish-confinement.observe':
    'In {base_units} erscheint Kandidat {digit} nur in {cover_units}.',
  'hint.fish-confinement.explain':
    'Kandidat {digit} ist von {base_units} auf {cover_units} beschränkt; diese Abdeckeinheiten müssen ihn daher über die markierten Basispositionen aufnehmen.',
  'hint.swordfish.consequence':
    'Je eine {digit} aus {base_units} muss in {cover_units} stehen. Zusammen belegen diese Einträge jede der drei Spalten genau einmal, daher kann dort keine weitere {digit} verbleiben.',
  'hint.jellyfish.consequence':
    'Je eine {digit} aus {base_units} muss in {cover_units} stehen. Zusammen belegen diese Einträge jede der vier Spalten genau einmal, daher kann dort keine weitere {digit} verbleiben.',
  'hint.fish-confinement.apply':
    'Entferne Kandidat {digit} aus {cells}. Dieses Muster heißt {strategy}.',
  'hint.x-wing.first':
    'In {base_unit} kommt der Kandidat {digit} nur in {cover_units} vor.',
  'hint.x-wing.second':
    'Dasselbe gilt für {base_unit}: Der Kandidat {digit} kommt nur in {cover_units} vor. Beide Zeilen verwenden dieselben zwei Spalten.',
  'hint.x-wing.consequence':
    'Jede der {base_units} muss eine {digit} enthalten. Daher muss jede der {cover_units} ihre {digit} aus einer dieser Zeilen erhalten. Weitere {digit}en in diesen Spalten sind ausgeschlossen.',
  'hint.x-wing.apply':
    'Entferne den Kandidaten {digit} aus {cells}. Dieses Muster heißt {strategy}.',
  'hint.pivot-wing.observe':
    'Bei {pivot} verbinden die Kandidaten {pivot_digits} die Flügelzellen bei {wing_cells}.',
  'hint.pivot-wing.explain':
    'Jeder Flügel bei {wing_cells} teilt einen Kandidaten mit dem Pivot bei {pivot}, und beide Flügel enthalten {shared_digit}. Welcher Pivot-Kandidat auch immer wahr ist, ein Flügel muss {shared_digit} enthalten.',
  'hint.xy-wing.pivot':
    '{pivot} hat nur die Kandidaten {digits}. Einer davon muss gelten.',
  'hint.xy-wing.case':
    'Wenn {pivot} gleich {pivot_digit} ist, kann {wing} nicht {pivot_digit} sein. Der einzige andere Kandidat ist {shared_digit}, also muss {wing} gleich {shared_digit} sein.',
  'hint.xy-wing.guarantee':
    'Welcher Kandidat in {pivot} auch gilt: Mindestens einer der Flügel {wing_cells} muss {shared_digit} sein. Welcher es ist, müssen wir nicht wissen.',
  'hint.xy-wing.apply':
    '{cells} sehen beide Flügel {wing_cells}. Da mindestens ein Flügel {shared_digit} ist, entferne dort den Kandidaten {shared_digit}. Dieses Muster heißt {strategy}.',
  'hint.xy-wing.place':
    '{cell} sieht beide Flügel {wing_cells}. Da mindestens ein Flügel {shared_digit} ist, kann {cell} nicht {shared_digit} sein. Der einzige andere Kandidat ist {digit}; trage dort {digit} ein. Dieses Muster heißt {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} hat nur die Kandidaten {digits}. Einer davon muss gelten.',
  'hint.xyz-wing.case':
    'Wenn {pivot} {pivot_digit} ist, kann {wing} in derselben {unit} nicht {pivot_digit} sein. Der einzige andere Kandidat ist {shared_digit}, also muss {wing} {shared_digit} sein.',
  'hint.xyz-wing.pivot-case':
    'Wenn {pivot} {shared_digit} ist, enthält das Drehfeld selbst bereits {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Welcher Kandidat in {pivot} auch gilt: Mindestens eines der Felder {pattern_cells} muss {shared_digit} sein. Welches, müssen wir nicht wissen.',
  'hint.xyz-wing.apply':
    '{target} teilt {first_unit} mit {first_pattern_cell}, {second_unit} mit {second_pattern_cell} und {third_unit} mit {third_pattern_cell}. Da mindestens eines dieser drei Felder {shared_digit} ist, kann {target} nicht {shared_digit} sein. Entferne dort den Kandidaten {shared_digit}. Dieses Muster heißt {strategy}.',
  'hint.strong-link-wing.observe':
    'Die Zellen {wing_cells} können jeweils nur {digits} enthalten.',
  'hint.strong-link-wing.bridge':
    'In {unit} kann Kandidat {link_digit} nur in {link_cells} vorkommen; daher muss mindestens eine dieser Zellen {link_digit} enthalten.',
  'hint.strong-link-wing.force':
    'Wenn {first_link_cell} gleich {link_digit} ist, kann {first_wing_cell} nicht {link_digit} sein und muss {forced_digit} sein. Wenn {second_link_cell} gleich {link_digit} ist, muss {second_wing_cell} {forced_digit} sein. Daher ist mindestens eine dieser beiden Zellen {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Mindestens eine der Zellen {wing_cells} ist {digit}. Entferne Kandidat {digit} aus {cells}, da diese Zellen beide sehen. Dieses Muster heißt {strategy}.',
  'hint.strong-link-wing.place':
    'Mindestens eine der Zellen {wing_cells} ist {removed_digit}. Entferne Kandidat {removed_digit} aus {cell}, da die Zelle beide sieht, und trage dort {digit} ein. Dieses Muster heißt {strategy}.',
  'hint.relational-wing.apply':
    'Entfernen Sie den Kandidaten {digit} aus {cells}. Dieses Muster ist {strategy}.',
  'hint.relational-wing.place':
    'Entfernen Sie den Kandidaten {removed_digit} aus {cell} und platzieren Sie dort {digit}. Dieses Muster ist {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Außer {cell} haben die übrigen {count} ungelösten Felder genau zwei Kandidaten.',
  'hint.bug-plus-one.trivalue':
    '{cell} hat die drei Kandidaten {digits} und damit einen mehr als jedes andere ungelöste Feld.',
  'hint.bug-plus-one.unit-count':
    'In {unit} hat Kandidat {digit} drei mögliche Positionen, während {other_digits} jeweils zwei haben.',
  'hint.bug-plus-one.explain':
    'In {units} hat Kandidat {digit} jeweils eine mögliche Position mehr als {other_digits}. Wäre {cell} nicht {digit}, hätten alle ungelösten Felder zwei Kandidaten und das Rätsel wäre nicht mehr eindeutig lösbar. Daher muss {cell} den Wert {digit} haben.',
  'hint.bug-plus-one.place':
    'Platzieren Sie {digit} in {cell}. Diese Einzigartigkeitsausnahme ist {strategy}.',
  'hint.unique-rectangle.observe':
    'Die Zellen bei {cells} bilden ein Rechteck und enthalten alle das Paar {digits}.',
  'hint.unique-rectangle.type1':
    'Drei Ecken enthalten genau {digits}. Wenn {cell} auch eine der beiden Ziffern verwenden würde, würde das Rechteck zwei austauschbare Lösungen ermöglichen.',
  'hint.unique-rectangle.type2':
    'Die beiden erweiterten Ecken bei {cells} teilen sich den zusätzlichen Kandidaten {digit}, sodass jede Zelle, die beide Ecken sieht, {digit} nicht enthalten kann.',
  'hint.unique-rectangle.type3':
    'Die zusätzlichen Ziffern {digits} im Rechteck werden mit {cells} als reservierte Teilmenge in {unit} kombiniert, sodass diese Ziffern an anderer Stelle in dieser Einheit entfernt werden können.',
  'hint.unique-rectangle.type4':
    'Der Kandidat {digit} erscheint in {cells} als konjugiertes Paar in {unit}, sodass der Kandidat {removed_digit} keine der erweiterten Ecken besetzen kann, ohne austauschbare Lösungen zu erzeugen.',
  'hint.unique-rectangle.apply':
    'Entfernen Sie {candidates}. Diese Eindeutigkeitsbeziehung ist {strategy}.',
  'hint.unique-rectangle.place':
    'Platzieren Sie {digit} in {cell}, nachdem Sie die Eindeutigkeitsbeziehung angewendet haben. Dieses Muster ist {strategy}.',
  'hint.implication-chain.observe':
    'Beginne bei {cell}; dort stehen nur {digits} als Kandidaten.',
  'hint.implication-chain.explain':
    '{from} und {to} teilen einen Kandidaten und sehen einander. Dieser Kandidat kann daher nicht in beiden wahr sein; die Implikation setzt sich fort.',
  'hint.implication-chain.apply':
    'Einer der Endpunkte muss {digit} enthalten. Entferne daher Kandidat {digit} aus {cells}. Dieses Muster heißt {strategy}.',
  'hint.narration.apply': 'Wenden Sie den Abzug an: ',
  'hint.narration.look-at': 'Schauen Sie sich an ',
  'hint.narration.value-conflict':
    '. Der eingegebene Wert steht im Konflikt mit dem Rätsel.',
  'hint.narration.clear-value': 'Löschen Sie den Wert unter ',
  'hint.narration.clear-value-tail':
    ' Damit das Kandidatenraster als nächstes überprüft werden kann.',
  'hint.narration.candidate-inconsistent':
    '. Sein Kandidatenstatus stimmt nicht mit dem Rätsel überein.',
  'hint.narration.reset-candidates':
    'Setzen Sie den Kandidatensatz zurück auf ',
  'hint.narration.reset-candidates-tail':
    ' auf jede Ziffer, die durch die akzeptierten Zeilen-, Spalten- und Boxwerte zulässig ist.',
  'hint.narration.only-candidate': '. Es gibt nur einen Kandidaten: ',
  'hint.narration.no-other-digit': 'Weil keine andere Ziffer hineinpasst ',
  'hint.narration.place': ', Ort ',
  'hint.narration.naked-single-tail':
    ' dort. Dies wird als Naked Single bezeichnet.',
  'hint.narration.in-unit': 'In ',
  'hint.narration.consider-digit': ', überlegen Sie, wo ',
  'hint.narration.can-appear': ' erscheinen kann.',
  'hint.narration.other-cells': 'Jede zweite leere Zelle drin ',
  'hint.narration.cannot-contain': ' nicht enthalten kann ',
  'hint.narration.leaving-only': ', nur gehen ',
  'hint.narration.because-unit': 'Weil ',
  'hint.narration.still-needs': ' braucht es noch ',
  'hint.narration.only-cell': ' und ',
  'hint.narration.hidden-single-tail': ' ist die einzig mögliche Zelle, Ort ',
  'hint.narration.hidden-single-name':
    ' dort. Dies wird als Hidden Single bezeichnet.',
  'hint.narration.place-result': 'Ort ',
  'hint.narration.in': ' in ',
  'hint.narration.remove': 'Kandidaten entfernen ',
  'hint.narration.from': ' von ',
  'hint.narration.strategy-result': '. Dies ist das Ergebnis {strategy}.',
  'welcome.eyebrow': 'Neues Rätsel',
  'welcome.title': 'Wählen Sie eine Stufe',
  'welcome.lede':
    'Wählen Sie ein Level und beginnen Sie, wenn Sie bereit sind.',
  'welcome.difficulty': 'Schwierigkeit',
  'welcome.start': 'Starten Sie das {difficulty}-Puzzle',
  'welcome.starting': '{difficulty}-Rätsel wird gestartet…',
  'welcome.preview': 'Vorschau des Sudoku-Rätsels',
  'loading.initial': 'Dein Puzzle wird geladen…',
  'loading.account.eyebrow': 'Konto',
  'loading.account.title': 'Speichern Sie Ihr Puzzle in Ihrem Konto…',
  'loading.account.detail':
    'Ihr Fortschritt bleibt auf diesem Gerät, bis das Speichern im Konto bestätigt wurde.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Zurück zur Titelseite…',
  'loading.home.detail':
    'Überprüfen Sie, ob die neueste Schnittstelle verfügbar ist, bevor Sie die Ebenenauswahl anzeigen.',
  'loading.restart.eyebrow': 'Gleiches Rätsel',
  'loading.restart.title': 'Dieses Rätsel wird neu gestartet…',
  'loading.restart.detail':
    'Halten Sie das alte Brett verschlossen, bis der neue Versuch fertig ist.',
  'loading.new.eyebrow': 'Neues Rätsel',
  'loading.new.title': 'Vorbereiten Ihres {difficulty}-Boards…',
  'loading.new.detail':
    'Jetzt ein neues Puzzle erstellen. Du wirst gleich spielen.',
  'confirmation.home.eyebrow': 'Nach Hause zurückkehren?',
  'confirmation.home.title': 'Verlasse dieses Rätsel',
  'confirmation.home.description':
    'Ihr aktueller Fortschritt wird auf diesem Gerät nicht mehr automatisch geöffnet.',
  'confirmation.home.cancel': 'Spielen Sie weiter',
  'confirmation.home.confirm': 'Zurück zur Titelseite',
  'confirmation.restart.eyebrow': 'Von vorne anfangen?',
  'confirmation.restart.title': 'Fangen Sie von vorne an',
  'confirmation.restart.description':
    'Spielen Sie dieses Rätsel noch einmal aus der ursprünglichen Fassung oder wählen Sie ein anderes Rätsel.',
  'confirmation.restart.replay.title': 'Spielen Sie dieses Rätsel noch einmal',
  'confirmation.restart.replay.description':
    'Behalten Sie diese Vorgaben bei und setzen Sie diesen Versuch zurück.',
  'confirmation.restart.different.title': 'Spielen Sie ein anderes Puzzle',
  'confirmation.restart.different.description':
    'Wählen Sie ein Level für ein neues Board.',
  'confirmation.restart.different.level':
    'Level für das unterschiedliche Puzzle',
  'common.cancel': 'Abbrechen',
  'account.confirm.deleteGame.eyebrow': 'Gespeichertes Spiel löschen?',
  'account.confirm.deleteGame.title': 'Dieses Spiel löschen',
  'account.confirm.deleteGame.description':
    'Dieses Rätsel und sein Fortschritt werden dauerhaft aus „Meine Spiele“ entfernt. Dies kann nicht rückgängig gemacht werden.',
  'account.confirm.deleteGame.action': 'Spiel löschen',
  'account.confirm.deleteGame.pending': 'Gespeichertes Spiel wird gelöscht…',
  'account.confirm.deleteAll.eyebrow': 'Jedes gespeicherte Spiel löschen?',
  'account.confirm.deleteAll.title': 'Alle Spiele löschen',
  'account.confirm.deleteAll.description':
    'Jedes Rätsel und alle Fortschritte in „Meine Spiele“ werden dauerhaft entfernt. Dies kann nicht rückgängig gemacht werden.',
  'account.confirm.deleteAll.action': 'Alle Spiele löschen',
  'account.confirm.deleteAll.pending': 'Alle Spiele werden gelöscht…',
  'account.confirm.revoke.eyebrow': 'Kontosicherheit',
  'account.confirm.revoke.title': 'Überall abmelden',
  'account.confirm.revoke.description':
    'Sie werden auf allen Geräten abgemeldet, auch auf diesem. Ihr Konto und Ihre gespeicherten Spiele bleiben erhalten.',
  'account.confirm.revoke.action': 'Überall abmelden',
  'account.confirm.revoke.pending': 'Abmeldung auf allen Geräten…',
  'account.confirm.deleteAccount.eyebrow': 'Permanente Aktion',
  'account.confirm.deleteAccount.title': 'Löschen Sie Ihr Konto',
  'account.confirm.deleteAccount.description':
    'Ihre Identität, jede angemeldete Sitzung und alle gespeicherten Spiele werden dauerhaft entfernt. Der freigegebene Puzzle-Katalog ist davon nicht betroffen.',
  'account.confirm.deleteAccount.action': 'Konto löschen',
  'account.confirm.deleteAccount.pending': 'Konto wird gelöscht…',
  'account.confirm.typeEmail': 'Geben Sie zur Bestätigung {email} ein',
  'account.label': 'Konto',
  'account.continue.title': 'Fahren Sie auf anderen Geräten fort',
  'account.continue.detail':
    'Melden Sie sich an, um das aktive Spiel dieses Browsers automatisch zu speichern.',
  'account.signIn': 'Melden Sie sich mit Google an',
  'account.signIn.short': 'Melden Sie sich an',
  'game.title': '{difficulty}-Puzzle',
  'game.statusActions': 'Spielstatus und Aktionen',
  'game.elapsed': 'Verstrichene Zeit',
  'game.mistakes': 'Fehler {count}',
  'game.resume': 'Lebenslauf',
  'game.pause': 'Pause',
  'status.resumed': 'Das Rätsel wurde fortgesetzt.',
  'status.paused': 'Puzzle pausiert.',
  'status.restarted': 'Puzzle neu gestartet. Neuer Versuch, gleiches Rätsel.',
  'status.hintClosed': 'Hinweis geschlossen. Ihr Rätsel ist unverändert.',
  'status.strategyApplied':
    'Strategie angewendet. Sie können es in einem Schritt rückgängig machen.',
  'status.correctionApplied':
    'Korrektur angewendet. Sie können es in einem Schritt rückgängig machen.',
  'status.hintAlreadyApplied':
    'Dieser Hinweis spiegelt sich bereits in der Tafel wider.',
  'status.hintRefreshed':
    'Das Spielfeld hat sich geändert. Der Hinweis wurde aktualisiert.',
  'status.accountSaved': 'Das Spiel wurde in Ihrem Konto gespeichert.',
  'status.waitBeforeLeaving':
    'Warten Sie auf ausstehende Züge, bevor Sie dieses Rätsel verlassen.',
  'status.selectEditableCell':
    'Wählen Sie eine bearbeitbare Zelle aus, bevor Sie eine Zahl eingeben.',
  'status.savingAccount': 'Speichern Sie Ihr lokales Spiel in Ihrem Konto ...',
  'status.restoring': 'Dein Puzzle wird wiederhergestellt...',
  'status.restored': 'Ihr lokales Puzzle wurde wiederhergestellt.',
  'status.puzzleReady': '{difficulty} Puzzle bereit.',
  'status.puzzleRestored': '{difficulty}-Puzzle wiederhergestellt.',
  'status.waitBeforeStarting':
    'Warten Sie auf ausstehende Züge, bevor Sie mit einem weiteren Rätsel beginnen.',
  'status.solved': 'Gelöst! Gute Arbeit.',
  'status.moveSaved': 'Umzug gespeichert.',
  'status.waitBeforeHint':
    'Warten Sie auf ausstehende Züge, bevor Sie einen Hinweis öffnen.',
  'status.hintReady': 'Hinweis bereit. Beginnen Sie mit Schritt 1.',
  'status.openingSaved': 'Öffnen Sie Ihr gespeichertes Spiel ...',
  'status.savedDeleted': 'Gespeichertes Spiel gelöscht.',
  'status.allDeleted': 'Alle gespeicherten Spiele gelöscht.',
  'status.signedOut':
    'Abgemeldet. Die Spiele Ihres Kontos bleiben gespeichert.',
  'status.revoked':
    'Sie wurden auf allen Geräten abgemeldet. Melden Sie sich erneut an, um fortzufahren.',
  'status.accountDeleted': 'Konto und gespeicherte Spiele gelöscht.',
  'retry.saving': 'Versuchen Sie erneut zu speichern',
  'retry.restoring': 'Versuchen Sie es erneut',
  'retry.connection': 'Verbindung prüfen',
  'retry.starting': 'Versuchen Sie es erneut',
  'retry.move': 'Versuchen Sie es erneut',
  'retry.hint': 'Versuchen Sie es erneut',
  'retry.time': 'Versuchen Sie es erneut, um Zeit zu sparen',
  'retry.progress': 'Versuchen Sie erneut, den Fortschritt zu speichern',
  'retry.leaving': 'Versuchen Sie noch einmal zu gehen',
  'retry.opening': 'Versuchen Sie es erneut',
  'retry.deleting': 'Versuchen Sie es erneut',
  'retry.signOut': 'Versuchen Sie erneut, sich abzumelden',
  'retry.revoke': 'Abmeldung auf allen Geräten erneut versuchen',
  'retry.deleteAccount': 'Versuchen Sie erneut, das Konto zu löschen',
  'error.accountSave':
    'Ihr lokales Spiel ist sicher, aber es konnte nicht in Ihrem Konto gespeichert werden.',
  'error.restoring': 'Ihr Puzzle konnte nicht wiederhergestellt werden.',
  'error.connection':
    'Der Spieledienst war nicht erreichbar. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
  'error.http':
    'Der Spieledienst hat den Fehler {status} zurückgegeben. Bitte versuchen Sie es erneut.',
  'error.unavailable':
    'Der Spieledienst ist vorübergehend nicht verfügbar. Ihr Board ist sicher; versuchen Sie es erneut.',
  'error.starting': 'Das Spiel konnte nicht gestartet werden.',
  'error.signInAgain': 'Melden Sie sich erneut an, um Züge zu speichern.',
  'error.localUnavailable': 'Das lokale Spiel ist nicht verfügbar.',
  'error.move': 'Der Umzug konnte nicht gespeichert werden.',
  'error.currentUnavailable': 'Das aktuelle Spiel ist nicht verfügbar.',
  'error.hintChanged':
    'Das Spielfeld hat sich während der Vorbereitung des Hinweises geändert.',
  'error.hint': 'Der Hinweis konnte nicht vorbereitet werden.',
  'error.time': 'Die letzte Spielzeit konnte nicht gespeichert werden.',
  'error.timer': 'Der letzte Timer-Status konnte nicht gespeichert werden.',
  'error.leaving': 'Das lokale Rätsel konnte nicht gelöst werden.',
  'error.opening': 'Das gespeicherte Spiel konnte nicht geöffnet werden.',
  'error.deleteGame': 'Das gespeicherte Spiel konnte nicht gelöscht werden.',
  'error.deleteAll': 'Die gespeicherten Spiele konnten nicht gelöscht werden.',
  'error.signOut': 'Sie konnten nicht abgemeldet werden.',
  'error.revoke': 'Sitzungen konnten nicht widerrufen werden.',
  'error.deleteAccount': 'Das Konto konnte nicht gelöscht werden.',
  'error.invalid-request': 'Die Anfrage ist ungültig.',
  'error.invalid-json': 'Die Anfrage enthält ungültiges JSON.',
  'error.unsupported-media-type':
    'Der Inhaltstyp der Anfrage wird nicht unterstützt.',
  'error.payload-too-large': 'Die Anfrage ist zu groß.',
  'error.unauthorized': 'Eine Genehmigung ist erforderlich.',
  'error.forbidden-origin': 'Dieser Anforderungsursprung ist nicht zulässig.',
  'error.session-not-found': 'Die Spielsitzung wurde nicht gefunden.',
  'error.revision-conflict':
    'Das Spielfeld hat sich geändert, bevor dieser Zug angewendet wurde.',
  'error.invalid-session': 'Die Spielsitzung ist ungültig.',
  'error.invalid-action': 'Diese Spielaktion ist ungültig.',
  'error.invalid-cell': 'Diese Zelle ist ungültig.',
  'error.immutable-cell': 'Eine bestimmte Zelle kann nicht geändert werden.',
  'error.note-not-allowed':
    'Kandidaten können in dieser Zelle nicht geändert werden.',
  'error.no-undo': 'Es gibt keine Aktion zum Rückgängigmachen.',
  'error.no-redo': 'Es gibt keine Aktion zum Wiederherstellen.',
  'error.no-hint': 'Es ist kein Hinweis verfügbar.',
  'error.stale-hint':
    'Das Spielfeld hat sich nach der Vorbereitung dieses Hinweises geändert.',
  'error.persistence-failed': 'Das Spiel konnte nicht gespeichert werden.',
  'error.internal-error': 'Die Anfrage konnte nicht abgeschlossen werden.',
  'error.account-unavailable': 'Kontofunktionen sind nicht verfügbar.',
  'error.account-unauthorized':
    'Voraussetzung ist eine gültige Bewerbungssitzung.',
  'error.csrf-failed':
    'Diese Anmeldung konnte nicht bestätigt werden. Melden Sie sich erneut an.',
  'error.account-game-not-found':
    'Das gespeicherte Spiel wurde nicht gefunden.',
  'error.guest-revision-conflict':
    'Das lokale Spiel hat sich geändert, bevor diese Aktion angewendet wurde.',
  'error.guest-claim-conflict':
    'Dieses lokale Spiel wurde bereits in einem Konto gespeichert.',
  'error.malformedDescriptor': 'Die Erklärung konnte nicht angezeigt werden.',
  'account.close': 'Kontofenster schließen',
  'account.games.title': 'Meine Spiele',
  'account.games.deleteAll': 'Alles löschen',
  'account.games.deletingAll': 'Alles löschen…',
  'account.games.empty': 'Noch keine gespeicherten Spiele.',
  'account.games.puzzle': '{difficulty}-Puzzle',
  'account.games.finished': 'Fertig',
  'account.games.inProgress': 'In Bearbeitung',
  'account.games.saved': 'Spiel gespeichert',
  'account.games.open': 'Offen',
  'account.games.opening': 'Eröffnung…',
  'account.games.delete': 'Löschen',
  'account.games.deleting': 'Löschen…',
  'account.signOut': 'Abmelden',
  'account.signingOut': 'Abmelden…',
  'account.settings': 'Kontoeinstellungen',
  'account.revoke': 'Überall abmelden',
  'account.delete': 'Konto löschen',
  'board.label': 'Sudoku-Spielbrett',
  'board.cell.given': 'gegeben {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'leer, Kandidaten {candidates}',
  'board.cell.empty': 'leer',
  'board.hint.focus': 'Hinweis-Fokus',
  'board.hint.premise': 'Hinweis auf Beweise',
  'board.hint.eliminated': 'Kandidat ausgeschieden',
  'board.hint.conclusion': 'Hinweis Schlussfolgerung',
  'board.hint.problem': 'bedarf einer Korrektur',
  'board.hint.extra': 'unmöglicher Kandidat',
  'board.hint.group': 'Gruppe {group}',
  'board.hint.chain': 'Kettenposition {position}',
  'board.paused.title': 'Puzzle pausiert',
  'board.paused.detail': 'Deine Zeit ist angehalten.',
  'hint.label': 'Hinweis',
  'hint.close': 'Schließen',
  'hint.strategy.grade': '{grade}-Strategie',
  'hint.applying': 'Anwendungshinweis…',
  'hint.refreshing': 'Erfrischender Hinweis…',
  'hint.step': 'Schritt {current} von {total}',
  'hint.legend.label': 'Visuelle Hinweislegende',
  'hint.legend.strong': 'Fest: muss enthalten',
  'hint.legend.weak': 'Gestrichelt: nicht beides möglich',
  'hint.legend.implication': 'Pfeil: Implikation',
  'hint.legend.groups': 'A/B: abwechselnde Gruppen',
  'hint.legend.order': 'Zahlen: Kettenreihenfolge',
  'hint.back': 'Zurück',
  'hint.next': 'Als nächstes',
  'hint.apply': 'Hinweis anwenden',
  'controls.label': 'Spielsteuerung',
  'controls.digit.note': 'Notiz {digit} hinzufügen oder entfernen',
  'controls.digit.enter': 'Geben Sie {digit} ein',
  'controls.hint.preparing': 'Vorbereitungshinweis…',
  'controls.hint.preparingDetail':
    'Halten Sie das Puzzle sichtbar, während der nächste Schritt vorbereitet wird.',
  'controls.complete.eyebrow': 'Puzzle fertig',
  'controls.complete.title': 'Gelöst in {time}',
  'controls.complete.detail':
    'Halten Sie den Rhythmus mit einem anderen {difficulty}-Board aufrecht oder wählen Sie ein anderes Level.',
  'controls.complete.another': 'Spielen Sie ein weiteres {difficulty}',
  'controls.complete.replay': 'Spielen Sie dieses Rätsel noch einmal',
  'controls.complete.choose': 'Wählen Sie eine andere Ebene',
  'controls.pad': 'Nummernblock',
  'controls.pad.notes': 'Nummernblock, Notizenmodus',
  'controls.modes': 'Eingabemodi',
  'controls.notes.on': 'Hinweise zu',
  'controls.notes.off': 'Notizen aus',
  'controls.candidates.on': 'Kandidaten auf',
  'controls.candidates.off': 'Kandidaten aus',
  'controls.actions': 'Puzzle-Aktionen',
  'controls.erase': 'Löschen',
  'controls.undo': 'Rückgängig machen',
  'controls.undoing': 'Rückgängig machen…',
  'controls.redo': 'Wiederholen',
  'controls.redoing': 'Wiederholen…',
  'controls.hint.reveal': 'Geben Sie einen Hinweis preis',
  'controls.shortcuts': 'Tastaturkürzel',
  'controls.shortcuts.move': 'Bewegen',
  'controls.shortcuts.arrows': 'Pfeiltasten',
  'controls.shortcuts.enter': 'Geben Sie eine Zahl ein',
  'controls.shortcuts.notes': 'Notizen / Kandidaten',
  'controls.shortcuts.or': 'oder',
  'controls.shortcuts.pause': 'Anhalten oder fortsetzen',
  'controls.shortcuts.hint':
    'Öffnen Sie einen Hinweis, rücken Sie ihn vor oder wenden Sie ihn an',
  'controls.shortcuts.hintOther': 'Andere Hinweissteuerelemente',
  'hint.target.candidate.visible': 'dieser hervorgehobene Kandidat',
  'hint.target.candidate.accessible':
    'Kandidat {value} in Zeile {row}, Spalte {column}',
  'hint.target.cell.visible': 'diese hervorgehobene Zelle',
  'hint.target.cell.accessible': 'Zeile {row}, Spalte {column}',
  'hint.target.unit.visible': 'dadurch wurde {kind} hervorgehoben',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'Reihe',
  'hint.target.column': 'Spalte',
  'hint.target.box': 'Box',
  'chrome.home': 'Sudoku nach Hause',
  'chrome.appearance': 'Aussehen',
  'chrome.theme.use': 'Verwenden Sie das {theme}-Design',
  'chrome.theme.systemTitle': 'Systemthema ({theme})',
  'chrome.theme.title': '{theme}-Thema',
  'chrome.theme.system': 'System',
  'chrome.theme.systemName': 'System',
  'chrome.theme.light': 'Licht',
  'chrome.theme.dark': 'dunkel',
  'chrome.connection.connecting': 'Verbinden',
  'chrome.connection.unavailable': 'Dienst nicht verfügbar',
  'chrome.footer.tagline': 'Nachdenkliches Spielen ohne Ablenkungen.',
  'chrome.footer.privacy': 'Privatsphäre',
  'chrome.footer.terms': 'Bedingungen',
  'chrome.footer.input': 'Bereit für Tastatur und Touch',
};
