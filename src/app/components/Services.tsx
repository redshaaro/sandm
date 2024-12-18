import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {

    return (
        <>
            <div className='font-bold text-2xl text-[#053e7f] my-3 mx-3 sm:text-[30px] sm:my-5'>Services</div>
            <div className='flex flex-wrap items-center justify-center gap-4 p-2'>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/consulting.webp" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/consultancyservices" className='text-black text-sm font-thin'>
                        Consultancy Services

                    </Link>



                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/trainingprog.jpg" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/trainingprograms" className='text-black text-sm font-thin'>
                        Training Programs

                    </Link>




                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/Feasibility.jpg" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/feasibilitystudies" className='text-black text-sm font-thin'>
                        Feasibility Studies

                    </Link>




                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/logisticssolutions.jpg" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/logisticssolutions" className='text-gray-500 text-sm font-thin'>
                        Logistics Solutions

                    </Link>




                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/technologyint.jpg" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/technologyintegration" className='text-gray-500 text-sm font-thin'>
                        Technology Integration

                    </Link>




                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/projectmanage.jpg" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/projectmanagement" className='text-gray-500 text-sm font-thin'>
                        Project Management

                    </Link>




                </div>
                <div className='border-[#69a2ca] border-2 w-full sm:w-[80%] md:w-[45%] border-solid p-1 flex flex-col items-center justify-center gap-2 rounded-xl '>
                    <div className='w-full h-[300px] relative '>
                        <Image src="/sus2.png" alt="service" fill className='absolute rounded-xl'></Image>

                    </div>
                    <Link href="/SustainabilityConsulting" className='text-gray-500 text-sm font-thin'>
                        Sustainability Consulting

                    </Link>




                </div>



            </div>
          
        </>
    )
}

export default Services