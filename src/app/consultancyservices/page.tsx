import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Logistics Strategy Development",
        desc: "Crafting tailored logistics strategies to align with business goals."
        , img: "/strategydev.png"
    },
    {
        id: 2,
        name: "Supply Chain Optimization",
        desc: "Analyzing and improving supply chain processes for efficiency and effectiveness."
        , img: "/supplychainopt.png"
    },
    {
        id: 3,
        name: "Operational Assessments",
        desc: "Evaluating current operations to identify areas for improvement.",
        img: "/operationalasses.jpg"
    },

    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/consulting.webp" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '>

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