import './App.css';
import React from 'react'
import Navbar from './Components/Header/Navbar';
import Home from '../src/Pages/HomePage/Home'
import Login from '../src/Pages/LogInPage/Login'
import RegisterUser from '../src/Pages/CreateUser/RegisterUser'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CartPage from './Pages/CartPage/CartPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>    
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/cart' element={<CartPage/>}/>
         </Routes>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;
