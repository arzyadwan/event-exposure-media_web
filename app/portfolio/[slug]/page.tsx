import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Fetch Data Project
async function getProject(slug: string) {
  const query = `
    *[_type == "portfolio" && slug.current == $slug][0] {
      title,
      clientName,
      completionDate,
      mainImage,
      "category": category->title,
      content,
      gallery
    }
  `;
  const data = await client.fetch(query, { slug });
  return data;
}

// 2. SEO Metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Portfolio Event Exposure`,
    description: `Studi kasus pengerjaan ${project.title} untuk ${project.clientName}.`,
  };
}

// 3. Komponen Utama
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-20 pb-20">
      {/* Hero Image Full Width */}
      <div className="w-full h-[50vh] md:h-[70vh] relative bg-gray-100 dark:bg-gray-900">
        {project.mainImage ? (
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700">
            No Image
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-32 pb-10 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/portfolio"
              className="text-gray-400 hover:text-gray-900 dark:text-white flex items-center gap-2 mb-4 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} /> Kembali ke Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-xl text-blue-400 font-medium">
              {project.clientName}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-800 pb-10 mb-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
              <User size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Klien
              </p>
              <p className="font-semibold">{project.clientName}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Tanggal
              </p>
              <p className="font-semibold">
                {project.completionDate || "On Going"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-full text-green-400">
              <Tag size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Kategori
              </p>
              <p className="font-semibold">{project.category || "General"}</p>
            </div>
          </div>
        </div>

        {/* Content Body (Rich Text) */}
        <div className="prose prose-invert prose-lg max-w-none">
          {project.content ? (
            <PortableText
              value={project.content}
              components={RichTextComponents}
            />
          ) : (
            <p className="text-gray-500 italic">
              Belum ada detail studi kasus untuk proyek ini.
            </p>
          )}
        </div>

        {/* Gallery Section (Jika ada multiple images) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20 border-t border-gray-800 pt-10">
            <h3 className="text-2xl font-bold mb-8">Galeri Dokumentasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image: any, i: number) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900"
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
