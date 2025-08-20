"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function NewsletterForm() {
  const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      className={`empath__sidebar-item bg-cover bg-center  overflow-hidden border-2 border-gray-200 rounded-xl  ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}
      style={{
        backgroundImage:
          "url('/images/Newsletter.webp')",
      }}
    >
      <div className="px-16 py-32 text-center">
        <h2 className="text-3xl  font-bold mb-2">
          Subscribe To Our Newsletter
        </h2>
        <p className="mb-4 text-sm opacity-90 font-sans">
          No spam, notifications only about new products, updates.
        </p>

        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="px-4 py-2 rounded text-black bg-white border border-gray-200 "
          />
          <button
            type="submit"
            className="bg-red-600 font-sans hover:bg-black text-white font-semibold px-4 py-2 rounded "
          >
            Subscribe
          </button>

          
        </form>
      </div>
    </div>
  );
}
