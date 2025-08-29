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
              <div className="md:flex md:flex-row align-middle gap-2 ">
                  <h2 className={`text-2xl mb-5 font-bold ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>Latest News</h2>
                  <div className="hidden mt-4 md:mt-1 md:block w-px  h-6 bg-gray-300"></div>
                  <div className="text-gray-600 flex flex-col font-sans text-sm mt-1">
                      <p >The most recent stories, updated throughout the day.</p>  
                      
                  </div>
              </div>
            </div>
        </div>
    )
}