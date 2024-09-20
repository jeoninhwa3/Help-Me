import Image from "next/image";
import menu from "@/assets/icons/icon_hamburger.svg";
import { useUser } from "@/context/UserContext";

const HeaderNav = () => {
  const { user, profileUrl } = useUser() || {};
  console.log(profileUrl);
  console.log(user);
  return (
    <nav>
      <button type="button" className="px-1 py-2">
        <Image src={menu} alt="menu" width={24} height={24} />
      </button>
      <ul className="absolute top-16 right-5 p-2 rounded-lg shadow-header-floating">
        <li className="flex text-gray900">
          <Image src={menu} alt="menu" width={24} height={24} />
          <p className="ml-2 text-gray900 text-sm">
            반가워요! <br />
            <strong className="mt-1 text-primary600 font-semibold">
              {user?.nickname}
            </strong>
            님
          </p>
        </li>
        {/* 링크태그 추가하기 */}
        <li className="p-3 mt-1 text-gray900 text-sm">나만의 식단</li>
        <li className="p-3 mt-1 text-gray900 text-sm">커뮤니티</li>
        <li className="p-3 mt-1 text-gray900 text-sm">나의 프로필</li>
        <li className="p-3 mt-1 text-gray900 text-sm">로그아웃</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
