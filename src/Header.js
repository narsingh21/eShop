import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
  const[{basket}, dispatch]= useStateValue(); 

  return (
    <div className="header">
      <Link to ='/' style ={{textDecoration :'none'}}>
        <div className="header-logo">
        <StorefrontIcon className='header-logo-icon' fontSize='large'/>
        <h2 className="header-logo-title">Eshop</h2>
        </div>
        </Link>
        <div className="header-search">
         <input type="text" className="header-search-bar" />
         <SearchIcon className='header-search-icon'/>
        </div>

        <div className="header-nav">
          <Link to ='/login' style ={{textDecoration :'none'}}>
          <div className="nav-item">
          <span className="nav-item-one">hello Guest</span>
          <span className="nav-item-two">Sign In</span>
          </div>
          </Link>
          <div className="nav-item">
          <span className="nav-item-one">Your</span>
          <span className="nav-item-two">Shop</span>
          </div>
          <Link to ='/checkout' style ={{textDecoration :'none'}}>
          <div className="nav-item">
          <ShoppingBasketIcon className='nav-cart-icon'/>
          <span className="nav-item-two nav-cart-count">{basket.length}</span>
          </div>
          </Link>
        </div>

      </div>
  )
}

export default Header