import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminPrograms = () => {
    const [ id, setId ] = useState();
    const [ title, setTitle ] = useState();
    const [ country, setCountry ] = useState();
    const [ rating, setRating ] = useState();
    const [ organization, setOrganization] = useState();
    const [ description, setDescription] = useState();
    const [ image, setImage ] = useState();
    const [ fetchData, setFetchData ] = useState([]);

    const dbref = collection(db, "Opportunitydetail");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Title: title, Country: country, Rating: rating, Img: image, Organization: organization, Description: description});

        if(adddata)
        {
            alert("Data added successfully!");
            await fetch();
        }
        else
        {
            alert("Error occured when adding data!");
        }
    }

    const fetch = async () =>
    {
        const snapshot = await getDocs(dbref);
        const fetchdata = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})));
        setFetchData(fetchdata);      
    }

    useEffect( () =>
    {
        fetch();
    }, []
    )

    const passData = async (id) =>
    {
        const matchId = fetchData.find((data) => {
            return data.id === id;
        })
        setId(matchId.id);  
        setTitle(matchId.Title);
        setCountry(matchId.Country);
        setRating(matchId.Rating);
        setDescription(matchId.Description);
        setImage(matchId.Img);  
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Title: title, Country: country, Rating: rating, Img: image, Organization: organization, Description: description});
            alert("Data updated successfully!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Error occured when updating data!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Data deleted successfully!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Error occured when deleting data!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Add / Update Form for Programs</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Title' autocomplete='Off' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Country' autocomplete='Off' value={country} onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Rating' autocomplete='Off' value={rating} onChange={(e) => setRating(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Image URL' autocomplete='Off' value={image} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Organization' autocomplete='Off' value={organization} onChange={(e) => setOrganization(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Description' autocomplete='Off' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <button onClick={add}>Add</button>
            <button onClick={update}>Update</button>
        </div>
        <div class='database'>
            <h2>CRUD Database</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Id: {data.id}</h3>
                                <h3>Title: {data.Title}</h3>
                                <h3>Country: {data.Country}</h3>
                                <h3>Rating: {data.Rating}</h3>
                                <h3>Image URL: {data.Img}</h3>    
                                <h3>Organization: {data.Organization}</h3> 
                                <h3>Description: {data.Description}</h3>              
                                <button onClick={ () => passData (data.id) }>Update</button>
                                <button onClick={ () => del (data.id) }>Delete</button>
                            </div>
                            </>
                        )
                    })
                }                
            </div>
        </div>
        </>
    )
}

export default AdminPrograms