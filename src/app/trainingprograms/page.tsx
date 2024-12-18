import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Customized Training",
        desc: "Developing training sessions specific to client needs in logistics and supply chain management."
        , img: "/customized trainging.jpg"
    },
    {
        id: 2,
        name: "Workshops and Seminars",
        desc: "Conducting educational workshops on industry best practices and emerging trends."
        , img: "/workshops.jpeg"
    },
    {
        id: 3,
        name: "Certification Programs",
        desc: "Offering recognized certifications in logistics and supply chain management.",
        img: "/certfications programs.jpg"
    },

    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/trainingprog.jpg" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
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