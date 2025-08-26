"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  author: string;
}

export default function ArticlesList({ articles }: { articles: Article[] }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const showMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 12);
      setLoading(false);
    }, 1000); // simulate loading delay
  };

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div>
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   container mx-0 lg:mx-8">
        {visibleArticles.map((article, index) => (
          <div key={index} className="w-full">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {/* Load More Button or Loader */}
      {visibleCount < articles.length && (
        <div className="flex justify-center my-10">
          {loading ? (
            // 🔴 Circular Dots Loader
            <div className="relative w-20 h-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute w-5 h-5 bg-red-600 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 30}deg) translate(50px)`,
                    animation: "spinDots 5s linear infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></span>
              ))}
            </div>
          ) : (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg transition"
            >
              View More Articles
            </button>
          )}
        </div>
      )}
    </div>
  );
}
