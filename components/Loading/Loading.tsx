import React from "react";
import { BounceLoader } from "react-spinners";
import { LengthType } from "react-spinners/helpers/props";

interface LoadingProps {
  color: string;
  size: LengthType;
}

const Loading: React.FC<LoadingProps> = ({ color, size }) => {
  return <BounceLoader color={color} size={size} />;
};

export default Loading;
