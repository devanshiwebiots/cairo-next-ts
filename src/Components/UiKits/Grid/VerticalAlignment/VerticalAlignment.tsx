import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { AlignItemCode, verticalAlignment, verticalfooter } from "@/Constant";
import { VerticalAlignmentData, VerticalAlignmentSpan } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "../Common/CommonCardFooter";

const VerticalAlignment = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonUIkitsComponent title={verticalAlignment} span={VerticalAlignmentSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="grid-showcase mb-0">
            <Row>
              {VerticalAlignmentData.map((data, i) => (
                <Col lg="4" key={i}>
                  <Row className={`grid-vertical align-items-${data.alignItem} m-1 g-2`}>
                    <div className="col-6">
                      <span className="bg-white">{data.title}</span>
                    </div>
                    <div className="col-6">
                      <span className="bg-white">{data.title2}</span>
                    </div>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </CardBody>
        <GridCommonCardFooter className={AlignItemCode} valueClass={verticalfooter} />
      </Card>
    </Col>
  );
};

export default VerticalAlignment;
