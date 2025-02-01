import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ImagePath, WithIndicator } from '@/Constant'
import { WithIndicatorDataList, WithIndicatorList } from '@/Data/ReactstrapCarousel'
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RatioImage from '@/CommonComponent/RatioImage';

const WithIndicators = () => {
  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={WithIndicator} span={WithIndicatorList} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Swiper modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            {WithIndicatorDataList?.map((item, index) => (
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

export default WithIndicators
