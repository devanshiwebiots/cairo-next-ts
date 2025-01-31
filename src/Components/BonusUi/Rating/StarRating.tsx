import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StarRatingsTitle } from "@/Constant";
import { StarRatingData } from "@/Data/BonusUi/Rating";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";

const StarRating = () => {
  const [activeStars, setActiveStars] = useState(0);

  const handleStarClick = (index: number) => {
    setActiveStars(index + 1);
  };
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal" style={{ minHeight: "243.406px" }}>
        <CommonCardHeader title={StarRatingsTitle} span={StarRatingData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <div className="main-star-rating">
            <div className="common-flex star-box justify-content-center">
              {[...Array(5)].map((_, index) => (
                <i className={`fa fa-star ${index < activeStars ? "active" : ""}`} key={index} onClick={() => handleStarClick(index)}></i>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRating;
