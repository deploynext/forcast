"use client"
import { LucideSend } from "lucide-react"; 
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SubscribeBox() {

    const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    

  

  return (
    <div className="md:m-0 ">
    <div className={`relative my-10 border rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6 lg:mx-44  ${ theme === "dark" ? "text-gray-50 bg-gray-950":"text-gray-950 bg-gray-50"}`}>
      
      {/* Left Section */}
      <div className="md:flex items-start gap-4">
        <LucideSend className="w-16 h-16 text-gray-400 -scale-x-100" strokeWidth={1} />
        <div>
          <h3 className="text-red-600 font-medium text-xl mb-1">Subscribe</h3>
          <h2 className="text-2xl font-bold leading-snug ">
            Keep Up to Date with the Most <br /> Important News
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex font-sans flex-col w-full md:w-1/2">
        <div className="w-full max-w-md mx-auto">
      {/* Input + Button */}
      <form className="flex w-full">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-grow border border-gray-300 px-4 py-3 text-sm rounded-l-md focus:outline-none"
        />
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-r-md font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
        <p className="text-xs text-gray-500 mt-2">
          By pressing the Subscribe button, you confirm that you have read and are
          agreeing to our <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use</span>
        </p>
      </div>

      {/* Dotted Background Decoration */}
      <div className="absolute -bottom-6 left-0 w-full h-6 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] [background-size:20px_20px]"></div>
    </div>
    </div>
  );
}
