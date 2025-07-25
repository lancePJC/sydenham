import Link from 'next/link';
import { FaBuilding } from 'react-icons/fa';

export default function Ramco() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 font-poppins">
      {/* Styled link */}
      <Link
        href="/IT/Ramco"
        className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-400 px-6 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
      >
        <FaBuilding />
        <span className="font-semibold tracking-wide">Ramco Systems</span>
      </Link>

      {/* Page heading */}
      <h1 className="text-4xl font-bold text-yellow-500 flex items-center gap-3">
        <FaBuilding className="text-5xl" />
        Ramco Systems
      </h1>
    </main>
  );
}
