// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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