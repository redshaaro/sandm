"use client"
import React from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react"


const Mobilemenu = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <>
            <MenuIcon onClick={() => { setOpen(open => !open) }} className='text-blue-500 text-[38px] cursor-pointer md:hidden'></MenuIcon>
            {open &&
                <div className='text-[#121212] mt-[35px] absolute left-0 top-24 w-full h-[calc(100vh-151px)]  bg-white flex flex-col items-center justify-evenly  font-normal text-[15px] z-10'>
                    <Link className='hover:text-[#4883ff] transi' href="/">Home</Link>
                    <Link className='hover:text-[#4883ff]' href="/courses">Courses</Link>

                    <Link className='hover:text-[#4883ff]' href="/about">About us</Link>
                    <Link className='hover:text-[#4883ff]' href="/contact">Contact us</Link>





                </div>
            }


        </>
    )
}

export default Mobilemenu