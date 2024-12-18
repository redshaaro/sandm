import React from 'react'
import Image from 'next/image'




const Testimonials = () => {

    return (
        <>
            <div className='font-bold text-2xl text-[#053e7f] my-3 mx-3 sm:text-[30px] sm:my-5'>Testimonials</div>
            <div className='flex flex-wrap items-center justify-center bg-[#004aac] p-2 gap-5'>
                <div className='w-full sm:w-[80%] md:w-[45%] flex flex-col relative bg-[#ffffff] rounded-3xl'>
                    <Image src="/user.jpg" width={60} height={60} className='absolute rounded-full border-[#004aac] border-[3px] border-solid   h-[53px] left-0 right-0 m-auto' alt="user"></Image>
                    <div className='text-gray-500 text-[10px] p-2 m-[37px] mt-[54px]  '>
                        "S&M completely transformed our logistics operations. Their expert consultants helped us streamline our supply chain, reducing costs and improving efficiency. The team was incredibly professional and knowledgeable, providing tailored solutions that directly addressed our challenges. We also enrolled our staff in their logistics courses, and the results were immediate — our team now operates with more confidence and expertise. S&M has been a game-changer for our business!"

                    </div>
                    <div className='font-light text-gray-400 text-sm m-[10px]'>— Emily Roberts, Operations Manager at Global Freight Solutions

                    </div>


                </div>
                <div className='w-full sm:w-[80%] md:w-[45%] flex flex-col relative bg-[#ffffff] rounded-3xl'>
                    <Image src="/user.jpg" width={60} height={60} className='absolute border-[#004aac] border-[3px] border-solid rounded-full h-[53px] left-0 right-0 m-auto' alt="user"></Image>
                    <div className='text-gray-500 text-[10px] p-2 m-[37px] mt-[54px] '>
                        "S&M completely transformed our logistics operations. Their expert consultants helped us streamline our supply chain, reducing costs and improving efficiency. The team was incredibly professional and knowledgeable, providing tailored solutions that directly addressed our challenges. We also enrolled our staff in their logistics courses, and the results were immediate — our team now operates with more confidence and expertise. S&M has been a game-changer for our business!"

                    </div>
                    <div className='font-light text-gray-400 text-sm m-[10px] '>— Emily Roberts, Operations Manager at Global Freight Solutions

                    </div>


                </div>
                <div className='w-full sm:w-[80%] md:w-[45%] flex flex-col relative bg-[#ffffff] rounded-3xl'>
                    <Image src="/user.jpg" width={60} height={60} className='absolute border-[#004aac] border-[3px] border-solid h-[53px] rounded-full left-0 right-0 m-auto' alt="user"></Image>
                    <div className='text-gray-500 text-[10px] p-2 m-[37px] mt-[54px] '>
                        "S&M completely transformed our logistics operations. Their expert consultants helped us streamline our supply chain, reducing costs and improving efficiency. The team was incredibly professional and knowledgeable, providing tailored solutions that directly addressed our challenges. We also enrolled our staff in their logistics courses, and the results were immediate — our team now operates with more confidence and expertise. S&M has been a game-changer for our business!"

                    </div>
                    <div className='font-light text-gray-400 text-sm text-center  m-[10px]'>— Emily Roberts, Operations Manager at Global Freight Solutions

                    </div>


                </div>

            </div>


        </>

    )
}

export default Testimonials
