import { IconCheckbox } from "@/Constant";
import { CustomCheckboxList } from "@/Data/Form& Table/Form";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const IconCheckboxs = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{IconCheckbox}</h6>
        <div className="form-check checkbox checkbox-primary ps-0 main-icon-checkbox">
          <ul className="checkbox-wrapper">
            {CustomCheckboxList.map(({ icon, id, text, defaultChecked }, index) => (
              <li key={index}>
                <Input className="checkbox-shadow" id={`checkbox-icon-${id}`} type="checkbox" defaultChecked={defaultChecked} />
                <Label htmlFor={`checkbox-icon-${id}`} check>
                  <i className={`fa fa-${icon}`}></i>
                  <span>{text}</span>
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default IconCheckboxs;
