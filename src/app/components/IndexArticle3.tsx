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
export default function IndexArticle3 ({ article }: { article: Article }) {
      const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return (
    <div className="w-full relative  pb-6">
        <div className="relative w-full h-36 overflow-hidden  rounded-md">
         <Link href={`/${article.category}/${article.slug}`} title={article.title}>
           <Image
             src={article.image}
             alt={article.title}
             height={500}
             width={500}
             quality={60}
             className="object-cover w-full h-full transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
           />
         </Link>
        </div>
        <Link href={`/${article.category}/${article.slug}`}  title={article.title} className="line-clamp-2 mt-5">
          <h3 className={`group  text-2xl  font-semibold leading-relaxed  cursor-pointer ${ theme === "dark" ? "text-gray-50 underline-wrapper-white":"text-gray-950 underline-wrapper-black"}`}>
            {article.title}
          </h3>
        </Link>
        <div className={`flex flex-row align-middle just mt-4 md:gap-1 gap-2 font-sans text-xs  ${ theme === "dark" ? "border-gray-50 text-gray-50" : "text-gray-900"}`}>
            <Link href={`/${article.category}`}  title={article.category} className="inline-block    rounded">
              <span className="  font-sans  font-semibold border hover:bg-red-700
                hover:text-white px-2 md:px-1 py-1 capitalize ">
                {article.category}
              </span>
            </Link>

            <div className="" >
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
              className=" font-semibold ml-1">
                {article.author || "Reporter"}
              </Link>
            </div>
            
            
        </div>
        <div className="flex items-center text-xs  text-gray-600 mt-4  font-sans">
                <span>Published date: {article.date}</span>
            </div>
    </div>
    )
}