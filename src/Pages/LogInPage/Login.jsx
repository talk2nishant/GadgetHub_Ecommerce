import React from 'react'
import { Link } from "react-router-dom";
import "./style.scss"

const Login = () => {

    const LoginPage = () =>(
       <div className='LoginPage_container'>
            <h2 className='LoginPage_container_heading'>Welcom to Login</h2>   
            <form action="" className='LoginPage_container_form'>
                <label htmlFor="email">Email address</label>
                <input type="email" name='email' placeholder='email address' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password'  placeholder='*********' id='password' />
                <button type='submit'>Login</button>
                <Link to={"/register"}>Forgot password?</Link>
            </form>
            <Link to={"/register"}> <span>Don't have an account?</span>  Register here.</Link>
       </div>

    )
  return (
        <div className='LoginPage'>
            { LoginPage() }
        </div> 
  ) 
}

export default Login