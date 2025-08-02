'use client';

import React from 'react';
import Image from 'next/image';
import { products } from '@/data/coffee';
import { useCart } from '@/components/context/CartContext';

export default function Coffee() {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
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
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white p-2 rounded hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}