import { BorderedRadioDataa } from "@/Data/Form& Table/Form";
import React, { Fragment } from "react";
import { Input, Label } from "reactstrap";

const BorderedRadioData = () => {
  return (
    <Fragment>
      {BorderedRadioDataa.map(({ color, text, id }, index) => (
        <div className={`form-check radio radio-${color}`} key={index}>
          <Input id={id} type="radio" name="radio1" />
          <Label htmlFor={id} check>
            {text}
          </Label>
        </div>
      ))}
    </Fragment>
  );
};

export default BorderedRadioData;
