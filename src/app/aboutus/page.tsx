import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around items-center md:justify-evenly '>
                <Image src="/about.avif" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className='z-[1] text-white text-[31px] sm:text-[34px] flex flex-col justify-center items-center w-full md:w-[50%] font-bold'>
                    <div className="md:text-[43px] mb-3">About Us</div>
                </div>
            </div>

            <div className='text-gray-500 text-lg p-2 m-2'>
                <ol>
                    <li className='p-2 m-2'>
                        <strong>History:</strong>
                        S and M Logistics Services was founded in 2024 by a team of seasoned professionals with extensive experience for more than 24 years in transport, logistics, and supply chain management.
                        Recognizing the growing complexities and challenges in the logistics sector, the founders aimed to create a company that not only provides logistics solutions but also empowers businesses through consultancy, training, and feasibility studies.
                        The company was established with the vision of enhancing operational efficiency and optimizing supply chain processes for various industries.
                    </li>

                    <li className='p-2 m-2'>
                        <strong>Scope:</strong>
                        S and M Logistics Services offers a comprehensive range of services, including:
                        <ol className='list-decimal pl-6'>
                            <li>Consultancy: Providing expert advice on logistics strategies, supply chain optimization, and operational efficiency.</li>
                            <li>Training: Delivering tailored training programs for organizations to enhance their teams' skills in logistics and supply chain management.</li>
                            <li>Feasibility Studies: Conducting in-depth analyses to evaluate the viability of logistics projects, helping clients make informed decisions.</li>
                            <li>Logistics Solutions: Offering end-to-end logistics services, including transportation management, warehousing, and inventory management.</li>
                            <li>Technology Integration: Assisting businesses in adopting cutting-edge logistics technologies to improve their operations.</li>
                        </ol>
                    </li>

                    <li className='p-2 m-2'>
                        <strong>Goal:</strong>
                        The primary goals of S and M Logistics Services include:
                        <ol className='list-decimal pl-6'>
                            <li>Empower Clients: Equip businesses with the knowledge and tools necessary to streamline their logistics and supply chain operations.</li>
                            <li>Enhance Efficiency: Help clients identify inefficiencies and implement best practices to reduce costs and improve service levels.</li>
                            <li>Drive Innovation: Stay at the forefront of logistics trends and technologies, ensuring clients benefit from the latest advancements in the field.</li>
                            <li>Build Lasting Relationships: Foster strong partnerships with clients to support their long-term success in logistics and supply chain management.</li>
                            <li>Expand Market Reach: Grow the company’s presence in the logistics sector by continually refining service offerings and exploring new markets.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default page
