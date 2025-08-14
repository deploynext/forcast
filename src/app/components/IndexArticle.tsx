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
export default function IndexArticle ({ article }: { article: Article }) {
    return (
    <div className="w-full border-b pb-6 border-gray-400 top-[-130] overflow-auto ">
        <div className="relative w-full h-56 overflow-hidden border border-gray-300 rounded-md">
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
          <h3 className="group  text-2xl font-serif font-semibold leading-relaxed underline-wrapper-black cursor-pointer">
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
            <div className="w-px h-3 bg-gray-500 mx-2 mt-2"></div>
            <div className="flex items-center gap-2 text-gray-500 text-sm  font-sans">
                <span>{article.date}</span>
            </div>
        </div>
    </div>
    )
}