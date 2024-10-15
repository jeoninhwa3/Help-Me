import Image from "next/image";

const MyProfile = () => {
  return (
    <div className="p-6 border border-gray300 rounded-xl border-solid bg-white text-center">
      <div>
        <Image
          className="rounded-full"
          // src={profileUrl ? profileUrl : defaultProfileImg}
          src=""
          alt="내프로필"
          width={120}
          height={120}
        />
      </div>
      <p className="text-gray900 font-semibold">물에빠진 오뤼님</p>

      <div className="rounded-xl shadow-header-floating p-4">
        <strong className="block w-[240px] py-1.5 leading-7 text-[#279B6A] rounded-xl bg-[#EAF3EC] text-lg font-medium">
          체중 감량
        </strong>
        <p className="mt-2 text-gray600 text-xs">
          헬프미와 함께 나의 목표를 달성해요
        </p>
        <ul className="flex justify-around mt-6">
          <li>
            <strong className="block text-gray900 font-semibold">키</strong>
            <span className="text-gray800 text-sm">160cm</span>
          </li>
          <li className="w-[1px] h-11 bg-gray200"></li>
          <li>
            <strong className="block text-gray900 font-semibold">체중</strong>
            <span className="text-gray800 text-sm">62.6kg</span>
          </li>
          <li className="w-[1px] h-11 bg-gray200"></li>
          <li>
            <strong className="block text-gray900 font-semibold">BMI</strong>
            <span className="text-gray800 text-sm">과체중</span>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className="w-full py-[10px] mt-6 border border-[#80D85D] border-solid rounded-lg text-[#49BA43] font-medium"
      >
        프로필 수정하기
      </button>
    </div>
  );
};

export default MyProfile;
