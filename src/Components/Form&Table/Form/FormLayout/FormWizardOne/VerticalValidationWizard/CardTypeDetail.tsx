import { SelectYourPaymentMethod } from "@/Constant";
import { PaymentModeName } from "@/Data/Form&Table/Form";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CardTypeDetail = () => {
  return (
    <Col xxl="6" className="mb-3">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SelectYourPaymentMethod}</h6>
        <div className="radio-form">
          {PaymentModeName.map((data, i) => (
            <FormGroup key={i} check className="mb-3">
              <Input id={`flexRadioDefault${i}`} type="radio" name="paymentMethod" value="visa" />
              <Label htmlFor={`flexRadioDefault${i}`} check>
                {data}
              </Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default CardTypeDetail;
