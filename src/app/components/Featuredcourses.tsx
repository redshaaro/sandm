import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Course from './Course'

const Featuredcourses = () => {
    const courses = [{
        id: 1,
        courseName: "Fundamentals of Logistics and Supply Chain Management",
        image: "/fundamentalsofsupplychain.webp",
        description: "Introduction to the core concepts and principles of logistics and supply chain management.",
        link: "/courses/1"
    },
    {
        id: 2,
        courseName: "Advanced Supply Chain Strategies",
        image: "/advanced supply chain strategies.webp",
        description: "In-depth analysis of strategic approaches to improve supply chain effectiveness and efficiency.",
        link: "/courses/2"
    },
    {
        id: 3,
        courseName: "Transportation Management",
        image: "/transporation management.jpeg",
        description: "Explores the complexities of transportation systems and strategies in logistics.",
        link: "/courses/3"
    },]

    return (
        <>
            <div className='font-bold text-2xl text-[#053e7f] my-3 mx-3 sm:text-[30px] sm:my-5'>Featured Courses</div>
            <div className='flex flex-wrap items-center justify-center gap-4 p-2'>
                {
                    courses.map((course) => (<Course id={course.id} image={course.image} desc={course.description} name={course.courseName}></Course>))
                }




            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='text-white bg-[#2563eb] p-2  w-[50%] rounded-lg   text-center text-[18px] m-[10px]'>
                    <Link href="/courses">
                        View all courses


                    </Link>
                </div>
            </div>
        </>
    )
}

export default Featuredcourses