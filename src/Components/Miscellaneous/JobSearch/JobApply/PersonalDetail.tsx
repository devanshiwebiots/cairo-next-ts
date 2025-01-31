import { EmailJob, EmailJobPlaceholder, FullNameJob, FullNameJobPlaceholder, PasswordJob, PasswordJobPlaceholder, PhoneNumberJob, PhoneNumberJobPlaceholder, RepeatPasswordJob, RepeatPasswordJobPlaceholder } from "@/Constant";
import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import PersonalDetailRow from "./PersonalDetailRow";

const PersonalDetail = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col>
          <FormGroup>
            <Label check>
              {FullNameJob}:<span className="font-danger">*</span>
            </Label>
            <Input type="text" placeholder={FullNameJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>
              {EmailJob}:<span className="font-danger">*</span>
            </Label>
            <Input type="email" placeholder={EmailJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>
              {PasswordJob}:<span className="font-danger">*</span>
            </Label>
            <Input type="password" placeholder={PasswordJobPlaceholder} autoComplete="off"/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
          <Col>
            <FormGroup>
              <Label check>{RepeatPasswordJob}:<span className="font-danger">*</span></Label>
              <Input type="password" placeholder={RepeatPasswordJobPlaceholder} autoComplete="off"/>
            </FormGroup>
          </Col>
        </Row>
      <PersonalDetailRow />
      <Row>
          <Col>
            <FormGroup>
              <Label check>{PhoneNumberJob}:</Label>
              <Input type="number" placeholder={PhoneNumberJobPlaceholder}/>
            </FormGroup>
          </Col>
        </Row>
    </Form>
  );
};

export default PersonalDetail;
