import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultCheckboxs } from "@/Constant";
import { DefaultCheckBoxData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DefaultCheckBoxDataa from "./DefaultCheckBoxData";
import DefaultChecks from "./DefaultChecks";
import Indeterminate from "./Indeterminate";

const DefaultCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DefaultCheckboxs} span={DefaultCheckBoxData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <DefaultChecks />
            <DefaultCheckBoxDataa />
            <Indeterminate />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCheckbox;
