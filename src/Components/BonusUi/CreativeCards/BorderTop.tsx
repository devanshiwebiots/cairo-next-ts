import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderTops } from "@/Constant";
import { BorderTopData } from "@/Data/BonusUi/CreativeCards";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const BorderTop = () => {
  return (
    <Col md="6" className="col-12">
      <Card className="common-hover">
        <CommonCardHeader title={BorderTops} span={BorderTopData} headClass="pb-0 border-t-danger" spanClass="mt-1 mb-0" />
        <CardBody>
          <p>
            By using the border-color, we can give the border in the background direction in a creative way. You can design your creative card by taking only the <em className="txt-danger">border-t-danger</em> class. If you want to use other colors like this: <em className="txt-danger">border-t-*</em>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;
