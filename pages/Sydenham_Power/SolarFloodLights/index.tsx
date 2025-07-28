'use client';

import React from 'react';
import Image from 'next/image';
import { products } from '@/data/power';

export default function SolarFloodLights() {
  const floodLights = products.filter((product) => product.name.includes('Solar Flood Light'));

  const handleAdd = (p: (typeof products)[number]) => {
    console.log('Added to cart:', p.name);
  };

  return (
    <div className="p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Solar Flood Lights</h1>
        <p className="mt-4 text-lg text-gray-600">Bright, reliable, and energy-efficient flood lighting solutions.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {floodLights.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">
              Retail:{' '}
              <span className="font-medium text-black">KES {product.retail}</span>
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Wholesale:{' '}
              <span className="font-medium text-yellow-500">
                KES {product.wholesale}
              </span>
            </p>
            <button
              onClick={() => handleAdd(product)}
              className="w-full bg-black text-white p-2 rounded hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}