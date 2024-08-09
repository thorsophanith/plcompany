import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/image/logo-removebg-preview.png";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { FiAlignRight, FiX } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll';
 

function Navbar() {
    const [setMenu] = useState("home");
    const [nav, setNav] = useState(true);
    
    const handleNav = () => {
        setNav(!nav)
    }
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full shadow-md z-50 bg-gray-50 sticky top-0">
      <div className="max-w-[1500px] m-auto flex items-center justify-between px-5 p-3">
        <div className="flex items-center gap-1">
            <img src={image1} alt="" className="w-[50px] md:w-[60px] bg-teal-200 rounded-full"/>
          <h1 className="font-bold font-serif text-xl md:text-2xl text-teal-500 drop-shadow-xl shadow-black">Sophon Space</h1>
        </div>
        <div className="max-md:hidden *:text-[18px] *:text-gray-600 *:duration-500 *:lg:text-[19px] flex gap-3 md:gap-5 font-medium">
            <p><AnchorLink className="anchor-link" offset={900} href='#dog1'><a href="" onClick={() => setMenu("home")} className="hover:text-teal-500 hover:scale-90">Home</a></AnchorLink></p>
            <p><AnchorLink className="anchor-link" offset={900} href='#dog2'><a href="" onClick={() => setMenu("about")} className="hover:text-teal-500 hover:scale-90">Company</a></AnchorLink></p>
            <p><AnchorLink className="anchor-link" offset={900} href='#dog3'><a href="" onClick={() => setMenu("team")} className="hover:text-teal-500 hover:scale-90">Resources</a></AnchorLink></p>
            <p><AnchorLink className="anchor-link" offset={900} href='#dog4'><a href="" onClick={() => setMenu("gallery")} className="hover:text-teal-500 hover:scale-90">Gallery</a></AnchorLink></p>
            <p><AnchorLink className="anchor-link" offset={900} href='#dog5'><a href="" onClick={() => setMenu("contact")} className="hover:text-teal-500 hover:scale-90">Contact</a></AnchorLink></p>
        </div>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {!nav ? <AiOutlineClose size={25} className="text-gray-700 hover:scale-90 duration-300"/> : <AiOutlineMenu size={25} className="text-gray-700 hover:scale-90 duration-300"/>}
        </div>
         
            <div className={!nav ? 'md:hidden z-50 fixed top-0 left-0 w-[60%] h-full bg-gray-100 *:duration-500 text-lg font-medium text-gray-600 *:drop-shadow-xl *:shadow-black duration-500' : 'fixed left-[-100%] duration-500'}>
                <div className="p-4 py-10 text-lg font-serif flex items-center gap-2 text-teal-600 cursor-pointer ">
                <img src={image1} alt="" className="w-[40px]"/>
                Sophon Space</div>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><AnchorLink className="anchor-link" offset={900} href='#dog1'><a href="" onClick={() => setMenu("home")} className=" hover:scale-90 px-10 text-base">Home</a></AnchorLink></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><AnchorLink className="anchor-link" offset={900} href='#dog2'><a href="" onClick={() => setMenu("about")} className=" hover:scale-90 px-10 text-base">Company</a></AnchorLink></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><AnchorLink className="anchor-link" offset={900} href='#dog3'><a href="" onClick={() => setMenu("team")} className=" hover:scale-90 px-10 text-base">Resources</a></AnchorLink></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><AnchorLink className="anchor-link" offset={900} href='#dog4'><a href="" onClick={() => setMenu("gallery")} className=" hover:scale-90 px-10 text-base">Gallery</a></AnchorLink></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><AnchorLink className="anchor-link" offset={900} href='#dog5'><a href="" onClick={() => setMenu("contact")} className=" hover:scale-90 px-10 text-base">Contact</a></AnchorLink></p>
        </div>
        </div>
      </div>
    
  );
}

export default Navbar;