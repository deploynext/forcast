"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;

}


export default function WithNumber ({ article,index }: { article: Article , index:number }){
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return(
                <div className="">
                    <div  className="flex flex-col items-start">
                        <div className="relative w-[350px] h-48 overflow-hidden rounded-md">
                            <Link href={`/${article.category}/${article.slug}`}>
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"

                                />
                            </Link>
                        </div>
                        <div className="mt-4 flex w-[350px] items-start gap-1">
                        <span className="text-4xl md:text-5xl font-bold text-red-600">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <Link href={`/${article.category}/${article.slug}`} className={`line-clamp-2 ml-2 font-semibold text-2xl leading-snug cursor-pointer ${theme === "dark" ? "text-gray-50" : "text-gray-950"}`}
                        >
                            {article.title}
                        </Link>
                    </div>
                    
                    {/* Meta */}
                    <div className={` ml-16 mt-3 flex flex-wrap items-center gap-4  font-sans ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>
                        <Link
                          href={`/category/${article.category.toLowerCase()}`}
                          className="px-2  py-1 border border-gray-400 hover:bg-red-600 hover:text-white transition-colors capitalize text-xs font-medium"
                        >
                          {article.category}
                        </Link>
                        <div ><span className="text-gray-500 text-xs">by</span> <span className="text-xs">{article.author || "Reporter"}</span></div>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                      </div>
                    </div>
               
                </div>
        
    )
}