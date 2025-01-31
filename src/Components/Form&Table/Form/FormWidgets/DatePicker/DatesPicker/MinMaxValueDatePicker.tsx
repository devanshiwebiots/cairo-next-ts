import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { MinMaxValue } from "@/Constant";

const MinMaxValueDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setStartDate(date);
  };

  const maxDate = () => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 5));
  };

  return (
    <Row>
      <Col xxl="3" className="box-col-12">
        <Label className="box-col-12 text-start" check>
          {MinMaxValue}
        </Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
            minDate={new Date()}
            maxDate={maxDate()}
            placeholderText="Select a date in February 2020"
            wrapperClassName="w-100"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MinMaxValueDatePicker;
