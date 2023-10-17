import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";

const RegisterUser = () => {
    const RegisterUser = () =>(
        <div className='LoginPage_container_main'>
            <div className='LoginPage_container_main_left'>
                <h1>Hello,Friend!</h1>
                <p>Enter your personal detail and start journey with us.</p>
            </div>

            <div className='LoginPage_container_main_right'>
                <h2 className='LoginPage_container_main_right_heading'>Register yout acccount</h2>
                <form action="" className='LoginPage_container_main_right_form'>
                    <label htmlFor="name">Email address</label>
                    <input type="text" name='name' placeholder='enter your email' />
                    <label htmlFor="email">Passwword</label>
                    <input type="password" name='email' placeholder='*********' />
                    <label htmlFor="password">Confrim Password</label>
                    <input type="password" name='password' placeholder='*********' id='password' />
                    <button type='submit'>Submit</button>
                    <Link to={"/register"}>Forgot password?</Link>
                </form>
                <Link to={"/login"}> <span>Don't have an account?</span> Login here.</Link>
            </div>
        </div>



        // <div className='RegisterUser_container'>
        //     <h2 className='RegisterUser_container_heading'>Register yout acccount</h2>
        //     <form action="" className='RegisterUser_container_form'>
        //         <label htmlFor="name"></label>
        //         <input type="text" name='name' placeholder='enter your name' />
        //         <label htmlFor="email">Email address</label>
        //         <input type="email" name='email' placeholder='email address' />
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name='password' placeholder='*********' id='password' />
        //         <button type='submit'>Submit</button>
        //     </form>
        //     <Link to={"/login"}> <span>you already have an account.</span>  Login here.</Link>
        // </div>
      
    )
  return (
    <div className='RegisterUser'>
    
        { RegisterUser() }
    </div>
  )
}

export default RegisterUser;