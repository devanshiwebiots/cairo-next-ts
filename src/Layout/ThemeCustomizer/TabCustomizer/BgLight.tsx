import { MixLayoutComponentProp } from "@/Types/ThemeCustomizerTypes";
import React from "react";
import CommonUL from "./CommonUL";

const BgLight: React.FC<MixLayoutComponentProp> = ({ handleCustomizerMix_Background, mixLayout }) => {
  return (
    <li className={`color-layout border-0 ${mixLayout === "dark-sidebar" ? "active" : ""}`} onClick={() => handleCustomizerMix_Background("dark-sidebar")} data-attr="dark-sidebar">
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  );
};

export default BgLight;
