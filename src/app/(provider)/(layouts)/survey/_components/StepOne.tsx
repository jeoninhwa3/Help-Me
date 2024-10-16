import Button from "@/components/Button";
import React, { useState } from "react";

interface StepOneProps {
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
}: StepOneProps) => {
  const [heightError, setHeightError] = useState<string>("");
  const [weightError, setWeightError] = useState<string>("");

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setHeight(value);

    if (Number(value) < 100 || Number(value) > 200) {
      setHeightError("키는 100(cm) 이상 ~ 200(cm) 이하로 작성해 주세요");
    } else {
      setHeightError("");
    }
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setWeight(value);
    if (Number(value) < 30 || Number(value) > 150) {
      setWeightError("체중은 30(kg) 이상 ~ 150(kg) 이하로 작성해 주세요");
    } else {
      setWeightError("");
    }
  };

  return (
    <div className="max-w-[400px] mx-auto text-center">
      <div className="flex flex-col mt-7 md:mt-10">
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
          onChange={handleHeight}
        />
        {heightError && (
          <p className="text-backgroundError mt-1 -mb-3 text-sm text-left">
            {heightError}
          </p>
        )}

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
          onChange={handleWeight}
        />
        {weightError && (
          <p className="text-backgroundError mt-1 -mb-3 text-sm text-left">
            {weightError}
          </p>
        )}
      </div>

      <div className="mt-10">
        <Button
          buttonName="다음으로"
          theme={
            height && weight && heightError === "" && weightError === ""
              ? "primary"
              : "grey"
          }
          disabled={
            height && weight && heightError === "" && weightError === ""
              ? false
              : true
          }
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepOne;
