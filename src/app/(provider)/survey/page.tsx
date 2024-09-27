"use client";

import { useEffect, useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";
import StepThree from "./_components/StepThree";
import StepFour from "./_components/StepFour";
import StepFive from "./_components/StepFive";
import StepSix from "./_components/StepSix";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/context/UserContext";

const SurveyPage = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [muscle, setMuscleh] = useState<string>("");
  const [bodyFat, setBodyFat] = useState<string>("");
  const [yearOfBirth, setYearOfBirth] = useState<string>("");
  const [exercise, setExercise] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const { user } = useUser() || {};

  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const router = useRouter();
  const supabase = createClient();

  const handleSubmitSurvey = async () => {
    const fetchData = async () => {
      try {
        const res = await axios.post("api/gpt", {
          user_id: user?.user_id,
          height,
          weight,
          muscle,
          bodyFat,
          yearOfBirth,
          exercise,
          gender,
          purpose,
          allergies,
        });
        console.log(res.data);
      } catch (error) {
        console.log("gpt data error", error);
      }
    };

    if (!user?.user_id) {
      return console.log("로딩중");
    }

    const { data: surveyData, error } = await supabase.from("survey").insert({
      user_id: user.user_id,
      height,
      weight,
      muscle,
      body_fat: bodyFat,
      year_of_birth: yearOfBirth,
      exercise,
      gender,
      purpose,
      allergies,
    });

    if (error) {
      console.log("설문조사 에러 =>", error);
    } else {
      console.log("설문조사 성공 =>", surveyData);
    }
    router.push("/mydiet");

    fetchData();
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
