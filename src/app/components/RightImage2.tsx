import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  category: string;
  author?: string;
  image: string;
  slug:string;
  date:string;
}
export default function RightImage2 ({ article }: { article: Article }) {
    return(
        <div className="space-y-2 mt-4">
          <div  className="md:flex gap-4 pb-[19px]">
            <div className="md:w-1/3 w-full  h-36 md:h-28 overflow-hidden rounded-xs relative">
               <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover  transform transition-transform duration-700 ease-in-out scale-110 hover:scale-112 hover:translate-x-2"
                  />
                </Link>
            </div>
            <div className="md:w-2/3 mt-5 md:mt-0">
              <Link href={`/${article.category}/${article.slug}`} title={article.title} className="line-clamp-2">
                <h3 className="group mt-2 text-xl  font-semibold leading-relaxed underline-wrapper-white  cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-center gap-1 mt-4 text-xs ">
                <Link href={`/${article.category}`} title={article.category}><span className="p-1 border hover:bg-red-600 hover:text-white capitalize font-sans cursor-pointer  font-medium">{article.category}</span></Link>
                <span className="text-gray-500 font-sans ml-2 ">by </span>
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
                className="font-sans ml-2">
                  {article.author || "Reporter"}
                </Link>
              
                
              </div>
              <div className="flex items-center text-xs mt-2 text-gray-500   font-sans">
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
    )
}