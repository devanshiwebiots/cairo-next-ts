import { RTLBadges } from "@/Constant";
import { LtrDataType } from "@/Types/ThemeCustomizerTypes";
import React from "react";
import { Badge } from "reactstrap";
import CommonUL from "./CommonUL";

const RTL: React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`${layout_type === "rtl" ? "active" : ""}`} onClick={() => handleLayout("rtl")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-light body">
            <Badge color="primary">{RTLBadges}</Badge>
          </li>
          <li className="bg-light sidebar"></li>
        </ul>
      </div>
    </li>
  );
};

export default RTL;
