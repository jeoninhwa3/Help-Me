"use client";

import { useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";
import StepThree from "./_components/StepThree";
import StepFour from "./_components/StepFour";
import StepFive from "./_components/StepFive";
import StepSix from "./_components/StepSix";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { Survey } from "@/types";

const SurveyPage = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [muscle, setMuscleh] = useState<string>("");
  const [bodyFat, setBodyFat] = useState<string>("");
  const [yearOfBirth, setYearOfBirth] = useState<string>("");
  const [exercise, setExercise] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [allergies, setAllergies] = useState<string[]>(["없음"]);
  const { user } = useUser() || {};
  const [surveyData, setSurveyData] = useState<Survey | null>(null);

  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const router = useRouter();
  const supabase = createClient();

  const handleSubmitSurvey = async () => {
    if (!user?.user_id) {
      return console.log("로딩중");
    }

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

        const diet = parseMealData(gptData);

        const processMeal = (meal: any) => {
          const extractCalories = (caloriesString: string): number | null => {
            const match = caloriesString.match(/\d+/);
            return match ? parseFloat(match[0]) : null;
          };

          const extractRatios = (ratioString: string): number[] => {
            const match = ratioString.match(/\d+/g);
            return match ? match.map(Number) : [];
          };

          return meal
            ? {
                menu: meal.menu,
                calories: extractCalories(meal.calories),
                ratio: extractRatios(meal.ratio),
              }
            : null;
        };

        const breakfastData = diet.breakfast
          ? [processMeal(diet.breakfast)]
          : [];
        const lunchData = diet.lunch ? [processMeal(diet.lunch)] : [];
        const dinnerData = diet.dinner ? [processMeal(diet.dinner)] : [];

        const totalCaloriesData = diet.totalCalories
          ? parseFloat(diet.totalCalories.replace(/[^\d]/g, ""))
          : 0;

        const { error } = await supabase.from("result").insert([
          {
            user_id: surveyData.user_id,
            breakfast: breakfastData,
            lunch: lunchData,
            dinner: dinnerData,
            total_calorie: totalCaloriesData,
          },
        ]);

        if (error) {
          console.error("Insert Error:", error.message);
        }
      } catch (error) {
        console.log("gpt data error", error);
      }
    };

    const parseMealData = (content: string) => {
      const diet = {
        breakfast: { menu: "", calories: "", ratio: "" },
        lunch: { menu: "", calories: "", ratio: "" },
        dinner: { menu: "", calories: "", ratio: "" },
        totalCalories: "",
      };

      let currentMeal: {
        menu: string;
        calories: string;
        ratio: string;
      } | null = null;

      content.split("\n").forEach((line) => {
        if (line.startsWith("#")) {
          currentMeal = diet.breakfast;
        } else if (line.startsWith("^")) {
          currentMeal = diet.lunch;
        } else if (line.startsWith("!")) {
          currentMeal = diet.dinner;
        }

        if (currentMeal) {
          if (
            line.startsWith("#?메뉴:") ||
            line.startsWith("^?메뉴:") ||
            line.startsWith("!?메뉴:")
          ) {
            currentMeal.menu += line.substring(7).trim() + "\n";
          } else if (
            line.startsWith("#-") ||
            line.startsWith("^-") ||
            line.startsWith("!-")
          ) {
            currentMeal.menu += line.substring(1).trim() + "\n";
          } else if (
            line.startsWith("#$") ||
            line.startsWith("^$") ||
            line.startsWith("!$")
          ) {
            currentMeal.ratio = line.substring(1).trim();
          } else if (
            line.startsWith("#&") ||
            line.startsWith("^&") ||
            line.startsWith("!&")
          ) {
            currentMeal.calories = line.substring(1).trim();
          }
        }

        if (line.startsWith("*")) {
          diet.totalCalories = line.substring(1).trim();
        }
      });

      return diet;
    };

    const { data, error: insertError } = await supabase
      .from("survey")
      .insert({
        user_id: user.user_id,
        height,
        weight,
        muscle,
        body_fat: bodyFat,
        year_of_birth: yearOfBirth,
        exercise,
        gender,
        purpose,
        allergies: Array.isArray(allergies)
          ? JSON.stringify(allergies)
          : allergies,
      })
      .select()
      .single();

    if (insertError) {
      console.log("설문조사 에러 =>", insertError);
    } else {
      console.log("설문조사 성공 =>", data);
      setSurveyData(data);
      if (data) {
        await fetchData(data);
      }
    }

    const { data: surveyDoneData, error: surveyDoneError } = await supabase
      .from("users")
      .update({ is_survey_done: true })
      .eq("user_id", user.user_id);

    if (surveyDoneError) {
      console.log("is_survey_done error", surveyDoneError);
    } else {
      console.log("is_survey_done 성공", surveyDoneData);
    }

    router.push("/mydiet");
  };

  return (
    <div className="pt-10">
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          muscle={muscle}
          setMuscleh={setMuscleh}
          bodyFat={bodyFat}
          setBodyFat={setBodyFat}
        />
      )}
      {step === 3 && (
        <StepThree
          nextStep={nextStep}
          prevStep={prevStep}
          yearOfBirth={yearOfBirth}
          setYearOfBirth={setYearOfBirth}
          exercise={exercise}
          setExercise={setExercise}
        />
      )}
      {step === 4 && (
        <StepFour
          nextStep={nextStep}
          prevStep={prevStep}
          gender={gender}
          setGender={setGender}
        />
      )}
      {step === 5 && (
        <StepFive
          nextStep={nextStep}
          prevStep={prevStep}
          purpose={purpose}
          setPurpose={setPurpose}
        />
      )}
      {step === 6 && (
        <StepSix
          prevStep={prevStep}
          allergies={allergies}
          setAllergies={setAllergies}
          handleSubmitSurvey={handleSubmitSurvey}
        />
      )}
    </div>
  );
};

export default SurveyPage;
