import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Mobilemenu from './Mobilemenu';


const Navbar = () => {
    return (
        <nav className='flex justify-between  items-center mr-4'>
            <Link href="/">
                <div className="h-[150px] w-[125px] sm:w-[150px] md:w-[200px] lg:w-[300px] lg:h-[200px] relative ">
                    <Image src="/logo.png" fill className='  absolute' alt="logo"></Image>


                </div>
            </Link>
            <Mobilemenu></Mobilemenu>
            <div className='hidden md:flex justify-between items-center   w-[50%] mr-5      '>
                <Link className='hover:text-[#4883ff] transi' href="/">Home</Link>
                <Link className='hover:text-[#4883ff]' href="/courses">Courses</Link>

                <Link className='hover:text-[#4883ff]' href="/about">About us</Link>
                <Link className='hover:text-[#4883ff]' href="/contact">Contact us</Link>
            </div>











        </nav>
    )
}

export default Navbar