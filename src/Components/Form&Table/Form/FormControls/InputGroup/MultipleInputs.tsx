import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FirstAndLastName, MultipleInput } from "@/Constant";
import { MultipleInputData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

const MultipleInputs = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={MultipleInput} span={MultipleInputData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody className="common-flex main-custom-form card-wrapper">
          <InputGroup>
            <InputGroupText>{FirstAndLastName}</InputGroupText>
            <Input type="text" />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>{"$"}</InputGroupText>
            <InputGroupText>{"0.00"}</InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <InputGroupText>{"$"}</InputGroupText>
            <InputGroupText>{"0.00"}</InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleInputs;
