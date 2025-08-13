import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Mail, Printer } from "lucide-react";


export default function SocialIcons() {

  return (
    <div className="flex gap-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition`}>
          <FontAwesomeIcon icon={faFacebook} className={` text-lg`} />
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-sky-500 text-sky-500  hover:bg-sky-500 hover:text-white transition`}>
          <FontAwesomeIcon icon={faTwitter} className={` text-lg`} />
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition`}>
          <FontAwesomeIcon icon={faWhatsapp} className={` text-lg`} />
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition`}>
          <Mail  size={16}/>
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition`}>
          <Printer  size={16}/>
        </div>
     
      
    </div>
  );
}
