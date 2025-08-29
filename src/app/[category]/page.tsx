import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import CategoryHeader from "../components/CategoryHeader";
import ArticlesList from "../components/ArticlesList"; // ✅ use the new component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

interface Article {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  author: string;
}

type Category =
  | "politics"
  | "business"
  | "technology"
  | "sports"
  | "science"
  | "health"
  | "lifestyle"
  | "education"
  | "entertainment"
  | "about-us";

interface PageProps {
  params:Promise<{ category: Category }>;
}

export async function generateStaticParams() {
  const categories: Category[] = [
    "politics",
    "business",
    "technology",
    "sports",
    "science",
    "health",
    "lifestyle",
    "entertainment",
    "education",
    "about-us",
  ];

  return categories.map((category) => ({ category }));
}

async function getArticlesByCategory(category: string): Promise<Article[] | null> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", `${category}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
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
      <Navbar articles={articles} />
      <CategoryHeader category={category} />
      <div className="lg:mx-11">
        <ArticlesList articles={articles} /> 
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  );
}
