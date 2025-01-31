import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HalfStarRatings } from "@/Constant";
import { HalfStarRatingsData } from "@/Data/BonusUi/Rating";
import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const HalfStarRating = () => {
  const [rating, setRating] = useState(2.5);
  const handleStarClick = (newRating: number) => {
    setRating(newRating);
  };

  const getStarClasses = (index: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const isFull = index < fullStars;
    const isHalf = index === fullStars && halfStar;

    if (isFull) return "fa fa-star";
    if (isHalf) return "fa fa-star-half-o";
    return "fa fa-star-o";
  };

  return (
    <Col xxl="4" md="6">
      <Card className="height-equal" style={{ minHeight: "243.406px" }}>
        <CommonCardHeader title={HalfStarRatings} span={HalfStarRatingsData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="half-star-rating">
          <Row>
            <Col>
              <div className="starrate">
                <span className="ctrl"></span>
                <span className="cont">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <i key={i} className={getStarClasses(i)} onClick={() => handleStarClick(i + 0.5)} />
                  ))}
                </span>
              </div>
              <div className="rating-result">{rating}</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HalfStarRating;
