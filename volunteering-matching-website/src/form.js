import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './form.css'
import { FaStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Form = ({form, setForm}) => {
    const removeopportunity = (opportunity) => 
    {
        const exsit = form.find((x) => 
        {
            return x.id === opportunity.id
        })
        if(exsit.qty > 0)
        {
            setForm(form.filter((x) => 
            {
                return x.id !== opportunity.id
            }))
        }
    }

    const Totalprice = form.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='formcontainer'>
        {form.length === 0 && 
        <div className='emptyform'>
        <h2 className='empty'>You have not chosen any program available.</h2>
        <Link to='/opportunity' className='emptyformbtn'>Look for a volunteering program that fits you!</Link>
        </div>
        }
        <div className='contant'>
            {
                form.map((curElm) => 
                {
                    return(
                        <div className='form_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.Country}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Rating: {curElm.Rating} <FaStar/></p>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeopportunity(curElm)}><MdDelete /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            form.length > 0 &&
            <>
            <Link to='/apply' className='apply'>Apply to this program</Link>
            </>
        }
    </div>
    </>
  )
}

export default Form