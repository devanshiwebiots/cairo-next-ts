import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomCheckboxs } from "@/Constant";
import { CustomCheckboxData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderedCheckboxs } from "./BorderedCheckboxs";
import FilledCheckboxs from "./FilledCheckboxs";
import IconCheckboxs from "./IconCheckboxs";

const CustomCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomCheckboxs} span={CustomCheckboxData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckboxs />
            <IconCheckboxs />
            <FilledCheckboxs />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckbox;
