"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/img_logo.svg";
import HeaderNav from "./_components/HeaderNav";

const Header = () => {
  return (
    <header className="fixed w-full h-[56px] bg-white shadow-header-line z-10 md:h-[60px]">
      <div className="flex justify-between items-center max-w-container h-full px-5 mx-auto md:px-10">
        <h1 className="py-4 md:py-5">
          <Link href="/">
            <Image src={logo} alt="HELPME" width={100} height={24} />
          </Link>
        </h1>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
