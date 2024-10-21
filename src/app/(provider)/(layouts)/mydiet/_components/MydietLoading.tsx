import React, { useEffect, useState } from "react";
import MydietLottie from "./MydietLottie";

const MydietLoading = () => {
  const [message, setMessage] = useState<string>("");

  const messages: string[] = [
    "목표 달성을 위한 식단 생성중...",
    "효율적인 운동 플랜 생성중..",
    "TIP! 균형 잡힌 식단과 매일 30분 운동이 \n건강에 변화를 줄 거예요",
    "TIP! 충분한 수분 섭취는 신체 기능을 \n원활하게 하고 피부 건강에도 도움이 됩니다",
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <MydietLottie />
      <div className="mt-8 text-center">
        <p className="text-2xl font-medium">
          AI가 나만을 위한 맞춤 식단과 <br />
          운동을 깊게 고민하고 있어요!
        </p>
        <p className="h-16 text-lg text-[#404145] mt-6 mb-4">
          {message.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index < message.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MydietLoading;
