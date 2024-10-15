"use client";

import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/client";
import defaultProfileImg from "@/assets/images/img_default_profile.jpg";
import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const MyProfileEdit = () => {
  const supabase = createClient();
  const router = useRouter();
  const { user, profileUrl } = useUser() || {};
  const [nickname, setNickname] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string | null>(null);

  const validateNickname = (nickname: string) =>
    /^[a-zA-Z0-9가-힣]+$/.test(nickname) &&
    Array.from(nickname).length >= 2 &&
    Array.from(nickname).length <= 6;

  const handleValidateNickname = (value: string) => {
    if (!validateNickname(value)) {
      setNicknameError("닉네임은 2자 이상 6자 이하로 입력해 주세요.");
    } else {
      setNicknameError(null);
    }
    setNickname(value);
  };

  const handleCancle = () => {
    router.push("/mypage");
  };

  const handleEditProfileSubmit = () => {};

  return (
    <>
      {user && (
        <>
          <form onSubmit={handleEditProfileSubmit}>
            <div className="flex items-center mt-4">
              <div className="shrink-0 w-[96px] h-[96px]">
                <input type="file" accept="image/*" />
                <Image
                  className="inline-block w-full h-full rounded-full object-cover"
                  src={profileUrl ? profileUrl : defaultProfileImg}
                  alt={user?.nickname}
                  width={96}
                  height={96}
                />
              </div>
              <div className="ml-6">
                <strong className="text-gray900 font-normal">
                  프로필 사진
                </strong>
                <p className="text-gray600 text-sm">
                  5MB 이하의 PNG, JPG, SVG 파일을 올려주세요
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-6 text-left">
              <label className="text-gray900 text-sm" htmlFor="user-nickname">
                닉네임
              </label>
              <input
                className="mt-1 px-3 py-3 bg-white border border-gray300 border-solid rounded focus:outline-none"
                type="text"
                id="user-nickname"
                placeholder="이나짱"
                value={nickname}
                onChange={(e) => handleValidateNickname(e.target.value)}
              />
              {nicknameError && (
                <p className="text-backgroundError mt-1 -mb-3 text-sm">
                  {nicknameError}
                </p>
              )}
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                buttonName="취소"
                theme="borderGrey"
                onClick={handleCancle}
                padding="py-[7px]"
              ></Button>
              <Button
                buttonName="저장"
                theme={!nicknameError ? "primary" : "grey"}
                disabled={!nicknameError ? false : true}
                padding="py-[7px]"
              ></Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default MyProfileEdit;
