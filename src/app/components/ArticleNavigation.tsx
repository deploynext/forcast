"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Article = {
  slug: string;
  title: string;
  image: string;
  category: string;
};

export default function ArticleNavigation({ articles }: { articles: Article[] }) {
  const pathname = usePathname();
  const parts = pathname ? pathname.split("/") : [];
  const currentCategory = parts[1] || "";
  const currentSlug = parts[2] || "";

  const currentIndex = articles.findIndex(
    (article) => article.slug === currentSlug && article.category === currentCategory
  );

  const prevArticle: Article | null =
    currentIndex > 0 ? articles[currentIndex - 1] : null;

  const nextArticle: Article | null =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div 
    className={`w-full md:flex justify-between items-center border-t border-b py-16 my-11 px-5 gap-6 overflow-hidden border-gray-300 ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>
      {/* Previous Article */}
      <div className="flex-1 min-w-0">
        {prevArticle ? (
          <Link
            href={`/${prevArticle.category}/${prevArticle.slug}`}
            title={prevArticle.title}
            className="flex items-center gap-3 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 leading-none">
              <Image
                src={prevArticle.image}
                alt={prevArticle.title}
                width={80}
                height={80}
                className="object-cover scale-200"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[16px] text-gray-500 font-sans mb-2">Previous Article</p>
              <p className="font-semibold text-lg truncate">{prevArticle.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Next Article */}
      <div className="flex-1 md:mt-0 mt-8 min-w-0 text-right">
        {nextArticle ? (
          <Link
            href={`/${nextArticle.category}/${nextArticle.slug}`}
            title={nextArticle.title}
            className="flex items-center gap-3 justify-end overflow-hidden"
          >
            <div className="min-w-0">
              <p className="text-[16px] text-gray-500 font-sans mb-2">Next Article</p>
              <p className="font-semibold text-lg truncate">{nextArticle.title}</p>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ">
              <Image
                src={nextArticle.image}
                alt={nextArticle.title}
                width={80}
                height={80}
                className="object-cover scale-200"
              />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
