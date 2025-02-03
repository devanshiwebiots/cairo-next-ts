import { Country, EnterYourQueries, OtherNotes, RememberMeForNextTime, State, ZipCode } from "@/Constant";
import { CountryList } from "@/Data/Form&Table/Form";
import { BillingUserDetailsProp } from "@/Types/FormType";
import React, { Fragment } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const BillingUserDetail2: React.FC<BillingUserDetailsProp> = ({ studentValidationForm, getUserData }) => {
  const { country, state, zip, otherNotes } = studentValidationForm;

  return (
    <Fragment>
      <Col sm="4" className="mb-3">
        <Label check className="mb-1">
          {Country}
        </Label>
        <Input type="select" value={country} onChange={getUserData} name="country">
          <option value={""}>Select Country</option>
          {CountryList.map((data, i) => (
            <option value={data} key={i}>
              {data}
            </option>
          ))}
        </Input>
      </Col>
      <Col sm="4" className="mb-3">
        <Label check className="mb-1">
          {State}
        </Label>
        <Input value={state} onChange={getUserData} name="state" type="text" placeholder="Enter state" />
      </Col>
      <Col sm="4" className="mb-3">
        <Label check>{ZipCode}</Label>
        <Input value={zip} onChange={getUserData} type="text" name="zip" />
      </Col>
      <Col xs="12" className="mb-3">
        <FormGroup check>
          <Input name="rememberNextTime" onChange={getUserData} id="invalid-check-wizard" type="checkbox" required />
          <Label className="mb-0 d-block" htmlFor="invalid-check-wizard" check>
            {RememberMeForNextTime}
          </Label>
        </FormGroup>
      </Col>
      <Col xs="12" className="mb-3">
        <Label htmlFor="exampleFormControlTextarea-01" check>
          {OtherNotes}
        </Label>
        <Input value={otherNotes} onChange={getUserData} type="textarea" name="otherNotes" rows={3} placeholder={EnterYourQueries} />
      </Col>
    </Fragment>
  );
};

export default BillingUserDetail2;
