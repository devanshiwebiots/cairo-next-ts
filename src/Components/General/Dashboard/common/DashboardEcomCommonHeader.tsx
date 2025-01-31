import { DashboardCommonHeaderType } from "@/Types/DashboardType";
import React, { useState } from "react";
import { CardHeader, Input, Label } from "reactstrap";
import { CommonDropdown } from "./CommonDropdown";

const DashboardEcomCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title, tagClass, dropDownFalse, children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <CardHeader className="card-no-border pb-0 d-flex justify-content-between align-items-center">
      <h4 className={tagClass ? tagClass : ""}>{title}</h4>
      <div className="d-flex align-items-center gap-2">
        <Label for="search-input" className="mb-0 pt-1 me-2">
          Search:
        </Label>
        <Input type="text" label="Search" value={searchTerm} onChange={handleSearchChange} className="search-input " style={{ width: "150px", height: "30px", borderRadius: "6px" }} />
        {!dropDownFalse ? <CommonDropdown /> : null}
      </div>
      {children}
    </CardHeader>
  );
};

export default DashboardEcomCommonHeader;
