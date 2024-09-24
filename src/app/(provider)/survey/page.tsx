"use client";

import { useState } from "react";
import ProgressBar from "./_components/ProgressBar";
import StepOne from "./_components/StepOne";

const SurveyPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="pt-10">
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && <StepOne nextStep={nextStep} />}
    </div>
  );
};

export default SurveyPage;
