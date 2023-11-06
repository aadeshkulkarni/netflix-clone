import React from 'react'

const VideoTitle = ({overview, title, isMute, setIsMute}) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
        <p className="hidden w-1/4 py-2 text-lg md:inline-block md:py-6">{overview}</p>
        <div className="flex justify-between">
        <div className="flex p-2 md:p-4">
            <button className="hover:bg-opacity-80 px-2 md:px-4 py-2 bg-white text-black rounded-md w-[100px] min-w-[100px] flex"><img src="./play.svg" alt="play-icon" className="mr-2"/>Play</button>
            <button className="hidden hover:bg-opacity-80 ml-4 px-4 py-2 bg-gray-700 rounded-md w-[140px] min-w-[140px] text-white md:flex"><img src="./info.svg" alt="play-icon" className="mr-2"/>More Info</button>
        </div>
        <div className="flex p-2 md:p-4">
            <img 
              onClick={()=>setIsMute(!isMute)}
              src={isMute ? "./mute.svg":"./unmute.svg"} 
              className="px-2 py-2 text-white border border-white rounded-full cursor-pointer hover:bg-opacity-10 hover:bg-white md:p-2" 
              alt="mute-sound" />
        </div>
        </div>
    </div>
  )
}

export default VideoTitle