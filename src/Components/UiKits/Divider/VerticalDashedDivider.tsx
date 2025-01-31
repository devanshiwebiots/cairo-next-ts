import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import SVG from "@/CommonComponent/SVG";
import { VerticalDashedDividerr } from "@/Constant";
import { VerticalDashedDividerData, VerticalDashedDividerSpan } from "@/Data/Uikits/Divider";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const VerticalDashedDivider = () => {
  return (
    <Col xxl="4" md="6" className="box-col-6">
      <Card className=" height-equal">
        <CommonUIkitsComponent title={VerticalDashedDividerr} span={VerticalDashedDividerSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="main-divider">
          <Row className="g-sm-2 d-flex gy-4">
            {VerticalDashedDividerData.map((data, i) => (
              <Col key={i} sm="3" className="col-6">
                <div className="vertical-divider">
                  <div className={`vertical-line bg-${data.color}`}></div>
                  {data.isSVG ? <SVG iconId={data.iconId} className={`my-2 ${data.className}`} /> : <p className={`my-2 ${data.hasBorder ? `border border-${data.color}` : ""} ${data.className}`}>{data.title}</p>}
                  <div className={`vertical-line bg-${data.color}`}></div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalDashedDivider;
