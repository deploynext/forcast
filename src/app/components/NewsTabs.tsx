"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug:string;
}

interface Tab {
  num: number;
  label: string;
  category: string; 
}

const tabs: Tab[] = [
  { num: 1, label: "Top stories", category: "entertainment" },
  { num: 2, label: "Trending News", category: "education" },
  { num: 3, label: "Latest News", category: "politics" }
];

export default function NewsTabs({ articles }: { articles: Article[] }) {
  const [activeTab, setActiveTab] = useState(1);

  // find category name for current tab
  const activeCategory = tabs.find(tab => tab.num === activeTab)?.category;

  // filter articles by category
  const currentArticles = articles.filter(
    article => article.category === activeCategory
  );

  return (
    <div className="max-w-2xl  ">
      {/* Tabs */}
      <div className="flex border-b mb-4 gap-8 pl-5 md:gap-20 lg:gap-0 md:pl-20 lg:pl-0">
        {tabs.map(tab => (
          <button
            key={tab.num}
            onClick={() => setActiveTab(tab.num)}
            className={`lg:mr-1 py-2 lg:ml-3  font-semibold text-[20px]  border-b-2 ${
              activeTab === tab.num
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-700 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-2">
        {currentArticles.slice(10,15).map((article, index) => (
          <div key={index} className="flex gap-4 border-b border-gray-300 pt-2 lg:pb-[19px]">
            <div className="lg:w-1/3 md:w-28 w-full h-28 overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                   fill
                    className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
            <div className="w-2/3">
              <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                <h3 className="group mt-2 text-lg font-serif font-semibold leading-relaxed underline-wrapper-black  cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="px-2 py-1 border hover:bg-red-600 hover:text-white capitalize font-sans cursor-pointer text-sm font-medium">{article.category}</span>                
                  <span className="text-gray-500 font-sans text-lg">by </span><span className="text-lg font-sans">{article.author || "Reporter"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
