// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA717RvlOHLP8yZyl2An7f4S6MdVqzLvY8",
  authDomain: "orchid-61e58.firebaseapp.com",
  projectId: "orchid-61e58",
  storageBucket: "orchid-61e58.appspot.com",
  messagingSenderId: "449241085651",
  appId: "1:449241085651:web:86533a2e5be6c825130626",
  measurementId: "G-DG2P9F9N8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

