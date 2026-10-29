import type { MessageCatalog } from './types';

export const th: MessageCatalog = {
  'common.language.label': 'ภาษา',
  'common.language.auto': 'อัตโนมัติ',
  'common.language.en': 'ภาษาอังกฤษ',
  'common.language.zh-Hans': '简体中文',
  'common.language.zh-Hant': '繁體中文',
  'common.language.pt-BR': 'โปรตุเกส (บราซิล)',
  'common.language.pt-BR.short': 'ภาษาโปรตุเกส',
  'common.language.es': 'สเปน',
  'common.language.ja': '日本語',
  'common.language.ko': 'เกาหลี',
  'common.language.fr': 'ฝรั่งเศส',
  'common.language.de': 'เยอรมัน',
  'common.language.ru': 'รัสเซีย',
  'common.language.ar': 'العربية',
  'common.language.id': 'บาฮาซาอินโดนีเซีย',
  'common.language.id.short': 'อินโดนีเซีย',
  'common.language.hi': 'हिन्दी',
  'common.language.it': 'อิตาเลียโน่',
  'common.language.tr': 'เติร์กเช่',
  'common.language.vi': 'เตียงเวียต',
  'common.language.uk': 'Укра́ська',
  'common.language.nl': 'เนเธอร์แลนด์',
  'common.language.pl': 'โพลสกี้',
  'common.language.th': 'ไทย',
  'common.language.fil': 'Filipino',
  'common.language.ms': 'Bahasa Melayu',
  'common.language.ms.short': 'Melayu',
  'common.language.cs': 'Čeština',
  'common.language.sv': 'Svenska',
  'accessibility.language.changed': 'ภาษาเปลี่ยนเป็น {language} แล้ว',
  'common.difficulty.easy': 'ง่าย',
  'common.difficulty.medium': 'ปานกลาง',
  'common.difficulty.hard': 'ยาก',
  'common.difficulty.expert': 'เชี่ยวชาญ',
  'common.difficulty.evil': 'โหด',
  'difficulty.easy.name': 'ง่าย',
  'difficulty.medium.name': 'ปานกลาง',
  'difficulty.hard.name': 'ยาก',
  'difficulty.expert.name': 'เชี่ยวชาญ',
  'difficulty.evil.name': 'โหด',
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
  'hint.value-correction.title': 'แก้ไขค่านี้',
  'hint.candidate-correction.title': 'แก้ไขตัวเลือกในช่องนี้',
  'hint.value-correction.summary':
    'ค่าที่ {cell} ขัดแย้งกับปริศนา ล้างข้อมูลก่อนดำเนินการต่อ',
  'hint.candidate-correction.summary':
    'ก่อนดำเนินการต่อ ให้สร้างตัวเลือกใน {cell} ใหม่จากค่าที่ถูกต้องในแถว คอลัมน์ และบล็อก',
  'hint.strategy.summary':
    'ทำงานผ่านขั้นตอน {steps} เพื่อทำความเข้าใจและใช้ {strategy}',
  'hint.value-correction.observe': 'ตรวจสอบ {cell} ค่าของมันขัดแย้งกับบอร์ด',
  'hint.value-correction.conclude':
    'ล้างค่าที่ {cell} เพื่อให้สามารถตรวจสอบตารางตัวเลือกได้ต่อไป',
  'hint.candidate-correction.observe': 'ตรวจสอบ {cell} ตัวเลือกไม่ตรงกับกระดาน',
  'hint.candidate-correction.compare':
    'เริ่มช่องนี้ใหม่จากค่าที่ถูกต้องในแถว คอลัมน์ และบล็อก',
  'hint.candidate-correction.conclude':
    'รีเซ็ตตัวเลือกใน {cell} เป็นตัวเลขทั้งหมดที่แถว คอลัมน์ และบล็อกอนุญาต',
  'hint.strategy.observe': 'เลือกช่อง ตัวเลือก แถว คอลัมน์ และบล็อกที่ไฮไลต์',
  'hint.strategy.compare':
    'เปรียบเทียบข้อจำกัดที่ไฮไลต์เพื่อค้นหาผลลัพธ์ที่บังคับ',
  'hint.strategy.conclude': 'ใช้ผลลัพธ์ที่ไฮไลต์ ลายนี้คือ {strategy}.',
  'hint.coloring.pair': '{unit}: {digit} → {cells}; A/B.',
  'hint.coloring.chain':
    'ผู้สมัคร {digit} จะสร้างกลุ่มสลับกันสองกลุ่ม: A ที่ {group_a} และ B ที่ {group_b}',
  'hint.coloring.alternatives':
    'ลิงก์ทึบแต่ละลิงก์หมายถึงจุดสิ้นสุดหนึ่งจุดที่มี {digit} ดังนั้นตัวเลือกที่เชื่อมโยงจะสลับกันระหว่างกลุ่ม A และ B ข้อขัดแย้งสามารถแยกกลุ่มหนึ่งออกไปได้ ในขณะที่เซลล์ที่เห็นทั้งสองกลุ่มไม่สามารถมี {digit} ได้',
  'hint.coloring.elimination':
    '{cell}: A {group_a_cell} / B {group_b_cell} → ¬{digit}.',
  'hint.coloring.apply':
    'ผู้สมัครที่เชื่อมโยงบังคับผลลัพธ์สำหรับ {colored_digit} ลบ {candidates} ลายนี้คือ {strategy}.',
  'hint.coloring.place':
    'ผู้สมัครที่เชื่อมโยงสำหรับ {colored_digit} บังคับใช้ผลลัพธ์ วาง {digit} ใน {cell} ลายนี้คือ {strategy}.',
  'hint.x-cycle.opening':
    'ใน {unit} นั้น {digit} สามารถไปได้เฉพาะใน {cells} เท่านั้น หนึ่งในสองเซลล์นี้ต้องมี {digit}',
  'hint.x-cycle.assume':
    'สมมติว่า {start} ไม่ใช่ {digit} แล้ว {forced} จะต้องเป็น {digit} นั่นหมายความว่า {blocked} ไม่สามารถเป็น {digit} ได้ ดังนั้น {unit} จึงบังคับ {digit} ให้เป็น {result}',
  'hint.x-cycle.follow':
    'เนื่องจาก {true_cell} คือ {digit} ดังนั้น {blocked} จึงไม่สามารถเป็น {digit} ได้ {unit} จึงบังคับ {digit} ให้เป็น {result}',
  'hint.x-cycle.close':
    'เนื่องจาก {true_cell} คือ {digit} ดังนั้น {blocked} จึงไม่สามารถเป็น {digit} ได้ ใน {unit} นั่นทำให้ {result} เป็นสถานที่เดียวสำหรับ {digit}',
  'hint.x-cycle.place':
    'สมมติฐานเริ่มต้นที่ว่า {assumption} ไม่ใช่ {digit} จะย้อนกลับไปที่ {cell} ที่เป็น {digit} ดังนั้นสมมติฐานจึงไม่เป็นจริง วาง {digit} ลงใน {cell} รูปแบบนี้เรียกว่า {strategy}',
  'hint.xy-chain.start':
    '{cell} มีตัวเลือกเพียง {first_digit} และ {second_digit} เท่านั้น ช่องนี้เป็น {endpoint_digit} หรือถ้าไม่ใช่ {endpoint_digit} ก็ต้องเป็น {other_digit}',
  'hint.xy-chain.assume':
    'สมมติว่า {start} ไม่ใช่ {endpoint_digit} ช่องนี้จึงต้องเป็น {start_value} เนื่องจาก {start} และ {middle} อยู่ใน {first_unit} เดียวกัน {middle} จึงเป็น {start_value} ไม่ได้และต้องเป็น {middle_value} ทำให้ {result} ใน {second_unit} เป็น {middle_value} ไม่ได้ จึงต้องเป็น {result_value}',
  'hint.xy-chain.follow':
    'เนื่องจาก {start} เป็น {start_value} {middle} ใน {first_unit} จึงเป็น {start_value} ไม่ได้และต้องเป็น {middle_value} เนื่องจาก {middle} และ {result} อยู่ใน {second_unit} เดียวกัน {result} จึงเป็น {middle_value} ไม่ได้และต้องเป็น {result_value}',
  'hint.xy-chain.reach':
    'เนื่องจาก {start} เป็น {start_value} {endpoint} จึงเป็น {shared_digit} ไม่ได้ ตัวเลือกอื่นเพียงตัวเดียวคือ {endpoint_digit} ดังนั้นจึงต้องเป็น {endpoint_digit}',
  'hint.xy-chain.place':
    'ถ้า {first_endpoint} เป็น {endpoint_digit} ปลายแรกจะมี {endpoint_digit} หากไม่ใช่ ลูกโซ่จะบังคับ {endpoint_digit} ที่ปลายอีกด้านคือ {second_endpoint} ดังนั้นอย่างน้อยหนึ่งปลายต้องเป็น {endpoint_digit} {cell} มองเห็นทั้งสองปลาย จึงเป็น {endpoint_digit} ไม่ได้ ใส่ {digit} ที่ {cell} รูปแบบนี้เรียกว่า {strategy}',
  'hint.argument.digit': '{digit}',
  'hint.naked-single.constraints':
    'เริ่มที่ {cell} แถว คอลัมน์ และบล็อกของช่องนี้มี {excluded_digits} อยู่แล้ว',
  'hint.naked-single.only':
    'ดังนั้น {digit} จึงเป็นตัวเลขเดียวที่ใส่ใน {cell} ได้',
  'hint.naked-single.apply':
    'ใส่ {digit} ที่ {cell} ช่องที่เหลือตัวเลือกเพียงตัวเดียวเรียกว่า {strategy}',
  'hint.hidden-single.inspect': 'ใน{unit} ให้ตรวจดูว่า {digit} ลงช่องใดได้บ้าง',
  'hint.hidden-single.blockers':
    'เลข {digit} ที่วางอยู่ใน {blockers} ทำให้ช่องว่างอื่นทั้งหมดใน{unit}ใส่ {digit} ไม่ได้',
  'hint.hidden-single.only': 'เหลือเพียง {cell} ที่ยังใส่ {digit} ได้',
  'hint.hidden-single.apply':
    'ใส่ {digit} ใน {cell} เมื่อเลขหนึ่งตัวเหลือช่องที่เป็นไปได้เพียงช่องเดียวในแถว คอลัมน์ หรือบล็อก วิธีนี้เรียกว่า {strategy}',
  'hint.naked-pair.inspect':
    'เริ่มที่ {unit}: {cell} มีได้เพียง {first_digit} หรือ {second_digit}',
  'hint.naked-pair.match':
    '{cell} มีตัวเลือกสองตัวเดียวกัน คือ {first_digit} และ {second_digit}',
  'hint.naked-pair.reserve':
    'สองช่องนี้ต้องเป็น {digits} ในลำดับใดลำดับหนึ่ง ดังนั้นตัวเลือก {digit} จึงอยู่ในช่องอื่นของ {unit} ไม่ได้',
  'hint.naked-pair.apply':
    'ลบ {candidates}; ขั้นตอนนี้ยังไม่ใส่ค่า รูปแบบนี้คือ {strategy}',
  'hint.naked-triple.first':
    'เริ่มที่ {unit}: {cell} ใส่ได้เฉพาะ {first_digit} หรือ {second_digit}',
  'hint.naked-triple.second':
    'เพิ่ม {cell}; ช่องนี้ใส่ได้เฉพาะ {first_digit} หรือ {second_digit}',
  'hint.naked-triple.third':
    'เพิ่ม {cell}; ช่องนี้ใส่ได้เฉพาะ {first_digit} หรือ {second_digit} ตอนนี้ทั้งสามช่องมีได้เพียง {reserved_digits}',
  'hint.naked-triple.consequence':
    'ทั้งสามช่องต้องใช้ {reserved_digits} คนละหนึ่งตัว จึงตัด {removed_digits} ออกจาก {cell} และเหลือเพียง {remaining_digit}',
  'hint.naked-triple.apply':
    'ใส่ {digit} ที่ {cell} สามช่องที่ตัวเลือกจำกัดอยู่ในเลขสามตัวเดียวกันจะเกิดเป็น {strategy}',
  'hint.naked-quad.cell': 'ใน{unit} {cell} มีได้เฉพาะ {digits} เท่านั้น',
  'hint.subset-reservation.observe':
    'ใน {unit} ช่อง {cells} มีได้เฉพาะ {digits}',
  'hint.subset-reservation.explain':
    'ช่องเหล่านี้กัน {digits} ไว้ใน {unit} ดังนั้นช่องอื่นในหน่วยนี้จึงมีตัวเลขเหล่านี้ไม่ได้',
  'hint.subset-reservation.apply': 'ลบ {candidates} รูปแบบนี้คือ {strategy}',
  'hint.subset-reservation.place':
    'ใส่ {digit} ใน {cell} รูปแบบนี้คือ {strategy}',
  'hint.hidden-subset-confinement.observe':
    'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-subset-confinement.explain':
    'เนื่องจาก {digits} ถูกจำกัดอยู่ในช่องเหล่านี้ของ {unit} ช่องเหล่านี้จึงไม่มีตัวเลือกอื่นได้',
  'hint.hidden-subset-confinement.apply':
    'ลบ {candidates} ออกจากช่องที่ถูกจำกัด รูปแบบนี้คือ {strategy}',
  'hint.hidden-subset-confinement.place':
    'ใส่ {digit} ใน {cell} หลังจากลบตัวเลือกอื่น รูปแบบนี้คือ {strategy}',
  'hint.hidden-pair.first': 'ใน {unit} ตัวเลือก {digit} ปรากฏเฉพาะใน {cells}',
  'hint.hidden-pair.second':
    'ตัวเลือก {digit} ก็จำกัดอยู่ในสองช่องเดิม ดังนั้น {digits} ต้องอยู่ใน {cells} สลับลำดับกัน',
  'hint.hidden-pair.consequence':
    'สองช่องนี้สงวนไว้สำหรับ {digits} จึงเก็บตัวเลือกอื่นไว้ไม่ได้: {candidates}',
  'hint.hidden-pair.apply': 'ลบ {candidates} รูปแบบนี้คือ {strategy}',
  'hint.hidden-triple.first': 'ใน {unit} ตัวเลือก {digit} ปรากฏเฉพาะใน {cells}',
  'hint.hidden-triple.second':
    'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-triple.third':
    'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-triple.consequence':
    'เนื่องจาก {digits} ถูกจำกัดอยู่ในช่องเหล่านี้ของ {unit} ช่องเหล่านี้จึงไม่มีตัวเลือกอื่นได้',
  'hint.hidden-triple.apply':
    'ลบ {candidates} ออกจากช่องที่ถูกจำกัด รูปแบบนี้คือ {strategy}',
  'hint.hidden-quad.first': 'ใน {unit} ตัวเลือก {digit} ปรากฏเฉพาะใน {cells}',
  'hint.hidden-quad.second':
    'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-quad.third': 'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-quad.fourth':
    'ใน {unit} ตัวเลข {digits} ปรากฏได้เฉพาะใน {cells}',
  'hint.hidden-quad.consequence':
    'เนื่องจาก {digits} ถูกจำกัดอยู่ในช่องเหล่านี้ของ {unit} ช่องเหล่านี้จึงไม่มีตัวเลือกอื่นได้',
  'hint.hidden-quad.apply':
    'ลบ {candidates} ออกจากช่องที่ถูกจำกัด รูปแบบนี้คือ {strategy}',
  'hint.pointing-pair.first':
    'In {source_unit}, start with candidate {digit} at {cell}. Check where else {digit} can go in this box.',
  'hint.pointing-pair.second':
    'The only other place for {digit} in {source_unit} is {cell}. Both possibilities are in {intersection_unit}.',
  'hint.pointing-pair.consequence':
    'Whichever of those two cells contains {digit}, {intersection_unit} gets its {digit} inside {source_unit}. Remove {candidate}.',
  'hint.pointing-pair.apply':
    'At {cell}, only candidate {digit} remains. Place {digit} there. This pattern is called {strategy}.',
  'hint.intersection-confinement.observe':
    'ใน {source_unit} ตัวเลือก {digit} ถูกจำกัดอยู่ที่ {intersection_unit} ที่ {cells}',
  'hint.intersection-confinement.explain':
    'เนื่องจาก {digit} ทุกตัวใน {source_unit} อยู่ใน {intersection_unit} เซลล์ที่อยู่นอกแหล่งที่มาแต่ภายในจุดตัดกันจึงไม่สามารถบรรจุเซลล์ดังกล่าวได้',
  'hint.intersection-confinement.apply':
    'ลบผู้สมัคร {digit} ออกจาก {cells} ลายนี้คือ {strategy}.',
  'hint.intersection-confinement.place':
    'วาง {digit} ใน {cell} หลังจากใช้ทางแยก ลายนี้คือ {strategy}.',
  'hint.fish-confinement.observe':
    'ใน {base_units} ตัวเลือก {digit} ปรากฏเฉพาะใน {cover_units}',
  'hint.fish-confinement.explain':
    'ตัวเลือก {digit} ถูกจำกัดจาก {base_units} ไปยัง {cover_units} ดังนั้นหน่วยครอบเหล่านี้ต้องรับเลขนี้ผ่านตำแหน่งฐานที่ไฮไลต์',
  'hint.swordfish.consequence':
    '{digit} หนึ่งตัวจากแต่ละ{base_units}ต้องอยู่ใน{cover_units} เมื่อรวมกันแล้ว ตำแหน่งเหล่านี้ใช้แต่ละคอลัมน์จากสามคอลัมน์หนึ่งครั้ง จึงไม่มี {digit} อื่นเหลืออยู่ในคอลัมน์เหล่านั้นได้',
  'hint.jellyfish.consequence':
    '{digit} หนึ่งตัวจากแต่ละ{base_units}ต้องอยู่ใน{cover_units} เมื่อรวมกันแล้ว ตำแหน่งเหล่านี้ใช้แต่ละคอลัมน์จากสี่คอลัมน์หนึ่งครั้ง จึงไม่มี {digit} อื่นเหลืออยู่ในคอลัมน์เหล่านั้นได้',
  'hint.fish-confinement.apply':
    'ลบตัวเลือก {digit} ออกจาก {cells} รูปแบบนี้คือ {strategy}',
  'hint.x-wing.first':
    'ใน{base_unit} ตัวเลือก {digit} ปรากฏเฉพาะใน{cover_units}',
  'hint.x-wing.second':
    '{base_unit}ก็เป็นเช่นเดียวกัน: ตัวเลือก {digit} ปรากฏเฉพาะใน{cover_units} ทั้งสองแถวใช้สองคอลัมน์เดียวกัน',
  'hint.x-wing.consequence':
    'แต่ละแถวใน{base_units}ต้องมี {digit} หนึ่งตัว ดังนั้นแต่ละคอลัมน์ใน{cover_units}ต้องรับ {digit} จากหนึ่งในสองแถวนั้น ตัวเลือก {digit} อื่นในคอลัมน์เหล่านี้จึงตัดออกได้',
  'hint.x-wing.apply':
    'ลบตัวเลือก {digit} ออกจาก{cells} รูปแบบนี้เรียกว่า {strategy}',
  'hint.pivot-wing.observe':
    'ที่ {pivot} ผู้เข้าทดสอบ {pivot_digits} จะเชื่อมต่อเซลล์ปีกที่ {wing_cells}',
  'hint.pivot-wing.explain':
    'แต่ละวิงที่ {wing_cells} ใช้ผู้สมัครคนหนึ่งร่วมกับเดือยที่ {pivot} และทั้งสองวิงมี {shared_digit} ไม่ว่าตัวเลือกเดือยตัวใดจะเป็นจริง ปีกข้างหนึ่งจะต้องมี {shared_digit}',
  'hint.xy-wing.pivot':
    '{pivot} เหลือตัวเลือกเพียง {digits} จึงต้องเป็นหนึ่งในนั้น',
  'hint.xy-wing.case':
    'ถ้า {pivot} เป็น {pivot_digit} แล้ว {wing} จะเป็น {pivot_digit} ไม่ได้ ตัวเลือกอื่นเพียงตัวเดียวคือ {shared_digit} ดังนั้น {wing} ต้องเป็น {shared_digit}',
  'hint.xy-wing.guarantee':
    'ไม่ว่าตัวเลือกใดใน {pivot} จะถูกต้อง อย่างน้อยหนึ่งปีก {wing_cells} ต้องเป็น {shared_digit} เราไม่จำเป็นต้องรู้ว่าเป็นปีกใด',
  'hint.xy-wing.apply':
    '{cells} มองเห็นทั้งสองปีก {wing_cells} เนื่องจากอย่างน้อยหนึ่งปีกเป็น {shared_digit} ให้ลบ {shared_digit} ออกจากช่องเหล่านี้ รูปแบบนี้เรียกว่า {strategy}',
  'hint.xy-wing.place':
    '{cell} มองเห็นทั้งสองปีก {wing_cells} เนื่องจากอย่างน้อยหนึ่งปีกเป็น {shared_digit} ช่องนี้จึงเป็น {shared_digit} ไม่ได้ ให้ใส่ตัวเลือกอื่นเพียงตัวเดียว {digit} รูปแบบนี้เรียกว่า {strategy}',
  'hint.xyz-wing.pivot':
    '{pivot} เหลือผู้สมัครเพียง {digits} และต้องเป็นหนึ่งในนั้น',
  'hint.xyz-wing.case':
    'ถ้า {pivot} เป็น {pivot_digit} แล้ว {wing} ใน {unit} เดียวกันจะเป็น {pivot_digit} ไม่ได้ ผู้สมัครอื่นเพียงตัวเดียวคือ {shared_digit} ดังนั้น {wing} ต้องเป็น {shared_digit}',
  'hint.xyz-wing.pivot-case':
    'ถ้า {pivot} เป็น {shared_digit} ตัวแกนเองก็มี {shared_digit} อยู่แล้ว',
  'hint.xyz-wing.guarantee':
    'ไม่ว่าผู้สมัครใดใน {pivot} จะถูกต้อง อย่างน้อยหนึ่งช่องใน {pattern_cells} ต้องเป็น {shared_digit} เราไม่จำเป็นต้องรู้ว่าเป็นช่องใด',
  'hint.xyz-wing.apply':
    '{target} อยู่ใน {first_unit} เดียวกับ {first_pattern_cell}, {second_unit} เดียวกับ {second_pattern_cell} และ {third_unit} เดียวกับ {third_pattern_cell} เนื่องจากอย่างน้อยหนึ่งในสามช่องนั้นเป็น {shared_digit} ดังนั้น {target} จึงเป็น {shared_digit} ไม่ได้ ลบผู้สมัครนี้ รูปแบบนี้เรียกว่า {strategy}',
  'hint.strong-link-wing.observe':
    'แต่ละช่องใน {wing_cells} ใส่ได้เฉพาะ {digits} เท่านั้น',
  'hint.strong-link-wing.bridge':
    'ใน {unit} ตัวเลือก {link_digit} ปรากฏได้เฉพาะที่ {link_cells} ดังนั้นอย่างน้อยหนึ่งช่องต้องเป็น {link_digit}',
  'hint.strong-link-wing.force':
    'ถ้า {first_link_cell} เป็น {link_digit} แล้ว {first_wing_cell} จะเป็น {link_digit} ไม่ได้และต้องเป็น {forced_digit} ถ้า {second_link_cell} เป็น {link_digit} แล้ว {second_wing_cell} ต้องเป็น {forced_digit} ดังนั้นอย่างน้อยหนึ่งในสองช่องนี้เป็น {forced_digit}',
  'hint.strong-link-wing.apply':
    'อย่างน้อยหนึ่งช่องใน {wing_cells} เป็น {digit} ลบตัวเลือก {digit} ออกจาก {cells} เพราะช่องเหล่านี้มองเห็นทั้งสองช่อง รูปแบบนี้เรียกว่า {strategy}',
  'hint.strong-link-wing.place':
    'อย่างน้อยหนึ่งช่องใน {wing_cells} เป็น {removed_digit} ลบตัวเลือก {removed_digit} ออกจาก {cell} เพราะมองเห็นทั้งสองช่อง แล้วใส่ {digit} รูปแบบนี้เรียกว่า {strategy}',
  'hint.relational-wing.apply':
    'ลบผู้สมัคร {digit} ออกจาก {cells} ลายนี้คือ {strategy}.',
  'hint.relational-wing.place':
    'ลบผู้สมัคร {removed_digit} ออกจาก {cell} ดังนั้นให้วาง {digit} ไว้ตรงนั้น ลายนี้คือ {strategy}.',
  'hint.bug-plus-one.observe':
    'เซลล์อื่นๆ ที่ยังไม่ได้แก้ไขจะมีเซลล์ที่อยู่ระหว่างการพิจารณา 2 รายการ ในขณะที่ {cell} มี {digits}',
  'hint.bug-plus-one.explain':
    'การลบ {digit} ออกจาก {cell} จะปล่อยให้ค่าสองเซลล์ที่ยังไม่ได้แก้ไขทุกค่า และทำให้โซลูชันสามารถใช้แทนกันได้ทั่วทั้ง {units} ดังนั้น {digit} จะต้องเป็นจริง',
  'hint.bug-plus-one.place':
    'วาง {digit} ลงใน {cell} ข้อยกเว้นเฉพาะนี้คือ {strategy}',
  'hint.unique-rectangle.observe':
    'เซลล์ที่ {cells} เป็นรูปสี่เหลี่ยมผืนผ้าและทั้งหมดมีคู่ {digits}',
  'hint.unique-rectangle.type1':
    'มุมทั้งสามมี {digits} พอดี หาก {cell} ใช้ตัวเลขตัวใดตัวหนึ่งด้วย สี่เหลี่ยมจะยอมให้โซลูชันสองตัวที่ใช้แทนกันได้',
  'hint.unique-rectangle.type2':
    'มุมที่ขยายทั้งสองมุมที่ {cells} ใช้ {digit} ร่วมกัน ดังนั้นเซลล์ใดๆ ที่เห็นทั้งสองมุมจึงไม่สามารถมี {digit} ได้',
  'hint.unique-rectangle.type3':
    'ตัวเลขพิเศษ {digits} ในสี่เหลี่ยมจะรวมกับ {cells} เป็นเซ็ตย่อยที่สงวนไว้ใน {unit} ดังนั้นตัวเลขเหล่านั้นจึงสามารถลบออกจากตำแหน่งอื่นในหน่วยนั้นได้',
  'hint.unique-rectangle.type4':
    'ตัวเลือก {digit} ปรากฏใน {cells} เป็นคู่คอนจูเกตใน {unit} ดังนั้นผู้สมัคร {removed_digit} ไม่สามารถใช้มุมที่ขยายมุมใดมุมหนึ่งได้ โดยไม่สร้างโซลูชันที่ใช้แทนกันได้',
  'hint.unique-rectangle.apply':
    'ลบ {candidates} ความสัมพันธ์ที่เป็นเอกลักษณ์นี้คือ {strategy}',
  'hint.unique-rectangle.place':
    'วาง {digit} ใน {cell} หลังจากใช้ความสัมพันธ์เฉพาะ ลายนี้คือ {strategy}.',
  'hint.implication-chain.observe':
    'เริ่มที่ {cell} ซึ่งมีตัวเลือกเพียง {digits}',
  'hint.implication-chain.explain':
    '{from} และ {to} มีตัวเลือกร่วมกันและมองเห็นกัน ตัวเลือกนั้นจึงเป็นจริงพร้อมกันไม่ได้ และการเชื่อมโยงดำเนินต่อไป',
  'hint.implication-chain.apply':
    'ปลายด้านหนึ่งต้องมี {digit} ดังนั้นให้ลบตัวเลือก {digit} ออกจาก {cells} รูปแบบนี้คือ {strategy}',
  'hint.narration.apply': 'ใช้การหักเงิน:',
  'hint.narration.look-at': 'ดูสิ',
  'hint.narration.value-conflict': '. ค่าที่ป้อนขัดแย้งกับปริศนา',
  'hint.narration.clear-value': 'เคลียร์ค่าได้ที่',
  'hint.narration.clear-value-tail':
    'เพื่อให้สามารถตรวจสอบตารางตัวเลือกได้ต่อไป',
  'hint.narration.candidate-inconsistent':
    '. สถานะตัวเลือกไม่สอดคล้องกับกระดาน',
  'hint.narration.reset-candidates': 'รีเซ็ตชุดตัวเลือกที่ ',
  'hint.narration.reset-candidates-tail':
    ' เป็นตัวเลขทั้งหมดที่ค่าที่ถูกต้องในแถว คอลัมน์ และบล็อกอนุญาต',
  'hint.narration.only-candidate': '. มีตัวเลือกเพียงตัวเดียว: ',
  'hint.narration.period': '.',
  'hint.narration.no-other-digit': 'เพราะไม่มีหลักอื่นเข้าได้',
  'hint.narration.place': ', สถานที่',
  'hint.narration.naked-single-tail': 'ตรงนั้น เทคนิคนี้เรียกว่า Naked Single',
  'hint.narration.in-unit': 'ใน',
  'hint.narration.consider-digit': 'พิจารณาว่าอยู่ที่ไหน',
  'hint.narration.can-appear': 'สามารถปรากฏได้',
  'hint.narration.other-cells': 'ช่องว่างอื่นๆ ทั้งหมดเข้ามา',
  'hint.narration.cannot-contain': 'ไม่สามารถมีได้',
  'hint.narration.leaving-only': 'เหลือเพียง',
  'hint.narration.because-unit': 'เพราะ',
  'hint.narration.still-needs': 'ยังคงต้องการ',
  'hint.narration.only-cell': 'และ',
  'hint.narration.hidden-single-tail': 'เป็นช่องเดียวที่เป็นไปได้',
  'hint.narration.hidden-single-name':
    'ตรงนั้น เทคนิคนี้เรียกว่า Hidden Single',
  'hint.narration.place-result': 'สถานที่',
  'hint.narration.in': 'ใน',
  'hint.narration.remove': 'นำตัวเลือก ',
  'hint.narration.from': ' ออกจาก ',
  'hint.narration.separator': ',',
  'hint.narration.strategy-result': '. นี่คือผลลัพธ์ {strategy}',
  'welcome.eyebrow': 'ปริศนาใหม่',
  'welcome.title': 'เลือกระดับความยาก',
  'welcome.lede': 'เลือกระดับ จากนั้นเริ่มเมื่อคุณพร้อม',
  'welcome.difficulty': 'ความยาก',
  'welcome.start': 'เริ่มปริศนาระดับ{difficulty}',
  'welcome.starting': 'กำลังเริ่มปริศนาระดับ{difficulty}…',
  'welcome.preview': 'ตัวอย่างปริศนาซูโดกุ',
  'loading.initial': 'กำลังโหลดปริศนาของคุณ...',
  'loading.account.eyebrow': 'บัญชี',
  'loading.account.title': 'บันทึกปริศนาของคุณลงในบัญชีของคุณ...',
  'loading.account.detail':
    'ความคืบหน้าของคุณยังคงอยู่บนอุปกรณ์นี้จนกว่าการบันทึกบัญชีจะได้รับการยืนยัน',
  'loading.home.eyebrow': 'ซูโดกุ',
  'loading.home.title': 'กลับไปสู่หน้าแรก…',
  'loading.home.detail': 'ตรวจสอบอินเทอร์เฟซล่าสุดก่อนแสดงการเลือกระดับ',
  'loading.restart.eyebrow': 'ปริศนาเดียวกัน',
  'loading.restart.title': 'กำลังเริ่มปริศนานี้อีกครั้ง...',
  'loading.restart.detail': 'ล็อคบอร์ดเก่าไว้จนกว่าความพยายามครั้งใหม่จะพร้อม',
  'loading.new.eyebrow': 'ปริศนาใหม่',
  'loading.new.title': 'กำลังเตรียมกระดานระดับ{difficulty}…',
  'loading.new.detail': 'สร้างปริศนาใหม่ในขณะนี้ คุณจะเล่นในอีกสักครู่',
  'confirmation.home.eyebrow': 'กลับบ้าน?',
  'confirmation.home.title': 'ทิ้งปริศนานี้ไว้',
  'confirmation.home.description':
    'ความคืบหน้าปัจจุบันของคุณจะไม่เปิดโดยอัตโนมัติบนอุปกรณ์นี้อีกต่อไป',
  'confirmation.home.cancel': 'เล่นต่อไป',
  'confirmation.home.confirm': 'กลับสู่หน้าแรก',
  'confirmation.restart.eyebrow': 'เริ่มต้นใหม่?',
  'confirmation.restart.title': 'เริ่มต้นใหม่',
  'confirmation.restart.description':
    'เล่นปริศนานี้ซ้ำจากต้นฉบับที่ให้มา หรือเลือกปริศนาอื่น',
  'confirmation.restart.replay.title': 'เล่นปริศนานี้ซ้ำ',
  'confirmation.restart.replay.description':
    'เก็บสิ่งที่ได้รับเหล่านี้ไว้และรีเซ็ตความพยายามนี้',
  'confirmation.restart.different.title': 'เล่นปริศนาที่แตกต่างกัน',
  'confirmation.restart.different.description': 'เลือกระดับสำหรับกระดานใหม่',
  'confirmation.restart.different.level': 'ระดับสำหรับปริศนาที่แตกต่างกัน',
  'common.cancel': 'ยกเลิก',
  'account.confirm.deleteGame.eyebrow': 'ลบเกมที่บันทึกไว้ใช่ไหม',
  'account.confirm.deleteGame.title': 'ลบเกมนี้',
  'account.confirm.deleteGame.description':
    'ปริศนานี้และความคืบหน้าจะถูกลบออกจากเกมของฉันอย่างถาวร สิ่งนี้ไม่สามารถยกเลิกได้',
  'account.confirm.deleteGame.action': 'ลบเกม',
  'account.confirm.deleteGame.pending': 'กำลังลบเกมที่บันทึกไว้...',
  'account.confirm.deleteAll.eyebrow': 'ลบทุกเกมที่บันทึกไว้ใช่ไหม',
  'account.confirm.deleteAll.title': 'ลบเกมทั้งหมด',
  'account.confirm.deleteAll.description':
    'ปริศนาและความคืบหน้าทั้งหมดในเกมของฉันจะถูกลบออกอย่างถาวร สิ่งนี้ไม่สามารถยกเลิกได้',
  'account.confirm.deleteAll.action': 'ลบเกมทั้งหมด',
  'account.confirm.deleteAll.pending': 'กำลังลบเกมทั้งหมด...',
  'account.confirm.revoke.eyebrow': 'ความปลอดภัยของบัญชี',
  'account.confirm.revoke.title': 'ออกจากระบบทุกที่',
  'account.confirm.revoke.description':
    'นี่เป็นการนำคุณออกจากระบบในทุกอุปกรณ์ รวมถึงอุปกรณ์นี้ด้วย บัญชีของคุณและเกมที่บันทึกไว้ยังคงอยู่',
  'account.confirm.revoke.action': 'ออกจากระบบทุกที่',
  'account.confirm.revoke.pending': 'กำลังออกจากระบบทุกที่...',
  'account.confirm.deleteAccount.eyebrow': 'การกระทำถาวร',
  'account.confirm.deleteAccount.title': 'ลบบัญชีของคุณ',
  'account.confirm.deleteAccount.description':
    'ข้อมูลประจำตัวของคุณ ทุกเซสชันที่ลงชื่อเข้าใช้ และเกมที่บันทึกไว้ทั้งหมดจะถูกลบออกอย่างถาวร แค็ตตาล็อกปริศนาที่แชร์จะไม่ได้รับผลกระทบ',
  'account.confirm.deleteAccount.action': 'ลบบัญชี',
  'account.confirm.deleteAccount.pending': 'กำลังลบบัญชี...',
  'account.confirm.typeEmail': 'พิมพ์ {email} เพื่อยืนยัน',
  'account.label': 'บัญชี',
  'account.continue.title': 'ดำเนินการต่อบนอุปกรณ์อื่น',
  'account.continue.detail':
    'ลงชื่อเข้าใช้เพื่อบันทึกเกมที่ใช้งานของเบราว์เซอร์นี้โดยอัตโนมัติ',
  'account.signIn': 'ลงชื่อเข้าใช้งานด้วย Google',
  'account.signIn.short': 'เข้าสู่ระบบ',
  'game.title': 'ปริศนาระดับ{difficulty}',
  'game.statusActions': 'สถานะและการกระทำของเกม',
  'game.elapsed': 'เวลาที่ผ่านไป',
  'game.mistakes': 'ข้อผิดพลาด {count}',
  'game.mistakes.label':
    '{count, plural, one {# ข้อผิดพลาด} other {# ข้อผิดพลาด} }',
  'game.resume': 'ประวัติย่อ',
  'game.pause': 'หยุดชั่วคราว',
  'status.resumed': 'ปริศนาดำเนินการต่อ',
  'status.paused': 'ปริศนาหยุดชั่วคราว',
  'status.restarted':
    'ปริศนาเริ่มต้นใหม่แล้ว ความพยายามครั้งใหม่ ปริศนาเดียวกัน',
  'status.hintClosed': 'ปิดคำแนะนำแล้ว ปริศนาของคุณไม่เปลี่ยนแปลง',
  'status.strategyApplied': 'ใช้กลยุทธ์แล้ว คุณสามารถยกเลิกได้ในขั้นตอนเดียว',
  'status.correctionApplied':
    'ใช้การแก้ไขแล้ว คุณสามารถยกเลิกได้ในขั้นตอนเดียว',
  'status.hintAlreadyApplied': 'คำใบ้นี้สะท้อนให้เห็นบนกระดานแล้ว',
  'status.hintRefreshed': 'บอร์ดเปลี่ยนไป ดังนั้นคำใบ้จึงถูกรีเฟรช',
  'status.accountSaved': 'เกมที่บันทึกไว้ในบัญชีของคุณ',
  'status.waitBeforeLeaving':
    'รอการเคลื่อนไหวที่ค้างอยู่ก่อนที่จะออกจากปริศนานี้',
  'status.selectEditableCell': 'เลือกช่องที่สามารถแก้ไขได้ก่อนป้อนตัวเลข',
  'status.savingAccount': 'บันทึกเกมท้องถิ่นของคุณลงในบัญชีของคุณ...',
  'status.restoring': 'กำลังกู้คืนปริศนาของคุณ...',
  'status.restored': 'ปริศนาท้องถิ่นของคุณได้รับการกู้คืนแล้ว',
  'status.puzzleReady': 'ปริศนาระดับ{difficulty}พร้อมแล้ว',
  'status.puzzleRestored': 'กู้คืนปริศนาระดับ{difficulty}แล้ว',
  'status.waitBeforeStarting':
    'รอการเคลื่อนไหวที่ค้างอยู่ก่อนที่จะเริ่มปริศนาอื่น',
  'status.solved': 'แก้สำเร็จแล้ว! เยี่ยมมาก',
  'status.moveSaved': 'ย้ายที่บันทึกไว้',
  'status.waitBeforeHint': 'รอการเคลื่อนไหวที่ค้างอยู่ก่อนที่จะเปิดคำใบ้',
  'status.hintReady': 'พร้อมคำใบ้. เริ่มต้นด้วยขั้นตอนที่ 1',
  'status.openingSaved': 'กำลังเปิดเกมที่บันทึกไว้...',
  'status.savedDeleted': 'ลบเกมที่บันทึกไว้แล้ว',
  'status.allDeleted': 'ลบเกมที่บันทึกไว้ทั้งหมดแล้ว',
  'status.signedOut': 'ออกจากระบบแล้ว เกมบัญชีของคุณยังคงถูกบันทึกไว้',
  'status.revoked': 'ออกจากระบบทุกที่ ลงชื่อเข้าใช้อีกครั้งเพื่อดำเนินการต่อ',
  'status.accountDeleted': 'ลบบัญชีและเกมที่บันทึกไว้แล้ว',
  'retry.saving': 'ลองบันทึกอีกครั้ง',
  'retry.restoring': 'ลองกู้คืนอีกครั้ง',
  'retry.connection': 'ตรวจสอบการเชื่อมต่อ',
  'retry.starting': 'ลองเริ่มต้นใหม่อีกครั้ง',
  'retry.move': 'ลองย้ายอีกครั้ง',
  'retry.hint': 'ลองคำใบ้อีกครั้ง',
  'retry.time': 'ลองประหยัดเวลาอีกครั้ง',
  'retry.progress': 'ลองบันทึกความคืบหน้าอีกครั้ง',
  'retry.leaving': 'ลองออกไปอีกครั้ง',
  'retry.opening': 'ลองเปิดอีกครั้ง',
  'retry.deleting': 'ลองลบอีกครั้ง',
  'retry.signOut': 'ลองออกจากระบบอีกครั้ง',
  'retry.revoke': 'ลองออกจากระบบทุกที่อีกครั้ง',
  'retry.deleteAccount': 'ลองลบบัญชีอีกครั้ง',
  'error.accountSave':
    'เกมในพื้นที่ของคุณปลอดภัย แต่ไม่สามารถบันทึกลงในบัญชีของคุณได้',
  'error.restoring': 'ปริศนาของคุณไม่สามารถกู้คืนได้',
  'error.connection':
    'ไม่สามารถเข้าถึงบริการเกมได้ ตรวจสอบการเชื่อมต่อของคุณแล้วลองอีกครั้ง',
  'error.http': 'บริการเกมส่งคืนข้อผิดพลาด {status} โปรดลองอีกครั้ง',
  'error.unavailable':
    'บริการเกมไม่สามารถใช้งานได้ชั่วคราว บอร์ดของคุณปลอดภัย ลองอีกครั้ง',
  'error.starting': 'ไม่สามารถเริ่มเกมได้',
  'error.signInAgain': 'ลงชื่อเข้าใช้อีกครั้งเพื่อบันทึกการเคลื่อนไหว',
  'error.localUnavailable': 'เกมท้องถิ่นไม่พร้อมใช้งาน',
  'error.move': 'ไม่สามารถบันทึกการย้ายได้',
  'error.currentUnavailable': 'เกมปัจจุบันไม่พร้อมใช้งาน',
  'error.hintChanged': 'กระดานเปลี่ยนไปในขณะที่เตรียมคำใบ้',
  'error.hint': 'ไม่สามารถเตรียมคำใบ้ได้',
  'error.time': 'ไม่สามารถบันทึกเวลาเล่นเกมล่าสุดได้',
  'error.timer': 'ไม่สามารถบันทึกสถานะตัวจับเวลาล่าสุดได้',
  'error.leaving': 'ไม่สามารถเคลียร์ปริศนาในเครื่องได้',
  'error.opening': 'เกมที่บันทึกไว้นั้นไม่สามารถเปิดได้',
  'error.deleteGame': 'ไม่สามารถลบเกมที่บันทึกไว้ได้',
  'error.deleteAll': 'เกมที่บันทึกไว้ไม่สามารถลบได้',
  'error.signOut': 'คุณไม่สามารถออกจากระบบได้',
  'error.revoke': 'ไม่สามารถเพิกถอนเซสชันได้',
  'error.deleteAccount': 'ไม่สามารถลบบัญชีได้',
  'error.invalid-request': 'คำขอไม่ถูกต้อง',
  'error.invalid-json': 'คำขอมี JSON ที่ไม่ถูกต้อง',
  'error.unsupported-media-type': 'ไม่รองรับคำขอ Content-Type',
  'error.payload-too-large': 'คำขอมีขนาดใหญ่เกินไป',
  'error.unauthorized': 'จำเป็นต้องได้รับอนุญาต',
  'error.forbidden-origin': 'ไม่อนุญาตให้ใช้ที่มาของคำขอนี้',
  'error.session-not-found': 'ไม่พบเซสชันเกม',
  'error.revision-conflict': 'บอร์ดมีการเปลี่ยนแปลงก่อนที่จะใช้การย้ายนี้',
  'error.invalid-session': 'เซสชันเกมไม่ถูกต้อง',
  'error.invalid-action': 'การกระทำของเกมนี้ไม่ถูกต้อง',
  'error.invalid-cell': 'ช่องนี้ไม่ถูกต้อง',
  'error.immutable-cell': 'ช่องที่ระบุไม่สามารถเปลี่ยนแปลงได้',
  'error.note-not-allowed': 'ไม่สามารถเปลี่ยนแปลงตัวเลือกในช่องนี้ได้',
  'error.no-undo': 'ไม่มีการดำเนินการที่จะเลิกทำ',
  'error.no-redo': 'ไม่มีการดำเนินการที่จะทำซ้ำ',
  'error.no-hint': 'ไม่มีคำใบ้',
  'error.stale-hint': 'กระดานเปลี่ยนไปหลังจากเตรียมคำใบ้นี้แล้ว',
  'error.persistence-failed': 'ไม่สามารถบันทึกเกมได้',
  'error.internal-error': 'ไม่สามารถดำเนินการตามคำขอได้',
  'error.account-unavailable': 'คุณสมบัติบัญชีไม่พร้อมใช้งาน',
  'error.account-unauthorized': 'จำเป็นต้องมีเซสชันการสมัครที่ถูกต้อง',
  'error.csrf-failed':
    'ไม่สามารถยืนยันการลงชื่อเข้าใช้นี้ได้ กรุณาเข้าสู่ระบบอีกครั้ง',
  'error.account-game-not-found': 'ไม่พบเกมที่บันทึกไว้',
  'error.guest-revision-conflict':
    'เกมท้องถิ่นมีการเปลี่ยนแปลงก่อนที่จะใช้การดำเนินการนี้',
  'error.guest-claim-conflict': 'เกมท้องถิ่นนี้ถูกบันทึกลงในบัญชีแล้ว',
  'error.malformedDescriptor': 'ไม่สามารถแสดงคำอธิบายได้',
  'account.close': 'ปิดแผงบัญชี',
  'account.games.title': 'เกมของฉัน',
  'account.games.deleteAll': 'ลบทั้งหมด',
  'account.games.deletingAll': 'กำลังลบทั้งหมด...',
  'account.games.empty': 'ยังไม่มีเกมที่บันทึกไว้',
  'account.games.puzzle': 'ปริศนา {difficulty}',
  'account.games.finished': 'ที่เสร็จเรียบร้อย',
  'account.games.inProgress': 'อยู่ระหว่างดำเนินการ',
  'account.games.saved': 'เกมที่บันทึกไว้',
  'account.games.open': 'เปิด',
  'account.games.opening': 'กำลังเปิด...',
  'account.games.delete': 'ลบ',
  'account.games.deleting': 'กำลังลบ...',
  'account.signOut': 'ออกจากระบบ',
  'account.signingOut': 'กำลังออกจากระบบ...',
  'account.settings': 'การตั้งค่าบัญชี',
  'account.revoke': 'ออกจากระบบทุกที่',
  'account.delete': 'ลบบัญชี',
  'board.label': 'บอร์ดเกมซูโดกุ',
  'board.cell':
    'แถว {row}, คอลัมน์ {column}, {content}{pending, select, true {, กำลังตรวจสอบ } other {} }{invalid, select, true {, ไม่ถูกต้อง} other {} }{hint, select, none {} other {, {hint}} }',
  'board.cell.given': 'ให้ {value}',
  'board.cell.value': '{value}',
  'board.cell.candidates': 'ว่างเปล่า ตัวเลือก {candidates}',
  'board.cell.empty': 'ว่างเปล่า',
  'board.hint.focus': 'โฟกัสคำใบ้',
  'board.hint.premise': 'หลักฐานคำใบ้',
  'board.hint.eliminated': 'ตัวเลือกที่ถูกคัดออก',
  'board.hint.conclusion': 'ข้อสรุปคำใบ้',
  'board.hint.problem': 'ต้องการการแก้ไข',
  'board.hint.extra': 'ตัวเลือกที่เป็นไปไม่ได้',
  'board.hint.group': 'กลุ่ม {group}',
  'board.hint.chain': 'ตำแหน่งโซ่ {position}',
  'board.paused.title': 'ปริศนาหยุดชั่วคราว',
  'board.paused.detail': 'เวลาของคุณหยุดแล้ว',
  'hint.label': 'คำใบ้',
  'hint.close': 'ปิด',
  'hint.strategy.grade': 'ระดับ {grade}',
  'hint.applying': 'กำลังใช้คำแนะนำ...',
  'hint.refreshing': 'คำใบ้ที่สดชื่น...',
  'hint.step': 'ขั้นตอน {current} ของ {total}',
  'hint.legend.label': 'ตำนานคำใบ้ภาพ',
  'hint.legend.strong': 'ของแข็ง: ต้องมี',
  'hint.legend.weak': 'ประ: ไม่สามารถทั้งสองอย่างได้',
  'hint.legend.implication': 'ลูกศร: ความหมายโดยนัย',
  'hint.legend.groups': 'A/B: การสลับกลุ่ม',
  'hint.legend.order': 'หมายเลข: คำสั่งลูกโซ่',
  'hint.back': 'กลับ',
  'hint.next': 'ต่อไป',
  'hint.apply': 'ใช้คำใบ้',
  'controls.label': 'การควบคุมเกม',
  'controls.digit.note': 'เพิ่มหรือลบบันทึกย่อ {digit}',
  'controls.digit.enter': 'ป้อน {digit}',
  'controls.hint.preparing': 'กำลังเตรียมคำแนะนำ...',
  'controls.hint.preparingDetail':
    'ทำให้มองเห็นปริศนาได้ในขณะที่เตรียมขั้นตอนต่อไป',
  'controls.complete.eyebrow': 'ปริศนาเสร็จสมบูรณ์',
  'controls.complete.title': 'แก้ได้ใน {time}',
  'controls.complete.detail':
    'รักษาจังหวะด้วยกระดาน {difficulty} อื่นหรือเลือกระดับอื่น',
  'controls.complete.another': 'เล่น {difficulty} อีกอัน',
  'controls.complete.replay': 'เล่นปริศนานี้ซ้ำ',
  'controls.complete.choose': 'เลือกระดับอื่น',
  'controls.pad': 'แป้นตัวเลข',
  'controls.pad.notes': 'แป้นตัวเลข โหมดบันทึกย่อ',
  'controls.modes': 'โหมดอินพุต',
  'controls.notes.on': 'เปิดโน้ต',
  'controls.notes.off': 'ปิดโน้ต',
  'controls.candidates.on': 'เปิดตัวเลือก',
  'controls.candidates.off': 'ปิดตัวเลือก',
  'controls.actions': 'การกระทำปริศนา',
  'controls.erase': 'ลบ',
  'controls.undo': 'เลิกทำ',
  'controls.undoing': 'กำลังเลิกทำ...',
  'controls.redo': 'ทำซ้ำ',
  'controls.redoing': 'กำลังทำซ้ำ…',
  'controls.hint.reveal': 'เผยคำใบ้',
  'controls.shortcuts': 'แป้นพิมพ์ลัด',
  'controls.shortcuts.move': 'เคลื่อนไหว',
  'controls.shortcuts.arrows': 'ปุ่มลูกศร',
  'controls.shortcuts.enter': 'ป้อนตัวเลข',
  'controls.shortcuts.notes': 'โน้ต / ตัวเลือก',
  'controls.shortcuts.or': 'หรือ',
  'controls.shortcuts.pause': 'หยุดชั่วคราวหรือดำเนินการต่อ',
  'controls.shortcuts.hint': 'เปิด ก้าวหน้า หรือใช้คำใบ้',
  'controls.shortcuts.hintOther': 'การควบคุมคำใบ้อื่น ๆ',
  'hint.target.candidate.visible': 'ตัวเลือกที่ไฮไลต์นี้',
  'hint.target.candidate.locator': '{value} · r{row}c{column}',
  'hint.target.candidate.accessible':
    'ตัวเลือก {value} ที่แถว {row} คอลัมน์ {column}',
  'hint.target.cell.visible': 'ช่องที่ไฮไลต์นี้',
  'hint.target.cell.locator': 'r{row}c{column}',
  'hint.target.cell.accessible': 'แถว {row} คอลัมน์ {column}',
  'hint.target.unit.visible': 'สิ่งนี้เน้น {kind}',
  'hint.target.unit.locator': '{kind} {index}',
  'hint.target.unit.accessible': '{kind} {index}',
  'hint.target.row': 'แถว',
  'hint.target.column': 'คอลัมน์',
  'hint.target.box': 'บล็อก',
  'chrome.home': 'บ้านซูโดกุ',
  'chrome.appearance': 'รูปร่าง',
  'chrome.theme.use': 'ใช้ธีม {theme}',
  'chrome.theme.systemTitle': 'ธีมของระบบ ({theme})',
  'chrome.theme.title': 'ธีม {theme}',
  'chrome.theme.system': 'ระบบ',
  'chrome.theme.systemName': 'ระบบ',
  'chrome.theme.light': 'แสงสว่าง',
  'chrome.theme.dark': 'มืด',
  'chrome.connection.connecting': 'กำลังเชื่อมต่อ',
  'chrome.connection.unavailable': 'บริการไม่พร้อมใช้งาน',
  'chrome.footer.tagline': 'เล่นอย่างใช้ความคิดโดยไม่มีการรบกวน',
  'chrome.footer.privacy': 'ความเป็นส่วนตัว',
  'chrome.footer.terms': 'เงื่อนไข',
  'chrome.footer.input': 'แป้นพิมพ์และระบบสัมผัสพร้อมแล้ว',
} as const;
