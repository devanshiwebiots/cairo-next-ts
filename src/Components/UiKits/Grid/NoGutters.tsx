import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { No_Gutters } from "@/Constant";
import { NoGuttersSpan } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const NoGutters = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonUIkitsComponent title={No_Gutters} span={NoGuttersSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="no-gutter">
          <Row className="g-0 text-center">
            <Col sm="6" md="8">
              <div className="p-3">
                <span>col-sm-6 & col-md-8</span>
              </div>
            </Col>
            <Col className="col-6" md="4">
              <div className="p-3">
                <span>col-md-4</span>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoGutters;
