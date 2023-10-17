import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./style.scss";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = () =>{
        console.log( email,password,'login successfull');
    }


    // const loginToastify = () =>{

    //     const loginToastify3sec = new Promise((resolve,reject) =>{
    //         setTimeout(() =>{
    //             resolve(loginToastify3sec)
    //         },2000)
    //     })
    //     toast.promise(
    //         {
    //             pending: 'promise is pending',
    //             success: 'promise is resolve',
    //             error :'promise reject'

    //         }
    //     )
    // }


    const LoginPage = () =>(
       <div className='LoginPage_container'>
     

            <div className='LoginPage_container_main'>
                    <div className='LoginPage_container_main_left'>
                            <h1>Hello,Friend!</h1>
                            <p>Enter your personal detail and start journey with us.</p>        
                    </div>

                    <div className='LoginPage_container_main_right'>
                        <h2 className='LoginPage_container_main_right_heading'>Welcom to Login</h2>
                            <form action="" className='LoginPage_container_main_right_form'>
                                <label htmlFor="email">Email address</label>
                        <input type="email" name='email' placeholder='email address' onChange={(e)=>{setEmail(e.target.value)}} />
                                <label htmlFor="password" >Password</label>
                        <input type="password" name='password' placeholder='*********' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                        <button  onClick={login}>Login</button>
                                <Link to={"/register"}>Forgot password?</Link>
                            </form>
                        <Link to={"/register"}> <span>Don't have an account?</span>  Register here.</Link>
                    </div>
            </div>

       </div>

    )
  return (
        <div className='LoginPage'>
            { LoginPage() }
        </div> 
  ) 
}

export default Login



    