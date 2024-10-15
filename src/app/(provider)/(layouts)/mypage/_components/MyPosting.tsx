import Image from "next/image";

const MyPosting = () => {
  return (
    <div className="p-4 mt-6 border border-gray300 rounded-xl border-solid bg-white">
      <h3 className="-mb-2 text-gray900 text-xl font-semibold">
        내가 작성한 글
      </h3>
      <ul>
        <li className="mt-6">
          <Image
            className="rounded-lg"
            // src={profileUrl ? profileUrl : defaultProfileImg}
            src=""
            alt="내이미지"
            width={288}
            height={192}
          />
          <span className="mt-4 text-primary600 text-sm font-semibold">
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
