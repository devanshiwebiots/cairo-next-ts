import { Date, DateFormatHeading, DateFormatType } from "@/Constant";
import React from "react";
import { Col, Form, Label, Row } from "reactstrap";
import CleaveInput from "./CleaveInput";

const DateFormat = () => {
  const dateOptions = {
    date: true,
    delimiter: "-",
    datePattern: ["d", "m", "Y"],
  };

  const monthYearOptions = {
    date: true,
    delimiter: "-",
    datePattern: ["m", "Y"],
  };
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{DateFormatHeading}</h6>
        <Form>
          <Row className="g-3">
            <Col xs="12">
              <Label className="col-form-label">{Date}</Label>
              <CleaveInput className="form-control" options={dateOptions} placeholder="DD-MM-YYYY" />
            </Col>
            <Col xs="12">
              <Label className="col-form-label" htmlFor="cleave-date2">
                {DateFormatType}
              </Label>
              <CleaveInput className="form-control" options={monthYearOptions} placeholder="MM-YYYY" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default DateFormat;
