import SocialIcons from "./SocialIcons";

export default function Tagged () {
    return(
        <div className="px-9">
            <div className="w-full md:flex md:flex-row border justify-between border-dashed px-7 py-8 mt-12 border-gray-300">
                <div className="flex flex-row mb-2">
                    <strong className="text-xl">Tagged : </strong><p className="text-gray-500 ml-2 text-xl font-sans ">Week</p>
                </div>
                <SocialIcons/>
            </div>
        </div>
    )
}