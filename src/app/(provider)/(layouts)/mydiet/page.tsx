"use client";

import { useUser } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

// import Image from "next/image";
// import carbohydrate from "@/assets/icons/icon_carbohydrate.svg";
// import protein from "@/assets/icons/icon_protein.svg";
// import fat from "@/assets/icons/icon_fat.svg";

const MyDietPage = () => {
  const supabase = createClient();
  const { user } = useUser() || {};
  const [breakfast, setBreakfast] = useState<Meal[] | null>(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);
  const [totalCalories, setTotalCalories] = useState<string | null>(null);

  interface Meal {
    menu: string;
    ratio: string;
    calories: number | null;
  }

  const getDietData = async () => {
    const { data: dietData, error } = await supabase
      .from("result")
      .select("breakfast, lunch, dinner, total_calorie")
      .eq("user_id", user?.user_id)
      .single();

    setBreakfast(dietData?.breakfast);
    setLunch(dietData?.lunch);
    setDinner(dietData?.dinner);
    setTotalCalories(dietData?.total_calorie);
  };

  useEffect(() => {
    if (user?.user_id) {
      getDietData();
    }
  }, [user]);

  return (
    <div>
      <h2>나만의 식단</h2>
      <div>
        {breakfast ? <p className="mt-5">{breakfast?.[0].menu}</p> : ""}
        {/* <p className="mt-5">{lunch}</p>
        <p className="mt-5">{dinner}</p>
        <p className="mt-5">{totalCalories}</p> */}
      </div>
    </div>
    // <div className="py-6">
    //   <h3 className="text-gray900 font-semibold text-xl">오늘의 추천 식단</h3>
    //   <p className="mt-1 text-gray600 text-sm">
    //     AI 분석을 바탕으로 매일 맞춤 식단을 추천해 드려요
    //   </p>
    //   <ul className="mt-6">
    //     <li className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-header-floating">
    //       <div>
    //         <strong className="text-secondary font-semibold text-sm">
    //           아침
    //         </strong>
    //         <p className="mt-1 text-gray900 font-medium">
    //           계란 샌드위치, 바나나 1개
    //         </p>
    //         <span className="mt-1 text-gray600">520 kcal</span>
    //       </div>
    //       <ul className="flex justify-between mt-5">
    //         <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
    //           <Image src={carbohydrate} alt="탄수화물" width={24} height={24} />
    //           <span className="mt-2 text-gray600 text-sm">탄수화물</span>
    //           <span className="text-gray900 font-sm">44g</span>
    //         </li>
    //         <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
    //           <Image src={protein} alt="단백질" width={24} height={24} />
    //           <span className="mt-2 text-gray600 text-sm">단백질</span>
    //           <span className="text-gray900 font-sm">44g</span>
    //         </li>
    //         <li className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#F5F7FA]">
    //           <Image src={fat} alt="지방" width={24} height={24} />
    //           <span className="mt-2 text-gray600 text-sm">지방</span>
    //           <span className="text-gray900 font-sm">44g</span>
    //         </li>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default MyDietPage;
