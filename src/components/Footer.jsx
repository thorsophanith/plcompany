import React from 'react'
import image1 from '../assets/image/logo.jpg'
import { FaFacebook, FaTelegram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer class="text-gray-600 body-font mt-3 max-w-7xl m-auto">
  <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <a href='' class="hover:scale-75 duration-300 flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img id='home' class="w-[5vh] shadow-xl rounded-full object-cover object-center" alt="hero" src={image1} />
         
      <span class="ml-3 text-lg hover:text-teal-500 duration-500 text-gray-700">Sophon Space</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Sophon Space —
      <a href="https://t.me/sophonspace" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@SOPHONSPACE</a>
    </p>
    <span class="inline-flex gap-5 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl md:text-2xl">
      <a href='https://www.facebook.com/shoponspaceofficail' class="text-blue-500">
      <FaFacebook className='animate-pulse hover:scale-125 duration-300 shadow-xl shadow-blue-600 rounded-full'/>
      </a>
      <a href='' class="ml-3 text-gray-800">
      <FaTiktok className='animate-pulse hover:scale-125 duration-300 shadow-xl shadow-red-400 text-3xl p-1 rounded-full'/>
      </a>
      <a href='https://t.me/sophonspace1' class="ml-3 text-sky-500">
      <FaTelegram className='animate-pulse hover:scale-125 duration-300 shadow-xl shadow-sky-600 rounded-full'/>
      </a>
      
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer