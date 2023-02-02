import React from "react";


const LightBox = ({ open, slides, current, previewImage }) => {
  const closeLightBox = () => {
    open(false);
    document.body.style.overflowY = 'unset'
  };


  return (
    <div className="lightbox">
      <div className="lightbox-slider">
        <button className="close" onClick={closeLightBox}>
          <span>×</span>
        </button>

        {slides[0].map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="product"
            className={current === index ? "active" : ""}
          />
        ))}
      </div>
      <div className="lightbox-thumbnail">
        {slides[1].map((slide, index) => (
          <div
            key={index}
            className={`image ${current === index ? "active" : ""}`}
            onClick={(event) => previewImage(index)}
          >
            <img src={slide.image} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightBox;
