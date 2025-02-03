import { Address, ContactNumber, Email, EnterMobileNumber, EnterYourFirstName, EnterYourLastName, FirstName, LastName, CairoEmail } from "@/Constant";
import { BillingUserDetailsProp } from '@/Types/FormType'
import React, { Fragment } from 'react'
import { Col, Input, Label } from 'reactstrap';

const BillingUserDetails1: React.FC<BillingUserDetailsProp> = ({studentValidationForm, getUserData}) => {
  const { firstName, lastName, contact, email, address } = studentValidationForm;

  return (
    <Fragment>
      <Col sm="6" className="mb-3">
        <Label check className="mb-1">
          {FirstName}
          <span className="txt-danger">*</span>
        </Label>
        <Input value={firstName} onChange={getUserData} name="firstName" type="text" placeholder={EnterYourFirstName} />
      </Col>
      <Col sm="6" className="mb-3">
        <Label check className="mb-1">
          {LastName}
          <span className="txt-danger">*</span>
        </Label>
        <Input value={lastName} onChange={getUserData} name="lastName" type="text" placeholder={EnterYourLastName} />
      </Col>
      <Col sm="6" className="mb-3">
        <Label check className="mb-1">
          {ContactNumber}
        </Label>
        <Input value={contact} onChange={getUserData} name="contact" type="number" placeholder={EnterMobileNumber} />
      </Col>
      <Col sm="6" className="mb-3">
        <Label check className="mb-1">
          {Email}
          <span className="txt-danger">*</span>
        </Label>
        <Input value={email} onChange={getUserData} name="email" type="email" placeholder={CairoEmail} />
      </Col>
      <Col sm="12" className="mb-3">
        <Label check className="mb-1">
          {Address}
        </Label>
        <Input value={address} onChange={getUserData} name="address" type="textarea" />
      </Col>
    </Fragment>
  );
}

export default BillingUserDetails1
