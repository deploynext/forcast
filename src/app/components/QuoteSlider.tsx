"use client";

import { useState, useEffect } from "react";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "Lorem ipsum dolor amet consectetur. Ay tellus dummy suspendisse aliquam any ready to many facilisis.",
    author: "Salman Morid",
  },
  {
    text: "Lorem ipsum dolor amet consectetur. Ay tellus dummy suspendisse aliquam any ready to many facilisis.",
    author: "David Morid",
  },
  {
    text: "Lorem ipsum dolor amet consectetur. Ay tellus dummy suspendisse aliquam any ready to many facilisis.",
    author: "Stifin Morid",
  },
];

export default function QuoteSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10 ">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-lg bg-gray-50 transform -skew-x-3">
        
        {/* Slides wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-8 text-center"
            >
              {/* Quote Icon */}
              <span className="flex justify-center mb-6 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 49 50"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.7539 10.0061C37.4414 14.9431 41.7121 20.6893 42.5661 27.2448C43.8956 37.4502 34.7691 42.4454 30.1449 37.9573C25.5206 33.4691 28.2926 27.7723 31.641 26.2151C34.9894 24.6578 37.0371 25.2002 36.6799 23.1192C36.3227 21.0384 31.5589 15.2688 27.3737 12.5819C27.096 12.3458 26.9904 11.8876 27.2577 11.54C27.4336 11.3115 27.7786 10.8632 28.2926 10.1951C28.742 9.6109 29.1726 9.63277 29.7539 10.0061Z"
                    fill="#D2D2D2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.51517 10.0061C17.2026 14.9431 21.4733 20.6893 22.3273 27.2448C23.6568 37.4502 14.5303 42.4454 9.90605 37.9573C5.28177 33.4691 8.05375 27.7723 11.4022 26.2151C14.7506 24.6578 16.7984 25.2002 16.4411 23.1192C16.0839 21.0384 11.3201 15.2688 7.13489 12.5819C6.85723 12.3458 6.75157 11.8876 7.01903 11.54C7.19482 11.3115 7.53976 10.8632 8.05375 10.1951C8.50322 9.6109 8.93381 9.63277 9.51517 10.0061Z"
                    fill="#D2D2D2"
                  />
                </svg>
              </span>

              {/* Quote Text */}
              <p className="text-gray-700 italic mb-4">
                {`"${quote.text}"`}
              </p>

              {/* Author */}
              <span className="font-semibold text-gray-900 block">
                {quote.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
