import React from 'react'

const ShimmerMovieDetails = () => {
    return (<div className="z-[1001] fixed top-0 left-0 flex pt-[5%] justify-center w-screen h-screen bg-black bg-opacity-90 overflow-hidden">
        <div className="relative w-full pb-4 bg-gray-900 border border-gray-900 shadow-lg md:w-3/5 h-fit border-spacing-10">
            <div className="z-[900] absolute flex items-center justify-center hover:text-white p-2 bg-gray-700 text-center text-gray-200 border border-black rounded-full cursor-pointer font-sm hover:opacity-50 right-4 top-4"> </div>
            <div className="w-full min-h-[500px] bg-gray-900 relative">
                <div className="w-full h-full bg-gray-800" alt="backdrop" />
                <div className="z-[600] absolute text-white text-3xl font-bold bottom-8 left-8 w-[200px] p-2 bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-12 p-4 text-white">
                <div className="col-span-7 p-4">
                    <div className="flex">
                        <div className="pr-4 font-bold text-green-600 w-[100px] bg-gray-700 "></div>
                        <div className="bg-gray-700 w-100px"></div>
                    </div>
                    <div className="p-2 bg-gray-700 w-200px">
                        
                    </div>
                    <div className="p-2 py-2 text-xl font-bold bg-gray-700 w-100px">
                    </div>
                    <p className="p-2 text-sm bg-gray-700 w-200px"></p>
                </div>
                <div className="col-span-5 p-4 text-sm">
                    <div>
                        <div className="grid grid-cols-12 mb-4">
                            <div className="col-span-3 p-2 text-gray-300 bg-gray-700 w-50px"></div>
                            <div className="col-span-9 p-2 bg-gray-700 w-200px"></div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-3 p-2 text-gray-300 bg-gray-700 w-50px"></div>
                            <div className="col-span-9 p-2 bg-gray-700 w-200px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ShimmerMovieDetails