import Image from "next/image";
import Link from "next/link";

interface Article{
    image:string;
    slug:string;
    title:string;
    author?:string;
    category:string;
    date:string;
}
export default function TitleInside2 ({article}:{article:Article}){
return(
    <div>
     <div className="w-full h-full">
      {/* Image */}
       <div className="relative w-full  max-h-[560px] overflow-hidden rounded-md group ">
        <Link href={`/${article.category}/${article.slug}`}>
          <Image
            src={article.image}
            alt={article.title}
            width={1000}
            height={1000}
            className="object-cover  w-full h-full
            transform transition-transform duration-700 ease-in-out scale-110 group-hover:scale-112 group-hover:translate-x-3"
          />
        </Link>
        <div className="bottom-0 h-full font-sans absolute  text-white inset-0 bg-gradient-to-t from-black to-transparent ">
          <div className="relative w-full h-full">
            <div className="absolute bottom-5 px-5 mb-2 text-center items-center">
                <Link href={`/${article.category}/${article.slug}`} className="line-clamp-2">
                    <h3 className="group mt-2 text-2xl font-serif font-semibold leading-relaxed underline-wrapper-white cursor-pointer ">
                      {article.title}
                    </h3>
                </Link>
                  <div className="flex flex-row align-middle just mt-4 gap-2 w-full justify-center items-center">
                <Link href={`/${article.category}`} className="inline-block    rounded">
                  <span className="  font-sans text-sm font-semibold border hover:bg-red-700
                   px-3 py-1 capitalize me-2">
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
          </div>
        </div>
      </div>
    </div>
  </div>
)
}