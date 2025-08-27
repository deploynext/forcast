"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article {
  
  category: string;
  title: string;
  date: string;
  image: string;
  slug:string;
  author?:string;
}
export default function IndexArticle2 ({ article }: { article: Article }) {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
    <div className="w-full pb-6">
        <div className="relative w-full h-full overflow-hidden  rounded-md">
         <Link href={`/${article.category}/${article.slug}`} title={article.title}>
           <Image
             src={article.image}
             alt={article.title}
             width={1000}
             height={1000}
             className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
           />
         </Link>
        </div>
        <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2 mt-5">
          <h3 className={`group  text-2xl  font-semibold leading-relaxed  cursor-pointer ${theme === "dark" ? "text-gray-50 underline-wrapper-white":"text-gray-950 underline-wrapper-black"}`}>
            {article.title}
          </h3>
        </Link>
        <div className={`flex flex-row align-middle just mt-4 gap-2   font-sans text-xs ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`} >
            <Link href={`/${article.category}`} title={article.category} className="inline-block    rounded">
              <span className="  font-sans  font-semibold border hover:bg-red-700
                hover:text-white px-3 py-1 capitalize md:me-2">
                {article.category}
              </span>
            </Link>

            <div className=" md:mx-2">
              by  
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
              className=" font-semibold ml-2 md:ml-0">
                {article.author || "Reporter"}
              </Link>
            </div>
            <div className="w-px h-3 bg-gray-500 md:mx-2 mt-1"></div>
            <div className="flex items-center gap-2 text-gray-500   font-sans">
                <span>{article.date}</span>
            </div>
        </div>
    </div>
    )
}