"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  /* =====================
     EFFECTS
  ====================== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  /* =====================
     MENU DATA
  ====================== */
  const servicesGroup1 = [
    { name: "Event Organizer", href: "/services/event-organizer" },
    { name: "Wedding Organizer", href: "/services/wedding-organizer" },
  ];

  const servicesGroup2 = [
    { name: "Produksi Video", href: "/services/video-production" },
    { name: "Pengelolaan Media Sosial", href: "/services/social-media" },
    { name: "Pembuatan Website", href: "/services/web-development" },
    { name: "Fotografi", href: "/services/photography" },
  ];

  /* =====================
     RENDER
  ====================== */
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-black/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-black">
            EE
          </div>
          <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
            EVENT<span className="text-blue-500">EXPOSURE</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Tentang Kami", href: "/about" },
            { name: "Portofolio", href: "/portfolio" },
            { name: "Paket & Harga", href: "/pricing" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 hover:text-gray-900 dark:text-white"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </Link>
          ))}

          {/* DROPDOWN */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-400 group-hover:text-gray-900 dark:text-white transition">
              Layanan
              <ChevronDown
                size={14}
                className="group-hover:-rotate-180 transition-transform duration-300"
              />
            </button>

            <div className="absolute top-full left-0 w-full h-4" />

            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl p-3">
                <div className="px-4 py-3 mb-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-transparent">
                  <p className="text-xs text-blue-400 font-bold uppercase">
                    Our Services
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-semibold">
                    One stop solution untuk event & digital branding
                  </p>
                </div>

                <span className="px-4 py-2 text-[10px] uppercase font-bold text-gray-500">
                  Organizer
                </span>
                {servicesGroup1.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-blue-600/20 rounded-lg"
                  >
                    {item.name}
                    <ChevronRight size={14} className="text-blue-400" />
                  </Link>
                ))}

                <div className="h-px bg-gray-800 my-2" />

                <span className="px-4 py-2 text-[10px] uppercase font-bold text-gray-500">
                  Creative & Digital
                </span>
                {servicesGroup2.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <ThemeToggle />
          {/* CTA */}
          <Link
            href="/contact"
            className="ml-4 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-gray-900 dark:text-white
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:from-blue-500 hover:to-blue-400
            shadow-lg shadow-blue-600/30
            transition-all hover:scale-105 active:scale-95"
          >
            Konsultasi Gratis
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-900 dark:text-white p-2 z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black/60 backdrop-blur-sm z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#050505] border-l border-white/10 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 flex flex-col gap-3">
          <Link
            href="/"
            className="text-lg text-gray-300 hover:text-gray-900 dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-300 hover:text-gray-900 dark:text-white"
          >
            Tentang Kami
          </Link>
          <button
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
            className="flex justify-between text-lg text-gray-300"
          >
            Layanan
            <ChevronDown
              className={`transition ${
                mobileSubmenuOpen ? "-rotate-180 text-blue-500" : ""
              }`}
            />
          </button>
          {mobileSubmenuOpen && (
            <div className="pl-4 border-l border-gray-800">
              {[...servicesGroup1, ...servicesGroup2].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-400 hover:text-gray-900 dark:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          <ThemeToggle /> {/* <--- PASANG DI SINI */}
          <Link
            href="/contact"
            className="mt-6 flex justify-center items-center gap-2 bg-blue-600 py-4 rounded-xl font-bold"
          >
            Hubungi Kami
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
