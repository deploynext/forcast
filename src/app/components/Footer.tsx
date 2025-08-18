"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission here
  };

  return (
    <footer className="bg-neutral-900 text-neutral-200 w-full font-sans">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Container flex: column on mobile, row on lg */}
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left side: lists container, 2/3 width on lg */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">

            {/* First 3 lists: grid with 1 col mobile, 3 cols md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* News */}
              <div>
                <h3 className="mb-4 text-lg font-semibold font-serif text-white">News</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link className="text-neutral-400 hover:text-white" href="#">Home Page</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">World</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/politics">Politics</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/education">Education</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/sports">Sports</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/business">Business</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/technology">Tech</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/science">Science</Link></li>
                </ul>
              </div>

              {/* Lifestyle */}
              <div>
                <h3 className="mb-4 text-lg font-semibold font-serif text-white">Lifestyle</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Fashion ’24</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Style</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Restaurant Reviews</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Health</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Entertainment</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Trends</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Food</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Auto</Link></li>
                </ul>
              </div>

              {/* Economics */}
              <div>
                <h3 className="mb-4 text-lg font-semibold font-serif text-white">Economics</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Today’s Opinion</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Columnists</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Guest Essays</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Sunday Opinion</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Opinion Video</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Real Estate</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Pop Culture</Link></li>
                  <li><Link className="text-neutral-400 hover:text-white" href="/#">Book Review</Link></li>
                </ul>
              </div>
            </div>

            
            {/* <div className="mt-8 md:mt-12">
              <h3 className="mb-4 text-lg font-semibold font-serif text-white">World</h3>
              <ul className="space-y-2 text-sm">
                <li><Link className="text-neutral-400 hover:text-white" href="/#">The Athletic</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">Live Events</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">Reader Center</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">The Learning Network</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">The Great Read</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">Visual Arts</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">Tech</Link></li>
                <li><Link className="text-neutral-400 hover:text-white" href="/#">Television</Link></li>
              </ul>
            </div> */}
          </div>

          {/* Newsletter: on lg take 1/3 width and stay on right; on md+ move up side-by-side with 4th list */}
          <div className="w-full lg:w-1/3 mt-12 lg:mt-0 lg:self-start">
            <h3 className="mb-4 text-lg font-semibold font-serif text-white">Sign Up for Our Newsletter</h3>
            <p className="mb-4 text-sm text-neutral-300">
              Subscribe to get our newest articles instantly.
            </p>
             <form onSubmit={onSubmit} className="flex  items-stretch">
                <div className="relative ">
                  <input
                    type="email"
                    required
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
              <input type="checkbox" className="mt-0.5 accent-indigo-600" /> I have read and agree to the terms & conditions
            </label>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neutral-400" />
                <span>infouemail@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-neutral-400" />
                <span>+5-784-8894-678</span>
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
          <div className="font-serif text-xl tracking-wide text-white">Forcast News</div>
          <div>Forcast News ©2024. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-row">
            <Link className="hover:text-white" href="#">Privacy</Link>
            <Link className="hover:text-white" href="#">Terms</Link>
            <Link className="hover:text-white" href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
