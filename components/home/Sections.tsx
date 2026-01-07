"use client";

import { ShieldCheck, Clock, Users, CheckCircle2, ArrowRight, Plus, Minus, FileSignature } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. TRUST SNAPSHOT ---
export function TrustSnapshot() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Legalitas PT Resmi",
      desc: "Bukan vendor lepas. Kami berbadan hukum PT dengan kontrak legal yang aman.",
      color: "text-blue-500",
      border: "group-hover:border-blue-500/50",
      bg: "group-hover:bg-blue-500/10"
    },
    {
      icon: Clock,
      title: "Timeline Presisi",
      desc: "Rundown acara & deadline web dev terkunci akurat. No ngaret club.",
      color: "text-green-500",
      border: "group-hover:border-green-500/50",
      bg: "group-hover:bg-green-500/10"
    },
    {
      icon: Users,
      title: "Crew Tersertifikasi",
      desc: "Tim lapangan & developer kami memiliki sertifikasi kompetensi di bidangnya.",
      color: "text-purple-500",
      border: "group-hover:border-purple-500/50",
      bg: "group-hover:bg-purple-500/10"
    },
    {
      icon: FileSignature,
      title: "Transparansi Budget",
      desc: "RAB detail tanpa hidden cost. Apa yang Anda bayar, itu yang Anda dapat.",
      color: "text-orange-500",
      border: "group-hover:border-orange-500/50",
      bg: "group-hover:bg-orange-500/10"
    },
  ];

  // Variabel Animasi
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Muncul berurutan selisih 0.2 detik
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Decoration (Agar Ramai) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Standar Kerja <span className="text-blue-500">Professional.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Kami menghilangkan risiko dalam project Anda dengan sistem manajemen yang teruji.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVars}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 ${feature.border}`}
            >
              {/* Hover Glow Effect Background */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl ${feature.bg}`} />
              
              <div className="relative z-10">
                {/* Icon Container with Animation */}
                <div className={`w-14 h-14 rounded-xl bg-black border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`${feature.color}`} size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// --- 2. WORKFLOW ---
export function Workflow() {
  const steps = [
    { num: "01", title: "Briefing", desc: "Diskusi konsep & anggaran." },
    { num: "02", title: "Planning", desc: "Penyusunan rundown & teknis." },
    { num: "03", title: "Execution", desc: "Produksi & manajemen lapangan." },
    { num: "04", title: "Report", desc: "Dokumentasi & evaluasi hasil." },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Systematic Workflow</h2>
          <p className="text-gray-400 mt-2">Metode kerja kami untuk meminimalisir error.</p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-800 -z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-black md:bg-transparent pt-4 md:pt-0">
              <div className="w-12 h-12 bg-gray-900 border border-blue-500/50 rounded-full flex items-center justify-center text-blue-500 font-bold mb-4 mx-auto md:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-400 text-sm text-center md:text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 3. FINAL CTA ---
export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Siap Menciptakan <br />
          <span className="text-blue-500">Momen Ikonik?</span>
        </h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Hubungi Kami Sekarang <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

// --- 4. FAQ (Accordion) ---
export function FAQ() {
  const faqs = [
    { q: "Berapa minimal budget untuk kerjasama?", a: "Kami sangat fleksibel. Untuk Wedding mulai dari paket intimate, dan Corporate menyesuaikan skala event. Hubungi kami untuk penawaran custom." },
    { q: "Apakah bisa handle event di luar Jakarta?", a: "Ya, kami melayani seluruh Indonesia dengan biaya akomodasi tim yang disesuaikan." },
    { q: "Bagaimana sistem pembayarannya?", a: "Termin pembayaran biasanya: DP 30% (Booking), 40% (H-30), dan Pelunasan (H-7)." },
    { q: "Berapa lama proses pengerjaan website?", a: "Untuk Company Profile standar sekitar 7-14 hari kerja setelah materi lengkap." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-blue-500"/> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-gray-800/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}