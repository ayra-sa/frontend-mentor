import React from "react";
import { useState } from "react";
import IconNext from "../assets/images/icon-next.svg";
import IconMinus from "../assets/images/icon-previous.svg";

const SliderImage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides[0].length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="image-wrap">
      <button
        className="next"
        onClick={nextSlide}
        disabled={current === 3 ? true : false}
      >
        <img src={IconNext} alt="next" />
      </button>
      <button
        className="prev"
        onClick={prevSlide}
        disabled={current === 0 ? true : false}
      >
        <img src={IconMinus} alt="minus" />
      </button>
      {slides[0].map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="product"
          className={index === current ? "img active" : "img"}
        />
      ))}
    </div>
  );
};

export default SliderImage;
