import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ImagePath, WithControl } from '@/Constant'
import { WithControlDataList, WithControlList } from '@/Data/ReactstrapCarousel'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import RatioImage from '@/CommonComponent/RatioImage';

const WithControls = () => {
  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={WithControl} span={WithControlList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Swiper modules={[Navigation, Autoplay]} navigation spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            {WithControlDataList?.map((item, index) => (
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

export default WithControls
