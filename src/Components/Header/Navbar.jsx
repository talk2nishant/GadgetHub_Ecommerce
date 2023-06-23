import React from 'react';
import { FaSistrix, FaCartArrowDown } from 'react-icons/fa';
import './style.scss'
import { useNavigate,Link} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/login")
    }
  
    const navigationBar = () =>(
        <div className='navigationBar'>
            <div className='navigationBar_heading'>
                <h2 className='navigationBar_heading'> <Link to={"/"}>GadgetsHub</Link> </h2> 
                <form action="" className='serchbar'>
                    <input type="text" placeholder='Search...' name='search' />
                    <button type='submit'><FaSistrix /></button>
                </form> 
                <ul className='navigationBar_ul'>
                    <li className='navigationBar_li'> <Link to={"/"}>Home</Link></li>
                    <li className='navigationBar_li'><FaCartArrowDown style={{ margin: "auto 10px" }} /><Link to={"/cart"}>Cart</Link></li>
                    <button onClick={loginPage} >
                        Login
                    </button>
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