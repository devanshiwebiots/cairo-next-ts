import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { CairoProfilesForNewEmployees, Href, IOTDeveloper, JustifyTab, UxDesigner, WebDesigner } from "@/Constant";
import { JustifyTabsData } from "@/Data/Uikits/Tabs";
import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from "reactstrap";
import { JustifytabContent } from "./JustifytabContent";

const JustifyTabs = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl="6">
      <Card>
        <CommonUIkitsComponent title={JustifyTab} span={JustifyTabsData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p>
              <em className="txt-danger">{CairoProfilesForNewEmployees}</em>
            </p>
            <Nav pills className="nav-warning">
              <NavItem>
                <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                  {WebDesigner}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                  {UxDesigner}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                  {IOTDeveloper}
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <JustifytabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabs;
