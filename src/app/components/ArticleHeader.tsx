"use client"
import { Calendar,  User } from "lucide-react";

import SocialIcons from "./SocialIcons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  category?: string;
  date?: string;
  author?: string;
  shortdescription:string;
}

export default function ArticleHeader({ article }: { article: Article }) {
   const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    const reporter = "Reporter"
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between  pb-6 ">
      
      {/* Title Section */}
      <div className="w-full lg:w-9/12">
        {article.category && (
          <span className="inline-block font-sans bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded mb-3 capitalize">
           - {article.category}
          </span>
        )}
        <h1 className={`text-2xl lg:text-4xl font-bold my-4 ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-7 my-6 text-gray-600 text-sm">
          
            <span className="flex items-center font-sans gap-2">
              <User size={16} /> {article.author || reporter} 
            </span>
          
          
            <span className="flex items-center font-sans gap-2">
              <Calendar size={16} /> {article.date}
            </span>
          
        </div>
        <div className="mt-2">
            <p className="text-xl text-gray-500 font-sans ">{article.shortdescription}</p>
        </div>
      </div>

      {/* Social Share Section */}
      <div className="   lg:mt-40">
        <p className={`text-lg font-semibold mb-3 font-sans ${theme === "dark" ? "text-gray-50":"text-gray-900"}`}>Share This Article:</p>
        <SocialIcons/>
      </div>
    </div>
  );
}
