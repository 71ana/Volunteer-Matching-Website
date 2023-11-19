import React, {useState} from 'react'
import { FaWpforms } from "react-icons/fa";
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Opportunitydetail from './opportunitiesdetail'
import './opportunities.css'
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

const Opportunity = ({opportunity, setOpportunity, detail, view, close, setClose, addtoform}) => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    
    const filteropportunity = (opportunity) =>
    {
        const update = Opportunitydetail.filter((x) => 
        {
           return x.Country === opportunity;
        })
        setOpportunity(update);
    }

    const filterOrganization = (opportunity)  =>{
        const update = Opportunitydetail.filter((x) =>{
            return x.Organization === opportunity;
            }
        )
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
                                    <p>{curElm.Organization}</p>
                                    <p className='description'>{curElm.Description}</p>
                                    <h3>{curElm.Rating} <FaStar /></h3>
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
            </div>
        </div> : null
    }

        <h2 className='opportunities_title'>All the countries in which we have available programs</h2>
        <p className='opportunities_subtitle'>home . opportunities</p>

    <div className='oppportunities-display'>
        <div className='opportunitys'>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'>
                        <h3>countries</h3>
                        <ul>
                            <li onClick={() => AllCountries ()}>All Countries</li>
                            <li onClick={() => filteropportunity ("South Africa")}>South Africa</li>
                            <li onClick={() => filteropportunity ("Ukraine")}>Ukraine</li>
                            <li onClick={() => filteropportunity ("Palestine")}>Palestine</li>
                            <li onClick={() => filteropportunity ("Israel")}>Israel</li>
                            <li onClick={() => filteropportunity ("Egypt")}>Egypt</li>
                            <li onClick={() => filteropportunity ("Namibia")}>Namibia</li>
                            <li onClick={() => filteropportunity ("Somalia")}>Somalia</li>
                            <li onClick={() => filteropportunity ("Sudan")}>Sudan</li>
                            <li onClick={() => filteropportunity ("Sierra Leone")}>Sierra Leone</li>
                        </ul>
                    </div>
                    <div className='categories'>
                        <h3>Organizations</h3>
                        <ul>
                            <li onClick={() => AllCountries ()}>All Organization</li>
                            <li onClick={() => filterOrganization("UNICEF")}>UNICEF</li>
                            <li onClick={() => filterOrganization("Red Cross/Red Crescent")}>Red Cross/Red Crescent</li>
                            <li onClick={() => filterOrganization("Doctors Without Borders")}>Doctors Without Borders</li>
                            <li onClick={() => filterOrganization("Volunteers of America")}>Volunteers of America</li>
                            <li onClick={() => filterOrganization("Greenpeace")}>Greenpeace</li>
                            <li onClick={() => filterOrganization("Goodwill Industries")}>Goodwill Industries</li>                    
                            <li onClick={() => filterOrganization("Teach For All")}>Teach For All</li>
                            <li onClick={() => filterOrganization("Mercy Corps")}>Mercy Corps</li>
                            <li onClick={() => filterOrganization("Random")}>Random</li>
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
                                                  <h4>{curElm.Rating} <FaStar /></h4>
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
        </div>
    </>
  )
}

export default Opportunity