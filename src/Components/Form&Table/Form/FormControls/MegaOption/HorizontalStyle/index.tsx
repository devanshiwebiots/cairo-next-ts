import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalStyles } from "@/Constant";
import { HorizontalStyleData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../DefaultStyle/Common/CommonCardFooter";
import HorizontalStyleForm from "./HorizontalStyleForm";

const HorizontalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalStyles} span={HorizontalStyleData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" btn1Class="m-r-15" color2="light" />
      </Card>
    </Col>
  );
};

export default HorizontalStyle;
