import React from 'react'
import Image from 'next/image'


const Hero = () => {
    return (
        <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
            <Image src="/home.jpg" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
            <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '><div className="md:text-[43px] mb-3">Welcome to <span className='text-[#4883ff]'>S&M</span> </div>
                <div className='  text-white text-[16px] sm:text-[25px] flex justify-center w-full   font-bold md:text-[25px]'>Master the Art of Logistics</div>

            </div>
            <div className=' md:block z-[1]'><button className='bg-blue-600 text-white p-2 rounded-2xl w-[200px] font-bold hover:bg-white hover:text-blue-600'>Explore !</button></div>


        </div>
    )
}

export default Hero