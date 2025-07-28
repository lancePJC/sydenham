import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const menu = [
  {
    label: 'Construction',
    sub: [
      'Lifts',
      'Genset',
      'Escalators',
      'Gmdt',
      'Mechanical Engineering',
      'Road Construction',
      'Housing and Building',
    ],
  },
  { label: 'IT', sub: ['Nathan Digital Tech', 'Ramco'] },
  {
    label: 'Beauty & Lifestyle',
    sub: [
      'Benton',
      'Phukang Yul',
      'Cosrx',
      'Purito',
      'Celenes',
      'Evoluderm',
      'Sinoz',
      'Pretty Skin',
    ],
  },
  { label: 'Beverages', sub: ['Tamu Tea', 'Tamu Coffee'] },
  {
    label: 'Sydenham Power',
    sub: [
      'Solar Lamp',
      'Solar Floodlights',
      'Solar Street Lights',
      'Solar Pumps',
      'Solar Fridge',
      'Inverters',
      'Charge Controller',
      'Accessories',
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="bg-white shadow z-20 relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    {/* ── Logo placeholder: keeps spacing but shows nothing ── */}
  <div
    className="inline-block"
        style={{ width: '210px', height: '56px' }} // ≈ width & height of old logo block
            />

        <div className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button className="text-sm font-semibold text-gray-800 hover:text-yellow-500 flex items-center gap-1">
                {item.label} <FaChevronDown className="text-xs mt-1" />
              </button>

              {openIndex === index && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded w-56 z-30 p-3">
                  <ul className="space-y-2 text-sm text-gray-700">
                    {item.sub.map((subItem) => (
                      <li key={subItem}>
                        <Link href="/" className="hover:text-yellow-500">
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
