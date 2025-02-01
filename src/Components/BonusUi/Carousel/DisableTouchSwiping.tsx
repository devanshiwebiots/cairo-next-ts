import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DisableTouchSwipings, ImagePath } from '@/Constant'
import { DisableTouchDataList, DisableTouchSwipingsList } from '@/Data/ReactstrapCarousel'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RatioImage from '@/CommonComponent/RatioImage';

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipings} span={DisableTouchSwipingsList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Swiper modules={[Navigation]} navigation loop slidesPerView={1} simulateTouch={false}>
            {DisableTouchDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
}

export default DisableTouchSwiping
