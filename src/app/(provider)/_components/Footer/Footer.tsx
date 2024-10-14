import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/img_logo.svg";
import github from "@/assets/icons/icon_github.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-container px-5 py-6 mx-auto md:px-10">
        <div className="flex justify-between items-center w-[300px]">
          <h2>
            <Link href="/">
              <Image src={logo} alt="HELPME" width={88} height={24} />
            </Link>
          </h2>
          <span>
            <Link href="https://github.com/jeoninhwa3/Help-Me">
              <Image src={github} alt="go to github" width={24} height={24} />
            </Link>
          </span>
        </div>
        <p className="mt-4 text-sm text-gray600">inhwa.jeon</p>
        <p className="mt-1 text-sm text-gray600">
          Copyright 2024. HELPME. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
