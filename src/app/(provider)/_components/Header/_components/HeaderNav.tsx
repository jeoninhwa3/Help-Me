import Image from "next/image";
import menu from "@/assets/icons/icon_hamburger.svg";
import close from "@/assets/icons/icon_close.svg";
import defaultProfileImg from "@/assets/images/img_default_profile.jpg";
import { useUser } from "@/context/UserContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

const HeaderNav = () => {
  const supabase = createClient();
  const router = useRouter();
  const { user, profileUrl } = useUser() || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogIn = () => {
    setIsDropdownOpen(false);
    router.push("/login");
  };

  const handleLogOut = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsDropdownOpen(false);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("로그아웃 에러:", error);
    } else {
      console.log("로그아웃 성공");
      router.push("/login");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <button
        type="button"
        className="px-1 py-2"
        onClick={handleDropDown}
        ref={buttonRef}
      >
        <Image
          src={isDropdownOpen ? close : menu}
          alt="menu"
          width={24}
          height={24}
        />
      </button>
      {user ? (
        <>
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute top-16 right-5 p-2 rounded-lg bg-white shadow-header-floating z-10"
            >
              <li className="flex p-3 text-gray900">
                <Image
                  className="rounded-full"
                  src={profileUrl ? profileUrl : defaultProfileImg}
                  alt="menu"
                  width={40}
                  height={40}
                />
                <p className="ml-2 text-gray900 text-sm">
                  반가워요! <br />
                  <strong className="mt-1 text-primary600 font-semibold">
                    {user?.nickname}
                  </strong>
                  님
                </p>
              </li>
              {/* 링크태그 추가하기 */}
              <li
                className="p-3 mt-1 text-gray900 text-sm"
                onClick={handleCloseDropdown}
              >
                <Link href="/mydiet">나만의 식단</Link>
              </li>
              <li
                className="p-3 mt-1 text-gray900 text-sm"
                onClick={handleCloseDropdown}
              >
                커뮤니티
              </li>
              <li
                className="p-3 mt-1 text-gray900 text-sm"
                onClick={handleCloseDropdown}
              >
                나의 프로필
              </li>
              <li className="p-3 mt-1 text-gray900 text-sm">
                <button type="button" onClick={handleLogOut}>
                  로그아웃
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <>
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute top-16 right-5 p-2 rounded-lg bg-white shadow-header-floating z-10"
            >
              <li
                className="p-3 mt-1 text-gray900 text-sm"
                onClick={handleCloseDropdown}
              >
                <Link href="/mydiet">나만의 식단</Link>
              </li>
              <li
                className="p-3 mt-1 text-gray900 text-sm"
                onClick={handleCloseDropdown}
              >
                커뮤니티
              </li>
              <li className="p-3 mt-1 text-gray900 text-sm">
                <button type="button" onClick={handleLogIn}>
                  로그인
                </button>
              </li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
};

export default HeaderNav;
