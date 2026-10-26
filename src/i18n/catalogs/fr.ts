import type { MessageCatalog } from './types';

export const fr: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, one {# erreur} other {# erreurs}}',
  'board.cell':
    'Ligne {row}, colonne {column}, {content}{pending, select, true {, vérification en cours} other {}}{invalid, select, true {, non valide} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Langue',
  'common.language.auto': 'Automatique',
  'accessibility.language.changed': 'La langue a été modifiée en {language}.',
  'common.difficulty.easy': 'Facile',
  'common.difficulty.medium': 'Moyen',
  'common.difficulty.hard': 'Difficile',
  'common.difficulty.expert': 'Expert',
  'common.difficulty.evil': 'Mal',
  'difficulty.easy.name': 'Facile',
  'difficulty.medium.name': 'Moyen',
  'difficulty.hard.name': 'Difficile',
  'difficulty.expert.name': 'Expert',
  'difficulty.evil.name': 'Mal',
  'hint.value-correction.title': 'Corrigez cette valeur',
  'hint.candidate-correction.title': 'Corrigez cette cellule candidate',
  'hint.value-correction.summary':
    'La valeur de {cell} est en conflit avec le puzzle. Effacez-le avant de continuer.',
  'hint.candidate-correction.summary':
    'Avant de continuer, reconstituez les candidats de {cell} à partir des chiffres déjà placés dans sa ligne, sa colonne et son bloc.',
  'hint.strategy.summary':
    'Suivez ces {steps} étapes pour comprendre et appliquer {strategy}.',
  'hint.value-correction.observe':
    'Vérifiez {cell}. Sa valeur est incompatible avec la grille.',
  'hint.value-correction.conclude':
    'Effacez la valeur {cell} afin que la grille des candidats puisse être vérifiée ensuite.',
  'hint.candidate-correction.observe':
    'Vérifiez {cell}. Ses candidats ne correspondent pas à la grille.',
  'hint.candidate-correction.compare':
    'Reprenez cette case à partir des chiffres déjà placés dans sa ligne, sa colonne et son bloc.',
  'hint.candidate-correction.conclude':
    'Remplacez les candidats de {cell} par tous les chiffres autorisés dans sa ligne, sa colonne et son bloc.',
  'hint.strategy.observe':
    'Vérifiez les cases, candidats, lignes, colonnes et blocs en surbrillance.',
  'hint.strategy.compare':
    'Comparez les contraintes en surbrillance pour trouver le résultat imposé.',
  'hint.strategy.conclude':
    'Appliquez le résultat en surbrillance. Ce motif est {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Le candidat {digit} forme deux groupes en alternance : A à {group_a} et B à {group_b}.',
  'hint.coloring.alternatives':
    'Chaque lien solide signifie qu’exactement un point de terminaison contient {digit}, de sorte que les candidats liés alternent entre les groupes A et B. Un conflit peut exclure un groupe, tandis qu’une cellule qui voit les deux groupes ne peut pas contenir {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'Les candidats liés forcent le résultat pour {colored_digit}. Supprimez {candidates}. Ce modèle est {strategy}.',
  'hint.coloring.place':
    'Les candidats liés pour {colored_digit} forcent le résultat. Placez {digit} dans {cell}. Ce modèle est {strategy}.',
  'hint.x-cycle.opening':
    'Dans {unit}, {digit} ne peut aller que dans {cells}. L’une de ces deux cellules doit contenir {digit}.',
  'hint.x-cycle.assume':
    'Supposons que {start} n’était pas {digit}. Alors {forced} devrait être {digit}. Cela signifie que {blocked} ne peut pas être {digit}, donc {unit} force {digit} dans {result}.',
  'hint.x-cycle.follow':
    'Puisque {true_cell} est {digit}, {blocked} ne peut pas être {digit}. {unit} force donc {digit} dans {result}.',
  'hint.x-cycle.close':
    'Puisque {true_cell} est {digit}, {blocked} ne peut pas être {digit}. Dans {unit}, cela laisse {result} comme seul emplacement pour {digit}.',
  'hint.x-cycle.place':
    'L’hypothèse de départ selon laquelle {assumption} n’était pas {digit} ramène à {cell} étant {digit}, donc l’hypothèse ne peut pas être vraie. Placez {digit} dans {cell}. Ce modèle s’appelle {strategy}.',
  'hint.xy-chain.start':
    '{cell} ne contient que les candidats {first_digit} et {second_digit}. Soit cette case vaut {endpoint_digit}, soit, si elle ne vaut pas {endpoint_digit}, elle doit valoir {other_digit}.',
  'hint.xy-chain.assume':
    'Supposons que {start} ne vaille pas {endpoint_digit}. Elle doit alors valoir {start_value}. Comme {start} et {middle} partagent {first_unit}, {middle} ne peut pas valoir {start_value} et doit valoir {middle_value}. Ainsi, {result} ne peut pas valoir {middle_value} dans {second_unit} et doit valoir {result_value}.',
  'hint.xy-chain.follow':
    'Comme {start} vaut {start_value}, {middle} dans {first_unit} ne peut pas valoir {start_value} et doit valoir {middle_value}. Comme {middle} et {result} partagent {second_unit}, {result} ne peut pas valoir {middle_value} et doit valoir {result_value}.',
  'hint.xy-chain.reach':
    'Comme {start} vaut {start_value}, {endpoint} ne peut pas valoir {shared_digit}. Son seul autre candidat est {endpoint_digit}, elle doit donc valoir {endpoint_digit}.',
  'hint.xy-chain.place':
    'Si {first_endpoint} vaut {endpoint_digit}, la première extrémité contient {endpoint_digit}. Sinon, la chaîne force {endpoint_digit} dans l’autre extrémité, {second_endpoint}. Au moins une extrémité contient donc {endpoint_digit}. {cell} voit les deux extrémités et ne peut pas valoir {endpoint_digit}. Placez {digit} dans {cell}. Ce motif s’appelle {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Commencez par {cell}. Sa ligne, sa colonne et son bloc contiennent déjà {excluded_digits}.',
  'hint.naked-single.only':
    'Ainsi, {digit} est le seul chiffre possible dans {cell}.',
  'hint.naked-single.apply':
    'Placez {digit} dans {cell}. Une case qui ne possède plus qu’un candidat est un {strategy}.',
  'hint.hidden-single.inspect': 'Dans {unit}, cherchez où placer {digit}.',
  'hint.hidden-single.blockers':
    'Les {digit} déjà placés en {blockers} excluent {digit} de toutes les autres cases vides de {unit}.',
  'hint.hidden-single.only': 'Seule {cell} peut encore contenir {digit}.',
  'hint.hidden-single.apply':
    'Placez {digit} en {cell}. Lorsqu’un chiffre n’a plus qu’une seule case possible dans une ligne, une colonne ou un bloc, c’est un {strategy}.',
  'hint.naked-pair.inspect':
    'Commencez dans {unit} : {cell} ne peut contenir que {first_digit} ou {second_digit}.',
  'hint.naked-pair.match':
    '{cell} possède les deux mêmes candidats : {first_digit} et {second_digit}.',
  'hint.naked-pair.reserve':
    'Ces deux cases doivent contenir {digits}, dans un ordre ou dans l’autre ; le candidat {digit} ne peut donc rester dans aucune autre case de {unit}.',
  'hint.naked-pair.apply':
    'Supprimez {candidates} ; cette étape ne place aucune valeur. Ce motif est un {strategy}.',
  'hint.naked-triple.first':
    'Commencez dans {unit} : {cell} ne peut contenir que {first_digit} ou {second_digit}.',
  'hint.naked-triple.second':
    'Ajoutez {cell} ; elle ne peut contenir que {first_digit} ou {second_digit}.',
  'hint.naked-triple.third':
    'Ajoutez {cell} ; elle ne peut contenir que {first_digit} ou {second_digit}. Les trois cases ne contiennent maintenant que {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Ces trois cases doivent contenir {reserved_digits}, dans un ordre quelconque. On retire donc {removed_digits} de {cell}, où il ne reste que {remaining_digit}.',
  'hint.naked-triple.apply':
    'Placez {digit} dans {cell}. Trois cases dont les candidats sont limités aux trois mêmes chiffres forment un {strategy}.',
  'hint.subset-reservation.observe':
    'Dans {unit}, {cells} ne contiennent que {digits}.',
  'hint.subset-reservation.explain':
    'Ces cases réservent {digits} dans {unit} ; aucune autre case de cette unité ne peut donc contenir ces chiffres.',
  'hint.subset-reservation.apply':
    'Supprimez {candidates}. Cette figure est {strategy}.',
  'hint.subset-reservation.place':
    'Placez {digit} dans {cell}. Ce motif s’appelle {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'Dans {unit}, {digits} ne peuvent apparaître que dans {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Puisque {digits} sont limités à ces cases de {unit}, ces cases ne peuvent contenir aucun autre candidat.',
  'hint.hidden-subset-confinement.apply':
    'Supprimez {candidates} des cases concernées. Cette figure est {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Placez {digit} dans {cell} après avoir supprimé les autres candidats. Cette figure est {strategy}.',
  'hint.hidden-pair.first':
    'Dans {unit}, le candidat {digit} n’apparaît que dans {cells}.',
  'hint.hidden-pair.second':
    'Le candidat {digit} est lui aussi limité aux mêmes deux cases. Ensemble, {digits} doivent occuper {cells}, dans un ordre ou dans l’autre.',
  'hint.hidden-pair.consequence':
    'Ces deux cases sont réservées à {digits} ; leurs autres candidats doivent donc être supprimés : {candidates}.',
  'hint.hidden-pair.apply':
    'Supprimez {candidates}. Cette figure s’appelle {strategy}.',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'Dans {source_unit}, le candidat {digit} est confiné à {intersection_unit} à {cells}.',
  'hint.intersection-confinement.explain':
    'Étant donné que chaque {digit} de {source_unit} se trouve dans {intersection_unit}, les cellules situées en dehors de la source mais à l’intérieur de l’intersection ne peuvent pas le contenir.',
  'hint.intersection-confinement.apply':
    'Supprimez le candidat {digit} de {cells}. Ce modèle est {strategy}.',
  'hint.intersection-confinement.place':
    'Placez {digit} dans {cell} après avoir appliqué l’intersection. Ce modèle est {strategy}.',
  'hint.fish-confinement.observe':
    'Dans {base_units}, le candidat {digit} apparaît uniquement dans {cover_units}.',
  'hint.fish-confinement.explain':
    'Le candidat {digit} est confiné de {base_units} à {cover_units} ; ces unités de couverture doivent donc le recevoir via les positions de base surlignées.',
  'hint.fish-confinement.apply':
    'Supprimez le candidat {digit} de {cells}. Cette figure est {strategy}.',
  'hint.pivot-wing.observe':
    'À {pivot}, les candidats {pivot_digits} connectent les cellules de l’aile à {wing_cells}.',
  'hint.pivot-wing.explain':
    'Chaque aile de {wing_cells} partage un candidat avec le pivot de {pivot}, et les deux ailes contiennent {shared_digit}. Quel que soit le candidat pivot qui est vrai, une aile doit contenir {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} ne contient plus que les candidats {digits}. Il doit être l’un des deux.',
  'hint.xy-wing.case':
    'Si {pivot} vaut {pivot_digit}, alors {wing} ne peut pas valoir {pivot_digit}. Son seul autre candidat est {shared_digit}, donc {wing} vaut nécessairement {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Quel que soit le candidat vrai dans {pivot}, au moins une aile parmi {wing_cells} doit contenir {shared_digit}. Il n’est pas nécessaire de savoir laquelle.',
  'hint.xy-wing.apply':
    '{cells} voient les deux ailes {wing_cells}. Puisqu’au moins une aile contient {shared_digit}, supprimez ce candidat de ces cases. Cette figure s’appelle {strategy}.',
  'hint.xy-wing.place':
    '{cell} voit les deux ailes {wing_cells}. Puisqu’au moins une aile contient {shared_digit}, {cell} ne peut pas contenir {shared_digit}. Son seul autre candidat est {digit} : placez-y {digit}. Cette figure s’appelle {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} ne contient que les candidats {digits}. Il doit être l’un d’eux.',
  'hint.xyz-wing.case':
    'Si {pivot} vaut {pivot_digit}, alors {wing}, dans la même {unit}, ne peut pas valoir {pivot_digit}. Son seul autre candidat est {shared_digit} : {wing} doit donc valoir {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Si {pivot} vaut {shared_digit}, le pivot contient déjà {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Quel que soit le candidat vrai dans {pivot}, au moins une des cases {pattern_cells} doit valoir {shared_digit}. Il n’est pas nécessaire de savoir laquelle.',
  'hint.xyz-wing.apply':
    '{target} partage {first_unit} avec {first_pattern_cell}, {second_unit} avec {second_pattern_cell} et {third_unit} avec {third_pattern_cell}. Comme au moins une de ces trois cases vaut {shared_digit}, {target} ne peut pas valoir {shared_digit}. Retirez ce candidat. Ce motif s’appelle {strategy}.',
  'hint.strong-link-wing.observe':
    'Les cellules {wing_cells} ne peuvent chacune contenir que {digits}.',
  'hint.strong-link-wing.bridge':
    'Dans {unit}, le candidat {link_digit} ne peut apparaître que dans {link_cells} ; au moins une de ces cellules doit donc contenir {link_digit}.',
  'hint.strong-link-wing.force':
    'Si {first_link_cell} vaut {link_digit}, alors {first_wing_cell} ne peut pas valoir {link_digit} et doit valoir {forced_digit}. Si {second_link_cell} vaut {link_digit}, alors {second_wing_cell} doit valoir {forced_digit}. Au moins une de ces deux cellules vaut donc {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Au moins une des cellules {wing_cells} vaut {digit}. Retirez le candidat {digit} de {cells}, car ces cellules voient les deux. Cette figure s’appelle {strategy}.',
  'hint.strong-link-wing.place':
    'Au moins une des cellules {wing_cells} vaut {removed_digit}. Retirez le candidat {removed_digit} de {cell}, car elle voit les deux, puis placez-y {digit}. Cette figure s’appelle {strategy}.',
  'hint.relational-wing.apply':
    'Supprimez le candidat {digit} de {cells}. Ce modèle est {strategy}.',
  'hint.relational-wing.place':
    'Supprimez le candidat {removed_digit} de {cell}, placez-y donc {digit}. Ce modèle est {strategy}.',
  'hint.bug-plus-one.observe':
    'Une cellule non résolue sur deux comporte deux candidats, tandis que {cell} contient {digits}.',
  'hint.bug-plus-one.explain':
    'Supprimer {digit} de {cell} laisserait chaque bivaleur de cellule non résolue et rendrait la solution interchangeable dans {units}, donc {digit} doit être vrai.',
  'hint.bug-plus-one.place':
    'Placez {digit} dans {cell}. Cette exception d’unicité est {strategy}.',
  'hint.unique-rectangle.observe':
    'Les cellules {cells} forment un rectangle et contiennent toutes la paire {digits}.',
  'hint.unique-rectangle.type1':
    'Trois coins contiennent exactement {digits}. Si {cell} utilisait également l’un ou l’autre chiffre, le rectangle permettrait deux solutions interchangeables.',
  'hint.unique-rectangle.type2':
    'Les deux coins développés au niveau de {cells} partagent un candidat supplémentaire {digit}, de sorte que toute cellule qui voit les deux coins ne peut pas contenir {digit}.',
  'hint.unique-rectangle.type3':
    'Les chiffres supplémentaires {digits} dans le rectangle se combinent avec {cells} en tant que sous-ensemble réservé dans {unit}, de sorte que ces chiffres peuvent être supprimés ailleurs dans cette unité.',
  'hint.unique-rectangle.type4':
    'Le candidat {digit} apparaît dans {cells} sous forme de paire conjuguée dans {unit}, le candidat {removed_digit} ne peut donc occuper aucun des coins développés sans créer de solutions interchangeables.',
  'hint.unique-rectangle.apply':
    'Supprimez {candidates}. Cette relation d’unicité est {strategy}.',
  'hint.unique-rectangle.place':
    'Placez {digit} dans {cell} après avoir appliqué la relation d’unicité. Ce modèle est {strategy}.',
  'hint.implication-chain.observe':
    'Commencez par {cell}, qui ne contient que les candidats {digits}.',
  'hint.implication-chain.explain':
    '{from} et {to} partagent un candidat et se voient ; ce candidat ne peut donc pas être vrai dans les deux, et l’implication continue.',
  'hint.implication-chain.apply':
    'Une extrémité doit contenir {digit} ; supprimez donc le candidat {digit} de {cells}. Cette figure est {strategy}.',
  'hint.narration.apply': 'Appliquer la déduction : ',
  'hint.narration.look-at': 'Regardez ',
  'hint.narration.value-conflict':
    '. Sa valeur saisie est en conflit avec le puzzle.',
  'hint.narration.clear-value': 'Effacez la valeur à ',
  'hint.narration.clear-value-tail':
    ' afin que la grille des candidats puisse être vérifiée ensuite.',
  'hint.narration.candidate-inconsistent':
    '. Son état candidat est incompatible avec le puzzle.',
  'hint.narration.reset-candidates':
    'Réinitialisez l’ensemble des candidats à ',
  'hint.narration.reset-candidates-tail':
    ' à chaque chiffre autorisé par les valeurs de ligne, de colonne et de boîte acceptées.',
  'hint.narration.only-candidate': '. Il n’y a qu’un seul candidat : ',
  'hint.narration.no-other-digit':
    'Parce qu’aucun autre chiffre ne peut entrer ',
  'hint.narration.place': ', lieu ',
  'hint.narration.naked-single-tail':
    ' là. C’est ce qu’on appelle un Single Nu.',
  'hint.narration.in-unit': 'Dans ',
  'hint.narration.consider-digit': ', considérez où ',
  'hint.narration.can-appear': ' peut apparaître.',
  'hint.narration.other-cells': 'Une cellule vide sur deux dans ',
  'hint.narration.cannot-contain': ' ne peut pas contenir ',
  'hint.narration.leaving-only': ', ne laissant que ',
  'hint.narration.because-unit': 'Parce que ',
  'hint.narration.still-needs': ' a encore besoin ',
  'hint.narration.only-cell': ' et ',
  'hint.narration.hidden-single-tail':
    ' est la seule cellule, endroit possible ',
  'hint.narration.hidden-single-name':
    ' là. C’est ce qu’on appelle un Hidden Single.',
  'hint.narration.place-result': 'endroit ',
  'hint.narration.in': ' dans ',
  'hint.narration.remove': 'supprimer un candidat ',
  'hint.narration.from': ' de ',
  'hint.narration.strategy-result': '. Il s’agit du résultat {strategy}.',
  'welcome.eyebrow': 'Nouveau casse-tête',
  'welcome.title': 'Choisissez votre difficulté',
  'welcome.lede':
    'Choisissez un niveau, puis commencez lorsque vous êtes prêt.',
  'welcome.difficulty': 'Difficulté',
  'welcome.start': 'Commencer le puzzle {difficulty}',
  'welcome.starting': 'Démarrage du puzzle {difficulty}…',
  'welcome.preview': 'Aperçu du puzzle Sudoku',
  'loading.initial': 'Chargement de votre puzzle…',
  'loading.account.eyebrow': 'Compte',
  'loading.account.title': 'Enregistrez votre puzzle sur votre compte…',
  'loading.account.detail':
    'Votre progression reste sur cet appareil jusqu’à la confirmation de l’enregistrement dans votre compte.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Revenons à la première page…',
  'loading.home.detail':
    'Vérification de la dernière interface avant d’afficher la sélection de niveau.',
  'loading.restart.eyebrow': 'Même énigme',
  'loading.restart.title': 'Recommencer ce puzzle…',
  'loading.restart.detail':
    'Garder l’ancienne carte verrouillée jusqu’à ce que la nouvelle tentative soit prête.',
  'loading.new.eyebrow': 'Nouveau casse-tête',
  'loading.new.title': 'Préparation de votre carte {difficulty}…',
  'loading.new.detail':
    'Créer un nouveau puzzle maintenant. Vous jouerez dans un instant.',
  'confirmation.home.eyebrow': 'Rentrer à la maison ?',
  'confirmation.home.title': 'Laisse ce puzzle',
  'confirmation.home.description':
    'Votre progression actuelle ne s’ouvrira plus automatiquement sur cet appareil.',
  'confirmation.home.cancel': 'Continue à jouer',
  'confirmation.home.confirm': 'Retour à la première page',
  'confirmation.restart.eyebrow': 'Recommencer ?',
  'confirmation.restart.title': 'Recommencer',
  'confirmation.restart.description':
    'Rejouez ce puzzle à partir de ses données originales ou choisissez un puzzle différent.',
  'confirmation.restart.replay.title': 'Rejouez cette énigme',
  'confirmation.restart.replay.description':
    'Conservez ces données et réinitialisez cette tentative.',
  'confirmation.restart.different.title': 'Jouez à un puzzle différent',
  'confirmation.restart.different.description':
    'Choisissez un niveau pour un nouveau tableau.',
  'confirmation.restart.different.level': 'Niveau pour les différents puzzles',
  'common.cancel': 'Annuler',
  'account.confirm.deleteGame.eyebrow': 'Supprimer la partie sauvegardée ?',
  'account.confirm.deleteGame.title': 'Supprimer ce jeu',
  'account.confirm.deleteGame.description':
    'Ce puzzle et sa progression seront définitivement supprimés de Mes jeux. Cela ne peut pas être annulé.',
  'account.confirm.deleteGame.action': 'Supprimer le jeu',
  'account.confirm.deleteGame.pending': 'Suppression de la partie sauvegardée…',
  'account.confirm.deleteAll.eyebrow':
    'Supprimer toutes les parties sauvegardées ?',
  'account.confirm.deleteAll.title': 'Supprimer tous les jeux',
  'account.confirm.deleteAll.description':
    'Chaque puzzle et toute progression dans Mes jeux seront définitivement supprimés. Cela ne peut pas être annulé.',
  'account.confirm.deleteAll.action': 'Supprimer tous les jeux',
  'account.confirm.deleteAll.pending': 'Suppression de tous les jeux…',
  'account.confirm.revoke.eyebrow': 'Sécurité du compte',
  'account.confirm.revoke.title': 'Se déconnecter de tous les appareils',
  'account.confirm.revoke.description':
    'Vous serez déconnecté de tous les appareils, y compris celui-ci. Votre compte et vos parties enregistrées seront conservés.',
  'account.confirm.revoke.action': 'Se déconnecter de tous les appareils',
  'account.confirm.revoke.pending': 'Déconnexion de tous les appareils…',
  'account.confirm.deleteAccount.eyebrow': 'Action permanente',
  'account.confirm.deleteAccount.title': 'Supprimez votre compte',
  'account.confirm.deleteAccount.description':
    'Votre identité, chaque session connectée et toutes les parties sauvegardées seront définitivement supprimées. Le catalogue de puzzles partagé n’est pas affecté.',
  'account.confirm.deleteAccount.action': 'Supprimer le compte',
  'account.confirm.deleteAccount.pending': 'Suppression du compte…',
  'account.confirm.typeEmail': 'Tapez {email} pour confirmer',
  'account.label': 'Compte',
  'account.continue.title': 'Continuer sur d’autres appareils',
  'account.continue.detail':
    'Connectez-vous pour enregistrer automatiquement le jeu actif de ce navigateur.',
  'account.signIn': 'Connectez-vous avec Google',
  'account.signIn.short': 'Connectez-vous',
  'game.title': 'Casse-tête {difficulty}',
  'game.statusActions': 'Statut du jeu et actions',
  'game.elapsed': 'Temps écoulé',
  'game.mistakes': 'Erreurs {count}',
  'game.resume': 'CV',
  'game.pause': 'Pause',
  'status.resumed': 'L’énigme reprend.',
  'status.paused': 'Le puzzle s’est arrêté.',
  'status.restarted':
    'Le puzzle a redémarré. Nouvelle tentative, même casse-tête.',
  'status.hintClosed': 'Indice fermé. Votre puzzle est inchangé.',
  'status.strategyApplied':
    'Stratégie appliquée. Vous pouvez l’annuler en une seule étape.',
  'status.correctionApplied':
    'Correction appliquée. Vous pouvez l’annuler en une seule étape.',
  'status.hintAlreadyApplied': 'Cet indice est déjà reflété dans le tableau.',
  'status.hintRefreshed': 'La grille a changé : l’indice a été actualisé.',
  'status.accountSaved': 'Jeu enregistré sur votre compte.',
  'status.waitBeforeLeaving':
    'Attendez les mouvements en attente avant de quitter ce puzzle.',
  'status.selectEditableCell':
    'Sélectionnez une cellule modifiable avant de saisir un nombre.',
  'status.savingAccount': 'Sauvegarder votre jeu local sur votre compte…',
  'status.restoring': 'Restaurer votre puzzle…',
  'status.restored': 'Votre puzzle local a été restauré.',
  'status.puzzleReady': 'Le puzzle {difficulty} est prêt.',
  'status.puzzleRestored': 'Casse-tête {difficulty} restauré.',
  'status.waitBeforeStarting':
    'Attendez les mouvements en attente avant de commencer un autre puzzle.',
  'status.solved': 'Terminé ! Beau travail.',
  'status.moveSaved': 'Déplacement enregistré.',
  'status.waitBeforeHint':
    'Attendez les mouvements en attente avant d’ouvrir un indice.',
  'status.hintReady': 'Indice prêt. Commencez par l’étape 1.',
  'status.openingSaved': 'Ouverture de votre partie sauvegardée…',
  'status.savedDeleted': 'Partie sauvegardée supprimée.',
  'status.allDeleted': 'Toutes les parties sauvegardées supprimées.',
  'status.signedOut':
    'Déconnecté. Les jeux de votre compte restent enregistrés.',
  'status.revoked':
    'Vous avez été déconnecté de tous les appareils. Reconnectez-vous pour continuer.',
  'status.accountDeleted': 'Compte et parties sauvegardées supprimés.',
  'retry.saving': 'Essayez à nouveau d’enregistrer',
  'retry.restoring': 'Essayez à nouveau de restaurer',
  'retry.connection': 'Vérifier la connexion',
  'retry.starting': 'Essayez de recommencer',
  'retry.move': 'Réessayer le déplacement',
  'retry.hint': 'Réessayez l’indice',
  'retry.time': 'Réessayez pour gagner du temps',
  'retry.progress': 'Réessayez d’enregistrer la progression',
  'retry.leaving': 'Essayez de repartir',
  'retry.opening': 'Essayez d’ouvrir à nouveau',
  'retry.deleting': 'Essayez à nouveau de supprimer',
  'retry.signOut': 'Essayez de vous déconnecter à nouveau',
  'retry.revoke': 'Réessayer de se déconnecter de tous les appareils',
  'retry.deleteAccount': 'Essayez à nouveau de supprimer le compte',
  'error.accountSave':
    'Votre jeu local est sécurisé, mais il n’a pas pu être enregistré sur votre compte.',
  'error.restoring': 'Votre puzzle n’a pas pu être restauré.',
  'error.connection':
    'Le service de jeu n’a pas pu être atteint. Vérifiez votre connexion et réessayez.',
  'error.http':
    'Le service de jeu a renvoyé l’erreur {status}. Veuillez réessayer.',
  'error.unavailable':
    'Le service de jeu est temporairement indisponible. Votre planche est en sécurité ; essayer à nouveau.',
  'error.starting': 'Le jeu n’a pas pu démarrer.',
  'error.signInAgain':
    'Connectez-vous à nouveau pour enregistrer les mouvements.',
  'error.localUnavailable': 'Le jeu local n’est pas disponible.',
  'error.move': 'Le déplacement n’a pas pu être enregistré.',
  'error.currentUnavailable': 'Le jeu actuel n’est pas disponible.',
  'error.hintChanged': 'La grille a changé pendant la préparation de l’indice.',
  'error.hint': 'L’indice n’a pas pu être préparé.',
  'error.time': 'La dernière heure de jeu n’a pas pu être enregistrée.',
  'error.timer': 'Le dernier état du minuteur n’a pas pu être enregistré.',
  'error.leaving': 'L’énigme locale n’a pas pu être résolue.',
  'error.opening': 'Cette partie sauvegardée n’a pas pu être ouverte.',
  'error.deleteGame': 'La partie sauvegardée n’a pas pu être supprimée.',
  'error.deleteAll': 'Les parties sauvegardées n’ont pas pu être supprimées.',
  'error.signOut': 'Vous n’avez pas pu être déconnecté.',
  'error.revoke': 'Les séances ne pouvaient pas être révoquées.',
  'error.deleteAccount': 'Le compte n’a pas pu être supprimé.',
  'error.invalid-request': 'La demande n’est pas valide.',
  'error.invalid-json': 'La requête contient du JSON non valide.',
  'error.unsupported-media-type':
    'La requête Content-Type n’est pas prise en charge.',
  'error.payload-too-large': 'La demande est trop volumineuse.',
  'error.unauthorized': 'Une autorisation est requise.',
  'error.forbidden-origin': 'Cette origine de demande n’est pas autorisée.',
  'error.session-not-found': 'La session de jeu n’a pas été trouvée.',
  'error.revision-conflict':
    'La grille a changé avant l’application de ce coup.',
  'error.invalid-session': 'La session de jeu n’est pas valide.',
  'error.invalid-action': 'Cette action de jeu n’est pas valide.',
  'error.invalid-cell': 'Cette cellule n’est pas valide.',
  'error.immutable-cell': 'Une cellule donnée ne peut pas être modifiée.',
  'error.note-not-allowed':
    'Les candidats ne peuvent pas être modifiés dans cette cellule.',
  'error.no-undo': 'Il n’y a aucune action à annuler.',
  'error.no-redo': 'Il n’y a aucune action à refaire.',
  'error.no-hint': 'Aucun indice n’est disponible.',
  'error.stale-hint': 'La grille a changé après la préparation de cet indice.',
  'error.persistence-failed': 'Le jeu n’a pas pu être sauvegardé.',
  'error.internal-error': 'La demande n’a pas pu être complétée.',
  'error.account-unavailable':
    'Les fonctionnalités du compte ne sont pas disponibles.',
  'error.account-unauthorized':
    'Une session de candidature valide est requise.',
  'error.csrf-failed':
    'Cette connexion n’a pas pu être vérifiée. Reconnectez-vous.',
  'error.account-game-not-found': 'La partie sauvegardée n’a pas été trouvée.',
  'error.guest-revision-conflict':
    'Le jeu local a changé avant que cette action ne soit appliquée.',
  'error.guest-claim-conflict':
    'Ce jeu local a déjà été enregistré sur un compte.',
  'error.malformedDescriptor': 'L’explication n’a pas pu être affichée.',
  'account.close': 'Fermer le panneau du compte',
  'account.games.title': 'Mes jeux',
  'account.games.deleteAll': 'Supprimer tout',
  'account.games.deletingAll': 'Tout supprimer…',
  'account.games.empty': 'Aucune partie sauvegardée pour l’instant.',
  'account.games.puzzle': 'Casse-tête {difficulty}',
  'account.games.finished': 'Terminé',
  'account.games.inProgress': 'En cours',
  'account.games.saved': 'Partie sauvegardée',
  'account.games.open': 'Ouvert',
  'account.games.opening': 'Ouverture…',
  'account.games.delete': 'Supprimer',
  'account.games.deleting': 'Suppression…',
  'account.signOut': 'Se déconnecter',
  'account.signingOut': 'Déconnexion…',
  'account.settings': 'Paramètres du compte',
  'account.revoke': 'Se déconnecter de tous les appareils',
  'account.delete': 'Supprimer le compte',
  'board.label': 'Plateau de jeu de Sudoku',
  'board.cell.given': 'étant donné {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'vide, candidats {candidates}',
  'board.cell.empty': 'vide',
  'board.hint.focus': 'indice de mise au point',
  'board.hint.premise': 'indice de preuve',
  'board.hint.eliminated': 'candidat éliminé',
  'board.hint.conclusion': 'indice de conclusion',
  'board.hint.problem': 'a besoin d’une correction',
  'board.hint.extra': 'candidat impossible',
  'board.hint.group': 'groupe {group}',
  'board.hint.chain': 'position de la chaîne {position}',
  'board.paused.title': 'Puzzle en pause',
  'board.paused.detail': 'Votre temps est arrêté.',
  'hint.label': 'Indice',
  'hint.close': 'Fermer',
  'hint.strategy.grade': 'Stratégie {grade}',
  'hint.applying': 'Application de l’indice…',
  'hint.refreshing': 'Astuce rafraîchissante…',
  'hint.step': 'Étape {current} de {total}',
  'hint.legend.label': 'Légende des indices visuels',
  'hint.legend.strong': 'Solide : doit contenir',
  'hint.legend.weak': 'En pointillé : les deux ne peuvent pas',
  'hint.legend.implication': 'Flèche : implication',
  'hint.legend.groups': 'A/B : groupes en alternance',
  'hint.legend.order': 'Numéros : ordre en chaîne',
  'hint.back': 'Retour',
  'hint.next': 'Suivant',
  'hint.apply': 'Appliquer l’indice',
  'controls.label': 'Commandes de jeu',
  'controls.digit.note': 'Ajouter ou supprimer une note {digit}',
  'controls.digit.enter': 'Saisissez {digit}.',
  'controls.hint.preparing': 'Indice de préparation…',
  'controls.hint.preparingDetail':
    'Garder le puzzle visible pendant la préparation de la prochaine étape.',
  'controls.complete.eyebrow': 'Puzzle terminé',
  'controls.complete.title': 'Résolu dans {time}',
  'controls.complete.detail':
    'Gardez le rythme avec une autre carte {difficulty}, ou choisissez un niveau différent.',
  'controls.complete.another': 'Jouez un autre {difficulty}',
  'controls.complete.replay': 'Rejouez cette énigme',
  'controls.complete.choose': 'Choisissez un autre niveau',
  'controls.pad': 'Pavé numérique',
  'controls.pad.notes': 'Pavé numérique, mode notes',
  'controls.modes': 'Modes de saisie',
  'controls.notes.on': 'Remarques sur',
  'controls.notes.off': 'Notes désactivées',
  'controls.candidates.on': 'Candidats sur',
  'controls.candidates.off': 'Les candidats sont partis',
  'controls.actions': 'Actions de puzzle',
  'controls.erase': 'Effacer',
  'controls.undo': 'Annuler',
  'controls.undoing': 'Annuler…',
  'controls.redo': 'Refaire',
  'controls.redoing': 'Refaire…',
  'controls.hint.reveal': 'Révéler un indice',
  'controls.shortcuts': 'Raccourcis clavier',
  'controls.shortcuts.move': 'Déplacer',
  'controls.shortcuts.arrows': 'Touches fléchées',
  'controls.shortcuts.enter': 'Entrez un numéro',
  'controls.shortcuts.notes': 'Notes / candidats',
  'controls.shortcuts.or': 'ou',
  'controls.shortcuts.pause': 'Mettre en pause ou reprendre',
  'controls.shortcuts.hint': 'Ouvrir, avancer ou appliquer un indice',
  'controls.shortcuts.hintOther': 'Autres commandes d’indices',
  'hint.target.candidate.visible': 'ce candidat mis en avant',
  'hint.target.candidate.accessible':
    'candidat {value} à la ligne {row}, colonne {column}',
  'hint.target.cell.visible': 'cette cellule en surbrillance',
  'hint.target.cell.accessible': 'ligne {row}, colonne {column}',
  'hint.target.unit.visible': 'ceci a mis en évidence {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'rangée',
  'hint.target.column': 'colonne',
  'hint.target.box': 'boîte',
  'chrome.home': 'Accueil Sudoku',
  'chrome.appearance': 'Apparence',
  'chrome.theme.use': 'Utiliser le thème {theme}',
  'chrome.theme.systemTitle': 'Thème système ({theme})',
  'chrome.theme.title': 'Thème {theme}',
  'chrome.theme.system': 'Système',
  'chrome.theme.systemName': 'système',
  'chrome.theme.light': 'lumière',
  'chrome.theme.dark': 'sombre',
  'chrome.connection.connecting': 'Connexion',
  'chrome.connection.unavailable': 'Service indisponible',
  'chrome.footer.tagline': 'Un jeu réfléchi, sans distractions.',
  'chrome.footer.privacy': 'Confidentialité',
  'chrome.footer.terms': 'Conditions',
  'chrome.footer.input': 'Clavier et toucher prêts',
};
