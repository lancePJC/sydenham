'use client';

import Image from 'next/image';
import road1 from '/public/images/roads/road1.jpg';
import road2 from '/public/images/roads/road2.jpg';
import road3 from '/public/images/roads/road3.jpg';
import road4 from '/public/images/roads/road4.jpg';
import road5 from '/public/images/roads/road5.jpg';
import road6 from '/public/images/roads/road6.jpg';
import road7 from '/public/images/roads/road7.jpg';
import road8 from '/public/images/roads/road8.jpg';
import road9 from '/public/images/roads/road9.jpg';

import type { StaticImageData } from 'next/image';

type RoadProject = {
  name: string;
  desc: string;
  bullets: string[];
  image: StaticImageData;
  alt: string;
};

const roads: RoadProject[] = [
  {
    name: 'Urban Road Upgrade – CBD Link',
    desc: 'Paving and expanding congested urban roads with drainage and pedestrian paths.',
    bullets: ['Length: 6.4 km', 'Asphalt overlay', 'Storm water channels', 'Smart street lighting'],
    image: road1,
    alt: 'Urban Road Project',
  },
  {
    name: 'Highway Expansion – Mombasa Express',
    desc: 'Dual carriage highway with emergency lanes, signage, and service roads.',
    bullets: ['Length: 38 km', 'Dual lanes each side', 'ISO-certified QA', 'Completed in 2023'],
    image: road2,
    alt: 'Highway Construction',
  },
  {
    name: 'Rural Access Road – Kiambu Phase II',
    desc: 'Improving rural mobility through all-weather roads connecting villages.',
    bullets: ['Length: 12.5 km', 'Gravel stabilization', 'Culverts & drainage', 'Cost-effective design'],
    image: road3,
    alt: 'Rural Access Road',
  },
  {
    name: 'Industrial Zone Roads – Athi River',
    desc: 'Heavy-duty roads within industrial parks for logistics and transport efficiency.',
    bullets: ['Thickness: 250 mm concrete', 'Truck-friendly', 'Long-lasting mix', 'Low maintenance'],
    image: road4,
    alt: 'Industrial Roads',
  },
  {
    name: 'Bridge Approach Roads – Tana River',
    desc: 'Approach roads leading to newly constructed reinforced concrete bridges.',
    bullets: ['Road length: 3.2 km', 'Guard rails included', 'Smooth grade transitions', 'Flood resistant'],
    image: road5,
    alt: 'Bridge Approach Road',
  },
  {
    name: 'Airport Access Road – JKIA East Wing',
    desc: 'Direct, well-lit road connecting terminals to parking and logistics hubs.',
    bullets: ['Access control', 'High-reflective signage', 'Drainage slope design', 'Night operation enabled'],
    image: road6,
    alt: 'Airport Access Road',
  },
  {
    name: 'Estate Internal Roads – Sydenham Heights',
    desc: 'Internal paved roads with landscaping, speed bumps, and curb stones.',
    bullets: ['Interlocking blocks', 'Integrated drainage', 'Pedestrian zones', 'Eco-sensitive design'],
    image: road7,
    alt: 'Estate Roads',
  },
  {
    name: 'Feeder Road – Tharaka Catchment',
    desc: 'Connecting farms to main roads for agricultural produce transport.',
    bullets: ['Length: 8.2 km', 'Double surface dressing', 'Rural reinforcement mesh', 'Low-cost method'],
    image: road8,
    alt: 'Feeder Road',
  },
  {
    name: 'Bypass Road – Nairobi Western Loop',
    desc: 'Designed to decongest city center and redirect heavy traffic.',
    bullets: ['Dual-lane bypass', 'Noise barriers', 'Emergency lanes', 'Funded via PPP'],
    image: road9,
    alt: 'Bypass Road',
  },
];

export default function RoadConstruction() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-20 py-16 space-y-24 leading-relaxed">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">Sydenham Roads Division</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Infrastructure that connects, empowers, and sustains — from expressways to rural access roads.
        </p>
      </section>

      {/* Road Sections */}
      {roads.map((road, i) => (
        <section
          key={road.name}
          className={`flex flex-col gap-10 lg:gap-16 lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="lg:w-1/2">
            <Image
              src={road.image}
              alt={road.alt}
              width={1200}
              height={700}
              className="rounded-xl shadow-xl object-cover w-full h-full"
              priority={i === 0}
            />
          </div>
          <div className="lg:w-1/2 self-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">{road.name}</h2>
            <p className="text-lg text-gray-700">{road.desc}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              {road.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Video Section */}
      <section className="max-w-5xl mx-auto space-y-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">Road Construction In Action</h2>
        <p className="text-gray-600 text-lg">
          Real footage from our on-site road projects across Kenya — from paving to heavy equipment in motion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video src="/images/roads/video1.mp4" controls className="w-full h-auto rounded-lg" />
            <p className="mt-2 text-sm text-gray-600">Urban paving with storm drainage installation</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <video src="/images/roads/video2.mp4" controls className="w-full h-auto rounded-lg" />
            <p className="mt-2 text-sm text-gray-600">Earthworks and grading on rural access roads</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-3 mt-24">
        <h2 className="text-2xl font-bold text-yellow-400">Sydenham Construction Ltd</h2>
        <p className="text-gray-600 text-lg">— Building roads that build futures.</p>
      </footer>
    </main>
  );
}
