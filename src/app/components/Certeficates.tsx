import React from 'react'
import Image from 'next/image'
import Carousel from './Craousel'



const Certeficates = () => {

    return (
        <div>
            <div className='font-bold text-2xl text-[#053e7f] my-3 mx-3 sm:text-[30px] sm:my-5'>Achivements</div>

            <div className='flex justify-center items-center md:justify-evenly   ml-5 gap-[15px] flex-wrap   '>
                <div className='relative border-[#69a2ca] border-2 border-solid rounded-lg w-[25rem] h-64 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-[50px] text-blue-600 font-bold'>23</div>    <div className='text-[16px]  selection: text-gray-500 '>Feasibility Studies Completed</div>

                    </div>
                </div>
                <div className='relative border-[#69a2ca] border-2 border-solid rounded-lg w-[25rem] h-64 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-[50px] text-blue-600 font-bold'>11</div>    <div className='text-[16px]  selection: text-gray-500 '> Studies for Regional and International Organizations</div>

                    </div>
                </div>
                <div className='relative border-[#69a2ca] border-2 border-solid rounded-lg w-[25rem] h-64 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-[50px] text-blue-600 font-bold'>1600</div>    <div className='text-[16px]  selection: text-gray-500 '>Training Hours Completed</div>

                    </div>
                </div>



            </div>










        </div>

    )
}

export default Certeficates
