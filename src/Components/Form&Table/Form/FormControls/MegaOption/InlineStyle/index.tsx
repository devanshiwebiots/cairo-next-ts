import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InlineStyles } from "@/Constant";
import { InlineStyeData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../DefaultStyle/Common/CommonCardFooter";
import InlineStyleForm from "./InlineStyleForm";

const InlineStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineStyles} span={InlineStyeData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning" />
      </Card>
    </Col>
  );
};

export default InlineStyle;
