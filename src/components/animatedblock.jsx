import { useState } from "react"
import { motion } from "framer-motion"

const Animatedblock = () => {
const [isOpen, setIsOpen] = useState (false);

    return (
        <div className="flex justify-start mx-auto p-10 max-w-[1240px] w-full">
            <div className="relative z-0  max-w-[1240px] mx-auto w-full">
                <img className="w-full  max-h-[500px] object-cover" src="https://images.unsplash.com/photo-1542323073-2ffe8d1d7b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            </div>
        <div className="flex min-h-100vh z-2 absolute">
    <motion.div layout onClick={()=> setIsOpen(!isOpen)} className="w-[30vw] h-[40vh]  px-3 py-5  my-3">
        <motion.h2 layout className="text-center mt-1 w-[15vw] h-[10vh] bg-black/40 justify-center items-center flex rounded-2xl cursor-pointer text-white font-bold text-2xl ">
            Frame Motion
        </motion.h2>
        <motion.div animate={{ x: 0, y: 50}}
  transition={{ type: "spring", stiffness: 120 }} layout className=" w-[50vw] text-white text-center ">
        {isOpen && ( <p className="bg-black/40 rounded-2xl text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, odit, nobis repellendus dolorum nihil neque laboriosam fugiat fugit qui ducimus tempora iste. Facilis iste sunt ea vitae voluptatum adipisci tenetur.
            </p>)}
           
        </motion.div>
    </motion.div>
    <motion.a className="absolute z-10 w-10"
  whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
/>
    </div>
    </div>
    )
}


export default Animatedblock