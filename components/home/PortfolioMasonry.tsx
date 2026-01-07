"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  projects: any[];
}

export default function PortfolioMasonry({ projects }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Batasi hanya 9-12 gambar agar tidak terlalu panjang
  const displayProjects = projects.slice(0, 12);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
            <p className="text-gray-400">
              Dokumentasi visual dari berbagai project kami.
            </p>
          </div>
        </div>

        {/* Masonry Grid menggunakan Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayProjects.map(
            (project, idx) =>
              project.mainImage && (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid"
                  onClick={() =>
                    setSelectedImage(urlFor(project.mainImage).url())
                  }
                >
                  <Image
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    width={600}
                    height={800} // Aspect ratio dummy, object-fit akan handle
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-white dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {project.title}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-white dark:bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-gray-900 dark:text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
            <X size={24} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Lightbox View"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
