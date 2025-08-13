import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import MostRead from "@/app/components/MostRead";
import SidebarAd from "@/app/components/SidebarAd";
import NewsletterForm from "@/app/components/NewsletterForm";
import Detailbc from "@/app/components/Detailbc";
import ArticleHeader from "@/app/components/ArticleHeader";
import Details from "@/app/components/Details";
import AlsoLike from "@/app/components/AlsoLike";
import Tagged from "@/app/components/Tagged";
import ArticleNavigation from "@/app/components/ArticleNavigation";
import CommentForm from "@/app/components/CommentForm";


interface Article {
  
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date:string;
  author?:string;
 
}


export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src', 'data');

  const files = await fs.readdir(dataDir);
  const params: { category: string; slug: string }[] = [];

  for (const file of files) {
    const category = file.replace('.json', '');
    const filePath = path.join(dataDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const articles = JSON.parse(fileContent);

    for (const article of articles) {
      params.push({ category, slug: article.slug });
    }
  }

  return params;
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } =await  params;

  try {
    const filePath = path.join(process.cwd(), "src", "data", `${category}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const articles: Article[] = JSON.parse(fileContent);
    const article = articles.find((a) => a.slug === slug);

    if (!article) return notFound();
// const isClientSlug = category==="politics" && slug === "misunderstood-chapter-story-battle-stability-during-pandemic";
    return(
      <div>
        <Detailbc slug={article.slug}/>
      <div className="lg:px-20 px-2 ">
        
        <ArticleHeader article={article}/>
        <div className="flex flex-col lg:flex-row lg:gap-6 mt-6">
          
          <div className="w-full lg:w-2/3">
            <Details article={article}/>
            <AlsoLike articles={articles}/>

            <Tagged/>
            <ArticleNavigation articles={articles}/>
            <CommentForm/>
          </div>
          <div className="w-full lg:w-1/3 mt-10 mb-4 lg:mt-0">
          <div className="sticky top-1">
            <SidebarAd/>
            <div className="p-12">
              <h2 className="font-serif border-b border-gray-400 text-2xl font-semibold pb-5  mb-5">
                Top Week
              </h2>
              {articles.slice(0, 5).map((article, index) => (
                <div key={index}>
                  <MostRead articles={article} />
                </div>
              ))}
            </div>
            <NewsletterForm/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
   } catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}