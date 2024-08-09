import React from 'react'
import image1 from '../assets/image/79063-Converted.png'
import image2 from '../assets/image/cellcard-app-icon-in-circle.png'
import image3 from '../assets/image/Icon2-e1698810051359.png'

function Numhr() {
  return (
    <div id='team' >
        <h1 class="py-12 text-center text-2xl md:text-3xl font-medium drop-shadow-xl shadow-black text-sky-500">What would you like to do?</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 max-w-7xl m-auto">
            <div class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105">
                <img src={image1} alt="" class="w-[140px] md:w-[150px]" />
                <p class="text-xl text-gray-600">Find a Value Plan</p>
                <span class="text-gray-500">Find the perfect data plan for your needs.</span>
                <p class="mt-4"><a href="" class="text-center border-2 border-blue-400 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-3 text-gray-400">Learn More</a></p>
            </div>
            <div class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105">
                <img src={image2} alt="" class="w-[140px] md:w-[150px]" />
                <p class="text-xl text-gray-600">Online Top Up</p>
                <span class="text-gray-500">Save on Top-Ups every time.</span>
                <p class="mt-4"><a href="" class="text-center border-2 border-blue-400 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-3 text-gray-400">Learn More</a></p>
            </div>
            <div class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105">
                <img src={image3} alt="" class="w-[140px] md:w-[150px]" />
                <p class="text-xl text-gray-600">See Promotions</p>
                <span class="text-gray-500">Go ahead. You know you want to!</span>
                <p id='dog3' class="mt-4"><a href="" class="text-center border-2 border-blue-400 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-3 text-gray-400">Learn More</a></p>
            </div>
        </div>
    </div>
  )
}

export default Numhr