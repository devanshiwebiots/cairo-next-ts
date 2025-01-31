import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderBottoms } from "@/Constant";
import { BorderBottomData } from "@/Data/BonusUi/CreativeCards";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const BorderBottom = () => {
  return (
    <Col md="6" className="col-12">
      <Card className="common-hover">
        <CommonCardHeader title={BorderBottoms} span={BorderBottomData} spanClass="mt-1 mb-0" headClass=" border-b-info" />
        <CardBody>
          <p>
            By using the border-color, we can give the border in the background direction in a creative way. You can design your creative card by taking only the <em className="txt-danger">border-b-info</em> class. If you want to use other colors like this: <em className="txt-danger">border-b-*</em>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
