"use client"; // Wajib client component untuk interaksi

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRight } from "lucide-react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Tipe data project
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  clientName: string;
  category: { title: string }; // Kita ambil judul kategori
  mainImage: SanityImageSource;
}

export default function PortfolioList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");

  // Ambil list kategori unik dari data project yang ada
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category?.title || "Others")),
  ];

  // Filter logika
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category?.title === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              filter === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-500 hover:text-gray-900 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            href={`/portfolio/${project.slug.current}`}
            key={project._id}
            className="group block relative"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 mb-4 border border-white/5">
              {project.mainImage && (
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized // Bypass optimasi server lokal untuk performa
                />
              )}

              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-white dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                  Lihat Studi Kasus <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.clientName}
                </p>
              </div>
              <span className="text-xs font-mono text-gray-400 border border-gray-800 px-2 py-1 rounded">
                {project.category?.title || "Project"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>Belum ada project di kategori ini.</p>
        </div>
      )}
    </div>
  );
}
