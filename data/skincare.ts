// data/skincare.ts
export interface SkincareItem {
  id: number;
  code: string;
  name: string;
  desc: string;
  wholesale: number; // price in KES
  category: 'cleanser' | 'toner' | 'serum' | 'cream' | 'sunscreen' | 'mask' | 'eye' | 'body';
  image: string; // path inside /public/images/skincare/
}

export const skincareItems: SkincareItem[] = [
  // -------- COSRX Products --------
  {
    id: 1,
    code: 'COSRX-SAL',
    name: 'COSRX Salicylic Acid Daily Gentle Cleanser',
    desc: '150ml • Gentle exfoliation • pH balanced • For acne-prone skin',
    wholesale: 1569,
    category: 'cleanser',
    image: '/images/skincare/cosrx-salicylic-cleanser.jpg',
  },
  {
    id: 2,
    code: 'COSRX-LOWPH',
    name: 'COSRX Low pH Good Morning Gel Cleanser',
    desc: '150ml • Mild cleansing • Maintains skin pH • Tea tree oil',
    wholesale: 1620,
    category: 'cleanser',
    image: '/images/skincare/cosrx-lowph-cleanser.jpg',
  },
  {
    id: 3,
    code: 'COSRX-SNAIL96',
    name: 'COSRX Advanced Snail 96 Mucin Power Essence',
    desc: '100ml • Hydrating • Skin repair • 96% snail secretion filtrate',
    wholesale: 2365,
    category: 'serum',
    image: '/images/skincare/cosrx-snail-96.jpg',
  },
  {
    id: 4,
    code: 'COSRX-SNAILDUAL',
    name: 'COSRX Advanced Snail Radiance Dual Essence',
    desc: '80ml • Brightening • Dual layer formula • Niacinamide',
    wholesale: 3589,
    category: 'serum',
    image: '/images/skincare/cosrx-snail-dual.jpg',
  },
  {
    id: 5,
    code: 'COSRX-BHA',
    name: 'COSRX BHA Blackhead Power Liquid',
    desc: '100ml • Exfoliating • 4% betaine salicylate • Pore care',
    wholesale: 2276,
    category: 'toner',
    image: '/images/skincare/cosrx-bha.jpg',
  },
  {
    id: 6,
    code: 'COSRX-HYALURON',
    name: 'COSRX Hyaluronic Hydra Intensive Cream',
    desc: '100ml • Deep hydration • Hyaluronic acid • Moisture barrier',
    wholesale: 2521,
    category: 'cream',
    image: '/images/skincare/cosrx-hyaluron-cream.jpg',
  },
  {
    id: 7,
    code: 'COSRX-SNAIL92',
    name: 'COSRX Advance Snail 92 All In One Cream',
    desc: '100ml • Multi-functional • 92% snail mucin • Lightweight',
    wholesale: 2488,
    category: 'cream',
    image: '/images/skincare/cosrx-snail-92.jpg',
  },
  {
    id: 8,
    code: 'COSRX-ALOESPF',
    name: 'COSRX Aloe Soothing Sun Cream SPF50 PA+++',
    desc: '50ml • Broad spectrum • Aloe vera • Non-greasy',
    wholesale: 1573,
    category: 'sunscreen',
    image: '/images/skincare/cosrx-aloe-spf.jpg',
  },
  {
    id: 9,
    code: 'COSRX-OILFREE',
    name: 'COSRX Oil-Free Ultra-Moisturizing Lotion',
    desc: '150ml • Lightweight • Birch sap • For oily skin',
    wholesale: 2247,
    category: 'cream',
    image: '/images/skincare/cosrx-oilfree.jpg',
  },
  {
    id: 10,
    code: 'COSRX-RETINOL',
    name: 'COSRX Retinol 0.5 Oil',
    desc: '30ml • Anti-aging • 0.5% retinol • Squalane base',
    wholesale: 2930,
    category: 'serum',
    image: '/images/skincare/cosrx-retinol.jpg',
  },
  {
    id: 11,
    code: 'COSRX-VITC23',
    name: 'COSRX The Vitamin C 23 Serum',
    desc: '20ml • Brightening • 23% vitamin C • Firming',
    wholesale: 2656,
    category: 'serum',
    image: '/images/skincare/cosrx-vitc23.jpg',
  },
  {
    id: 12,
    code: 'COSRX-HA3',
    name: 'COSRX The Hyaluronic Acid 3 Serum',
    desc: '30ml • Hydrating • 3 types of hyaluronic acid',
    wholesale: 2735,
    category: 'serum',
    image: '/images/skincare/cosrx-ha3.jpg',
  },
  {
    id: 13,
    code: 'COSRX-NIACIN',
    name: 'COSRX The Niacinamide 15 Serum',
    desc: '30ml • Brightening • 15% niacinamide • Blemish care',
    wholesale: 2735,
    category: 'serum',
    image: '/images/skincare/cosrx-niacin.jpg',
  },

  // -------- PURITO Products --------
  {
    id: 14,
    code: 'PURITO-SPF',
    name: 'PURITO Daily Go-To SunScreen',
    desc: '60ml • SPF50+ PA++++ • Centella asiatica • Light texture',
    wholesale: 2235,
    category: 'sunscreen',
    image: '/images/skincare/purito-sunscreen.jpg',
  },
  {
    id: 15,
    code: 'PURITO-VITC',
    name: 'PURITO Pure Vitamin C Serum',
    desc: '60ml • 5% vitamin C • Niacinamide • Brightening',
    wholesale: 2508,
    category: 'serum',
    image: '/images/skincare/purito-vitc.jpg',
  },

  // -------- BENTON Products --------
  {
    id: 16,
    code: 'BENTON-CLEAN',
    name: 'BENTON Honest Cleansing Foam',
    desc: '150ml • Mild foaming • Tea tree extract • pH balanced',
    wholesale: 1671,
    category: 'cleanser',
    image: '/images/skincare/benton-cleanser.jpg',
  },
  {
    id: 17,
    code: 'BENTON-ALOEBHA',
    name: 'BENTON Aloe Bha Skin Toner',
    desc: '200ml • Soothing • Aloe vera • Gentle exfoliation',
    wholesale: 2103,
    category: 'toner',
    image: '/images/skincare/benton-aloe-bha.jpg',
  },
  {
    id: 18,
    code: 'BENTON-ALOEHY',
    name: 'BENTON Aloe Hyaluron Cream',
    desc: '50g • Hydrating • Aloe + hyaluronic acid • Lightweight',
    wholesale: 1781,
    category: 'cream',
    image: '/images/skincare/benton-aloe-hy.jpg',
  },
  {
    id: 19,
    code: 'BENTON-ALOEGEL',
    name: 'BENTON Aloe Propolis Soothing Gel',
    desc: '100ml • Calming • Aloe + propolis • Multi-purpose',
    wholesale: 1698,
    category: 'cream',
    image: '/images/skincare/benton-aloe-gel.jpg',
  },
  {
    id: 20,
    code: 'BENTON-ALOEMASK',
    name: 'BENTON Aloe Soothing Mask Pack',
    desc: '10 sheets • Soothing • Aloe vera • Hydrating',
    wholesale: 2950,
    category: 'mask',
    image: '/images/skincare/benton-aloe-mask.jpg',
  },
  {
    id: 21,
    code: 'BENTON-EYE',
    name: 'BENTON Fermentation Eye Cream',
    desc: '30g • Anti-aging • Fermented ingredients • Nourishing',
    wholesale: 2271,
    category: 'eye',
    image: '/images/skincare/benton-eye.jpg',
  },
  {
    id: 22,
    code: 'BENTON-BODY',
    name: 'BENTON Shea Butter & Coconut Body Lotion',
    desc: '250ml • Nourishing • Shea butter + coconut • Moisturizing',
    wholesale: 2291,
    category: 'body',
    image: '/images/skincare/benton-body.jpg',
  },
  {
    id: 23,
    code: 'BENTON-HAND1',
    name: 'BENTON Shea Butter & Coconut Hand Cream',
    desc: '50ml • Intensive care • Shea butter + coconut oil',
    wholesale: 954,
    category: 'body',
    image: '/images/skincare/benton-hand1.jpg',
  },
  {
    id: 24,
    code: 'BENTON-HAND2',
    name: 'BENTON Shea Butter & Olive Hand Cream',
    desc: '50ml • Nourishing • Shea butter + olive oil',
    wholesale: 954,
    category: 'body',
    image: '/images/skincare/benton-hand2.jpg',
  },
  {
    id: 25,
    code: 'BENTON-SNAILBEE',
    name: 'BENTON Snail Bee High Content Essence',
    desc: '60ml • Repairing • Snail mucin + bee venom • Anti-aging',
    wholesale: 2198,
    category: 'serum',
    image: '/images/skincare/benton-snail-bee.jpg',
  },
  {
    id: 26,
    code: 'BENTON-SNAILMASK',
    name: 'BENTON Snail Bee High Content Mask Pack',
    desc: '10 sheets • Hydrating • Snail mucin + bee venom',
    wholesale: 3391,
    category: 'mask',
    image: '/images/skincare/benton-snail-mask.jpg',
  },
  // -------- BENTON Products (Continued) --------
{
  id: 27,
  code: 'BENTON-SNAILSKIN',
  name: 'BENTON Snail Bee High Content Skin',
  desc: '150ml • Hydrating • Snail mucin + bee venom • Prepares skin',
  wholesale: 2397,
  category: 'toner',
  image: '/images/skincare/benton-snail-skin.jpg',
},
{
  id: 28,
  code: 'BENTON-SNAILSTEAM',
  name: 'BENTON Snail Bee High Content Steam Cream',
  desc: '50g • Nourishing • Steam-based absorption • Anti-aging',
  wholesale: 2158,
  category: 'cream',
  image: '/images/skincare/benton-snail-steam.jpg',
},
{
  id: 29,
  code: 'BENTON-SNAILULT',
  name: 'BENTON Snail Bee Ultimate Serum',
  desc: '50ml • Intensive repair • Snail mucin + peptides',
  wholesale: 2402,
  category: 'serum',
  image: '/images/skincare/benton-snail-ult.jpg',
},
{
  id: 30,
  code: 'BENTON-SNAILEYE',
  name: 'BENTON Snail Bee Ultimate Eye Cream',
  desc: '30g • Anti-wrinkle • Snail mucin + adenosine',
  wholesale: 2271,
  category: 'eye',
  image: '/images/skincare/benton-snail-eye.jpg',
},
{
  id: 31,
  code: 'BENTON-SNAILLOTION',
  name: 'BENTON Snail Bee High Content Lotion',
  desc: '120ml • Lightweight • Snail mucin • Daily hydration',
  wholesale: 2379,
  category: 'cream',
  image: '/images/skincare/benton-snail-lotion.jpg',
},
{
  id: 32,
  code: 'BENTON-ALOEGEL300',
  name: 'BENTON Aloe Real Cool Soothing Gel',
  desc: '300ml • Cooling • Aloe vera • For face/body',
  wholesale: 2234,
  category: 'cream',
  image: '/images/skincare/benton-aloe-gel300.jpg',
},
{
  id: 33,
  code: 'BENTON-HYDROGEL',
  name: 'BENTON Snail Bee Ultimate Hydrogel Eye Patch',
  desc: '60 patches • Depuffing • Hydrogel technology • Brightening',
  wholesale: 2902,
  category: 'eye',
  image: '/images/skincare/benton-hydrogel.jpg',
},
{
  id: 34,
  code: 'BENTON-AIRSPF',
  name: 'BENTON Air Fit UV Defense Sun Cream',
  desc: '50ml • SPF50+ PA++++ • Lightweight • Non-greasy',
  wholesale: 2003,
  category: 'sunscreen',
  image: '/images/skincare/benton-air-spf.jpg',
},

// -------- Pyunkang Yul Products --------
{
  id: 35,
  code: 'PKY-ACNECREAM',
  name: 'Pyunkang Yul Acne Cream',
  desc: '50ml • Spot treatment • Tea tree extract • Calming',
  wholesale: 1701,
  category: 'cream',
  image: '/images/skincare/pky-acne-cream.jpg',
},
{
  id: 36,
  code: 'PKY-ACNEMASK',
  name: 'Pyunkang Yul Acne Dressing Mask Pack',
  desc: '1 sheet • Spot care • Acne treatment • Soothing',
  wholesale: 325,
  category: 'mask',
  image: '/images/skincare/pky-acne-mask.jpg',
},
{
  id: 37,
  code: 'PKY-ACNECLEAN',
  name: 'Pyunkang Yul Acne Facial Cleanser',
  desc: '120ml • Gentle foaming • For acne-prone skin • pH balanced',
  wholesale: 1725,
  category: 'cleanser',
  image: '/images/skincare/pky-acne-cleanser.jpg',
},
{
  id: 38,
  code: 'PKY-SPOTCREAM',
  name: 'Pyunkang Yul Acne Spot Cream',
  desc: '15ml • Targeted treatment • Fast absorption • Anti-bacterial',
  wholesale: 1302,
  category: 'cream',
  image: '/images/skincare/pky-spot-cream.jpg',
},
{
  id: 39,
  code: 'PKY-ACNETONER',
  name: 'Pyunkang Yul Acne Toner',
  desc: '150ml • Oil control • Witch hazel • Pore care',
  wholesale: 2069,
  category: 'toner',
  image: '/images/skincare/pky-acne-toner.jpg',
},
{
  id: 40,
  code: 'PKY-SPOTPATCH',
  name: 'Pyunkang Yul Acne Spot Patch Super Thin',
  desc: '15 patches • Invisible wear • Hydrocolloid • Spot treatment',
  wholesale: 450,
  category: 'mask',
  image: '/images/skincare/pky-spot-patch.jpg',
},
{
  id: 41,
  code: 'PKY-ATOSPF',
  name: 'Pyunkang Yul ATO Mild Sunscreen',
  desc: '50ml • SPF50+ PA++++ • Sensitive skin • Non-irritating',
  wholesale: 1995,
  category: 'sunscreen',
  image: '/images/skincare/pky-ato-spf.jpg',
},
{
  id: 42,
  code: 'PKY-ATOCREAM',
  name: 'Pyunkang Yul Ato Cream Blue Label',
  desc: '120ml • Barrier repair • Ceramides • For dry/sensitive skin',
  wholesale: 2180,
  category: 'cream',
  image: '/images/skincare/pky-ato-cream.jpg',
},
{
  id: 43,
  code: 'PKY-ATOLOTION',
  name: 'Pyunkang Yul Ato Lotion Blue Label',
  desc: '290ml • Lightweight • Moisturizing • For body/face',
  wholesale: 2858,
  category: 'cream',
  image: '/images/skincare/pky-ato-lotion.jpg',
},
{
  id: 44,
  code: 'PKY-ATOGEL',
  name: 'Pyunkang Yul Ato Moisturizing Soothing Gel Lotion',
  desc: '150ml • Cooling • Aloe vera • For irritated skin',
  wholesale: 2299,
  category: 'cream',
  image: '/images/skincare/pky-ato-gel.jpg',
},
{
  id: 45,
  code: 'PKY-BALGEL100',
  name: 'Pyunkang Yul Balancing Gel',
  desc: '100ml • Oil-water balance • Lightweight • All skin types',
  wholesale: 2810,
  category: 'cream',
  image: '/images/skincare/pky-bal-gel100.jpg',
},
{
  id: 46,
  code: 'PKY-BALGEL60',
  name: 'Pyunkang Yul Balancing Gel',
  desc: '60ml • Mini size • Oil control • Portable',
  wholesale: 2025,
  category: 'cream',
  image: '/images/skincare/pky-bal-gel60.jpg',
},
{
  id: 47,
  code: 'PKY-CALMCLEAN',
  name: 'Pyunkang Yul Calming Low pH Foaming Cleanser',
  desc: '150ml • Gentle foam • pH 5.5 • For sensitive skin',
  wholesale: 2168,
  category: 'cleanser',
  image: '/images/skincare/pky-calm-cleanser.jpg',
},
{
  id: 48,
  code: 'PKY-CALMTONER',
  name: 'Pyunkang Yul Calming Deep Moisture Toner',
  desc: '150ml • Hydrating • Panthenol • Soothing',
  wholesale: 2082,
  category: 'toner',
  image: '/images/skincare/pky-calm-toner.jpg',
},
{
  id: 49,
  code: 'PKY-CALMMASK',
  name: 'Pyunkang Yul Calming Mask Pack',
  desc: '10 sheets • Intensive calming • Madecassoside • Hydrating',
  wholesale: 3141,
  category: 'mask',
  image: '/images/skincare/pky-calm-mask.jpg',
},
{
  id: 50,
  code: 'PKY-CALMCREAM',
  name: 'Pyunkang Yul Calming Moisture Barrier Cream',
  desc: '50ml • Barrier support • Centella asiatica • Rich texture',
  wholesale: 2251,
  category: 'cream',
  image: '/images/skincare/pky-calm-cream.jpg',
},
{
  id: 51,
  code: 'PKY-CALMBALM',
  name: 'Pyunkang Yul Calming Moisture Repair Balm',
  desc: '30ml • Intensive repair • For dry patches • Portable',
  wholesale: 1458,
  category: 'cream',
  image: '/images/skincare/pky-calm-balm.jpg',
},
{
  id: 52,
  code: 'PKY-PEELGEL',
  name: 'Pyunkang Yul Peeling Gel',
  desc: '100ml • Gentle exfoliation • Cellulose-based • No irritation',
  wholesale: 2016,
  category: 'cleanser',
  image: '/images/skincare/pky-peel-gel.jpg',
},

// -------- Pyunkang Yul Products (Continued) --------
{
  id: 53,
  code: 'PKY-FOAM150',
  name: 'Pyunkang Yul Cleansing Foam 150ml (Renewal)',
  desc: '150ml • Mild foaming • pH balanced • Deep cleansing without stripping',
  wholesale: 2086,
  category: 'cleanser',
  image: '/images/skincare/pky-foam150.jpg',
},
{
  id: 54,
  code: 'PKY-OIL290',
  name: 'Pyunkang Yul Deep Cleansing Oil 290ml',
  desc: '290ml • Oil-based cleanser • Removes makeup/sunscreen • Non-greasy rinse',
  wholesale: 2630,
  category: 'cleanser',
  image: '/images/skincare/pky-oil290.jpg',
},
{
  id: 55,
  code: 'PKY-ESS100',
  name: 'Pyunkang Yul Essence Toner 100ml',
  desc: '100ml • Milky texture • Astragalus root extract • Hydrating',
  wholesale: 1783,
  category: 'toner',
  image: '/images/skincare/pky-ess100.jpg',
},
{
  id: 56,
  code: 'PKY-ESS200',
  name: 'Pyunkang Yul Essence Toner 200ml',
  desc: '200ml • Best-selling toner • Strengthens skin barrier • Lightweight',
  wholesale: 2483,
  category: 'toner',
  image: '/images/skincare/pky-ess200.jpg',
},
{
  id: 57,
  code: 'PKY-ESS30',
  name: 'Pyunkang Yul Essence Toner 30ml (Mini)',
  desc: '30ml • Travel size • Same benefits as full size • Portable',
  wholesale: 881,
  category: 'toner',
  image: '/images/skincare/pky-ess30.jpg',
},
{
  id: 58,
  code: 'PKY-EYESTICK',
  name: 'Pyunkang Yul Eye Cream (1ml x 50 sticks)',
  desc: '50 sticks • Convenient application • Anti-wrinkle • Portable',
  wholesale: 2349,
  category: 'eye',
  image: '/images/skincare/pky-eye-stick.jpg',
},
{
  id: 59,
  code: 'PKY-HYDMASK',
  name: 'Pyunkang Yul Highly Moisturizing Essence Mask Pack',
  desc: '25ml x 10pcs • Intensive hydration • Cotton sheet mask • Soothing',
  wholesale: 3227,
  category: 'mask',
  image: '/images/skincare/pky-hyd-mask.jpg',
},
{
  id: 60,
  code: 'PKY-WATER290',
  name: 'Pyunkang Yul Low pH Cleansing Water 290ml',
  desc: '290ml • Micellar technology • pH 5.5 • Removes impurities gently',
  wholesale: 2327,
  category: 'cleanser',
  image: '/images/skincare/pky-water290.jpg',
},
{
  id: 61,
  code: 'PKY-POREFOAM100',
  name: 'Pyunkang Yul Low pH Pore Deep Cleansing Foam 100ml',
  desc: '100ml • BHA 0.5% • Pore refining • Tea tree extract',
  wholesale: 1899,
  category: 'cleanser',
  image: '/images/skincare/pky-pore-foam100.jpg',
},
{
  id: 62,
  code: 'PKY-POREFOAM40',
  name: 'Pyunkang Yul Low pH Pore Deep Cleansing Foam 40ml',
  desc: '40ml • Travel size • Same benefits as 100ml version • Compact',
  wholesale: 881,
  category: 'cleanser',
  image: '/images/skincare/pky-pore-foam40.jpg',
},
{
  id: 63,
  code: 'PKY-MOISTAMP',
  name: 'Pyunkang Yul Moisture Ampoule 100ml',
  desc: '100ml • Intensive hydration • Ceramides • For very dry skin',
  wholesale: 3031,
  category: 'serum',
  image: '/images/skincare/pky-moist-amp.jpg',
},
{
  id: 64,
  code: 'PKY-MOISTCREAM',
  name: 'Pyunkang Yul Moisture Cream 100ml',
  desc: '100ml • Rich texture • Barrier repair • For face/body',
  wholesale: 3495,
  category: 'cream',
  image: '/images/skincare/pky-moist-cream.jpg',
},
{
  id: 65,
  code: 'PKY-MOISTSERUM',
  name: 'Pyunkang Yul Moisture Serum 100ml',
  desc: '100ml • Lightweight hydration • 5 types of hyaluronic acid',
  wholesale: 2953,
  category: 'serum',
  image: '/images/skincare/pky-moist-serum.jpg',
},
// -------- Pyunkang Yul Products (Continued) --------
{
  id: 66,
  code: 'PKY-NUTRICREAM',
  name: 'Pyunkang Yul Nutrition Cream 100ml',
  desc: '100ml • Nourishing • Ginseng extract • Rich anti-aging formula',
  wholesale: 3728,
  category: 'cream',
  image: '/images/skincare/pky-nutri-cream.jpg',
},

// -------- SOME BY MI Products --------
{
  id: 67,
  code: 'SBM-TRUECICAPAD',
  name: 'SOME BY MI AHA BHA PHA 30 Days Miracle Truecica Clear Pad',
  desc: '70 pads • Exfoliating • Calming (AHA/BHA/PHA + Truecica) • Dual-sided',
  wholesale: 2850,
  category: 'toner',
  image: '/images/skincare/sbm-truecica-pad.jpg',
},
{
  id: 68,
  code: 'SBM-SPOTCREAM',
  name: 'SOME BY MI AHA.BHA.PHA 14Days Super Miracle Spot All Kill Cream',
  desc: '50ml • Targeted treatment • Tea tree + snail mucin • Fast absorption',
  wholesale: 1812,
  category: 'cream',
  image: '/images/skincare/sbm-spot-cream.jpg',
},
{
  id: 69,
  code: 'SBM-ACKIT',
  name: 'SOME BY MI AHA.BHA.PHA 30 Days Miracle Ac SOS Kit',
  desc: '3-piece set • Complete acne care • Cleanser + toner + cream',
  wholesale: 2795,
  category: 'cleanser',
  image: '/images/skincare/sbm-ac-kit.jpg',
},
{
  id: 70,
  code: 'SBM-MIRACLECREAM',
  name: 'SOME BY MI AHA.BHA.PHA 30 Days Miracle Cream 60ml',
  desc: '60ml • Exfoliating moisturizer • 3% complex (AHA/BHA/PHA) • Oil-free',
  wholesale: 2519,
  category: 'cream',
  image: '/images/skincare/sbm-miracle-cream.jpg',
},
{
  id: 71,
  code: 'SBM-MIRACLEFOAM',
  name: 'SOME BY MI AHA.BHA.PHA 30 Days Miracle Foam 100ml',
  desc: '100ml • Low pH • Tea tree + willow bark • Gentle exfoliation',
  wholesale: 2225,
  category: 'cleanser',
  image: '/images/skincare/sbm-miracle-foam.jpg',
},
{
  id: 72,
  code: 'SBM-MIRACLETONER',
  name: 'SOME BY MI AHA.BHA.PHA 30 Days Miracle Toner 150ml',
  desc: '150ml • Hydrating exfoliation • 10,000ppm tea tree water',
  wholesale: 2477,
  category: 'toner',
  image: '/images/skincare/sbm-miracle-toner.jpg',
},
{
  id: 73,
  code: 'SBM-MIRACLESERUM',
  name: 'SOME BY MI AHA.BHA.PHA 30 Days Miracle Serum 50ml',
  desc: '50ml • Spot treatment • 4.5% active complex • Lightweight',
  wholesale: 2494,
  category: 'serum',
  image: '/images/skincare/sbm-miracle-serum.jpg',
},
{
  id: 73.1, // Using decimal to maintain sequence
  code: 'SBM-MIRACLESERUMLIGHT',
  name: 'SOME BY MI AHA-BHA-PHA 30 DAYS MIRACLE SERUM LIGHT',
  desc: '50ml • Lightweight version • 3% active complex • For sensitive skin',
  wholesale: 2505,
  category: 'serum',
  image: '/images/skincare/sbm-miracle-serum-light.jpg',
},
{
  id: 74,
  code: 'SBM-SPOTPATCH',
  name: 'SOME BY MI CLEAR SPOT PATCH',
  desc: '18pcs • Hydrocolloid technology • Ultra-thin • Invisible wear',
  wholesale: 457,
  category: 'mask',
  image: '/images/skincare/sbm-spot-patch.jpg',
},
{
  id: 75,
  code: 'SBM-VITCSERUM',
  name: 'SOME BY MI Galactomyces Pure Vitamin C Glow Serum',
  desc: '30ml • 5% vitamin C + galactomyces • Brightening + antioxidant',
  wholesale: 2151,
  category: 'serum',
  image: '/images/skincare/sbm-vitc-serum.jpg',
},
{
  id: 76,
  code: 'SBM-VITCTONER',
  name: 'SOME BY MI Galactomyces Pure Vitamin C Glow Toner',
  desc: '200ml • Vitamin C derivative • pH balancing • Refreshing',
  wholesale: 2176,
  category: 'toner',
  image: '/images/skincare/sbm-vitc-toner.jpg',
},
// -------- SOME BY MI Products (Continued) --------
{
  id: 77,
  code: 'SBM-HYALMASK',
  name: 'SOME BY MI Hyaluron Moisturizing Glow Luminous Ampoule Mask',
  desc: '10 sheets • Hydrating • Hyaluronic acid • Brightening essence',
  wholesale: 3101,
  category: 'mask',
  image: '/images/skincare/sbm-hyal-mask.jpg',
},
{
  id: 78,
  code: 'SBM-SNAILCREAM',
  name: 'SOME BY MI Snail Truecica Miracle Repair Cream',
  desc: '60g • Barrier repair • 60% snail mucin + Truecica • Rich texture',
  wholesale: 2536,
  category: 'cream',
  image: '/images/skincare/sbm-snail-cream.jpg',
},
{
  id: 79,
  code: 'SBM-SNAILCLEAN',
  name: 'SOME BY MI Snail Truecica Miracle Repair Low pH Gel Cleanser',
  desc: '100ml • Gentle cleansing • Snail mucin + panthenol • pH 5.5',
  wholesale: 2114,
  category: 'cleanser',
  image: '/images/skincare/sbm-snail-cleanser.jpg',
},
{
  id: 80,
  code: 'SBM-SNAILSERUM',
  name: 'SOME BY MI Snail Truecica Miracle Repair Serum',
  desc: '50ml • Intensive repair • 70% snail filtrate + peptides',
  wholesale: 2543,
  category: 'serum',
  image: '/images/skincare/sbm-snail-serum.jpg',
},
{
  id: 81,
  code: 'SBM-SNAILTONER',
  name: 'SOME BY MI Snail Truecica Miracle Repair Toner',
  desc: '135ml • Hydrating • Snail mucin + madecassoside • Alcohol-free',
  wholesale: 2438,
  category: 'toner',
  image: '/images/skincare/sbm-snail-toner.jpg',
},
{
  id: 82,
  code: 'SBM-TRIALKIT',
  name: 'SOME BY MI Total Care Serum Trial Kit',
  desc: '3-piece set • Mini sizes • Snail + Truecica + Vita serums',
  wholesale: 2699,
  category: 'serum',
  image: '/images/skincare/sbm-trial-kit.jpg',
},
{
  id: 83,
  code: 'SBM-YUJASTART',
  name: 'SOME BY MI Yuja Niacin 30 Days Brightening Starter Kit',
  desc: '3-piece set • Cleanser + serum + cream • Brightening routine',
  wholesale: 2804,
  category: 'cleanser',
  image: '/images/skincare/sbm-yuja-starter.jpg',
},
{
  id: 84,
  code: 'SBM-YUJAMASK',
  name: 'SOME BY MI Yuja Niacin 30Days Blemish Care Serum Mask',
  desc: '10 sheets • Brightening • 30% yuja extract + niacinamide',
  wholesale: 2916,
  category: 'mask',
  image: '/images/skincare/sbm-yuja-mask.jpg',
},
{
  id: 85,
  code: 'SBM-YUJASERUM',
  name: 'SOME BY MI Yuja Niacin 30Days Blemish Care Serum',
  desc: '50ml • 2% niacinamide + 30% yuja • Dark spot correction',
  wholesale: 2519,
  category: 'serum',
  image: '/images/skincare/sbm-yuja-serum.jpg',
},
{
  id: 86,
  code: 'SBM-YUJASLEEP',
  name: 'SOME BY MI Yuja Niacin 30Days Miracle Brightening Sleeping Mask',
  desc: '80ml • Overnight treatment • Brightening + hydration',
  wholesale: 2536,
  category: 'mask',
  image: '/images/skincare/sbm-yuja-sleep.jpg',
},
{
  id: 87,
  code: 'SBM-YUJAGEL',
  name: 'SOME BY MI Yuja Niacin Brightening Moisture Gel Cream',
  desc: '100ml • Lightweight • Yuja + niacinamide • Oil-free',
  wholesale: 2301,
  category: 'cream',
  image: '/images/skincare/sbm-yuja-gel.jpg',
},
{
  id: 88,
  code: 'SBM-YUJAPEEL',
  name: 'SOME BY MI Yuja Niacin Brightening Peeling Gel',
  desc: '120ml • Gentle physical exfoliation • Enzymatic + cellulose',
  wholesale: 2099,
  category: 'cleanser',
  image: '/images/skincare/sbm-yuja-peel.jpg',
},

// -------- SOME BY MI Products (Final) --------
{
  id: 89,
  code: 'SBM-YUJATONER',
  name: 'SOME BY MI Yuja Niacin Brightening Toner',
  desc: '150ml • 10% yuja extract + 2% niacinamide • pH balancing',
  wholesale: 2309,
  category: 'toner',
  image: '/images/skincare/sbm-yuja-toner.jpg',
},
{
  id: 90,
  code: 'SBM-VITMASK',
  name: 'SOME BY MI Real Vitamin Brightening Care Mask',
  desc: '20g • Single-use • Vitamin complex • Brightening effect',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-vit-mask.jpg',
},
{
  id: 91,
  code: 'SBM-GLUTAMASK',
  name: 'SOME BY MI Real Glutathione Brightening Care Mask',
  desc: '20g • Single-use • Glutathione + niacinamide • Anti-oxidant',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-gluta-mask.jpg',
},
{
  id: 92,
  code: 'SBM-HYALMASK',
  name: 'SOME BY MI Real Hyaluron Hydra Care Mask',
  desc: '20g • Single-use • Hyaluronic acid • Intensive hydration',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-hyal-mask-single.jpg',
},
{
  id: 93,
  code: 'SBM-ALOEMASK',
  name: 'SOME BY MI Real Aloe Soothing Care Mask',
  desc: '20g • Single-use • 90% aloe vera • Calming effect',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-aloe-mask.jpg',
},
{
  id: 94,
  code: 'SBM-CICAMASK',
  name: 'SOME BY MI Real Cica Calming Care Mask',
  desc: '20g • Single-use • Centella asiatica • Redness relief',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-cica-mask.jpg',
},
{
  id: 95,
  code: 'SBM-HONEYMASK',
  name: 'SOME BY MI Real Honey Luminous Care Mask',
  desc: '20g • Single-use • Propolis + honey • Nourishing',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-honey-mask.jpg',
},
{
  id: 96,
  code: 'SBM-SNAILMASK',
  name: 'SOME BY MI Real Snail Skin Barrier Care Mask',
  desc: '20g • Single-use • 80% snail mucin • Barrier repair',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-snail-mask.jpg',
},
{
  id: 97,
  code: 'SBM-ABPMASK',
  name: 'SOME BY MI Real AHA-BHA-PHA Calming Care Mask',
  desc: '20g • Single-use • Gentle exfoliation • Pore care',
  wholesale: 254,
  category: 'mask',
  image: '/images/skincare/sbm-abp-mask.jpg',
},
{
  id: 98,
  code: 'SBM-PROPOLISSERUM',
  name: 'SOME BY MI Propolis B5 Glow Barrier Calming Serum',
  desc: '50ml • 70% propolis + panthenol • Soothing + glow',
  wholesale: 2550,
  category: 'serum',
  image: '/images/skincare/sbm-propolis-serum.jpg',
},
{
  id: 99,
  code: 'SBM-PROPOLISTONER',
  name: 'SOME BY MI Propolis B5 Glow Barrier Calming Toner',
  desc: '150ml • Honey-like texture • Propolis + hyaluronic acid',
  wholesale: 2305,
  category: 'toner',
  image: '/images/skincare/sbm-propolis-toner.jpg',
},

// -------- SINOZ Products (Unnumbered in PDF) --------
{
  id: 100,
  code: 'SINOZ-ANTIDARKSPF',
  name: 'Sinoz Anti Dark Spot Sunscreen SPF 50+',
  desc: '50ml • PA++++ • Niacinamide • Brightening sun protection',
  wholesale: 938,
  category: 'sunscreen',
  image: '/images/skincare/sinoz-anti-dark-spf.jpg',
},
{
  id: 101,
  code: 'SINOZ-SUNSENSITIVE',
  name: 'Sinoz Sun Sensitive Advanced Dark Spot Control SPF 50+',
  desc: '50ml • PA++++ • For sensitive skin • Non-comedogenic',
  wholesale: 1222,
  category: 'sunscreen',
  image: '/images/skincare/sinoz-sun-sensitive.jpg',
},
{
  id: 102,
  code: 'SINOZ-OILYSPF',
  name: 'Sinoz Sunscreen for Oily Skin SPF 50+',
  desc: '50ml • PA++++ • Matte finish • Oil-control technology',
  wholesale: 1178,
  category: 'sunscreen',
  image: '/images/skincare/sinoz-oily-spf.jpg',
},
{
  id: 103,
  code: 'SINOZ-PINKSPF',
  name: 'Sinoz Pink Touch Tone Up Sun Cream SPF 50+',
  desc: '50ml • PA++++ • Color-correcting • Universal pink tint',
  wholesale: 1176,
  category: 'sunscreen',
  image: '/images/skincare/sinoz-pink-spf.jpg',
},
{
  id: 104,
  code: 'SINOZ-ANTIDARKCREAM',
  name: 'Sinoz Anti-Dark Spot Face Cream',
  desc: '50ml • Tranexamic acid • Brightening • Even skin tone',
  wholesale: 1417,
  category: 'cream',
  image: '/images/skincare/sinoz-anti-dark-cream.jpg',
},
{
  id: 105,
  code: 'SINOZ-EYECREAM',
  name: 'Sinoz Eye Contour Cream',
  desc: '30ml • Caffeine + peptides • Anti-puffiness • Dark circle care',
  wholesale: 1097,
  category: 'eye',
  image: '/images/skincare/sinoz-eye-cream.jpg',
},
{
  id: 106,
  code: 'SINOZ-CERAMIDEDAY',
  name: 'Sinoz Protective Day Cream with Ceramide',
  desc: '50ml • SPF 30 • Barrier repair • Lightweight',
  wholesale: 1307,
  category: 'cream',
  image: '/images/skincare/sinoz-ceramide-day.jpg',
},
{
  id: 107,
  code: 'SINOZ-HYALNIGHT',
  name: 'Sinoz Nutritive Night Cream with Hyaluronic Acid',
  desc: '50ml • Overnight hydration • 5 molecular weights HA',
  wholesale: 1264,
  category: 'cream',
  image: '/images/skincare/sinoz-hyal-night.jpg',
},
{
  id: 108,
  code: 'SINOZ-RETINOLCREAM',
  name: 'Sinoz Anti-Aging Cream with Retinol',
  desc: '50ml • 0.3% retinol • Encapsulated technology • Gentle',
  wholesale: 1876,
  category: 'cream',
  image: '/images/skincare/sinoz-retinol-cream.jpg',
},
{
  id: 109,
  code: 'SINOZ-MIRACLEOIL',
  name: 'Sinoz No:16 Miracle Oil',
  desc: '100ml • Multi-use • Jojoba + argan oil • Face/body/hair',
  wholesale: 2587,
  category: 'serum',
  image: '/images/skincare/sinoz-miracle-oil.jpg',
},
{
  id: 110,
  code: 'SINOZ-GOLDSERUM',
  name: 'Sinoz 24K Gold Beauty Face Care Serum',
  desc: '30ml • Gold nanoparticles • Lifting effect • Luxe formula',
  wholesale: 1439,
  category: 'serum',
  image: '/images/skincare/sinoz-gold-serum.jpg',
},
{
  id: 111,
  code: 'SINOZ-PORESERUM',
  name: 'Sinoz Pore Minimizing Serum',
  desc: '30ml • Niacinamide 5% + witch hazel • Pore refinement',
  wholesale: 1634,
  category: 'serum',
  image: '/images/skincare/sinoz-pore-serum.jpg',
},
{
  id: 112,
  code: 'SINOZ-SPOTSERUM',
  name: 'Sinoz Anti-Dark Spot Serum',
  desc: '30ml • Alpha-arbutin 2% + licorice root • Pigmentation care',
  wholesale: 1853,
  category: 'serum',
  image: '/images/skincare/sinoz-spot-serum.jpg',
},
{
  id: 113,
  code: 'SINOZ-VITCSERUM',
  name: 'Sinoz Vitamin C Serum',
  desc: '30ml • 15% ethyl ascorbic acid • Stable formulation',
  wholesale: 2072,
  category: 'serum',
  image: '/images/skincare/sinoz-vitc-serum.jpg',
},
{
  id: 114,
  code: 'SINOZ-BODYSCRUB',
  name: 'Sinoz Body Scrub',
  desc: '200ml • Sugar-based • For hands/feet/body • Moisturizing',
  wholesale: 1887,
  category: 'body',
  image: '/images/skincare/sinoz-body-scrub.jpg',
},
{
  id: 115,
  code: 'SINOZ-GLOWTONIC',
  name: 'Sinoz Glow Tonic',
  desc: '200ml • 5% glycolic acid • Exfoliating toner • pH 4.5',
  wholesale: 1963,
  category: 'toner',
  image: '/images/skincare/sinoz-glow-tonic.jpg',
},
{
  id: 116,
  code: 'SINOZ-ALOECLEAN',
  name: 'Sinoz Face Cleaning Gel with Aloe Vera',
  desc: '150ml • Gentle foaming • 90% aloe vera • pH balanced',
  wholesale: 2117,
  category: 'cleanser',
  image: '/images/skincare/sinoz-aloe-clean.jpg',
},
{
  id: 117,
  code: 'SINOZ-HANDCREAM',
  name: 'Sinoz Intensive Moisturizing Hand Cream',
  desc: '50ml • Shea butter + urea • Non-greasy • Fast absorption',
  wholesale: 594,
  category: 'body',
  image: '/images/skincare/sinoz-hand-cream.jpg',
},
{
  id: 118,
  code: 'SINOZ-OILYCLEAN',
  name: 'Sinoz Face Cleansing Gel for Oily and Combination Skin',
  desc: '150ml • Tea tree + zinc • Oil control • Refreshing',
  wholesale: 2162,
  category: 'cleanser',
  image: '/images/skincare/sinoz-oily-clean.jpg',
}

]