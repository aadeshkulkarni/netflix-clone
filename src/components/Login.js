import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }
    return (
        <div className="">
            <Header />
            <div className='absolute w-full h-full'>
                <img className="brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
            </div>
            <form className="rounded-lg bg-opacity-60 absolute w-3/12 text-white p-12 bg-black flex flex-col justify-center items-center m-auto my-36 right-0 left-0">
                <h2 className="text-3xl p-4  text-left">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && <input type="text" placeholder='Full Name' className="p-4 rounded-md m-2 my-4 w-full bg-gray-800" />}
                <input type="text" placeholder='Email Address' className="p-4 rounded-md m-2 my-4 w-full bg-gray-800" />
                <input type="password" placeholder='Password' className="p-4 m-2 rounded-md my-4 w-full bg-gray-800" />
                <button className="w-full p-3 m-4 bg-red-600 text-white rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="flex items-center w-full justify-between">
                    <checkbox> Remember me</checkbox>
                    <span>Need Help?</span>
                </div>
                <div className="w-full text-left py-4 text-md font-light">
                    <span className="text-gray-400">{isSignInForm ? "New to Netflix?" : "Already a member?"}  </span><span onClick={toggleSignInForm} className="text-white cursor-pointer hover:front-bold">{isSignInForm ? "Sign Up" : "Sign In"} now.</span>
                </div>
                <div className="text-gray-400 py-4 text-xs font-light">
                    <span>This is not the real Netflix. It's a clone developed by Aadesh Kulkarni to learn how Netflix frontend works and is intended to show off his development skills.</span>
                </div>
            </form>
        </div>
    )
}

export default Login