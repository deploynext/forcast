import Image from "next/image";
import Link from "next/link";

interface Article {
  
  category: string;
  title: string;
  date: string;
  image: string;
  slug:string;
  author?:string;
}
export default function IndexArticle3 ({ article }: { article: Article }) {
    return (
    <div className="w-full relative  pb-6">
        <div className="relative w-full h-36 overflow-hidden border border-gray-300 rounded-md">
         <Link href={`/${article.category}/${article.slug}`}>
           <Image
             src={article.image}
             alt={article.title}
             fill
             className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
           />
         </Link>
        </div>
        <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2 mt-5">
          <h3 className="group  text-xl font-serif font-semibold leading-relaxed underline-wrapper-black cursor-pointer">
            {article.title}
          </h3>
        </Link>
        <div className="flex flex-row align-middle just mt-4 gap-2 font-sans ">
            <Link href={`/${article.category}`} className="inline-block    rounded">
              <span className="  font-sans text-sm font-semibold border hover:bg-red-700
                hover:text-white px-3 py-1 capitalize me-2">
                {article.category}
              </span>
            </Link>

            <div className=" mx-2">by  <span className="text-sm font-semibold">{article.author || "Reporter"}</span></div>
            
        </div>
    </div>
    )
}