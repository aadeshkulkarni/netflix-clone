import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slice/userSlice';
import { NETFLIX_BG_IMAGE, USER_IMAGE } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }
    const handleButtonClick = (e) => {
        e.preventDefault()
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_IMAGE
                    }).then(() => {
                        setSignInForm(true)
                        password.current.value = ""
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errMessage = error.message;
                        setErrorMessage(errorCode + " - " + errMessage)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMessage = error.message;
                    if(errorCode === "auth/email-already-in-use"){
                        setErrorMessage("Email already exists.")
                    }
                    else{
                        setErrorMessage(errorCode+": "+errMessage)
                    }
                    
                });

        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;         
                    console.log(user)
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(addUser({ uid, email, displayName, photoURL }))
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMessage = error.message;
                    if(errorCode === "auth/invalid-login-credentials"){
                        setErrorMessage("Email or Password is incorrect.")
                    }
                    else{
                        setErrorMessage(errorCode + " - " + errMessage)
                    }
                    
                });
        }
    }
    return (
        <div className="">
            <Header />
            <div className='absolute w-full h-full'>
                <img className="object-cover w-full h-full brightness-50" src={NETFLIX_BG_IMAGE} alt="logo" />
            </div>
            <div className="md:rounded-lg bg-opacity-60 absolute sm:w-4/5 md:w-6/12 lg:min-w-[300px] lg:w-1/4 text-white p-12 bg-black flex flex-col justify-center items-center m-auto my-36 right-0 left-0">
                <h2 className="p-4 text-3xl text-left">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className="w-full p-4 m-2 my-4 bg-gray-800" />}
                <input ref={email} type="text" placeholder='Email Address' className="w-full p-4 m-2 my-4 bg-gray-800" />
                <input ref={password} type="password" placeholder='Password' className="w-full p-4 m-2 my-4 bg-gray-800" />
                <p className="text-sm text-left text-red-500">{errorMessage}</p>
                <button type="button" onClick={handleButtonClick} className="w-full p-3 m-4 text-white bg-red-600 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="flex items-center justify-between w-full text-xs font-light text-gray-400">
                    <span>
                        <input className="bg-gray-800 accent-gray-400" type="checkbox" value="remember" /> Remember me</span>
                    <span className="cursor-pointer hover:text-gray-50">Need Help?</span>
                </div>
                <div className="w-full py-4 font-light text-left text-md">
                    <span className="text-gray-400">{isSignInForm ? "New to Netflix?" : "Already a member?"}  </span><span onClick={toggleSignInForm} className="text-white cursor-pointer hover:text-gray-400">{isSignInForm ? "Sign Up" : "Sign In"} now.</span>
                </div>
                <div className="py-4 text-xs font-light text-gray-400">
                    <span>This is not the real Netflix. It's a clone developed by Aadesh Kulkarni to learn how Netflix frontend works and is intended to show off his development skills.</span>
                </div>
            </div>
        </div>
    )
}

export default Login