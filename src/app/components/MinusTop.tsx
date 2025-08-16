import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug:string;
  shortdescription:string;
}

export default function MinusTop ( { article }: { article: Article } ) {
    return (
        <div className="relative lg:top-[-160] py-[34px] border-t  border-b border-gray-300  lg:left-[-15]">
          <div  className="md:flex">
            <div className="md:w-96 md:h-[236px] w-full h-72  overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover  transform transition-transform
                    duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
            <div className="md:w-1/2 space-y-3 mt-2 md:pl-5">
              <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                <h3 className="group mt-2 text-lg font-serif font-semibold leading-relaxed underline-wrapper-black  cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <p className="line-clamp-3">{article.shortdescription}</p>
              <div className="flex items-center gap-2 mt-4 text-sm">
                <Link href={`/${article.category}`}>
                  <span 
                  className="px-2 py-1 border hover:bg-red-600 hover:text-white 
                  capitalize font-sans cursor-pointer text-sm font-medium"
                  >
                    {article.category}
                  </span>
                </Link>
                <span className="text-gray-500 font-sans text-lg">by </span>
                <span className="text-lg font-sans">{article.author || "Reporter"}</span>
              </div>
            </div>
          </div>
        </div>
    )
}