import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-10 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Image"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            unoptimized // Bypass optimasi server lokal
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 md:ml-10 py-5 list-disc space-y-2 text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-5 md:ml-10 py-5 list-decimal space-y-2 text-gray-300">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl py-10 font-bold text-gray-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl py-8 font-bold text-blue-400">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl py-6 font-bold text-gray-200">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg py-4 font-bold text-gray-300">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-5 py-5 my-5 bg-gray-100 dark:bg-gray-900/50 text-gray-400 italic rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="pb-4 text-gray-300 leading-relaxed text-lg">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-blue-500 hover:decoration-white transition-colors text-blue-400"
        >
          {children}
        </Link>
      );
    },
  },
};
