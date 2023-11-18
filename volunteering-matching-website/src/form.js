import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './form.css'

const Form = ({form, setForm}) => {
    const incqty = (opportunity) => 
    {
        const exsit = form.find((x) => 
        {
            return x.id === opportunity.id
        })
        setForm(form.map((curElm) => 
        {
            return curElm.id === opportunity.id ? {...exsit, qty: exsit.qty + 1} : curElm
        }))
    }

    // Dec Qty
    const decqty = (opportunity) => 
    {
        const exsit = form.find((x) => 
        {
            return x.id === opportunity.id
        })
        setForm(form.map((curElm) => 
        {
            return curElm.id === opportunity.id ? {...exsit, qty: exsit.qty - 1} : curElm
        }))
    }
    //Remove form opportunity
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
        <h2 className='empty'>You have not chosen any program available yet.</h2>
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
                                <p>Price: {curElm.Rating} RON</p>
                                <div className='qty'>
                                    <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                    <input type='text' value={curElm.qty}></input> 
                                    <button className='incqty' onClick={() => incqty(curElm)}>+</button>                               
                                </div>
                                <h4 className='subtotal'>subtotal: {curElm.Price * curElm.qty} RON</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeopportunity(curElm)}><AiOutlineClose /></button>
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
            <h2 className='totalprice'>total: {Totalprice} RON</h2>
            <Link to='/checkout' className='checkout'>Apply to this program</Link>
            </>
        }
    </div>
    </>
  )
}

export default Form