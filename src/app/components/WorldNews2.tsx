"use client"

import FeaturedArticleCard2 from "./FeaturedArticleCard2";
import LeftImage from "./LeftImage";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";



interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;
    shortdescription:string;
}
export default function WorldNews2 ({ articles }: { articles: Article[] }) {
        const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className="lg:mx-44 m-5 pt-10">
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5  ">
              <div className="md:flex md:flex-row align-middle gap-5 ">
                  <h2 className={`text-4xl mb-5 font-bold ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>World News</h2>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-500 flex flex-col font-sans text-lg">
                      <p >Your source for clear, reliable, and timely news.</p>  
                      <p>Breaking stories, deep analysis, and insights that connect the world.</p>
                  </div>
              </div>
            </div>
            <div className="md:flex md:flex-row gap-6">
                <div className="pt-4 md:w-8/12">
                    <FeaturedArticleCard2 article={articles[0]}/>
                </div>
                <div className="md:w-4/12">
                    {articles.slice(5,8).map((article,index)=>(
                        <div key={index} className="border-t border-gray-300 first:border-0 my-2">
                            <LeftImage article={article}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}