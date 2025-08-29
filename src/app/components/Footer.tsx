"use client";

import Link from "next/link";
import { useState } from "react";

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <footer className="bg-neutral-900 text-neutral-200 w-full font-sans">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="md:flex md:flex-row ">
            <div className="">
              <Link title="about us" href="/about-us" className="mb-4 text-lg font-semibold font-serif text-white">About Us</Link> 
              <div className="md:w-1/2 my-5  flex flex-col gap-6">
                <p className="text-gray-400">
                  Fiscal Fusion is your go-to source for balanced, clear financial news. Covering key topics like Politics, Business, Tech, Science, and Lifestyle, we deliver timely insights that help you stay informed and empowered.
                </p>
              
              </div>
            </div>
            <div className="w-full md:w-2/4">
              <h3 className="mb-4 text-lg font-semibold font-serif text-white">Category</h3>
              <ul className="space-y-2 text-sm">
                <li><Link className="text-neutral-400 hover:text-white" title="Home Page" href="/">Home Page</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Politics" href="/politics">Politics</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Education" href="/education">Education</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Sports" href="/sports">Sports</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Business" href="/business">Business</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Technology" href="/technology">Technology</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Science" href="/science">Science</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Lifestyle" href="/lifestyle">Lifestyle</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Health" href="/health">Health</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" title="Entertainment" href="/entertainment">Entertainment</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:self-start">
            <h3 className="mb-4 text-lg font-semibold font-serif text-white">Sign Up for Our Newsletter</h3>
            <p className="mb-4 text-sm text-neutral-300">
              Subscribe to get our newest articles instantly.
            </p>
             <form onSubmit={onSubmit} className="flex  items-stretch ">
                <div className="relative w-full me-10 md:me-0  ">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full rounded-md bg-white px-3 py-4 pr-24 text-sm placeholder-neutral-500 placeholder:text-lg outline-none ring-1 ring-neutral-700 focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 rounded-md  bg-red-600 text-lg px-4   text-white hover:bg-red-700 transition-colors"
                  >
                    <span className="align-middle">Subscribe</span>
                  </button>
                </div>

              </form>

            <label className="mt-3 flex items-start gap-2 text-sm text-neutral-400">
              <input type="checkbox" required className="mt-0.5 accent-indigo-600" /> I have read and agree to the terms & conditions
            </label>

            <div className="mt-6 space-y-2 text-sm">
              
              <div className="flex items-center gap-2">
               
                
              </div>
              <div className="mt-4 flex items-center gap-4 text-neutral-300">
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faFacebookF} />
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faXTwitter} />
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faInstagram} />
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faYoutube} />
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col items-center justify-between gap-3 text-sm text-neutral-400 md:flex-row">
          <div className="font-serif h-10 overflow-hidden flex items-center justify-center">
            <Link href="/"
            title="logo"
            >
                 <Image
                  src="/logo-white.webp"
                  alt="logo"
                  width={230}
                  height={36}
                  quality={60}
                  className="object-contain "
                  />
              </Link>
          </div>
          <div>Fiscal Fusion. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-row">
            <Link className="hover:text-white font-semibold text-gray-600" title="Privacy" href="/privacy">Privacy</Link>
            <Link className="hover:text-white font-semibold text-gray-600" title="Terms" href="/terms-and-condition">Terms</Link>
            <Link className="hover:text-white font-semibold text-gray-600" title="Contact" href="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
