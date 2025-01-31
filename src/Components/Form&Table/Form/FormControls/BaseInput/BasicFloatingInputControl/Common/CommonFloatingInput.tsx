import { CommonFloatingInputProp } from "@/Types/FormType";
import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

const CommonFloatingInput: React.FC<CommonFloatingInputProp> = ({ inputType, label, floatingLabel, placeholder, defaultValue, height, invalid }) => {
  return (
    <Row className="mb-1">
      <Label className="col-sm-3" check>
        {label}
      </Label>
      <Col sm="9">
        <div className="form-floating mb-3">
          <Input type={inputType} invalid={invalid} placeholder={placeholder} defaultValue={defaultValue} style={{ height: `${height}` }} autoComplete="off" />
          <Label check>
            {floatingLabel}
          </Label>
        </div>
      </Col>
    </Row>
  );
};

export default CommonFloatingInput;
