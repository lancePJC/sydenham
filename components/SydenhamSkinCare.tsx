'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { skincareItems, SkincareItem } from '@/data/skincare';

const categories = ['cleanser', 'toner', 'serum', 'cream', 'sunscreen', 'mask', 'eye', 'body'] as const;

const SydenhamSkincare = () => {
  const [cart, setCart] = useState<SkincareItem[]>([]);

  const handleAddToCart = (item: SkincareItem) => {
    setCart((prev) => [...prev, item]);
    alert(`Added "${item.name}" to cart`);
  };

  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Sydenham Beauty & Lifestyle</h1>
        <p className="mt-4 text-lg text-gray-300">Premium Korean skincare — curated for you.</p>
        <p className="text-yellow-500 mt-2">🛒 Cart: {cart.length} item(s)</p>
      </header>

      {categories.map((cat) => {
        const items = skincareItems.filter((item) => item.category === cat);
        if (items.length === 0) return null;

        return (
          <section key={cat} className="mb-16">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-6 capitalize">
              {cat === 'eye' ? 'Eye Care' : 
               cat === 'body' ? 'Body Care' : 
               `${cat}s`}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900 border border-yellow-600 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-md object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-200">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-yellow-400 font-semibold">
                      KES {item.wholesale.toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded transition text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p>Minimum order: KES 20,000 | Delivery available across Kenya</p>
        <p className="mt-2">Contact: 0743 482799 / 0701 297646 | info@sydenhambeauty.com</p>
      </footer>
    </div>
  );
};

export default SydenhamSkincare;