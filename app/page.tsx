import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Hero from "@/components/Hero";
import Link from "next/link";

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  icon: SanityImageSource; // Image source dari Sanity
}

// Fungsi Fetch Data (GROQ Query)
async function getServices() {
  const query = `
      *[_type == "service"] {
        _id,
        title,
        slug,
        shortDescription,
        icon
      }
    `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const services: Service[] = await getServices();

  return (
    <main className="min-h-screen bg-black">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Layanan Kami
            </h2>
            <div className="h-1 w-20 bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug.current}`} 
                key={service._id}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 block" // tambahkan 'block'
              >
                {service.icon && (
                  <div className="mb-6 relative w-14 h-14 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={urlFor(service.icon).url()}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <div className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:translate-x-2 transition-transform mt-4">
                  Detail Layanan &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
