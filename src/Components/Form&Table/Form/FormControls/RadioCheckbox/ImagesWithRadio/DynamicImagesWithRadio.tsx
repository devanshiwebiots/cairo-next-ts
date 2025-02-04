import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { ImageWithRadioDataList } from "@/Data/Form&Table/Form";
import React, { Fragment } from "react";
import { Col, Input, Label } from "reactstrap";

const DynamicImagesWithRadio = () => {
  return (
    <Fragment>
      {ImageWithRadioDataList.map(({ src, label, id, defaultChecked, disabled, alt }, index) => (
        <Col xxl="3" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{label}</h6>
            <div className="img-checkbox">
              <Input className="main-img-cover" id={id} type="radio" name="radio6" defaultChecked={defaultChecked} disabled={disabled} />
              <Label className="mb-0" htmlFor={id} check>
                <RatioImage src={`${ImagePath}/switch/${src}.jpg`} alt={alt} />
              </Label>
            </div>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicImagesWithRadio;
