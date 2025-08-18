
import IndexArticle5 from './IndexArticle5';


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
    <div className='md:flex md:flex-row gap-6 md:grid-cols-3'>
        {articles.slice(10,13).map((article,index)=>(
            <div key={index} className='md:w-1/3'>
                <IndexArticle5 article={article}/>
            </div>
        ))}
    </div>
  )
}

export default ThreeNews