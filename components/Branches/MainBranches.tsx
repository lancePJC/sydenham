import React from 'react';
import Link from 'next/link';
import {
  FaHeart,
  FaBeer,
  FaBuilding,
  FaLaptopCode,
  FaBolt,
} from 'react-icons/fa';

const branches = [
  {
    name: 'Beauty & Lifestyle',
    href: '/Beauty_Lifestyle',
    icon: <FaHeart className="text-xl" />,
    description: 'Beauty products, skincare, wellness kits and lifestyle items.',
  },
  {
    name: 'Beverages',
    href: '/Beverages',
    icon: <FaBeer className="text-xl" />,
    description: 'Coffee, tea, juices, water and more refreshing drinks.',
  },
  {
    name: 'Construction',
    href: '/Building_Construction',
    icon: <FaBuilding className="text-xl" />,
    description: 'Lifts, generators, escalators, road and house building equipment.',
  },
  {
    name: 'IT',
    href: '/IT',
    icon: <FaLaptopCode className="text-xl" />,
    description: 'AI-powered ERP, HR, CRM systems for businesses.',
  },
  {
    name: 'Sydenham Power',
    href: '/Sydenham_Power',
    icon: <FaBolt className="text-xl" />,
    description: 'Solar lamps, fridges, inverters, street lights and accessories.',
  },
];

const MainBranches = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yellow-500">Our Main Branches</h1>
          <p className="text-gray-300 mt-2">Explore what Sydenham Enterprises offers</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <Link
              key={branch.name}
              href={branch.href}
              className="bg-gray-900 border border-gray-800 hover:border-yellow-500 p-6 rounded-xl shadow-md hover:shadow-yellow-500/30 transition block"
            >
              <div className="flex items-center gap-3 mb-3 text-yellow-400">
                {branch.icon}
                <h3 className="text-lg font-semibold">{branch.name}</h3>
              </div>
              <p className="text-sm text-gray-300">{branch.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBranches;
