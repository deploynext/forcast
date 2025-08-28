"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollingCards.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  author?: string;
}

export default function ScrollingCards({ articles }: { articles: Article[] }) {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <div className="pb-10">
        <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5 mx-5 lg:mx-44 ">
          <div className="md:flex md:flex-row align-middle gap-5 ">
              <h2 className={`text-4xl mb-5 font-bold ${ theme === "dark" ? "text-gray-50" : "text-gray-900"}`}>Highlight</h2>
              <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
              <div className="text-gray-500 flex flex-col font-sans text-lg">
                  <p >Insights, market trends, and analysis driving global growth.</p>  
                  <p>From Wall Street to emerging markets—stay ahead in finance and trade.</p>
              </div>
          </div>
          <Link href={`/${articles[0].category}`} title="see more" className={`font-sans max-h-10 max-w-24 font-semibold border px-3  relative text-sm md:pt-2 hover:text-white hover:bg-red-600 ${ theme === "dark" ? "border-gray-50 text-gray-50" : "text-gray-900"}`}>
          See More
          </Link>
        </div>
        <div className={styles.scrollContainer}>
            
          <div className={styles.marquee}>
            {/* Group A */}
            <div className={`${styles.marqueeGroup} gap-6`}>
              {articles.map((article, idx) => (
                <div className={`${styles.card} group`} key={`a-${article.slug}-${idx} `}>
                    <Link href={`/${article.category}/${article.slug}`} title={article.title} >
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          priority
                          className=  "object-cover transform transition-transform duration-700 ease-in-out scale-110 group-hover:scale-112 group-hover:translate-x-3"
                        />
                    </Link>
                  <div className={`${styles.cardInfo} inset-0 bg-gradient-to-t from-black to-transparent`}>
                    <div className="absolute bottom-5 px-5 pb-2">
                      <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2">
                        <h3 className="group mt-2 text-xl  font-semibold underline-wrapper-white leading-relaxed cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="flex flex-row items-center text-xs mt-4 gap-2">
                        <Link href={`/${article.category}`} title={article.category} className="inline-block rounded">
                          <span className="font-sans  font-semibold border px-3 py-1 capitalize hover:bg-red-700">
                            {article.category}
                          </span>
                        </Link>
                        <div className="mx-2">
                          by 
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
                          className="ml-2 font-semibold">
                            {article.author || "Reporter"}
                          </Link>
                        </div>
                        <div className="w-px h-3 bg-gray-500 mx-2 mt-1"></div>
                        <div className="flex items-center gap-2 text-gray-500   font-sans">
                            <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Group B (duplicate, aria-hidden) */}
            <div className={styles.marqueeGroup} aria-hidden="true">
              {articles.map((article, idx) => (
                <div className={styles.card} key={`b-${article.slug}-${idx}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className={styles.image}
                  />
                  <div className={styles.cardInfo}>
                    <div className="absolute bottom-5 px-5 pb-2">
                      <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2">
                        <h3 className="group mt-2 text-xl  font-semibold leading-relaxed cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="flex flex-row items-center mt-4 text-xs gap-2">
                        <Link href={`/${article.category}`} title={article.category} className="inline-block rounded">
                          <span className="font-sans  font-semibold border px-3 py-1 capitalize hover:bg-red-700">
                            {article.category}
                          </span>
                        </Link>
                        <div className="mx-2">
                          by 
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
                          className=" ml-2 font-semibold">
                            {article.author || "Reporter"}
                          </Link>
                        </div>
                        <div className="w-px h-3 bg-gray-500 mx-2 mt-2"></div>
                        <div className="flex items-center gap-2 text-gray-500   font-sans">
                            <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
    </div>
  );
}
