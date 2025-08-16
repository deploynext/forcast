"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewsCard() {
  return (
    <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-md">
      {/* Background Image */}
      <Image
        src="/images/indexad.webp" 
        alt="News"
        width={400}
        height={500}
        className="object-cover w-full h-96"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Category Tag */}
      <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
        Forcast News
      </span>

      {/* Content */}
      <div className="absolute bottom-6 left-4 right-4">
        <h2 className="text-white text-lg font-semibold mb-3 leading-snug">
          University of South Florida Coach Complications work During Surgery
        </h2>
        <Link
          href="#"
          className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}
