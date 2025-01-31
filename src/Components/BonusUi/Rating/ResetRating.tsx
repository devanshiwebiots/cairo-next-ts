import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ResetRatings } from "@/Constant";
import { ResetRatingSpan } from "@/Data/BonusUi/Rating";
import { ChangeEvent, Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Input, Label } from "reactstrap";

const ResetRating = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleReset = () => {
    setRating(0);
  };
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal" style={{ minHeight: "243.406px" }}>
        <CommonCardHeader title={ResetRatings} span={ResetRatingSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="reset-rating-w  rapper">
          <div className="ratingCard">
            <div className="reset-rating">
              {[6, 5, 4, 3, 2, 1].map((rate) => (
                <Fragment key={rate}>
                  <Input id={`rating-${rate}`} type="radio" name="rating" value={rate} checked={rating === rate} onChange={handleRatingChange} hidden />
                  <Label htmlFor={`rating-${rate}`} className="star-label">
                    <i className="fa fa-star" color={rating >= rate && rate !== 0 ? "gold" : "#ccc"} />
                  </Label>
                </Fragment>
              ))}
            </div>
            <div className="buttonContainer">
              <Button className="reset-btn" color="primary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ResetRating;
