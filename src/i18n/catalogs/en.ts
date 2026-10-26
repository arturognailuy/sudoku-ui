export const sourceMessages = {
  'common.language.label': 'Language',
  'common.language.auto': 'Auto',
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
  'accessibility.language.changed': 'Language changed to {language}.',
  'common.difficulty.easy': 'Easy',
  'common.difficulty.medium': 'Medium',
  'common.difficulty.hard': 'Hard',
  'common.difficulty.expert': 'Expert',
  'common.difficulty.evil': 'Evil',
  'difficulty.easy.name': 'Easy',
  'difficulty.medium.name': 'Medium',
  'difficulty.hard.name': 'Hard',
  'difficulty.expert.name': 'Expert',
  'difficulty.evil.name': 'Evil',
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
  'hint.value-correction.title': 'Fix this value',
  'hint.candidate-correction.title': 'Fix this candidate cell',
  'hint.value-correction.summary':
    'The value at {cell} conflicts with the puzzle. Clear it before continuing.',
  'hint.candidate-correction.summary':
    'Rebuild the candidates at {cell} from the accepted values in its row, column, and box before continuing.',
  'hint.strategy.summary':
    'Work through {steps} steps to understand and apply {strategy}.',
  'hint.value-correction.observe':
    'Check {cell}. Its value conflicts with the board.',
  'hint.value-correction.conclude':
    'Clear the value at {cell} so the candidate grid can be checked next.',
  'hint.candidate-correction.observe':
    'Check {cell}. Its candidates do not match the board.',
  'hint.candidate-correction.compare':
    'Start this cell again from the accepted values in its row, column, and box.',
  'hint.candidate-correction.conclude':
    'Reset the candidates at {cell} to every digit allowed by its row, column, and box.',
  'hint.strategy.observe':
    'Check the highlighted cells, candidates, rows, columns, and boxes.',
  'hint.strategy.compare':
    'Compare the highlighted constraints to find the forced result.',
  'hint.strategy.conclude':
    'Apply the highlighted result. This pattern is {strategy}.',
  'hint.coloring.pair':
    'In {unit}, {digit} can appear only in {cells}, so exactly one of those cells contains {digit}. Mark them as opposite possibilities A and B.',
  'hint.coloring.chain':
    'Follow each solid link. It joins the only two positions for {digit} in a row, column, or box, so the labels alternate through the chain: A at {group_a} and B at {group_b}.',
  'hint.coloring.alternatives':
    'Either every A candidate contains {digit} and every B candidate does not, or every B candidate contains {digit} and every A candidate does not. We do not need to know which possibility is true.',
  'hint.coloring.elimination':
    '{cell} sees the A candidate at {group_a_cell} and the B candidate at {group_b_cell}. Whichever group contains {digit}, this cell sees a {digit}, so it cannot contain {digit}.',
  'hint.coloring.apply':
    'Remove {candidates}. Alternating the two possibilities for {colored_digit} through forced pairs and removing a candidate that sees both possibilities is called {strategy}.',
  'hint.coloring.place':
    'Place {digit} in {cell}. Alternating the two possibilities for {colored_digit} through forced pairs and resolving the result is called {strategy}.',
  'hint.x-cycle.opening':
    'In {unit}, {digit} can go only in {cells}. One of these two cells must contain {digit}.',
  'hint.x-cycle.assume':
    'Suppose {start} were not {digit}. Then {forced} would have to be {digit}. That means {blocked} cannot be {digit}, so {unit} forces {digit} into {result}.',
  'hint.x-cycle.follow':
    'Because {true_cell} is {digit}, {blocked} cannot be {digit}. {unit} therefore forces {digit} into {result}.',
  'hint.x-cycle.close':
    'Because {true_cell} is {digit}, {blocked} cannot be {digit}. In {unit}, that leaves {result} as the only place for {digit}.',
  'hint.x-cycle.place':
    'The starting assumption that {assumption} was not {digit} leads back to {cell} being {digit}, so the assumption cannot be true. Place {digit} in {cell}. This pattern is called {strategy}.',
  'hint.xy-chain.start':
    '{cell} has only candidates {first_digit} and {second_digit}. Either it is {endpoint_digit}, or—if it is not {endpoint_digit}—it must be {other_digit}.',
  'hint.xy-chain.assume':
    'Suppose {start} is not {endpoint_digit}. It must then be {start_value}. Because {start} and {middle} share {first_unit}, {middle} cannot be {start_value} and must be {middle_value}. That makes {result} unable to be {middle_value} in {second_unit}, so it must be {result_value}.',
  'hint.xy-chain.follow':
    'Because {start} is {start_value}, {middle} in {first_unit} cannot be {start_value} and must be {middle_value}. Because {middle} and {result} share {second_unit}, {result} cannot be {middle_value} and must be {result_value}.',
  'hint.xy-chain.reach':
    'Because {start} is {start_value}, {endpoint} cannot be {shared_digit}. Its only other candidate is {endpoint_digit}, so it must be {endpoint_digit}.',
  'hint.xy-chain.place':
    'If {first_endpoint} is {endpoint_digit}, the first endpoint contains {endpoint_digit}. If it is not {endpoint_digit}, the chain forces {endpoint_digit} into the other endpoint, {second_endpoint}. Therefore at least one endpoint is {endpoint_digit}. {cell} sees both endpoints, so it cannot be {endpoint_digit}. Place {digit} in {cell}. This pattern is called {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Start with {cell}. Its row, column, and box already contain {excluded_digits}.',
  'hint.naked-single.only':
    'Therefore, {digit} is the only digit that can go in {cell}.',
  'hint.naked-single.apply':
    'Place {digit} in {cell}. A cell with only one candidate is a {strategy}.',
  'hint.hidden-single.inspect': 'In {unit}, check where {digit} can go.',
  'hint.hidden-single.blockers':
    'The placed {digit}s at {blockers} rule out {digit} from every other empty cell in {unit}.',
  'hint.hidden-single.only': 'Only {cell} can still contain {digit}.',
  'hint.hidden-single.apply':
    'Place {digit} in {cell}. When a digit has only one possible cell in a row, column, or box, it is a {strategy}.',
  'hint.naked-pair.inspect':
    'Start in {unit}: {cell} can contain only {first_digit} or {second_digit}.',
  'hint.naked-pair.match':
    'The matching cell, {cell}, has the same two candidates: {first_digit} and {second_digit}.',
  'hint.naked-pair.reserve':
    'These two cells must take {digits} in some order, so candidate {digit} cannot stay in any other cell in {unit}.',
  'hint.naked-pair.apply':
    'Remove {candidates}; this step does not place a value. This pattern is a {strategy}.',
  'hint.subset-reservation.observe':
    'In {unit}, {cells} contain only {digits}.',
  'hint.subset-reservation.explain':
    'Those cells reserve {digits} in {unit}, so no other cell there can contain those digits.',
  'hint.subset-reservation.apply':
    'Remove {candidates}. This pattern is {strategy}.',
  'hint.subset-reservation.place':
    'Place {digit} in {cell}. This pattern is {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'In {unit}, {digits} can appear only in {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Because {digits} are confined to those cells in {unit}, those cells cannot contain any other candidates.',
  'hint.hidden-subset-confinement.apply':
    'Remove {candidates} from the confined cells. This pattern is {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Place {digit} in {cell} after removing the other candidates. This pattern is {strategy}.',
  'hint.intersection-confinement.observe':
    'In {source_unit}, candidate {digit} is confined to {intersection_unit} at {cells}.',
  'hint.intersection-confinement.explain':
    'Because every {digit} in {source_unit} lies in {intersection_unit}, cells outside the source but inside the intersection cannot contain it.',
  'hint.intersection-confinement.apply':
    'Remove candidate {digit} from {cells}. This pattern is {strategy}.',
  'hint.intersection-confinement.place':
    'Place {digit} in {cell} after applying the intersection. This pattern is {strategy}.',
  'hint.fish-confinement.observe':
    'In {base_units}, candidate {digit} appears only in {cover_units}.',
  'hint.fish-confinement.explain':
    'Candidate {digit} is confined from {base_units} to {cover_units}, so those cover units must receive it through the highlighted base positions.',
  'hint.fish-confinement.apply':
    'Remove candidate {digit} from {cells}. This pattern is {strategy}.',
  'hint.pivot-wing.observe':
    'At {pivot}, candidates {pivot_digits} connect the wing cells at {wing_cells}.',
  'hint.pivot-wing.explain':
    'Each wing at {wing_cells} shares one candidate with the pivot at {pivot}, and both wings contain {shared_digit}. Whichever pivot candidate is true, one wing must contain {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} has only candidates {digits}. It must be one of them.',
  'hint.xy-wing.case':
    'If {pivot} is {pivot_digit}, then {wing} cannot be {pivot_digit}. Its only other candidate is {shared_digit}, so {wing} must be {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Whichever candidate is true at {pivot}, at least one wing—{wing_cells}—must be {shared_digit}. We do not need to know which wing contains it.',
  'hint.xy-wing.apply':
    '{cells} see both wings at {wing_cells}. Because at least one wing is {shared_digit}, remove candidate {shared_digit} from those cells. This pattern is called {strategy}.',
  'hint.xy-wing.place':
    '{cell} sees both wings at {wing_cells}. Because at least one wing is {shared_digit}, {cell} cannot be {shared_digit}. Its only other candidate is {digit}, so place {digit} there. This pattern is called {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} has only candidates {digits}. It must be one of them.',
  'hint.xyz-wing.case':
    'If {pivot} is {pivot_digit}, then {wing} shares {unit} with it and cannot be {pivot_digit}. Its only other candidate is {shared_digit}, so {wing} must be {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'If {pivot} is {shared_digit}, the pivot itself already contains {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Whichever candidate is true at {pivot}, at least one of {pattern_cells} must be {shared_digit}. We do not need to know which cell contains it.',
  'hint.xyz-wing.apply':
    '{target} shares {first_unit} with {first_pattern_cell}, {second_unit} with {second_pattern_cell}, and {third_unit} with {third_pattern_cell}. Because at least one of those three cells is {shared_digit}, {target} cannot be {shared_digit}. Remove candidate {shared_digit} from it. This pattern is called {strategy}.',
  'hint.strong-link-wing.observe':
    'The cells at {wing_cells} can each contain only {digits}.',
  'hint.strong-link-wing.bridge':
    'In {unit}, candidate {link_digit} can appear only at {link_cells}, so at least one of those cells must contain {link_digit}.',
  'hint.strong-link-wing.force':
    'If {first_link_cell} is {link_digit}, then {first_wing_cell} cannot be {link_digit} and must be {forced_digit}. If {second_link_cell} is {link_digit}, then {second_wing_cell} must be {forced_digit}. Therefore, at least one of those two cells is {forced_digit}.',
  'hint.strong-link-wing.apply':
    'At least one of {wing_cells} is {digit}. Remove candidate {digit} from {cells} because those cells see both of them. This pattern is called {strategy}.',
  'hint.strong-link-wing.place':
    'At least one of {wing_cells} is {removed_digit}. Remove candidate {removed_digit} from {cell} because it sees both of them, so place {digit} there. This pattern is called {strategy}.',
  'hint.relational-wing.apply':
    'Remove candidate {digit} from {cells}. This pattern is {strategy}.',
  'hint.relational-wing.place':
    'Remove candidate {removed_digit} from {cell}, so place {digit} there. This pattern is {strategy}.',
  'hint.bug-plus-one.observe':
    'Every other unsolved cell has two candidates, while {cell} has {digits}.',
  'hint.bug-plus-one.explain':
    'Removing {digit} from {cell} would leave every unsolved cell bivalue and make the solution interchangeable across {units}, so {digit} must be true.',
  'hint.bug-plus-one.place':
    'Place {digit} in {cell}. This uniqueness exception is {strategy}.',
  'hint.unique-rectangle.observe':
    'The cells at {cells} form a rectangle and all contain the pair {digits}.',
  'hint.unique-rectangle.type1':
    'Three corners contain exactly {digits}. If {cell} also used either digit, the rectangle would allow two interchangeable solutions.',
  'hint.unique-rectangle.type2':
    'The two expanded corners at {cells} share extra candidate {digit}, so any cell that sees both corners cannot contain {digit}.',
  'hint.unique-rectangle.type3':
    'The extra digits {digits} in the rectangle combine with {cells} as a reserved subset in {unit}, so those digits can be removed elsewhere in that unit.',
  'hint.unique-rectangle.type4':
    'Candidate {digit} appears in {cells} as a conjugate pair in {unit}, so candidate {removed_digit} cannot occupy either expanded corner without creating interchangeable solutions.',
  'hint.unique-rectangle.apply':
    'Remove {candidates}. This uniqueness relationship is {strategy}.',
  'hint.unique-rectangle.place':
    'Place {digit} in {cell} after applying the uniqueness relationship. This pattern is {strategy}.',
  'hint.implication-chain.observe':
    'Start at {cell}, which has only candidates {digits}.',
  'hint.implication-chain.explain':
    '{from} and {to} share a candidate and see each other, so that candidate cannot be true in both; the implication continues.',
  'hint.implication-chain.apply':
    'One endpoint must contain {digit}, so remove candidate {digit} from {cells}. This pattern is {strategy}.',
  'hint.narration.apply': 'Apply the deduction: ',
  'hint.narration.look-at': 'Look at ',
  'hint.narration.value-conflict':
    '. Its entered value conflicts with the puzzle.',
  'hint.narration.clear-value': 'Clear the value at ',
  'hint.narration.clear-value-tail':
    ' so the candidate grid can be checked next.',
  'hint.narration.candidate-inconsistent':
    '. Its candidate state is inconsistent with the puzzle.',
  'hint.narration.reset-candidates': 'Reset the candidate set at ',
  'hint.narration.reset-candidates-tail':
    ' to every digit allowed by the accepted row, column, and box values.',
  'hint.narration.only-candidate': '. It has only one candidate: ',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'Because no other digit can go in ',
  'hint.narration.place': ', place ',
  'hint.narration.naked-single-tail': ' there. This is called a Naked Single.',
  'hint.narration.in-unit': 'In ',
  'hint.narration.consider-digit': ', consider where ',
  'hint.narration.can-appear': ' can appear.',
  'hint.narration.other-cells': 'Every other empty cell in ',
  'hint.narration.cannot-contain': ' cannot contain ',
  'hint.narration.leaving-only': ', leaving only ',
  'hint.narration.because-unit': 'Because ',
  'hint.narration.still-needs': ' still needs ',
  'hint.narration.only-cell': ' and ',
  'hint.narration.hidden-single-tail': ' is the only possible cell, place ',
  'hint.narration.hidden-single-name':
    ' there. This is called a Hidden Single.',
  'hint.narration.place-result': 'place ',
  'hint.narration.in': ' in ',
  'hint.narration.remove': 'remove candidate ',
  'hint.narration.from': ' from ',
  'hint.narration.separator': ', ',
  'hint.narration.strategy-result': '. This is the {strategy} result.',
  'welcome.eyebrow': 'New puzzle',
  'welcome.title': 'Choose your difficulty',
  'welcome.lede': String.raw`Pick a level, then start when you're ready.`,
  'welcome.difficulty': 'Difficulty',
  'welcome.start': 'Start {difficulty} puzzle',
  'welcome.starting': 'Starting {difficulty} puzzle…',
  'welcome.preview': 'Sudoku puzzle preview',
  'loading.initial': 'Loading your puzzle…',
  'loading.account.eyebrow': 'Account',
  'loading.account.title': 'Saving your puzzle to your account…',
  'loading.account.detail':
    'Your progress stays on this device until the account save is confirmed.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Returning to the front page…',
  'loading.home.detail':
    'Checking for the latest interface before showing level selection.',
  'loading.restart.eyebrow': 'Same puzzle',
  'loading.restart.title': 'Restarting this puzzle…',
  'loading.restart.detail':
    'Keeping the old board locked until the fresh attempt is ready.',
  'loading.new.eyebrow': 'New puzzle',
  'loading.new.title': 'Preparing your {difficulty} board…',
  'loading.new.detail':
    'Creating a fresh puzzle now. You’ll be playing in a moment.',
  'confirmation.home.eyebrow': 'Return home?',
  'confirmation.home.title': 'Leave this puzzle',
  'confirmation.home.description':
    'Your current progress will no longer open automatically on this device.',
  'confirmation.home.cancel': 'Keep playing',
  'confirmation.home.confirm': 'Return to front page',
  'confirmation.restart.eyebrow': 'Start over?',
  'confirmation.restart.title': 'Start over',
  'confirmation.restart.description':
    'Replay this puzzle from its original givens, or choose a different puzzle.',
  'confirmation.restart.replay.title': 'Replay this puzzle',
  'confirmation.restart.replay.description':
    'Keep these givens and reset this attempt.',
  'confirmation.restart.different.title': 'Play a different puzzle',
  'confirmation.restart.different.description':
    'Choose a level for a new board.',
  'confirmation.restart.different.level': 'Level for the different puzzle',
  'common.cancel': 'Cancel',
  'account.confirm.deleteGame.eyebrow': 'Delete saved game?',
  'account.confirm.deleteGame.title': 'Delete this game',
  'account.confirm.deleteGame.description':
    'This puzzle and its progress will be permanently removed from My games. This cannot be undone.',
  'account.confirm.deleteGame.action': 'Delete game',
  'account.confirm.deleteGame.pending': 'Deleting saved game…',
  'account.confirm.deleteAll.eyebrow': 'Delete every saved game?',
  'account.confirm.deleteAll.title': 'Delete all games',
  'account.confirm.deleteAll.description':
    'Every puzzle and all progress in My games will be permanently removed. This cannot be undone.',
  'account.confirm.deleteAll.action': 'Delete all games',
  'account.confirm.deleteAll.pending': 'Deleting all games…',
  'account.confirm.revoke.eyebrow': 'Account security',
  'account.confirm.revoke.title': 'Sign out everywhere',
  'account.confirm.revoke.description':
    'This signs you out on every device, including this one. Your account and saved games remain.',
  'account.confirm.revoke.action': 'Sign out everywhere',
  'account.confirm.revoke.pending': 'Signing out everywhere…',
  'account.confirm.deleteAccount.eyebrow': 'Permanent action',
  'account.confirm.deleteAccount.title': 'Delete your account',
  'account.confirm.deleteAccount.description':
    'Your identity, every signed-in session, and all saved games will be permanently removed. The shared puzzle catalog is unaffected.',
  'account.confirm.deleteAccount.action': 'Delete account',
  'account.confirm.deleteAccount.pending': 'Deleting account…',
  'account.confirm.typeEmail': 'Type {email} to confirm',
  'account.label': 'Account',
  'account.continue.title': 'Continue on other devices',
  'account.continue.detail':
    'Sign in to save this browser’s active game automatically.',
  'account.signIn': 'Sign in with Google',
  'account.signIn.short': 'Sign in',
  'game.title': '{difficulty} puzzle',
  'game.statusActions': 'Game status and actions',
  'game.elapsed': 'Elapsed time',
  'game.mistakes': 'Mistakes {count}',
  'game.mistakes.label': '{count, plural, one {# mistake} other {# mistakes}}',
  'game.resume': 'Resume',
  'game.pause': 'Pause',
  'status.resumed': 'Puzzle resumed.',
  'status.paused': 'Puzzle paused.',
  'status.restarted': 'Puzzle restarted. Fresh attempt, same puzzle.',
  'status.hintClosed': 'Hint closed. Your puzzle is unchanged.',
  'status.strategyApplied': 'Strategy applied. You can undo it in one step.',
  'status.correctionApplied':
    'Correction applied. You can undo it in one step.',
  'status.hintAlreadyApplied': 'This hint is already reflected in the board.',
  'status.hintRefreshed': 'The board changed, so the hint was refreshed.',
  'status.accountSaved': 'Game saved to your account.',
  'status.waitBeforeLeaving':
    'Wait for pending moves before leaving this puzzle.',
  'status.selectEditableCell':
    'Select an editable cell before entering a number.',
  'status.savingAccount': 'Saving your local game to your account…',
  'status.restoring': 'Restoring your puzzle…',
  'status.restored': 'Your local puzzle was restored.',
  'status.puzzleReady': '{difficulty} puzzle ready.',
  'status.puzzleRestored': '{difficulty} puzzle restored.',
  'status.waitBeforeStarting':
    'Wait for pending moves before starting another puzzle.',
  'status.solved': 'Solved! Beautiful work.',
  'status.moveSaved': 'Move saved.',
  'status.waitBeforeHint': 'Wait for pending moves before opening a hint.',
  'status.hintReady': 'Hint ready. Start with step 1.',
  'status.openingSaved': 'Opening your saved game…',
  'status.savedDeleted': 'Saved game deleted.',
  'status.allDeleted': 'All saved games deleted.',
  'status.signedOut': 'Signed out. Your account games remain saved.',
  'status.revoked': 'Signed out everywhere. Sign in again to continue.',
  'status.accountDeleted': 'Account and saved games deleted.',
  'retry.saving': 'Try saving again',
  'retry.restoring': 'Try restoring again',
  'retry.connection': 'Check connection',
  'retry.starting': 'Try starting again',
  'retry.move': 'Retry move',
  'retry.hint': 'Try hint again',
  'retry.time': 'Retry saving time',
  'retry.progress': 'Retry saving progress',
  'retry.leaving': 'Try leaving again',
  'retry.opening': 'Try opening again',
  'retry.deleting': 'Try deleting again',
  'retry.signOut': 'Try signing out again',
  'retry.revoke': 'Try signing out everywhere again',
  'retry.deleteAccount': 'Try deleting the account again',
  'error.accountSave':
    'Your local game is safe, but it could not be saved to your account.',
  'error.restoring': 'Your puzzle could not be restored.',
  'error.connection':
    'The game service could not be reached. Check your connection and try again.',
  'error.http': 'The game service returned error {status}. Please try again.',
  'error.unavailable':
    'The game service is temporarily unavailable. Your board is safe; try again.',
  'error.starting': 'The game could not be started.',
  'error.signInAgain': 'Sign in again to save moves.',
  'error.localUnavailable': 'The local game is unavailable.',
  'error.move': 'The move could not be saved.',
  'error.currentUnavailable': 'The current game is unavailable.',
  'error.hintChanged': 'The board changed while the hint was prepared.',
  'error.hint': 'The hint could not be prepared.',
  'error.time': 'The latest game time could not be saved.',
  'error.timer': 'The latest timer state could not be saved.',
  'error.leaving': 'The local puzzle could not be cleared.',
  'error.opening': 'That saved game could not be opened.',
  'error.deleteGame': 'The saved game could not be deleted.',
  'error.deleteAll': 'The saved games could not be deleted.',
  'error.signOut': 'You could not be signed out.',
  'error.revoke': 'Sessions could not be revoked.',
  'error.deleteAccount': 'The account could not be deleted.',
  'error.invalid-request': 'The request is invalid.',
  'error.invalid-json': 'The request contains invalid JSON.',
  'error.unsupported-media-type': 'The request Content-Type is not supported.',
  'error.payload-too-large': 'The request is too large.',
  'error.unauthorized': 'Authorization is required.',
  'error.forbidden-origin': 'This request origin is not allowed.',
  'error.session-not-found': 'The game session was not found.',
  'error.revision-conflict': 'The board changed before this move was applied.',
  'error.invalid-session': 'The game session is invalid.',
  'error.invalid-action': 'This game action is invalid.',
  'error.invalid-cell': 'This cell is invalid.',
  'error.immutable-cell': 'A given cell cannot be changed.',
  'error.note-not-allowed': 'Candidates cannot be changed in this cell.',
  'error.no-undo': 'There is no action to undo.',
  'error.no-redo': 'There is no action to redo.',
  'error.no-hint': 'No hint is available.',
  'error.stale-hint': 'The board changed after this hint was prepared.',
  'error.persistence-failed': 'The game could not be saved.',
  'error.internal-error': 'The request could not be completed.',
  'error.account-unavailable': 'Account features are unavailable.',
  'error.account-unauthorized': 'A valid application session is required.',
  'error.csrf-failed':
    'This sign-in could not be verified. Please sign in again.',
  'error.account-game-not-found': 'The saved game was not found.',
  'error.guest-revision-conflict':
    'The local game changed before this action was applied.',
  'error.guest-claim-conflict':
    'This local game was already saved to an account.',
  'error.malformedDescriptor': 'The explanation could not be displayed.',

  'account.close': 'Close account panel',
  'account.games.title': 'My games',
  'account.games.deleteAll': 'Delete all',
  'account.games.deletingAll': 'Deleting all…',
  'account.games.empty': 'No saved games yet.',
  'account.games.puzzle': '{difficulty} puzzle',
  'account.games.finished': 'Finished',
  'account.games.inProgress': 'In progress',
  'account.games.saved': 'Saved game',
  'account.games.open': 'Open',
  'account.games.opening': 'Opening…',
  'account.games.delete': 'Delete',
  'account.games.deleting': 'Deleting…',
  'account.signOut': 'Sign out',
  'account.signingOut': 'Signing out…',
  'account.settings': 'Account settings',
  'account.revoke': 'Sign out everywhere',
  'account.delete': 'Delete account',
  'board.label': 'Sudoku game board',
  'board.cell':
    'Row {row}, column {column}, {content}{pending, select, true {, checking} other {}}{invalid, select, true {, invalid} other {}}{hint, select, none {} other {, {hint}}}',
  'board.cell.given': 'given {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'empty, candidates {candidates}',
  'board.cell.empty': 'empty',
  'board.hint.focus': 'hint focus',
  'board.hint.premise': 'hint evidence',
  'board.hint.eliminated': 'candidate eliminated',
  'board.hint.conclusion': 'hint conclusion',
  'board.hint.problem': 'needs correction',
  'board.hint.extra': 'impossible candidate',
  'board.hint.group': 'group {group}',
  'board.hint.chain': 'chain position {position}',
  'board.paused.title': 'Puzzle paused',
  'board.paused.detail': 'Your time is stopped.',
  'hint.label': 'Hint',
  'hint.close': 'Close',
  'hint.strategy.grade': '{grade} strategy',
  'hint.applying': 'Applying hint…',
  'hint.refreshing': 'Refreshing hint…',
  'hint.step': 'Step {current} of {total}',
  'hint.legend.label': 'Visual hint legend',
  'hint.legend.strong': 'Solid: must contain',
  'hint.legend.weak': 'Dashed: cannot both',
  'hint.legend.implication': 'Arrow: implication',
  'hint.legend.groups': 'A/B: alternating groups',
  'hint.legend.order': 'Numbers: chain order',
  'hint.back': 'Back',
  'hint.next': 'Next',
  'hint.apply': 'Apply hint',
  'controls.label': 'Game controls',
  'controls.digit.note': 'Add or remove note {digit}',
  'controls.digit.enter': 'Enter {digit}',
  'controls.hint.preparing': 'Preparing hint…',
  'controls.hint.preparingDetail':
    'Keeping the puzzle visible while the next step is prepared.',
  'controls.complete.eyebrow': 'Puzzle complete',
  'controls.complete.title': 'Solved in {time}',
  'controls.complete.detail':
    'Keep the rhythm with another {difficulty} board, or choose a different level.',
  'controls.complete.another': 'Play another {difficulty}',
  'controls.complete.replay': 'Replay this puzzle',
  'controls.complete.choose': 'Choose another level',
  'controls.pad': 'Number pad',
  'controls.pad.notes': 'Number pad, notes mode',
  'controls.modes': 'Input modes',
  'controls.notes.on': 'Notes on',
  'controls.notes.off': 'Notes off',
  'controls.candidates.on': 'Candidates on',
  'controls.candidates.off': 'Candidates off',
  'controls.actions': 'Puzzle actions',
  'controls.erase': 'Erase',
  'controls.undo': 'Undo',
  'controls.undoing': 'Undoing…',
  'controls.redo': 'Redo',
  'controls.redoing': 'Redoing…',
  'controls.hint.reveal': 'Reveal a hint',
  'controls.shortcuts': 'Keyboard shortcuts',
  'controls.shortcuts.move': 'Move',
  'controls.shortcuts.arrows': 'Arrow keys',
  'controls.shortcuts.enter': 'Enter a number',
  'controls.shortcuts.notes': 'Notes / candidates',
  'controls.shortcuts.or': 'or',
  'controls.shortcuts.pause': 'Pause or resume',
  'controls.shortcuts.hint': 'Open, advance, or apply a hint',
  'controls.shortcuts.hintOther': 'Other hint controls',
  'hint.target.candidate.visible': 'this highlighted candidate',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'candidate {value} at row {row}, column {column}',
  'hint.target.cell.visible': 'this highlighted cell',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'row {row}, column {column}',
  'hint.target.unit.visible': 'this highlighted {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'row',
  'hint.target.column': 'column',
  'hint.target.box': 'box',
  'chrome.home': 'Sudoku home',
  'chrome.appearance': 'Appearance',
  'chrome.theme.use': 'Use {theme} theme',
  'chrome.theme.systemTitle': 'System theme ({theme})',
  'chrome.theme.title': '{theme} theme',
  'chrome.theme.system': 'System',
  'chrome.theme.systemName': 'system',
  'chrome.theme.light': 'light',
  'chrome.theme.dark': 'dark',
  'chrome.connection.connecting': 'Connecting',
  'chrome.connection.unavailable': 'Service unavailable',
  'chrome.footer.tagline': 'Thoughtful play, without distractions.',
  'chrome.footer.privacy': 'Privacy',
  'chrome.footer.terms': 'Terms',
  'chrome.footer.input': 'Keyboard and touch ready',
} as const;
