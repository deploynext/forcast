import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



const teamMembers = {
  'ashley-e-marsh': { name: 'Ashley E. Marsh', bio: 'Senior Editor with 10 years of experience.' },
  'david-j-hughes': { name: 'David J. Hughes', bio: 'Business Analyst focusing on finance and markets.' },
  'judith-a-beach': { name: 'Judith A. Beach', bio: 'Health & Science journalist passionate about data.' },
  'robert-l-dixon': { name: 'Robert L. Dixon', bio: 'Technology writer covering AI and innovation.' },
  'xavier-m-thomas': { name: 'Xavier M. Thomas', bio: 'Political reporter with a deep policy focus.' },
};



export async function generateStaticParams() {
  return Object.keys(teamMembers).map((slug) => ({ slug }));
}

export default async function TeamMemberPage({ params }: { params:Promise< { slug: string }> }) {
  const member = (teamMembers as Record<string, { name: string; bio: string }>)[(await params).slug];
  if (!member) return notFound();
  return (
    <>
      <Navbar articles={[]} />
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold">{member.name}</h1>
        <p className="mt-4 text-lg text-gray-700">{member.bio}</p>
      </div>
      <Footer/>
    </>
  );
}
