"use client"

import Link from "next/link";
import RightImage from "./RightImage";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import TitleInside2 from "./TitleInside2";

interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;

}
export default function Trending ({ articles }: { articles: Article[] }) {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className={`lg:px-44 py-16 px-5  ${theme === "dark" ? "bg-gray-900":"bg-gray-100"}`}>
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5  ">
              <div className="md:flex md:flex-row align-middle gap-5 ">
                  <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-gray-50" :"text-gray-900"}`}>Trending</h1>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-500 flex flex-col font-sans text-lg">
                      <p >Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam.</p>  
                      <p>Risus tellus eget ultrices pretium nisi amet facilisis.</p>
                  </div>
              </div>
              <Link href={`/${articles[0].category}`} className={`font-sans max-h-15 max-w-24 font-semibold border px-3 m-4 py-1 hover:text-white hover:bg-red-600 ${theme === "dark" ? "border-gray-50 text-gray-50":"border-gray-950 text-gray-950"}`}>
              See More
              </Link>
            </div>
            <div className="lg:flex h-full lg:flex-row align-middle gap-10">
                <div className="flex flex-col lg:w-1/3">
                    {articles.slice(1,5).map((article,index)=>(
                        <div key={index} className="border-t border-gray-300 first:border-t-0">
                            <RightImage article={article}/>
                        </div>
                    ))}
                </div>
                <div className="lg:w-2/3 flex items-stretch p-4  ">
                    <TitleInside2 article={articles[19]}/>
                </div>
            </div>
        </div>
    )
}
