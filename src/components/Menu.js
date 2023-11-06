import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className="relative md:pr-6">
            <img onClick={()=>{setShowMenu(!showMenu)}} alt="usericon" className="w-12 h-12 p-2 rounded-md cursor-pointer" src={user?.photoURL} />
            {showMenu && (<ul className="list-none p-2 border border-gray-800 absolute top-14 md:right-6 bg-black min-w-[300px] md:min-w-[200px]">
            <li className="p-2"><button onClick={handleSignout} className="px-2 text-sm cursor-pointer">Sign out of Netflix</button></li>
            </ul>)}
        </div>
    )
}

export default Menu