'use client';

import Image from 'next/image';
import Link from 'next/link';
 
interface Article{
  title: string;
  shortdescription: string;
  category: string;
  author?: string;
  date?: string;
  image: string;
  slug: string;
}

interface FeaturedArticleCardProps {
  article:Article;
}

export default function FeaturedArticleCard({article}: FeaturedArticleCardProps) {
  return (
    <div className="bg-black text-white  rounded-sm overflow-hidden flex flex-col md:flex-row ">
      {/* Text content */}
      <div className="p-6 md:w-1/2 w-full md:py-16 md:px-8">
        <Link href={`/${article.category}/${article.slug}`}
        title={article.title}>
          <h2 className="group text-xl md:text-2xl font-bold  leading-tight underline-wrapper-white line-clamp-4">
            {article.title} 
          </h2>
        </Link>

        <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed line-clamp-4 font-sans">
          {article.shortdescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <Link href={`/${article.category}`} title={article.title} className="border border-white px-3 py-1 capitalize hover:bg-red-700 rounded-xs font-sans">{article.category}</Link>
          <span className='font-sans '>by</span>
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
                  return routes[key] ?? "/team";
                })()} 
                className='font-semibold   font-sans'>{article.author || "Reporter"}</Link>
                <div className="text-gray-400 font-sans  ml-2 ">{article.date}</div>
        </div>
          
      </div>

      {/* Image */}
      
      <div className="relative w-full md:w-1/2 h-72 md:h-auto  overflow-hidden">
        <Link href={`/${article.category}/${article.slug}`} title={article.title}>
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={500}
            quality={60}
            priority
            fetchPriority='high'
            loading='eager'
            className="object-cover w-full h-full transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
          />
          </Link>
      </div>
    </div>
  );
}
