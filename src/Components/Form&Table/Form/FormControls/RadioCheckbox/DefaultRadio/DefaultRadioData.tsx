import { DefaultRadioDataList } from "@/Data/Form&Table/Form";
import React, { Fragment } from "react";
import { Col, Input, Label } from "reactstrap";

const DefaultRadioDataa = () => {
  return (
    <Fragment>
      {DefaultRadioDataList.map(({ title, span, className }, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{title}</h6>
            {span.map(({ id, label, defaultChecked, disabled }, index) => (
              <div className={`form-check ${className}`} key={index}>
                <Input id={id} type="radio" name="flexRadioDefault" defaultChecked={defaultChecked} disabled={disabled} />
                <Label htmlFor={id} check>
                  {label}
                </Label>
              </div>
            ))}
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DefaultRadioDataa;
