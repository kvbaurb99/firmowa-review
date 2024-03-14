import React from "react";

type Props = {
  isLeft?: boolean;
  isColor?: boolean;
  handleClick?: () => void;
};

export default function Arrow({ isLeft, handleClick, isColor }: Props) {
  return (
    <svg
      width="51"
      height="23"
      viewBox="0 0 51 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className={`${isLeft ? "rotate-180" : ""}  ${
        isColor ? " fill-[#255FFF]" : "fill-[#255FFF]/20"
      } duration-300 cursor-pointer`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.2058 0.869286C39.6229 0.280674 38.6731 0.276081 38.0845 0.859028C37.4959 1.44197 37.4913 2.39171 38.0743 2.98032L44.953 9.92591L1.5 9.9259C0.671573 9.9259 0 10.5975 0 11.4259C0 12.2543 0.671573 12.9259 1.5 12.9259L44.9532 12.9259L38.0743 19.8717C37.4913 20.4603 37.4959 21.41 38.0845 21.993C38.6731 22.5759 39.6229 22.5713 40.2058 21.9827L49.6043 12.4929C49.8795 12.221 50.05 11.8434 50.05 11.4259C50.05 11.0048 49.8765 10.6243 49.5971 10.3518L40.2058 0.869286Z"
      />
    </svg>
  );
}
