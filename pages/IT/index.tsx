'use client';

import React from 'react';
import { FaBolt, FaBuilding } from 'react-icons/fa';
import Nathan from '@/components/SubBranches/It/NathanDigital';
import Ramco from '@/components/SubBranches/It/Ramco';

/* ── core info ─ */
const vision =
  'To become Kenya’s leading provider of secure, cloud ERP solutions—revolutionising the way businesses manage resources.';
const mission =
  'Encouraging growth through innovative, affordable cloud ERP that streamlines operations and boosts efficiency.';
const services = [
  'Enterprise Resource Planning',
  'Financial Management',
  'Human Resource Management',
  'Supply‑Chain Management',
  'Customer Relationship Management',
  'Business Intelligence & Analytics',
];
const edge = [
  'Cutting‑edge AI & ML features',
  'Seamless system compatibility',
  'Scalable cloud architecture',
  'Competitive, flexible pricing',
];

export default function It() {
  return (
    <main className="bg-black text-white px-6 md:px-16 py-12 space-y-24 leading-relaxed">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Sydenham IT</h1>
        <p className="text-lg text-gray-300">
          “Technology is best when it brings people together.” – Matt Mullenweg
        </p>
        <p className="text-gray-400 italic">
          Explore ERP, CRM, and HR systems built for performance.
        </p>
      </header>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-400">Vision</h2>
          <p className="text-gray-300">{vision}</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-400">Mission</h2>
          <p className="text-gray-300">{mission}</p>
        </div>
      </section>

      {/* Core Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-yellow-400">Core Services</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 list-disc list-inside text-gray-300">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Nathan Digital */}
      <section className="mb-20 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-3">
          <FaBolt className="text-4xl" />
          Nathan Digital
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Custom-built, AI-powered ERP platforms tailored for SMEs and large enterprises, helping teams streamline HR, payroll, and operations.
        </p>
        <div className="pt-6">
          <Nathan />
        </div>
      </section>

      {/* Ramco */}
      <section className="mb-20 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-3">
          <FaBuilding className="text-4xl" />
          Ramco Systems
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Ramco provides advanced ERP solutions in finance, HR, and logistics—powered by AI and built for the cloud.
        </p>
        <div className="pt-6">
          <Ramco />
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-yellow-400">Our Edge</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {edge.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul> 
      </section>
    </main>
  );
}
