import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { EnablBehaviors } from "@/Constant";
import { EnableFlexBehaviorsSpan } from "@/Data/Uikits/Grid";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const EnableFlexBehaviors = () => {
  return (
    <Col xl="5">
      <Card className="height-equal">
        <CommonUIkitsComponent title={EnablBehaviors} span={EnableFlexBehaviorsSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="flex-behaviors">
            <div className="d-flex p-2 c-light">I&apos;m a flexbox container!</div>
            <div className="d-inline-flex p-2 c-light">I&apos;m an inline flexbox container!</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EnableFlexBehaviors;
