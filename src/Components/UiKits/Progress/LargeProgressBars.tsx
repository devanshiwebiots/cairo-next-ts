import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { LargeProgressBar } from "@/Constant";
import { LargeProgressBarsData, LargeProgressData } from "@/Data/Uikits/Progress";
import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const LargeProgressBars = () => {
  return (
    <Col xl="6">
      <Card style={{minHeight:'264.406px'}}>
        <CommonUIkitsComponent title={LargeProgressBar} span={LargeProgressBarsData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className=" progress-showcase">
          <Row>
            <Col>
              {LargeProgressData.map(({ color, value, text }, index) => (
                <Progress color={color} value={value} className="lg-progress-bar" key={index}>
                  {text}
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LargeProgressBars;
