"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/auth") return null;

  return (
    <header className="absolute top-0 inset-x-0 z-50 py-6 px-6 md:px-12 flex items-center justify-between pointer-events-auto">
      <div className="flex items-center gap-3">
        <Image src="/nailist.png?v=2" unoptimized alt="Nailist" width={40} height={40} className="w-10 h-10 object-contain" />
        <span className="text-white font-bold text-xl tracking-tight leading-none">Nailist</span>
      </div>

      <nav className="hidden md:flex items-center gap-10 text-white/80 text-sm font-medium">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center">
        <Link href="/auth" className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-100 transition-colors shadow-lg shadow-white/20">
          Get Started
        </Link>
      </div>
    </header>
  );
}
