import Link from 'next/link';
import { FaBolt } from 'react-icons/fa';

export default function Nathan() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 font-poppins">
      {/* Styled link */}
      <Link
        href="/IT/Nathan"
        className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-400 px-6 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
      >
        <FaBolt />
        <span className="font-semibold tracking-wide">Nathan Digital</span>
      </Link>

      {/* Page heading */}
      <h1 className="text-4xl font-bold text-yellow-500 flex items-center gap-3">
        <FaBolt className="text-5xl" />
        Nathan Digital
      </h1>
    </main>
  );
}
