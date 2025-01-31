import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { SimpleVerticalDividerr } from "@/Constant";
import { SimpleHorizontalDividerData, SimpleVerticalDividerSpan } from "@/Data/Uikits/Divider";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const SimpleVerticalDivider = () => {
  return (
    <Col md="6">
      <Card>
        <CommonUIkitsComponent title={SimpleVerticalDividerr} span={SimpleVerticalDividerSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="main-divider">
          <div className="common-align">
            {SimpleHorizontalDividerData.map((data, i) => (
              <div className={`vr bg-${data.color}`} key={i}/>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleVerticalDivider;
