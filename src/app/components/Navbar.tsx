

import Link from "next/link";

import { Search, Menu, Moon, User2, Calendar } from "lucide-react";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Navbar = () => {


  return (
    <>
      {/* Desktop Navbar */}
      <div>
     <nav className="hidden md:block w-full border-b border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 text-sm bg-gray-50 border-b border-gray-400">
        {/* Quick Links */}
        <div className="flex gap-2 flex-wrap">
          <span>Quick Links:</span>
          <Link href="#" className="text-gray-900 font-semibold hover:underline">
            About Us
          </Link>
          <span>-</span>
          <Link href="#" className="text-gray-900 font-semibold hover:underline">
            Contact Us
          </Link>
          <span>-</span>
          <Link href="#" className="text-gray-900 font-semibold hover:underline">
            Latest News
          </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center px-8 ml-8">
          <span className="text-3xl font-bold tracking-wide font-serif mx-auto md:mx-0">
            Forecast News
          </span>
        </div>

        {/* Date + Social */}
        <div className="flex items-center gap-4 bg-gray-50">
          <span className="hidden sm:inline">
            <span className="mr-2 inline-flex items-center gap-1 me-5">
              <Calendar className="w-[16px]" /> Wednesday, 30 July 2025
            </span>
          </span>
          <div className="hidden md:block h-5 w-px bg-gray-500" />
          <div className="flex items-center gap-3 bg-gray-50 ml-3">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-gray-50">
        {/* Left - Menu + Search */}
        <div className="flex items-center bg-gray-50">
          <button className="mr-4 p-2">
            <Menu size={22} />
          </button>
          <button className="p-2">
            <Search size={22} />
          </button>
        </div>

        {/* Center - Navigation Links */}
        <div className="w-full overflow-x-auto scrollbar-hide ">
          <div className="flex flex-nowrap justify-start md:justify-start ml-0 md:ml-18 gap-3 sm:gap-4 md:gap-8 text-[.9rem] sm:text-lg bg-gray-50 px-1">
            <Link href="#" className="font-semibold font-sans flex-shrink-0">
              Home
            </Link>
            {[
              "Politics",
              "Business",
              "Sports",
              "Health",
              "Education",
              "Science",
              "Technology",
              "Lifestyle",
            ].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="font-semibold font-sans flex-shrink-0"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>


        {/* Right - User / Theme / Buy Now */}
        <div className="flex items-center gap-4 mt-3 md:mt-0 min-w-fit bg-gray-50">
          <button className="p-2">
            <User2 size={22} />
          </button>
          <div className="hidden md:block h-5 w-px bg-gray-300" />
          <button className="p-2">
            <Moon size={22} />
          </button>
          <button className="bg-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded hover:bg-gray-800 cursor-pointer transition">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
      </div>

      {/* Mobile Navbar (unchanged) */}
      <div className="border-b border-gray-200 font-sans block md:hidden bg-gray-50">
        <div className="flex justify-between items-center px-3 py-2 text-sm">
          <div className="flex flex-col">
            <span className="font-semibold mx-1 mb-2">Quick Links:</span>
            <div>
              <Link href="#" className="mx-1 text-gray-700">About Us</Link> - 
              <Link href="#" className="mx-1 text-gray-700">Contact Us</Link> - 
              <Link href="#" className="mx-1 text-gray-700">Latest News</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-3 py-3 w-full bg-gray-50">
          <div className="flex w-3/4">
            <Calendar className="w-[16px] me-2" />
            Wednesday, 30 July 2025
          </div>
          <div className="h-6 w-px bg-gray-300" />
          <div className="flex items-center space-x-3 text-gray-700 pe-2 w-1/3">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50 text-lg">
          <span className="font-serif text-2xl tracking-wide">Forecast News</span>
          <div className="flex items-center space-x-5 text-gray-700">
            <button className="py-2"><User2 size={22} /></button>
            <div className="h-6 w-px bg-gray-300" />
            <button className="py-2"><Moon size={22} /></button>
            <Menu className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
