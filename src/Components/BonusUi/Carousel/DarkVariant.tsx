import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DarkVariants, ImagePath } from '@/Constant'
import { DarkVariantDataList, DarkVariantList } from '@/Data/ReactstrapCarousel'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RatioImage from '@/CommonComponent/RatioImage';

const DarkVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={DarkVariants} span={DarkVariantList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Swiper modules={[Navigation, Autoplay, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} autoplay={{ delay: 2000 }} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {DarkVariantDataList?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${slide.image}`} alt="drawing-room" />
                  <div className="carousel-caption d-none d-md-block carousel-opacity">
                    <h3>{slide.captionHeader}</h3>
                    <p>{slide.captionText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
}

export default DarkVariant
