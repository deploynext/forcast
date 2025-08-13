import Link from "next/link";

export  default function Detailbc({slug}:{slug:string}){
  return(
      <div className="w-full bg-[#fffbfc] py-4 lg:px-20 px-2 font-sans">
         <nav className="mb-4 text-gray-600 text-[18px]" aria-label="breadcrumb">
        <ol className="flex flex-col md:flex md:flex-row space-x-2 ">
          <li>
            <Link href="/" className="hover:text-gray-700 ">
              Home
              <span className="mx-2">›</span>
            </Link>
          </li>
          <li className="text-gray-800 font-medium  truncate md:truncate-none">{slug}</li>
        </ol>
      </nav> 
      </div>
  )
}