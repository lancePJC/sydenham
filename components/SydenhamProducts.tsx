'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { powerItems, PowerItem } from '@/data/power';

const categories = ['light', 'panel', 'battery', 'inverter', 'accessory'] as const;

const SydenhamProducts = () => {
  const [cart, setCart] = useState<PowerItem[]>([]);

  const handleAddToCart = (item: PowerItem) => {
    setCart((prev) => [...prev, item]);
    alert(`Added "${item.name}" to cart`);
  };

  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Sydenham Power Products</h1>
        <p className="mt-4 text-lg text-gray-300">Clean energy solutions — all in one place.</p>
        <p className="text-yellow-500 mt-2">🛒 Cart: {cart.length} item(s)</p>
      </header>

      {categories.map((cat) => {
        const items = powerItems.filter((item) => item.category === cat);
        if (items.length === 0) return null;

        return (
          <section key={cat} className="mb-16">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-6 capitalize">{cat}s</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900 border border-yellow-600 rounded-lg p-4 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold text-yellow-200">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                  <p className="text-yellow-400 font-semibold mb-2">
                    KES {item.wholesale.toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SydenhamProducts;
