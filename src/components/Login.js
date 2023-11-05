import React, { useState, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
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
                    // const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_IMAGE
                    }).then(() => {
                        // const { uid, email, displayName, photoURL } = auth.currentUser;
                        // dispatch(addUser({ uid, email, displayName, photoURL }))
                        // navigate("/login")
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
                    setErrorMessage(errorCode + " - " + errMessage)
                });

        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;                            
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(addUser({ uid, email, displayName, photoURL }))
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMessage = error.message;
                    setErrorMessage(errorCode + " - " + errMessage)
                });
        }
    }
    return (
        <div className="">
            <Header />
            <div className='absolute w-full h-full'>
                <img className="brightness-50 w-full h-full object-cover" src={NETFLIX_BG_IMAGE} alt="logo" />
            </div>
            <div className="md:rounded-lg bg-opacity-60 absolute sm:w-4/5 md:w-6/12 lg:w-1/5 lg:min-w-[300px] text-white p-12 bg-black flex flex-col justify-center items-center m-auto my-36 right-0 left-0">
                <h2 className="text-3xl p-4  text-left">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className="p-4 m-2 my-4 w-full bg-gray-800" />}
                <input ref={email} type="text" placeholder='Email Address' className="p-4 m-2 my-4 w-full bg-gray-800" />
                <input ref={password} type="password" placeholder='Password' className="p-4 m-2 my-4 w-full bg-gray-800" />
                <p className="text-red-500 text-sm text-left">{errorMessage}</p>
                <button type="button" onClick={handleButtonClick} className="w-full p-3 m-4 bg-red-600 text-white rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="flex items-center w-full justify-between text-xs text-gray-400 font-light">
                    <span>
                        <input className="bg-gray-800 accent-gray-400" type="checkbox" value="remember" /> Remember me</span>
                    <span>Need Help?</span>
                </div>
                <div className="w-full text-left py-4 text-md font-light">
                    <span className="text-gray-400">{isSignInForm ? "New to Netflix?" : "Already a member?"}  </span><span onClick={toggleSignInForm} className="text-white cursor-pointer hover:front-bold">{isSignInForm ? "Sign Up" : "Sign In"} now.</span>
                </div>
                <div className="text-gray-400 py-4 text-xs font-light">
                    <span>This is not the real Netflix. It's a clone developed by Aadesh Kulkarni to learn how Netflix frontend works and is intended to show off his development skills.</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login