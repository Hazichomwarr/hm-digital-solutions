// components/layout/Navbar.tsx

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Fake Logo Icon */}
          <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-600 to-emerald-500" />

          <div>
            <h2 className="text-lg font-bold text-white">HM Digital</h2>

            <p className="text-xs tracking-widest text-slate-400">SOLUTIONS</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/book-consultation"
            className="hidden rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 lg:block"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu */}
          <button className="rounded-xl border border-slate-800 p-2 text-white lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
