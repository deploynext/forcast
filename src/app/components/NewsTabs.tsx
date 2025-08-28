"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug: string;
  date:string;
}

interface Tab {
  num: number;
  label: string;
  category: string;
}

const tabs: Tab[] = [
  { num: 1, label: "Top stories", category: "science" },
  { num: 2, label: "Trending News", category: "sports" },
  { num: 3, label: "Latest News", category: "politics" },
];

export default function NewsTabs({ articles }: { articles: Article[] }) {
  const [activeTab, setActiveTab] = useState(1);

  const activeCategory = tabs.find((tab) => tab.num === activeTab)?.category;
  const currentArticles = articles.filter(
    (article) => article.category === activeCategory
  );

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl">
      {/* Tabs */}
      <div className="flex border-b mb-4 gap-8 pl-5 md:gap-20 lg:gap-10 md:pl-20 lg:pl-0">
        {tabs.map((tab) => (
          <button
            key={tab.num}
            onClick={() => setActiveTab(tab.num)}
            className={`py-2 text-sm md:text-[16px] md:ml-2 cursor-pointer border-b-2 ${
              activeTab === tab.num
                ? "border-red-500 text-red-600"
                : "border-transparent"
            } ${
              theme === "dark"
                ? "text-gray-50 hover:text-gray-300"
                : "text-gray-800 hover:text-gray-900"
            }`}
          ><h2>{tab.label}</h2>
            
          </button>
        ))}
      </div>

      {/* Articles with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-2"
        >
          {currentArticles.slice(10, 15).map((article, index) => (
            <div
              key={index}
              className="flex gap-4 border-t first:border-t-0 border-gray-300 pt-3 pb-2 first:pt-0"
            >
              <div className="w-1/3   h-[100px] overflow-hidden rounded-xs relative">
                <Link href={`/${article.category}/${article.slug}`}
                title={article.title}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
              </div>
              <div className="w-2/3">
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="line-clamp-2"
                  title={article.title}
                >
                  <h3
                    className={`group mt-2 text-lg font-bold leading-6 text-justify cursor-pointer ${
                      theme === "dark"
                        ? "text-gray-50 underline-wrapper-white"
                        : "text-black underline-wrapper-black"
                    }`}
                  >
                    {article.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-2 text-xs">
                  <span
                    className={`px-1 py-1 border hover:bg-red-600 hover:text-white capitalize font-sans cursor-pointer  rounded-sm font-medium ${
                      theme === "dark" ? "text-gray-50" : "text-black"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-gray-500 font-sans ml-2">by </span>
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
                    className={` font-sans font-medium 
                    ${
                      theme === "dark" ? "text-gray-50" : "text-black"
                    }`}
                  >
                    {article.author || "Reporter"}
                  </Link>
                 
                 
                  
                </div>
                <div className="flex items-center text-xs mt-4 text-gray-500   font-sans">
                      <span>Published date: {article.date}</span>
                  </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
