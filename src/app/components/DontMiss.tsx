"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article{
 title:string;
 category:string;
 date:string;
 slug:string;
 author?:string;
 image:string;
}
export default function DontMiss({ articles }: { articles: Article[] }) {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className="relative md:top-[-100] border-t-2 border-gray-300 py-16">
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5 mx-5 lg:mx-44 ">
              <div className="md:flex md:flex-row align-middle gap-5 ">
                  <h1 className={`text-4xl font-bold ${ theme === "dark" ? "text-gray-50":"text-gray-950"}` }>Dont Miss</h1>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-500 flex flex-col font-sans text-lg">
                      <p >Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam.</p>  
                      <p>Risus tellus eget ultrices pretium nisi amet facilisis.</p>
                  </div>
              </div>
              <Link href={`/${articles[0].category}`} className={`font-sans text-sm max-h-10 max-w-24 font-semibold border px-3 mx-4 md:pt-2 hover:text-white ${ theme === "dark" ? "text-gray-50 border-gray-50":"text-gray-950 border-gray-950"}`}>
              See More
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mx-5 lg:mx-44">
                {articles.slice(0, 6).map((article, index) => (
                    <div key={index} className="flex flex-col mt-3 mb-3 items-start">
                        <div className="relative w-full h-56 overflow-hidden rounded-md">
                            <Link href={`/${article.category}/${article.slug}`}>
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"

                                />
                            </Link>
                        </div>
                        <div className="mt-4 flex items-start gap-3">
                        <span className="text-4xl md:text-5xl font-bold text-red-600">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <Link href={`/${article.category}/${article.slug}`} className={`line-clamp-2 font-semibold text-lg leading-snug cursor-pointer ${theme === "dark" ? "text-gray-50" : "text-gray-950"}`}
                        >
                            {article.title}
                        </Link>
                    </div>
                    
                    {/* Meta */}
                    <div className={`mt-2 ml-14 flex flex-wrap items-center gap-2  font-sans ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>
                        <Link
                          href={`/category/${article.category.toLowerCase()}`}
                          className="px-2  py-1 border border-gray-400 hover:bg-red-600 hover:text-white transition-colors capitalize text-sm font-medium"
                        >
                          {article.category}
                        </Link>
                        <div className="text-sm"><span className="text-gray-500">by</span> <span >{article.author || "Reporter"}</span></div>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500">{article.date}</span>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    )
}