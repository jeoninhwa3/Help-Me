interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const progressPercentage = Math.round((step / totalSteps) * 100);

  return (
    <div className="max-w-[600px] mx-auto w-full bg-gray200 rounded-md">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`bg-primary500 h-2 rounded-md`}
      />
    </div>
  );
};

export default ProgressBar;
