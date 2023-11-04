import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slice/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/login")
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/login")
      }
    });
    
    // Unsubscribe when component unmounts
    return () => unsubscribe()    
  }, [])
  return (
    <div className="bg-gradient-to-b from-black z-10 absolute px-3 py-1 w-screen flex justify-between items-center text-gray-200">
      <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
      {user && <div className="flex">
        <img alt="usericon" className="w-12 h-12" src={user?.photoURL} />
        <button onClick={handleSignout} className="px-2 text-sm cursor-pointer">(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header