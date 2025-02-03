import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BloodHoundHeading } from "@/Constant";
import { BloodHoundData, StateOfUsa } from "@/Data/Form&Table/Form";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const BloodHound = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BloodHoundHeading} span={BloodHoundData} spanClass="mb-0 mt-1" headClass="pb-0" />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <div className="w-100">
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="bloodhound" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BloodHound;
