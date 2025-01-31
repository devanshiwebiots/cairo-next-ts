import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { CustomizingConjunctionHeading, MultiplesDatesHeading } from "@/Constant";

export const CustomizingConjunction = () => {
  const [value, setValue] = useState<DateObject[]>([]);

  const handleChange = (dates: DateObject[] | DateObject | null) => {
    if (Array.isArray(dates)) {
      setValue(dates);
    } else if (dates) {
      setValue([dates]);
    } else {
      setValue([]);
    }
  };

  return (
    <Row>
      <Col xxl="3" className="box-col-12">
        <Label className="box-col-12 text-start" check>
          {CustomizingConjunctionHeading}
        </Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            monthYearSeparator="::"
            inputClass="form-control"
            multiple
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};
