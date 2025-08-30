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
export default function TitleInside ({article}:{article:Article}){
return(
    <div>
     <div className="w-full">
      {/* Image */}
       <div className="relative w-full h-56 overflow-hidden  rounded-md  ">
        <Link href={`/${article.category}/${article.slug}`} title={article.title}>
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={500}
            quality={60}
            className="object-cover  w-full h-full
            transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-3"
          />
        </Link>
        <div className="bottom-0 h-full absolute  text-white inset-0 bg-gradient-to-t from-black to-transparent via-black/80">
          <div className="relative w-full h-full">
            <div className="absolute bottom-5 px-5 mb-2">
                <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2">
                    <h3 className="group mt-2 text-xl font-semibold leading-relaxed underline-wrapper-white cursor-pointer ">
                      {article.title}
                    </h3>
                </Link>
                  <div className="flex flex-row align-middle just mt-4 gap-2 ">
                <Link href={`/${article.category}`} title={article.category} className="inline-block    rounded">
                  <span className="  font-sans text-xs font-semibold border hover:bg-red-700
                   px-3 py-1 capitalize me-2">
                    {article.category}
                  </span>
                </Link>
        
                <div className="  text-xs font font-sans mt-1 me-1">
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
                  className="text-xs font-semibold ml-2 font-sans">
                    {article.author || "Reporter"}
                  </Link>
                </div>
                <div className="w-px h-3 bg-gray-500  mt-2"></div>
                <div className="flex items-center  text-gray-600 text-xs  font-sans">
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