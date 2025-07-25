// Components/Tea.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import tea1 from '/public/images/tea1.png';
import tea2 from '/public/images/tea2.png';
import tea3 from '/public/images/tea3.png';
import React from 'react';

type TeaInfo = {
  name: string;
  description: string[];
  origin: string;
  tastingNotes: string[];
  image: StaticImageData;
  alt: string;
};

const teas: TeaInfo[] = [
  {
    name: 'Tamu Kenyan Black',
    description: [
      'Hand‑picked at high altitude in the fertile foothills of Mount Kenya.',
      'Rich, full‑bodied liquor with a deep amber hue and brisk character.',
    ],
    origin: 'Kirinyaga County, Kenya • 1 800 m altitude',
    tastingNotes: ['Malt', 'Dried fruit', 'Hint of caramel'],
    image: tea1,
    alt: 'Kenyan Black Tea',
  },
  {
    name: 'Tamu Green Safari',
    description: [
      'Pan‑fired green leaves capturing the spirit of the savannah breeze.',
      'Light, grassy cup that refreshes and energises any time of day.',
    ],
    origin: 'Kericho Highlands, Kenya • 2 000 m altitude',
    tastingNotes: ['Fresh cut grass', 'Sweet corn', 'Subtle floral finish'],
    image: tea2,
    alt: 'Kenyan Green Tea',
  },
  {
    name: 'Tamu Hibiscus & Rosehip Infusion',
    description: [
      'A caffeine‑free blend marrying Kenyan hibiscus petals with wild rosehips.',
      'Vibrant ruby liquor packed with vitamin C and natural antioxidants.',
    ],
    origin: 'Laikipia Plateau, Kenya • Sun‑dried petals',
    tastingNotes: ['Tart berry', 'Citrus zing', 'Refreshing finish'],
    image: tea3,
    alt: 'Hibiscus Herbal Tea',
  },
];

export default function Tea() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-20 py-16 space-y-24 leading-relaxed">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Tamu Teas</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Discover the flavours of Kenya—expertly crafted leaves and botanicals
          that bring the highlands to your cup.
        </p>
      </section>

      {teas.map((tea, i) => (
        <section
          key={tea.name}
          className={`flex flex-col gap-8 lg:gap-12 lg:flex-row ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="lg:w-1/2 shrink-0">
            <Image
              src={tea.image}
              alt={tea.alt}
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow"
              priority={i === 0}
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 self-center space-y-4">
            <h2 className="text-3xl font-semibold text-yellow-400">{tea.name}</h2>

            {tea.description.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <p className="italic text-sm text-gray-500">{tea.origin}</p>

            <div>
              <h3 className="font-medium">Tasting Notes</h3>
              <ul className="list-disc list-inside space-y-1">
                {tea.tastingNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
