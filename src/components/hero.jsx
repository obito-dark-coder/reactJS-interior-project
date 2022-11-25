import React from "react";

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 ">
            <div className="max-h-[500px] relative ">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
                    <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
                        The <span className="text-violet-400">Best</span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
                        Works 
                        
                        <span className="text-violet-400 ">Delivery</span>
                    </h1>
                </div>
                <img className="w-full  max-h-[500px] object-cover" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="/" />
            </div>
            
        </div>
    )
}


export default Hero

