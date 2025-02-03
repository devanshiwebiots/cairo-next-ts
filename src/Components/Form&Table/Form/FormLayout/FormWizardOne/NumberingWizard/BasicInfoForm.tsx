import { AgreeToTermsAndConditions, ConfirmPassword, Email, EnterConfirmPassword, EnterPassword, EnterYourFirstName, FirstName, CairoEmail, Password } from "@/Constant";
import { NumberingWizardPropsType } from '@/Types/FormType'
import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const BasicInfoForm: React.FC<NumberingWizardPropsType> = ({ basicInputFormValue, getUserData}) => {
    const { email, firstName, password, confirmPassword, agreeTerms } = basicInputFormValue;

  return (
    <Form className="stepper-one needs-validation custom-input" noValidate>
      <Row>
        <Col sm="6">
          <FormGroup>
            <Label check className="mb-1">
              {Email}
              <span className="txt-danger">*</span>
            </Label>
            <Input onChange={getUserData} value={email} name="email" type="email" placeholder={CairoEmail} />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check className="mb-1">
              {FirstName}
              <span className="txt-danger">*</span>
            </Label>
            <Input onChange={getUserData} value={firstName} name="firstName" type="text" placeholder={EnterYourFirstName} />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check className="mb-1">
              {Password}
              <span className="txt-danger">*</span>
            </Label>
            <Input onChange={getUserData} value={password} name="password" type="password" placeholder={EnterPassword} autoComplete="off" />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check className="mb-1">
              {ConfirmPassword}
              <span className="txt-danger">*</span>
            </Label>
            <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" type="password" placeholder={EnterConfirmPassword} autoComplete="off" />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input id="inputCheckWizard" name="agreeTerms" onChange={getUserData} type="checkbox" checked={agreeTerms} required />
            <Label className="mb-0" htmlFor="inputCheckWizard" check>
              {AgreeToTermsAndConditions}
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default BasicInfoForm
