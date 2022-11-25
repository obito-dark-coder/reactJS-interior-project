import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartPlusFill, BsFillSafeFill, } from "react-icons/bs";
import {TbTruckDelivery } from "react-icons/tb";
import {FaUserFriends, FaWallet} from "react-icons/fa";
import {MdFavorite, MdHelp} from "react-icons/md";
import {AiFillTag} from "react-icons/ai";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/*left slide*/}
            <div className="flex items-center">
                <div onClick={()=> setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Best <span className="font-bold">Works</span></h1>
                <div className="lg:flex hidden items-center bg-violet-200 rounded-full px-3 py-2 mx-2 text-[18px]">
                    <p className="bg-black text-white rounded-full px-3 py-2 mx-2">Delivery</p>
                    <p className="p-2">Pick-up</p>
                </div>
            </div>
        
            {/* Search Input*/}
            <div className="px-2 py-2 bg-gray-200 flex rounded-full items-center  mx-10">
                <AiOutlineSearch size={30} />
                <input className="bg-gray-200 ml-5 p-1 focus " type="text" placeholder="Search items..." />
            </div>
            {/* Cart*/}
            <div>
                <button className="bg-black text-white flex items-center py-2 px-4 rounded-full gap-3">
                    <BsFillCartPlusFill size={25} />Cart
                </button>
            </div>
            {/* Mobile Menu*/}
            {/* Mobile Menu-Overlay*/}
            {nav ? <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0">
            </div> : ''}
            
            {/*Side drawer menu*/}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=> setNav(!nav)}/>
                <h2 className="text-2xl p-4">Best <span className="font-bold">Works</span></h2>
                <nav>
                    <ul className="px-4 flex flex-col text-gray-800">
                        <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mx-2" /> Oreders</li>
                        <li className="text-xl py-4 flex"><MdFavorite size={25} className="mx-2" /> Favorites</li>
                        <li className="text-xl py-4 flex"><FaWallet size={25} className="mx-2" /> Wallet</li>
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mx-2" /> Help</li>
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mx-2" /> Promotions</li>
                        <li className="text-xl py-4 flex"><BsFillSafeFill size={25} className="mx-2" /> Best Ones</li>
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mx-2" /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar

