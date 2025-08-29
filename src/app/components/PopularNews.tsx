"use client"
import Link from "next/link";
import IndexArticle2 from "./IndexArticle2";
import IndexArticle3 from "./IndexArticle3";
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
export default function PopularNews ({ articles }: { articles: Article[] }) {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <div className="lg:mx-44 mx-5 pt-10">
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5  ">
              <div className="md:flex md:flex-row align-middle gap-5 ">
                  <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-gray-50" : "text-gray-900"}`}>Popular News</h2>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-600 flex flex-col font-sans text-lg">
                      <p >Updates, insights, and debates shaping learning worldwide.</p>  
                      <p> From schools to universities—news on policies, innovation, and opportunities.</p>
                  </div>
              </div>
              <Link href={`/${articles[0].category}`} title="see more" className={`font-sans max-h-10 max-w-24 font-semibold border px-3 text-sm md:pt-2 hover:text-white hover:bg-red-600 ${ theme === "dark" ? "border-gray-50 text-gray-50" : "text-gray-900"}`}>
              See More
              </Link>
            </div>
            <div className="md:flex md:flex-row gap-6">
                <div className=" md:w-1/2 ">
                    <div className="sticky top-5 py-5  "><IndexArticle2 article={articles[0]}/></div>
                    
                </div>
                <div className="md:w-1/2 grid  md:grid-cols-2 ">
                    {articles.slice(5,15).map((article,index)=>(
                        <div key={index} className="py-5 px-2"><IndexArticle3  article={article}/></div>
                        
                    ))}
                    
                </div>
            </div>
        </div>
    )
}