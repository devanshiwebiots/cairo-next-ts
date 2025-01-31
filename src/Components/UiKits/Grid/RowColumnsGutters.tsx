import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { Row_ColumnsGutters } from "@/Constant";
import { RowColumnsGuttersData, RowColumnsGuttersSpan } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RowColumnsGutters = () => {
  return (
    <Col xl="6">
      <Card className=" height-equal-2" style={{ minHeight: "249.219px" }}>
        <CommonUIkitsComponent title={Row_ColumnsGutters} span={RowColumnsGuttersSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="r-c-gutter">
          <Container className="text-center">
            <Row className="row-cols-2 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 g-2 g-lg-3">
              {RowColumnsGuttersData.map((data, index) => (
                <Col key={index}>
                  <div className="p-10">
                    <span>{data}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowColumnsGutters;
