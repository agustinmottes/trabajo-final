import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
   
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZfBIUGbPkynWCVGwKrCw-elXk2HZDB0g",
  authDomain: "proyecto-react-js-agustin.firebaseapp.com",
  projectId: "proyecto-react-js-agustin",
  storageBucket: "proyecto-react-js-agustin.appspot.com",
  messagingSenderId: "76304514227",
  appId: "1:76304514227:web:7368703890180a041b44c6"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


