import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FontWeightt, FontWeightTitle } from "@/Constant";
import { FontWeightData } from "@/Data/Uikits/typography";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const FontWeight = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={FontWeightt} span={FontWeightData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="d-flex flex-column gap-3">
          <h1 className="f-w-700 m-0">
            {FontWeightTitle} 1 Using<code> fw700</code>
          </h1>
          <h2 className="f-w-600">
            {FontWeightTitle} 2 Using<code> fw600</code>
          </h2>
          <h3 className="f-w-500">
            {FontWeightTitle} 3 Using<code> fw500</code>
          </h3>
          <h4 className="f-w-400">
            {FontWeightTitle} 4 Using<code> fw400</code>
          </h4>
          <h5 className="f-w-300">
            {FontWeightTitle} 5 Using<code> fw300</code>
          </h5>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeight;
