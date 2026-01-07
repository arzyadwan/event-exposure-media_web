"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-500">
        Something went wrong!
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Terjadi kesalahan pada sistem. Tim teknis kami telah dinotifikasi.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
      >
        Coba Lagi
      </button>
    </div>
  );
}
