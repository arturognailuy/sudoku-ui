import type { MessageCatalog } from './types';

export const it: MessageCatalog = {
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
  'game.mistakes.label': '{count, plural, one {# errore} other {# errori}}',
  'board.cell':
    'Riga {row}, colonna {column}, {content}{pending, select, true {, verifica in corso} other {}}{invalid, select, true {, non valido} other {}}{hint, select, none {} other {, {hint}}}',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.cell.locator': 'r{row}c{column}',
  'common.language.label': 'Lingua',
  'common.language.auto': 'Automatico',
  'accessibility.language.changed': 'La lingua è cambiata in {language}.',
  'common.difficulty.easy': 'Facile',
  'common.difficulty.medium': 'Medio',
  'common.difficulty.hard': 'Difficile',
  'common.difficulty.expert': 'Esperto',
  'common.difficulty.evil': 'Male',
  'difficulty.easy.name': 'Facile',
  'difficulty.medium.name': 'Medio',
  'difficulty.hard.name': 'Difficile',
  'difficulty.expert.name': 'Esperto',
  'difficulty.evil.name': 'Male',
  'hint.value-correction.title': 'Correggi questo valore',
  'hint.candidate-correction.title': 'Correggi questa cella candidata',
  'hint.value-correction.summary':
    'Il valore in {cell} è in conflitto con il puzzle. Cancellarlo prima di continuare.',
  'hint.candidate-correction.summary':
    'Prima di continuare, ricostruisci i candidati di {cell} in base ai numeri già inseriti nella riga, nella colonna e nel riquadro.',
  'hint.strategy.summary':
    'Segui questi {steps} passaggi per comprendere e applicare {strategy}.',
  'hint.value-correction.observe':
    'Controlla {cell}. Il valore è in conflitto con la griglia.',
  'hint.value-correction.conclude':
    'Cancellare il valore in {cell} in modo che la griglia candidata possa essere controllata successivamente.',
  'hint.candidate-correction.observe':
    'Controlla {cell}. I candidati non corrispondono alla griglia.',
  'hint.candidate-correction.compare':
    'Ricostruisci i candidati di questa cella in base ai numeri già inseriti nella riga, nella colonna e nel riquadro.',
  'hint.candidate-correction.conclude':
    'Reimposta i candidati di {cell} su tutte le cifre consentite dalla riga, dalla colonna e dal riquadro.',
  'hint.strategy.observe':
    'Controlla le celle, i candidati, le righe, le colonne e i riquadri evidenziati.',
  'hint.strategy.compare':
    'Confronta i vincoli evidenziati per trovare il risultato obbligato.',
  'hint.strategy.conclude':
    'Applica il risultato evidenziato. Questo schema è {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'Il candidato {digit} forma due gruppi alternati: A a {group_a} e B a {group_b}.',
  'hint.coloring.alternatives':
    'Ogni collegamento solido significa che esattamente un endpoint contiene {digit}, quindi i candidati collegati si alternano tra i gruppi A e B. Un conflitto può escludere un gruppo, mentre una cella che vede entrambi i gruppi non può contenere {digit}.',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'I candidati collegati forzano il risultato per {colored_digit}. Rimuovere {candidates}. Questo modello è {strategy}.',
  'hint.coloring.place':
    'I candidati collegati per {colored_digit} forzano il risultato. Posiziona {digit} in {cell}. Questo modello è {strategy}.',
  'hint.x-cycle.opening':
    'In {unit}, {digit} può andare solo in {cells}. Una di queste due celle deve contenere {digit}.',
  'hint.x-cycle.assume':
    'Supponiamo che {start} non sia {digit}. Quindi {forced} dovrebbe essere {digit}. Ciò significa che {blocked} non può essere {digit}, quindi {unit} forza {digit} in {result}.',
  'hint.x-cycle.follow':
    'Poiché {true_cell} è {digit}, {blocked} non può essere {digit}. {unit} quindi forza {digit} in {result}.',
  'hint.x-cycle.close':
    'Poiché {true_cell} è {digit}, {blocked} non può essere {digit}. In {unit}, questo lascia {result} come unico posto per {digit}.',
  'hint.x-cycle.place':
    'L’ipotesi iniziale che {assumption} non fosse {digit} riconduce a {cell} che è {digit}, quindi l’ipotesi non può essere vera. Posiziona {digit} in {cell}. Questo modello si chiama {strategy}.',
  'hint.xy-chain.start':
    '{cell} ha soltanto i candidati {first_digit} e {second_digit}. O vale {endpoint_digit}, oppure, se non vale {endpoint_digit}, deve valere {other_digit}.',
  'hint.xy-chain.assume':
    'Supponiamo che {start} non valga {endpoint_digit}. Deve allora valere {start_value}. Poiché {start} e {middle} condividono {first_unit}, {middle} non può valere {start_value} e deve valere {middle_value}. Di conseguenza {result} non può valere {middle_value} in {second_unit} e deve valere {result_value}.',
  'hint.xy-chain.follow':
    'Poiché {start} vale {start_value}, {middle} in {first_unit} non può valere {start_value} e deve valere {middle_value}. Poiché {middle} e {result} condividono {second_unit}, {result} non può valere {middle_value} e deve valere {result_value}.',
  'hint.xy-chain.reach':
    'Poiché {start} vale {start_value}, {endpoint} non può valere {shared_digit}. Il suo unico altro candidato è {endpoint_digit}, quindi deve valere {endpoint_digit}.',
  'hint.xy-chain.place':
    'Se {first_endpoint} vale {endpoint_digit}, il primo estremo contiene {endpoint_digit}. Altrimenti la catena forza {endpoint_digit} nell’altro estremo, {second_endpoint}. Quindi almeno un estremo contiene {endpoint_digit}. {cell} vede entrambi gli estremi e non può valere {endpoint_digit}. Inserisci {digit} in {cell}. Questo schema si chiama {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Inizia da {cell}. La sua riga, colonna e il suo riquadro contengono già {excluded_digits}.',
  'hint.naked-single.only':
    'Quindi {digit} è l’unica cifra che può andare in {cell}.',
  'hint.naked-single.apply':
    'Inserisci {digit} in {cell}. Una cella con un solo candidato è un {strategy}.',
  'hint.hidden-single.inspect': 'In {unit}, controlla dove può andare {digit}.',
  'hint.hidden-single.blockers':
    'I {digit} già inseriti in {blockers} escludono {digit} da tutte le altre celle vuote di {unit}.',
  'hint.hidden-single.only': 'Solo {cell} può ancora contenere {digit}.',
  'hint.hidden-single.apply':
    'Inserisci {digit} in {cell}. Quando una cifra ha una sola cella possibile in una riga, colonna o riquadro, è un {strategy}.',
  'hint.naked-pair.inspect':
    'Inizia da {unit}: {cell} può contenere solo {first_digit} o {second_digit}.',
  'hint.naked-pair.match':
    '{cell} ha gli stessi due candidati: {first_digit} e {second_digit}.',
  'hint.naked-pair.reserve':
    'Queste due celle devono contenere {digits} in un ordine qualsiasi, quindi il candidato {digit} non può rimanere in nessun’altra cella di {unit}.',
  'hint.naked-pair.apply':
    'Rimuovi {candidates}; questo passaggio non inserisce alcun valore. Questo schema è una {strategy}.',
  'hint.naked-triple.first':
    'Inizia in {unit}: {cell} può contenere solo {first_digit} o {second_digit}.',
  'hint.naked-triple.second':
    'Aggiungi {cell}; può contenere solo {first_digit} o {second_digit}.',
  'hint.naked-triple.third':
    'Aggiungi {cell}; può contenere solo {first_digit} o {second_digit}. Le tre celle ora contengono soltanto {reserved_digits}.',
  'hint.naked-triple.consequence':
    'Queste tre celle devono contenere {reserved_digits} in un ordine qualsiasi. Quindi {removed_digits} vengono rimossi da {cell}, lasciando solo {remaining_digit}.',
  'hint.naked-triple.apply':
    'Inserisci {digit} in {cell}. Tre celle i cui candidati sono limitati alle stesse tre cifre formano un {strategy}.',
  'hint.subset-reservation.observe':
    'In {unit}, {cells} contengono solo {digits}.',
  'hint.subset-reservation.explain':
    'Queste celle riservano {digits} in {unit}, quindi nessun’altra cella può contenere quelle cifre.',
  'hint.subset-reservation.apply':
    'Rimuovi {candidates}. Questo schema è {strategy}.',
  'hint.subset-reservation.place':
    'Inserisci {digit} in {cell}. Questo schema si chiama {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'In {unit}, {digits} possono comparire solo in {cells}.',
  'hint.hidden-subset-confinement.explain':
    'Poiché {digits} sono confinati a quelle celle in {unit}, tali celle non possono contenere altri candidati.',
  'hint.hidden-subset-confinement.apply':
    'Rimuovi {candidates} dalle celle confinate. Questo schema è {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Inserisci {digit} in {cell} dopo aver rimosso gli altri candidati. Questo schema è {strategy}.',
  'hint.intersection-confinement.observe':
    'In {source_unit}, il candidato {digit} è confinato a {intersection_unit} in {cells}.',
  'hint.intersection-confinement.explain':
    'Poiché ogni {digit} in {source_unit} si trova in {intersection_unit}, le celle all’esterno dell’origine ma all’interno dell’intersezione non possono contenerlo.',
  'hint.intersection-confinement.apply':
    'Rimuovere il candidato {digit} da {cells}. Questo modello è {strategy}.',
  'hint.intersection-confinement.place':
    'Posiziona {digit} in {cell} dopo aver applicato l’intersezione. Questo modello è {strategy}.',
  'hint.fish-confinement.observe':
    'In {base_units}, il candidato {digit} appare solo in {cover_units}.',
  'hint.fish-confinement.explain':
    'Il candidato {digit} è confinato da {base_units} a {cover_units}, quindi tali unità di copertura devono riceverlo tramite le posizioni di base evidenziate.',
  'hint.fish-confinement.apply':
    'Rimuovi il candidato {digit} da {cells}. Questo schema è {strategy}.',
  'hint.pivot-wing.observe':
    'A {pivot}, i candidati {pivot_digits} collegano le cellule alari a {wing_cells}.',
  'hint.pivot-wing.explain':
    'Ciascuna ala in {wing_cells} condivide un candidato con il perno in {pivot} ed entrambe le ali contengono {shared_digit}. Qualunque sia il candidato pivot vero, un’ala deve contenere {shared_digit}.',
  'hint.xy-wing.pivot':
    '{pivot} ha solo i candidati {digits}. Deve essere uno dei due.',
  'hint.xy-wing.case':
    'Se {pivot} è {pivot_digit}, {wing} non può essere {pivot_digit}. L’unico altro candidato è {shared_digit}, quindi {wing} deve essere {shared_digit}.',
  'hint.xy-wing.guarantee':
    'Qualunque candidato sia vero in {pivot}, almeno un’ala in {wing_cells} deve essere {shared_digit}. Non serve sapere quale.',
  'hint.xy-wing.apply':
    '{cells} vedono entrambe le ali {wing_cells}. Poiché almeno una è {shared_digit}, rimuovi {shared_digit} da queste celle. Questo schema si chiama {strategy}.',
  'hint.xy-wing.place':
    '{cell} vede entrambe le ali {wing_cells}. Poiché almeno una è {shared_digit}, {cell} non può essere {shared_digit}. Rimane solo {digit}, quindi inserisci {digit}. Questo schema si chiama {strategy}.',
  'hint.xyz-wing.pivot':
    '{pivot} ha soltanto i candidati {digits}. Deve essere uno di questi.',
  'hint.xyz-wing.case':
    'Se {pivot} è {pivot_digit}, allora {wing}, nella stessa {unit}, non può essere {pivot_digit}. L’unico altro candidato è {shared_digit}, quindi {wing} deve essere {shared_digit}.',
  'hint.xyz-wing.pivot-case':
    'Se {pivot} è {shared_digit}, il pivot contiene già {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Qualunque candidato sia vero in {pivot}, almeno una delle celle {pattern_cells} deve essere {shared_digit}. Non serve sapere quale.',
  'hint.xyz-wing.apply':
    '{target} condivide {first_unit} con {first_pattern_cell}, {second_unit} con {second_pattern_cell} e {third_unit} con {third_pattern_cell}. Poiché almeno una di queste tre celle è {shared_digit}, {target} non può esserlo. Rimuovi il candidato {shared_digit}. Questo schema si chiama {strategy}.',
  'hint.strong-link-wing.observe':
    'Le celle {wing_cells} possono contenere ciascuna solo {digits}.',
  'hint.strong-link-wing.bridge':
    'In {unit}, il candidato {link_digit} può comparire solo in {link_cells}, quindi almeno una di queste celle deve contenere {link_digit}.',
  'hint.strong-link-wing.force':
    'Se {first_link_cell} è {link_digit}, allora {first_wing_cell} non può essere {link_digit} e deve essere {forced_digit}. Se {second_link_cell} è {link_digit}, allora {second_wing_cell} deve essere {forced_digit}. Pertanto almeno una di queste due celle è {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Almeno una delle celle {wing_cells} è {digit}. Rimuovi il candidato {digit} da {cells}, perché queste celle vedono entrambe. Questo schema si chiama {strategy}.',
  'hint.strong-link-wing.place':
    'Almeno una delle celle {wing_cells} è {removed_digit}. Rimuovi il candidato {removed_digit} da {cell}, perché vede entrambe, quindi inserisci {digit}. Questo schema si chiama {strategy}.',
  'hint.relational-wing.apply':
    'Rimuovere il candidato {digit} da {cells}. Questo modello è {strategy}.',
  'hint.relational-wing.place':
    'Rimuovi il candidato {removed_digit} da {cell}, quindi posiziona {digit} lì. Questo modello è {strategy}.',
  'hint.bug-plus-one.observe':
    'Ogni altra cella non risolta ha due candidati, mentre {cell} ha {digits}.',
  'hint.bug-plus-one.explain':
    'La rimozione di {digit} da {cell} lascerebbe ogni bivalore di cella non risolto e renderebbe la soluzione intercambiabile in {units}, quindi {digit} deve essere vero.',
  'hint.bug-plus-one.place':
    'Posiziona {digit} in {cell}. Questa eccezione di unicità è {strategy}.',
  'hint.unique-rectangle.observe':
    'Le celle in {cells} formano un rettangolo e contengono tutte la coppia {digits}.',
  'hint.unique-rectangle.type1':
    'Tre angoli contengono esattamente {digits}. Se anche {cell} utilizzasse una delle due cifre, il rettangolo consentirebbe due soluzioni intercambiabili.',
  'hint.unique-rectangle.type2':
    'I due angoli espansi in {cells} condividono il candidato aggiuntivo {digit}, quindi qualsiasi cella che vede entrambi gli angoli non può contenere {digit}.',
  'hint.unique-rectangle.type3':
    'Le cifre extra {digits} nel rettangolo si combinano con {cells} come sottoinsieme riservato in {unit}, quindi tali cifre possono essere rimosse altrove in quell’unità.',
  'hint.unique-rectangle.type4':
    'Il candidato {digit} appare in {cells} come una coppia coniugata in {unit}, quindi il candidato {removed_digit} non può occupare nessuno degli angoli espansi senza creare soluzioni intercambiabili.',
  'hint.unique-rectangle.apply':
    'Rimuovere {candidates}. Questa relazione di unicità è {strategy}.',
  'hint.unique-rectangle.place':
    'Posiziona {digit} in {cell} dopo aver applicato la relazione di unicità. Questo modello è {strategy}.',
  'hint.implication-chain.observe':
    'Parti da {cell}, che ha solo i candidati {digits}.',
  'hint.implication-chain.explain':
    '{from} e {to} condividono un candidato e si vedono, quindi quel candidato non può essere vero in entrambi; l’implicazione continua.',
  'hint.implication-chain.apply':
    'Uno degli estremi deve contenere {digit}, quindi rimuovi il candidato {digit} da {cells}. Questo schema è {strategy}.',
  'hint.narration.apply': 'Applicare la detrazione: ',
  'hint.narration.look-at': 'Guarda ',
  'hint.narration.value-conflict':
    '. Il suo valore inserito è in conflitto con il puzzle.',
  'hint.narration.clear-value': 'Cancella il valore in ',
  'hint.narration.clear-value-tail':
    ' in modo che la griglia candidata possa essere controllata successivamente.',
  'hint.narration.candidate-inconsistent':
    '. Il suo stato candidato non è coerente con il puzzle.',
  'hint.narration.reset-candidates': 'Reimpostare il candidato impostato su ',
  'hint.narration.reset-candidates-tail':
    ' a ogni cifra consentita dai valori di riga, colonna e casella accettati.',
  'hint.narration.only-candidate': '. Ha un solo candidato: ',
  'hint.narration.no-other-digit': 'Perché nessun’altra cifra può entrare ',
  'hint.narration.place': ', luogo ',
  'hint.narration.naked-single-tail': ' lì. Questo si chiama Single nudo.',
  'hint.narration.in-unit': 'Dentro ',
  'hint.narration.consider-digit': ', considera dove ',
  'hint.narration.can-appear': ' può apparire.',
  'hint.narration.other-cells': 'Ogni altra cella vuota ',
  'hint.narration.cannot-contain': ' non può contenere ',
  'hint.narration.leaving-only': ', lasciando solo ',
  'hint.narration.because-unit': 'Perché ',
  'hint.narration.still-needs': ' ha ancora bisogno ',
  'hint.narration.only-cell': ' e ',
  'hint.narration.hidden-single-tail': ' è l’unica cella, luogo possibile ',
  'hint.narration.hidden-single-name': ' lì. Questo si chiama Single nascosto.',
  'hint.narration.place-result': 'posto ',
  'hint.narration.in': ' dentro ',
  'hint.narration.remove': 'rimuovere il candidato ',
  'hint.narration.from': ' da ',
  'hint.narration.strategy-result': '. Questo è il risultato {strategy}.',
  'welcome.eyebrow': 'Nuovo enigma',
  'welcome.title': 'Scegli la tua difficoltà',
  'welcome.lede': 'Scegli un livello e inizia quando sei pronto.',
  'welcome.difficulty': 'Difficoltà',
  'welcome.start': 'Inizia il puzzle {difficulty}',
  'welcome.starting': 'Avvio del puzzle {difficulty}…',
  'welcome.preview': 'Anteprima del sudoku',
  'loading.initial': 'Caricamento del puzzle...',
  'loading.account.eyebrow': 'Conto',
  'loading.account.title': 'Salvataggio del puzzle sul tuo account…',
  'loading.account.detail':
    'I tuoi progressi restano su questo dispositivo finché il salvataggio nell’account non viene confermato.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Tornando alla prima pagina…',
  'loading.home.detail':
    'Controllo dell’interfaccia più recente prima di mostrare la selezione del livello.',
  'loading.restart.eyebrow': 'Stesso enigma',
  'loading.restart.title': 'Ricominciare questo puzzle...',
  'loading.restart.detail':
    'Mantenere la vecchia scheda bloccata fino a quando il nuovo tentativo non sarà pronto.',
  'loading.new.eyebrow': 'Nuovo enigma',
  'loading.new.title': 'Preparazione della scheda {difficulty}...',
  'loading.new.detail':
    'Creazione di un nuovo puzzle ora. Giocherai tra un attimo.',
  'confirmation.home.eyebrow': 'Ritorno a casa?',
  'confirmation.home.title': 'Lascia questo enigma',
  'confirmation.home.description':
    'I tuoi progressi attuali non si apriranno più automaticamente su questo dispositivo.',
  'confirmation.home.cancel': 'Continua a giocare',
  'confirmation.home.confirm': 'Ritorna alla prima pagina',
  'confirmation.restart.eyebrow': 'Ricominciare da capo?',
  'confirmation.restart.title': 'Ricominciare da capo',
  'confirmation.restart.description':
    'Rigioca questo puzzle dalle sue caratteristiche originali o scegli un puzzle diverso.',
  'confirmation.restart.replay.title': 'Riproduci questo puzzle',
  'confirmation.restart.replay.description':
    'Conserva questi dati e reimposta questo tentativo.',
  'confirmation.restart.different.title': 'Gioca a un puzzle diverso',
  'confirmation.restart.different.description':
    'Scegli un livello per una nuova tavola.',
  'confirmation.restart.different.level': 'Livello per i diversi puzzle',
  'common.cancel': 'Annulla',
  'account.confirm.deleteGame.eyebrow': 'Eliminare la partita salvata?',
  'account.confirm.deleteGame.title': 'Elimina questo gioco',
  'account.confirm.deleteGame.description':
    'Questo puzzle e i relativi progressi verranno rimossi definitivamente dai miei giochi. Questa operazione non può essere annullata.',
  'account.confirm.deleteGame.action': 'Elimina gioco',
  'account.confirm.deleteGame.pending': 'Eliminazione della partita salvata…',
  'account.confirm.deleteAll.eyebrow': 'Eliminare ogni partita salvata?',
  'account.confirm.deleteAll.title': 'Elimina tutti i giochi',
  'account.confirm.deleteAll.description':
    'Tutti gli enigmi e tutti i progressi in I miei giochi verranno rimossi definitivamente. Questa operazione non può essere annullata.',
  'account.confirm.deleteAll.action': 'Elimina tutti i giochi',
  'account.confirm.deleteAll.pending': 'Eliminazione di tutti i giochi…',
  'account.confirm.revoke.eyebrow': 'Sicurezza dell’account',
  'account.confirm.revoke.title': 'Esci da tutti i dispositivi',
  'account.confirm.revoke.description':
    'Uscirai da tutti i dispositivi, incluso questo. Il tuo account e le partite salvate resteranno disponibili.',
  'account.confirm.revoke.action': 'Esci da tutti i dispositivi',
  'account.confirm.revoke.pending': 'Uscita da tutti i dispositivi…',
  'account.confirm.deleteAccount.eyebrow': 'Azione permanente',
  'account.confirm.deleteAccount.title': 'Elimina il tuo account',
  'account.confirm.deleteAccount.description':
    'La tua identità, ogni sessione a cui hai effettuato l’accesso e tutti i giochi salvati verranno rimossi definitivamente. Il catalogo dei puzzle condivisi non viene influenzato.',
  'account.confirm.deleteAccount.action': 'Elimina account',
  'account.confirm.deleteAccount.pending': 'Eliminazione dell’account…',
  'account.confirm.typeEmail': 'Digita {email} per confermare',
  'account.label': 'Conto',
  'account.continue.title': 'Continua su altri dispositivi',
  'account.continue.detail':
    'Accedi per salvare automaticamente il gioco attivo di questo browser.',
  'account.signIn': 'Accedi con Google',
  'account.signIn.short': 'Accedi',
  'game.title': 'Puzzle {difficulty}',
  'game.statusActions': 'Stato del gioco e azioni',
  'game.elapsed': 'Tempo trascorso',
  'game.mistakes': 'Errori {count}',
  'game.resume': 'Riprendi',
  'game.pause': 'Pausa',
  'status.resumed': 'L’enigma è ripreso.',
  'status.paused': 'L’enigma è in pausa.',
  'status.restarted':
    'Il puzzle è stato riavviato. Nuovo tentativo, stesso enigma.',
  'status.hintClosed':
    'Suggerimento chiuso. Il tuo puzzle è rimasto invariato.',
  'status.strategyApplied':
    'Strategia applicata. Puoi annullarlo in un solo passaggio.',
  'status.correctionApplied':
    'Correzione applicata. Puoi annullarlo in un solo passaggio.',
  'status.hintAlreadyApplied':
    'Questo suggerimento si riflette già nel tabellone.',
  'status.hintRefreshed':
    'La griglia è cambiata, quindi il suggerimento è stato aggiornato.',
  'status.accountSaved': 'Gioco salvato sul tuo account.',
  'status.waitBeforeLeaving':
    'Attendi le mosse in sospeso prima di lasciare questo puzzle.',
  'status.selectEditableCell':
    'Seleziona una cella modificabile prima di inserire un numero.',
  'status.savingAccount': 'Salvataggio del gioco locale sul tuo account…',
  'status.restoring': 'Ripristino del tuo puzzle...',
  'status.restored': 'Il tuo puzzle locale è stato ripristinato.',
  'status.puzzleReady': 'Puzzle {difficulty} pronto.',
  'status.puzzleRestored': 'Puzzle {difficulty} restaurato.',
  'status.waitBeforeStarting':
    'Attendi le mosse in sospeso prima di iniziare un altro puzzle.',
  'status.solved': 'Risolto! Ottimo lavoro.',
  'status.moveSaved': 'Mossa salvata.',
  'status.waitBeforeHint':
    'Attendi le mosse in sospeso prima di aprire un suggerimento.',
  'status.hintReady': 'Suggerimento pronto. Inizia con il passaggio 1.',
  'status.openingSaved': 'Apertura della partita salvata...',
  'status.savedDeleted': 'Gioco salvato eliminato.',
  'status.allDeleted': 'Tutti i giochi salvati cancellati.',
  'status.signedOut':
    'Disconnesso. I giochi del tuo account rimangono salvati.',
  'status.revoked':
    'Hai effettuato l’uscita da tutti i dispositivi. Accedi di nuovo per continuare.',
  'status.accountDeleted': 'Account e giochi salvati eliminati.',
  'retry.saving': 'Prova a salvare di nuovo',
  'retry.restoring': 'Prova a eseguire nuovamente il ripristino',
  'retry.connection': 'Controllare la connessione',
  'retry.starting': 'Prova a ricominciare',
  'retry.move': 'Riprovare lo spostamento',
  'retry.hint': 'Prova di nuovo il suggerimento',
  'retry.time': 'Riprova risparmiando tempo',
  'retry.progress': 'Riprova a salvare i progressi',
  'retry.leaving': 'Prova ad uscire di nuovo',
  'retry.opening': 'Prova ad aprire di nuovo',
  'retry.deleting': 'Prova a eliminare di nuovo',
  'retry.signOut': 'Prova a uscire di nuovo',
  'retry.revoke': 'Riprova a uscire da tutti i dispositivi',
  'retry.deleteAccount': 'Prova a eliminare nuovamente l’account',
  'error.accountSave':
    'Il tuo gioco locale è sicuro, ma non è stato possibile salvarlo sul tuo account.',
  'error.restoring': 'Non è stato possibile ripristinare il tuo puzzle.',
  'error.connection':
    'Impossibile raggiungere il servizio di gioco. Controlla la connessione e riprova.',
  'error.http':
    'Il servizio di gioco ha restituito l’errore {status}. Per favore riprova.',
  'error.unavailable':
    'Il servizio di gioco è temporaneamente non disponibile. La tua tavola è al sicuro; riprova.',
  'error.starting': 'Impossibile avviare il gioco.',
  'error.signInAgain': 'Accedi di nuovo per salvare le mosse.',
  'error.localUnavailable': 'Il gioco locale non è disponibile.',
  'error.move': 'Impossibile salvare la mossa.',
  'error.currentUnavailable': 'Il gioco attuale non è disponibile.',
  'error.hintChanged':
    'La griglia è cambiata durante la preparazione del suggerimento.',
  'error.hint': 'Non è stato possibile preparare il suggerimento.',
  'error.time': 'Impossibile salvare l’ultimo tempo di gioco.',
  'error.timer': 'Non è stato possibile salvare l’ultimo stato del timer.',
  'error.leaving': 'Impossibile risolvere il puzzle locale.',
  'error.opening': 'Impossibile aprire la partita salvata.',
  'error.deleteGame': 'Impossibile eliminare la partita salvata.',
  'error.deleteAll': 'Impossibile eliminare i giochi salvati.',
  'error.signOut': 'Non è stato possibile uscire dall’account.',
  'error.revoke': 'Le sessioni non potevano essere revocate.',
  'error.deleteAccount': 'Impossibile eliminare l’account.',
  'error.invalid-request': 'La richiesta non è valida.',
  'error.invalid-json': 'La richiesta contiene JSON non valido.',
  'error.unsupported-media-type': 'La richiesta Content-Type non è supportata.',
  'error.payload-too-large': 'La richiesta è troppo grande.',
  'error.unauthorized': 'È necessaria l’autorizzazione.',
  'error.forbidden-origin': 'L’origine di questa richiesta non è consentita.',
  'error.session-not-found': 'La sessione di gioco non è stata trovata.',
  'error.revision-conflict':
    'La griglia è cambiata prima che questa mossa venisse applicata.',
  'error.invalid-session': 'La sessione di gioco non è valida.',
  'error.invalid-action': 'Questa azione di gioco non è valida.',
  'error.invalid-cell': 'Questa cella non è valida.',
  'error.immutable-cell': 'Una determinata cella non può essere modificata.',
  'error.note-not-allowed':
    'I candidati non possono essere modificati in questa cella.',
  'error.no-undo': 'Non c’è alcuna azione da annullare.',
  'error.no-redo': 'Non c’è alcuna azione da ripetere.',
  'error.no-hint': 'Nessun suggerimento è disponibile.',
  'error.stale-hint':
    'La griglia è cambiata dopo la preparazione di questo suggerimento.',
  'error.persistence-failed': 'Impossibile salvare il gioco.',
  'error.internal-error': 'Impossibile completare la richiesta.',
  'error.account-unavailable':
    'Le funzionalità dell’account non sono disponibili.',
  'error.account-unauthorized':
    'È richiesta una sessione di candidatura valida.',
  'error.csrf-failed':
    'Non è stato possibile verificare questo accesso. Accedi di nuovo.',
  'error.account-game-not-found': 'La partita salvata non è stata trovata.',
  'error.guest-revision-conflict':
    'Il gioco locale è cambiato prima che questa azione fosse applicata.',
  'error.guest-claim-conflict':
    'Questo gioco locale è già stato salvato su un account.',
  'error.malformedDescriptor':
    'Non è stato possibile visualizzare la spiegazione.',
  'account.close': 'Chiudi il pannello dell’account',
  'account.games.title': 'I miei giochi',
  'account.games.deleteAll': 'Elimina tutto',
  'account.games.deletingAll': 'Eliminazione di tutto...',
  'account.games.empty': 'Nessun gioco salvato ancora.',
  'account.games.puzzle': 'Puzzle {difficulty}',
  'account.games.finished': 'Finito',
  'account.games.inProgress': 'In corso',
  'account.games.saved': 'Partita salvata',
  'account.games.open': 'Aperto',
  'account.games.opening': 'Apertura…',
  'account.games.delete': 'Elimina',
  'account.games.deleting': 'Eliminazione…',
  'account.signOut': 'Esci',
  'account.signingOut': 'Uscita…',
  'account.settings': 'Impostazioni dell’account',
  'account.revoke': 'Esci da tutti i dispositivi',
  'account.delete': 'Elimina account',
  'board.label': 'Tabellone del gioco del Sudoku',
  'board.cell.given': 'dato {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'vuoto, candidati {candidates}',
  'board.cell.empty': 'vuoto',
  'board.hint.focus': 'suggerimento di messa a fuoco',
  'board.hint.premise': 'indizio di prove',
  'board.hint.eliminated': 'candidato eliminato',
  'board.hint.conclusion': 'suggerimento conclusione',
  'board.hint.problem': 'necessita di correzione',
  'board.hint.extra': 'candidato impossibile',
  'board.hint.group': 'gruppo {group}',
  'board.hint.chain': 'posizione catena {position}',
  'board.paused.title': 'L’enigma è in pausa',
  'board.paused.detail': 'Il tuo tempo è fermo.',
  'hint.label': 'Suggerimento',
  'hint.close': 'Chiudi',
  'hint.strategy.grade': 'Strategia {grade}',
  'hint.applying': 'Applicazione del suggerimento...',
  'hint.refreshing': 'Suggerimento rinfrescante...',
  'hint.step': 'Passo {current} di {total}',
  'hint.legend.label': 'Legenda dei suggerimenti visivi',
  'hint.legend.strong': 'Solido: deve contenere',
  'hint.legend.weak': 'Tratteggiato: non possono entrambi',
  'hint.legend.implication': 'Freccia: implicazione',
  'hint.legend.groups': 'A/B: gruppi alternati',
  'hint.legend.order': 'Numeri: ordine della catena',
  'hint.back': 'Indietro',
  'hint.next': 'Avanti',
  'hint.apply': 'Applica suggerimento',
  'controls.label': 'Controlli di gioco',
  'controls.digit.note': 'Aggiungi o rimuovi nota {digit}',
  'controls.digit.enter': 'Inserisci {digit}',
  'controls.hint.preparing': 'Suggerimento per la preparazione...',
  'controls.hint.preparingDetail':
    'Mantenere il puzzle visibile mentre si prepara il passaggio successivo.',
  'controls.complete.eyebrow': 'Puzzle completo',
  'controls.complete.title': 'Risolto in {time}',
  'controls.complete.detail':
    'Mantieni il ritmo con un’altra tavola {difficulty} o scegli un livello diverso.',
  'controls.complete.another': 'Gioca un altro {difficulty}',
  'controls.complete.replay': 'Riproduci questo puzzle',
  'controls.complete.choose': 'Scegli un altro livello',
  'controls.pad': 'Tastierino numerico',
  'controls.pad.notes': 'Tastierino numerico, modalità note',
  'controls.modes': 'Modalità di input',
  'controls.notes.on': 'Note su',
  'controls.notes.off': 'Note fuori',
  'controls.candidates.on': 'I candidati su',
  'controls.candidates.off': 'Candidati fuori',
  'controls.actions': 'Azioni puzzle',
  'controls.erase': 'Cancella',
  'controls.undo': 'Annulla',
  'controls.undoing': 'Annullamento…',
  'controls.redo': 'Rifare',
  'controls.redoing': 'Rifacimento...',
  'controls.hint.reveal': 'Rivela un suggerimento',
  'controls.shortcuts': 'Scorciatoie da tastiera',
  'controls.shortcuts.move': 'Muoviti',
  'controls.shortcuts.arrows': 'Tasti freccia',
  'controls.shortcuts.enter': 'Inserisci un numero',
  'controls.shortcuts.notes': 'Note/candidati',
  'controls.shortcuts.or': 'o',
  'controls.shortcuts.pause': 'Metti in pausa o riprendi',
  'controls.shortcuts.hint': 'Apri, avanza o applica un suggerimento',
  'controls.shortcuts.hintOther': 'Altri controlli dei suggerimenti',
  'hint.target.candidate.visible': 'questo candidato evidenziato',
  'hint.target.candidate.accessible':
    'candidato {value} alla riga {row}, colonna {column}',
  'hint.target.cell.visible': 'questa cella evidenziata',
  'hint.target.cell.accessible': 'riga {row}, colonna {column}',
  'hint.target.unit.visible': 'questo ha evidenziato {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'fila',
  'hint.target.column': 'colonna',
  'hint.target.box': 'scatola',
  'chrome.home': 'Sudoku a casa',
  'chrome.appearance': 'Aspetto',
  'chrome.theme.use': 'Utilizza il tema {theme}',
  'chrome.theme.systemTitle': 'Tema di sistema ({theme})',
  'chrome.theme.title': 'Tema {theme}',
  'chrome.theme.system': 'Sistema',
  'chrome.theme.systemName': 'sistema',
  'chrome.theme.light': 'luce',
  'chrome.theme.dark': 'buio',
  'chrome.connection.connecting': 'Connessione',
  'chrome.connection.unavailable': 'Servizio non disponibile',
  'chrome.footer.tagline': 'Gioco ponderato, senza distrazioni.',
  'chrome.footer.privacy': 'Privacy',
  'chrome.footer.terms': 'Termini',
  'chrome.footer.input': 'Tastiera e touch pronti',
};
