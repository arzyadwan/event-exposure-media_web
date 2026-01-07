import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Paket & Harga | Event Exposure Media",
  description:
    "Pilihan paket layanan transparan untuk Event, Wedding, dan Digital Needs.",
};

export default function PricingPage() {
  const packages = [
    {
      name: "Wedding Intimate",
      price: "Start IDR 25jt",
      desc: "Cocok untuk akad/pemberkatan sakral dengan tamu terbatas.",
      features: [
        "Konsep & Rundown",
        "Coordination Team (6 Crew)",
        "Dokumentasi Foto & Video",
        "Sound System Standard",
      ],
      highlight: false,
    },
    {
      name: "Corporate Gathering",
      price: "Start IDR 45jt",
      desc: "Paket lengkap untuk event kantor, outing, atau awarding night.",
      features: [
        "Venue Finding",
        "Full EO Team",
        "Dokumentasi + Live Cam",
        "Entertainment & MC",
        "Doorprize Management",
      ],
      highlight: true,
    },
    {
      name: "Digital Starter",
      price: "Start IDR 5jt",
      desc: "Bangun branding online bisnis Anda dari nol.",
      features: [
        "Website Landing Page",
        "5 Konten Feed/Bulan",
        "Setup Google Business",
        "Basic SEO",
      ],
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investasi Transparan, <br />
            <span className="text-blue-500">Hasil Maksimal.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kami percaya pada transparansi. Berikut adalah estimasi paket
            populer kami. Untuk kebutuhan spesifik, kami selalu siap membuat
            penawaran custom.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl border flex flex-col h-full ${
                pkg.highlight
                  ? "bg-gray-100 dark:bg-gray-900 border-blue-500 shadow-2xl shadow-blue-900/20"
                  : "bg-white dark:bg-black border-gray-800 hover:border-gray-600"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-gray-900 dark:text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-blue-400 mb-4">
                {pkg.price}
              </div>
              <p className="text-gray-400 text-sm mb-8 border-b border-gray-700 pb-8">
                {pkg.desc}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check
                      size={16}
                      className="text-blue-500 mt-0.5 shrink-0"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition ${
                  pkg.highlight
                    ? "bg-blue-600 hover:bg-blue-700 text-gray-900 dark:text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Minta Penawaran <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Butuh Custom Package?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Setiap event dan bisnis itu unik. Jika paket di atas tidak sesuai,
            tim kami akan membuatkan kalkulasi biaya yang pas dengan budget
            Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition"
          >
            Diskusikan dengan Tim Kami &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
