import Image from "next/image";




export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date?: string;
  author?: string;
};

interface DetailsProps {
  article: Article;
}

export default function Details({ article }: DetailsProps) {

function splitIntoParagraphs(text: string, sentencesPerParagraph = 3) {
  // Split sentences safely (preserves things like "U.S." and emails)
  const sentences = text.match(/[^.!?]+[.!?](?=\s|$)/g) || [];

  // Group every `sentencesPerParagraph` into a paragraph
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    const group = sentences.slice(i, i + sentencesPerParagraph).join(' ').trim();
    paragraphs.push(group);
  }

  return paragraphs;
}


  return (
    <div className="relative md:pe-4 font-sans">
      <div className=" ">
        <div>
          <Image
            src={article.image}
            alt={article.title}
            width={934}
            height={525}
            className="w-full h-auto object-cover  max-h-[525px] rounded-xl"
            priority
          />
        </div>
        <div className="mt-5 mb-5 ">
          <p className="block  text-lg  text-gray-500 ">{article.shortdescription}</p>
        </div>

       <div className="text-lg text-gray-500 leading-relaxed w-full">
          {splitIntoParagraphs(article.description, 3).map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}
