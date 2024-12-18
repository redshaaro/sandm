import React from 'react'
import Meetus from '../components/Meetus'
import Image from 'next/image'
import Pitchus from '../components/Pitchus'

const page = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/contact.avif" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '>

                </div>


            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-normal'>
                <Meetus>

                </Meetus>
                <Pitchus></Pitchus>
            </div>
        </>
    )
}

export default page