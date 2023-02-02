import React from "react";
import { useState } from "react";
import LightBox from "./LightBox";

const DesktopImage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const previewImage = (index) => {
    setCurrent(index);
  };
  
  const openLightBox = () => {
    setIsOpen(!isOpen)
    document.body.style.overflowY = 'hidden'
  }

  return (
    <div className="desktop-image-wrap">
      
      {isOpen ? <LightBox open={setIsOpen} slides={slides} current={current} previewImage={previewImage} /> : null}
      
      <div className="image-preview">
        {slides[0].map((slide, index) => (
          <img key={index} src={slide.image} alt="product" className={current === index ? "active" : ""} onClick={openLightBox} />
        ))}
      </div>
      <div className="image-product-wrap">
        {slides[1].map((slide, index) => (
          <div key={index} onClick={event => previewImage(index)} className={`image ${current === index ? "active" : ""}`}>
            <img src={slide.image} alt="product-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopImage;
