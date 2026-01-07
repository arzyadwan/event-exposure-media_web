import { client } from "@/sanity/lib/client";
import PortfolioList from "@/components/PortfolioList";

// Fetch data dari Sanity
async function getProjects() {
  const query = `
    *[_type == "portfolio"] | order(completionDate desc) {
      _id,
      title,
      slug,
      clientName,
      mainImage,
      category->{
        title
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export const metadata = {
  title: "Portfolio | Event Exposure Media",
  description: "Lihat hasil karya kami dalam Event Organizer, Produksi Video, dan Pengembangan Web.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Portfolio */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Selected Works <span className="text-blue-500">.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Koleksi proyek pilihan yang menunjukkan dedikasi kami terhadap detail, estetika, dan performa.
          </p>
        </div>

        {/* Client Component untuk List & Filter */}
        <PortfolioList projects={projects} />
      </div>
    </main>
  );
}