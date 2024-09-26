import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepSixProps {
  prevStep: () => void;
  allergies: string[];
  setAllergies: (value: string[]) => void;
  handleSubmitSurvey: () => void;
}

const StepSix = ({
  prevStep,
  allergies,
  setAllergies,
  handleSubmitSurvey,
}: StepSixProps) => {
  const router = useRouter();

  const handleAllergiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllergies([...allergies, e.target.value]);
    // router.push("/mydiet");
  };

  return (
    <div className="text-center">
      <div className="mt-7 mb-5">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          알레르기가 있다면 모두 체크해 주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          선택한 재료는 빼고 메뉴를 추천해 드려요
        </p>

        <div className="flex gap-4">
          <input
            id="allergies1"
            type="checkbox"
            value="땅콩"
            checked={allergies.includes("땅콩")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies1">땅콩</label>

          <input
            id="allergies2"
            type="checkbox"
            value="복숭아"
            checked={allergies.includes("복숭아")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies2">복숭아</label>

          <input
            id="allergies3"
            type="checkbox"
            value="우유"
            checked={allergies.includes("우유")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies3">우유</label>
        </div>

        <div className="flex gap-4 mt-4">
          <input
            id="allergies4"
            type="checkbox"
            value="갑각류"
            checked={allergies.includes("갑각류")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies4">갑각류</label>

          <input
            id="allergies5"
            type="checkbox"
            value="새우"
            checked={allergies.includes("새우")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies5">새우</label>

          <input
            id="allergies6"
            type="checkbox"
            value="돼지고기"
            checked={allergies.includes("돼지고기")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies6">돼지고기</label>
        </div>

        <div className="flex gap-4 mt-4">
          <input
            id="allergies7"
            type="checkbox"
            value="달걀"
            checked={allergies.includes("달걀")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies7">달걀</label>

          <input
            id="allergies8"
            type="checkbox"
            value="견과류"
            checked={allergies.includes("견과류")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies8">견과류</label>

          <input
            id="allergies9"
            type="checkbox"
            value="없음"
            checked={allergies.includes("없음")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies9">없음</label>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          buttonName="이전"
          theme="borderGrey"
          onClick={prevStep}
        ></Button>
        <Button
          buttonName="다음으로"
          theme={allergies ? "primary" : "grey"}
          disabled={allergies ? false : true}
          onClick={handleSubmitSurvey}
        ></Button>
      </div>
    </div>
  );
};

export default StepSix;
