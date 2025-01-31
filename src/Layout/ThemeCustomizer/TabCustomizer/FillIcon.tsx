import { Fill } from "@/Constant";
import { SidebarIconProp } from "@/Types/ThemeCustomizerTypes";
import React from "react";
import { Badge } from "reactstrap";
import CommonUL from "./CommonUL";

const FillIcon: React.FC<SidebarIconProp> = ({ handleSideBarIconType, sideBarIconType }) => {
  return (
    <li data-attr="fill-svg" className={`border-0 ${sideBarIconType === "fill" ? "active" : ""}`} onClick={() => handleSideBarIconType("fill")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badge color="primary">{Fill}</Badge>
      </div>
    </li>
  );
};

export default FillIcon;
