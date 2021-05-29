import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import './Login.css';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggenInUser, setLoggedInUser] = useContext(UserContext);
    var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSign = () => {
        firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
        setLoggedInUser(user);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
  }

    return (
        <div className="login-area text-center">
            <button className="btn main-btn" onClick={handleGoogleSign}>Login</button>
        </div>
    );
};

export default Login;