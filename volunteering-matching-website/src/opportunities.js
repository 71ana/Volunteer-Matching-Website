import React, {useState} from 'react'
import { FaWpforms } from "react-icons/fa";
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
                                <p>Embark on a unique volunteering journey where your contribution goes beyond borders. Join our program, where your stay and meals are provided, ensuring your focus remains on making a meaningful impact. Engage in hands-on activities tailored to the community's needs, from teaching and building to sustainable projects. Immerse yourself in local culture, forming connections that last a lifetime. Your volunteer experience becomes a seamless blend of purposeful work, cultural exchange, and the assurance of a comfortable stay. Choose this program for an enriching adventure where every moment is dedicated to positive change...</p>
                                <h3>{curElm.Rating} <FaRegStar /></h3>
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
                                                <li onClick={() => addtoform (curElm)}><FaWpforms /></li>
                                                :
                                                <a href="/login"><FaWpforms /></a>
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