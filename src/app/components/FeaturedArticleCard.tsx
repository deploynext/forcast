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
    <div className="bg-black text-white  rounded-sm overflow-hidden flex flex-col md:flex-row ">
      {/* Text content */}
      <div className="p-6 md:w-1/2 w-full md:py-20 md:px-8">
        <Link href={`/${article.category}/${article.slug}`}>
          <h2 className="group text-xl md:text-2xl font-bold  leading-tight underline-wrapper-white line-clamp-4">
            {article.title} 
          </h2>
        </Link>

        <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed line-clamp-4 font-sans">
          {article.shortdescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/${article.category}`} className="border border-white px-3 py-1 capitalize hover:bg-red-700 rounded-xs font-sans">{article.category}</Link>
          <span className='font-sans'>by</span><span className='font-semibold text-sm font-sans'>{article.author || "Reporter"}</span>
          <div className='w-px h-4 bg-gray-400'></div>
          <span className="text-gray-400 font-sans text-xs">{article.date}</span>
        </div>
      </div>

      {/* Image */}
      
      <div className="relative w-full md:w-1/2 h-72 md:h-auto  overflow-hidden">
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
