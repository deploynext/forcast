"use client"
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug:string;
  shortdescription:string;
  date:string;
}

export default function MinusTop ( { article }: { article: Article } ) {
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return (
        <div className="relative lg:top-[-160] py-5 border-t mt-8 border-b border-gray-300  ">
          <div  className="md:flex">
            <div className="md:w-96 md:h-[236px] w-full h-48  overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover  transform transition-transform
                    duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
            <div className={`md:w-1/2 space-y-3 mt-4  md:pl-5 ${theme === "dark" ? "text-gray-50":"text-gray-800"}`}>
              <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                <h3 className={`group mt-2 text-2xl  font-semibold leading-relaxed cursor-pointer  ${theme === "dark" ? "underline-wrapper-white":"underline-wrapper-black  "}`} >
                  {article.title}
                </h3>
              </Link>
              <p className="line-clamp-3">{article.shortdescription}</p>
              <div className="flex items-center gap-2 mt-4 text-xs">
                <Link href={`/${article.category}`}>
                  <span 
                  className="px-2 py-1 border hover:bg-red-600 hover:text-white 
                  capitalize font-sans cursor-pointer  font-medium"
                  >
                    {article.category}
                  </span>
                </Link>
                <span className="text-gray-500 font-sans ">by </span>
                <span className="font-sans">{article.author || "Reporter"}</span>
                <span className="text-gray-500">|</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
    )
}