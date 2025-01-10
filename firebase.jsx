// Import the functions you need from the SDKs you need
import { getAuth  } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "car-doctor-46518.firebaseapp.com",
  projectId: "car-doctor-46518",
  storageBucket: "car-doctor-46518.firebasestorage.app",
  messagingSenderId: "528427126560",
  appId: "1:528427126560:web:d776401aefcd8231b4d145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("hey it from firebse login ",import.meta.env.VITE_API_KEY)
const auth=getAuth(app)
export default auth ;

