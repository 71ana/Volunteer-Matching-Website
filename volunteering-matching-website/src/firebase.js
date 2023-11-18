
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCvcSj0qfqnCF853OQ_xzzO3uKGBtA3m1Y",
    authDomain: "volunteering-matching-website.firebaseapp.com",
    projectId: "volunteering-matching-website",
    storageBucket: "volunteering-matching-website.appspot.com",
    messagingSenderId: "850080353101",
    appId: "1:850080353101:web:73b95e543b94ab71580504",
    measurementId: "G-Y4JHR21MKG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };