"use client";

// import Image from "next/image";
// import carbohydrate from "@/assets/icons/icon_carbohydrate.svg";
// import protein from "@/assets/icons/icon_protein.svg";
// import fat from "@/assets/icons/icon_fat.svg";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Survey } from "@/types";

const MyDietPage = () => {
  const supabase = createClient();
  const { user } = useUser() || {};
  const [surveyData, setSurveyData] = useState(null);

  const [breakfast, setBreakfast] = useState<string | undefined>(undefined);
  const [lunch, setLunch] = useState<string | undefined>(undefined);
  const [dinner, setDinner] = useState<string | undefined>(undefined);
  const [totalCalories, setTotalCalories] = useState<string | undefined>(
    undefined
  );

  const fetchSurveyData = async () => {
    if (!user?.user_id) return;

    const { data, error } = await supabase
      .from("survey")
      .select("*")
      .eq("user_id", user.user_id)
      .single();

    if (error) {
      console.log("설문조사 데이터 가져오기 에러 =>", error);
    } else {
      setSurveyData(data);
      console.log("가져온 설문 데이터 =>", surveyData);
      await fetchData(data);
    }
  };

  const fetchData = async (surveyData: Survey) => {
    try {
      const res = await axios.post("/api/gpt", {
        yearOfBirth: surveyData.year_of_birth,
        gender: surveyData.gender,
        height: surveyData.height,
        weight: surveyData.weight,
        muscle: surveyData.muscle,
        bodyFat: surveyData.body_fat,
        exercise: surveyData.exercise,
        purpose: surveyData.purpose,
        allergies: surveyData.allergies,
        user_id: surveyData.user_id,
      });

      let gptData;
      try {
        gptData =
          typeof res.data.data === "string"
            ? res.data.data
            : JSON.stringify(res.data.data);
      } catch (parseError) {
        console.log("JSON 파싱 에러:", parseError);
        gptData = res.data.data;
      }

      const { breakfast, lunch, dinner, totalCalories } =
        parseMealData(gptData);

      console.log("파싱된 식사 데이터:", {
        breakfast,
        lunch,
        dinner,
        totalCalories,
      });

      setBreakfast(
        `Menu: ${breakfast.menu}, Calories: ${breakfast.calories}, Ratio: ${breakfast.ratio}`
      );
      setLunch(
        `Menu: ${lunch.menu}, Calories: ${lunch.calories}, Ratio: ${lunch.ratio}`
      );
      setDinner(
        `Menu: ${dinner.menu}, Calories: ${dinner.calories}, Ratio: ${dinner.ratio}`
      );
      setTotalCalories(`Total Calories: ${totalCalories}`);
    } catch (error) {
      console.log("gpt data error", error);
    }
  };

  const parseMealData = (content: string) => {
    const sections = content.split("\n");
    const diet = {
      breakfast: { menu: "", calories: "", ratio: "" },
      lunch: { menu: "", calories: "", ratio: "" },
      dinner: { menu: "", calories: "", ratio: "" },
      totalCalories: "",
    };

    let currentMeal: { menu: string; calories: string; ratio: string } | null =
      null;

    sections.forEach((line) => {
      if (line.startsWith("#")) {
        currentMeal = diet.breakfast;
        if (line.startsWith("#?메뉴:"))
          currentMeal.menu += line.substring(7).trim() + "\n";
        else if (line.startsWith("#-"))
          currentMeal.menu += line.substring(1).trim() + "\n";
        else if (line.startsWith("#$"))
          currentMeal.ratio = line.substring(1).trim();
        else if (line.startsWith("#&"))
          currentMeal.calories = line.substring(1).trim();
      } else if (line.startsWith("^")) {
        currentMeal = diet.lunch;
        if (line.startsWith("^?메뉴:"))
          currentMeal.menu += line.substring(7).trim() + "\n";
        else if (line.startsWith("^-"))
          currentMeal.menu += line.substring(1).trim() + "\n";
        else if (line.startsWith("^$"))
          currentMeal.ratio = line.substring(1).trim();
        else if (line.startsWith("^&"))
          currentMeal.calories = line.substring(1).trim();
      } else if (line.startsWith("!")) {
        currentMeal = diet.dinner;
        if (line.startsWith("!?메뉴:"))
          currentMeal.menu += line.substring(7).trim() + "\n";
        else if (line.startsWith("!-"))
          currentMeal.menu += line.substring(1).trim() + "\n";
        else if (line.startsWith("!$"))
          currentMeal.ratio = line.substring(1).trim();
        else if (line.startsWith("!&"))
          currentMeal.calories = line.substring(1).trim();
      } else if (line.startsWith("*"))
        diet.totalCalories = line.substring(1).trim();
    });

    return diet;
  };

  useEffect(() => {
    fetchSurveyData();
  }, [user]);

  return (
    <div>
      <h2>나만의 식단</h2>
      <div>
        <p className="mt-5">{breakfast}</p>
        <p className="mt-5">{lunch}</p>
        <p className="mt-5">{dinner}</p>
        <p className="mt-5">{totalCalories}</p>
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
