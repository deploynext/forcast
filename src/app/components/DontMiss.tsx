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
                  <h2 className={`text-4xl mb-5 mt-1 font-bold ${ theme === "dark" ? "text-gray-50":"text-gray-950"}` }>{`Don't Miss`}</h2>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-600 flex flex-col font-sans text-lg">
                      <p >The latest scores, game highlights, and stories from the world of sports.</p>  
                      <p> Stay updated on matches, players, and moments that matter.</p>
                  </div>
              </div>
              <Link href={`/${articles[0].category}`} 
              className={`font-sans text-sm max-h-10 max-w-24 font-semibold border px-3  md:pt-2 hover:text-white ${ theme === "dark" ? "text-gray-50 border-gray-50":"text-gray-950 border-gray-950"}`}
              title="See More"
              >
              See More
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mx-5 lg:mx-44">
                {articles.slice(0, 6).map((article, index) => (
                    <div key={index} className="flex flex-col mt-3 mb-3 items-start">
                        <div className="relative w-full h-56 overflow-hidden rounded-md">
                            <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  width={320}
                                  height={250}
                                  quality={60}
                                  className="object-cover w-full h-full transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"

                                />
                            </Link>
                        </div>
                        <div className="flex flex-row mt-5">
                        <span className="text-6xl font-bold text-red-600 mr-4 ">
                            <h3>{String(index + 1).padStart(2, "0")}</h3>
                        </span>
                        <div className="flex flex-col">
                        <div >
                        
                        <Link href={`/${article.category}/${article.slug}`} title={article.title} className={`line-clamp-2 font-semibold text-xl hover:underline leading-snug cursor-pointer ${theme === "dark" ? "text-gray-50  " : "text-gray-950"}`}
                        ><h3>
                            {article.title}
                        </h3>
                        </Link>
                        </div>
                    
                    {/* Meta */}
                        <div className={`mt-2 text-xs flex flex-wrap items-center gap-2  font-sans ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>
                        <Link
                          href={`/category/${article.category.toLowerCase()}`}
                          title={article.category}
                          className="px-2  py-1 border border-gray-400 hover:bg-red-600 hover:text-white transition-colors capitalize  font-medium"
                        >
                          {article.category}
                        </Link>
                        <div className="">
                            <span className="text-gray-600 me-2">by</span> 
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
                            className={`font-semibold ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>
                                {article.author || "Reporter"}
                            </Link>
                            </div>
                        </div>
                        <span className="text-gray-600 font-sans text-xs mt-4">Published date : {article.date}</span>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}