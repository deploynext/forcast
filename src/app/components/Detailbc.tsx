"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export  default function Detailbc({title}:{title:string}){
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return(
      <div className={`w-full  py-4 lg:px-20 px-2 font-sans ${ theme === "dark" ? "text-gray-50 bg-gray-900":"text-gray-950 bg-[#fffbfc]"}`}>
         <nav className="mb-4  text-[18px]" aria-label="breadcrumb">
        <ol className="flex flex-col md:flex md:flex-row space-x-2 ">
          <li>
            <Link href="/" className="hover:text-gray-700 " title="Home">
              Home
              <span className="mx-2">›</span>
            </Link>
          </li>
          <li className=" font-medium  truncate md:truncate-none">{title}</li>
        </ol>
      </nav> 
      </div>
  )
}