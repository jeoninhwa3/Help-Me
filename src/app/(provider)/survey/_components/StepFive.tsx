import Button from "@/components/Button";
import { useState } from "react";

interface StepFiveProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepFive = ({ nextStep, prevStep }: StepFiveProps) => {
  const [purpose, setPurpose] = useState<string>();

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurpose(e.target.value);
  };

  return (
    <div className="text-center">
      <div className="mt-7 mb-5">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          식단을 통해 <br /> 이루고 싶은 목표를 알려주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          선택한 목표에 가장 최적화된 식단과 운동을 추천해 드려요
        </p>

        <input
          id="purpose1"
          type="radio"
          value="체중을 감량하고 싶어요"
          checked={purpose === "체중을 감량하고 싶어요"}
          onChange={handlePurposeChange}
        />
        <label htmlFor="purpose1">체중을 감량하고 싶어요</label>

        <input
          id="purpose2"
          type="radio"
          value="체중을 증량하고 싶어요"
          checked={purpose === "체중을 증량하고 싶어요"}
          onChange={handlePurposeChange}
        />
        <label htmlFor="purpose2" className="mt-4">
          체중을 증량하고 싶어요
        </label>

        <input
          id="purpose3"
          type="radio"
          value="건강한 식사를 하고 싶어요"
          checked={purpose === "건강한 식사를 하고 싶어요"}
          onChange={handlePurposeChange}
        />
        <label htmlFor="purpose3" className="mt-4">
          건강한 식사를 하고 싶어요
        </label>
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          buttonName="이전"
          theme="borderGrey"
          onClick={prevStep}
        ></Button>
        <Button
          buttonName="다음으로"
          theme={purpose ? "primary" : "grey"}
          disabled={purpose ? false : true}
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepFive;
