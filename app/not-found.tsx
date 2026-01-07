import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-[150px] font-black text-gray-900 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-500 bg-white dark:bg-black px-4">
            Page Not Found
          </span>
        </div>
      </div>

      <p className="text-gray-400 max-w-md mb-8">
        Sepertinya Anda tersesat di belakang panggung. Halaman yang Anda cari
        tidak ada atau telah dipindahkan.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
      >
        <Home size={18} /> Kembali ke Home
      </Link>
    </div>
  );
}
