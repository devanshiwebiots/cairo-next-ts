import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderRights, Emailaddress, EmailAddress } from "@/Constant";
import { BorderRightData } from "@/Data/BonusUi/CreativeCards";
import React from "react";
import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";

const BorderRight = () => {
  return (
    <Col md="6" className="col-12">
      <Card className=" common-hover">
        <CommonCardHeader title={BorderRights} span={BorderRightData} spanClass="mt-1 mb-0" headClass="pb-0 border-r-secondary" />
        <CardBody>
          <p>
            You can design your creative card by taking only the <strong>border-r-secondary</strong> class. If you want to use other colors like this: <strong>border-r-*</strong>
          </p>
          <Form>
            <Label>{Emailaddress}</Label>
            <Input type="email" placeholder="youremail@gmail.com"/>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
