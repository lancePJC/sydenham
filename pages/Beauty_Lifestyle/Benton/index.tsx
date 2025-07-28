'use client';

import React from 'react';
import Image from 'next/image';
import { skincareItems } from '@/data/skincare';

export default function Benton() {
  const bentonItems = skincareItems.filter(item => item.code.startsWith('BENTON-'));

  const handleAdd = (item: (typeof skincareItems)[number]) => {
    // Integrate with your cart logic here
    console.log('Added to cart:', item.name);
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {bentonItems.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <Image
            src={item.images[0]}
            alt={item.name}
            width={400}
            height={160}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {item.desc}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Wholesale:{' '}
            <span className="font-medium text-yellow-500">
              KES {item.wholesale}
            </span>
          </p>
          <button
            onClick={() => handleAdd(item)}
            className="w-full bg-black text-white p-2 rounded hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}