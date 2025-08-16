"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollingCards.module.css";

interface Article {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  author?: string;
}

export default function ScrollingCards({ articles }: { articles: Article[] }) {
  return (
    <div className="py-10">
        <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5 mx-5 lg:mx-44 ">
          <div className="md:flex md:flex-row align-middle gap-5 ">
              <h1 className="text-4xl font-bold">Highlight</h1>
              <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
              <div className="text-gray-500 flex flex-col font-sans text-lg">
                  <p >Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam.</p>  
                  <p>Risus tellus eget ultrices pretium nisi amet facilisis.</p>
              </div>
          </div>
          <Link href={`/${articles[0].category}`} className="font-sans max-h-15 max-w-24 font-semibold border px-3 m-4 py-1 hover:text-white hover:bg-red-600">
          See More
          </Link>
        </div>
        <div className={styles.scrollContainer}>
            
          <div className={styles.marquee}>
            {/* Group A */}
            <div className={`${styles.marqueeGroup} gap-6`}>
              {articles.map((article, idx) => (
                <div className={styles.card} key={`a-${article.slug}-${idx}`}>
                    <Link href={`/${article.category}/${article.slug}`}>
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className=  "object-cover transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
                        />
                    </Link>
                  <div className={`${styles.cardInfo} inset-0 bg-gradient-to-t from-black to-transparent`}>
                    <div className="absolute bottom-5 px-5 pb-2">
                      <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                        <h3 className="group mt-2 text-xl font-serif font-semibold underline-wrapper-white leading-relaxed cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="flex flex-row items-center mt-4 gap-2">
                        <Link href={`/${article.category}`} className="inline-block rounded">
                          <span className="font-sans text-sm font-semibold border px-3 py-1 capitalize hover:bg-red-700">
                            {article.category}
                          </span>
                        </Link>
                        <div className="mx-2">
                          by <span className="text-sm font-semibold">{article.author || "Reporter"}</span>
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
                    className={styles.image}
                  />
                  <div className={styles.cardInfo}>
                    <div className="absolute bottom-5 px-5 pb-2">
                      <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                        <h3 className="group mt-2 text-xl font-serif font-semibold leading-relaxed cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="flex flex-row items-center mt-4 gap-2">
                        <Link href={`/${article.category}`} className="inline-block rounded">
                          <span className="font-sans text-sm font-semibold border px-3 py-1 capitalize hover:bg-red-700">
                            {article.category}
                          </span>
                        </Link>
                        <div className="mx-2">
                          by <span className="text-sm font-semibold">{article.author || "Reporter"}</span>
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
