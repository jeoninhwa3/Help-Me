import Button from "@/components/Button";
import { useState } from "react";

interface StepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo = ({ nextStep, prevStep }: StepTwoProps) => {
  const [muscle, setMuscleh] = useState<string>("");
  const [bodyFat, setBodyFat] = useState<string>("");

  return (
    <div className="text-center">
      <div className="flex flex-col mt-7">
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
          onChange={(e) => setMuscleh(e.target.value)}
        />

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
          onChange={(e) => setBodyFat(e.target.value)}
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
          theme={muscle && bodyFat ? "primary" : "grey"}
          disabled={muscle && bodyFat ? false : true}
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepTwo;
