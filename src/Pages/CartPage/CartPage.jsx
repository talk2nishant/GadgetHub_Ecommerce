import React from 'react'
import './style.scss'
import { useState } from 'react'

import { FaRupeeSign } from "react-icons/fa";
// import OrderPlace from '../OrderDetail/OrderDetail.jsx';




const CartPage = () => {
    const[count ,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count-1)
    }
   

    const Cartpage = () => (
        <div className='cartMain'>
            <div className='cartMain_container'>
                <div className='cartMain_container_left'>
                    <div className='cartMain_container_left_main'>
                        <div className='cartMain_container_left_main_address'>
                            <div className='cartMain_container_left_main_address_heading'>
                                <span>
                                    <p>Deliver to:</p>
                                    <p>Rupnagar- 140308</p>
                                </span>
                                <button>Change</button>
                            </div>
                        </div>

                        <div className='cartMain_container_left_main_productDetail'>
                            <div className='cartMain_container_left_main_productDetail_up'>
                                <div className='cartMain_container_left_main_productDetail_up_img'>
                                    <img src={require('../CartPage/first.jpg')} alt="pianoimage" />
                                </div>
                                <div className='cartMain_container_left_main_productDetail_up_nameDetail'>
                                    <h5>Window 11 Fully Update</h5>
                                    <p className='detail'>Blue</p>
                                    <span>
                                        <p className='first' ><FaRupeeSign />599</p>
                                        <p className='second'><FaRupeeSign /> 310</p>
                                        <p className='third'>48% off</p>
                                    </span>
                                </div>
                            </div>
                            <div className='cartMain_container_left_main_productDetail_down'>
                                <div className='cartMain_container_left_main_productDetail_down_IncDec'>
                                    <button><span onClick={decrement}>-</span></button>
                                    <div>
                                        {count}
                                    </div>
                                    <button><span onClick={increment}>+</span></button>
                                </div> 
                                <div className='cartMain_container_left_main_productDetail_down_SaveRemove'>
                                    <button>SAVE FOR LATER</button>
                                    <button>REMOVE</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='cartMain_container_left_main_placeOrder'>
                            <button>PlaceOrder</button>
                        </div>
                    </div>
                </div>
                <div className='cartMain_container_right'>
                    <div className='cartMain_container_right_main'>
                        <div className='cartMain_container_right_main_heading'>
                            <h5>PRICE DETAILS</h5>
                        </div>

                        <div className='cartMain_container_right_main_priceDetail'>
                            <span>
                                <p>Price (2 items)</p>
                                <p><FaRupeeSign />4,999</p>
                            </span>
                            <span>
                                <p>Discount</p>
                                <p className='discount-free'>- 2,500</p>
                            </span>
                            <span>
                                <p>Delivey Charges</p>
                                <p className='discount-free'>Free</p>
                            </span>

                            <div className='cartMain_container_right_main_priceDetail_total'>
                                <span>
                                    <p>Total Amount</p>
                                    <p><FaRupeeSign />1500</p>
                                </span>
                                <p className='totalsave'>You will be save 1,500 on this order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  return (
    <div className='CartPage'>
          {Cartpage()}
    </div>
  )
}

export default CartPage


   