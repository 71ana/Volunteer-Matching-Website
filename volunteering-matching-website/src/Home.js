import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Home.css'
import { SiSkillshare } from "react-icons/si";
import { FaGift } from "react-icons/fa";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <div className='topBanner'>
            <div className='container'>
                <h2>Discover Your Impactful Journey</h2>
                <p>Embark on a life-changing adventure by joining our global volunteering community. Your skills and passion can make a real difference in communities around the world. Explore our diverse projects and find the perfect opportunity to contribute to positive change.</p>
                <div className='imageBox'>
                    <img src='/img/Project_SA_Teaching_Childcare.jpg' alt='home'></img>
                </div>
                
                <div className='detail'>
                    <Link to="/howtosignup" className="customLink">How to sign up?</Link>
                </div>
            </div>
        </div>
        <div className='about'>
        <div className='container'>
            <div className='box'>
            <div className='icon'>
                <FaGift />
            </div>
            <div className='detail'>
                <h3>Sense of Purpose</h3>
                <p>Joy in giving!</p>
            </div>
            </div>
            <div className='box'>
            <div className='icon'>
                <SiSkillshare />
            </div>
            <div className='detail'>
                <h3>Personal Growth</h3>
                <p>Build new skills and discover hidden talents!</p>
            </div>
            </div>
            <div className='box'>
            <div className='icon'>
                <MdOutlineConnectingAirports />
            </div>
            <div className='detail'>
                <h3>Community Connection</h3>
                <p>Connect with others!</p>
            </div>
            </div>
            <div className='box'>
            <div className='icon'>
                <FaUserFriends  />
            </div>
            <div className='detail'>
                <h3>Fun and Enjoyment</h3>
                <p>Create lasting memories!</p>
            </div>
            </div>
        </div>
    </div>
    <div className='topBanner'>
            <div className='container'>
                <h2>Empower Change, One Volunteer at a Time</h2>
                <p>At UnityUplift, we believe in the power of individuals to create lasting change. Join our community of passionate volunteers, and together, we can make a meaningful impact on lives and communities across borders. Explore opportunities that align with your skills and interests, and become a catalyst for positive transformation.</p>
                <div className='imageBox'>
                    <img src='/img/run.webp' alt='run'></img>
                </div>
                
                <div className='detail'>
                    <Link to="/Opportunities" className="customLink">Search for a program...</Link>
                </div>
            </div>
        </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/peopleNamibia.jpg' alt='people'></img>
          </div>
          <div className='detail'>
            <p>Amazing products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/doctor.webp' alt='doctor'></img>
          </div>
          <div className='detail'>
            <p>Soft materials</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/lecture.jpg' alt='lecture'></img>
          </div>
          <div className='detail'>
            <p>Bright colours</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/drawing.jpg' alt='drawing'></img>
          </div>
          <div className='detail'>
            <p>Latest style</p>
          </div>
        </div>
      </div>
    </div>
    <div className='topBanner'>
            <div className='container'>
                <h2>Unleash Your Potential, Serve the World</h2>
                <p>Ready to channel your skills and passion into creating a better world? Our volunteering opportunities span across continents, providing you with a chance to contribute to diverse projects. From empowering local communities to environmental sustainability initiatives, your journey to serve starts now.</p>
                <div className='imageBox'>
                    <img src='/img/netball.jpg' alt='netball'></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home