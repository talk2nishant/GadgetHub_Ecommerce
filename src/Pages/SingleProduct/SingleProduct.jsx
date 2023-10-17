import React, { useState } from 'react'
import './style.scss'
import { FaAngleLeft, FaAngleRight, FaRupeeSign, FaGift } from "react-icons/fa";


const SingleProduct = () => {
    const [counter, setCounter] = useState(0)


    const increment = () =>{
        setCounter (counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

   

    const singleProduct = () =>(
        <div className='singleproduct_main'>
            <div className='singleproduct_main_left'>
                <div id="carouselExample" className="carousel slide singleproduct_main_left_mainCarousel">
                    <div className="carousel-inner mainCarousel_inner">
                        <div className="carousel-item active singleproduct_main_left_mainCarousel_inner_item">
                            <img src={require("./astes/lafz_serum_a1.jpg")} className="d-block " alt="" />
                        </div>
                        <div className="carousel-item singleproduct_main_left_mainCarousel_inner_item" >
                            <img src={require('./astes/lafz_serum_a2.jpg')} className="d-block" alt="" />                           
                        </div>
                        <div className="carousel-item singleproduct_main_left_mainCarousel_inner_item">
                            <img src={require('./astes/lafz_serum_a3.jpg')} className="d-block" alt="" />                           
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="icon" aria-hidden="true"> <FaAngleLeft /></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="icon"  > <FaAngleRight /></span>
                    </button>
                </div>
            </div>

            <div className='singleproduct_main_right'>
                <div className='singleproduct_main_right_heading'>
                    <h4>LAFZ</h4>
                    <p>Lafz Radiance Boost Face Serum - Hyaluronic Acid 2% (30ml)</p>
                    <span>
                        Introducing the New Radiance Boost Face Serum with Hyaluronic Acid 2%, a lightweight serum that rapidly absorbs into skin and provides deep hydration.
                    </span>
                </div> 
                <div className='singleproduct_main_right_price'>
                    <h5>SAVE 43%</h5>
                   <p>
                        <span>
                            <FaRupeeSign />1,399
                        </span>
                        <FaRupeeSign />499
                   </p>
                </div>
                <div className='singleproduct_main_right_off'>                                           
                      <span>    
                        <FaGift />
                        <p> Free Gift </p>
                    </span>
                    <p>on orders above <FaRupeeSign />899.</p>
                </div>
                <div className='singleproduct_main_right_counter'>
                   <span>
                        <button onClick={decrement}>-</button>
                        <p>{counter}</p>
                        <button onClick={increment}>+</button>
                   </span>
                    <button>Buy</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )


  return (
    <div className='singleproduct'>
          {singleProduct()}
    </div>
  )
}

export default SingleProduct