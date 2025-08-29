import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, Mail} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';



const teamMembers = {
  'ashley-e-marsh': 
  { 
    name: 'Ashley E. Marsh', 
    bio: 'Ashley has been reporting for over a decade, following finance, markets, and policy stories wherever they lead. She loves diving into the details that others might miss and turning them into stories people can actually understand. At Fiscal Fusion, Ashley wears two hats: she writes, and she edits. She’s the one making sure the facts are straight, the quotes make sense, and the story actually tells what’s happening. Her colleagues know her for her sharp eye, curiosity, and endless questions that make every article stronger.When she’s not working, Ashley is probably reading, wandering through local markets, or tracking the latest trends in business and economics.' ,
    email: " ashley@fiscalfusion.org",
    image:'/images/Ashley E. Marsh.webp'
    
  },
  'david-j-hughes': 
  { 
    name: 'David J. Hughes', 
    bio:`David is our go-to person for numbers, data, and patterns. He loves digging into charts, reports, and spreadsheets to make sense of what’s really happening behind the headlines. At Fiscal Fusion, he not only reports but also helps the team make sure the stories are grounded in facts.

        Colleagues know David for his curiosity and persistence. He asks the questions that uncover the bigger picture and isn’t satisfied until the story adds up.

        When he’s off the clock, David enjoys reading, following market trends, and tweeting thoughts about finance and the economy (you can find him on Twitter).`, 
    email:'david@fiscalfusion.org',
    twitter:' @DavidJFusion',
    image:'/images/david-j-hughes.webp'
  },
  'judith-a-beach': 
  { 
    name: 'Judith A. Beach', 
    bio: `Judith covers markets, business, and the people behind the numbers. She enjoys taking complicated topics and turning them into stories that make sense to readers without losing the nuance. Her reporting often focuses on how financial and economic decisions affect everyday life.

At Fiscal Fusion, Judith is known for her curiosity and persistence. She digs into the details, asks tough questions, and isn’t afraid to challenge assumptions to get the full story.

Outside of reporting, Judith loves reading about emerging trends, exploring new ideas, and sharing insights on Twitter.`,
    email:' judith@fiscalfusion.org',
    twitter:'@JudithBFusion',
    image:'/images/judith-a-beach.webp'
  },
  'robert-l-dixon': 
  { 
    name: 'Robert L. Dixon', 
    bio: `Robert spends his days chasing the stories that most people miss. Some lead him into policy documents, others into market reports, and sometimes straight into interviews with people affected by the news. He likes figuring out how all the pieces fit together.

At **Fiscal Fusion**, Robert is the one who asks the questions no one else thought of. He follows leads wherever they go, checks the facts carefully, and sometimes gets lost in details that end up changing the story for the better. His teammates rely on him to make sure nothing is overlooked.

When he’s not reporting, Robert can be found reading about global events, listening to podcasts, or scribbling ideas in a notebook. He occasionally tweets about economics or stories that caught his eye. For Robert, journalism is about people, real stories, and making sure readers actually understand what’s happening around them.`,
    email:' robert@fiscalfusion.org',
    twitter:'@RobertLFusion',
    image:'/images/robert-l-dixon.webp'
  },
  'xavier-m-thomas': 
  { 
    name: 'Xavier M. Thomas',
    bio: `Xavier looks at the big economic picture and tries to show how it touches real people’s lives. He enjoys noticing patterns that others might miss and turning them into stories that make sense without oversimplifying.

At **Fiscal Fusion**, Xavier digs into reports, asks questions, and sometimes changes direction in the middle of a story if it makes it clearer. He focuses on showing the human side of finance—how numbers and policies actually matter to communities and individuals.

Outside the office, Xavier enjoys exploring new cities, reading about economics, and sharing thoughts on Twitter. He believes good reporting helps people understand the world, even when it feels complicated.`,
    email: "xavier@fiscalfusion.org",
    twitter: "https://twitter.com/XavierMFusion" ,
    image:'/images/xavier-m-thomas.webp'
  },
};



export async function generateStaticParams() {
  return Object.keys(teamMembers).map((slug) => ({ slug }));
}

export default async function TeamMemberPage({ params }: { params:Promise< { slug: string }> }) {
  const member = (teamMembers as Record<string, { name: string; bio: string; twitter?:string; email?:string; image:string; }>)[(await params).slug];
  if (!member) return notFound();
  return (
    <>
      <Navbar articles={[]} />
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
          <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
          <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-10">
          <p className="text-sm uppercase tracking-widest text-slate-500">Author</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
          <div className='w-28 h-28 my-8 '>
            <Image
            src={member.image}
            alt={member.name}
            width={100}
            height={100}
            quality={60}
            className='object-cover'
            />
          </div>
          {member.name}
          </h1>
          </div>
          
          </section>


          {/* Bio */}
          <section className="mx-auto max-w-5xl px-6 pb-6">
          <div className="prose prose-slate max-w-none prose-p:leading-relaxed whitespace-pre-line">
          {member.bio}
          </div>
          </section>


          {/* Contact */}
          <section className="mx-auto max-w-5xl px-6 py-6">
          <h2 className="text-2xl font-semibold">Connect with {member.name.split(" ")[0]}</h2>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-6">
          <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
          >
          <Mail className="h-4 w-4" /> {member.email}
          <ArrowRight className="h-4 w-4" />
          </a>
          <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
          >
          <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" /> @{member.name.split(" ")[0]} on Twitter
          <ArrowRight className="h-4 w-4" />
          </a>
          </div>
          </section>
        </main>
      <Footer/>
    </>
  );
}
