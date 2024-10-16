import Button from "@/components/Button";

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
  const handleAllergiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target as HTMLInputElement;

    if (value === "없음" && checked) {
      setAllergies(["없음"]);
    } else if (value === "없음" && !checked) {
      setAllergies(allergies.filter((item) => item !== "없음"));
    } else if (checked) {
      setAllergies([...allergies.filter((item) => item !== "없음"), value]);
    } else {
      setAllergies(allergies.filter((item) => item !== value));
    }
  };

  return (
    <div className="max-w-[400px] mx-auto text-center">
      <div className="mt-7 mb-5 md:mt-10">
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
          <label htmlFor="allergies1" className="cursor-pointer">
            땅콩
          </label>

          <input
            id="allergies2"
            type="checkbox"
            value="복숭아"
            checked={allergies.includes("복숭아")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies2" className="cursor-pointer">
            복숭아
          </label>

          <input
            id="allergies3"
            type="checkbox"
            value="우유"
            checked={allergies.includes("우유")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies3" className="cursor-pointer">
            우유
          </label>
        </div>

        <div className="flex gap-4 mt-4">
          <input
            id="allergies4"
            type="checkbox"
            value="갑각류"
            checked={allergies.includes("갑각류")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies4" className="cursor-pointer">
            갑각류
          </label>

          <input
            id="allergies5"
            type="checkbox"
            value="새우"
            checked={allergies.includes("새우")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies5" className="cursor-pointer">
            새우
          </label>

          <input
            id="allergies6"
            type="checkbox"
            value="돼지고기"
            checked={allergies.includes("돼지고기")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies6" className="cursor-pointer">
            돼지고기
          </label>
        </div>

        <div className="flex gap-4 mt-4">
          <input
            id="allergies7"
            type="checkbox"
            value="달걀"
            checked={allergies.includes("달걀")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies7" className="cursor-pointer">
            달걀
          </label>

          <input
            id="allergies8"
            type="checkbox"
            value="견과류"
            checked={allergies.includes("견과류")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies8" className="cursor-pointer">
            견과류
          </label>

          <input
            id="allergies9"
            type="checkbox"
            value="없음"
            checked={allergies.includes("없음")}
            onChange={handleAllergiesChange}
          />
          <label htmlFor="allergies9" className="cursor-pointer">
            없음
          </label>
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
