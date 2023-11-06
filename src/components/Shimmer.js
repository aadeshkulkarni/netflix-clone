import React from 'react'
import Header from './Header'
const MovieCardShimmer = () => {
    return (<div className="ml-2 bg-gray-700 cursor-pointer md:h-[298px] w-36 md:w-[192px]">
    </div>)
}
const Shimmer = () => {
    return (
        <div>
            <Header isShimmer={true} />
        <div className="flex flex-col justify-between h-screen min-h-screen text-gray-400">
            <div className="w-screen h-screen min-h-screen bg-black md:pt-0">
                <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
                    <h1 className="p-4 mb-2 text-2xl font-bold bg-gray-700 md:text-5xl w-36"> </h1>
                    <p className="hidden w-1/4 py-2 text-lg bg-gray-700 h-36 md:inline-block md:py-6"> </p>
                    <div className="flex justify-between">
                        <div className="flex p-2 md:p-4">
                            <button className="hover:bg-opacity-80 px-2 md:px-4 py-2 bg-white text-black rounded-md w-[100px] min-w-[100px] flex"> </button>
                            <button className="hidden hover:bg-opacity-80 ml-4 px-4 py-2 bg-gray-700 rounded-md w-[140px] min-w-[140px] text-white md:flex"></button>
                        </div>
                        <div className="flex p-2 md:p-4">
                            <img
                                src="./mute.svg"
                                className="px-2 py-2 text-white border border-white rounded-full cursor-pointer hover:bg-opacity-10 hover:bg-white md:p-2"
                                alt="mute-sound" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-30 mt-0 md:-mt-52">
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Shimmer