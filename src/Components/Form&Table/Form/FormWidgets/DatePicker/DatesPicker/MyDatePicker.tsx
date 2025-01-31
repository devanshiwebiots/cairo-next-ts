import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { RangeDatePicker } from "@/Constant";

const MyDatePicker = () => {
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
          {RangeDatePicker}
        </Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            inputClass="form-control"
            range
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MyDatePicker;
