import { useState } from 'react';
import Link from 'next/link';
import {
  FaSearch,
  FaShoppingCart,
  FaGlobe,
  FaTruck,
} from 'react-icons/fa';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-black text-white px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center sticky top-0 z-10">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 mb-3 md:mb-0">
        {/* ── Logo ───────────────────────────── */}
        <Link
          href="/"
          className="inline-block bg-black px-3 py-1 rounded select-none leading-tight text-center"
        >
          <span className="block text-3xl md:text-4xl font-serif font-bold tracking-wide text-yellow-300">
            SDHam
          </span>
          <span className="block text-sm md:text-base tracking-wider text-yellow-300">
            Sydenham&nbsp;Enterprises&nbsp;Limited
          </span>
        </Link>
        {/* ──────────────────────────────────── */}

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
          <FaTruck className="text-yellow-400" />
          <span>Deliver to: 🇰🇪</span>
        </div>
      </div>

      {/* MIDDLE SECTION – SEARCH */}
      <form
        onSubmit={handleSearch}
        className="flex w-full md:max-w-4xl mx-auto mb-3 md:mb-0"
      >
        <select className="bg-gray-800 text-white p-2 rounded-l text-sm w-36">
          <option>All Categories</option>
          <option>Beauty</option>
          <option>Construction</option>
          <option>Power</option>
          <option>IT</option>
          <option>Beverages</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="flex-grow p-2 text-black min-w-0 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-none"
        />
        <button
          type="submit"
          className="bg-yellow-500 px-4 py-2 rounded-r hover:bg-yellow-600"
        >
          <FaSearch />
        </button>
      </form>

      {/* RIGHT SECTION – NAV & CART */}
      <div className="flex items-center gap-4 text-sm">
        <Link href="/language" className="flex items-center gap-1 text-gray-300 hover:text-white">
          <FaGlobe className="text-yellow-400" />
          <span>EN</span>
        </Link>
        <Link href="/login" className="hover:text-yellow-400">Login</Link>
        <Link href="/signup" className="hover:text-yellow-400">Sign Up</Link>
        <Link href="/Cart" className="relative flex items-center hover:text-yellow-400">
          <FaShoppingCart className="text-3xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white rounded-full px-1">
            0
          </span>
        </Link>
      </div>
    </header> 
  );
}
