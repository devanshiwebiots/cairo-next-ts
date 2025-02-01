import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CrossFades, ImagePath } from '@/Constant'
import { CrossFadeDataList, CrossFadeList } from '@/Data/ReactstrapCarousel'
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RatioImage from '@/CommonComponent/RatioImage';

const CrossFade = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={CrossFades} span={CrossFadeList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Swiper modules={[Autoplay, EffectFade, Navigation]} effect="fade" navigation loop autoplay={{ delay: 2000 }} slidesPerView={1} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {CrossFadeDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
}

export default CrossFade
