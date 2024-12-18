import React from 'react'
import Image from 'next/image'
import Service from '../components/Service'


const page = () => {
    const services = [{
        id: 1,
        name: "Supply Chain Software Solutions",
        desc: "Advising on and implementing software tools for supply chain visibility and management."
        , img: "/supplychainsoftware.jpg"
    },
    {
        id: 2,
        name: "Data Analytics",
        desc: "Utilizing data analytics to drive insights and improve decision-making processes."
        , img: "/data analysis.jpg"
    },
    {
        id: 3,
        name: "Automation Solutions",
        desc: "Helping clients automate logistics processes to enhance efficiency and reduce manual errors.",
        img: "/automation.jpg"
    }

    ]
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/technologyint.jpg" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '>
                    <div>Technology Integration</div>


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