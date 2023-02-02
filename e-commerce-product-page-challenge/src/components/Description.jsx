import React from "react";
import AddCart from "./AddCart";

const Description = ({ price, quantity,addQuantity, reduceQuantity, addToCart }) => {
  const formatPriceNum = new Intl.NumberFormat("en-US", {
    style: 'currency', currency: 'USD',
  }).format(price);

  return (
    <div className="product">
      <div className="description">
        <div className="container">
          <b>Sneaker Company</b>
          <h1>Fall Limited Edition Sneakers</h1>

          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="current">
              <h2>{formatPriceNum}</h2>
              <span className="discount">50%</span>
            </div>
            <p className="last">$250.00</p>
          </div>
        </div>
      </div>
      <AddCart quantity={quantity} addQuantity={addQuantity} reduceQuantity={reduceQuantity} addToCart={addToCart} />
    </div>
  );
};

export default Description;
