import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { AnimatedProgressBar } from "@/Constant";
import { AnimatedProgressBarsData, AnimatedProgressBarsSpan } from "@/Data/Uikits/Progress";
import React from "react";
import { Card, CardBody, Col, Progress } from "reactstrap";

const AnimatedProgressBars = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonUIkitsComponent title={AnimatedProgressBar} span={AnimatedProgressBarsSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="progress-showcase">
          {AnimatedProgressBarsData.map(({ value, color }, index) => (
            <Progress value={value} color={color} animated striped key={index} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedProgressBars;
