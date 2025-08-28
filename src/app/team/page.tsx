// File: app/team/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  { slug: 'ashley-e-marsh', name: "Ashley E. Marsh",
    role: "Editor",
    image:'/images/Ashley E. Marsh.webp',
    bio: "Ashley has been reporting for over a decade. She loves uncovering the story behind the story and making sure readers can follow even the most complex financial and policy news. When she’s not editing, she’s usually reading or exploring her city’s markets.",
 },
  { slug: 'david-j-hughes', name: "David J. Hughes",
    role: "Editor",
    image:'/images/david-j-hughes.webp',
    bio: "David is our data and numbers expert. He spots patterns others might miss and keeps our reporting grounded in facts. He’s the one who insists on double-checking sources, no matter how small the detail.",
 },
  { slug: 'judith-a-beach', name: "Judith A. Beach",
    role: "Reporter",
    image:'/images/judith-a-beach.webp',
    bio: "Judith writes about business and markets, focusing on how decisions and trends affect real people. She enjoys connecting the dots and turning complicated topics into stories readers can follow.",
 },
  { slug: 'robert-l-dixon', name: "Robert L. Dixon",
    role: "Reporter",
    image:'/images/robert-l-dixon.webp',
    bio: "Robert digs deeper than most headlines go. He’s our investigative reporter, always asking questions that uncover context and nuance. His goal is simple: help readers understand the full picture.",
 },
  { slug: 'xavier-m-thomas',name: "Xavier M. Thomas",
    role: "Reporter",
    image:'/images/xavier-m-thomas.webp',
    bio: "Xavier tracks global economic trends and finds the human side of numbers. He’s curious, thoughtful, and always looking at what big developments mean for everyday people.",
 },
];

export default function TeamPage() {
  return (
    <>
      <Navbar articles={[]} />
      <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Page Title */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold">Fiscal Fusion</span>, we’re a small group of journalists working together across different cities and time zones. What we lack in size, we make up for in curiosity, dedication, and a shared goal: reporting news that matters, with clarity and honesty.
        </p>
      </header>

      {/* Editors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Editors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.slice(0,2).map((editor) => (
            <div key={editor.name} className="rounded-2xl shadow-md">
              <div className="p-6">
                <Image
                src={editor.image}
                alt={editor.name}
                width={100}
                height={100}
                priority
                className='my-2'
                />
                <h3 className="text-xl font-semibold">{editor.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{editor.role}</p>
                <p className="text-gray-700 mb-4">{editor.bio}</p>
                <Link href={`/team/${editor.slug}`} className='text-gray-600 font-sans font-semibold hover:text-gray-800'>Read Full Bio</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reporters */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Reporters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.slice(2).map((reporter) => (
            <div key={reporter.name} className="rounded-2xl shadow-md">
              <div className="p-6">
                <Image
                src={reporter.image}
                alt={reporter.name}
                width={100}
                height={100}
                priority
                className='my-2'
                />
                <h3 className="text-xl font-semibold">{reporter.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{reporter.role}</p>
                <p className="text-gray-700 mb-4">{reporter.bio}</p>
                <Link href={`/team/${reporter.slug}`} className='text-gray-600 font-sans font-semibold hover:text-gray-800'>Read Full Bio</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Note */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Fiscal Fusion Staff</h2>
        <p className="text-gray-700 max-w-3xl">
          Some stories are a true team effort. Maybe several of our reporters worked on it, or we included contributions from outside experts. When that happens, we credit the piece to <span className="font-semibold">“Fiscal Fusion Staff.”</span> It’s our way of showing that the story has been carefully reviewed, checked for accuracy, and reflects the combined work of our newsroom.
        </p>
      </section>
    </main>
      <Footer />
    </>
  );
}
