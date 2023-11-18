import React, {useEffect} from 'react'
import {db} from './firebase'
import './apply.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query, addDoc} from 'firebase/firestore'
import { useState } from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { useAuth } from './AuthContext';

const Apply = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const [ ApplicationSent, setApplicationSent ] = useState();

    const [ Name, setName ] = useState('');
    const [ Adress, setAdress ] = useState('');
    const [ Phone, setPhone ] = useState('');
    const [ StartDate, setStartDate ] = useState('');
    const [ Duration, setDuration ] = useState('');
    const [ Days, setDays ] = useState('');
    const [ Education, setEducation ] = useState('');
    const [ Profession, setProfession ] = useState('');
    const [ CVV, setCVV ] = useState('');
    const [ Skills, setSkills ] = useState('');
    const [ Interest, setInterest ] = useState('');
    const [ Geographic, setGeographic ] = useState('');
    const [ Roles, setRoles ] = useState('');
    const [ Organization, setOrganization ] = useState('');
    const [ Travel, setTravel ] = useState('');
    const [ Accomodation, setAccomodation ] = useState('');
    const [ Emergency, setEmergency ] = useState('');
    const [ Questions, setQuestions ] = useState('');
    const [ Terms, setTerms ] = useState('');


    const senddata = async () => 
    {
        const dbref = collection(db, 'Applications');
        try 
        {
            const matchName = query(dbref, where('Name', '==', Name));
            const matchAdress = query(dbref, where('Adress', '==', Adress));
            const matchPhone = query(dbref, where('Phone', '==', Phone));
            const matchStartDate = query(dbref, where('StartDate', '==',  StartDate));
            const matchDuration = query(dbref, where('Duration', '==', Duration));
            const matchDays = query(dbref, where('Days', '==', Days));
            const matchEducation = query(dbref, where('Education', '==', Education));
            const matchProfession = query(dbref, where('Profession', '==', Profession));
            const matchSkills = query(dbref, where('Skills', '==', Skills));
            const matchInterest = query(dbref, where('Interest', '==', Interest));
            const matchGeographic = query(dbref, where('Geographic', '==', Geographic));
            const matchRoles = query(dbref, where('Roles', '==', Roles));
            const matchOrganization = query(dbref, where('Organization', '==', Organization));
            const matchTravel = query(dbref, where('Travel', '==', Travel));
            const matchAccomodation = query(dbref, where('Accomodation', '==', Accomodation));
            const matchEmergency = query(dbref, where('Emergency', '==', Emergency));
            const matchQuestions = query(dbref, where('Questions', '==', Questions));
            const matchTerms = query(dbref, where('Terms', '==', Terms));


            const NameSnapshot = await getDocs(matchName);
            const NameArray = NameSnapshot.docs.map((doc) => doc.data());

            const AdressSnapshot = await getDocs(matchAdress);
            const AdressArray = AdressSnapshot.docs.map((doc) => doc.data());

            const PhoneSnapshot = await getDocs(matchPhone);
            const PhoneArray = PhoneSnapshot.docs.map((doc) => doc.data());

            const StartDateSnapshot = await getDocs(matchStartDate);
            const StartDateArray = StartDateSnapshot.docs.map((doc) => doc.data());

            const DurationSnapshot = await getDocs(matchDuration);
            const DurationArray = DurationSnapshot.docs.map((doc) => doc.data());

            const DaysSnapshot = await getDocs(matchDays);
            const DaysArray = DaysSnapshot.docs.map((doc) => doc.data());

            const EducationSnapshot = await getDocs(matchEducation);
            const EducationArray = EducationSnapshot.docs.map((doc) => doc.data());

            const ProfessionSnapshot = await getDocs(matchProfession);
            const ProfessionArray = ProfessionSnapshot.docs.map((doc) => doc.data());

            const SkillsSnapshot = await getDocs(matchSkills);
            const SkillsArray =SkillsSnapshot.docs.map((doc) => doc.data());

            const InterestSnapshot = await getDocs(matchInterest);
            const InterestArray = InterestSnapshot.docs.map((doc) => doc.data());

            const GeographicSnapshot = await getDocs(matchGeographic);
            const GeographicArray = GeographicSnapshot.docs.map((doc) => doc.data());

            const RolesSnapshot = await getDocs(matchRoles);
            const RolesArray = RolesSnapshot.docs.map((doc) => doc.data());

            const OrganizationSnapshot = await getDocs(matchOrganization);
            const OrganizationArray = OrganizationSnapshot.docs.map((doc) => doc.data());

            const TravelSnapshot = await getDocs(matchTravel);
            const TravelArray = TravelSnapshot.docs.map((doc) => doc.data());

            const AccomodationSnapshot = await getDocs(matchAccomodation);
            const AccomodationArray = AccomodationSnapshot.docs.map((doc) => doc.data());

            const EmergencySnapshot = await getDocs(matchEmergency);
            const EmergencyArray = EmergencySnapshot.docs.map((doc) => doc.data());

            const QuestionsSnapshot = await getDocs(matchQuestions);
            const QuestionsArray = QuestionsSnapshot.docs.map((doc) => doc.data());
            
            const TermsSnapshot = await getDocs(matchTerms);
            const TermsArray = TermsSnapshot.docs.map((doc) => doc.data());


            if (NameArray.length > 0 && AdressArray.length > 0 && PhoneArray.length > 0 && StartDateArray.length > 0 && DurationArray.length > 0 && DaysArray.length > 0 && EducationArray.length > 0 && ProfessionArray.length > 0 && SkillsArray.length > 0 && InterestArray.length > 0 && GeographicArray.length > 0 && RolesArray.length > 0 && OrganizationArray.length > 0 && TravelArray.length > 0 && AccomodationArray.length > 0 && EmergencyArray.length > 0 && TermsArray.length > 0) 
            {      
                setApplicationSent(false);
                alert("An error has occured, please check if any of the fields are empty!");                           
            } 
            else 
            {
                await addDoc(dbref, {Name: Name, Adress: Adress, Phone: Phone, StartDate: StartDate, Duration: Duration, Days: Days, Education: Education, Profession: Profession, CVV: CVV, Skills: Skills, Interest: Interest, Geographic: Geographic, Roles: Roles, Travel: Travel, Accomodation: Accomodation, Days: Days, Emergency: Emergency, Questions: Questions, Terms: Terms});
                setApplicationSent(true);
                alert("Your application was sent!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }   
    }

    return (
        <>
        <div className='checkout_container'>
            <div className='contant'>
                <h2>Your Application <FaCheckSquare/></h2>
                <div className='form'>
                        <h3>Personal information:</h3>
                        <input type='text' name='Name' placeholder='*  Full Name' autoComplete='off' onChange={(e) => setName(e.target.value)}></input>
                        <input type='text' name='Adress' placeholder='*  Adress' autoComplete='off' onChange={(e) => setAdress(e.target.value)}></input>
                        <input type='text' name='Phone' placeholder='*  Phone Number' autoComplete='off' onChange={(e) => setPhone(e.target.value)}></input>
                        <h3>Availability:</h3>
                        <input type='text' name='StartDate' placeholder='*  Preferred Start Date' autoComplete='off' onChange={(e) => setStartDate(e.target.value)}></input>
                        <input type='text' name='Duration' placeholder='*  Duration of Availability' autoComplete='off' onChange={(e) => setDuration(e.target.value)}></input>
                        <input type='text' name='Days' placeholder='*  Days of the Week and Times Available' autoComplete='off' onChange={(e) => setDays(e.target.value)}></input>
                        <h3>Skills and Qualifications:</h3>
                        <input type='text' name='Education' placeholder='*  Educational Background' autoComplete='off' onChange={(e) => setEducation(e.target.value)}></input>
                        <input type='text' name='Profession' placeholder='*  Professional Experience' autoComplete='off' onChange={(e) => setProfession(e.target.value)}></input>
                        <input type='text' name='Skills' placeholder='*  Specific Skills (e.g., language proficiency, technical skills)' autoComplete='off' onChange={(e) => setSkills(e.target.value)}></input>
                        <h3>Interests and Preferences:</h3>
                        <input type='text' name='Interest' placeholder='*  Areas of Interest (e.g., education, healthcare, environment)' autoComplete='off' onChange={(e) => setInterest(e.target.value)}></input>
                        <input type='text' name='Geographic' placeholder='*  Geographic Preferences (if applicable)' autoComplete='off' onChange={(e) => setGeographic(e.target.value)}></input>
                        <h3>Previous Volunteer Experience:</h3>
                        <input type='text' name='Roles' placeholder='*  Past Volunteer Roles' autoComplete='off' onChange={(e) => setRoles(e.target.value)}></input>
                        <input type='text' name='Organization' placeholder='*  Organizations Worked With' autoComplete='off' onChange={(e) => setOrganization(e.target.value)}></input>
                        <h3>Previous Volunteer Experience:</h3>
                        <input type='text' name='Travel' placeholder='*  Travel Preferences or Restrictions' autoComplete='off' onChange={(e) => setTravel(e.target.value)}></input>
                        <input type='text' name='Accomodation' placeholder='*  Accommodation Preferences (if applicable)' autoComplete='off' onChange={(e) => setAccomodation(e.target.value)}></input>
                        <h3>Emergency Contact Information:</h3>
                        <input type='text' name='Emergency' placeholder='*  Name and Contact Information of a Person to Notify in Case of Emergency' autoComplete='off' onChange={(e) => setEmergency(e.target.value)}></input>
                        <h3>Additional Questions:</h3>
                        <input type='text' name='Questions' placeholder='  Open-ended questions' autoComplete='off' onChange={(e) => setQuestions(e.target.value)}></input>
                        <h3>Type 'yes' if you agree to Terms and Conditions:</h3>
                        <input type='text' name='Terms' placeholder='*  yes' autoComplete='off' onChange={(e) => setTerms(e.target.value)}></input>
                        {
                            isAuthenticated ? 
                            <button type='submit' onClick={senddata}>Send</button>
                            : <a type='submit' href="/login">Login to Apply</a>
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Apply