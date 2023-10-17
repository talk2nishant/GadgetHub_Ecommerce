import React from 'react'
import './style.scss'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {

    const carouseMain = () =>(
        <div id="carouselExample" className="carousel slide mainContainer_mainCarousel">
            <div className="carousel-inner mainCarousel_inner">
                <div className="carousel-item active mainContainer_mainCarousel_inner_item">
                    <img src={require("./first.jpg")} className="d-block w-100" alt="" />
                    <div className="carousel-caption d-none d-md-block  mainContainer_mainCarousel_inner_item_heading">
                        <h5>First image </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="carousel-item mainContainer_mainCarousel_inner_item" >
                    <img src={require('./second.jpg')} className="d-block w-100" alt="" />
                    <div className="carousel-caption d-none d-md-block  mainContainer_mainCarousel_inner_item_heading">
                        <h5>First image </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="carousel-item mainContainer_mainCarousel_inner_item">
                    <img src={require('./third.jpg')} className="d-block w-100" alt="" />
                    <div className="carousel-caption d-none d-md-block  mainContainer_mainCarousel_inner_item_heading">
                        <h5>First image </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="icon" aria-hidden="true"> <FaAngleLeft /></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="icon"  > <FaAngleRight /></span>
            </button>
        </div>
    )

  return (
        <div className='mainContainer'>
          {carouseMain()}
        </div>
    )
}

export default Carousel