import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";


// UPDATE: Definisikan params sebagai Promise
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// UPDATE: Tambahkan 'await params' di sini
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // <--- WAJIB AWAIT
  
  const query = `*[_type == "service" && slug.current == $slug][0].title`;
  const title = await client.fetch(query, { slug });

  if (!title) return { title: "Service Not Found" };

  return {
    title: `${title} | Event Exposure Media`,
    description: `Layanan profesional ${title} dari Event Exposure Media.`,
  };
}

async function getServiceData(slug: string) {
  const query = `
    {
      "service": *[_type == "service" && slug.current == $slug][0] {
        title,
        "description": shortDescription,
        icon,
        features
      },
      "relatedProjects": *[_type == "portfolio" && service->slug.current == $slug] | order(completionDate desc) [0...3] {
        _id,
        title,
        slug,
        mainImage,
        clientName
      }
    }
  `;
  const data = await client.fetch(query, { slug });
  return data;
}

// UPDATE: Tambahkan 'await params' di komponen utama juga
export default async function ServicePage({ params }: Props) {
  const { slug } = await params; // <--- WAJIB AWAIT
  
  const data = await getServiceData(slug);

  if (!data.service) {
    notFound();
  }

  const { service, relatedProjects } = data;

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <section className="container mx-auto px-6 mb-16">
        <Link 
            href="/#services" 
            className="text-gray-500 hover:text-white mb-6 inline-block text-sm"
        >
            &larr; Kembali ke Layanan
        </Link>
        
        <div className="flex items-start gap-6 mb-8">
            {service.icon && (
                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                  <Image 
                    src={urlFor(service.icon).url()} 
                    alt={service.title}
                    fill
                    // UPDATE: Tambahkan sizes agar warning hilang & performa bagus
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 150px"
                    className="object-contain"
                  />
                </div>
            )}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {service.title}
                </h1>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-gray-800 pt-10">
            <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
                    <p>{service.description}</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-2xl mt-8">
                    <h3 className="text-xl font-bold mb-2 text-white">Butuh {service.title}?</h3>
                    <p className="text-gray-400 mb-6">Konsultasikan kebutuhan Anda bersama tim ahli kami.</p>
                    <Link 
                        href="/contact"
                        className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition inline-flex items-center gap-2"
                    >
                        Hubungi Sekarang <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 h-fit">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-4">
                    Lingkup Layanan
                </h3>
                <ul className="space-y-4">
                    {service.features && service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                            <span>{feature}</span>
                        </li>
                    ))}
                    {!service.features && (
                        <li className="text-gray-500 italic">Fitur belum ditambahkan.</li>
                    )}
                </ul>
            </div>
        </div>
      </section>

      {relatedProjects && relatedProjects.length > 0 && (
        <section className="container mx-auto px-6 border-t border-gray-800 pt-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Project Terkait <span className="text-blue-500">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((project: any) => (
                    <div key={project._id} className="group cursor-pointer">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800">
                            {project.mainImage && (
                                <Image
                                    src={urlFor(project.mainImage).url()}
                                    alt={project.title}
                                    fill
                                    // UPDATE: Tambahkan sizes di sini juga
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                    unoptimized
                                />
                            )}
                        </div>
                        <h3 className="font-bold text-lg group-hover:text-blue-400 transition">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">{project.clientName}</p>
                    </div>
                ))}
            </div>
        </section>
      )}
    </main>
  );
}