import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Market Analysis",
        desc: "Assessing market conditions to determine the viability of logistics projects.",
        img: "/market.png"
    },
    {
        id: 2,
        name: "Cost-Benefit Analysis",
        desc: "Evaluating the financial implications of proposed logistics solutions.",
        img: "/cost.webp"
    },
    {
        id: 3,
        name: "Risk Assessment",
        desc: "Identifying potential risks and developing mitigation strategies.",
        img: "/risk.webp"
    }

    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/Feasibility.jpg" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
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