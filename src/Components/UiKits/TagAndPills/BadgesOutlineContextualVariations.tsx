import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { BadgesOutlineContextualVariationCart } from "@/Constant";
import { BadgesOutlineContextualData, BadgeSpan } from "@/Data/Uikits/TagAndPills";
import React from "react";
import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";

const BadgesOutlineContextualVariations = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonUIkitsComponent title={BadgesOutlineContextualVariationCart} span={BadgeSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
        <div className="badge-spacing">
         {BadgesOutlineContextualData.map(({color, text}, index) => (
            <div className={` badge badge-b-${color} txt-${color}`} key={index}>{text}</div>
         ))}
        </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesOutlineContextualVariations;
