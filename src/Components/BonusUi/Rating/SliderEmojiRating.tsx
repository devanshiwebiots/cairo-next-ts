import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { SliderEmojiRatings } from '@/Constant';
import { SliderEmojiRatingSpan } from '@/Data/BonusUi/Rating';
import React, { useState } from 'react';
import { Card, CardBody, Col, Input, Label } from 'reactstrap';

const SliderEmojiRating: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [emojiMessage, setEmojiMessage] = useState<string>('');

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    let message = '';
    switch (rating) {
      case 1:
        message = 'Angry';
        break;
      case 2:
        message = 'Expressionless';
        break;
      case 3:
        message = 'Slightly Smile';
        break;
      case 4:
        message = 'Heart Eyes';
        break;
      case 5:
        message = 'Laughing';
        break;
      default:
        message = '';
    }
    setEmojiMessage(message);
  };

  return (
    <Col xxl='4' md='6'>
      <Card>
        <CommonCardHeader
          title={SliderEmojiRatings}
          span={SliderEmojiRatingSpan}
          headClass='pb-0'
          spanClass='mt-1 mb-0'
        />
        <CardBody className='rating-stars-2'>
          <div className='emoji-rating'>
            {[1, 2, 3, 4, 5].map((star) => (
              <Input
                key={star}
                id={`star-${star}`}
                type='radio'
                name='rate'
                onChange={() => handleRatingChange(star)}
                hidden
              />
            ))}
            <div className='common-align flex-column'>
              <div className='outer-emoji'>
                <ul className='emojis'>
                  <li className={selectedRating === 1 ? 'slide-emoji' : ''}>
                    <i className='icofont icofont-emo-angry'></i>
                  </li>
                  <li className={selectedRating === 2 ? 'slide-emoji' : ''}>
                    <i className='icofont icofont-emo-expressionless'></i>
                  </li>
                  <li className={selectedRating === 3 ? 'slide-emoji' : ''}>
                    <i className='icofont icofont-emo-slightly-smile'></i>
                  </li>
                  <li className={selectedRating === 4 ? 'slide-emoji' : ''}>
                    <i className='icofont icofont-emo-heart-eyes'></i>
                  </li>
                  <li className={selectedRating === 5 ? 'slide-emoji' : ''}>
                    <i className='icofont icofont-emo-laughing'></i>
                  </li>
                </ul>
              </div>
              <div className='stars'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Label key={star} className={`star-${star} fa fa-star`} for={`star-${star}`}></Label>
                ))}
              </div>
            </div>
            <div className='main-emoji-text'>
              <span className='emoji-msg'>{emojiMessage}</span>
              <span className='emoji-number'>{selectedRating}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default SliderEmojiRating;
