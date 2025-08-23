"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Article{
 title:string;
 category:string;
 date:string;
 slug:string;
 author?:string;
 image:string;
}

const LeftImage = ({ article }: { article: Article }) => {
      const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="space-y-2 mt-4">
         <div className="flex flex-col md:flex-row gap-4 pb-[19px]">
          {/* IMAGE (top on mobile, right on desktop) */}
          <div className="w-full md:w-1/3 h-48 md:h-28 overflow-hidden relative rounded-xs order-1 md:order-2">
            <Link href={`/${article.category}/${article.slug}`}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
              />
            </Link>
          </div>

          {/* TEXT (bottom on mobile, left on desktop) */}
          <div className={`w-full md:w-2/3 order-2 md:order-1 ${theme === "dark" ? "text-gray-50" : "text-gray-950"}`}>
            <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
              <h3 className={`group mt-2 text-xl font-semibold leading-relaxed cursor-pointer ${theme === "dark" ? "underline-wrapper-white" : "underline-wrapper-black"}`}>
                {article.title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-4 text-xs">
              <Link href={`/${article.category}`}>
                <span className="px-2 py-1 border hover:bg-red-600 hover:text-white capitalize font-sans cursor-pointer font-medium">
                  {article.category}
                </span>
              </Link>
              <span className="text-gray-500 font-sans">by </span>
              <span className="font-sans">{article.author || "Reporter"}</span>
              <div className="w-px h-3 bg-gray-500 mt-1"></div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-sans">
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>

        </div>
  )
}

export default LeftImage