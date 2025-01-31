import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { OffsetClassData, OffsetHeading, OffsetValueData } from "@/Constant";
import { offsetList, OffsetSpan } from "@/Data/Uikits/Grid";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "./Common/CommonCardFooter";

const Offset = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonUIkitsComponent title={OffsetHeading} span={OffsetSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="grid-showcase">
            <Row className="g-2">
              <Col sm="5" xs="4" className="offset-sm-3 offset-2">
                <span>col-5 offset-sm-3</span>
              </Col>
              {offsetList.map(({ smallSize, extraSmallSize, className, item }, index) => (
                <Col sm={smallSize} xs={extraSmallSize} className={className} key={index}>
                  <span>{item}</span>
                </Col>
              ))}
            </Row>
          </div>
        </CardBody>
        <GridCommonCardFooter className={OffsetClassData} valueClass={OffsetValueData}/>
      </Card>
    </Col>
  );
};

export default Offset;
