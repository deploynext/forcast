"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function CategoryHeader( { category } :{category : string}) {
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section className={` py-5  overflow-hidden relative w-full  ${theme === "dark" ? "bg-black/ text-gray-50":'breadcrumb-bg text-gray-800'}`}
    
    >
      <div className="max-w-7xl mx-auto px-6 items-center  justify-items-center">
        {/* Breadcrumb */}
        <nav className="mb-4  text-sm" aria-label="breadcrumb font-sans">
          <ol className="inline-flex items-center space-x-2 justify-center">
            <li>
              <Link href="/" className="hover:text-gray-700 font-sans" title="Home">
              Home
              </Link>
            </li>
            <li>
              <span className="mx-2 text-xl font-bold">›</span>
            </li>
            <li className=" font-medium capitalize font-sans">{category}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl  font-bold ">
          Category: <span className="font-extrabold capitalize">{category}</span>
        </h1>
      </div>
    </section>
  );
}
