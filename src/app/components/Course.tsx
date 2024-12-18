import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Course = ({ id, image, desc, name }: { id: number, image: string, desc: string, name: string }) => {

    return (
        <div   className='border-[#69a2ca] m-2 mt-3 border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>

            <div className='w-full h-[300px] relative '>
                <Image src={image} alt="service" fill className='absolute rounded-xl'></Image>

            </div>
            <div className='text-black text-lg font-bold'>
                {name}

            </div>
            <div className='text-gray-500 text-sm font-thin'>
                {desc}

            </div>




        </div>
    )
}

export default Course