'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Construction',
    link: '/Building_Construction',
    branches: ['Lifts', 'Genset', 'Escalators', 'Mechanical Engineering'],
    image: '/images/construction.jpg',
  },
  {
    name: 'IT',
    link: '/IT',
    branches: ['Nathan', 'Digital Tech', 'RAMCO'],
    image: '/images/it.jpg',
  },
  {
    name: 'Beauty & Lifestyle',
    link: '/Beauty_Lifestyle',
    branches: ['BENTON', 'Phukang Yul', 'Cosrx', 'Purito'],
    image: '/images/beauty.jpg',
  },
  {
    name: 'Beverages',
    link: '/Beverages',
    branches: ['Tamu Tea', 'Tamu Coffee'],
    image: '/images/beverages.jpg',
  },
  {
    name: 'Sydenham Power',
    link: '/Sydenham_Power',
    branches: ['Solar Lamp', 'Street Lights', 'Solar Fridge'],
    image: '/images/power.jpg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
};

export default function CategorySlider() {
  return (
    <div className="bg-white py-10">
      <Slider {...settings}>
        {categories.map((cat, idx) => (
          <div key={idx} className="relative group">
            <Image
              src={cat.image}
              alt={cat.name}
              width={1400}
              height={500}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{cat.name}</h2>
              <ul className="mb-4 space-y-1 text-lg">
                {cat.branches.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <Link
                href={cat.link}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-white rounded w-fit transition"
              >
                 Explore {cat.name}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
