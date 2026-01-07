import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect (Ganti dengan Video Background nanti) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0" />
      
      <div className="container relative z-10 px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
          <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">
            One Stop Solution Agency
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Crafting Moments. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Building Digital Presence.
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Dari panggung pelaminan hingga halaman pertama Google. 
          Kami menggabungkan eksekusi event presisi dengan strategi digital yang berdampak.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/#services" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2"
          >
            Lihat Layanan <ArrowUpRight size={18} />
          </Link>
          <Link 
            href="/portfolio" 
            className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition backdrop-blur-sm"
          >
            Studi Kasus
          </Link>
        </div>
      </div>
    </section>
  );
}