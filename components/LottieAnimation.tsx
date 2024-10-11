import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../public/Lottie-main.json";

export default function LottieAnimation() {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie loop animationData={lottieJson} play />
    </div>
  );
}