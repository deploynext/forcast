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
     <div className="w-full md:h-full h-80">
      {/* Image */}
       <div className="relative w-full h-full  max-h-[560px]  overflow-hidden rounded-md group ">
        <Link href={`/${article.category}/${article.slug}`} title={article.title}>
          <Image
            src={article.image}
            alt={article.title}
            width={1000}
            height={1000}
            className="object-cover  w-full h-full
            transform transition-transform duration-700 ease-in-out scale-110 group-hover:scale-112 group-hover:translate-x-3"
          />
        </Link>
        <div className="bottom-0 h-full  absolute  text-white inset-0 bg-gradient-to-t from-black to-transparent ">
          <div className="relative w-full h-full">
            <div className="absolute bottom-5 px-5 mb-2 text-center items-center">
                <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2">
                    <h3 className="group mt-2 text-2xl  font-semibold leading-relaxed underline-wrapper-white cursor-pointer ">
                      {article.title}
                    </h3>
                </Link>
                  <div className="flex flex-row align-middle just text-xs mt-4 gap-2 w-full justify-center items-center">
                <Link href={`/${article.category}`} title={article.category} className="inline-block    rounded">
                  <span className="  font-sans  font-semibold border hover:bg-red-700
                   px-3 py-1 capitalize ">
                    {article.category}
                  </span>
                </Link>
        
                <div className="  font-sans">
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
                  </Link >
                </div>
                
                <div className="flex items-center  text-gray-500   font-sans">
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