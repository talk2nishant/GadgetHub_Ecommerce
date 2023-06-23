import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";

const RegisterUser = () => {
    const RegisterUser = () =>(
        <div className='RegisterUser_container'>
            <h2 className='RegisterUser_container_heading'>Register yout acccount</h2>
            <form action="" className='RegisterUser_container_form'>
                <label htmlFor="name"></label>
                <input type="text" name='name' placeholder='enter your name' />
                <label htmlFor="email">Email address</label>
                <input type="email" name='email' placeholder='email address' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='*********' id='password' />
                <button type='submit'>Submit</button>
            </form>
            <Link to={"/login"}> <span>you already have an account.</span>  Login here.</Link>
        </div>
      
    )
  return (
    <div className='RegisterUser'>
    
        { RegisterUser() }
    </div>
  )
}

export default RegisterUser;