import React from 'react';
import Image from 'next/image';
import TamuTea from '@/components/SubBranches/Beverages/TamuTea';
import Coffee from '@/components/SubBranches/Beverages/Coffee';

const Beverages = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Sydenham Beverages</h1>
        <p className="mt-4 text-lg text-gray-300">
          “Drink to your health and refresh your soul.”
        </p>
        <p className="text-gray-400 mt-2 italic">
          Explore premium beverages — from fine teas to robust coffees.
        </p>
      </header>

      {/* Tamu Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Tamu Tea</h2>
        <p className="text-gray-300 mb-4">
          Tamu Tea delivers refreshing and soothing tea blends for everyday calm and wellness.
        </p>
        <Image src="/images/tamutea.png" alt="Tamu Tea" width={400} height={250} className="rounded-md mb-4" />
        <TamuTea />
      </section>

      {/* Coffee */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Coffee</h2>
        <p className="text-gray-300 mb-4">
          Our rich coffee collection energizes your day with bold flavor and smooth aroma.
        </p>
        <Image src="/images/coffee.png" alt="Coffee" width={400} height={250} className="rounded-md mb-4" />
        <Coffee />
      </section>
    </div>
  );
};

export default Beverages;
