'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
 
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
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <div className=" rounded-lg overflow-hidden flex flex-col md:flex-row  border border-gray-300">
      {/* Text content */}
      <div className={`px-6 py-12 md:w-1/2 w-full ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>
        <Link href={`/${article.category}/${article.slug}`} title={article.title}>
          <h2 className="group text-2xl font-bold  leading-tight underline-wrapper-black line-clamp-4">
            {article.title} 
          </h2>
        </Link>

        <p className="text-gray-500 mt-4 text-sm md:text-base font-sans leading-relaxed line-clamp-4">
          {article.shortdescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <Link href={`/${article.category}`} title={article.category} className="border  font-sans   px-2 py-1 capitalize hover:bg-red-700 rounded-xs">{article.category}</Link>
          <span>by</span>
          <Link 
          title="go to author page"
                
            href={(() => {
              const routes: Record<string, string> = {
                "Ashley E. Marsh": "/team/ashley-e-marsh",
                "David J. Hughes": "/team/david-j-hughes",
                "Judith A. Beach": "/team/judith-a-beach",
                "Robert L. Dixon": "/team/robert-l-dixon",
                "Xavier M. Thomas": "/team/xavier-m-thomas",
              };
              const key = (article.author ?? "").trim();
              return routes[key] || "/team";
            })()} 
          className='font-semibold  font-sans '>
            {article.author || "Reporter"}
            </Link>
          <div className='w-px h-4 bg-gray-700'></div>
          <span className="text-gray-500  font-sans  ">{article.date}</span>
        </div>
      </div>

      {/* Image */}
      
      <div className="relative w-full md:w-1/2 h-72 md:h-auto  overflow-hidden border-0">
        <Link href={`/${article.category}/${article.slug}`}
        title={article.title}
        >
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
