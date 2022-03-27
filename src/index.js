import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5qwPfBc76YcMK8a7IPtzGCaOZxfwN5OE",
  authDomain: "gameguessr-app.firebaseapp.com",
  projectId: "gameguessr-app",
  storageBucket: "gameguessr-app.appspot.com",
  messagingSenderId: "972045674167",
  appId: "1:972045674167:web:921a12f48e7e6c39b60f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

if (process.env.REACT_APP_USE_FIREBASE_EMULATORS === "true") {
  console.log("Using local Firebase emulators");
  connectFunctionsEmulator(functions, "localhost", 5001);
}

const helloWorld = httpsCallable(functions, "helloWorld");

helloWorld().then(result => {
  console.log("PROCESS", process.env);
  console.log("RESULT DATA MESSAGE", result.data.message)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
