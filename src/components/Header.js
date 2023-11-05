import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slice/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleSearchView } from '../utils/slice/gptSlice';
import { changeLanguage } from '../utils/slice/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)
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

  const handleGPTSearchClick = () => {
    dispatch(toggleSearchView())
  }
  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="bg-gradient-to-b from-black z-10 absolute px-3 py-1 w-screen flex justify-between items-center text-gray-200">
      <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
      {user && <div className="flex">
        {showGPTSearch && <select onChange={handleChangeLanguage} className="bg-black text-white p-2">
          {SUPPORTED_LANGUAGES && SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>}
        <button onClick={handleGPTSearchClick} className="py-2 px-4 mx-4 text-white bg-red-700 rounded-lg">{showGPTSearch ? "Home" : "GPT Search"}</button>
        <img alt="usericon" className="w-12 h-12" src={user?.photoURL} />
        <button onClick={handleSignout} className="px-2 text-sm cursor-pointer">(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header