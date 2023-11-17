/* eslint-disable no-restricted-globals */
import React, {useEffect} from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Navigation.css'
import { useState } from 'react'
import { useEmail, EmailProvider, useEmailValue } from './EmailContext';
import { useAuth } from './AuthContext';
import Login from './login'

const Navigation = ({searchbtn}) => { 
    const [search, setSearch] = useState()
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const { email, setEmail } = useEmail();  

    return (
    <>    
        <div className="mainHeader"> 
          <div className='container'>
              <div className='logo'>
                  <img src='./images/logo.jpg' alt='logo'></img>
              </div>
              <div className='search_box'>
                  <input type='text' value={search} placeholder='Search the name of a country...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                  <button onClick={() => searchbtn (search)}>Search</button>
              </div>
              <div className='icon'>                
                 
                          <div className='account'>
                              <div className='user_icon'>                      
                                  <AiOutlineUser/>
                              </div> 
                              <p>Hello, {email}!</p> 
                          </div>   
                              
                  <div className='second_icon'>
                  <Link to="/cart" className='link'><BsBagCheck/></Link>              
                  </div>              
              </div>
          </div>
      </div> 

      <div className='header'>
        <div className='container'>
            <div className='navig'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Countries</Link>
                    </li>
                    <li className="admin">
                        { 
                            isAuthenticated && email === 'admin' && 
                            (
                                <Link to='/crudProducts' className='link'>Admin-Countries</Link>
                            )
                        }
                    </li>
                    <li className="adminUsers">
                        { 
                            isAuthenticated && email === 'admin' && 
                            (
                                <Link to='/crudUsers' className='link'>Admin-Users</Link>
                            )
                        }
                    </li>
                    <li className="adminOrders">
                        { 
                            isAuthenticated && email === 'admin' && 
                            (
                                <Link to='/crudOrders' className='link'>Admin-People Interested</Link>
                            )
                        }
                    </li>
                </ul>
            </div>           
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => { setAuthenticationStatus(false); window.location.reload();}}><CiLogout /></button>
                    :
                    <Link to="/login" className="auth-link" ><CiLogin /></Link>
                }                          
            </div>
        </div>
    </div>     
    </>
  )
}

export default Navigation