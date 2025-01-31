import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SVG from "@/CommonComponent/SVG";
import { AnimatedRatings } from "@/Constant";
import { AnimatedRatingData, ratingItems } from "@/Data/BonusUi/Rating";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";

const AnimatedRating = () => {
  const happyIndex = ratingItems.findIndex((item) => item.className === "happy");
  const [activeIndex, setActiveIndex] = useState<number>(happyIndex);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Col xxl="4" md="6">
      <Card className="height-equal" style={{ minHeight: "243.406px" }}>
        <CommonCardHeader title={AnimatedRatings} span={AnimatedRatingData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="rating-container">
            <ul className="feedback">
              {ratingItems.map((item, index) => (
                <li key={index} className={`${item.className} me-0 ${activeIndex === index ? "active" : ""}`} onClick={() => handleClick(index)}>
                  <div>
                    <SVG iconId="eye" className={item.eyeClass ? "eye left" : ""} />
                    <SVG iconId="eye" className={item.eyeClass ? "eye right" : ""} />
                    <SVG iconId="mouth" className={item.mouthClass ? "mouth" : ""} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedRating;
