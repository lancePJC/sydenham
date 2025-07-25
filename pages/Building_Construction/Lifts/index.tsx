'use client';

import Image from 'next/image';

type Lift = {
  name: string;
  desc: string;
  bullets: string[];
  image: string;
  alt: string;
};

const lifts: Lift[] = [
  {
    name: 'Glarie Home Lift – Aurora Series',
    desc: 'Panoramic glass cabin, gear‑less drive, ultra‑quiet ride. Perfect for duplexes and penthouses.',
    bullets: ['Speed: 0.4 m/s', 'Cabin size: 900 × 1200 mm', 'Load: 320 kg', 'Energy class: A'],
    image: '/images/lifts/lift1.jpg',
    alt: 'Aurora Series',
  },
  {
    name: 'Glarie Villa Lift – Horizon Series',
    desc: 'Slim shaft footprint and compact controller—ideal for townhouse retro‑fits.',
    bullets: ['Footprint: 980 × 1250 mm', 'Speed: 0.4 m/s', 'Load: 400 kg', 'MRL design'],
    image: '/images/lifts/lift2.jpg',
    alt: 'Horizon Series',
  },
  {
    name: 'Glarie Commercial Lift – Atlas Series',
    desc: 'Robust steel frame, IoT ready, perfect for offices, hotels, and malls.',
    bullets: ['Load: 1000 kg', 'Speed: 1.75 m/s', 'EN81 & KEBS certified', 'Remote diagnostics'],
    image: '/images/lifts/lift3.jpg',
    alt: 'Atlas Series',
  },
  {
    name: 'Panoramic Glass Lift – Skyline View',
    desc: '360° glass car delivers a premium guest experience and regenerates power.',
    bullets: ['Glass ratio: 90 %', 'Energy saving: 30 %', 'Speed: 1.0 m/s', 'Optional LED floor'],
    image: '/images/lifts/lift4.jpg',
    alt: 'Skyline View',
  },
  {
    name: 'Hospital Stretcher Lift – Medi‑Lift Pro',
    desc: 'Wide doors and antimicrobial panels for seamless patient transfer.',
    bullets: ['Door width: 1.6 m', 'Load: 1600 kg', 'Auto‑level ±3 mm', 'Copper‑infused walls'],
    image: '/images/lifts/lift5.jpg',
    alt: 'Medi-Lift Pro',
  },
  {
    name: 'Freight Lift – Titan Cargo',
    desc: 'Built for warehouses and factories—massive payload & rugged car walls.',
    bullets: ['Payload: 3000 kg', 'Suspension: Dual‑chain', 'Cabin height: 3.0 m', 'Impact‑resistant lining'],
    image: '/images/lifts/lift6.jpg',
    alt: 'Titan Cargo',
  },
  {
    name: 'Car Elevator – Auto‑Park Series',
    desc: 'Space‑saving vertical parking for showrooms and podium garages.',
    bullets: ['Load: 5000 kg', 'Drive: Hydraulic', 'Pit depth: 1200 mm', 'Remote call tablet'],
    image: '/images/lifts/lift7.jpg',
    alt: 'Auto-Park Series',
  },
  {
    name: 'Machine‑Room‑Less Lift – MRL Eco',
    desc: 'No machine room required—free up rooftop or top‑floor space.',
    bullets: ['Speed: 1.75 m/s', 'Load: 630 kg', 'Gearless traction', 'Low‑noise < 55 dB'],
    image: '/images/lifts/lift8.jpg',
    alt: 'MRL Eco',
  },
  {
    name: 'High‑Rise Express Lift – Velocity X',
    desc: 'Double‑deck option available for ultra‑tall towers.',
    bullets: ['Speed: 6 m/s', 'Guide system: Active rollers', 'Load: 1600 kg', 'Destination control'],
    image: '/images/lifts/lift9.jpg',
    alt: 'Velocity X',
  },
  {
    name: 'Heritage Building Lift – Retro‑Fit Classic',
    desc: 'Low‑pit, low‑headroom solution that preserves historic facades.',
    bullets: ['Pit: 300 mm', 'Headroom: 2600 mm', 'Custom cabin décor', 'Hand‑finished brass fixtures'],
    image: '/images/lifts/lift10.jpg',
    alt: 'Retro-Fit Classic',
  },
  {
    name: 'Retail Mall Lift – FlexiMall Series',
    desc: 'Flexible load options for retail spaces and shopping centers.',
    bullets: ['Load: 800–1600 kg', 'Fast open/close doors', 'Glass doors optional', 'Energy class: A+'],
    image: '/images/lifts/lift11.jpg',
    alt: 'FlexiMall Lift',
  },
  {
    name: 'Service Lift – SwiftServe',
    desc: 'Compact, efficient dumbwaiters for hotels and kitchens.',
    bullets: ['Payload: 200 kg', 'Stainless steel cab', 'Wall-mounted design', '1 or 2 stops'],
    image: '/images/lifts/lift12.jpg',
    alt: 'SwiftServe',
  },
  {
    name: 'Observation Lift – SkyDeck',
    desc: 'Stylish and transparent, ideal for premium retail and hospitality spaces.',
    bullets: ['Full panoramic view', 'Circular or square layout', 'LED ceiling', 'Glass buttons'],
    image: '/images/lifts/lift13.jpg',
    alt: 'SkyDeck',
  },
  {
    name: 'Industrial Heavy-Duty Lift – MaxLift Pro',
    desc: 'Built for industrial-scale performance in harsh environments.',
    bullets: ['Payload: 5000 kg', '3-phase drive', 'Vibration dampening frame', 'Steel mesh cabin'],
    image: '/images/lifts/lift14.jpg',
    alt: 'MaxLift Pro',
  },
  {
    name: 'Artisan Home Lift – DecoRide',
    desc: 'Tailored lifts with artisan wood and brass finish for private residences.',
    bullets: ['Wood panel options', 'Load: 300 kg', 'Custom floor tiles', 'Silent drive system'],
    image: '/images/lifts/lift15.jpg',
    alt: 'DecoRide',
  },
];

export default function Lifts() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-20 py-16 space-y-24 leading-relaxed">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">Sydenham Elevators</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Powered by Glarie • Designed for Africa • Backed by Sydenham service excellence
        </p>
      </section>

      {/* Lift Sections */}
      {lifts.map((lift, i) => (
        <section
          key={lift.name}
          className={`flex flex-col gap-10 lg:gap-16 lg:flex-row ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              src={lift.image}
              alt={lift.alt}
              width={1200}
              height={700}
              className="rounded-xl shadow-xl object-cover w-full h-full"
              priority={i === 0}
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 self-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">{lift.name}</h2>
            <p className="text-lg text-gray-700">{lift.desc}</p>

            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              {lift.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Closing */}
      <footer className="text-center space-y-3 mt-24">
        <h2 className="text-2xl font-bold text-yellow-400">Sydenham Elevators Division</h2>
        <p className="text-gray-600 text-lg">— Elevating lives, one lift at a time.</p>
      </footer>
    </main>
  );
}
