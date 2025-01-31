import RatioImage from "@/CommonComponent/RatioImage";
import { AddTitleOfCards, ImagePath } from "@/Constant";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const AddTitleOfCardTwo = () => {
  return (
    <Col xxl="6" sm="6" className="box-col-4 xl-4">
      <Card className="common-hover">
        <CardBody>
          <div className="creative-wrapper">
            <RatioImage src={`${ImagePath}/other-images/mountain.jpg`} className="img-fluid" />
            <div className="creative-info w-100">
              <h4 className="text-white text-truncate">{AddTitleOfCards}</h4>
              <p className="text-white">This is an example card for you to use. you are able to include subtitles in your according.</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddTitleOfCardTwo;
