import Button from "@/components/Button";
import { useState } from "react";

interface StepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
  muscle: string;
  setMuscleh: (value: string) => void;
  bodyFat: string;
  setBodyFat: (value: string) => void;
}

const StepTwo = ({
  nextStep,
  prevStep,
  muscle,
  setMuscleh,
  bodyFat,
  setBodyFat,
}: StepTwoProps) => {
  const [muscleError, setMuscleError] = useState<string>("");
  const [bodyFatError, setBodyFatError] = useState<string>("");

  const handleMuscle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMuscleh(value);

    if (Number(value) < 0 || Number(value) > 100) {
      setMuscleError("골격근량은 0(kg) 이상 ~ 100(kg) 이하로 작성해 주세요");
    } else {
      setMuscleError("");
    }
  };

  const handleBodyFat = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setBodyFat(value);

    if (Number(value) < 0 || Number(value) > 50) {
      setBodyFatError("체지방률은 0(%) 이상 ~ 50(%) 이하로 작성해 주세요");
    } else {
      setBodyFatError("");
    }
  };

  return (
    <div className="max-w-[400px] mx-auto text-center">
      <div className="flex flex-col mt-7 md:mt-10">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          골격근량과 체지방률을 입력해 주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          근육·지방량에 따라 일일 권장 칼로리 섭취량이 달라집니다
        </p>

        <label className="text-gray900 text-sm text-left" htmlFor="muscle">
          골격근량
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="number"
          id="muscle"
          placeholder="골격근량을 입력해 주세요 (kg 생략)"
          value={muscle}
          onChange={handleMuscle}
        />
        {muscleError && (
          <p className="text-backgroundError mt-1 -mb-3 text-sm text-left">
            {muscleError}
          </p>
        )}

        <label
          className="mt-6 text-gray900 text-sm text-left"
          htmlFor="bodyFat"
        >
          체지방률
        </label>
        <input
          className="mt-1 px-3 py-2 bg-white border border-gray300 border-solid rounded focus:outline-none"
          type="number"
          id="bodyFat"
          placeholder="체지방률을 입력해 주세요 (% 생략)"
          value={bodyFat}
          onChange={handleBodyFat}
        />
        {bodyFatError && (
          <p className="text-backgroundError mt-1 -mb-3 text-sm text-left">
            {bodyFatError}
          </p>
        )}
      </div>

      <div className="flex gap-4 mt-10">
        <Button
          buttonName="이전"
          theme="borderGrey"
          onClick={prevStep}
        ></Button>
        <Button
          buttonName="다음으로"
          theme={
            muscle && bodyFat && muscleError === "" && bodyFatError === ""
              ? "primary"
              : "grey"
          }
          disabled={
            muscle && bodyFat && muscleError === "" && bodyFatError === ""
              ? false
              : true
          }
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepTwo;
