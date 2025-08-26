"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"
import React, { useState } from "react"
import IndexArticle5 from "./IndexArticle5"

interface Article {
  category: string
  title: string
  shortdescription?: string
  description?: string
  slug: string
  date: string
  image: string
  author?:string;
}

interface SearchProps {
  isOpen: boolean
  onClose: () => void
  articles:Article[];
}




const SearchModel: React.FC<SearchProps> = ({ isOpen, onClose ,articles }) => {
   const [query, setQuery] = useState("");

    const filteredArticles = query
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      )
    : articles.slice(0, 4);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 bg-white z-50 overflow-y-auto p-8"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 45 }}
              className="text-2xl p-2 rounded-full hover:bg-gray-200 transition-transform duration-400 ease-in-out"
            >
              <X />
            </motion.button>
          </div>

          {/* Search Input */}
          <div className="mt-4 md:mx-56 flex justify-center flex-col gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800"/>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full pl-10   p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              
            </div>
            <div className="text-2xl text-gray-800 font-semibold">Some Populer Post</div>

            <div className="md:grid-cols-4 md:grid gap-6  ">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <div key={idx} >
                 
                  <IndexArticle5 article={article}/>
                  
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
          </div>

          
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchModel
