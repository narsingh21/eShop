import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'
const CheckoutProduct = ({id,price,title,rating,img}) => {
   const [{basket},dispatch]= useStateValue();

   const removeCartHandler=()=>{
    console.log(id)
    dispatch({
      type:"REMOVE_FROM_CART",
      id:id,
      
    })
   }
  
  return (
    <div className="checkout">
        <div className='checkout-product'>
             <img src={img} alt="product img" className='checkout-product-img'/>
            <div className="product-info">
                <p className="chekout-product-title">
            {title}
                </p>
                <p className="checkout-product-price">${price}</p>
                <p className="checkout-product-rating"><strong>{rating}</strong> star</p>
                <button onClick={removeCartHandler}>Remove from cart</button>
            </div>
         </div>
        
            
            
    </div>
  )
}

export default CheckoutProduct