import Button from "@/components/Button";
import React, { useState } from "react";

interface StepThreeProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

const StepThree = ({ step, nextStep, prevStep }: StepThreeProps) => {
  const [yearOfBirth, setYearOfBirth] = useState<string>();
  const [exercise, setExercise] = useState<string>();

  return (
    <div className="text-center">
      <div className="flex flex-col mt-7">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          출생연도와 운동량을 입력해 주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          출생연도·운동량에 따라 권장 칼로리 섭취량이 달라집니다
        </p>

        <label
          className="text-gray900 text-sm text-left"
          htmlFor="year_of_birth"
        >
          출생연도
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="number"
          id="year_of_birth"
          placeholder="출생연도 4자리를 입력해주세요."
          value={yearOfBirth}
          onChange={(e) => setYearOfBirth(e.target.value)}
        />

        <label
          className="mt-6 text-gray900 text-sm text-left"
          htmlFor="exercise"
        >
          운동량
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="text"
          id="exercise"
          placeholder="일주일동안의 운동량을 작성해 주세요."
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>

      <div className="flex gap-4 mt-10">
        <Button
          buttonName="이전"
          theme="borderGrey"
          onClick={prevStep}
        ></Button>
        <Button
          buttonName="다음으로"
          theme={yearOfBirth && exercise ? "primary" : "grey"}
          disabled={yearOfBirth && exercise ? false : true}
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepThree;
