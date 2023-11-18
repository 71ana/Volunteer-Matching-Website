import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import Navigation from './Navigation'
import Home from './Home'
import HowToSignUp from "./howToSignUp";
import Contact from "./Contact";


const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/howToSignUp' element={<HowToSignUp />} />
          <Route path='/Contact' element={<Contact />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout