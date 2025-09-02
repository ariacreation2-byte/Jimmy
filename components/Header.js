"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.jpg" 
            alt="Jimmy Junior" 
            width={160}   // Logo width bada
            height={80} 
            className="h-16 w-auto" // Tailwind size control
          />
        </Link>

        {/* Center: Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/boys" className="hover:text-yellow-600 transition">Boys</Link>
          <Link href="/sizes" className="hover:text-yellow-600 transition">Sizes</Link>
          <Link href="/bestsellers" className="hover:text-yellow-600 transition">Best Sellers</Link>
        </nav>

        {/* Right: WhatsApp Button */}
        <Link 
          href="https://wa.me/919755502072" 
          target="_blank" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
        >
          Order on WhatsApp
        </Link>
      </div>
    </header>
  );
}
