import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsPage() {
  return (
    <>
    <Navbar articles={[]}/>
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-lg mb-8">
        Welcome to <strong>Fiscal Fusion</strong>. By using our website, you
        agree to these terms, so please read them carefully. We’ve tried to keep
        this clear and simple—no unnecessary legal jargon—because we believe
        readers should actually understand what they’re agreeing to.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Using our site</h2>
        <p>
          You’re free to read, share, and discuss our content. You may link to
          our articles or reference our reporting, but please don’t copy,
          reproduce, or redistribute our content for commercial purposes without
          permission.
        </p>
        <p className="mt-2">
          We work hard on every story, graphic, and photo, and all of it is
          protected by copyright. Respecting that copyright helps us continue
          producing independent journalism.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Accuracy and reliability</h2>
        <p>
          We work hard to get the facts right, but news moves fast and sometimes
          details change after a story is published. If something updates, we’ll
          do our best to reflect it. Please use our reporting as one source
          among many, and double-check anything important before making
          decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Comments and user contributions
        </h2>
        <p>
          If you comment on articles or submit tips or other content, you agree
          that we can use your submissions for editorial purposes. Please don’t
          post anything illegal, defamatory, or harmful—our editors reserve the
          right to remove content that violates these rules.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Third-party links</h2>
        <p>
          Our site may link to external sites. We’re not responsible for their
          content, privacy practices, or availability. Clicking links is at your
          own discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Limitation of liability</h2>
        <p>
          While we make every effort to provide accurate information,{" "}
          <strong>
            Fiscal Fusion is not liable for any losses, damages, or consequences
            arising from the use of this site or its content
          </strong>
          . We report news to inform, not to advise on personal or financial
          decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Changes to these terms</h2>
        <p>
          We may update these terms from time to time. When we do, the updated
          version will be posted here with a new “last updated” date. Continuing
          to use the site after changes means you accept the new terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>
          If you have questions about these terms, email us at{" "}
          <a
            href="mailto:editor@fiscalfusion.org"
            className="text-blue-600 underline"
          >
            editor@fiscalfusion.org
          </a>
          . We’ll get back to you promptly.
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
