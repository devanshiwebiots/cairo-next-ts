import { CompanyJobPlaceholder, CompanyNameJob, LocationJob, LocationJobPlaceholder, PeriodJob, PositionJob, PositionJobPlaceholder } from "@/Constant";
import { PositionsData } from "@/Data/JobSearch";
import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ExperienceClass = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleChange = (date: DateObject | null) => {
    if (date) {
      setStartDate(date.toDate());
    } else {
      setStartDate(null);
    }
  };

  const handleChange1 = (date: DateObject | null) => {
    if (date) {
      setEndDate(date.toDate());
    } else {
      setEndDate(null);
    }
  };

  return (
    <Form className="theme-form">
      <Row>
        <Col xl="6" className="xl-100">
          <FormGroup>
            <Label check>
              {LocationJob}:<span className="font-danger">*</span>
            </Label>
            <Input type="text" placeholder={LocationJobPlaceholder} />
          </FormGroup>
        </Col>
        <Col xl="6" className="ExperienceClass">
          <Label check className="col-form-label text-end pt-0">
            {PeriodJob}:<span className="font-danger">*</span>
          </Label>
          <Row>
            <Col sm="6">
              <FormGroup>
                <DatePicker className="form-control digits" value={startDate ? new DateObject(startDate) : null} onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <DatePicker className="form-control digits" value={endDate ? new DateObject(endDate) : null} onChange={handleChange1} />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xl="6" className="xl-100">
          <div className="col-form-label pt-0">
            {PositionJob}:<span className="font-danger">*</span>
          </div>
          <FormGroup>
            <Typeahead labelKey="name" multiple={false} options={PositionsData} id="Position" placeholder={PositionJobPlaceholder} />
          </FormGroup>
        </Col>
        <Col xl="6" className="xl-100">
          <FormGroup>
            <Label check>
              {CompanyNameJob}:<span className="font-danger">*</span>
            </Label>
            <Input type="text" placeholder={CompanyJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default ExperienceClass;
