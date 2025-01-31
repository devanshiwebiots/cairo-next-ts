import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { CarouselDataProp, CommonCarouselProp } from "@/Types/BonusUiType";
import React, { Fragment, useState } from "react";
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap";

const CommonCarousel: React.FC<CommonCarouselProp> = ({ data, dark, control, indecators, caption, slide, interval, ride, fade, lightCaption }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const previousIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(previousIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = data.map((item: CarouselDataProp) => (
    <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
      <RatioImage className="d-block w-100 h-100" src={`${ImagePath}/${item.image}`} />
      {caption && <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} className={`d-none d-md-block ${lightCaption ? "carousel-opacity" : ""}`} />}
    </CarouselItem>
  ));
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={fade} slide={slide} interval={interval} ride={ride} dark={dark}>
      {slides}
      {control && (
        <Fragment>
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Fragment>
      )}
      {indecators && <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />}
    </Carousel>
  );
};

export default CommonCarousel;
