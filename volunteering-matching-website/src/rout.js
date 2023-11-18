import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import Navigation from './Navigation'


const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <EmailProvider>
      <Routes>

          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout