
import IndexArticle from './IndexArticle';



interface Article {
    title:string;
    image:string;
    slug:string;
    category:string;
    date:string;
    author?:string;
    shortdescription:string;
}
const TwoNews = ({ articles }: { articles: Article[] }) => {
  return (
    <div className='flex flex-row gap-8 grid-cols-2'>
        {articles.slice(10,12).map((article,index)=>(
            <div key={index} className=' w-1/2  py-5'>
                <IndexArticle article={article}/>
            </div>
        ))}
    </div>
  )
}

export default TwoNews