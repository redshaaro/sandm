import React from 'react'
import Image from 'next/image'

const TeamPage = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around items-center md:justify-evenly '>
                <Image src="/about.avif" fill className='absolute grayscale-[85%]' alt="team" ></Image>
                <div className='z-[1] text-white text-[31px] sm:text-[34px] flex flex-col justify-center items-center w-full md:w-[50%] font-bold'>
                    <div className="md:text-[43px] mb-3">Meet Our Team</div>
                </div>
            </div>

            <div className='text-gray-500 text-lg p-2 m-2'>
                <h2 className='text-[24px] font-bold mb-4'>Our Team at S and M Logistics Services</h2>
                <p>At S and M Logistics Services, our strength lies in our diverse and experienced team of professionals who are passionate about logistics and supply chain management. Our team 62 experts</p>

                <ol className='list-decimal pl-6 mt-4'>
                    <li className='mb-4'>
                        <strong>Expertise and Experience:</strong>
                        <ul className='list-disc pl-6'>
                            <li>Our team comprises industry veterans with extensive backgrounds in logistics, supply chain management, transportation, and consultancy.</li>
                            <li>Each member brings a wealth of knowledge and practical experience to the table.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Multidisciplinary Skills:</strong>
                        <ul className='list-disc pl-6'>
                            <li>We have a diverse range of skills, including project management, data analytics, regulatory compliance, and technology integration.</li>
                            <li>This multidisciplinary approach allows us to address complex challenges faced by our clients.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Continuous Learning and Development:</strong>
                        <ul className='list-disc pl-6'>
                            <li>Our team is committed to ongoing professional development.</li>
                            <li>We prioritize training and certifications to ensure members stay updated with the latest trends and best practices in logistics and supply chain management.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Client-Centric Approach:</strong>
                        <ul className='list-disc pl-6'>
                            <li>Each team member is dedicated to understanding our clients' unique needs and challenges.</li>
                            <li>We emphasize collaboration and communication to develop tailored solutions that drive success for our clients.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Innovative Problem Solvers:</strong>
                        <ul className='list-disc pl-6'>
                            <li>Our team thrives on innovation.</li>
                            <li>We encourage creative thinking and the exploration of new ideas to develop effective strategies and solutions for the logistics industry.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Commitment to Excellence:</strong>
                        <ul className='list-disc pl-6'>
                            <li>We pride ourselves on delivering high-quality services.</li>
                            <li>Our team is driven by a commitment to excellence, ensuring every project meets the highest standards.</li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <strong>Diverse Backgrounds:</strong>
                        <ul className='list-disc pl-6'>
                            <li>Our team members come from various cultural and professional backgrounds.</li>
                            <li>This diversity enriches our perspectives and enables us to serve a wide range of clients effectively.</li>
                        </ul>
                    </li>
                </ol>

                <p className='mt-4'>The diverse backgrounds and expertise of our team at S and M Logistics Services are key to our success. By leveraging our collective strengths, we are well-equipped to tackle the complexities of logistics and supply chain management, delivering exceptional service to our clients.</p>
            </div>
        </>
    )
}

export default TeamPage
