import React from 'react';
import Head from 'next/head';
import {
  FaSolarPanel,
  FaLightbulb,
  FaCogs,
  FaTools,
  FaFan,
  FaTv,
  FaSnowflake,
  FaHome,
  FaBolt,
  FaTruck,
  FaIndustry,
  FaBoxes,
} from 'react-icons/fa';

interface ServiceCategory {
  name: string;
  icon: React.ReactElement;
  items: string[];
}

const services: ServiceCategory[] = [
  {
    name: 'Solar Energy Solutions',
    icon: <FaSolarPanel className="text-xl text-yellow-400" />,
    items: ['Solar Pumps', 'Solar Panels', 'Solar TV', 'Solar Fans', 'Solar Fridge'],
  },
  {
    name: 'Lighting & Electricals',
    icon: <FaLightbulb className="text-xl text-yellow-400" />,
    items: ['Lamps', 'Lights', 'Controllers'],
  },
  {
    name: 'Mechanical & Engineering',
    icon: <FaCogs className="text-xl text-yellow-400" />,
    items: ['Mechanical Engineering', 'Lifts', 'Escalators'],
  },
  {
    name: 'Backup Power Solutions',
    icon: <FaBolt className="text-xl text-yellow-400" />,
    items: ['Genset', 'Inverters', 'Power Controllers'],
  },
  {
    name: 'Building Infrastructure',
    icon: <FaHome className="text-xl text-yellow-400" />,
    items: ['House Building', 'GMDT', 'Smart Home Integration'],
  },
  {
    name: 'Facility Support',
    icon: <FaTools className="text-xl text-yellow-400" />,
    items: ['Maintenance', 'Repairs', 'Installation Support'],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Solar & Engineering Installations</title>
      </Head>

      <div className="bg-black text-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3">
              <FaTools className="text-4xl" />
              Our Service Offerings
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We specialize in comprehensive installations for solar energy, electrical systems, mechanical structures, and smart infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-6">
              Core Areas of Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((cat) => (
                <div key={cat.name} className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-yellow-500 transition">
                  <div className="flex items-center gap-2 mb-3">
                    {cat.icon}
                    <h3 className="text-lg font-semibold text-yellow-300">{cat.name}</h3>
                  </div>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-500">
              © 2025 Your Company Name. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
