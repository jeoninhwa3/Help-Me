"use client";

import { useUser } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

import Image from "next/image";
import carbohydrate from "@/assets/icons/icon_carbohydrate.svg";
import protein from "@/assets/icons/icon_protein.svg";
import fat from "@/assets/icons/icon_fat.svg";

interface Meal {
  menu: string;
  ratio: string;
  calories: number | null;
}

const MyDietPage = () => {
  const supabase = createClient();
  const { user } = useUser() || {};
  const [breakfast, setBreakfast] = useState<Meal[] | null>(null);
  const [lunch, setLunch] = useState<Meal[] | null>(null);
  const [dinner, setDinner] = useState<Meal[] | null>(null);
  const [totalCalories, setTotalCalories] = useState<string | null>(null);

  const getDietData = async () => {
    const { data: dietData, error } = await supabase
      .from("result")
      .select("breakfast, lunch, dinner, total_calorie")
      .eq("user_id", user?.user_id)
      .single();

    if (error) {
      console.log("식단 데이터 불러오기 오류", error);
    } else {
      setBreakfast(dietData?.breakfast);
      setLunch(dietData?.lunch);
      setDinner(dietData?.dinner);
      setTotalCalories(dietData?.total_calorie);
    }
  };

  useEffect(() => {
    if (user?.user_id) {
      getDietData();
    }
  }, [user]);

  return (
    <div className="py-6">
      <h3 className="text-gray900 font-semibold text-xl">오늘의 추천 식단</h3>
      <p className="mt-1 text-gray600 text-sm">
        AI 분석을 바탕으로 맞춤 식단을 추천해 드려요
      </p>

      <ul className="mt-6 md:flex md:flex-wrap">
        <li className="flex flex-col justify-between max-w-[320px] p-4 mt-6 bg-white rounded-xl shadow-header-floating md:mt-0">
          <div>
            <strong className="text-secondary font-semibold text-sm">
              아침
            </strong>
            <p className="h-[72px] mt-1 text-gray900 font-medium">
              {breakfast?.[0].menu}
            </p>
            <span className="mt-1 text-gray600">
              {breakfast?.[0].calories} kcal
            </span>
          </div>
          <ul className="flex justify-between mt-5">
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={carbohydrate} alt="탄수화물" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">탄수화물</span>
              <span className="text-gray900 font-sm">
                {breakfast?.[0].ratio[0]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={protein} alt="단백질" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">단백질</span>
              <span className="text-gray900 font-sm">
                {breakfast?.[0].ratio[1]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={fat} alt="지방" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">지방</span>
              <span className="text-gray900 font-sm">
                {breakfast?.[0].ratio[2]}%
              </span>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-between max-w-[320px] p-4 mt-6 bg-white rounded-xl shadow-header-floating md:ml-6 md:mt-0">
          <div>
            <strong className="text-secondary font-semibold text-sm">
              점심
            </strong>
            <p className="mt-1 text-gray900 font-medium">{lunch?.[0].menu}</p>
            <span className="mt-1 text-gray600">
              {lunch?.[0].calories} kcal
            </span>
          </div>
          <ul className="flex justify-between mt-5">
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={carbohydrate} alt="탄수화물" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">탄수화물</span>
              <span className="text-gray900 font-sm">
                {lunch?.[0].ratio[0]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={protein} alt="단백질" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">단백질</span>
              <span className="text-gray900 font-sm">
                {lunch?.[0].ratio[1]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={fat} alt="지방" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">지방</span>
              <span className="text-gray900 font-sm">
                {lunch?.[0].ratio[2]}%
              </span>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-between max-w-[320px] p-4 mt-6 bg-white rounded-xl shadow-header-floating lg:ml-6 lg:mt-0">
          <div>
            <strong className="text-secondary font-semibold text-sm">
              저녁
            </strong>
            <p className="mt-1 text-gray900 font-medium">{dinner?.[0].menu}</p>
            <span className="mt-1 text-gray600">
              {dinner?.[0].calories} kcal
            </span>
          </div>
          <ul className="flex justify-between mt-5">
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={carbohydrate} alt="탄수화물" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">탄수화물</span>
              <span className="text-gray900 font-sm">
                {dinner?.[0].ratio[0]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={protein} alt="단백질" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">단백질</span>
              <span className="text-gray900 font-sm">
                {dinner?.[0].ratio[1]}%
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
              <Image src={fat} alt="지방" width={24} height={24} />
              <span className="mt-1 text-gray600 text-sm">지방</span>
              <span className="text-gray900 font-sm">
                {dinner?.[0].ratio[2]}%
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <p className="mt-6 pb-10 border-b-[1px] border-solid border-gray200 text-gray600 font-medium">
        목표를 위한 일일 권장 칼로리 섭취량은{" "}
        <strong className="text-secondary font-bold">
          {totalCalories} kcal
        </strong>{" "}
        입니다.
      </p>

      <ul className="p-4 mt-10 rounded-xl bg-white md:bg-inherit">
        <li>
          <strong className="text-gray900 text-sm font-semibold">
            추가 팁
          </strong>
          <ol>
            <li className="mt-1 text-gray800 text-sm">
              - 식단뿐 아니라 충분한 수분 섭취가 중요합니다
            </li>
            <li className="mt-2 text-gray800 text-sm">
              - 이 식단은 꾸준한 운동과 함께 실천할 때 더욱 효과적입니다. 가벼운
              운동 루틴을 통해 건강한 생활을 유지하세요.
            </li>
            <li className="mt-2 text-gray800 text-sm">
              - 식사를 규칙적으로 하는 것은 건강 관리의 중요한 부분입니다.
              일정한 시간에 식사를 하여 균형 잡힌 에너지를 유지하세요.
            </li>
          </ol>
        </li>
        <li className="mt-6">
          <strong className="text-gray900 text-sm font-semibold">
            주의 사항
          </strong>
          <p className="mt-1 text-gray800 text-sm">
            추천 식단은 개인의 건강 상태에 맞게 조정이 필요합니다
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MyDietPage;
