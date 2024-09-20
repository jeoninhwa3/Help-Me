import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/img_logo.svg";
import menu from "@/assets/icons/icon_hamburger.svg";

const Header = () => {
  return (
    <header className="fixed flex justify-between items-center w-full h-[56px] px-5 bg-white shadow-header-line">
      <h1 className="py-4">
        <Link href="/">
          <Image src={logo} alt="HELPME" width={100} height={24} />
        </Link>
      </h1>
      <button type="button" className="px-1 py-2">
        <Image src={menu} alt="menu" width={24} height={24} />
      </button>
    </header>
  );
};

export default Header;
