// Components/About.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import construction from '/public/images/construction.jpg';
import it from '/public/images/it.jpg';
import beauty from '/public/images/beauty.jpg';
import beverages from '/public/images/beverages.jpg';
import power from '/public/images/power.jpg';

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image: StaticImageData;
  alt: string;
};

const sections: Section[] = [
  {
    heading: 'Building & Construction',
    paragraphs: [
      'From towering lifts to heavy-duty gensets, from escalators in bustling malls to vital infrastructure—Sydenham’s construction division shapes skylines and supports communities.',
      'We specialise in:',
    ],
    bullets: [
      'Lifts, gensets & escalators',
      'Mechanical engineering',
      'Road construction',
      'Housing & structural projects',
    ],
    image: construction,
    alt: 'Construction',
  },
  {
    heading: 'IT & Digital Infrastructure',
    paragraphs: [
      'In today’s fast‑moving digital world, Sydenham stands at the forefront of tech integration.',
      'Our IT branch includes pioneers like Nathan Technologies, Digital Tech, and RAMCO—creating systems, security, and connectivity for tomorrow’s enterprises.',
    ],
    image: it,
    alt: 'IT',
  },
  {
    heading: 'Beauty & Lifestyle',
    paragraphs: [
      'Everyone deserves confidence, care, and wellness. Our division brings global skincare and wellness products directly to your doorstep, including iconic brands such as:',
    ],
    bullets: [
      'Benton, Pyunkang Yul, Cosrx, Purito',
      'Celens, Evoluderm, Sinoz, Pretty Skin',
    ],
    image: beauty,
    alt: 'Beauty',
  },
  {
    heading: 'Tamu Tea & Tamu Coffee',
    paragraphs: [
      'Our beverage line, proudly under the Tamu brand, celebrates Kenya’s rich agricultural tradition.',
      'Every sip reflects quality, freshness, and cultural pride while supporting local farmers and sustainable value chains.',
    ],
    image: beverages,
    alt: 'Beverages',
  },
  {
    heading: 'Sydenham Power',
    paragraphs: [
      'Lighting up homes, schools, and streets—Sydenham Power delivers renewable, off‑grid, and hybrid energy solutions.',
      'We provide energy independence and modern comfort through:',
    ],
    bullets: [
      'Solar lamps & floodlights',
      'Solar streetlights & pumps',
      'Solar fridges, inverters & controllers',
      'Full energy accessories and kits',
    ],
    image: power,
    alt: 'Sydenham Power',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-20 py-16 space-y-24 leading-relaxed">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Our Story</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Sydenham Enterprises LTD was born out of a bold vision—redefining modern living
          and infrastructure across East Africa by uniting innovation, quality, and
          diversity under one trusted brand.
        </p>
      </section>

      {/* Dynamic sections */}
      {sections.map((sec, i) => (
        <section
          key={sec.heading}
          className={`flex flex-col gap-8 lg:gap-12 lg:flex-row ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="lg:w-1/2 shrink-0">
            <Image
              src={sec.image}
              alt={sec.alt}
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow"
              priority={i === 0}
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 self-center space-y-4">
            <h2 className="text-3xl font-semibold text-yellow-400">{sec.heading}</h2>

            {sec.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {sec.bullets && (
              <ul className="list-disc list-inside space-y-1">
                {sec.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Mission */}
      <section className="bg-gray-100 p-10 rounded-xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          To build a unified platform powering today’s needs—in infrastructure, beauty,
          technology, energy, and lifestyle. We are partners in progress, beacons of
          reliability, and catalysts for growth.
        </p>
      </section>

      {/* Closing */}
      <footer className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-yellow-400">Sydenham Enterprises LTD</h2>
        <p className="text-gray-600 text-lg">— Empowering the Present, Building the Future.</p>
      </footer>
    </main>
  );
}