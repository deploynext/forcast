"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article{
    title:string;
    slug:string;
    category:string;
}
export default function AlsoLike ({articles}:{articles:Article[]}){
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className={` pt-5 ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>
            <h3 className="font-semibold text-xl my-5">You Might Also Like</h3>
            {articles.slice(10,15).map((article,index)=>(
                <div key={index} className="mb-5 ">
                    <Link href={`/${article.category}/${article.slug}`} title={article.title}
                    className="text-xl font-medium hover:text-red-700 flex flex-row"
                    >
                     <div>+</div> <div className="ml-2">{article.title}</div>
                    </Link><br />
                </div>
            ))}
        </div>
    )
}