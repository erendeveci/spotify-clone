import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
     flex-center
     transition
     opacity-0
     rounded-full
     bg-green-500
     drop-shadow-lg
     p-3
     translate
     translate-y-1/4
     group-hover:opacity-100
     group-hover:translate-y-0
     hover:scale-100
    "
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
