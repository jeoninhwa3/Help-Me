interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray200 rounded-md">
      <div
        className={`w-[${progressPercentage}%] bg-primary500 h-2 rounded-md`}
      />
    </div>
  );
};

export default ProgressBar;
