import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminApplications = () => {
    const [ name, setName ] = useState('');
    const [ adress, setAdress ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ duration, setDuration ] = useState('');
    const [ days, setDays ] = useState('');
    const [ education, setEducation ] = useState('');
    const [ profession, setProfession ] = useState('');
    const [ CVV, setCVV ] = useState('');
    const [ skills, setSkills ] = useState('');
    const [ interest, setInterest ] = useState('');
    const [ geographic, setGeographic ] = useState('');
    const [ roles, setRoles ] = useState('');
    const [ organization, setOrganization ] = useState('');
    const [ travel, setTravel ] = useState('');
    const [ accomodation, setAccomodation ] = useState('');
    const [ emergency, setEmergency ] = useState('');
    const [ questions, setQuestions ] = useState('');
    const [ terms, setTerms ] = useState('');
    const [ fetchData, setFetchData ] = useState([]);

    const dbref = collection(db, "Applications");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Name: name, Adress: adress, Phone: phone, StartDate: startDate, Duration: duration, Days: days, Education: education, Profession: profession, CVV: CVV, Skills: skills, Interest: interest, Geographic: geographic, Roles: roles, Travel: travel, Accomodation: accomodation, Days: days, Emergency: emergency, Questions: questions, Terms: terms});

        if(adddata)
        {
            alert("Data added successfully!");
            window.location.reload();
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
        setName(matchId.Name);
        setAddress(matchId.Address);
        setPhone(matchId.Phone);
        setStartDate(matchId.StartDate); 
        setDuration(matchId.Duration);  
        setDays(matchId.Days);
        setEducation(matchId.Education);
        setProfession(matchId.Profession);
        setCVV(matchId.CVV); 
        setSkills(matchId.Skills);  
        setInterest(matchId.Interest);
        setGeographic(matchId.Geographic);
        setRoles(matchId.Roles);
        setOrganization(matchId.Organization); 
        setTravel(matchId.Travel);  
        setAccomodation(matchId.Accomodation);
        setEmergency(matchId.Emergency);
        setQuestions(matchId.Questions);
        setTerms(matchId.Terms);  
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Name: name, Adress: adress, Phone: phone, StartDate: startDate, Duration: duration, Days: days, Education: education, Profession: profession, CVV: CVV, Skills: skills, Interest: interest, Geographic: geographic, Roles: roles, Travel: travel, Accomodation: accomodation, Days: days, Emergency: emergency, Questions: questions, Terms: terms});
            alert("Data updated successfully!");
            window.location.reload();
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
            window.location.reload();
        } 
        catch (error) 
        {
            alert(error, "Error occured when deleting data!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Add / Update Form for Applications</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Name' autocomplete='Off' value={name} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Adress' autocomplete='Off' value={adress} onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Phone' autocomplete='Off' value={phone} onChange={(e) => setRating(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Start Date' autocomplete='Off' value={startDate} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Duration' autocomplete='Off' value={duration} onChange={(e) => setOrganization(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Days' autocomplete='Off' value={days} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Education' autocomplete='Off' value={education} onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Profession' autocomplete='Off' value={profession} onChange={(e) => setRating(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='CVV' autocomplete='Off' value={CVV} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Skills' autocomplete='Off' value={skills} onChange={(e) => setOrganization(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Interests' autocomplete='Off' value={interest} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Geographic' autocomplete='Off' value={geographic} onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Roles' autocomplete='Off' value={roles} onChange={(e) => setRating(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Organization' autocomplete='Off' value={organization} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Travel' autocomplete='Off' value={travel} onChange={(e) => setOrganization(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Accomodation' autocomplete='Off' value={accomodation} onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Emergency' autocomplete='Off' value={emergency} onChange={(e) => setRating(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Questions' autocomplete='Off' value={questions} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Terms' autocomplete='Off' value={terms} onChange={(e) => setOrganization(e.target.value)}></input>
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
                                <h3>Name: {data.Name}</h3>
                                <h3>Adress: {data.Adress}</h3>
                                <h3>Phone: {data.Phone}</h3>
                                <h3>StartDate: {data.StartDate}</h3>    
                                <h3>Duration: {data.Duration}</h3> 
                                <h3>Days: {data.Days}</h3>
                                <h3>Education: {data.Education}</h3>
                                <h3>Profession: {data.Profession}</h3>
                                <h3>CVV: {data.CVV}</h3>    
                                <h3>Skills: {data.Skills}</h3> 
                                <h3>Interest: {data.Interest}</h3>
                                <h3>Geographic: {data.Geographic}</h3>
                                <h3>Roles: {data.Roles}</h3>
                                <h3>Organization: {data.Organization}</h3>    
                                <h3>Travel: {data.Travel}</h3> 
                                <h3>Accomodation: {data.Accomodation}</h3>
                                <h3>Emergency: {data.Emergency}</h3>
                                <h3>Questions: {data.Questions}</h3>
                                <h3>Terms: {data.Terms}</h3>                 
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

export default AdminApplications