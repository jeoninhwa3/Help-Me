"use client";

import { useUser } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import defaultProfileImg from "@/assets/images/img_default_profile.jpg";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const supabase = createClient();
  const router = useRouter();
  const { user, profileUrl } = useUser() || {};
  const [userInfo, setUserInfo] = useState({
    height: "",
    weight: "",
    purpose: "",
  });
  const [purpose, setPurpose] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);

  const handleEditProfile = () => {
    router.push("/mypage/mypage-edit");
  };

  useEffect(() => {
    const userData = async () => {
      const { data, error } = await supabase
        .from("survey")
        .select("height, weight, purpose")
        .eq("user_id", user?.user_id)
        .single();

      if (data) {
        setUserInfo(data);

        switch (data.purpose) {
          case "체중을 감량하고 싶어요":
            setPurpose("체중 감량");
            break;
          case "체중을 증량하고 싶어요":
            setPurpose("체중 증량");
            break;
          case "건강한 식사를 하고 싶어요":
            setPurpose("건강 식사");
            break;
        }

        const bmi = Number(
          data.weight / (((data.height / 100) * data.height) / 100)
        );
        console.log(typeof bmi);

        if (bmi < 18.5) {
          setBmi("저체중");
        } else if (bmi >= 18.5 && bmi < 23) {
          setBmi("정상");
        } else if (bmi >= 23 && bmi < 25) {
          setBmi("과체중");
        } else if (bmi >= 25 && bmi < 30) {
          setBmi("비만");
        } else {
          setBmi("고도비만");
        }
      } else {
        console.log("유저 정보 저장 오류", error);
      }
    };

    if (user) {
      userData();
    }
  }, [user]);

  return (
    <>
      {user && (
        <div className="p-6 border border-gray300 rounded-xl border-solid bg-white text-center">
          <div className="w-[120px] h-[120px] mx-auto my-0">
            <Image
              className="inline-block h-full rounded-full object-cover"
              src={profileUrl ? profileUrl : defaultProfileImg}
              alt={user.nickname}
              width={120}
              height={120}
            />
          </div>
          <p className="mt-4 text-gray900 font-semibold">{user.nickname}</p>

          <div className="mt-4 rounded-xl shadow-header-floating p-4">
            <strong className="block w-[240px] py-1.5 leading-7 text-[#279B6A] rounded-xl bg-[#EAF3EC] text-lg font-medium">
              {purpose}
            </strong>
            <p className="mt-2 text-gray600 text-xs">
              헬프미와 함께 나의 목표를 달성해요
            </p>
            <ul className="flex justify-around mt-6">
              <li>
                <strong className="block text-gray900 font-semibold">키</strong>
                <span className="text-gray800 text-sm">
                  {userInfo.height}cm
                </span>
              </li>
              <li className="w-[1px] h-11 bg-gray200"></li>
              <li>
                <strong className="block text-gray900 font-semibold">
                  체중
                </strong>
                <span className="text-gray800 text-sm">
                  {userInfo.weight}kg
                </span>
              </li>
              <li className="w-[1px] h-11 bg-gray200"></li>
              <li>
                <strong className="block text-gray900 font-semibold">
                  BMI
                </strong>
                <span className="text-gray800 text-sm">{bmi}</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleEditProfile}
            className="w-full py-[10px] mt-6 border border-[#80D85D] border-solid rounded-lg text-[#49BA43] font-medium"
          >
            프로필 수정하기
          </button>
        </div>
      )}
    </>
  );
};

export default MyProfile;
