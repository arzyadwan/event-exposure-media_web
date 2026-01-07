"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Konfigurasi animasi untuk kolase foto
  const floatAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: { 
      y: [-10, 10, -10], 
      rotate: [-2, 2, -2],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
    }
  };

  const floatAnimationReverse = {
    initial: { y: 0, rotate: 0 },
    animate: { 
      y: [10, -10, 10], 
      rotate: [3, -3, 3],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      
      {/* --- 1. BACKGROUND LAYER (VIDEO/PHOTO) --- */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Ganti src video dengan file Anda sendiri.
          Pastikan file ada di folder public, misal: /videos/hero-bg.mp4 
          Jika tidak ada video, bisa diganti dengan <Image fill ... />
        */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920" // Gambar fallback jika video belum load
          className="object-cover w-full h-full opacity-60"
        >
          {/* Gunakan video pendek (5-10 detik) ukuran kecil (< 5MB) agar loading cepat */}
          {/* <source src="/videos/hero-bg.webm" type="video/webm" /> */}
          {/* <source src="/videos/hero-bg.mp4" type="video/mp4" /> */}
        </video>

        {/* Dark Overlay - PENTING: Agar teks putih selalu terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>
      
      {/* --- 2. CONTENT LAYER (Split Layout) --- */}
      <div className="container relative z-20 px-6 mx-auto pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* --- KOLOM KIRI: TEXT --- */}
            <div className="max-w-2xl">
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-blue-500/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-300 text-sm font-medium tracking-wide uppercase">
                    Integrated Creative Agency
                  </span>
                </motion.div>
                
                {/* Headline - Teks selalu putih agar kontras dengan background gelap */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                  Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impactful</span> Experiences.
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
                >
                  Mitra strategis untuk eksekusi event yang presisi, produksi visual sinematik, dan transformasi digital yang terukur. Kami menyatukan panggung offline dengan dunia online.
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                  >
                    Mulai Konsultasi <ArrowUpRight size={18} />
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
                  >
                     <Play size={18} className="text-blue-400" /> Lihat Showreel
                  </Link>
                </motion.div>
            </div>

            {/* --- KOLOM KANAN: PHOTO COLLAGE (Hidden on Mobile) --- */}
            <div className="hidden lg:block relative h-[600px] w-full perspective-1000">
                {/* TODO: Ganti src gambar di bawah dengan foto kegiatan/portfolio asli Anda.
                   Saya gunakan placeholder Unsplash yang relevan (Concert, Camera, Coding)
                */}

                {/* Foto Utama (Besar - Konser/Event) */}
                <motion.div 
                   variants={floatAnimation} initial="initial" animate="animate"
                   className="absolute top-[10%] left-[5%] w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 z-20 border border-white/10"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000" 
                        alt="Event Concert" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                 {/* Foto Kedua (Sedang - Produksi Video/Kamera) */}
                 <motion.div 
                   variants={floatAnimationReverse} initial="initial" animate="animate"
                   className="absolute top-[40%] right-[0%] w-[50%] aspect-square rounded-2xl overflow-hidden shadow-xl z-30 border border-white/10"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800" 
                        alt="Video Production" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 1200px) 30vw, 20vw"
                    />
                </motion.div>
                
                {/* Foto Ketiga (Kecil - Digital/Koding) */}
                <motion.div 
                   initial={{ y: 0, rotate: -5 }}
                   animate={{ y: [5, -5, 5], rotate: [-7, -3, -7] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-[5%] left-[20%] w-[35%] aspect-video rounded-2xl overflow-hidden shadow-lg z-10 opacity-80 border border-white/10"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" 
                        alt="Web Development" 
                        fill 
                        className="object-cover"
                        sizes="20vw"
                    />
                </motion.div>

                 {/* Dekorasi/Elemen Grafis */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
            </div>

        </div>
      </div>
    </section>
  );
}