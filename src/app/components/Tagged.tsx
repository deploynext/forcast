"use client"
import SocialIcons from "./SocialIcons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Tagged () {
    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    return(
        <div className="px-9">
            <div className="w-full md:flex md:flex-row border justify-between border-dashed px-7 py-8 mt-12 border-gray-300">
                <div className="flex flex-row mb-2">
                    <strong className={`text-xl ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>Tagged : </strong><p className="text-gray-600 ml-2 text-xl font-sans ">Week</p>
                </div>
                <SocialIcons/>
            </div>
        </div>
    )
}