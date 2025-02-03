import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomTemplate } from "@/Constant";
import { CustomTemplateData, OscarWinnerData } from "@/Data/Form&Table/Form";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const CustomTemplates = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={CustomTemplate} span={CustomTemplateData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div id="custom-templates">
            <Form className="theme-form">
              <div className="w-100">
                <Typeahead options={OscarWinnerData} placeholder="Oscar winners" id="Custom Templates" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomTemplates;
