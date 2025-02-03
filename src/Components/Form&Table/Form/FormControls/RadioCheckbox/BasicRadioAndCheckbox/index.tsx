import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicRadioAndCheckboxs } from "@/Constant";
import { BasicRadioCheckboxData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import SimpleCheckboxs from "./SimpleCheckboxs";
import SimpleRadio from "./SimpleRadio";

const BasicRadioAndCheckbox = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicRadioAndCheckboxs} span={BasicRadioCheckboxData} headClass="pb-0" spanClass="f-m-light mt-1" />
        <CardBody className="mb-4">
          <Row className="g-3">
            <SimpleCheckboxs />
            <SimpleRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRadioAndCheckbox;
