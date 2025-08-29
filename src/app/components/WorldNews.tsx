import Link from "next/link";
import TitleInside2 from "./TitleInside2";
import RightImage2 from "./RightImage2";


interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;
}
export default function WorldNews ({ articles }: { articles: Article[] }) {
    return (
        <div className="lg:px-44 py-16 px-5 bg-gray-900 text-white">
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5  ">
              <div className="md:flex md:flex-row align-middle gap-5 ">
                  <h2 className="text-4xl mb-5 font-bold">World News</h2>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-600 flex flex-col font-sans text-lg">
                      <p >What’s trending in health and medicine </p>  
                      <p>— breakthrough research, public health updatesand medical stories shaping the conversation.</p>
                  </div>
              </div>
              <Link href={`/${articles[0].category}`} title="see more" className="font-sans max-h-10 max-w-24 font-semibold border px-3  text-sm md:pt-2 hover:text-white hover:bg-red-600">
              See More
              </Link>
            </div>
            <div className="lg:flex lg:flex-row align-middle gap-10">
                <div className="lg:w-2/3 flex items-stretch p-4 ">
                    <TitleInside2 article={articles[15]}/>
                </div>
                <div className="lg:w-1/3">
                  {/* Mobile view → horizontal scroll */}
                  <div className="flex lg:hidden overflow-x-auto gap-4 snap-x snap-mandatory pb-2">
                    {articles.slice(1, 5).map((article, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] snap-start  rounded-md"
                      >
                        <RightImage2 article={article} />
                      </div>
                    ))}
                  </div>
                
                  {/* Desktop view → normal vertical list */}
                  <div className="hidden lg:flex flex-col">
                    {articles.slice(1, 5).map((article, index) => (
                      <div
                        key={index}
                        className="border-t border-gray-300 first:border-t-0"
                      >
                        <RightImage2 article={article} />
                      </div>
                    ))}
                  </div>
                </div>

                
            </div>
        </div>
    )
}