import Image from "next/image";
import Link from "next/link";

export default function SidebarAd() {
  return (
    <div className="empath__sidebar-item  top-0">
      <Link href="#" title="sidebar ad">
        <Image
          src="/images/SidebarAd.jpeg"
          alt="Side Advertisement"
          width={579}
          height={531}
          className="w-full h-auto"
          quality={60}
        />
      </Link>
    </div>
  );
}