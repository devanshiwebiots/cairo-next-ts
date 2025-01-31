import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { CustomHeightProgressBar } from "@/Constant";
import { HeightProgressData, HeightProgressList } from "@/Data/Uikits/Progress";
import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const CustomHeightProgressBars = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CommonUIkitsComponent title={CustomHeightProgressBar} span={HeightProgressData} headClass="pb-0" />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress color="primary" value="25" style={{ height: "1px" }} />
              {HeightProgressList.map(({ color, value, height }, index) => (
                <Progress color={color} value={value} style={{ height: `${height}` }} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomHeightProgressBars;
