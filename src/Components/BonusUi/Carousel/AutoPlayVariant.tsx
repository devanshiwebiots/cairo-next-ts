import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { AutoPlayVariants, ImagePath } from "@/Constant";
import { AutoPlayDataList, AutoPlayVariantList } from "@/Data/ReactstrapCarousel";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} span={AutoPlayVariantList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 1500, disableOnInteraction: false }} slidesPerView={1} spaceBetween={10} className="mySwiper">
            <div className="swiper-wrapper">
              {AutoPlayDataList.map((item, index) => (
                <SwiperSlide key={index}>
                  <RatioImage src={`${ImagePath}/${item.image}`} alt="Drawing-room" />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
