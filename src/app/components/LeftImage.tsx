import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Article{
 title:string;
 category:string;
 date:string;
 slug:string;
 author?:string;
 image:string;
}

const LeftImage = ({ article }: { article: Article }) => {
  return (
    <div className="space-y-2 mt-4">
          <div  className="md:flex gap-4 pb-[19px]">
           
            <div className="md:w-2/3">
              <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                <h3 className="group mt-2 text-lg font-serif font-semibold leading-relaxed underline-wrapper-black  cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-4 text-sm">
                <Link href={`/${article.category}`}><span className="px-2 py-1 border hover:bg-red-600 hover:text-white capitalize font-sans cursor-pointer text-sm font-medium">{article.category}</span></Link>
                <span className="text-gray-500 font-sans text-lg">by </span><span className="text-lg font-sans">{article.author || "Reporter"}</span>
              </div>
            </div>
             <div className="md:w-1/3 w-full  h-36 md:h-28 overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
          </div>
        </div>
  )
}

export default LeftImage