import { BussinessVerticalData } from "@/Data/Form& Table/Form";
import { BusinessFormCommonProps } from "@/Types/FormType";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavComponent: React.FC<BusinessFormCommonProps> = ({ callbackActive, activeTab }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) callbackActive(id);
  };
  return (
    <Nav className="nav-pills horizontal-options">
      {BussinessVerticalData.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={`${activeTab === i + 1 ? "active" : ""}`} onClick={() => handleTab(data.activeTab)}>
            <div className="horizontal-wizard">
              <div className="stroke-icon-wizard">
                <span>{i + 1}</span>
              </div>
              <div className="horizontal-wizard-content business-wizard">
                <h6>{data.title}</h6>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
