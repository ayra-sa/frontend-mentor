import React from 'react'
import IconPlus from '../assets/images/icon-plus.svg'
import IconMinus from '../assets/images/icon-minus.svg'
import IconCart from '../assets/images/icon-cart.svg'

const AddCart = ({ quantity, reduceQuantity, addQuantity, addToCart }) => {
  
  return (
    <div className="container">
      <div className="add-cart-wrap">
        <div className="quantity-wrap">
          <button onClick={reduceQuantity} disabled={ quantity === 1 ? true : false }>
            <img src={IconMinus} alt="icon-minus" />
          </button>
          <span>{quantity}</span>
          <button onClick={addQuantity}>
            <img src={IconPlus} alt="icon-plus" />
          </button>
        </div>

        <button className='btn-primary' onClick={addToCart}>
          {/* <img src={IconCart} alt="icon-cart" /> */}
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default AddCart