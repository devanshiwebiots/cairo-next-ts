import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { PillOutlineVariationsCart } from "@/Constant";
import { BadgesOutlineContextualData, PillOutlineVariationsSpan, PillsContext } from "@/Data/Uikits/TagAndPills";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const PillOutlineVariations = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonUIkitsComponent title={PillOutlineVariationsCart} span={PillOutlineVariationsSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="badge-spacing">
            {BadgesOutlineContextualData.map(({ color, text }, index) => (
              <div className={`badge rounded-pill txt-${color} badge-b-${color}`} key={index}>
                {text}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillOutlineVariations;
