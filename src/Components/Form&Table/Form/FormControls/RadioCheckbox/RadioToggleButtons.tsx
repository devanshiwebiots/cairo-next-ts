import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadioChecked, RadioToggleButton } from "@/Constant";
import { RadioToggleData, RadioToggleDataList } from "@/Data/Form& Table/Form";
import React, { Fragment } from "react";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const RadioToggleButtons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RadioToggleButton} span={RadioToggleData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody className="common-flex main-radio-toggle">
          <Input className="btn-check radio-light-secondary" id="option1" type="radio" name="options" defaultChecked />
          <Label className="btn list-light-secondary" htmlFor="option1" check>
            {RadioChecked}
          </Label>
          {RadioToggleDataList.map(({ id, text, disabled }, index) => (
            <Fragment key={index}>
              <Input className="btn-check radio-light-secondary" id={id} type="radio" name="options" disabled={disabled} />
              <Label className="btn list-light-secondary" htmlFor={id} check>
                {text}
              </Label>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioToggleButtons;
