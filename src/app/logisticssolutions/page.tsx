import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Transportation Management",
        desc: "Managing transportation logistics to optimize delivery and reduce costs."
        ,img:"/transportationman.webp"
    },
    {
        id: 2,
        name: "Warehousing Services",
        desc: "Providing warehousing solutions that enhance inventory management and distribution."
        ,img:"/warehousing.jpg"
    },
    {
        id: 3,
        name: "Inventory Management",
        desc: "Implementing systems to track and manage inventory levels effectively.",
        img:"/inventory.webp"
    }

    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/logisticssolutions.jpg" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '>
                    <div>Logistics solutions</div>

                </div>




            </div>
            <div className='flex justify-center items-center flex-wrap'>
                {
                    services.map((service) => (<Service id={service.id} image={service.img} desc={service.desc} name={service.name}></Service>))
                }




            </div>


        </>
    )
}

export default page