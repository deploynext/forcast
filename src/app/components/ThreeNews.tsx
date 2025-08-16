
import IndexArticle3 from './IndexArticle3';


interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;
    shortdescription:string;
}
const ThreeNews = ({ articles }: { articles: Article[] }) => {
  return (
    <div className='flex flex-row gap-6 grid-cols-3'>
        {articles.slice(10,13).map((article,index)=>(
            <div key={index} className='w-1/3'>
                <IndexArticle3 article={article}/>
            </div>
        ))}
    </div>
  )
}

export default ThreeNews