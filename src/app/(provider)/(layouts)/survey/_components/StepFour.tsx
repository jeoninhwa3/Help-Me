import Button from "@/components/Button";

interface StepFourProps {
  nextStep: () => void;
  prevStep: () => void;
  gender: string;
  setGender: (value: string) => void;
}

const StepFour = ({ nextStep, prevStep, gender, setGender }: StepFourProps) => {
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div className="max-w-[400px] mx-auto text-center">
      <div className="mt-7 mb-5 md:mt-10">
        <p className="mb-1 text-gray900 text-xl font-semibold">
          성별을 선택해 주세요
        </p>
        <p className="mb-6 text-gray700 text-sm">
          성별에 따라 일일 권장 칼로리 섭취량이 달라집니다
        </p>

        <input
          id="gender1"
          type="radio"
          value="남자"
          checked={gender === "남자"}
          onChange={handleGenderChange}
        />
        <label htmlFor="gender1" className="cursor-pointer">
          남자
        </label>

        <input
          id="gender2"
          type="radio"
          value="여자"
          checked={gender === "여자"}
          onChange={handleGenderChange}
        />
        <label htmlFor="gender2" className="mt-6 cursor-pointer">
          여자
        </label>
      </div>

      <div className="flex gap-4 mt-10">
        <Button
          buttonName="이전"
          theme="borderGrey"
          onClick={prevStep}
        ></Button>
        <Button
          buttonName="다음으로"
          theme={gender ? "primary" : "grey"}
          disabled={gender ? false : true}
          onClick={nextStep}
        ></Button>
      </div>
    </div>
  );
};

export default StepFour;
