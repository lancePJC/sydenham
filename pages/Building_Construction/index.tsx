import React from 'react';
import Image from 'next/image';

import Escalators from '@/components/SubBranches/Building_construction/Escalators';
import Genset from '@/components/SubBranches/Building_construction/Genset';
import Gmdt from '@/components/SubBranches/Building_construction/Gmdt';
import HouseBuilding from '@/components/SubBranches/Building_construction/HouseBuilding';
import Lifts from '@/components/SubBranches/Building_construction/Lifts';
import MechanicalEng from '@/components/SubBranches/Building_construction/MechanicalEng';
import RoadConstruction from '@/components/SubBranches/Building_construction/RoadConstruction';

const BuildingConstruction = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500">
          Welcome to Sydenham Building &amp; Construction
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          “We shape our buildings; thereafter, they shape us.” – Winston Churchill
        </p>
        <p className="text-gray-400 mt-2 italic">
          Explore smart, efficient, and future‑ready building solutions.
        </p>
      </header>

      {/* Lifts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Lifts</h2>
        <p className="text-gray-300 mb-4">
          Modern elevator solutions for high‑rise safety and efficiency.
        </p>
        <Image
          src="/images/lifts.png"
          alt="Lifts"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <Lifts />
      </section>

      {/* Genset */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Genset</h2>
        <p className="text-gray-300 mb-4">
          Reliable backup power generators for homes, offices, and construction sites.
        </p>
        <Image
          src="/images/genset.png"
          alt="Genset"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <Genset />
      </section>

      {/* Escalators */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Escalators</h2>
        <p className="text-gray-300 mb-4">
          Smooth, safe vertical mobility systems for malls, airports, and buildings.
        </p>
        <Image
          src="/images/escalators.png"
          alt="Escalators"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <Escalators />
      </section>

      {/* GMDT */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">GMDT</h2>
        <p className="text-gray-300 mb-4">
          Electrical panels, transformers, and custom industrial power systems.
        </p>
        <Image
          src="/images/gmdt.png"
          alt="GMDT"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <Gmdt />
      </section>

      {/* Mechanical Engineering */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          Mechanical Engineering
        </h2>
        <p className="text-gray-300 mb-4">
          Expertise in HVAC, plumbing, and industrial mechanical systems.
        </p>
        <Image
          src="/images/mechanicaleng.png"
          alt="Mechanical Engineering"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <MechanicalEng />
      </section>

      {/* Road Construction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          Road Construction
        </h2>
        <p className="text-gray-300 mb-4">
          Heavy machinery and asphalt technologies for durable road networks.
        </p>
        <Image
          src="/images/roadconstruction.png"
          alt="Road Construction"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <RoadConstruction />
      </section>

      {/* House Building */}
      <section>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          House Building
        </h2>
        <p className="text-gray-300 mb-4">
          From foundation to finish, we bring your dream home to life with precision.
        </p>
        <Image
          src="/images/housebuilding.png"
          alt="House Building"
          width={400}
          height={250}
          className="rounded-md mb-4"
        />
        <HouseBuilding />
      </section>
    </div>
  );
};

export default BuildingConstruction;
