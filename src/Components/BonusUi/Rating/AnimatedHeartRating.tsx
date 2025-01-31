import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedHeartRatings } from "@/Constant";
import { AnimatedHeartRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const AnimatedHeartRating = () => {
  const [rating, setRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value, 10));
  };
  return (
    <Col xxl="4" md="12">
      <Card className="height-equal" style={{ minHeight: "243.406px" }}>
        <CommonCardHeader title={AnimatedHeartRatings} span={AnimatedHeartRatingData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="heart-rating">
            <div className="rating-system3">
              <Form>
                <FormGroup>
                  <Row>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <Col key={star} xs="auto">
                        <FormGroup check>
                          <Input id={`star${star}_3`} type="radio" name="rate3" value={star} checked={rating === star} onChange={handleChange} style={{ display: "none" }} />
                          <Label htmlFor={`star${star}_3`} className={`rating-label ${rating >= star ? "active" : ""}`} style={{ cursor: "pointer", fontSize: "24px" }}></Label>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                </FormGroup>
              </Form>
              <div className="rating-text">{rating ? `You rated this ${rating} star${rating > 1 ? "s" : ""}` : "Rate this"}</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedHeartRating;
