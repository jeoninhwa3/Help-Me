"use client";

import { useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";
import StepThree from "./_components/StepThree";
import StepFour from "./_components/StepFour";
import StepFive from "./_components/StepFive";
import StepSix from "./_components/StepSix";

const SurveyPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="pt-10">
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <StepFour nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <StepFive nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <StepSix prevStep={prevStep} />}
    </div>
  );
};

export default SurveyPage;
