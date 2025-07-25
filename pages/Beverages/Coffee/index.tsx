'use client';

import React from 'react';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Coffee() {
  const handleAdd = (p: (typeof products)[number]) => {
    // integrate with your cart logic here
    console.log('Added to cart:', p.name);
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <Image
            src={`/images/${product.type}-${product.id}.jpg`}
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
  );
}
