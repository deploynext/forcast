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
import TitleInside from "./components/TitleInside"
import IndexArticle from "./components/IndexArticle"
import RightImage from "./components/RightImage"
import MinusTop from "./components/MinusTop"
import ScrollingCards from "./components/ScrollingCards"
import DontMiss from "./components/DontMiss"
import Trending from "./components/Trending"
import PopularNews from "./components/PopularNews"
import SubscribeBox from "./components/SubscribeBox"
import WorldNews from "./components/WorldNews"
import WorldNews2 from "./components/WorldNews2"
import ThreeNews from "./components/ThreeNews"
import TwoNews from "./components/TwoNews"
import LatestHead from "./components/LatestHead"
import QuoteSlider from "./components/QuoteSlider"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// seo

import { Metadata } from "next";
import ScrollToTop from "./components/ScrollToTop"
import SidebarAd from "./components/SidebarAd"

export const metadata: Metadata = {
  title: "Fiscal Fusion - Fusing News and Numbers.",
  description:
      "Fiscal Fusion – your go-to destination for global news, timely updates, and deep insights on everything from politics and business to lifestyle and innovation.",
  authors: [{ name: "fiscal fusion Team", url: "https://www.fiscalfusion.org/" }],
  publisher: "fiscal fusion",
  metadataBase: new URL("https://www.fiscalfusion.org/"),
  alternates: {
    canonical: "https://www.fiscalfusion.org/",
  },

  openGraph: {
    title: "Fiscal Fusion - Fusing News and Numbers.",
    description:
      "Fiscal Fusion – your go-to destination for global news, timely updates, and deep insights on everything from politics and business to lifestyle and innovation.",
    url: "https://www.fiscalfusion.org/",
    siteName: "Fiscal Fusion",
    images: [
      {
        url: "/logo-black.webp",
        width: 1200,
        height: 630,
        alt: "Fiscal Fusion Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fiscal Fusion - Fusing News and Numbers.",
    description:
      "Fiscal Fusion – your go-to destination for global news, timely updates, and deep insights on everything from politics and business to lifestyle and innovation.",
    site: "@fiscalfusion",
    images: ["https://www.fiscalfusion.org/"],
  },

  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: { index: true, follow: true },
  // },
  icons: {
    icon: "/logo-black.webp",
    shortcut: "/logo-black.webp",
    apple: "/logo-black.webp",
  },
};

type Article ={
  title:string;
  image:string;
  shortdescription:string;
  description:string;
  slug:string;
  category:string;
  author?:string;
  date:string;
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


  //seo

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: metadata.title,
        url: metadata.metadataBase?.toString() ?? "https://www.fiscalfusion.org/",
      },
      {
        "@type": "WebPage",
        headline: "Home",
        url: metadata.metadataBase?.toString() ?? "https://www.fiscalfusion.org/",
        keywords: [
          "fiscal fusion",
          "global news",
          "breaking news",
          "world headlines",
        ],
        isPartOf: {
          "@type": ["CreativeWork", "Product"],
          name: metadata.title,
          productID: "fiscalfusion.org:standard",
        },
        publisher: {
          "@type": "NewsMediaOrganization",
          name: metadata.publisher,
          logo: {
            "@type": "ImageObject",
            url: "https://www.fiscalfusion.org/logo-black.webp",
          },
          // sameAs: [
          //   "https://x.com/ChroniqNow",
          //   "https://www.instagram.com/chroniqnow/",
          // ],
        },
      },
      {
        "@type": "NewsMediaOrganization",
        name: metadata.publisher,
        url: metadata.metadataBase?.toString() ?? "https://www.fiscalfusion.org/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fiscalfusion.org/logo-black.webp",
        },
      },
    ],
  };


  const sportArticle = mergedArticles.filter(articles => articles.category === "sports")
  const politicsArticle = mergedArticles.filter(articles => articles.category === "politics")
  const businessArticle = mergedArticles.filter(articles => articles.category === "business")
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
    <Navbar articles={mergedArticles}/>
      <div className="lg:mx-40 mx-5 mt-5 md:mt-10 z-0">
        <div className="lg:flex lg:flex-row gap-8">
        <div className="lg:w-2/3 mt-3">
          <FeaturedArticleCard article={mergedArticles[35]}/>
          <div className="md:flex md:flex-row gap-8 mt-5">
            <div className="md:w-1/2  py-4 ">
              <IndexArticle article={politicsArticle[0]}/>
            </div>
            <div className="md:w-1/2">
              <div className=" pt-4">
                <TitleInside article={sportArticle[0]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-5 md:mt-0 flex flex-col">
          <NewsTabs articles={mergedArticles}/>
        </div>
        </div>
        <div className="lg:flex lg:flex-row gap-8">
        <div className="lg:w-1/3">
          {mergedArticles.
           filter(articles => articles.category === "politics").
           slice(2,5).
           map((article,index) => (
            <div key={index} className="border-t border-gray-300  first:border-t-0  gap-4 ">
              <RightImage article={article}/>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3">
          <MinusTop article={businessArticle[10]}/>
          <div  className="lg:top-[-158px] relative">
            <div className="md:flex md:flex-row  ">
              {mergedArticles.
               filter(articles => articles.category === "politics").
               slice(10,12).
               map((article,index) => (
                <div key={index} className="md:w-1/2">
                  <RightImage article={article}/>
                </div>
              ))}
            </div>
            <div className="md:flex md:flex-row ">
              {mergedArticles.
               filter(articles => articles.category === "health").
               slice(10,12).
               map((article,index) => (
                <div key={index} className="md:w-1/2 border-t border-gray-300">
                  <RightImage article={article}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
              
      </div>
      <DontMiss articles={sportArticle}/>
      <Trending articles={science}/>
      <div className=" pt-10 ">
        <ScrollingCards articles={businessArticle}/>
      </div>
      <PopularNews articles={education}/>
      <WorldNews articles={health}/>
      <SubscribeBox/>
      <WorldNews2 articles={lifestyle}/>
      <div className="flex lg:flex-row flex-col p-5 lg:mx-44 gap-6 mt-6">
        <div className="lg:w-2/3">
            <LatestHead/>
            <ThreeNews articles={sports}/>
            <TwoNews articles={science}/>
            <ThreeNews articles={health}/>
            <TwoNews articles={business}/>
        </div>
        <div className="lg:w-1/3 relative lg:ml-8 flex flex-col space-y-10">
          <div className=""><QuoteSlider/></div>
          <SidebarAd/>
        </div>
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}
