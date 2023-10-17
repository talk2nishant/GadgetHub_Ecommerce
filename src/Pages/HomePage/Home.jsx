import './style.scss'
import {React,} from 'react';
// import { useState} from 'react-router-dom';
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import Carousel from './Carousel/Carousel';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, } from 'react-router-dom';


const CartToastify = () => {
    toast.success(' Add to Cart Successfully', {
        position: "top-right",
        autoClose: "2000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    // toast.promise(
    //     resolveAfter3Sec,
    //     {
    //         pending: 'Promise is pending',
    //         success: 'Promise resolved 👌',
    //         error: 'Promise rejected 🤯'
    //     }
    // )


} 

const HomePage = () => {

    const navigate = useNavigate();
    const singleproduct = () =>{
        navigate('/singleproduct')
    }
    const renderProduct = (product) => (
        <div className='HomePage_card' key={product.sku}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
           <div className='HomePage_card_main'>
                <div className='HomePage_card_main_img'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='HomePage_card_main_description'>
                    <h2 onClick={singleproduct}>iPhone 12</h2>
                    <p><span><FaRupeeSign />:   </span> 500000 </p>  
                    <p> 
                        <Rating name="half-rating" defaultValue={3} precision={0.5} />
                    </p>
                </div>  
                <div className='HomePage_card_main_cart'>
                    <button>Buy</button>
                    <span><FaShoppingCart onClick={CartToastify} /></span>
                </div>  
           </div>

        </div>               
    );

        
    
    return (
        <div className='HomePage'>
            {<Carousel />}
            {renderProduct({ sku: '123', image: 'https://picsum.photos/200/300', name: 'testing'})}
        </div>
    )
}

export default HomePage      