"use client";
import Image from "next/image";

// ---- Image Imports ----
import ff110w from '/public/images/gensets/ff110w.jpg';
import ry7 from '/public/images/gensets/ry7.jpg';
import gta251 from '/public/images/gensets/gta251.jpg';
import overview from '/public/images/gensets/overview.png';

// ------- DATA ----------------------------------
const models = [
  {
    name: "FF110W‑C20296 (150 kVA / 120 kW)",
    highlights: [
      "Stand‑by rating (ESP) 110 kW / 138 kVA",
      "Prime rating (PRP) 100 kW / 125 kVA",
      "Water‑cooled FMT diesel engine + WEG alternator",
      "0.8 power‑factor • 50 Hz • 415 / 240 V 3‑phase",
      "Noise level 77 dB(A) @ 1 m",
    ],
    img: ff110w,
  },
  {
    name: "RY7‑4L In‑Line 4 Engine",
    highlights: [
      "4.84 L displacement • Turbo‑intercooler",
      "Fuel consumption @ 75 % PRP : 17.6 L / h",
      "Electronic governor • 17.5 : 1 compression",
      "Cooling capacity 30 L • Oil capacity 17 L",
    ],
    img: ry7,
  },
  {
    name: "GTA‑251AIHD Alternator",
    highlights: [
      "Brush‑less, self‑excited, AVR‑controlled",
      "± 0.5 % voltage regulation",
      "Insulation class H • IP 23",
      "Star connection • 0.8 PF • 415 / 240 V",
    ],
    img: gta251,
  },
];

// ------- COMPONENT ----------------------------------
export default function GensetPage() {
  return (
    <main className="min-h-screen bg-[#E9F1FA] py-12 px-4 lg:px-20 text-gray-800 font-poppins">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 drop-shadow-lg">
          Sydenham Diesel Gensets
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          Built on the robust <strong>FMT REGENERATE‑W</strong> platform, our gensets deliver quiet,
          dependable power for factories, hospitals, and remote sites across East Africa. Every
          unit is factory‑tested, fitted with AMF/ATS panels, and covered by a two‑year warranty.
        </p>
      </section>

      {/* MODELS */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {models.map((m) => (
          <article
            key={m.name}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
          >
            <Image
              src={m.img}
              alt={m.name}
              width={500}
              height={320}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-yellow-500">
                {m.name}
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                {m.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-24 bg-white rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Key Features</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>
            <strong>Integrated fuel‑tank base‑frame</strong> – ~11 h autonomy at 75 % load, anti‑vibration mounts, forklift pockets.
          </li>
          <li>
            <strong>Smart AMF / ATS panels</strong> – DEIF 420 or DSE 6120 controllers with true‑RMS load metering, Modbus RS‑485, remote start/stop, deep‑sleep battery saver.
          </li>
          <li>
            <strong>Low‑noise canopy</strong> – galvanized steel, double‑swing doors, high‑density acoustic foam; 77 dB(A) at 1 m.
          </li>
          <li>
            <strong>Green‑hybrid ready</strong> – optional AGC 150 Hybrid controller for PV + genset synchronization and CO₂ reduction.
          </li>
          <li>
            <strong>Five‑step quality test</strong> – insulation, load, transient, noise, and safety verified before dispatch.
          </li>
        </ul>
      </section>

      {/* ATS EXPLANATION */}
      <section className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl p-10 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">About ATS Systems</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          An ATS is a device that interfaces with a generator and the electrical system. It monitors the utility power and signals the generator to start if the utility
          power goes out of specifications or drops out entirely. Backup power is now fed to the main utility panel or an emergency panel via the ATS. ATS units are sized
          based on the power requirements of the connected devices and the type of power sources involved. Some ATS units include monitoring features,
          allowing users to track power status, load levels, and other relevant data. All FMT Group generators have the ATS system.
        </p>

        {/* Overview Image */}
        <div className="max-w-6xl mx-auto">
          <Image
            src={overview}
            alt="Sydenham Gensets Overview"
            width={1200}
            height={800}
            className="rounded-2xl shadow-xl my-12"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl shadow hover:bg-yellow-600 transition">
          Request a Quote
        </button>
      </section>
    </main>
  );
}
