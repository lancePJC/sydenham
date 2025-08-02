'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  FaHeart, FaBuilding, FaLaptopCode, FaBolt,
  FaSpa, FaSeedling, FaLeaf, FaMagic, FaStar, FaTint,
  FaGlassWhiskey, FaTools, FaHardHat, FaWarehouse, FaRoad,
  FaCodeBranch, FaPlug, FaChargingStation, FaBatteryFull,
  FaLightbulb, FaSolarPanel, FaCoffee, FaFan
} from 'react-icons/fa';

const subBranches = [
  {
    category: 'Beauty & Lifestyle',
    icon: <FaHeart className="text-2xl text-yellow-400" />,
    items: [
      { name: 'Benton',        href: '/Beauty_Lifestyle/Benton',        icon: <FaSpa className="text-xl" />,          description: 'Korean skincare with snail mucin and clean ingredients.' },
      { name: 'Some By Mi', href: '/Beauty_Lifestyle/SomeByMi', icon: <FaSeedling className="text-xl" />,         description: 'Acid‑based solutions for clear, bright skin.' },
      { name: 'Celenes',        href: '/Beauty_Lifestyle/Celenes',        icon: <FaSeedling className="text-xl" />,     description: 'Refreshing formulas for face and body hydration.' },
      { name: 'Corsx',         href: '/Beauty_Lifestyle/Corsx',         icon: <FaLeaf className="text-xl" />,         description: 'Gentle yet powerful skincare with natural actives.' },
      { name: 'Evoluderm',     href: '/Beauty_Lifestyle/Evoluderm',     icon: <FaMagic className="text-xl" />,        description: 'French beauty products for face, hair, and body.' },
      { name: 'Pyunkang yul',    href: '/Beauty_Lifestyle/PhukangYul',    icon: <FaStar className="text-xl" />,         description: 'Minimalist and skin‑calming Korean formulations.' },
      { name: 'Pretty skin',    href: '/Beauty_Lifestyle/PrettySkin',    icon: <FaTint className="text-xl" />,         description: 'Affordable beauty for youthful radiant skin.' },
      { name: 'Purito',        href: '/Beauty_Lifestyle/Purito',        icon: <FaLeaf className="text-xl" />,         description: 'Eco‑friendly brand focusing on barrier repair.' },
      { name: 'Sinoz',         href: '/Beauty_Lifestyle/Sinoz',         icon: <FaMagic className="text-xl" />,        description: 'Turkish beauty brand blending science and skincare.' },
    ],
  },
  {
    category: 'Beverages',
    icon: <FaCoffee className="text-2xl text-yellow-400" />,
    items: [
      { name: 'Coffee', href: '/Beverages/Coffee', icon: <FaGlassWhiskey className="text-xl" />, description: 'Premium roasted coffee blends and instant brews.' },
      { name: 'Tea',    href: '/Beverages/Tea',    icon: <FaGlassWhiskey className="text-xl" />, description: 'Natural teas including green, black, and herbal infusions.' },
    ],
  },
  {
    category: 'Construction',
    icon: <FaBuilding className="text-2xl text-yellow-400" />,
    items: [
      { name: 'Escalators',        href: '/Building_Construction/Escalators',        icon: <FaBuilding className="text-xl" />,    description: 'Commercial and mall‑grade escalator installations.' },
      { name: 'Genset',            href: '/Building_Construction/Genset',            icon: <FaPlug className="text-xl" />,        description: 'Reliable power backup generators for all needs.' },
      { name: 'Gmdt',              href: '/Building_Construction/Gmdt',              icon: <FaTools className="text-xl" />,       description: 'Heavy‑duty construction machinery and services.' },
      { name: 'HouseBuilding',     href: '/Building_Construction/HouseBuilding',     icon: <FaHardHat className="text-xl" />,     description: 'Professional house construction and civil works.' },
      { name: 'Lifts',             href: '/Building_Construction/Lifts',             icon: <FaWarehouse className="text-xl" />,   description: 'Passenger and goods lifts for buildings.' },
      { name: 'MechanicalEng',     href: '/Building_Construction/MechanicalEng',     icon: <FaTools className="text-xl" />,       description: 'Mechanical solutions and metal fabrication.' },
      { name: 'RoadConstruction',  href: '/Building_Construction/RoadConstruction',  icon: <FaRoad className="text-xl" />,        description: 'Tarmacking, grading, and road equipment services.' },
    ],
  },
  {
    category: 'IT',
    icon: <FaLaptopCode className="text-2xl text-yellow-400" />,
    items: [
      { name: 'Nathan', href: '/IT/Nathan', icon: <FaLaptopCode className="text-xl" />, description: 'Cloud ERP and business systems powered by AI.' },
      { name: 'Ramco',  href: '/IT/Ramco',  icon: <FaCodeBranch className="text-xl" />, description: 'HR, payroll, and logistics IT platforms.' },
    ],
  },
  {
    category: 'Sydenham Power',
    icon: <FaBolt className="text-2xl text-yellow-400" />,
    items: [
      { name: 'Accessories',        href: '/Sydenham_Power/Accessories',        icon: <FaTools className="text-xl" />,            description: 'Cables, mounts, and add‑ons for solar setups.' },
      { name: 'Charge Controller',  href: '/Sydenham_Power/ChargeController',   icon: <FaChargingStation className="text-xl" />,  description: 'Smart MPPT/PWM controllers for solar systems.' },
      { name: 'Inverters',          href: '/Sydenham_Power/Inverters',          icon: <FaBatteryFull className="text-xl" />,      description: 'Pure sine wave and hybrid inverters.' },
      { name: 'Solar Flood Lights', href: '/Sydenham_Power/SolarFloodLights',   icon: <FaLightbulb className="text-xl" />,        description: 'High‑lumen floodlights with dusk‑to‑dawn sensors.' },
      { name: 'Solar Fridge',       href: '/Sydenham_Power/SolarFridge',        icon: <FaPlug className="text-xl" />,             description: 'DC‑powered energy‑saving solar refrigerators.' },
      { name: 'Solar Lamp',         href: '/Sydenham_Power/SolarLamp',          icon: <FaLightbulb className="text-xl" />,        description: 'Portable rechargeable lamps for home & outdoor.' },
      { name: 'Solar Pumps',        href: '/Sydenham_Power/SolarPumps',         icon: <FaSolarPanel className="text-xl" />,       description: 'Water pumps powered by solar energy.' },
      { name: 'Solar Street Light', href: '/Sydenham_Power/SolarStreetLight',   icon: <FaLightbulb className="text-xl" />,        description: 'All‑in‑one smart street lights with motion sensors.' },
      { name: 'Solar TV',           href: '/Sydenham_Power/SolarTV',            icon: <FaPlug className="text-xl" />,             description: 'Energy‑efficient TVs designed to run on DC solar power.' },
      { name: 'Solar Fans',         href: '/Sydenham_Power/SolarFans',          icon: <FaFan className="text-xl" />,              description: 'Low‑wattage fans for cooling, directly powered by solar.' },
      { name: 'Installations',      href: '/Sydenham_Power/Installations',      icon: <FaTools className="text-xl" />,            description: 'Professional solar system design and on‑site installations.' }
    ],
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';

  // Flatten all items for easier searching
  const allItems = subBranches.flatMap(group =>
    group.items.map(item => ({
      ...item,
      category: group.category,
      categoryIcon: group.icon,
    }))
  );

  const filteredItems = query
    ? allItems.filter(item =>
        (item.name + item.category + item.description)
          .toLowerCase()
          .includes(query)
      )
    : [];

  return (
    <div className="bg-black text-white px-6 md:px-16 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yellow-500">Search Results</h1>
          <p className="text-gray-300 mt-2">
            Showing results for <span className="text-yellow-400">{query}</span>
          </p>
        </header>
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">No results found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block bg-gray-900 border border-gray-800 hover:border-yellow-500 p-6 rounded-xl shadow-md hover:shadow-yellow-500/30 transition"
              >
                <div className="flex items-center gap-3 text-yellow-400 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
                <p className="text-xs text-yellow-300 mb-1">{item.category}</p>
                <p className="text-sm text-gray-300">{item.description}</p>
              </Link>
            ))}
          </div>
        )}
           </div>
    </div>
  );
}