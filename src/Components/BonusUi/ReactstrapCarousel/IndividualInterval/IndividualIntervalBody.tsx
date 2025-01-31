import RatioImage from '@/CommonComponent/RatioImage';
import { ImagePath } from '@/Constant';
import { ItemIntervalDataList } from '@/Data/ReactstrapCarousel';
import { CarouselItemWithInterval } from '@/Types/BonusUiType';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';

const IndividualIntervalBody = () => {
    const [items, setItems] = useState<CarouselItemWithInterval[]>(ItemIntervalDataList);
    const [activeIdx, setActiveIdx] = useState<number>(0);

    const next = () => {
        if (activeIdx === items.length - 1) setActiveIdx(0);
        else setActiveIdx(activeIdx + 1);
    };

    const previous = () => {
        if (activeIdx === 0) setActiveIdx(items.length - 1);
        else setActiveIdx(activeIdx - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, items[activeIdx].interval);
        return () => {
            clearInterval(interval);
        };
    }, [items, activeIdx]);

    return (
        <Carousel activeIndex={activeIdx} next={next} previous={previous}>
            {items.map((item, index) => (
                <CarouselItem key={index}>
                    <RatioImage src={`${ImagePath}/${item.image}`} alt="Slide" className="w-100 h-100" />
                </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default IndividualIntervalBody;
