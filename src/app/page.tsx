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



type Article ={
  title:string;
  image:string;
  shortdescription:string;
  description:string;
  slug:string;
  category:string;
  author?:string;
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
  return (
    <div className="mx-44 mt-20">
      <div className="md:flex md:flex-row gap-6">
        <div className="md:w-2/3">
          <FeaturedArticleCard article={mergedArticles[0]}/>
        </div>
        <div className="md:w-1/3">
          <NewsTabs articles={mergedArticles}/>
        </div>
      </div>
      
    </div>
  );
}
