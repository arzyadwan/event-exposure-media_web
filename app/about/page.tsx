import Image from "next/image";
import { Users, Zap, Globe, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Event Exposure Media",
  description: "Mengenal lebih dekat tim di balik Event Exposure Media.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20">
      {/* 1. Hero Story */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bukan Sekadar EO, <br />
              <span className="text-blue-500">
                Kami Partner Pertumbuhan Anda.
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Event Exposure Media lahir dari sebuah observasi sederhana: Banyak
              Event Organizer gagap teknologi, dan banyak Agency Digital tidak
              paham lapangan.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Kami hadir untuk menjembatani keduanya. Kami mengintegrasikan
              presisi manajemen event lapangan dengan kecerdasan strategi
              digital. Hasilnya? Pengalaman yang tidak hanya megah saat hari-H,
              tapi juga viral di dunia maya.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-gray-800 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  50+
                </h3>
                <p className="text-sm text-gray-500">Event Sukses</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  98%
                </h3>
                <p className="text-sm text-gray-500">Client Retention</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
            {/* Ganti src dengan foto tim/kantor Anda nanti */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono">
              [FOTO TIM / KANTOR]
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="bg-gray-100 dark:bg-gray-900/30 py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Filosofi Kerja Kami</h2>
            <p className="text-gray-400">
              Apa yang membedakan kami dari ribuan vendor lain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Speed & Precision",
                desc: "Respons cepat bukan opsi, tapi standar. Kami bekerja dengan timeline presisi.",
              },
              {
                icon: Globe,
                title: "Digital Native",
                desc: "Kami paham algoritma sebaik kami paham rundown acara.",
              },
              {
                icon: Users,
                title: "Human Centric",
                desc: "Teknologi hanyalah alat. Fokus kami tetap pada emosi manusia.",
              },
              {
                icon: Award,
                title: "Result Oriented",
                desc: "Kami tidak menjual janji, kami mengirimkan hasil yang terukur.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-black border border-gray-800 rounded-xl hover:border-blue-500 transition duration-300"
              >
                <item.icon className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
