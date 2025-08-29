"use client"
import { AlarmClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Article = {
  title: string;
  image: string;
 category:string;
 slug:string;
 date:string;
};

interface MostReadProps {
  articles: Article[];
}

export default function MostRead({ articles }: MostReadProps) {

  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`w-full  ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`} >
      <h2 className=" border-b border-gray-400 text-2xl font-semibold pb-5  mb-5">
                Top Week
              </h2>
        {articles.slice(10,15).map((articles,index)=>(
        <div  className={`lg:flex lg:flex-row gap-3 mb-3 justify-items-center  pb-2`} key={index} >
          
          <Link href={`/${articles.category}/${articles.slug}`} title={articles.title} className="shrink-0">
            <Image
              src={articles.image}
              alt={articles.title}
              width={150}
              height={100}
              quality={60}
              className="w-full lg:w-[100px] h-[100px] object-cover rounded mt-1.5 mb-2"
            />
          </Link>

         
          <div className="flex flex-col">
            <Link
              href={`/${articles.category}/${articles.slug}`}
              title={articles.title}
              className="font-bold text-[17px]  mb-2 lg:line-clamp-3"
            >
              {articles.title}
            </Link>
            <p className="flex flex-row text-xs text-gray-600 font-sans font-semibold">
              <AlarmClock className="me-2 w-3 " />
              <div className="mt-1">{articles.date}</div>
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
