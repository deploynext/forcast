"use client";
import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    description:
      "Get in touch with Fiscal Fusion: editor@fiscalfusion.org, tips@fiscalfusion.org, corrections@fiscalfusion.org",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Fiscal Fusion",
      url: "https://www.fiscalfusion.org",
    },
    inLanguage: "en",
  };

  return (
    <>
    <Navbar articles={[]}/>
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* JSON-LD for SEO */}
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-10">
          <p className="text-sm uppercase tracking-widest text-slate-500">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
            We’d love to hear from you.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Whether it’s feedback on a story, a tip we should look into, or just a
            quick hello—don’t hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Email Contacts */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <h2 className="text-2xl font-semibold">📧 Email</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium">General inquiries</p>
            <Link href="mailto:editor@fiscalfusion.org" className="text-blue-600 hover:underline">
              editor@fiscalfusion.org
            </Link>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium">News tips & story leads</p>
            <Link href="mailto:tips@fiscalfusion.org" className="text-blue-600 hover:underline">
              tips@fiscalfusion.org
            </Link>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium">Corrections</p>
            <Link href="mailto:corrections@fiscalfusion.org" className="text-blue-600 hover:underline">
              corrections@fiscalfusion.org
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-slate-600">
          Every message is read by a real person on our team. If it’s sensitive, we’ll
          treat it that way.
        </p>
      </section>

      {/* Social Media */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <h2 className="text-2xl font-semibold">Social Media</h2>
        <p className="mt-3 text-slate-700">
          Stay connected with us, share stories, and join the conversation:
        </p>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-6">
          <Link
            href="https://twitter.com/FiscalFusion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" /> @FiscalFusion
          </Link>
          <Link
            href="https://instagram.com/FiscalFusion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" /> Fiscal Fusion
          </Link>
          <Link
            href="https://linkedin.com/company/fiscalfusion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:shadow"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" /> Fiscal Fusion
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          (We’ll be adding more as the community grows.)
        </p>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <h2 className="text-2xl font-semibold">📝 Tips & Submissions</h2>
        <p className="mt-3 text-slate-700">
          If you’ve got information the public should know, send us a note. You don’t
          have to write a full story—just tell us what’s going on. If you need to
          remain anonymous, say so, and we’ll respect it.
        </p>
      </section>

      {/* Corrections */}
      <section className="mx-auto max-w-5xl px-6 py-6 pb-16">
        <h2 className="text-2xl font-semibold">💬 Corrections</h2>
        <p className="mt-3 text-slate-700">
          We hold ourselves accountable. If you spot an error in one of our stories,
          let us know at <a href="mailto:corrections@fiscalfusion.org" className="text-blue-600 hover:underline">corrections@fiscalfusion.org</a> and we’ll review it promptly.
          Transparency matters here.
        </p>
      </section>
    </main>
    <Footer/>
    </>
  );
}
