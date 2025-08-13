'use client';

import Image from 'next/image';
import Link from 'next/link';
 
interface Article{
  title: string;
  shortdescription: string;
  category: string;
  author?: string;
  date?: string;
  image: string;
  slug: string;
}

interface FeaturedArticleCardProps {
  article:Article;
}

export default function FeaturedArticleCard({article}: FeaturedArticleCardProps) {
  return (
    <div className="bg-black text-white  rounded-lg overflow-hidden flex flex-col lg:flex-row font-sans">
      {/* Text content */}
      <div className="p-6 lg:w-1/2 w-full md:py-32 md:px-8">
        <Link href={`/${article.category}/${article.slug}`}>
          <h2 className="text-2xl md:text-3xl font-bold font-serif leading-tight hover:underline line-clamp-4">
            {article.title} 
          </h2>
        </Link>

        <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed line-clamp-4">
          {article.shortdescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <Link href={`/${article.category}`} className="border border-white px-3 py-1 capitalize hover:bg-red-700 ">{article.category}</Link>
          <span className="text-blue-400">by {article.author || "Reporter"}</span>
          <span className="text-gray-400">{article.date}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full lg:w-1/2 h-72 lg:h-auto  overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
          />
      </div>
    </div>
  );
}
