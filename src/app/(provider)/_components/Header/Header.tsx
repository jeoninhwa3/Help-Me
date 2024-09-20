"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/img_logo.svg";
import HeaderNav from "./_components/HeaderNav";

const Header = () => {
  return (
    <header className="fixed flex justify-between items-center w-full h-[56px] px-5 bg-white shadow-header-line">
      <h1 className="py-4">
        <Link href="/">
          <Image src={logo} alt="HELPME" width={100} height={24} />
        </Link>
      </h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
