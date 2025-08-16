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
import MinusTop from "./components/MinusTop"
import ScrollingCards from "./components/ScrollingCards"
import DontMiss from "./components/DontMiss"



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
  const businessArticle = mergedArticles.filter(articles => articles.category === "business")
  return (
    <>
      <div className="lg:mx-44 mx-5 mt-5 md:mt-20">
        <div className="lg:flex lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <FeaturedArticleCard article={mergedArticles[0]}/>
          <div className="md:flex md:flex-row gap-8 mt-8">
            <div className="md:w-1/2 py-4 ">
              <IndexArticle article={politicsArticle[0]}/>
            </div>
            <div className="md:w-1/2">
              <div className=" pt-4">
                <TitleInside article={sportArticle[0]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col">
          <NewsTabs articles={mergedArticles}/>
        </div>
        </div>
        <div className="lg:flex lg:flex-row gap-8">
        <div className="lg:w-1/3">
          {mergedArticles.
           filter(articles => articles.category === "politics").
           slice(2,5).
           map((article,index) => (
            <div key={index} className="border-t border-gray-300  first:border-t-0  gap-4 ">
              <RightImage article={article}/>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3">
          <MinusTop article={businessArticle[10]}/>
          <div  className="lg:top-[-158px] relative">
            <div className="md:flex md:flex-row  ">
              {mergedArticles.
               filter(articles => articles.category === "lifestyle").
               slice(10,12).
               map((article,index) => (
                <div key={index} className="md:w-1/2">
                  <RightImage article={article}/>
                </div>
              ))}
            </div>
            <div className="md:flex md:flex-row ">
              {mergedArticles.
               filter(articles => articles.category === "health").
               slice(10,12).
               map((article,index) => (
                <div key={index} className="md:w-1/2 border-t border-gray-300">
                  <RightImage article={article}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
              
      </div>
      <DontMiss articles={sportArticle}/>
      <div className="border-t-2 border-gray-300 pt-10 ">
        <ScrollingCards articles={businessArticle}/>
      </div>
      
    </>
  );
}
