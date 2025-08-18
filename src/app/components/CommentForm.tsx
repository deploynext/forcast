"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CommentForm() {
const {theme} = useTheme()

    const [mounted,setMounted] = useState(false)
    
      useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <form className={`mt-10 p-4 font-sans ${ theme === "dark" ? "text-gray-50":"text-gray-950"}`}>
      <h2 className="text-2xl font-bold mb-2 font-serif">Leave a comment</h2>
      <p className="text-sm text-gray-600 mb-4">
        Your email address will not be published. Required fields are marked <span className="text-red-600">*</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Website"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-start mb-4">
        <input
          type="checkbox"
          id="saveInfo"
          className="mt-1 mr-2"
        />
        <label htmlFor="saveInfo" className="text-sm text-gray-700">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Comment"
          rows={6}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded"
      >
        POST COMMENT
      </button>
    </form>
  );
}
