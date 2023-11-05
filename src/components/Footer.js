import React from 'react'

const Footer = () => {
    return (
        <div className="grid grid-cols-12 w-full bg-black">
            <div className="col-span-3"></div>
            <div className="col-span-6 font-light text-gray-500 text-sm p-8">
                <h1 className="py-4">Questions? Call 000-800-919-1694</h1>
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3 gap-4">
                        <div className="pb-4">FAQ</div>
                        <div>Cookie Preferences</div>
                    </div>
                    <div className="col-span-3 gap-4">
                    <div className="pb-4">Help Centre</div>
                        <div>Corporate Information</div>
                    </div>
                    <div className="col-span-3 gap-4">
                        <div>Terms of Use</div>
                    </div>
                    <div className="col-span-3 gap-4">
                        <div>Privacy</div>
                    </div>
                </div>
                <select className="p-4 border border-gray-500 bg-transparent my-8">
                    <option>English</option>
                </select>
            </div>
            <div className="col-span-3"></div>
        </div>
    )
}

export default Footer