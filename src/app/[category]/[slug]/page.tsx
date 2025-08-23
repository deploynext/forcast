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
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


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
        <Navbar articles={articles}/>
        <Detailbc title={article.title}/>
      <div className="lg:px-20 px-2 mt-5">
        
        <ArticleHeader article={article}/>
        <div className="flex flex-col lg:flex-row lg:gap-6 mt-6">
          
          <div className="w-full lg:w-2/3">
            <Details article={article}/>
            <AlsoLike  articles={articles}/>

            <Tagged/>
            <ArticleNavigation articles={articles}/>
            <CommentForm/>
          </div>
          <div className="w-full lg:w-1/3 mt-10 mb-4 lg:mt-0">
          <div className="sticky top-1">
            <SidebarAd/>
            <div className="p-12">
              
              
                
                  <MostRead articles={articles} />
                
            
            </div>
            <NewsletterForm/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    )
   } catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}