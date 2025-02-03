import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedButton } from "@/Constant";
import { AnimatedButtonData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import AnimatedCheckbox from "./AnimatedCheckbox";
import AnimatedRadio from "./AnimatedRadio";

const AnimatedButtons = () => {
  return (
    <Col sm="6">
      <Card className="height-equal custom-animated-button">
        <CommonCardHeader title={AnimatedButton} span={AnimatedButtonData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Row className="g-3">
            <AnimatedRadio />
            <AnimatedCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
