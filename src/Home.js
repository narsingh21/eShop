import React from 'react'
import './Home.css'
import img from './img/header-img.png'
import Product from './Product'
import product1 from './img/product-1.jpg'
import product2 from './img/product2.jpg'
import product3 from './img/product3.jpg'
import product4 from './img/product4.jpg'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home_container">
                <img src={img} height='400px' alt="" className="home_image" />
                
                <div className="home__row">
                    <Product id ='1' title= 'beg' price={30} rating='2' img={product1}/>
                    <Product id ='2' title= 'beg' price={30} rating='2' img={product2} />
                    
                </div>
                <div className="home__row">
                <Product id ='1' title= 'beg' price='30' rating='2' img={product1}/>
                    <Product id ='3' title= 'beg' price={30}  rating='2' img={product3} />
                    <Product id ='4' title= 'beg' price={30} rating='2' img={product4}/>
                    <Product id ='5' title= 'beg' price={30} rating='2' img={product1}/>
                </div>
                <div className="home__row">
                    <Product id ='6' title= 'beg' price={30} rating='2' img={product1} />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home