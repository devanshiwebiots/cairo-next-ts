import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicHtmlInputControls } from "@/Constant";
import { BasicHtmlInputControlData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, Col, Form } from "reactstrap";
import BasicHtmlCardBody from "./BasicHtmlCardBody";
import BasicHtmlCardFooter from "./BasicHtmlCardFooter";

const BasicHtmlInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicHtmlInputControls} span={BasicHtmlInputControlData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
          <BasicHtmlCardBody />
          <BasicHtmlCardFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default BasicHtmlInputControl;
