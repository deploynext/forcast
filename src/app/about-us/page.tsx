"use client";

import { Mail, Shield, AlignLeft, RotateCcw, Users, ArrowRight } from "lucide-react";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";



// export const metadata = {
//   title: "About Us • Fiscal Fusion",
//   description:
//     "Learn about Fiscal Fusion: a small, independent newsroom covering finance, policy, markets — clearly, fairly, and without spin.",
//   openGraph: {
//     title: "About Us • Fiscal Fusion",
//     description:
//       "We report clearly, fairly, and independently on finance, policy, and markets.",
//     type: "article",
//     url: "/about",
//     siteName: "Fiscal Fusion",
//   },
// };

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Fiscal Fusion",
    description:
      "Fiscal Fusion is a small, independent newsroom reporting clearly, fairly, and without spin on finance, policy, and markets.",
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
      {/* JSON-LD for rich results */}
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-10">
          <p className="text-sm uppercase tracking-widest text-slate-500">About Us</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
            Independent reporting you can trust.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            We started Fiscal Fusion with a pretty simple idea: news should tell the
            truth—without spin, without hidden agendas, and without the noise that
            usually drowns out what matters.
          </p>
        </div>
      </section>

      {/* Body copy */}
      <section className="mx-auto max-w-5xl px-6 pb-6">
        <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
          <p>
            We’re not a big newsroom with offices in New York or London. There’s no
            giant building with our name on it. Instead, we’re a small team of
            journalists, editors, and researchers who work together online. We’re
            scattered across different cities and time zones, but connected by the
            same goal: <strong>to report clearly, fairly, and independently.</strong>
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <p className="mt-3 text-slate-700">
            Our focus is on the issues that shape economies and lives—finance,
            policy, markets, and the people caught up in them. We try to make sense
            of complicated systems in plain language, and we never chase clicks at
            the expense of accuracy.
          </p>
          <p className="mt-3 text-slate-700">
            When a story breaks, we work quickly—but carefully. Every article goes
            through checks for accuracy and context before it’s published. If we get
            something wrong, we own it and fix it (you’ll find our corrections policy
            right on the site).
          </p>
        </div>
      </section>

      {/* Beliefs / Values */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <h2 className="text-2xl font-semibold">What we believe in</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="mt-1 inline-flex rounded-full border border-slate-200 p-2"><Shield className="h-5 w-5" /></span>
            <div>
              <h3 className="font-medium">Independence</h3>
              <p className="text-slate-700">
                No political party, no corporate influence.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="mt-1 inline-flex rounded-full border border-slate-200 p-2"><AlignLeft className="h-5 w-5" /></span>
            <div>
              <h3 className="font-medium">Clarity</h3>
              <p className="text-slate-700">News should make sense, not confuse you more.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="mt-1 inline-flex rounded-full border border-slate-200 p-2"><RotateCcw className="h-5 w-5" /></span>
            <div>
              <h3 className="font-medium">Accountability</h3>
              <p className="text-slate-700">If we make a mistake, we’ll say so.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="mt-1 inline-flex rounded-full border border-slate-200 p-2"><Users className="h-5 w-5" /></span>
            <div>
              <h3 className="font-medium">Collaboration</h3>
              <p className="text-slate-700">Journalism is better when done together.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Why the name */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Why “Fiscal Fusion”?</h2>
          <p className="mt-3 text-slate-700">
            The name reflects both what we cover—money, markets, policy—and how we
            work. It’s a mix, a “fusion,” of reporters with different backgrounds and
            perspectives, all working toward one thing: helping readers see the full
            picture.
          </p>
        </div>
      </section>

      {/* Looking ahead + Contact */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Looking ahead</h2>
          <p className="mt-3 text-slate-700">
            We know we’re the new kid on the block. Over time, you’ll see more
            coverage, more investigations, and more ways to connect with us. But the
            core of what we do won’t change: independent reporting you can trust.
          </p>

          <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-medium">Say hello</h3>
              <p className="text-slate-700">
                We actually read our mail. Questions, tips, or feedback? Drop us a
                note anytime.
              </p>
            </div>
            <a
              href="mailto:editor@fiscalfusion.org"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow md:self-start"
            >
              <Mail className="h-4 w-4" /> editor@fiscalfusion.org
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <p className="text-xs text-slate-500">
          Corrections policy: We correct significant errors promptly and note the
          change on the article page. For minor updates (typos, clarity, formatting),
          we update without a formal note.
        </p>
      </section>
        </main>
        <ScrollToTop/>
      <Footer/>
    </>
  );
}
