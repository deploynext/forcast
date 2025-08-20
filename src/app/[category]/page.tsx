import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import CategoryHeader from '../components/CategoryHeader';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Article {
    title:string;
    image:string;
    shortdescription:string;
    description:string;
    slug:string;
    category:string;
    date:string;
    author:string;
}

type Category = 'politics' | 'business' | 'technology' | 'sports' | 'science' | 'health';

interface PageProps {
  params: Promise<{ category: Category }>;
}


export async function generateStaticParams() {
  const categories: Category[] = [
    'politics',
    'business',
    'technology',
    'sports',
    'science',
    'health',
  ];

  return categories.map((category) => ({
    category,
  }));
}

async function getArticlesByCategory(category: string): Promise<Article[] | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const posts: Article[] = JSON.parse(fileContent);
    return posts;
  } catch (error) {
    console.error(`Failed to read data for category "${category}":`, error);
    return null;
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const articles = await getArticlesByCategory(category);
  if (!articles) return notFound();


  return (
    <>
    <Navbar articles={articles}/>
    <div className='lg:px-5 '>
        <CategoryHeader category={category}/>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 lg:gap-x-8 py-20 container mx-0 lg:mx-12 ">
            
              {articles.map((article,index) => (
                <div key={index} className='w-full '>
                  <ArticleCard  article={article} />
                </div>
                ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}