import politics from "../data/politics.json"
import business from "../data/business.json" 
import health from "../data/health.json"
import science from "../data/science.json"
import sports from "../data/sports.json"
import technology from "../data/technology.json"
import education from "../data/education.json"
import lifestyle from "../data/lifestyle.json"
import entertainment from "../data/entertainment.json"
import FeaturedArticleCard from "./components/FeaturedArticleCard"
import NewsTabs from "./components/NewsTabs"
import TitleInside from "./components/TitleInside"
import IndexArticle from "./components/IndexArticle"
import RightImage from "./components/RightImage"



type Article ={
  title:string;
  image:string;
  shortdescription:string;
  description:string;
  slug:string;
  category:string;
  author?:string;
  date:string;
}

const mergedArticles: Article[] = [
  ...business,
  ...health,
  ...politics,
  ...sports,
  ...science,
  ...technology,
  ...education,
  ...lifestyle,
  ...entertainment
]
export default function Home() {
  const sportArticle = mergedArticles.filter(articles => articles.category === "sports")
  const politicsArticle = mergedArticles.filter(articles => articles.category === "politics")
  return (
    <div className="mx-44 mt-20">
      <div className="md:flex md:flex-row gap-8">
        <div className="md:w-2/3">
          <FeaturedArticleCard article={mergedArticles[0]}/>
          <div className="flex flex-row gap-8 mt-8 bg-amber-500">
            <div className="w-1/2 py-4 ">
              <IndexArticle article={politicsArticle[0]}/>
              
            </div>
            <div className="flex flex-col w-1/2">
              <div className=" pt-4">
                <TitleInside article={sportArticle[0]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col">
          <NewsTabs articles={mergedArticles}/>
        </div>
      </div>
      <div className="md:flex md:flex-row gap-8">
        <div className="md:w-1/3">
          {mergedArticles.
           filter(articles => articles.category === "politics").
           slice(2,5).
           map((article,index) => (
            <div key={index}>
              <RightImage article={article}/>
            </div>
          ))}
        </div>
        <div className="md:w-2/3  bg-amber-400 overflow-auto">
          <IndexArticle article={politicsArticle[0]}/>
        </div>
      </div>
    </div>
  );
}
