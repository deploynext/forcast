import Link from "next/link";

interface Article{
    title:string;
    slug:string;
    category:string;
}
export default function AlsoLike ({articles}:{articles:Article[]}){
    return(
        <div className="font-serif">
            <h3 className="font-semibold text-xl my-5">You Might Also Like</h3>
            {articles.slice(10,15).map((article,index)=>(
                <div key={index} className="mb-5 ">
                    <Link href={`/${article.category}/${article.slug}`}
                    className="text-xl font-medium hover:text-red-700 flex flex-row"
                    >
                     <div>+</div> <div className="ml-2">{article.title}</div>
                    </Link><br />
                </div>
            ))}
        </div>
    )
}