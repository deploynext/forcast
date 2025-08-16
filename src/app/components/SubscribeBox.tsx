import { Mail } from "lucide-react"; // using Lucide icon (paper-plane alt)

export default function SubscribeBox() {
  return (
    <div className="relative my-10  font-sans bg-white border rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6 lg:mx-44 mx-5">
      
      {/* Left Section */}
      <div className="flex items-start gap-4">
        <Mail className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
        <div>
          <p className="text-red-600 font-medium mb-1">Subscribe</p>
          <h2 className="text-2xl font-bold leading-snug font-serif">
            Keep Up to Date with the Most <br /> Important News
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow border border-gray-300 px-4 py-3 text-sm rounded-l-md focus:outline-none"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-r-md font-medium">
            Subscribe
          </button>
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
  );
}
