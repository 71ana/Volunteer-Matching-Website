import React, { useState } from 'react'
import {db} from './firebase'
import './registration.css'
import {Link} from 'react-router-dom'
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Registration = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const dbref = collection(db, 'Login');
    const[metch, setMetch] = useState([]);

    const auth = getAuth();

    const register = async () =>
    {
        const matchEmail = query(dbref, where('Email', '==', email));
        try 
        {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Access the newly created user via userCredential.user
            const newUser = userCredential.user;

            // Update user profile with the provided name
            await updateProfile(newUser, { displayName: name });

            alert('Successfully registered!');
            window.location.href = '/login';
        } 
        catch (error) 
        {
            alert(error);
        }
    }

    return (
        <>
        <div className='container'>
            <div className='form'>
                <h2>Register</h2>
                <div className='box'>
                    <input type='text' placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Already have an account! <Link to='/login' className="log-link">Login</Link></p>
                    <button onClick={register}>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Registration