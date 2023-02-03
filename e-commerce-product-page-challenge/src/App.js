import './styles/styles.css';
import { useEffect, useState } from 'react';
import { SliderData } from './data/SliderData';
import Navbar from './components/Navbar';
import SliderImage from './components/SliderImage';
import Description from './components/Description';
import Footer from './components/Footer';
import SectionWrap from './components/Section';
import DesktopImage from './components/DesktopImage';

function App() {
  const [quantity, setQuantity] = useState(Number(localStorage.getItem("quantity")) || 1)
  const [notification, setNotification] = useState(localStorage.getItem("notification") || false)
  const [width, setWindowWidth] = useState(0)

  console.log(Number(localStorage.quantity))

  let price = 125.00

  useEffect(() => {
    localStorage.setItem("quantity", quantity)
  }, [quantity])
  
  useEffect(() => {
    localStorage.setItem("notification", notification)
  }, [notification])
  

  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const reduceQuantity = () => {
    setQuantity(quantity - 1)
  }

  const addToCart = () => {
    alert("add to cart")
    setNotification(true)
  }


  useEffect(() => {
    updateDimensions()

    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  const responsive = {
    show: width > 1023
  }
  
  return (
    <>
      <Navbar price={price} quantity={quantity} notification={notification} setNotification={setNotification} />
      <SectionWrap>
        {responsive.show ? <DesktopImage slides={SliderData} /> : <SliderImage slides={SliderData} />}
        <Description price={price} quantity={quantity} addQuantity={addQuantity} reduceQuantity={reduceQuantity} addToCart={addToCart} />
      </SectionWrap>
      {/* <AddCart quantity={quantity} addQuantity={addQuantity} reduceQuantity={reduceQuantity} addToCart={addToCart} /> */}
      <Footer />
    </>
  );
}

export default App;
