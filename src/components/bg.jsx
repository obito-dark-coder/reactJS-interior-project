import React from "react";
import videoBg from '../assets/bg.mp4'


const BgMotion = () => {
    return (
        <div className="relative w-full max-w-[1200px] flex justify-center items-center mx-auto p-4">
            <video src={videoBg} autoPlay loop muted></video>
            <div className="z-10 absolute text-6xl font-bold items-center mx-auto">
                <div className="w-[1168px] h-[] bg-black/50 z-11 mx-auto justify-center flex text-white">
                <p>TEST</p>
                <p>WEB</p>
                </div>
            </div>
        </div>
    )
}


export default BgMotion

