import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CheckboxesAndRadio } from "@/Constant";
import { CheckAndRadioData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CheckboxesAndRadio} span={CheckAndRadioData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
          <InputGroup>
            <InputGroupText>
              <Input className="mb-0" type="checkbox" />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="radio" defaultChecked />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CheckboxesAndRadios;
