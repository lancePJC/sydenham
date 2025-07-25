// data/power.ts
export interface PowerItem {
  id: number;
  code: string; 
  name: string;
  desc: string;  
  wholesale: number;            // price in KES
  category: 'light' | 'panel' | 'battery' | 'inverter' | 'accessory';
  image: string;                // path inside /public/images/power/
}

export const powerItems: PowerItem[] = [
  // -------- Solar Flood Lights --------
  {
    id: 1,
    code: 'HA-50W',
    name: '50 W Solar Flood Light',
    desc: '4500 lm • LiFePO₄ 10 Ah • IP65 • 12 h run‑time • 3 y warranty',
    wholesale: 3500,
    category: 'light',
    image: '/images/power/light-ha-50w.jpg',
  },
  {
    id: 2,
    code: 'HA-100W',
    name: '100 W Solar Flood Light',
    desc: '5500 lm • LiFePO₄ 15 Ah • IP65 • 12 h run‑time • 3 y warranty',
    wholesale: 5500,
    category: 'light',
    image: '/images/power/light-ha-100w.jpg',
  },
  {
    id: 3,
    code: 'HA-200W',
    name: '200 W Solar Flood Light',
    desc: '8500 lm • LiFePO₄ 20 Ah • IP65 • 18 h run‑time • 3 y warranty',
    wholesale: 8500,
    category: 'light',
    image: '/images/power/light-ha-200w.jpg',
  },
  {
    id: 4,
    code: 'HA-400W',
    name: '400 W Solar Flood Light',
    desc: '64000 lm • LiFePO₄ 40 Ah • IP65 • 24 h run‑time • 3 y warranty',
    wholesale: 14500,
    category: 'light',
    image: '/images/power/light-ha-400w.jpg',
  },

  // -------- Solar Street Lights --------
  {
    id: 5,
    code: 'HE-60W',
    name: '60 W Solar Street Light',
    desc: '20000 mAh • 18 h run‑time • IP65 • 3 y warranty',
    wholesale: 5900,
    category: 'light',
    image: '/images/power/light-he-60w.jpg',
  },
  {
    id: 6,
    code: 'HE-90W',
    name: '90 W Solar Street Light',
    desc: '25000 mAh • 18 h run‑time • IP65 • 3 y warranty',
    wholesale: 7000,
    category: 'light',
    image: '/images/power/light-he-90w.jpg',
  },

  // -------- Solar Garden Lights (x6) --------
  {
    id: 7,
    code: 'HO-5W-1',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-1.jpg',
  },
  {
    id: 8,
    code: 'HO-5W-2',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-2.jpg',
  },
  {
    id: 9,
    code: 'HO-5W-3',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-3.jpg',
  },
  {
    id: 10,
    code: 'HO-5W-4',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-4.jpg',
  },
  {
    id: 11,
    code: 'HO-5W-5',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-5.jpg',
  },
  {
    id: 12,
    code: 'HO-5W-6',
    name: '5 W Solar Garden Light',
    desc: '30 LEDs • 6 Ah • 30‑36 h run‑time • 3 y warranty',
    wholesale: 4000,
    category: 'light',
    image: '/images/power/light-ho-garden-6.jpg',
  },

  // -------- Solar Home Systems --------
  {
    id: 13,
    code: 'SR07',
    name: 'Firefly 0.3 W Kit',
    desc: 'Panel 0.3 W • LiFePO₄ 400 mAh • 2 y warranty',
    wholesale: 1200,
    category: 'accessory',
    image: '/images/power/kit-sr07.jpg',
  },
  {
    id: 14,
    code: 'SR31E',
    name: 'Apollo E Solar Home System',
    desc: 'Panel 50 W • 12 V 12 Ah • TV+Fan bundle',
    wholesale: 16323,
    category: 'accessory',
    image: '/images/power/kit-sr31e.jpg',
  },

  // -------- Batteries --------
  {
    id: 15,
    code: 'LIB-51.2/100',
    name: 'LiFePO₄ Battery 51.2 V 100 Ah (5 kWh)',
    desc: '6000 cycles • RS‑485/Can',
    wholesale: 142000,
    category: 'battery',
    image: '/images/power/batt-51v-100ah.jpg',
  },
  {
    id: 16,
    code: 'LIB-12.8/200',
    name: 'LiFePO₄ Battery 12.8 V 200 Ah (2.5 kWh)',
    desc: '6000 cycles • LCD BMS',
    wholesale: 60000,
    category: 'battery',
    image: '/images/power/batt-12v-200ah.jpg',
  },
  {
    id: 17,
    code: 'LIB-12.8/100',
    name: 'LiFePO₄ Battery 12.8 V 100 Ah',
    desc: 'Standard battery • long cycle life',
    wholesale: 28000,
    category: 'battery',
    image: '/images/power/batt-12v-100ah.jpg',
  },

  {
  id: 40, // next sequential ID
  code: 'LIB-51.2/184',
  name: 'LiFePO₄ Battery 51.2 V 184 Ah (9.4 kWh)',
  desc: '6000 cycles • Smart BMS • RS‑485/Can',
  wholesale: 230000,
  category: 'battery',
  image: '/images/power/batt-51v-184ah.jpg', // suggested filename
},


  // -------- Inverters --------
  {
    id: 18,
    code: 'GLORY‑M3',
    name: '3 kW Hybrid Inverter',
    desc: 'PV 4 kW • WiFi/GPRS • 24 Vdc',
    wholesale: 39500,
    category: 'inverter',
    image: '/images/power/inv-glory-3kw.jpg',
  },
  {
    id: 19,
    code: 'HMII‑5.5',
    name: '5.5 kW Hybrid Inverter',
    desc: 'Surge 16 kW • 500 V MPPT • 48 Vdc',
    wholesale: 75000,
    category: 'inverter',
    image: '/images/power/inv-hmii-5kw.jpg',
  },

  // Additions continued from existing items...

// -------- Solar Home Kits --------
{
  id: 20,
  code: 'SR02',
  name: 'Solar Torch SR02',
  desc: '2W/5V Panel • LiFePO₄ 600mAh • 40lm torch, 20lm reading light • 2.5–5 h run‑time • 2 y warranty',
  wholesale: 1600,
  category: 'accessory',
  image: '/images/power/torch-sr02.jpg',
},
{
  id: 21,
  code: 'SR25',
  name: 'U‑Box Solar Kit',
  desc: '8W Panel • 4400mAh LiFePO₄ • 3x LED bulbs • Power radio + phone charger • 1 y warranty',
  wholesale: 5800,
  category: 'accessory',
  image: '/images/power/kit-sr25.jpg',
},
{
  id: 22,
  code: 'K088T1',
  name: 'YelloBox Kit',
  desc: '10W Panel • 6000mAh LiFePO₄ • 4x LED bulbs • Power radio + phone charger • 1 y warranty',
  wholesale: 10200,
  category: 'accessory',
  image: '/images/power/kit-k088t1.jpg',
},
{
  id: 23,
  code: 'SR32F',
  name: 'M Box F Solar System',
  desc: '150W Panel • 60Ah LiFePO₄ • TV + Radio + Fan + Fridge • 1 y warranty',
  wholesale: 54500,
  category: 'accessory',
  image: '/images/power/kit-sr32f.jpg',
},
{
  id: 24,
  code: 'F170',
  name: 'F170 Solar Radio',
  desc: 'MP3 + FM/AM/SW • Li-ion 1500mAh • 6–8 h play time • 1 y warranty',
  wholesale: 1200,
  category: 'accessory',
  image: '/images/power/radio-f170.jpg',
},
{
  id: 25,
  code: 'BC-90',
  name: 'BC-90 Solar Fridge',
  desc: '12V • 90L capacity (76L Fridge / 14L Freezer) • Class A+ • 1 y warranty',
  wholesale: 55500,
  category: 'accessory',
  image: '/images/power/fridge-bc90.jpg',
},
{
  id: 26,
  code: 'PS-TV24',
  name: '24″ DC Solar TV',
  desc: '24″ DLED • 13W • 9–15V DC • HDMI, USB, AV, VGA • 2 y warranty',
  wholesale: 20100,
  category: 'accessory',
  image: '/images/power/tv-24inch.jpg',
},
{
  id: 27,
  code: 'PS-FP16',
  name: '16″ DC Pedestal Fan',
  desc: '16″ • DC 12V • Brushless motor • 10W • 3 speeds • 1 y warranty',
  wholesale: 6000,
  category: 'accessory',
  image: '/images/power/fan-16inch.jpg',
},

// -------- Inverters (continued) --------
{
  id: 28,
  code: 'GLORY-M5',
  name: '5 kW Hybrid Inverter (GLORY M)',
  desc: 'MPPT • 48V • Surge 10kVA • Remote monitoring • Parallel 12 units',
  wholesale: 55000,
  category: 'inverter',
  image: '/images/power/inv-glory-5kw.jpg',
},
{
  id: 29,
  code: 'FT-30212',
  name: '3 kW Pure Sine Wave Inverter',
  desc: '12V • Surge 9kW • 220VAC • Pure sine wave • 50Hz • Charger 35A',
  wholesale: 55000,
  category: 'inverter',
  image: '/images/power/inv-ft-30212.jpg',
},
{
  id: 30,
  code: 'FTS-10224M30',
  name: '1 kW Pure Sine Wave Inverter',
  desc: '12V/24V • MPPT solar controller • 840W input • 30V charger',
  wholesale: 58000,
  category: 'inverter',
  image: '/images/power/inv-fts-10224m30.jpg',
},
{
  id: 31,
  code: 'TG-200-30224M60',
  name: '3 kW Pure Sine Wave Inverter',
  desc: '24V • MPPT 30–150V • Surge 9kW • 220V output • 60A MPPT',
  wholesale: 55000,
  category: 'inverter',
  image: '/images/power/inv-tg200.jpg',
},
{
  id: 32,
  code: 'HMII-30KW',
  name: '30 kW Hybrid Inverter (HX)',
  desc: 'MPPT • 210–300V input • 90kW Surge • 28000W Solar • ≤650V',
  wholesale: 375000,
  category: 'inverter',
  image: '/images/power/inv-hmii-30kw.jpg',
},

// -------- MPPT Controllers --------
{
  id: 33,
  code: 'MPPT-10A',
  name: 'MPPT Controller 10A',
  desc: '12/24V • Auto recognition • LCD display • USB output',
  wholesale: 6300,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 34,
  code: 'MPPT-20A',
  name: 'MPPT Controller 20A',
  desc: '12/24V • Auto recognition • LCD display • USB output',
  wholesale: 6500,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 35,
  code: 'MPPT-30A',
  name: 'MPPT Controller 30A',
  desc: '12/24V • Auto recognition • LCD display • USB output',
  wholesale: 6800,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 36,
  code: 'MPPT-40A',
  name: 'MPPT Controller 40A',
  desc: '12/24V/48V • LCD • USB • Overload protection',
  wholesale: 10800,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 37,
  code: 'MPPT-50A',
  name: 'MPPT Controller 50A',
  desc: '12/24V/48V • LCD • USB • Overload protection',
  wholesale: 12000,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 38,
  code: 'MPPT-60A',
  name: 'MPPT Controller 60A',
  desc: '12/24V/48V • LCD • USB • Overload protection',
  wholesale: 15000,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},
{
  id: 39,
  code: 'MPPT-80A',
  name: 'MPPT Controller 80A',
  desc: '12/24V/48V • LCD • USB • Overload protection',
  wholesale: 15000,
  category: 'accessory',
  image: '/images/power/mppt-10a.jpg',
},

// -------- Drip Irrigation Kit --------
{
  id: 40,
  code: 'DRIP-1/8',
  name: 'Drip Irrigation Kit – 1/8 Acre',
  desc: 'Includes tubing, drippers, connectors. Ideal for tomatoes, cabbages. 2 drips/bed',
  wholesale: 18438,
  category: 'accessory',
  image: '/images/power/drip-1-8-acre.jpg',
}

];


