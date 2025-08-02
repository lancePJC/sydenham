'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaBolt } from 'react-icons/fa';
import { products } from '@/data/power';
import { useCart } from '@/components/context/CartContext';

export default function Inverters() {
  const inverters = products.filter((product) => product.type === 'inverter');
  const { addToCart } = useCart();

  return (
    <>
      <Head>
        <title>Inverters | Solar Energy Solutions</title>
      </Head>
      <div className="bg-black text-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3">
              <FaBolt className="text-4xl" />
              Inverters
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Reliable inverters for efficient solar power conversion and management.
            </p>
          </section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inverters.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-yellow-500 transition"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-yellow-300">{product.name}</h3>
                  <p className="text-sm text-gray-300">
                    Retail: <span className="font-medium text-white">KES {product.retail}</span>
                  </p>
                  <p className="text-sm text-gray-300 mb-3">
                    Wholesale: <span className="font-medium text-yellow-500">KES {product.wholesale}</span>
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-yellow-500 text-black p-2 rounded hover:bg-yellow-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-gray-500">
              © 2025 Your Company Name. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}