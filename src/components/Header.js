import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slice/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { toggleSearchView } from '../utils/slice/gptSlice';
import Menu from './Menu';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGPTSearchClick = () => {
    dispatch(toggleSearchView())
  }

  return (
    <div className="absolute z-10 flex flex-col items-center justify-center w-screen px-3 py-1 text-gray-200 md:flex-row bg-gradient-to-b md:from-black md:justify-between">
      <img onClick={handleGPTSearchClick} className="mx-auto w-52 md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      {user && <div className={`flex items-center ${!showGPTSearch && 'bg-black md:p-4'}`}>
      <div className="mx-4 bg-black cursor-pointer hover:bg-opacity-50" onClick={()=>{ handleGPTSearchClick()}}>
        {!showGPTSearch ? (<div className="flex items-center justify-between px-4 py-2 border border-gray-500 rounded-lg">
          <img 
            src="./search.svg" 
            alt="GPT Search" 
            className="px-2 text-white rounded-full hover:bg-opacity-10 hover:bg-white md:mr-2" /> Search</div>):(<div className="px-4 py-2 border border-gray-500 rounded-lg">Home</div>)}
        </div>
        <Menu />
        
      </div>}
    </div>
  )
}

export default Header