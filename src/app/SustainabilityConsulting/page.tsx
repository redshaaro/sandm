import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Green Logistics Solutions",
        desc: "Advising on sustainable practices to reduce environmental impact."
        , img: "/green.jpg"
    },
    {
        id: 2,
        name: "Compliance Guidance",
        desc: "Assisting clients in meeting regulatory requirements related to logistics and supply chain activities."
        , img: "/comp.webp"
    },


    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/sus2.png" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '>
                    <div>Sustainability Consulting</div>



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