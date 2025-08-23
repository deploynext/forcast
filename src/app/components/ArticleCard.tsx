"use client"
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article {
  
  category: string;
  title: string;
  date: string;
  image: string;
  slug:string;
}

export default function ArticleCard({ article }: { article: Article }) {
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="w-full px-2 pb-8">
      {/* Image */}
       <div className="relative w-full h-44 overflow-hidden border border-gray-300 rounded-md sm:w-[800px] lg:w-[300px] ">
        <Link href={`/${article.category}/${article.slug}`} title={article.title}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
          />
        </Link>
      </div>

      {/* Category Tag */}
      <div className="inline-block  clip-polygon mt-4 bg-purple-700 pl-2 pe-3 py-1 mb-2 rounded">
        <span className=" text-white font-sans text-sm font-semibold  uppercase me-2">
          {article.category}
        </span>
      </div>
      <br />
      {/* Title */}
      <Link href={`/${article.category}/${article.slug}`} title={article.title}>
        <h3 className={`group mt-2 text-lg  font-semibold leading-relaxed underline-wrapper cursor-pointer ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>
          {article.title}
        </h3>
      </Link>


      {/* Date */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 font-sans">
        <Calendar size={16} />
        <span>{article.date}</span>
      </div>
    </div>
  );
}
