"use client"
import Link from "next/link";

import { Search, Menu, Moon, Calendar, Sun, X } from "lucide-react";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import RightImage3 from "./RightImage3";
import { AnimatePresence, motion } from "framer-motion";
import WithNumber from "./WithNumber";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import SearchModel from "./SearchModel";
import Image from "next/image";


 
interface Article {
  title:string;
  slug:string;
  image:string;
  date:string;
  author?:string;
  category:string;
}
const Navbar = ({articles}:{articles:Article[]}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme,setTheme} = useTheme()
  const [mounted,setMounted] = useState(true)
  const [menuOpen1, setMenuOpen1] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

const [searchOpen, setSearchOpen] = useState(false)
  // which label is open
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  // where to place the mega menu (under the nav links row)
  const [menuTop, setMenuTop] = useState(0);

  // we measure this row to know where the bottom edge is
  const rowRef = useRef<HTMLDivElement | null>(null);

  // small close delay so moving from trigger -> menu doesn't flicker
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateTop = () => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    // put menu right under the row, account for scroll
    setMenuTop(rect.bottom + window.scrollY);
  };

  useEffect(() => {
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenLabel(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenLabel(null), 120);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div>
     <nav className="hidden md:block w-full   relative z-[100]">
      {/* Top Bar */}
      <div className={`flex items-center justify-between px-6 py-5 text-sm font-sans border-b border-gray-300  ${theme === "dark" ? "bg-gray-900 text-gray-50" :"bg-gray-50 text-gray-900"}`} >
        {/* Quick Links */}
        <div className="flex gap-2 flex-wrap">
          <span>Quick Links:</span>
          <Link href="/about-us" title="contact info" className={`${theme === "dark" ? "text-gray-50":"text-gray-900"}  font-semibold hover:underline`}>
            About Us
          </Link>
          <span>-</span>
          <Link href="/contact-us" title="contact info" className={`${theme === "dark" ? "text-gray-50":"text-gray-900"}  font-semibold hover:underline`}>
            Contact Us
          </Link>
          
        </div>

        {/* Logo */}
        <div className="flex w-[300px] h-[50px] items-center px-8 ml-16 overflow-hidden">
          <Link title="logo" href="/" className="font-bold tracking-wide md:mx-0">
          <h1 title="fiscal fusion">
            {/* Show black logo in light mode */}
            <Image
              src="/logo-black.webp"
              alt="logo"
              width={230}
              height={36}
              className={`scale-125 ${theme === "dark" ? "hidden" : "block"}`}
            />

            {/* Show white logo in dark mode */}
            <Image
              src="/logo-white.webp"
              alt="logo"
              width={230}
              height={36}
              className={`scale-125 ${theme === "dark" ? "block" : "hidden"}`}
            />
            </h1>
          </Link>
          
        </div>

        {/* Date + Social */}
        <div className="flex items-center gap-4 ">
          <span className="hidden sm:inline">
            <span className="mr-2 inline-flex items-center gap-1 me-5">
              <Calendar className="w-[16px]" aria-label="date" /> Wednesday, 30 July 2025
            </span>
          </span>
          <div className="hidden md:block h-5 w-px bg-gray-500" />
          <div className="flex items-center gap-3  ml-3">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between px-6 py-4   ${theme === "dark" ? "bg-gray-900 text-gray-50" :"bg-gray-50 text-gray-900"}`}>
        {/* Left - Menu + Search */}
        <div className="flex items-center ">
          <button aria-label="menu" className="mr-4 p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={22} />
          </button>
          <button className="p-2" aria-label="search"
          onClick={() => setSearchOpen(true)}
          >
            <Search size={22}  />
            
          </button>
          <SearchModel articles={articles} isOpen={searchOpen} onClose={() => setSearchOpen(false)}/>
        </div>
     <div className=" justify-items-center  w-full overflow-x-visible overflow-y-visible">
        <div
          ref={rowRef}
          className="flex flex-nowrap justify-start gap-3 sm:gap-4 md:gap-8 text-[.9rem] sm:text-lg px-1"
        >
          {/* Home (no dropdown) */}
          <div
            className="relative flex-shrink-0"
            onMouseEnter={() => openMenu("")}
            onMouseLeave={scheduleClose}
          >
            <Link href="/" title="home" className=" block py-2">
              Home
            </Link>
          </div>

          {[
            "Politics",
            "Business",
            "Sports",
            "Health",
            "Education",
            "Science",
            "Technology",
            "Lifestyle",
            "Entertainment",
          ].map((label) => (
            <div
              key={label}
              className="relative flex-shrink-0"
              onMouseEnter={() => openMenu(label)}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={`/${label.toLowerCase()}`}
                title={label}
                className="font-semibold  block py-2"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      
      {pathname === "/" &&(
        <div>
          {mounted && openLabel && typeof document !== "undefined" &&
        createPortal(
        <AnimatePresence mode="wait">
        <motion.div
           
          initial={{ opacity: 0, y: +40 }}
          animate={{ opacity: 1, y: 0 }}
          
          
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onMouseEnter={() => {
              if (closeTimer.current) {
                window.clearTimeout(closeTimer.current);
                closeTimer.current = null;
              }
            }}
            onMouseLeave={() => setOpenLabel(null)}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: menuTop, 
              zIndex: 199,
            }}
           >
            <div
              className={`${theme === "dark" ? "bg-gray-800 text-gray-50" : "bg-white text-gray-900"} shadow-lg mx-28 mt-4  border-gray-200`}
            >
              {/* Inner content row; full width, with padding */}
              <div className=" mx-6 py-6">
                <div className=" ">
                  {/* Arrange items horizontally like a mega menu */}
                  <div className="flex flex-row gap-6">
                    {articles
                      .filter(
                        (a) =>
                          openLabel &&
                          a.category.toLowerCase() === openLabel.toLowerCase()
                      )
                      .slice(0, 3) /* show more if you like */
                      .map((article, index) => (
                        <WithNumber
                          key={`${article.slug}-${index}`}
                          article={article}
                          index={index}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>,
          document.body
        )}
        </div>)}
        {/* Right - User / Theme / Buy Now */}
        <div className="flex items-center gap-4 mt-3 md:mt-0 min-w-fit  font-sans">
          {/* <button className="p-2">
            <User2 size={22} />
          </button> */}
          <div className="hidden md:block h-5 w-px bg-gray-300" />
         {mounted && (
                <button aria-label="dark mode toggle"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2"
                >
                  {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                </button>
              )}
        </div>
      </div>
    </nav>
      </div>

      {/* Mobile Navbar (unchanged) */}
      <div className={`border-b border-gray-200 font-sans block md:hidden bg-gray-50  ${theme === "dark" ? "bg-gray-800 text-gray-50" :"bg-gray-50 text-gray-900"}`}>
        <div className="flex items-center space-x-4 px-3 py-3 w-full ">
          <div className="flex w-3/4 text-sm">
            <Calendar className="w-[12px] me-2 " />
            Wednesday, 30 July 2025
          </div>
          <div className="h-6 w-px bg-gray-300" />
          <div className="flex items-center space-x-3  pe-2 w-1/3">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 text-lg">
          <div className="w-[150px] h-[24px] overflow-hidden flex items-center justify-center">
            <Link href="/" title="logo">
            <Image
            src="/logo-black.webp"
            alt="logo"
            width={150}
            height={24}
            className={`object-contain ${theme === "dark" ? "hidden":"block"}`}
            />
            <Image
            src="/logo-white.webp"
            alt="logo"
            width={150}
            height={24}
            className={`object-contain ${theme === "dark" ? "block":"hidden"}`}
            />
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            
            <div className="h-6 w-px bg-gray-300" />
            {mounted && (
                <button   aria-label="dark mode toggle"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2"
                >
                  {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                </button>
              )}
              <button onClick={() => setMenuOpen1(!menuOpen1)}><Menu className="cursor-pointer" size={24} /></button>
             
          </div>
        </div>
      </div>
      {menuOpen && (
        <AnimatePresence mode="wait">
        <motion.div
           
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0,x:-40 }}
          
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 z-360"
        >
          <div
            className="h-screen  w-[400px] bg-black text-white border-2 border-gray-800 shadow  overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="w-full flex justify-between items-center px-10 py-6 border-b border-gray-700  ">
              <Link href="/" title="logo" className="text-gray-50 text-2xl">
                 <Image
                  src="/logo-white.webp"
                  alt="logo"
                  width={230}
                  height={36}
                  className={`scale-125${theme === "dark" ? "block":"hidden"}`}
                  />
              </Link>
              <button onClick={() => setMenuOpen(false)} className="text-gray-50 hover:text-gray-600 font-sans cursor-pointer">
                <X/>
              </button>
            </div>            
            
            <div className=" py-20 px-5">
              {articles.slice(5,9).map((artcle,index)=>(
                <div key={index} className="px-10">
                  <RightImage3 article={artcle}/>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pb-10 px-8 ">
              <div className="block px-4 py-5 text-2xl"><h4>Contact Us</h4></div>
              <div className="flex items-center gap-6 py-5 ml-3">
                <FontAwesomeIcon className="cursor-pointer text-xl" icon={faFacebookF} />
                <FontAwesomeIcon className="cursor-pointer text-xl" icon={faXTwitter} />
                <FontAwesomeIcon className="cursor-pointer text-xl" icon={faInstagram} />
                <FontAwesomeIcon className="cursor-pointer text-xl" icon={faYoutube} />
                <FontAwesomeIcon className="cursor-pointer text-xl" icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
        )}
      {menuOpen1 && (
          <div
            className="absolute top-0 right-0 w-60 min-h-screen bg-white border shadow z-50 overflow-y-auto"
            style={{
              maxHeight: '500px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="w-full items-center   text-gray-700 hover:bg-gray-100 hover:text-red-600">
              
              <button onClick={() => setMenuOpen1(false)} className="text-gray-50 px-3 py-2 bg-red-600 font-sans">
                <X/>
              </button>
            </div>            
            <div className=" pt-5 mt-5">
              <Link href="/" title="logo" className="text-gray-700 font-bold ">
                 <Image
                  src="/logo.webp"
                  alt="logo"
                  width={230}
                  height={36}
                  className={`scale-125${theme === "dark" ? "block":"hidden"}`}
                  />
              </Link>
            </div>
            <div className="mt-8">
              <Link onClick={() => setMenuOpen1(false)} title="poltics" href="/politics" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600 border-b border-gray-200 pl-5">Politics</Link>
              <Link onClick={() => setMenuOpen1(false)} title="business" href="/business" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Business</Link>
              <Link onClick={() => setMenuOpen1(false)} title="health" href="/health" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Health</Link>
              <Link onClick={() => setMenuOpen1(false)} title="sports" href="/sports" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Sports</Link>
              <Link onClick={() => setMenuOpen1(false)} title="science" href="/science" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Science</Link>
              <Link onClick={() => setMenuOpen1(false)} title="technology" href="/technology" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Technology</Link>
              <Link onClick={() => setMenuOpen1(false)} title="education" href="/education" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600  border-b border-gray-200 pl-5">Education</Link>
              <Link onClick={() => setMenuOpen1(false)} title="entertainment" href="/entertainment" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600 border-b border-gray-200 pl-5">Entertainment</Link>
              <Link onClick={() => setMenuOpen1(false)} title="lifestyle" href="/lifestyle" className=" font-sans font-semibold block px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-red-600 border-b border-gray-200 pl-5">Lifestyle</Link>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
