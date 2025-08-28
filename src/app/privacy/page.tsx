import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
    <Navbar articles={[]}/>
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-8">
        Your trust matters to us. At <strong>Fiscal Fusion</strong>, we’re not
        in the business of collecting or selling personal data. We run a news
        site, not an ad-tech company. This policy explains, in plain language,
        what information we do collect, how we use it, and how you stay in
        control.
      </p>

      {/* --- Info Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Information we collect</h2>
        <p>
          When you visit our site, a few basic details are automatically shared
          with us through standard web tools—things like your browser type,
          device, and general location. This helps us understand how people are
          reading our stories and where we can improve the site.
        </p>
        <p className="mt-2">
          If you choose to sign up for newsletters or contact us directly,
          we’ll also have the information you share—like your name, email
          address, or the contents of your message. That’s it. We don’t ask for
          anything we don’t need.
        </p>
      </section>

      {/* --- Usage Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How we use it</h2>
        <p>The information we collect is used only to:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Improve site performance and reader experience</li>
          <li>Respond to questions, tips, or corrections you send us</li>
          <li>Send newsletters or updates you’ve asked to receive</li>
        </ul>
        <p className="mt-2">
          We never sell your information to third parties. <strong>Period.</strong>
        </p>
      </section>

      {/* --- Cookies Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Cookies and analytics</h2>
        <p>
          Like most websites, we use cookies and analytics tools to see how the
          site is being used. This helps us figure out what stories people are
          reading, how long they’re staying, and what we can do better. You can
          control cookies through your browser settings at any time.
        </p>
      </section>

      {/* --- Third Party Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Third-party services</h2>
        <p>
          Some of our content may include links to outside sites or embedded
          media (like videos, charts, or social posts). If you click through to
          another site, their privacy practices apply—not ours. We only link to
          sources we trust, but we encourage you to read their policies too.
        </p>
      </section>

      {/* --- Protection Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Protecting your information</h2>
        <p>
          We take reasonable steps to keep any information you share with us
          secure. While no system is perfect, we use industry-standard measures
          to protect against unauthorized access.
        </p>
      </section>

      {/* --- Choices Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Your choices</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            You can unsubscribe from newsletters at any time (there’s a link at
            the bottom of every email).
          </li>
          <li>You can block or clear cookies in your browser.</li>
          <li>
            You can email us to ask what information we have about you, or to
            request that we delete it.
          </li>
        </ul>
        <p className="mt-4">
          📧 Contact us at{" "}
          <Link
            href="mailto:privacy@fiscalfusion.org"
            className="text-blue-600 underline"
          >
            privacy@fiscalfusion.org
          </Link>{" "}
          for any privacy-related questions.
        </p>
      </section>

      {/* --- Updates Section --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Updates to this policy</h2>
        <p>
          As we grow, our privacy practices may change. If that happens, we’ll
          update this page and note the date of the change. The latest version
          will always be the one posted here.
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-10">
        <strong>Last updated:</strong> August 27, 2025
      </p>
    </main>
    <Footer/>
    </>
  );
}
