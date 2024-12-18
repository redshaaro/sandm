import React from 'react'
import Link from 'next/link'

const Aboutteaser = () => {
    return (
        <>
            <div className='font-bold text-2xl text-[#053e7f] my-3 mx-3 sm:text-[30px] sm:my-5'>About us</div>

            <div className='text-gray-500 text-lg p-2 m-2 '>
             S and M Logistics Services was founded in 2024 by a team of seasoned professionals with extensive experience for more than 24 years in transport, logistics, and supply chain management. Recognizing the growing complexities and challenges in the logistics sector, the founders aimed to create a company that not only provides logistics solutions but also empowers businesses through consultancy, training, and feasibility studies. The company was established with the vision of enhancing operational efficiency and optimizing supply chain processes for various industries.
                <Link href="/aboutus" className='text-[#4883ff] font-bold text-sm'>View more</Link>


            </div>
        </>
    )
}

export default Aboutteaser