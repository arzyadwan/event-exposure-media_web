"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const reviews = [
    {
      name: "Sarah & Dimas",
      role: "Wedding Client",
      text: "EO paling detail yang pernah kami temui. Hari H benar-benar tanpa stres, timnya gercep banget!",
    },
    {
      name: "PT. Teknologi Nusantara",
      role: "Corporate Gathering",
      text: "Acara gathering 500 karyawan berjalan smooth. Dokumentasi videonya sinematik, bos kami sangat puas.",
    },
    {
      name: "Cafe Senja",
      role: "Web Development",
      text: "Website cafe kami sekarang loadingnya cepet banget, reservasi online jadi naik 200%.",
    },
    {
      name: "Budi Santoso",
      role: "Event Musik",
      text: "Sound system, lighting, dan manajemen stage-nya kelas dunia. Recommended!",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Kata Mereka</h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] px-4"
              >
                <div className="bg-white dark:bg-black border border-gray-800 p-8 rounded-2xl h-full relative">
                  <Quote className="text-blue-600 mb-4 opacity-50" size={40} />
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <span className="text-xs text-blue-400 uppercase tracking-wide">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
