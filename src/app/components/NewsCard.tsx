"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewsCard() {
  return (
    <div className="">
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md ">
      {/* Background Image */}
      <Image
        src="/images/indexad.webp" 
        alt="News"
        width={400}
        height={700}
        priority
        className="object-cover w-full md:h-[1320px] lg:h-[640px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Category Tag */}
      <span className="absolute top-4 left-4  t px-3 py-1  bg-red-600 h-[35px] flex items-center justify-center">
        <Image
        src="/logo-black.webp"
        alt="logo"
        width={150}
        height={25}
        priority
        />
      </span>

      {/* Content */}
      <div className="absolute bottom-6 left-4 right-4">
        <h2 className="text-white text-lg font-semibold mb-3 leading-snug">
          University of South Florida Coach Complications work During Surgery
        </h2>
        <Link
          title="Explore Now"
          href="#"
          className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
        >
          Explore Now
        </Link>
      </div>
      </div>
    </div>
  );
}
