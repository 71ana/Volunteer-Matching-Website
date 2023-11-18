import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Home.css'

const Home = () => {
  return (
    <>
        <div className='topBanner'>
            <div className='container'>
                <div className='imageBox'>
                    <img src='/img/Project_SA_Teaching_Childcare.jpg' alt='home'></img>
                </div>
                <h2>Discover Your Impactful Journey</h2>
                <p>Embark on a life-changing adventure by joining our global volunteering community. Your skills and passion can make a real difference in communities around the world. Explore our diverse projects and find the perfect opportunity to contribute to positive change.</p>
                <div className='detail'>
                    <Link to="/howtosignup">How to sign up? <BsArrowRight/></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home