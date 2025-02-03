import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTypeaheads } from "@/Constant";
import { BasicTypeHeadData, StateOfUsa } from "@/Data/Form&Table/Form";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const BasicTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BasicTypeaheads} span={BasicTypeHeadData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div className="w-100">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="Basic TypeAhead" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTypeAhead;
