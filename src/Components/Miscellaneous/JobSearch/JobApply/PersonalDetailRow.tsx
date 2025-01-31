import { BirthDateJob } from "@/Constant";
import { DaysJob, MonthsJob, YearsJob } from "@/Data/JobSearch";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col, FormGroup, Row } from "reactstrap";

const PersonalDetailRow = () => {
  return (
    <Row>
      <Col sm="4">
        <div className="col-form-label pt-0">{BirthDateJob}</div>
        <FormGroup>
          <Typeahead labelKey="name" multiple={false} id="Month" options={MonthsJob} placeholder="Choose a Month..." />
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={DaysJob} id="date" placeholder="date" />
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={YearsJob} id="Year" placeholder="Year" />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default PersonalDetailRow;
