'use client';

import React from 'react';
import Head from 'next/head';
import { FaSolarPanel } from 'react-icons/fa';

export default function SolarPumps() {
  return (
    <>
      <Head>
        <title>Solar Pumps | Solar Energy Solutions</title>
      </Head>
      <div className="bg-black text-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3">
              <FaSolarPanel className="text-4xl" />
              Solar Pumps
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Efficient solar-powered water pumps for agricultural and domestic use.
            </p>
          </section>
          <section>
            <p className="text-center text-gray-300 text-lg">
              This product is available in our store. Please reach out to us for details.
            </p>
            <p className="mt-8 text-center text-xs text-gray-500">
              © 2025 Your Company Name. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}