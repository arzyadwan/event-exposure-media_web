"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"corporate" | "personal">(
    "corporate"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Fitur ini perlu diintegrasikan dengan Email Service (misal: Web3Forms/EmailJS)."
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Kolom Kiri: Info & Ajakan */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mari Memulai <br />
            <span className="text-blue-500">Sesuatu yang Besar.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Punya ide event gila? Atau butuh website yang performanya ngebut?
            Diskusikan dengan kami. Konsultasi awal gratis.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">hello@eventexposure.media</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-full text-green-400">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold">WhatsApp / Phone</h3>
                <p className="text-gray-400">+62 812-3456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold">Studio</h3>
                <p className="text-gray-400">Jakarta Selatan, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Interactive Form */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {/* Tab Switcher */}
          <div className="flex p-1 bg-white dark:bg-black rounded-lg mb-8">
            <button
              onClick={() => setActiveTab("corporate")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                activeTab === "corporate"
                  ? "bg-blue-600 text-gray-900 dark:text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-900 dark:text-white"
              }`}
            >
              Corporate / Bisnis
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                activeTab === "personal"
                  ? "bg-pink-600 text-gray-900 dark:text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-900 dark:text-white"
              }`}
            >
              Personal / Wedding
            </button>
          </div>

          {/* Logic Tampilan Berdasarkan Tab */}
          {activeTab === "corporate" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-black border border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400">Perusahaan</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-black border border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition"
                    placeholder="PT. Maju Mundur"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Email Bisnis</label>
                <input
                  type="email"
                  className="w-full bg-white dark:bg-black border border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Kebutuhan</label>
                <select className="w-full bg-white dark:bg-black border border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition text-gray-300">
                  <option>Company Profile Video</option>
                  <option>Corporate Event Organizer</option>
                  <option>Web Development</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Pesan Detail</label>
                <textarea
                  rows={4}
                  className="w-full bg-white dark:bg-black border border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition"
                  placeholder="Ceritakan project Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-gray-900 dark:text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                Kirim Penawaran <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="bg-pink-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-pink-500">
                <MessageCircle size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Respon Cepat via WhatsApp
                </h3>
                <p className="text-gray-400 text-sm px-8">
                  Untuk kebutuhan Wedding, Foto Wisuda, atau Personal Branding,
                  tim kami lebih cepat merespon melalui chat instan.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Event%20Exposure,%20saya%20ingin%20tanya%20jasa..."
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
              >
                Chat WhatsApp Sekarang <MessageCircle size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
