import React from 'react'

const VideoTitle = ({overview, title}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex p-4">
            <button className="hover:bg-opacity-80 px-4 py-2 bg-white text-black rounded-md w-[100px] min-w-[100px]">Play</button>
            <button className="hover:bg-opacity-80 ml-4 px-4 py-2 bg-gray-700 rounded-md w-[140px] min-w-[140px] text-white">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle