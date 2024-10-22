import Image from "next/image";
import thumbnail from "@/assets/images/img_thumbnail.png";

const MyPosting = () => {
  return (
    <div className="max-w-[360px] mt-6 mx-auto mb-0 p-4 border border-gray300 rounded-xl border-solid bg-white md:max-w-[710px] lg:mt-0 lg:ml-20 lg:p-10 xl:max-w-[880px]">
      <h3 className="-mb-2 text-gray900 text-lg font-semibold">
        내가 작성한 글
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
        <li className="mt-6 xl:w-[240px]">
          <Image
            className="rounded-lg"
            src={thumbnail}
            alt="내이미지"
            width={320}
            height={192}
          />
          <span className="inline-block mt-4 text-primary600 text-sm font-semibold">
            잡담
          </span>
          <p className="mt-2 text-gray900 font-semibold">다들 배 안고프세요?</p>
          <p className="mt-1 text-gray800 text-sm">
            원래 밥 많이 먹다가 추천해준대로 줄여서 먹다 보니 배가 너무
            고프네요. 간식도 추천해주면 좋겠네요
          </p>
          <span className="mt-1 text-gray600 text-xs">2024.07.26</span>
        </li>
      </ul>
    </div>
  );
};

export default MyPosting;
