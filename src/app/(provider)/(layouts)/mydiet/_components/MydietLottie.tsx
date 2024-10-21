import Lottie from "lottie-react";
import mydiet from "@/assets/lottie/mydietLoading.json";

const MydietLottie = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: mydiet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      animationData={options.animationData}
      loop={options.loop}
      autoplay={options.autoplay}
      style={{ height: 160, width: 160 }}
    />
  );
};

export default MydietLottie;
