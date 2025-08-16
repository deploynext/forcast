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

export default function FeaturedArticleCard2({article}: FeaturedArticleCardProps) {
  return (
    <div className=" rounded-lg overflow-hidden flex flex-col md:flex-row font-sans border border-gray-300">
      {/* Text content */}
      <div className="px-6 py-12 md:w-1/2 w-full">
        <Link href={`/${article.category}/${article.slug}`}>
          <h2 className="group text-xl md:text-2xl font-bold font-serif leading-tight underline-wrapper-white line-clamp-4">
            {article.title} 
          </h2>
        </Link>

        <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed line-clamp-4">
          {article.shortdescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <Link href={`/${article.category}`} className="border  px-2 py-1 capitalize hover:bg-red-700 rounded-xs">{article.category}</Link>
          <span>by</span><span className='font-semibold text-sm'>{article.author || "Reporter"}</span>
          <div className='w-px h-4 bg-gray-700'></div>
          <span className="text-gray-700">{article.date}</span>
        </div>
      </div>

      {/* Image */}
      
      <div className="relative w-full md:w-1/2 h-72 md:h-auto  overflow-hidden border-0">
        <Link href={`/${article.category}/${article.slug}`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
          />
          </Link>
      </div>
    </div>
  );
}
