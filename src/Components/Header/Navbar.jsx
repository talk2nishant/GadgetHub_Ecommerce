import React from 'react';
import { FaSistrix, FaCartArrowDown, FaAngleDown } from 'react-icons/fa';
import './style.scss'
import { useNavigate,Link} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate() ;
    const loginPage = () => {
        navigate("/login") 
    }
  
    const navigationBar = () =>(
        <div className='navigationBar'>
            <div className='navigationBar_main'>
                <h2 className='navigationBar_main_heading'> <Link to={"/"}>GadgetsHub</Link> </h2> 
                <form action="" className='navigationBar_main_serchbar'>
                    <input class="form-control me-2" type="text" placeholder='Search...' name='search' />
                    <button type='submit'><FaSistrix /></button>
                </form>                
                <ul className='navigationBar_main_ul'>
                    <li className='navigationBar_main_ul_li'> <Link to={"/"}>Home</Link></li>
                    <li className='navigationBar_main_ul_li'><Link to={"/cart"}>Cart<FaCartArrowDown style={{ margin: "auto 10px" }} /></Link></li>                
                    <li className='navigationBar_main_ul_li_dropdown'>
                        <span> Menu <FaAngleDown /> </span>
                        <ul className='navigationBar_main_ul_li_dropdown_ul'>
                            <li><Link to={"/orderdetail"}>My Profile</Link></li>
                            <li><Link to={"/orderdetail"}>My Order</Link></li>
                            <li><Link to={"/orderdetail"}>Address</Link></li>
                            <li><Link to={"/orderdetail"}>Logout</Link></li>
                        </ul>
                    </li>
                    <button className='button' type='button'  onClick={loginPage}>Login</button>                                    
                </ul>
            </div>
        </div>
    )
  return (
    <div className='navigationBar_Main'>
        { navigationBar() }
    </div> 
  )
}

export default Navbar