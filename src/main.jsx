import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBLhvw_dJPvtOAdNlpTKZK0pk8I66J6zg",
  authDomain: "proyectofinal-ch-4da8c.firebaseapp.com",
  projectId: "proyectofinal-ch-4da8c",
  storageBucket: "proyectofinal-ch-4da8c.appspot.com",
  messagingSenderId: "1060463910529",
  appId: "1:1060463910529:web:d26144ed39fbbb85e9b780"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
