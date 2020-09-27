import React, { useState } from 'react';
import './Navbar.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:  "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src:  "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:  "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} height="200" width="300" alt={item.altText} />
        <CarouselCaption className="carousel-indicators" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="navbar container">
       <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="navbar__carousel"
    >
      <CarouselIndicators className="carousel-indicators" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl className="carousel-indicators"  direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl className="carousel-indicators"  direction="next" directionText="Next" onClickHandler={next} />
      <hr />
    </Carousel>
    <hr />
    </div>
   
  );
}

export default Navigation;