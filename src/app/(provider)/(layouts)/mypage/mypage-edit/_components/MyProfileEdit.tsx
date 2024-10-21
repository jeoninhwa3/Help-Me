"use client";

import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/client";
import defaultProfileImg from "@/assets/images/img_default_profile.jpg";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Loading from "@/app/(provider)/_components/Loading/Loading";

const MyProfileEdit = () => {
  const supabase = createClient();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user } = useUser() || {};
  const [nickname, setNickname] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [loading, setLoading] = useState(true);

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

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleCancle = () => {
    router.push("/mypage");
  };

  const handleEditProfile = async () => {
    const newFileName = uuidv4();
    const file = fileInputRef.current?.files?.[0];

    if (file) {
      const { data: uploadFileData, error } = await supabase.storage
        .from("avatars")
        .upload(newFileName, file);

      if (error) {
        console.log("이미지 업로드 에러", error);
        return;
      }

      const response = supabase.storage
        .from("avatars")
        .getPublicUrl(uploadFileData.path);
      const publicUrl = response.data.publicUrl;

      setProfileUrl(publicUrl);

      try {
        const updateFields: { profile_url?: string; nickname?: string } = {
          profile_url: publicUrl,
        };

        if (nickname) {
          updateFields.nickname = nickname;
        }

        const { data: updateData } = await supabase
          .from("users")
          .update(updateFields)
          .eq("user_id", user?.user_id);

        await supabase.auth.updateUser({
          data: { nickname },
        });

        console.log("프로필 업데이트 성공", updateData);
        router.push("/mypage");
      } catch (error) {
        console.log("프로필 저장 에러", error);
      }
    } else {
      if (nickname) {
        try {
          const { data: updateData } = await supabase
            .from("users")
            .update({
              nickname,
            })
            .eq("user_id", user?.user_id);

          await supabase.auth.updateUser({
            data: { nickname },
          });

          console.log("닉네임만 업데이트 성공", updateData);
          router.push("/mypage");
        } catch (error) {
          console.log("닉네임 업데이트 에러", error);
        }
      }
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("profile_url, nickname")
        .eq("user_id", user?.user_id)
        .single();

      if (error) {
        console.log("유저프로필 가져오기 에러", error);
      } else {
        setProfileUrl(data.profile_url);
        setPreviewUrl(data.profile_url);
        setNickname(data.nickname);
        setLoading(false);
      }
    };
    if (user) {
      getUserData();
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {user && (
        <>
          <form>
            <div className="flex items-center mt-4">
              <div className="shrink-0 w-[96px] h-[96px]">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Image
                  className="inline-block w-full h-full rounded-full object-cover cursor-pointer"
                  src={previewUrl || profileUrl || defaultProfileImg}
                  alt={user?.nickname}
                  width={96}
                  height={96}
                  onClick={handleImageClick}
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

            <div className="flex flex-col relative mt-6 text-left">
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
                <p className="absolute -bottom-5 text-backgroundError text-sm">
                  {nicknameError}
                </p>
              )}
            </div>

            <div className="flex gap-4 mt-8">
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
                onClick={handleEditProfile}
              ></Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default MyProfileEdit;
