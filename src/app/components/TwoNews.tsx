

import IndexArticle4 from './IndexArticle4';



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
    <div className='md:flex md:flex-row gap-8 md:grid-cols-2'>
        {articles.slice(10,12).map((article,index)=>(
            <div key={index} className=' md:w-1/2  py-5'>
                <IndexArticle4 article={article}/>
            </div>
        ))}
    </div>
  )
}

export default TwoNews