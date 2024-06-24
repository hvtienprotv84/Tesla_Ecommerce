import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "AIzaSyDkVBJ2w2WhwP31GleNhdmTGHnnFbhynG8",
   authDomain: "tesla-ecommerce-646ff.firebaseapp.com",
   projectId: "tesla-ecommerce-646ff",
   storageBucket: "tesla-ecommerce-646ff.appspot.com",
   messagingSenderId: "882853280772",
   appId: "1:882853280772:web:a97063a144116652b18951",
   measurementId: "G-K3XC0P9QG1"
 };

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
