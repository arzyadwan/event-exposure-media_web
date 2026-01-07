import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import { TrustSnapshot, Workflow, FinalCTA, FAQ } from "@/components/home/Sections";
import PortfolioMasonry from "@/components/home/PortfolioMasonry";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";
import { ArrowRight, Video, Globe, Camera, Share2 } from "lucide-react";
import Image from "next/image";

// Fetch data Projects untuk Portfolio
async function getProjects() {
  const query = `
    *[_type == "portfolio"] | order(completionDate desc)[0...12] {
      title,
      mainImage
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST SNAPSHOT (Horizontal Strip) */}
      <TrustSnapshot />

      {/* 3. ABOUT PREVIEW */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Kiri: Visual (2/3 width di mobile, tapi visual 1/3 di desktop logic "Left 2/3" usually means visual dominant) */}
            {/* Sesuai request: Left (2/3) brand logo/visual, Right (1/3) text */}
            <div className="lg:col-span-2 bg-gray-900 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden group">
                {/* Abstract Visual Placeholder */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-80" />
                <h1 className="relative z-10 text-6xl md:text-8xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors duration-500">
                    EVENT<br/>EXPOSURE
                </h1>
            </div>
            
            <div className="lg:col-span-1">
                <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Tentang Kami</span>
                <h2 className="text-3xl font-bold mb-6">Orchestrating Chaos into Symphony.</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Kami menggunakan pendekatan berbasis sistem untuk manajemen event. Tidak ada tebak-tebakan, hanya perencanaan presisi yang didukung teknologi digital.
                </p>
                <Link href="/about" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition">
                    Pelajari Filosofi Kami
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN SERVICES (Entry - 2 Large Cards) */}
      <section id="services" className="py-20 px-6 container mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            Layanan Utama <div className="h-px bg-gray-800 flex-1 ml-4" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: EO */}
            <Link href="/services/event-organizer" className="group relative h-[400px] rounded-2xl overflow-hidden block">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition z-10" />
                {/* Background Image Placeholder - Ganti src dengan gambar aset Anda */}
                <div className="absolute inset-0 bg-gray-800">
                     {/* <Image src="..." fill className="object-cover" /> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
                
                <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition">Event Organizer</h3>
                    <p className="text-gray-300 mb-6 max-w-sm text-sm">Corporate gathering, konser musik, hingga launching produk dengan manajemen teknis presisi.</p>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-600 transition">
                        Lihat Paket <ArrowRight size={16} />
                    </div>
                </div>
            </Link>

            {/* Card 2: WO */}
            <Link href="/services/wedding-organizer" className="group relative h-[400px] rounded-2xl overflow-hidden block">
                <div className="absolute inset-0 bg-pink-900/20 group-hover:bg-pink-900/10 transition z-10" />
                <div className="absolute inset-0 bg-gray-800">
                     {/* <Image src="..." fill className="object-cover" /> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
                
                <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-pink-400 transition">Wedding Organizer</h3>
                    <p className="text-gray-300 mb-6 max-w-sm text-sm">Perencanaan konsep pernikahan intim hingga megah dengan sentuhan personal.</p>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold border border-white/20 group-hover:bg-pink-600 group-hover:border-pink-600 transition">
                        Rencanakan Hari-H <ArrowRight size={16} />
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* 5. WORKFLOW PROCESS */}
      <Workflow />

      {/* 6. PORTFOLIO MASONRY */}
      <PortfolioMasonry projects={projects} />

      {/* 7. SUPPORTING SERVICES (Grid Cards) */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Digital & Creative Support <div className="h-px bg-gray-800 flex-1 ml-4" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Video Production", icon: Video, desc: "Company profile & dokumentasi sinematik.", link: "/services/creative-production" },
                    { title: "Social Media", icon: Share2, desc: "Strategi konten & manajemen akun.", link: "/services/social-media" },
                    { title: "Web Development", icon: Globe, desc: "Website performa tinggi & SEO friendly.", link: "/services/web-development" },
                    { title: "Photography", icon: Camera, desc: "Foto produk & event profesional.", link: "/services/creative-production" },
                ].map((item, i) => (
                    <Link key={i} href={item.link} className="bg-black border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition group">
                        <item.icon className="text-gray-500 group-hover:text-blue-500 mb-4 transition" size={28} />
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. FINAL CTA */}
      <FinalCTA />

    </main>
  );
}