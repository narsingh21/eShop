import React from 'react'
import './subtotal.css';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

const Subtotal = () => {
  const [{basket}, dispatch]= useStateValue();
  const value= getBasketTotal(basket);
           

  return (
    <div className="subtotal">
       <p>Subtotal({basket.length} items): <span>$ <strong>{value}</strong></span></p> 
       <input className='checkbox' type="checkbox" />
       <p className='gift'> <strong>  Send as a gift </strong></p>
         <button>Proceed to Checkout</button>
        </div>
  )
}

export default Subtotal