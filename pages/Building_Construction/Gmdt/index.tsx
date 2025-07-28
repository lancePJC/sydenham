'use client';

import React from 'react';
import Head from 'next/head';
import { FaCogs } from 'react-icons/fa';

export default function Gmdt() {
  return (
    <>
      <Head>
        <title>GMDT Marine & Industrial Engineering | Power Solutions</title>
      </Head>
      <div className="bg-black text-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3">
              <FaCogs className="text-4xl" />
              GMDT Marine & Industrial Engineering
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Custom-built electrical solutions for marine and construction sectors, delivering reliable power and automation worldwide.
            </p>
          </section>
          <section>
            <p className="text-center text-gray-300 text-lg">
              GMDT Marine & Industrial Engineering Pvt. Ltd. specializes in turnkey electrical solutions. For marine applications, we provide switchboards, power distribution, and automation systems for merchant and naval vessels. For construction, we support infrastructure projects like townships, hotels, and commercial complexes with generators, control panels, and power management systems. Our products and services are available in our store. Please reach out to us through WhatsApp, social media, or call us for details.
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