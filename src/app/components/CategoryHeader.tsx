import Link from "next/link";

export default function CategoryHeader( { category } :{category : string}) {
  return (
    <section className=" py-24  overflow-hidden relative w-full "
    style={{
    backgroundImage: `url("/images/breadcrumb-mask.webp")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    
  }}
    >
      <div className="max-w-7xl mx-auto px-6 items-center justify-items-center">
        {/* Breadcrumb */}
        <nav className="mb-4 text-gray-600 text-sm" aria-label="breadcrumb font-sans">
          <ol className="inline-flex items-center space-x-2 justify-center">
            <li>
              <Link href="/" className="hover:text-gray-700 font-sans">
              Home
              </Link>
            </li>
            <li>
              <span className="mx-2 text-xl font-bold">›</span>
            </li>
            <li className="text-gray-800 font-medium capitalize font-sans">{category}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Category: <span className="font-extrabold capitalize">{category}</span>
        </h1>
      </div>
    </section>
  );
}
