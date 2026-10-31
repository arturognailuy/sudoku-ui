import type { MessageCatalog } from './types';

export const fil: MessageCatalog = {
  'common.language.label': 'Wika',
  'common.language.auto': 'Auto',
  'common.language.en': 'Ingles',
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
  'accessibility.language.changed': 'Wika ay binago sa {language}.',
  'common.difficulty.easy': 'Madali',
  'common.difficulty.medium': 'Medium\nMatigas ang',
  'common.difficulty.hard': '',
  'common.difficulty.expert': 'Eksperto',
  'common.difficulty.evil': 'Kasamaan\nMadali ang',
  'difficulty.easy.name': '',
  'difficulty.medium.name': 'Medium',
  'difficulty.hard.name': 'Matigas',
  'difficulty.expert.name': 'Eksperto',
  'difficulty.evil.name': 'Kasamaan',
  'strategy.naked-single.name': 'Hubad na Single',
  'strategy.hidden-single.name': 'Nakatagong Single',
  'strategy.naked-pair.name': 'Hubad na Pares',
  'strategy.naked-triple.name': 'Hubad na Triple',
  'strategy.pointing-pair.name': 'Mga Pares ng Pagturo / Box-Line Reduction',
  'strategy.hidden-pair.name': 'Nakatagong Pares',
  'strategy.x-wing.name': 'X-Wing',
  'strategy.xy-wing.name': 'XY-Wing',
  'strategy.hidden-triple.name': 'Nakatagong Triple',
  'strategy.w-wing.name': 'W-Wing',
  'strategy.swordfish.name': 'Isda ng espada',
  'strategy.naked-quad.name': 'Hubad na Quad',
  'strategy.simple-coloring.name': 'Simpleng Pangkulay',
  'strategy.hidden-quad.name': 'Nakatagong Quad',
  'strategy.xyz-wing.name': 'XYZ-Wing',
  'strategy.jellyfish.name': 'Dikya',
  'strategy.bug-plus-one.name': 'BUG+1',
  'strategy.unique-rectangle.name': 'Natatanging Uri ng Parihaba 1',
  'strategy.unique-rectangle-2.name': 'Natatanging Uri ng Parihaba 2',
  'strategy.unique-rectangle-3.name': 'Natatanging Uri ng Parihaba 3',
  'strategy.unique-rectangle-4.name': 'Natatanging Uri ng Parihaba 4',
  'strategy.x-cycles.name': 'X-Cycles',
  'strategy.xy-chain.name': 'XY-Chain',
  'strategy.backtracker.name': 'Backtracker',
  'hint.value-correction.title': 'Ayusin ang halagang ito',
  'hint.candidate-correction.title': 'Ayusin ang cell ng kandidatong ito',
  'hint.value-correction.summary':
    'Ang halaga sa {cell} ay sumasalungat sa puzzle. I-clear ito bago magpatuloy.',
  'hint.candidate-correction.summary':
    'Muling itayo ang mga kandidato sa {cell} mula sa mga tinatanggap na halaga sa row, column, at box nito bago magpatuloy.',
  'hint.strategy.summary':
    'Magsagawa ng mga hakbang na {steps} upang maunawaan at mailapat ang {strategy}.',
  'hint.value-correction.observe':
    'Suriin ang {cell}. Ang halaga nito ay sumasalungat sa board.',
  'hint.value-correction.conclude':
    'I-clear ang halaga sa {cell} para masuri ang grid ng kandidato sa susunod.',
  'hint.candidate-correction.observe':
    'Suriin ang {cell}. Ang mga kandidato nito ay hindi tugma sa lupon.',
  'hint.candidate-correction.compare':
    'Simulan muli ang cell na ito mula sa mga tinatanggap na halaga sa row, column, at box nito.',
  'hint.candidate-correction.conclude':
    'I-reset ang mga kandidato sa {cell} sa bawat digit na pinapayagan ng row, column, at box nito.',
  'hint.strategy.observe':
    'Suriin ang mga naka-highlight na cell at kandidato, pati ang kaugnay na mga row, column, at kahon.',
  'hint.strategy.compare':
    'Paghambingin ang mga naka-highlight na limitasyon upang matukoy ang tanging posibleng resulta.',
  'hint.strategy.conclude':
    'Ilapat ang naka-highlight na resulta. Ang pattern na ito ay {strategy}.',
  'hint.coloring.pair':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digit}, at eksaktong isa sa dalawang cell ang tamang puwesto. Lagyan ang dalawang posibilidad ng label na A at B.',
  'hint.coloring.chain':
    'Sundan ang bawat ugnayang ipinapakita ng tuloy-tuloy na linya; pinagdurugtong nito ang tanging dalawang puwesto ng {digit} sa isang row, column, o kahon. Kailangang magsalitan ang mga label sa buong kadena: A sa {group_a} at B sa {group_b}.',
  'hint.coloring.alternatives':
    'Maaaring nasa lahat ng cell na A ang {digit} at wala sa mga cell na B, o nasa lahat ng cell na B ang {digit} at wala sa mga cell na A. Hindi kailangang malaman kung alin sa dalawang pagtatalaga ang tama.',
  'hint.coloring.elimination':
    'Nakikita ng {cell} ang puwestong may label na A sa {group_a_cell} at ang puwestong may label na B sa {group_b_cell}. Alinman sa dalawang grupo ang tama, isa sa mga puwestong nakikita nito ang may {digit}, kaya hindi maaaring manatili roon ang kandidatong iyon.',
  'hint.coloring.apply':
    'Alisin ang {candidates}. Nakikita ng bawat apektadong cell ang isang puwestong A at isang puwestong B para sa {colored_digit}; alinman sa dalawang pagtatalaga ang tama, nasa isa sa mga nakikitang puwesto ang digit na iyon, kaya hindi ito maaaring manatili sa apektadong cell. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.coloring.place':
    'Pinipilit ng mga naka-link na kandidato para sa {colored_digit} ang resulta. Ilagay ang {digit} sa {cell}. Ang pattern na ito ay {strategy}.',
  'hint.x-cycle.opening':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digit}. Kaya kailangang may {digit} sa isa sa dalawang cell na iyon.',
  'hint.x-cycle.assume':
    'Ipagpalagay na hindi {digit} ang {start}. Kung gayon, dapat {digit} ang {forced}. Dahil hindi na maaaring {digit} ang {blocked}, sa {unit} ay {result} na lamang ang posibleng puwesto ng {digit}.',
  'hint.x-cycle.follow':
    'Dahil {digit} ang {true_cell}, hindi maaaring {digit} ang {blocked}. Kaya sa {unit}, {result} na lamang ang posibleng puwesto ng {digit}.',
  'hint.x-cycle.close':
    'Dahil {digit} ang {true_cell}, hindi maaaring {digit} ang {blocked}. Sa {unit}, {result} na lamang ang maaaring paglagyan ng {digit}.',
  'hint.x-cycle.place':
    'Ang pagpapalagay na hindi {digit} ang {assumption} ay humahantong pabalik sa konklusyong {digit} ang {cell}, kaya mali ang pagpapalagay. Ilagay ang {digit} sa {cell}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.xy-chain.start':
    'Dalawa lamang ang kandidato ng {cell}: {first_digit} at {second_digit}. Maaaring {endpoint_digit} ang halaga nito; kung hindi, tiyak na {other_digit} ito, hindi {endpoint_digit}.',
  'hint.xy-chain.assume':
    'Ipagpalagay na hindi {endpoint_digit} ang {start}. Kung gayon, dapat {start_value} ito. Dahil magkasama sa {first_unit} ang {start} at {middle}, hindi maaaring {start_value} ang {middle}, kaya dapat {middle_value} ito. Dahil dito, hindi maaaring {middle_value} ang {result} sa {second_unit}, kaya dapat {result_value} ito.',
  'hint.xy-chain.follow':
    'Dahil {start_value} ang {start}, hindi maaaring {start_value} ang {middle} sa {first_unit}, kaya dapat {middle_value} ito. Magkasama sa {second_unit} ang {middle} at {result}, kaya hindi maaaring {middle_value} ang {result} at dapat {result_value} ito.',
  'hint.xy-chain.reach':
    'Dahil {start_value} ang {start}, hindi maaaring {shared_digit} ang dulong cell na {endpoint}. {endpoint_digit} lamang ang isa pa nitong kandidato, kaya dapat {endpoint_digit} ang halaga nito.',
  'hint.xy-chain.place':
    'Kung {endpoint_digit} ang {first_endpoint}, nasa unang dulo ang {endpoint_digit}. Kung hindi, sa pagsunod sa kadena ay mapupunta ang {endpoint_digit} sa kabilang dulo na {second_endpoint}. Kaya hindi bababa sa isang dulo ang may {endpoint_digit}. Kapwa nakikita ng {cell} ang dalawang dulo, kaya hindi ito maaaring {endpoint_digit}. Ilagay ang {digit} sa {cell}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'Magsimula sa {cell}. Nasa row, column, at kahon nito ang {excluded_digits}.',
  'hint.naked-single.only':
    'Dahil dito, {digit} na lamang ang maaaring ilagay sa {cell}.',
  'hint.naked-single.apply':
    'Ilagay ang {digit} sa {cell}. Ang cell na iisa lamang ang kandidato ay isang {strategy}.',
  'hint.hidden-single.inspect':
    'Sa {unit}, tingnan kung saang cell maaaring ilagay ang {digit}.',
  'hint.hidden-single.blockers':
    'Dahil may {digit} na sa {blockers}, hindi na maaaring maging {digit} ang alinmang ibang bakanteng cell sa {unit}.',
  'hint.hidden-single.only': 'Sa {cell} na lamang maaaring ilagay ang {digit}.',
  'hint.hidden-single.apply':
    'Ilagay ang {digit} sa {cell}. Kapag iisa lamang ang posibleng cell ng isang digit sa isang row, column, o kahon, ito ay isang {strategy}.',
  'hint.naked-pair.inspect':
    'Magsimula sa {unit}: {first_digit} o {second_digit} lamang ang maaaring ilagay sa {cell}.',
  'hint.naked-pair.match':
    'Ganoon din sa {cell}: {first_digit} at {second_digit} lamang ang mga kandidato nito.',
  'hint.naked-pair.reserve':
    'Sa dalawang cell na ito mapupunta ang {digits}, sa alinmang ayos. Kaya maaaring alisin ang kandidatong {digit} sa lahat ng iba pang cell sa {unit}.',
  'hint.naked-pair.apply':
    'Alisin ang {candidates}; walang digit na inilalagay sa hakbang na ito. Ang pattern na ito ay isang {strategy}.',
  'hint.naked-triple.first':
    'Magsimula sa {unit}: {first_digit} o {second_digit} lamang ang maaaring ilagay sa {cell}.',
  'hint.naked-triple.second':
    'Isama ang {cell}; {first_digit} o {second_digit} lamang din ang maaaring ilagay rito.',
  'hint.naked-triple.third':
    'Isama rin ang {cell}; {first_digit} o {second_digit} lamang ang maaaring ilagay rito. Sa kabuuan, limitado sa {reserved_digits} ang mga kandidato ng tatlong cell.',
  'hint.naked-triple.consequence':
    'Sa tatlong cell na ito mapupunta ang {reserved_digits}, sa alinmang ayos. Kaya alisin ang {removed_digits} sa {cell}; {remaining_digit} na lamang ang matitira.',
  'hint.naked-triple.apply':
    'Ilagay ang {digit} sa {cell}. Kapag limitado sa parehong tatlong digit ang kabuuang mga kandidato ng tatlong cell, bumubuo ang mga ito ng isang {strategy}.',
  'hint.naked-quad.cell':
    'Sa {unit}, limitado sa {digits} ang mga kandidato ng {cell}.',
  'hint.subset-reservation.observe':
    'Sa {unit}, {digits} lang ang laman ng {cells}.',
  'hint.subset-reservation.explain':
    'Nakalaan ang {digits} sa mga cell na iyon sa {unit}, kaya hindi maaaring ilagay ang mga digit na iyon sa alinmang ibang cell doon.',
  'hint.subset-reservation.apply':
    'Alisin ang {candidates}. Ang pattern na ito ay {strategy}.',
  'hint.subset-reservation.place':
    'Ilagay ang {digit} sa {cell}. Ang pattern na ito ay {strategy}.',
  'hint.hidden-subset-confinement.observe':
    'Sa {unit}, sa {cells} lamang maaaring lumitaw ang {digits}.',
  'hint.hidden-subset-confinement.explain':
    'Dahil nakatakda ang {digits} sa mga selulang iyon sa {unit}, hindi maaaring magkaroon doon ng ibang kandidato.',
  'hint.hidden-subset-confinement.apply':
    'Alisin ang {candidates} sa mga nakatakdang selula. Ang pattern na ito ay {strategy}.',
  'hint.hidden-subset-confinement.place':
    'Ilagay ang {digit} sa {cell} matapos alisin ang ibang kandidato. Ang pattern na ito ay {strategy}.',
  'hint.hidden-pair.first':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang kandidatong {digit}.',
  'hint.hidden-pair.second':
    'Sa parehong dalawang cell lamang din maaaring ilagay ang kandidatong {digit}. Kaya ang {digits} ay kailangang mapunta sa {cells}, sa alinmang ayos.',
  'hint.hidden-pair.consequence':
    'Nakalaan ang dalawang cell na iyon para sa {digits}, kaya kailangang alisin ang iba pa nilang kandidato: {candidates}.',
  'hint.hidden-pair.apply':
    'Alisin ang {candidates}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.hidden-triple.first':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang kandidatong {digit}.',
  'hint.hidden-triple.second':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digits}.',
  'hint.hidden-triple.third':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digits}.',
  'hint.hidden-triple.consequence':
    'Dahil sa mga cell na iyon lamang maaaring ilagay ang {digits} sa {unit}, hindi maaaring manatili roon ang alinmang ibang kandidato.',
  'hint.hidden-triple.apply':
    'Alisin ang {candidates} sa mga cell na iyon. Ang pattern na ito ay tinatawag na {strategy}.',
  'hint.hidden-quad.first':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang kandidatong {digit}.',
  'hint.hidden-quad.second':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digits}.',
  'hint.hidden-quad.third':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digits}.',
  'hint.hidden-quad.fourth':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang {digits}.',
  'hint.hidden-quad.consequence':
    'Dahil sa mga cell na iyon lamang maaaring ilagay ang {digits} sa {unit}, hindi maaaring manatili roon ang alinmang ibang kandidato.',
  'hint.hidden-quad.apply':
    'Alisin ang {candidates} sa mga cell na iyon. Ang pattern na ito ay tinatawag na {strategy}.',
  'hint.pointing-pair.first':
    'Sa {source_unit}, magsimula sa kandidatong {digit} sa {cell}, saka hanapin ang lahat ng iba pang puwestong maaaring paglagyan ng {digit} sa kahong iyon.',
  'hint.pointing-pair.second':
    'Sa {source_unit}, {cell} na lamang ang isa pang posibleng puwesto ng {digit}. Parehong nasa {intersection_unit} ang dalawang puwesto.',
  'hint.pointing-pair.consequence':
    'Dahil ang {digit} sa {source_unit} ay kailangang mapunta sa isa sa dalawang puwesto nito sa {intersection_unit}, alisin ang {candidate} sa lahat ng iba pang cell sa {intersection_unit}.',
  'hint.pointing-pair.apply':
    '{digit} na lamang ang natitirang kandidato sa {cell}, kaya ilagay roon ang {digit}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.intersection-confinement.observe':
    'Sa {source_unit}, ang kandidatong {digit} ay nakakulong sa {intersection_unit} sa {cells}.',
  'hint.intersection-confinement.explain':
    'Dahil ang bawat {digit} sa {source_unit} ay nasa {intersection_unit}, ang mga cell sa labas ng pinagmulan ngunit sa loob ng intersection ay hindi maaaring maglaman nito.',
  'hint.intersection-confinement.apply':
    'Alisin ang kandidatong {digit} mula sa {cells}. Ang pattern na ito ay {strategy}.',
  'hint.intersection-confinement.place':
    'Ilagay ang {digit} sa {cell} pagkatapos ilapat ang intersection. Ang pattern na ito ay {strategy}.',
  'hint.fish-confinement.observe':
    'Sa mga unit na {base_units}, nasa {cover_units} lamang ang mga posibleng puwesto ng kandidatong {digit}.',
  'hint.fish-confinement.explain':
    'Nalilimitahan ang candidate na {digit} mula {base_units} patungong {cover_units}, kaya dapat itong matanggap ng mga cover unit sa mga naka-highlight na base position.',
  'hint.swordfish.consequence':
    'Sa bawat unit sa {base_units}, kailangang mailagay ang isang {digit} sa loob ng {cover_units}. Sa kabuuan, masasakop ng mga paglalagay na ito ang tatlong tumatawid na unit—tig-isa bawat unit—kaya wala nang ibang kandidatong {digit} na maaaring manatili sa mga iyon.',
  'hint.jellyfish.consequence':
    'Sa bawat unit sa {base_units}, kailangang mailagay ang isang {digit} sa loob ng {cover_units}. Sa kabuuan, masasakop ng mga paglalagay na ito ang apat na tumatawid na unit—tig-isa bawat unit—kaya wala nang ibang kandidatong {digit} na maaaring manatili sa mga iyon.',
  'hint.fish-confinement.apply':
    'Alisin ang kandidatong {digit} sa {cells}. Ang paraang ito ay {strategy}.',
  'hint.x-wing.first':
    'Sa {base_unit}, nasa {cover_units} lamang ang mga posibleng puwesto ng kandidatong {digit}.',
  'hint.x-wing.second':
    'Sa ikalawang {base_unit}, limitado rin sa {cover_units} ang mga posibleng puwesto ng kandidatong {digit}. Kaya iisang pares ng tumatawid na unit ang pinagsasaluhan ng dalawang base unit.',
  'hint.x-wing.consequence':
    'Sa bawat unit sa {base_units}, kailangang mailagay ang isang {digit} sa loob ng {cover_units}. Magkasama, masasakop ng dalawang {digit} na iyon ang parehong tumatawid na unit, kaya maaaring alisin doon ang lahat ng iba pang kandidatong {digit}.',
  'hint.x-wing.apply':
    'Alisin ang kandidatong {digit} sa {cells}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.pivot-wing.observe':
    'Sa {pivot}, ikinonekta ng mga kandidatong {pivot_digits} ang mga wing cell sa {wing_cells}.',
  'hint.pivot-wing.explain':
    'Ang bawat pakpak sa {wing_cells} ay nagbabahagi ng isang kandidato na may pivot sa {pivot}, at ang parehong mga pakpak ay naglalaman ng {shared_digit}. Alinmang kandidato sa pivot ang totoo, ang isang pakpak ay dapat maglaman ng {shared_digit}.',
  'hint.xy-wing.pivot':
    'Dalawa lamang ang kandidato ng sentrong cell na {pivot}: {digits}. Isa sa mga iyon ang halaga nito.',
  'hint.xy-wing.case':
    'Kung {pivot_digit} ang {pivot}, hindi maaaring {pivot_digit} ang sangay na {wing}. Dahil {shared_digit} lamang ang isa pa nitong kandidato, dapat {shared_digit} ang {wing}.',
  'hint.xy-wing.guarantee':
    'Anuman ang maging halaga ng {pivot}, hindi bababa sa isa sa dalawang sangay sa {wing_cells} ang dapat maging {shared_digit}. Hindi kailangang malaman kung alin sa dalawa.',
  'hint.xy-wing.apply':
    'Nakikita ng {cells} ang parehong pakpak na {wing_cells}. Dahil kahit isa ay {shared_digit}, alisin ang kandidatong {shared_digit} sa mga selulang ito. Ang padron na ito ay {strategy}.',
  'hint.xy-wing.place':
    'Kapwa nakikita ng {cell} ang dalawang sangay sa {wing_cells}. Dahil hindi bababa sa isa sa mga iyon ang {shared_digit}, hindi maaaring {shared_digit} ang {cell}. {digit} na lamang ang isa pa nitong kandidato, kaya ilagay roon ang {digit}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.xyz-wing.pivot':
    'Ang mga kandidato lamang ng sentrong cell na {pivot} ay {digits}. Isa sa mga iyon ang halaga nito.',
  'hint.xyz-wing.case':
    'Kung {pivot_digit} ang {pivot}, hindi maaaring {pivot_digit} ang sangay na {wing} dahil magkasama sila sa {unit}. Dahil {shared_digit} lamang ang isa pa nitong kandidato, dapat {shared_digit} ang {wing}.',
  'hint.xyz-wing.pivot-case':
    'Kung {shared_digit} ang {pivot}, nasa sentrong cell na mismo ang {shared_digit}.',
  'hint.xyz-wing.guarantee':
    'Anuman ang maging halaga ng {pivot}, hindi bababa sa isa sa {pattern_cells} ang dapat maging {shared_digit}. Hindi kailangang malaman kung aling cell iyon.',
  'hint.xyz-wing.apply':
    'Mula sa {target}, makikita ang {first_pattern_cell} sa {first_unit}, ang {second_pattern_cell} sa {second_unit}, at ang {third_pattern_cell} sa {third_unit}. Dahil tiyak na nasa kahit isa sa tatlong pattern cell ang {shared_digit}, hindi maaaring {shared_digit} ang {target}. Alisin dito ang kandidatong iyon. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.strong-link-wing.observe':
    'Ang bawat isa sa dalawang cell sa {wing_cells} ay may mga kandidatong {digits} lamang.',
  'hint.strong-link-wing.bridge':
    'Sa {unit}, sa {link_cells} lamang maaaring ilagay ang kandidatong {link_digit}. Kaya kailangang may {link_digit} sa hindi bababa sa isa sa dalawang cell na iyon.',
  'hint.strong-link-wing.force':
    'Kung {link_digit} ang {first_link_cell}, hindi maaaring {link_digit} ang {first_wing_cell}, kaya dapat {forced_digit} ito. Kung {link_digit} naman ang {second_link_cell}, dapat {forced_digit} ang {second_wing_cell}. Samakatuwid, hindi bababa sa isa sa dalawang cell na iyon ang may {forced_digit}.',
  'hint.strong-link-wing.apply':
    'Kahit isa sa {wing_cells} ay {digit}. Alisin ang kandidatong {digit} sa {cells} dahil nakikita ng mga cell na iyon ang pareho. Ang pattern na ito ay tinatawag na {strategy}.',
  'hint.strong-link-wing.place':
    'Hindi bababa sa isa sa dalawang cell sa {wing_cells} ang may {removed_digit}. Dahil kapwa nakikita ng {cell} ang mga ito, alisin dito ang kandidatong {removed_digit}, saka ilagay ang {digit}. Ang paraang ito ay tinatawag na {strategy}.',
  'hint.relational-wing.apply':
    'Alisin ang kandidatong {digit} mula sa {cells}. Ang pattern na ito ay {strategy}.',
  'hint.relational-wing.place':
    'Alisin ang kandidatong {removed_digit} mula sa {cell}, kaya ilagay ang {digit} doon. Ang pattern na ito ay {strategy}.',
  'hint.bug-plus-one.bivalue':
    'Maliban sa {cell}, ang bawat isa sa iba pang {count} bakanteng cell ay may eksaktong dalawang kandidato.',
  'hint.bug-plus-one.trivalue':
    'Tatlo ang kandidato ng {cell}: {digits}. Isa ang lamang nito kumpara sa tig-dalawang kandidato ng bawat ibang bakanteng cell.',
  'hint.bug-plus-one.unit-count':
    'Sa {unit}, may tatlong posibleng puwesto ang kandidatong {digit}, samantalang tig-dalawa lamang ang mga puwesto ng {other_digits}.',
  'hint.bug-plus-one.explain':
    'Sa {units}, may isa pang posibleng puwesto ang kandidatong {digit} kumpara sa {other_digits}. Kung hindi {digit} ang {cell}, magiging tig-dalawa ang mga kandidato ng lahat ng bakanteng cell at hindi na magiging natatangi ang solusyon ng puzzle. Samakatuwid, dapat {digit} ang {cell}.',
  'hint.bug-plus-one.place':
    'Ilagay ang {digit} sa {cell}. Ang kasong ito, kung saan pinananatili ng dagdag na kandidato ang pagiging natatangi ng solusyon, ay tinatawag na {strategy}.',
  'hint.unique-rectangle.rectangle':
    'Ang apat na bakanteng cell sa {cells} ang bumubuo sa mga sulok ng isang parihaba.',
  'hint.unique-rectangle.pair-corners':
    'Sa {cells}, {digits} lamang ang mga kandidato.',
  'hint.unique-rectangle.third-corner':
    '{digits} lamang din ang mga kandidato ng {cell}, kaya pareho na ang pares sa tatlong sulok.',
  'hint.unique-rectangle.expanded-corner':
    'Ang mga kandidato ng {cell} ay {digits}, at tanging ang sulok na ito ang may dagdag na kandidatong {extra_digit}.',
  'hint.unique-rectangle.protect-uniqueness':
    'Kung isa sa pares na {digits} ang ilalagay sa {cell}, maaaring magpalitan ng halaga ang apat na sulok nang walang mababago sa alinmang row, column, o kahon, kaya magkakaroon ng pangalawang wastong solusyon. Alisin ang {digits} at panatilihin ang {extra_digit}.',
  'hint.unique-rectangle.type1-place':
    '{digit} na lamang ang natitira sa {cell}, kaya ilagay ito roon. Ang paraang ito ay {strategy}.',
  'hint.unique-rectangle.observe':
    'Ang mga cell sa {cells} ay bumubuo ng isang parihaba at lahat ay naglalaman ng pares na {digits}.',
  'hint.unique-rectangle.type1':
    'Ang tatlong sulok ay naglalaman ng eksaktong {digits}. Kung ginamit din ng {cell} ang alinmang digit, papayagan ng parihaba ang dalawang mapapalitang solusyon.',
  'hint.unique-rectangle.type2-first-expanded':
    'Ang mga kandidato ng {cell} ay ang pares na {pair}, kasama ang {extra_digit}.',
  'hint.unique-rectangle.type2-shared-extra':
    'Ang mga kandidato rin ng {cell} ay ang pares na {pair}, kasama ang {extra_digit}. Kaya parehong may dagdag na kandidatong {extra_digit} ang dalawang sulok na iyon.',
  'hint.unique-rectangle.type2-protect-uniqueness':
    'Kailangang maging {extra_digit} ang hindi bababa sa isa sa {cells}; kung hindi, maaaring magpalitan ang pares sa parihaba at makabuo ng pangalawang wastong solusyon. Dahil kapwa nakikita ng {target} ang dalawang cell, hindi ito maaaring maging {extra_digit}.',
  'hint.unique-rectangle.type2-place':
    '{digit} na lamang ang natitira sa {cell}, kaya ilagay ito roon. Ang paraang ito ay {strategy}.',
  'hint.unique-rectangle.type2':
    'Ang dalawang pinalawak na sulok sa {cells} ay nagbabahagi ng karagdagang kandidatong {digit}, kaya ang anumang cell na nakakakita sa magkabilang sulok ay hindi maaaring maglaman ng {digit}.',
  'hint.unique-rectangle.type3':
    'Ang mga dagdag na digit na {digits} sa parihaba ay pinagsama sa {cells} bilang nakareserbang subset sa {unit}, kaya maaaring alisin ang mga digit na iyon sa ibang lugar sa unit na iyon.',
  'hint.unique-rectangle.type3-first-expanded':
    'Ang {cell} ay mayroon ding {pair}, kasama ang dagdag na kandidatong {extra_digit}.',
  'hint.unique-rectangle.type3-second-expanded':
    'Ang {cell} ay mayroon ding {pair}, kasama ang dagdag na kandidatong {extra_digit}. Dapat gumamit ng dagdag na digit ang hindi bababa sa isa sa dalawang sulok na ito; kung hindi, maaaring pagpalitin ang {pair} sa apat na sulok at magkaroon ng dalawang solusyon.',
  'hint.unique-rectangle.type3-partner':
    '{digits} lamang ang maaaring ilagay sa {cell}.',
  'hint.unique-rectangle.type3-reserve':
    'Dapat gamitin ng isa sa {corners} ang isa sa {digits}, at ng {partner} ang isa pa. Nakalaan ang dalawang digit na iyon sa {unit}, kaya hindi maaaring maging {removed_digit} ang {target}.',
  'hint.unique-rectangle.type3-place':
    '{digit} na lamang ang natitira sa {cell}. Ilagay ito roon. Ang pattern na ito ay {strategy}.',
  'hint.unique-rectangle.type4-first-expanded':
    'Ang {cell} ay mayroon ding pares na {pair}, kasama ang dagdag na kandidatong {extra_digit}.',
  'hint.unique-rectangle.type4-second-expanded':
    'Ang {cell} ay mayroon ding pares na {pair}, kasama ang dagdag na kandidatong {extra_digit}. Taglay na ngayon ng dalawang sulok na may dagdag na kandidato ang pares ng parihaba.',
  'hint.unique-rectangle.type4':
    'Sa {unit}, sa {cells} lamang maaaring ilagay ang kandidatong {digit}, kaya eksaktong isa sa dalawang cell na iyon ang magkakaroon nito. Hindi maaaring ilagay ang kandidatong {removed_digit} sa alinman sa dalawang sulok na may dagdag na kandidato, dahil magbibigay iyon ng pangalawang wastong solusyon sa pamamagitan ng pagpapalitan ng pares.',
  'hint.unique-rectangle.type4-apply':
    'Alisin ang kandidatong {digit} sa {cells}. Ang ugnayang {strategy} ang nagpapanatili sa natatanging solusyon.',
  'hint.unique-rectangle.apply':
    'Alisin ang {candidates}. Ang kakaibang relasyon na ito ay {strategy}.',
  'hint.unique-rectangle.place':
    'Ilagay ang {digit} sa {cell} pagkatapos ilapat ang uniqueness relationship. Ang pattern na ito ay {strategy}.',
  'hint.implication-chain.observe':
    'Magsimula sa {cell}, na may mga candidate lang na {digits}.',
  'hint.implication-chain.explain':
    'Magkapareho ng candidate ang {from} at {to} at nakikita nila ang isa’t isa, kaya hindi maaaring tama ang candidate sa pareho; nagpapatuloy ang implication.',
  'hint.implication-chain.apply':
    'Dapat may {digit} ang isang endpoint, kaya alisin ang candidate na {digit} sa {cells}. Ang pattern na ito ay {strategy}.',
  'hint.narration.apply': 'Ilapat ang bawas:',
  'hint.narration.look-at': 'Tingnan mo',
  'hint.narration.value-conflict':
    '. Ang inilagay na halaga nito ay sumasalungat sa puzzle.',
  'hint.narration.clear-value': 'I-clear ang halaga sa',
  'hint.narration.clear-value-tail':
    'upang ang grid ng kandidato ay maaaring masuri sa susunod.',
  'hint.narration.candidate-inconsistent':
    '. Ang estado ng kandidato nito ay hindi naaayon sa palaisipan.',
  'hint.narration.reset-candidates': 'I-reset ang kandidatong itinakda sa',
  'hint.narration.reset-candidates-tail':
    'sa bawat digit na pinapayagan ng tinatanggap na row, column, at box value.',
  'hint.narration.only-candidate': '. Mayroon lamang itong isang kandidato:',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit':
    'Dahil walang ibang digit ang maaaring pumasok',
  'hint.narration.place': ', lugar',
  'hint.narration.naked-single-tail': 'doon. Ito ay tinatawag na Naked Single.',
  'hint.narration.in-unit': 'Sa',
  'hint.narration.consider-digit':
    ', isaalang-alang kung saan \nMaaaring lumitaw ang',
  'hint.narration.can-appear': '.',
  'hint.narration.other-cells':
    'Ang bawat iba pang walang laman na cell sa \nHindi maaaring maglaman ang',
  'hint.narration.cannot-contain': '',
  'hint.narration.leaving-only': ', aalis lang',
  'hint.narration.because-unit': 'Dahil \nKailangan pa rin ng',
  'hint.narration.still-needs': '',
  'hint.narration.only-cell': 'at \nAng',
  'hint.narration.hidden-single-tail': 'ay ang tanging posibleng cell, lugar',
  'hint.narration.hidden-single-name':
    'doon. Ito ay tinatawag na Hidden Single.',
  'hint.narration.place-result': 'lugar',
  'hint.narration.in': 'sa',
  'hint.narration.remove': 'alisin ang kandidato',
  'hint.narration.from': 'mula sa',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. Ito ang resulta ng {strategy}.',
  'welcome.eyebrow': 'Bagong palaisipan',
  'welcome.title': 'Piliin ang iyong kahirapan',
  'welcome.lede': 'Pumili ng level, pagkatapos ay magsimula kapag handa ka na.',
  'welcome.difficulty': 'Kahirapan',
  'welcome.start': 'Simulan ang {difficulty} puzzle',
  'welcome.starting': 'Nagsisimula ng {difficulty} puzzle…',
  'welcome.preview': 'Sudoku puzzle preview',
  'loading.initial': 'Nilo-load ang iyong puzzle...',
  'loading.account.eyebrow': 'Account',
  'loading.account.title': 'Sine-save ang iyong puzzle sa iyong account...',
  'loading.account.detail':
    'Ang iyong pag-unlad ay nananatili sa device na ito hanggang sa makumpirma ang pag-save ng account.',
  'loading.home.eyebrow': 'Sudoku',
  'loading.home.title': 'Bumabalik sa front page…',
  'loading.home.detail':
    'Sinusuri ang pinakabagong interface bago ipakita ang pagpili ng antas.',
  'loading.restart.eyebrow': 'Parehong puzzle',
  'loading.restart.title': 'Sinisimulan muli ang puzzle na ito…',
  'loading.restart.detail':
    'Panatilihing naka-lock ang lumang board hanggang handa na ang bagong pagsubok.',
  'loading.new.eyebrow': 'Bagong palaisipan',
  'loading.new.title': 'Inihahanda ang iyong {difficulty} board…',
  'loading.new.detail':
    'Gumagawa ng bagong puzzle ngayon. Maglalaro ka sa ilang sandali.',
  'confirmation.home.eyebrow': 'Uuwi?',
  'confirmation.home.title': 'Iwanan ang puzzle na ito',
  'confirmation.home.description':
    'Ang iyong kasalukuyang pag-unlad ay hindi na awtomatikong magbubukas sa device na ito.',
  'confirmation.home.cancel': 'Ituloy ang paglalaro',
  'confirmation.home.confirm': 'Bumalik sa front page',
  'confirmation.restart.eyebrow': 'Magsimulang muli?',
  'confirmation.restart.title': 'Magsimulang muli',
  'confirmation.restart.description':
    'I-replay ang puzzle na ito mula sa orihinal nitong mga ibinigay, o pumili ng ibang puzzle.',
  'confirmation.restart.replay.title': 'I-replay ang puzzle na ito',
  'confirmation.restart.replay.description':
    'Panatilihin ang mga ibinigay na ito at i-reset ang pagtatangkang ito.',
  'confirmation.restart.different.title': 'Maglaro ng ibang puzzle',
  'confirmation.restart.different.description':
    'Pumili ng level para sa bagong board.',
  'confirmation.restart.different.level': String.raw`Level para sa iba't ibang puzzle`,
  'common.cancel': 'Kanselahin',
  'account.confirm.deleteGame.eyebrow': 'Tanggalin ang naka-save na laro?',
  'account.confirm.deleteGame.title': 'Tanggalin ang larong ito',
  'account.confirm.deleteGame.description':
    'Ang puzzle na ito at ang pag-usad nito ay permanenteng aalisin sa Aking mga laro. Hindi na ito maaaring bawiin.',
  'account.confirm.deleteGame.action': 'Tanggalin ang laro',
  'account.confirm.deleteGame.pending': 'Tinatanggal ang naka-save na laro...',
  'account.confirm.deleteAll.eyebrow': 'Tanggalin ang bawat naka-save na laro?',
  'account.confirm.deleteAll.title': 'Tanggalin ang lahat ng laro',
  'account.confirm.deleteAll.description':
    'Ang bawat puzzle at lahat ng pag-unlad sa Aking mga laro ay permanenteng aalisin. Hindi na ito maaaring bawiin.',
  'account.confirm.deleteAll.action': 'Tanggalin ang lahat ng laro',
  'account.confirm.deleteAll.pending': 'Tinatanggal ang lahat ng laro...',
  'account.confirm.revoke.eyebrow': 'Seguridad ng account',
  'account.confirm.revoke.title': 'Mag-sign out kahit saan',
  'account.confirm.revoke.description':
    'Sina-sign out ka nito sa bawat device, kabilang ang isang ito. Nananatili ang iyong account at mga naka-save na laro.',
  'account.confirm.revoke.action': 'Mag-sign out kahit saan',
  'account.confirm.revoke.pending': 'Nagsa-sign out kahit saan...',
  'account.confirm.deleteAccount.eyebrow': 'Permanenteng aksyon',
  'account.confirm.deleteAccount.title': 'Tanggalin ang iyong account',
  'account.confirm.deleteAccount.description':
    'Ang iyong pagkakakilanlan, bawat naka-sign in na session, at lahat ng naka-save na laro ay permanenteng aalisin. Ang nakabahaging katalogo ng puzzle ay hindi naaapektuhan.',
  'account.confirm.deleteAccount.action': 'Tanggalin ang account',
  'account.confirm.deleteAccount.pending': 'Tinatanggal ang account...',
  'account.confirm.typeEmail': 'I-type ang {email} para kumpirmahin',
  'account.label': 'Account',
  'account.continue.title': 'Magpatuloy sa iba pang mga device',
  'account.continue.detail':
    'Mag-sign in upang awtomatikong i-save ang aktibong laro ng browser na ito.',
  'account.signIn': 'Mag-sign in gamit ang Google',
  'account.signIn.short': 'Mag-sign in',
  'game.title': '{difficulty} puzzle',
  'game.statusActions': 'Katayuan at pagkilos ng laro',
  'game.elapsed': 'Lumipas na oras',
  'game.mistakes': 'Mga Pagkakamali {count}',
  'game.mistakes.label':
    '{count, plural, one{# pagkakamali} other{# pagkakamali}}',
  'game.resume': 'Ipagpatuloy',
  'game.pause': 'I-pause\nIpinagpatuloy ang',
  'status.resumed': 'Puzzle.',
  'status.paused': 'Puzzle ay naka-pause.',
  'status.restarted':
    'Puzzle ay na-restart. Bagong pagtatangka, parehong palaisipan.',
  'status.hintClosed':
    'Hint sarado. Ang iyong palaisipan ay hindi nagbabago.\nInilapat ang',
  'status.strategyApplied':
    'Strategy. Maaari mong i-undo ito sa isang hakbang.\nInilapat ang',
  'status.correctionApplied':
    'Correction. Maaari mong i-undo ito sa isang hakbang.',
  'status.hintAlreadyApplied': 'Ang pahiwatig na ito ay makikita na sa board.',
  'status.hintRefreshed': 'Nagbago ang board, kaya na-refresh ang pahiwatig.',
  'status.accountSaved': 'Laro na na-save sa iyong account.',
  'status.waitBeforeLeaving':
    'Maghintay ng mga nakabinbing galaw bago umalis sa puzzle na ito.',
  'status.selectEditableCell':
    'Pumili ng nae-edit na cell bago magpasok ng numero.',
  'status.savingAccount':
    'Sine-save ang iyong lokal na laro sa iyong account...',
  'status.restoring': 'Nire-restore ang iyong puzzle...',
  'status.restored': 'Ang iyong lokal na puzzle ay naibalik.',
  'status.puzzleReady': '{difficulty} puzzle handa na.\nNa-restore ang',
  'status.puzzleRestored': '{difficulty} puzzle.',
  'status.waitBeforeStarting':
    'Maghintay ng mga nakabinbing galaw bago magsimula ng isa pang puzzle.\nNalutas ang',
  'status.solved': '! Magandang gawa.\nNa-save ang',
  'status.moveSaved': 'Move.',
  'status.waitBeforeHint':
    'Maghintay ng mga nakabinbing galaw bago magbukas ng pahiwatig.\nHanda na ang',
  'status.hintReady': 'Hint. Magsimula sa hakbang 1.',
  'status.openingSaved': 'Binubuksan ang iyong naka-save na laro...',
  'status.savedDeleted': 'Na-save na laro ang tinanggal.',
  'status.allDeleted': 'Lahat ng naka-save na laro ay tinanggal.',
  'status.signedOut':
    'Naka-sign out. Nananatiling naka-save ang iyong mga laro sa account.',
  'status.revoked':
    'Naka-sign out kahit saan. Mag-sign in muli upang magpatuloy.',
  'status.accountDeleted': 'Account at mga naka-save na laro ay tinanggal.',
  'retry.saving': 'Subukang mag-save muli',
  'retry.restoring': 'Subukang i-restore muli',
  'retry.connection': 'Suriin ang koneksyon',
  'retry.starting': 'Subukang magsimulang muli',
  'retry.move': 'Muling subukang ilipat',
  'retry.hint': 'Subukang muli ang pahiwatig',
  'retry.time': 'Muling subukang makatipid ng oras',
  'retry.progress': 'Subukang muli ang pag-unlad ng pag-save',
  'retry.leaving': 'Subukang umalis muli',
  'retry.opening': 'Subukang buksan muli',
  'retry.deleting': 'Subukang tanggalin muli',
  'retry.signOut': 'Subukang mag-sign out muli',
  'retry.revoke': 'Subukang mag-sign out muli kahit saan',
  'retry.deleteAccount': 'Subukang tanggalin muli ang account',
  'error.accountSave':
    'Ang iyong lokal na laro ay ligtas, ngunit hindi ito mai-save sa iyong account.',
  'error.restoring': 'Hindi maibalik ang iyong puzzle.',
  'error.connection':
    'Hindi maabot ang serbisyo ng laro. Suriin ang iyong koneksyon at subukang muli.',
  'error.http':
    'Ang serbisyo ng laro ay nagbalik ng error {status}. Pakisubukang muli.',
  'error.unavailable':
    'Ang serbisyo ng laro ay pansamantalang hindi magagamit. Ang iyong board ay ligtas; subukan ulit.',
  'error.starting': 'Hindi masimulan ang laro.',
  'error.signInAgain': 'Mag-sign in muli upang i-save ang mga galaw.',
  'error.localUnavailable': 'Ang lokal na laro ay hindi magagamit.',
  'error.move': 'Hindi ma-save ang paglipat.',
  'error.currentUnavailable': 'Ang kasalukuyang laro ay hindi magagamit.',
  'error.hintChanged': 'Nagbago ang board habang inihanda ang pahiwatig.',
  'error.hint': 'Hindi maihanda ang pahiwatig.',
  'error.time': 'Hindi ma-save ang pinakabagong oras ng laro.',
  'error.timer': 'Hindi ma-save ang pinakabagong estado ng timer.',
  'error.leaving': 'Hindi ma-clear ang lokal na puzzle.',
  'error.opening': 'Hindi mabuksan ang naka-save na larong iyon.',
  'error.deleteGame': 'Ang na-save na laro ay hindi matanggal.',
  'error.deleteAll': 'Ang mga na-save na laro ay hindi matanggal.',
  'error.signOut': 'Hindi ka ma-sign out.\nHindi mabawi ang',
  'error.revoke': 'Session.',
  'error.deleteAccount': 'Hindi matanggal ang account.',
  'error.invalid-request': 'Ang kahilingan ay hindi wasto.',
  'error.invalid-json': 'Ang kahilingan ay naglalaman ng hindi wastong JSON.',
  'error.unsupported-media-type':
    'Ang kahilingan na Uri ng Nilalaman ay hindi suportado.',
  'error.payload-too-large': 'Ang kahilingan ay masyadong malaki.',
  'error.unauthorized': 'Kinakailangan ang awtorisasyon.',
  'error.forbidden-origin':
    'Hindi pinapayagan ang pinagmulan ng kahilingang ito.',
  'error.session-not-found': 'Ang sesyon ng laro ay hindi natagpuan.',
  'error.revision-conflict':
    'Nagbago ang board bago nailapat ang paglipat na ito.',
  'error.invalid-session': 'Ang session ng laro ay hindi wasto.',
  'error.invalid-action': 'Ang aksyon ng larong ito ay hindi wasto.',
  'error.invalid-cell': 'Ang cell na ito ay hindi wasto.',
  'error.immutable-cell': 'Ang ibinigay na cell ay hindi mababago.',
  'error.note-not-allowed':
    'Ang mga kandidato ay hindi maaaring baguhin sa cell na ito.',
  'error.no-undo': 'Walang aksyon na iu-undo.',
  'error.no-redo': 'Walang aksyon na muling gagawin.',
  'error.no-hint': 'Walang available na pahiwatig.',
  'error.stale-hint':
    'Nagbago ang board pagkatapos maihanda ang pahiwatig na ito.',
  'error.persistence-failed': 'Ang laro ay hindi mai-save.',
  'error.internal-error': 'Hindi makumpleto ang kahilingan.',
  'error.account-unavailable': 'Ang mga feature ng account ay hindi magagamit.',
  'error.account-unauthorized':
    'Kinakailangan ang isang wastong session ng aplikasyon.',
  'error.csrf-failed':
    'Hindi ma-verify ang pag-sign-in na ito. Mangyaring mag-sign in muli.',
  'error.account-game-not-found': 'Ang na-save na laro ay hindi natagpuan.',
  'error.guest-revision-conflict':
    'Nagbago ang lokal na laro bago nailapat ang pagkilos na ito.',
  'error.guest-claim-conflict':
    'Ang lokal na larong ito ay na-save na sa isang account.',
  'error.malformedDescriptor': 'Ang paliwanag ay hindi maipakita.',
  'account.close': 'Isara ang panel ng account',
  'account.games.title': 'Aking mga laro',
  'account.games.deleteAll': 'Tanggalin lahat',
  'account.games.deletingAll': 'Tinatanggal lahat...',
  'account.games.empty': 'Wala pang naka-save na laro.',
  'account.games.puzzle': '{difficulty} puzzle',
  'account.games.finished': 'Tapos na',
  'account.games.inProgress': 'Kasalukuyang isinasagawa',
  'account.games.saved': 'Nai-save na laro',
  'account.games.open': 'Buksan',
  'account.games.opening': 'Binubuksan…',
  'account.games.delete': 'Tanggalin',
  'account.games.deleting': 'Tinatanggal…',
  'account.signOut': 'Mag-sign out',
  'account.signingOut': 'Nagsa-sign out…',
  'account.settings': 'Mga setting ng account',
  'account.revoke': 'Mag-sign out kahit saan',
  'account.delete': 'Tanggalin ang account',
  'board.label': 'Sudoku game board',
  'board.cell':
    'Hanay {row}, kolum {column}, {content}{pending, select, true {, sinusuri} other {}}{invalid, select, true {, hindi wasto} other {}}{hint, select, none {} other {, {hint}}}',
  'board.cell.given': 'ibinigay {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'walang laman, mga kandidato {candidates}',
  'board.cell.empty': 'walang laman',
  'board.hint.focus': 'nakatutok na pahiwatig',
  'board.hint.premise': 'pahiwatig na ebidensya\nAng kandidatong',
  'board.hint.eliminated': 'ay tinanggal',
  'board.hint.conclusion': 'pahiwatig na konklusyon\nAng',
  'board.hint.problem': 'ay nangangailangan ng pagwawasto',
  'board.hint.extra': 'imposibleng kandidato',
  'board.hint.group': 'pangkat {group}',
  'board.hint.chain': 'chain position {position}',
  'board.paused.title': 'Puzzle ay naka-pause',
  'board.paused.detail': 'Ang iyong oras ay huminto.',
  'hint.label': 'Pahiwatig',
  'hint.close': 'Isara',
  'hint.strategy.grade': '{grade} diskarte',
  'hint.applying': 'Naglalapat ng pahiwatig...',
  'hint.refreshing': 'Nagre-refresh ng pahiwatig...',
  'hint.step': 'Hakbang {current} ng {total}',
  'hint.legend.label': 'Visual na alamat ng pahiwatig',
  'hint.legend.strong': 'Solid: dapat maglaman',
  'hint.legend.weak': 'Dashed: hindi maaaring pareho',
  'hint.legend.implication': 'Arrow: implikasyon',
  'hint.legend.groups': 'A/B: mga papalit-palit na grupo',
  'hint.legend.order': 'Mga Numero: chain order',
  'hint.back': 'Bumalik',
  'hint.next': 'Susunod',
  'hint.apply': 'Ilapat ang pahiwatig',
  'controls.label': 'Mga kontrol sa laro',
  'controls.digit.note': 'Magdagdag o mag-alis ng tala {digit}',
  'controls.digit.enter': 'Ipasok ang {digit}',
  'controls.hint.preparing': 'Inihahanda ang pahiwatig...',
  'controls.hint.preparingDetail':
    'Panatilihing nakikita ang puzzle habang inihahanda ang susunod na hakbang.',
  'controls.complete.eyebrow': 'Puzzle kumpleto na',
  'controls.complete.title': 'Nalutas sa {time}',
  'controls.complete.detail':
    'Panatilihin ang ritmo gamit ang isa pang {difficulty} board, o pumili ng ibang level.',
  'controls.complete.another': 'Maglaro ng isa pang {difficulty}',
  'controls.complete.replay': 'I-replay ang puzzle na ito',
  'controls.complete.choose': 'Pumili ng isa pang antas',
  'controls.pad': 'Number pad',
  'controls.pad.notes': 'Number pad, mode ng mga tala',
  'controls.modes': 'Mga mode ng input',
  'controls.notes.on': 'Notes on',
  'controls.notes.off': 'Notes off',
  'controls.candidates.on': 'Mga Kandidato sa',
  'controls.candidates.off': 'Ang mga kandidato ay wala na',
  'controls.actions': 'Mga aksyon na puzzle',
  'controls.erase': 'Burahin',
  'controls.undo': 'I-undo',
  'controls.undoing': 'Ina-undo…',
  'controls.redo': 'Gawin muli',
  'controls.redoing': 'Muling ginagawa...',
  'controls.hint.reveal': 'Magpakita ng pahiwatig',
  'controls.shortcuts': 'Mga keyboard shortcut',
  'controls.shortcuts.move': 'Ilipat',
  'controls.shortcuts.arrows': 'Mga arrow key',
  'controls.shortcuts.enter': 'Magpasok ng numero',
  'controls.shortcuts.notes': 'Mga Tala / kandidato',
  'controls.shortcuts.or': 'o',
  'controls.shortcuts.pause': 'I-pause o ipagpatuloy',
  'controls.shortcuts.hint': 'Buksan, isulong, o ilapat ang isang pahiwatig',
  'controls.shortcuts.hintOther': 'Iba pang mga kontrol ng pahiwatig',
  'hint.target.candidate.visible': 'ang naka-highlight na kandidatong ito',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'kandidato {value} sa row {row}, column {column}',
  'hint.target.cell.visible': 'ang naka-highlight na cell na ito',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'row {row}, column {column}',
  'hint.target.unit.visible': 'na-highlight nito ang {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'hilera',
  'hint.target.column': 'column',
  'hint.target.box': 'kahon',
  'chrome.home': 'Sudoku home',
  'chrome.appearance': 'Hitsura',
  'chrome.theme.use': 'Gumamit ng {theme} na tema',
  'chrome.theme.systemTitle': 'System theme ({theme})',
  'chrome.theme.title': '{theme} na tema',
  'chrome.theme.system': 'System',
  'chrome.theme.systemName': 'system',
  'chrome.theme.light': 'ilaw',
  'chrome.theme.dark': 'madilim',
  'chrome.connection.connecting':
    'Kumokonekta\nHindi available ang serbisyo ng',
  'chrome.connection.unavailable': '',
  'chrome.footer.tagline': 'Mapag-isipang laro, nang walang mga distractions.',
  'chrome.footer.privacy': 'Privacy\nMga Tuntunin ng',
  'chrome.footer.terms': '',
  'chrome.footer.input': 'Keyboard at pindutin ang handa na',
};
