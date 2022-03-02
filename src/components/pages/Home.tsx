/* eslint-disable jsx-a11y/alt-text */

import { VFC, memo } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../App.css';


export const Home: VFC = memo(() =>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={5000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
    <div className="slide">
      <img src={`${process.env.PUBLIC_URL}/image/beer.jpg`} />
      <p className="slidetitle">Beer</p>
      <p className="slidesubtitle">24 hours in a day. 24 beers in a case. Coincidence?</p>
      <p className="slidesubtitle2">I think not.</p>
    </div>
    <div className="slide">
      <img src={`${process.env.PUBLIC_URL}/image/RedWine.jpg`} />
      <p className="slidetitle">Red Wine</p>
      <p className="slidesubtitle">Alcohol may be man’s worst enemy,</p>
      <p className="slidesubtitle2">but the bible says love your enemy.</p>
    </div>
    <div className="slide">
      <img src={`${process.env.PUBLIC_URL}/image/whisky.jpg`} />
      <p className="slidetitle">Whiskey</p>
      <p className="slidesubtitle">Candy is dandy, but liquor is quicker.</p>
      <p className="slidesubtitle2">Civilization begins with distillation.</p>
    </div>
  </Carousel>
);
