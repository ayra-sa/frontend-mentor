import React from "react";
import HamburgerMenu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import IconClose from "../assets/images/icon-close.svg";
import ItemThumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import IconDelete from '../assets/images/icon-delete.svg'
import Avatar from '../assets/images/image-avatar.png'
import { useState } from "react";


const Navbar = ({price, quantity, notification, setNotification}) => {
  const formatPriceNum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  const resultPrice = price * quantity
  
  const [expand, setExpand] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  
  const expandButton = () => {
    setExpand(true)
  }

  const closeButton = () => {
    setExpand(false)
  }

  const openCartButton = () => {
    setOpenCart(!openCart)
  }

  const deleteItemCart = () => {
    alert("Item has been deleted")
    setNotification(false)
  }


  return (
    <nav>
      <div className="container">
        <div className="nav-wrap">
          <div className="nav-left">
            <div className="nav-mobile" onClick={expandButton}>
              <img src={HamburgerMenu} alt="nav-mobile" />
            </div>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
            <div className={ `nav-menu ${expand ? 'active' : ''}` }>
              <ul className="nav-menu-list">
                <li><button><img src={IconClose} alt="icon-close" onClick={closeButton} /></button></li>  
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-cart" onClick={openCartButton}>
                <span className={notification === true ? "visible" : ""}>{quantity}</span>
                <img src={Cart} alt="icon-cart" />
            </div>

            <div className="nav-profile">
              <img src={Avatar} alt="avatar" />
            </div>
          </div>

          <div className={`cart-detail ${openCart ? "open" : ""} ${notification === true ? "fill" : ""}`}>
            <div className="cart-title">
              <b>Cart</b>
            </div>
            <div className="cart-body">
              {notification === true ?
                <>
                  <div className="cart-item">
                    <figure>
                      <img src={ItemThumbnail} alt="item-product" />
                    </figure>
                    <div className="item-price">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>{formatPriceNum.format(price)} x {quantity} : <b>{formatPriceNum.format(resultPrice)}</b> </p>
                    </div>
                    <button onClick={deleteItemCart}>
                      <img src={IconDelete} alt="icon-delete" />
                    </button>
                  </div>

                  <button className="btn-primary">Checkout</button>
                </> : <p>Cart is empty</p>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
