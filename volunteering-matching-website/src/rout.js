import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import Navigation from './Navigation'
import Home from './Home'
import HowToSignUp from "./howToSignUp";
import Contact from "./Contact";
import Opportunity from './opportunities'
import Form from './form'
import Apply from './apply'
import AdminPrograms from './admin-programs'
import AdminUsers from './admin-users'
import AdminApplications from './admin-applications'

const Rout = ({opportunity, setOpportunity, detail, view, close, setClose, form, setForm, addtoform}) => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtoform={addtoform}/>}/>
          <Route path='/opportunity' element={<Opportunity opportunity={opportunity} setOpportunity={setOpportunity} detail={detail} view={view} close={close} setClose={setClose} addtoform={addtoform}/>} />
          <Route path='/form' element={<Form form={form} setForm={setForm} />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/howToSignUp' element={<HowToSignUp />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/admin-programs' element={<AdminPrograms />} />
          <Route path='/admin-users' element={<AdminUsers />} />
          <Route path='/admin-application' element={<AdminApplications />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout