import React from 'react'
import './product.css'
import product1 from './img/product-1.jpg'
import { useStateValue } from './StateProvider'


function Product({id,title,img,price,rating}) {

  const [state, dispatch]= useStateValue();

  const addtoCartHandler=()=>{
      dispatch({
        type:'ADD TO CART',
        item:{
          id:id,
          img:img,
          price:price,
          rating:rating,
          title:title
        }
      })
  }

  return (
    <div>
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <div className="product-price">{price}</div>
                <div className="product-rating">{rating}</div>
            </div>
            <img src={img} alt="product img" />
            <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product