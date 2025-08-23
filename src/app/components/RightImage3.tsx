"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Bookmark, Calendar } from "lucide-react";

interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug:string;
  date:string;
}
export default function RightImage3 ({ article }: { article: Article }) {
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className=" my-2">
          <div  className="md:flex gap-4 ">
            <div className="w-[80px]  h-[80px]  overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
            <div className="md:w-2/3 md:mt-0 mt-5">
              <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                <h3 className={`group mt-2 text-xl font-semibold leading-relaxed   cursor-pointer ${theme === "dark" ? "underline-wrapper-white":"underline-wrapper-black"}`}>
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2  text-sm justify-between">
                <span className="flex flex-row gap-2 align-middle text-gray-500 font-sans text-xs"><Calendar size={12} className="mt-0.5"/>{article.date}</span><div className="rounded-full bg-gray-700 p-1"><Bookmark size={12}/></div>
              </div>
            </div>
          </div>
        </div>
    )
}