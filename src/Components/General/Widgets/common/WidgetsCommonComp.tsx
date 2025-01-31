import SVG from "@/CommonComponent/SVG";
import { CommonDropdown } from "@/Components/General/Dashboard/common/CommonDropdown";
import { DashboardCommonHeaderType } from "@/Types/DashboardType";
import React from "react";
import { CardHeader } from "reactstrap";

const WidgetsCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title ,tagClass, dropDownFalse,children}) => {
  return (
    <CardHeader className="card-no-border pb-0 d-flex justify-content-between">
      <h4 className={tagClass ? tagClass : ""}>{title} <span className="f-14 font-primary f-w-500 ms-2">
        <SVG iconId="user-visitor" className="svg-fill mb-2"/>(+2.8)</span></h4>
      {!dropDownFalse ? <CommonDropdown/>  : null}
      {children}
    </CardHeader>
  );
};

export default WidgetsCommonHeader;
