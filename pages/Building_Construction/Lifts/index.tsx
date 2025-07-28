'use client';

import Image from 'next/image';

// Static imports for images
import lift1 from '/public/images/lifts/lift1.jpg';
import lift2 from '/public/images/lifts/lift2.jpg';
import lift3 from '/public/images/lifts/lift3.jpg';
import lift4 from '/public/images/lifts/lift4.jpg';
import lift5 from '/public/images/lifts/lift5.jpg';
import lift6 from '/public/images/lifts/lift6.jpg';
import lift7 from '/public/images/lifts/lift7.jpg';
import lift8 from '/public/images/lifts/lift8.jpg';
import lift9 from '/public/images/lifts/lift9.jpg';
import lift10 from '/public/images/lifts/lift10.jpg';
import lift11 from '/public/images/lifts/lift11.jpg';
import lift12 from '/public/images/lifts/lift12.jpg';
import lift13 from '/public/images/lifts/lift13.jpg';
import lift14 from '/public/images/lifts/lift14.jpg';
import lift15 from '/public/images/lifts/lift15.jpg';

type Lift = {
  name: string;
  desc: string;
  bullets: string[];
  image: any;
  alt: string;
};

const lifts: Lift[] = [
  {
    name: 'Glarie Home Lift – Aurora Series',
    desc: 'Panoramic glass cabin, gear‑less drive, ultra‑quiet ride. Perfect for duplexes and penthouses.',
    bullets: ['Speed: 0.4 m/s', 'Cabin size: 900 × 1200 mm', 'Load: 320 kg', 'Energy class: A'],
    image: lift1,
    alt: 'Aurora Series',
  },
  {
    name: 'Glarie Villa Lift – Horizon Series',
    desc: 'Slim shaft footprint and compact controller—ideal for townhouse retro‑fits.',
    bullets: ['Footprint: 980 × 1250 mm', 'Speed: 0.4 m/s', 'Load: 400 kg', 'MRL design'],
    image: lift2,
    alt: 'Horizon Series',
  },
  {
    name: 'Glarie Commercial Lift – Atlas Series',
    desc: 'Robust steel frame, IoT ready, perfect for offices, hotels, and malls.',
    bullets: ['Load: 1000 kg', 'Speed: 1.75 m/s', 'EN81 & KEBS certified', 'Remote diagnostics'],
    image: lift3,
    alt: 'Atlas Series',
  },
  {
    name: 'Panoramic Glass Lift – Skyline View',
    desc: '360° glass car delivers a premium guest experience and regenerates power.',
    bullets: ['Glass ratio: 90 %', 'Energy saving: 30 %', 'Speed: 1.0 m/s', 'Optional LED floor'],
    image: lift4,
    alt: 'Skyline View',
  },
  {
    name: 'Hospital Stretcher Lift – Medi‑Lift Pro',
    desc: 'Wide doors and antimicrobial panels for seamless patient transfer.',
    bullets: ['Door width: 1.6 m', 'Load: 1600 kg', 'Auto‑level ±3 mm', 'Copper‑infused walls'],
    image: lift5,
    alt: 'Medi-Lift Pro',
  },
  {
    name: 'Freight Lift – Titan Cargo',
    desc: 'Built for warehouses and factories—massive payload & rugged car walls.',
    bullets: ['Payload: 3000 kg', 'Suspension: Dual‑chain', 'Cabin height: 3.0 m', 'Impact‑resistant lining'],
    image: lift6,
    alt: 'Titan Cargo',
  },
  {
    name: 'Car Elevator – Auto‑Park Series',
    desc: 'Space‑saving vertical parking for showrooms and podium garages.',
    bullets: ['Load: 5000 kg', 'Drive: Hydraulic', 'Pit depth: 1200 mm', 'Remote call tablet'],
    image: lift7,
    alt: 'Auto-Park Series',
  },
  {
    name: 'Machine‑Room‑Less Lift – MRL Eco',
    desc: 'No machine room required—free up rooftop or top‑floor space.',
    bullets: ['Speed: 1.75 m/s', 'Load: 630 kg', 'Gearless traction', 'Low‑noise < 55 dB'],
    image: lift8,
    alt: 'MRL Eco',
  },
  {
    name: 'High‑Rise Express Lift – Velocity X',
    desc: 'Double‑deck option available for ultra‑tall towers.',
    bullets: ['Speed: 6 m/s', 'Guide system: Active rollers', 'Load: 1600 kg', 'Destination control'],
    image: lift9,
    alt: 'Velocity X',
  },
  {
    name: 'Heritage Building Lift – Retro‑Fit Classic',
    desc: 'Low‑pit, low‑headroom solution that preserves historic facades.',
    bullets: ['Pit: 300 mm', 'Headroom: 2600 mm', 'Custom cabin décor', 'Hand‑finished brass fixtures'],
    image: lift10,
    alt: 'Retro-Fit Classic',
  },
  {
    name: 'Retail Mall Lift – FlexiMall Series',
    desc: 'Flexible load options for retail spaces and shopping centers.',
    bullets: ['Load: 800–1600 kg', 'Fast open/close doors', 'Glass doors optional', 'Energy class: A+'],
    image: lift11,
    alt: 'FlexiMall Lift',
  },
  {
    name: 'Service Lift – SwiftServe',
    desc: 'Compact, efficient dumbwaiters for hotels and kitchens.',
    bullets: ['Payload: 200 kg', 'Stainless steel cab', 'Wall-mounted design', '1 or 2 stops'],
    image: lift12,
    alt: 'SwiftServe',
  },
  {
    name: 'Observation Lift – SkyDeck',
    desc: 'Stylish and transparent, ideal for premium retail and hospitality spaces.',
    bullets: ['Full panoramic view', 'Circular or square layout', 'LED ceiling', 'Glass buttons'],
    image: lift13,
    alt: 'SkyDeck',
  },
  {
    name: 'Industrial Heavy-Duty Lift – MaxLift Pro',
    desc: 'Built for industrial-scale performance in harsh environments.',
    bullets: ['Payload: 5000 kg', '3-phase drive', 'Vibration dampening frame', 'Steel mesh cabin'],
    image: lift14,
    alt: 'MaxLift Pro',
  },
  {
    name: 'Artisan Home Lift – DecoRide',
    desc: 'Tailored lifts with artisan wood and brass finish for private residences.',
    bullets: ['Wood panel options', 'Load: 300 kg', 'Custom floor tiles', 'Silent drive system'],
    image: lift15,
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
              className="rounded-xl shadow-xl object-cover w-full h-full"
              placeholder="blur"
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
