import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Semua Layanan | Event Exposure Media",
  description:
    "Daftar lengkap layanan Event Organizer, Produksi Kreatif, dan Solusi Digital.",
};

// Fetch semua services dikelompokkan
async function getServices() {
  const query = `
    *[_type == "service"] | order(title asc) {
      title,
      slug,
      shortDescription,
      icon,
      category->{
        title
      }
    }
  `;
  const services = await client.fetch(query);
  return services;
}

export default async function ServicesIndexPage() {
  const services = await getServices();

  // Grouping logic sederhana
  const groupedServices: Record<string, any[]> = {};

  services.forEach((service: any) => {
    const catName = service.category?.title || "Lainnya";
    if (!groupedServices[catName]) {
      groupedServices[catName] = [];
    }
    groupedServices[catName].push(service);
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ecosystem of Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Solusi terintegrasi untuk kebutuhan offline event dan online
            presence Anda.
          </p>
        </div>

        {/* Loop Categories */}
        {Object.entries(groupedServices).map(([category, items]) => (
          <div key={category} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {category}
              </h2>
              <div className="h-px bg-gray-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((service: any) => (
                <Link
                  key={service.slug.current}
                  href={`/services/${service.slug.current}`}
                  className="group block p-8 rounded-2xl bg-gray-100 dark:bg-gray-900/50 border border-gray-800 hover:border-blue-500 hover:bg-gray-100 dark:bg-gray-900 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    {service.icon ? (
                      <div className="relative w-12 h-12 opacity-80 group-hover:opacity-100 transition">
                        <Image
                          src={urlFor(service.icon).url()}
                          alt={service.title}
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                    )}
                    <ArrowRight className="text-gray-600 group-hover:text-blue-500 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
