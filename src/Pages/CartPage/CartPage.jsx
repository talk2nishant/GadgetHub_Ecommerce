import React from 'react'
import './style.scss'
import { useState } from 'react'


const CartPage = () => {
    const[count ,setCount] = useState(0);
    const CartPage = () =>(
        <div className='CartPage_container'>
            <div className='CartPage_container_img'>
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/s/a/7/-original-imagzcvgzgsngy4h.jpeg?q=70" alt="" />
            </div>
            <div className='CartPage_container_des'>
                <h2>boat watch</h2>
                <p>boAt Wave Beat with 600+ Watch Faces, 1.69" HD Display and Crest Health Ecosystem Smartwatch  (Black Strap, Free Size)</p>
                <p> <span>1,099</span> </p>
                <button>Remove</button>
                <div className='IncDec'>
                    <div>
                        <h2>{count}</h2>
                    </div>
                    <div>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <button onClick={() => setCount(count - 1)}>-</button>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
  return (
    <div className='CartPage'>
          {CartPage()}
    </div>
  )
}

export default CartPage