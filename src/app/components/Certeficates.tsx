import React from 'react'
import Image from 'next/image'
import Carousel from './Craousel'



const Certeficates = () => {
    const DATA = [
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },
        { image: '/cert.jfif' },

        
    ]
    return (
        <>
        <div className='my-4 font-bold text-[30px] text-[#01377c] text-center p-2 md:text-left lg:ml-[25px]  '>Our Achivements</div>


        <div className="flex min-h-screen flex-col md:flex-row   items-center  lg:gap-28 justify-center gap-9 text-center p-3 border-2 border-blue-500 rounded-3xl m-3" >


            <Carousel data={DATA} />
            <div className="hidden md:block relative w-[50%] bg-blue-600 text-white font-bold  rounded-2xl p-2    ">
            With over 20 years of combined experience, we've successfully trained and guided hundreds of professionals in the logistics industry, helping them master the complexities of global supply chains and optimize operations. Our courses and expert sessions have empowered individuals and businesses alike to enhance their performance and drive efficiency.
            </div>


        </div></>
        
    )
}

export default Certeficates
