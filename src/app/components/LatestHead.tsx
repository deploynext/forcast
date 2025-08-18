"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LatestHead () {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <div>
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5 ">
              <div className="md:flex md:flex-row align-middle gap-4 ">
                  <h1 className={`text-2xl font-bold ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>Latest News</h1>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-500 flex flex-col font-sans text-sm">
                      <p >Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam.</p>  
                      <p>Risus tellus eget ultrices pretium nisi amet facilisis.</p>
                  </div>
              </div>
            </div>
        </div>
    )
}