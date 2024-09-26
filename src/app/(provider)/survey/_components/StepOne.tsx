import Button from "@/components/Button";
import React, { useState } from "react";

interface StepTwoProps {
  nextStep: () => void;
  height: string;
  setHeight: (value: string) => void;
  weight: string;
  setWeight: (value: string) => void;
}

const StepOne = ({
  nextStep,
  height,
  setHeight,
  weight,
  setWeight,
}: StepTwoProps) => {
  return (
    <div className="text-center">
      <div className="flex flex-col mt-7">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          키와 체중을 입력해 주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          키와 체중에 따라 일일 권장 칼로리 섭취량이 달라집니다
        </p>

        <label
          className="text-gray900 text-sm text-left"
          htmlFor="year_of_birth"
        >
          키
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="number"
          id="year_of_birth"
          placeholder="키를 입력해 주세요 (cm 생략)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label
          className="mt-6 text-gray900 text-sm text-left"
          htmlFor="year_of_birth"
        >
          체중
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="number"
          id="year_of_birth"
          placeholder="체중을 입력해 주세요 (kg 생략)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="mt-10">
        <Button
          buttonName="다음으로"
          theme={height && weight ? "primary" : "grey"}
          disabled={height && weight ? false : true}
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepOne;
