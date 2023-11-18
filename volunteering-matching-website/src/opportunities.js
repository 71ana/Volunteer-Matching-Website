import React, {useState} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Opportunitydetail from './opportunitiesdetail'
import './opportunities.css'
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const Opportunity = ({opportunity, setOpportunity, detail, view, close, setClose, addtoform}) => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    
    const filtteropportunity = (opportunity) =>
    {
        const update = Opportunitydetail.filter((x) => 
        {
           return x.Country === opportunity;
        })
        setOpportunity(update);
    }
    const AllCountries = () => 
    {
        setOpportunity(Opportunitydetail)
    }
  return (
    <>
    {
        close ?
        <div className='opportunity_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='opportunitybox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Country}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>Introducing our versatile and comfortable clothing item, designed to complement any occasion. This opportunity is expertly crafted from high-quality materials, ensuring both style and comfort. With a wide range of sizes available, you can find the perfect fit for any body type. Whether you're dressing up for a special event or looking for an everyday favorite, this piece is the ideal choice for both fashion and ease...</p>
                                <h3>{curElm.Rating} RON</h3>
                                <div className='icon'>
                                {
                                    isAuthenticated ? 
                                    <button onClick={() => addtoform(curElm)}>I'm interested!</button>
                                    :
                                    <a href="/login"><button>I'm interested!</button></a>
                                }       
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='opportunitybox'></div>
        </div>
    </div> : null
    }
    <div className='opportunitys'>
        <h2>All the countries in which we have available programs</h2>
        <p>home . opportunities</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>countries</h3>
                    <ul>
                    <li onClick={() => AllCountries ()}>All Countries</li>
                        <li onClick={() => filtteropportunity ("South Africa")}>South Africa</li>
                        <li onClick={() => filtteropportunity ("Ukraine")}>Ukraine</li>
                        <li onClick={() => filtteropportunity ("Palestine")}>Palestine</li>
                        <li onClick={() => filtteropportunity ("Israel")}>Israel</li>
                        <li onClick={() => filtteropportunity ("Egypt")}>Egypt</li>
                    </ul>
                </div>
            </div>
            <div className='opportunitybox'>
                <div className='contant'>
                    {
                        opportunity.map((curElm) => 
                        {
                            return(
                                <>
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                          <img src={curElm.Img} alt={curElm.Title}></img>
                                          <div className='icon'>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtoform (curElm)}><AiOutlineShoppingCart /></li>
                                                :
                                                <a href="/login"><AiOutlineShoppingCart /></a>
                                            }
                                            <li onClick={() => view (curElm)}><BsEye /></li>                                    
                                          </div>
                                        </div>
                                        <div className='detail'>
                                          <p>{curElm.Country}</p>
                                          <h3>{curElm.Title}</h3>
                                          <h4>{curElm.Rating} <FaRegStar /></h4>
                                        </div>
                                      </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Opportunity