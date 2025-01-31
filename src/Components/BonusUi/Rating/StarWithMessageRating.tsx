import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { StarMessageRatings } from '@/Constant';
import { getRatingText, StarMessageRatingSpan } from '@/Data/BonusUi/Rating';
import React, { useState, ChangeEvent, Fragment } from 'react';
import { FaStar } from 'react-icons/fa';
import { Card, CardBody, Col, Form, FormGroup, Input, Label } from 'reactstrap';

type RatingContent = {
    [key: number]: string;
  };
  
  const ratingContent: RatingContent = {
    1: "Simple and effective",
    2: "Great value!",
    3: "High-quality product",
    4: "Will definitely order again",
    5: "Delicious and satisfying"
  };
  
const StarWithMessageRating = () => {
    const [rating, setRating] = useState<number | null>(null);

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRating(Number(event.target.value));
    };
  return (
    <Col xxl='4' md='6'>
      <Card>
        <CommonCardHeader title={StarMessageRatings} span={StarMessageRatingSpan} headClass='pb-0' spanClass='mt-1 mb-0' />
        <CardBody>
        <div className="msg-emojis-wrapper">
      <div className="star-widget">
        <Form>
          {[5, 4, 3, 2, 1].map((rate) => (
            <Fragment key={rate}>
              <Input
                id={`rate-${rate}`}
                type="radio"
                name="rate"
                value={rate}
                checked={rating === rate}
                onChange={handleRatingChange}
                hidden
              />
              <Label className="fa fa-star" htmlFor={`rate-${rate}`}></Label>
            </Fragment>
          ))}
          <FormGroup>
            <header>{rating !== null ? ratingContent[rating] : ''}</header>
          </FormGroup>
        </Form>
      </div>
    </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarWithMessageRating;
