import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import checkoutimg from './img/checkout-img.jpg'

const Checkout = () => {
  const [{basket}, dispatch] =useStateValue();
   console.log(basket)
  return (
   <div className="checkout">
    <div className="checkout-left">
     <img src={checkoutimg} alt="" className="checkout-img" />
     <div>
        <h2 className="checkout-title">Your Cart</h2>
        {basket.map(item=>(
        <CheckoutProduct
         id= {item.id} 
         img={item.img}
         title={item.title}
         price={item.price}
         rating={item.rating}
         />))}
     </div>
     
    </div>
    <div className="checkout-right">
     <Subtotal/>
    </div>
   </div>
  )
}

export default Checkout