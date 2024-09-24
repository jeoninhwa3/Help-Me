"use client";

import { useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";

const SurveyPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="pt-10">
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && (
        <StepTwo step={step} nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
};

export default SurveyPage;
