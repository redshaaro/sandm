import React from 'react'
import Image from 'next/image'
import Course from '../components/Course';


const page = () => {
    const courses = [
        {
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
        },
        {
          id: 4,
          courseName: "Warehouse Management",
          image: "/warehousemanagement.jpeg",
          description: "Best practices and modern techniques for managing warehouse operations effectively.",
          link: "/courses/4"
        },
        {
          id: 5,
          courseName: "Inventory Management Techniques",
          image: "/inventory management techniqes.webp",
          description: "Covers methods for controlling and optimizing inventory levels to reduce costs.",
          link: "/courses/5"
        },
        {
          id: 6,
          courseName: "Logistics and Supply Chain Analytics",
          image: "/logistics and supply chain analatics.webp",
          description: "Data-driven approaches to analyzing and improving supply chain performance.",
          link: "/courses/6"
        },
        {
          id: 7,
          courseName: "Project Management in Logistics",
          image: "/project management in logistics.webp",
          description: "Project management principles applied to logistics and supply chain projects.",
          link: "/courses/7"
        },
        {
          id: 8,
          courseName: "Sustainable Logistics Practices",
          image: "/sustain.jpeg",
          description: "Focus on environmentally friendly practices in logistics and supply chain operations.",
          link: "/courses/8"
        },
        {
          id: 9,
          courseName: "Risk Management in Supply Chains",
          image: "/risk management.webp",
          description: "Strategies to identify, assess, and mitigate risks within the supply chain.",
          link: "/courses/9"
        },
        {
          id: 10,
          courseName: "Regulatory Compliance in Logistics",
          image: "/regulatory.webp",
          description: "Understanding legal and regulatory requirements in global logistics.",
          link: "/courses/10"
        },
        {
          id: 11,
          courseName: "Negotiation Skills for Supply Chain Professionals",
          image: "/negotiaton skills.webp",
          description: "Techniques and strategies for effective negotiations in the supply chain context.",
          link: "/courses/11"
        },
        {
          id: 12,
          courseName: "Digital Transformation in Logistics",
          image: "/digital transformation.webp",
          description: "Leveraging digital technology to improve logistics and supply chain operations.",
          link: "/courses/12"
        },
        {
          id: 13,
          courseName: "Customer Service Excellence in Logistics",
          image: "/customer service.webp",
          description: "Best practices for enhancing customer service within logistics.",
          link: "/courses/13"
        },
        {
          id: 14,
          courseName: "Change Management in Logistics",
          image: "/change management.jpeg",
          description: "Adapting to changes within logistics environments effectively.",
          link: "/courses/14"
        },
        {
          id: 15,
          courseName: "Fleet Management",
          image: "/fleet management.jpeg",
          description: "Managing and optimizing transportation fleets for logistics efficiency.",
          link: "/courses/15"
        },
        {
          id: 16,
          courseName: "Maritime Transport",
          image: "/maritime transport.jpeg",
          description: "Overview of maritime transport and its role in global logistics.",
          link: "/courses/16"
        },
        {
          id: 17,
          courseName: "Port Operations Management",
          image: "/port operations.jpeg",
          description: "Managing port facilities and operations in international logistics.",
          link: "/courses/17"
        },
        {
          id: 18,
          courseName: "Multimodal Transport",
          image: "/multimodal transport.jpeg",
          description: "Combining multiple transport modes to optimize logistics performance.",
          link: "/courses/18"
        },
        {
          id: 19,
          courseName: "Air Transport",
          image: "/air transport.jpeg",
          description: "Fundamentals of air freight and its applications in logistics.",
          link: "/courses/19"
        },
        {
          id: 20,
          courseName: "Railway Operations",
          image: "/railwayoperations.jpeg",
          description: "Managing railway transport within logistics networks.",
          link: "/courses/20"
        },
        {
          id: 21,
          courseName: "Financial Management",
          image: "/financialmanagement.jpeg",
          description: "Financial principles applied to logistics and supply chain management.",
          link: "/courses/21"
        },
        {
          id: 22,
          courseName: "Global Supply Chain Management",
          image: "/global supply chain.jpeg",
          description: "Managing supply chains across global markets and diverse geographies.",
          link: "/courses/22"
        },
        {
          id: 23,
          courseName: "Freight Forwarding and Customs Clearance",
          image: "/freight and customer.webp",
          description: "Processes and regulations for freight forwarding and customs compliance.",
          link: "/courses/23"
        },
        {
          id: 24,
          courseName: "E-commerce Logistics",
          image: "/e-commerce logistics.jpg",
          description: "Logistics strategies and operations in e-commerce settings.",
          link: "/courses/24"
        },
        {
          id: 25,
          courseName: "Cold Chain Logistics",
          image: "/coldchain.jpg",
          description: "Managing temperature-sensitive logistics for perishable goods.",
          link: "/courses/25"
        },
        {
          id: 26,
          courseName: "Supply Chain Finance",
          image: "/supply chain finance.jpeg",
          description: "Financial tools and techniques for supply chain funding and risk management.",
          link: "/courses/26"
        },
        {
          id: 27,
          courseName: "Lean Logistics",
          image: "/lean.jpg",
          description: "Implementing lean principles to minimize waste and increase efficiency in logistics.",
          link: "/courses/27"
        },
        {
          id: 28,
          courseName: "Supply Chain Network Design",
          image: "/design.png",
          description: "Designing optimal network structures for logistics efficiency.",
          link: "/courses/28"
        },
        {
          id: 29,
          courseName: "Behavioral Aspects of Supply Chain Management",
          image: "/behavior.webp",
          description: "Exploring human behavior and its impact on supply chain management.",
          link: "/courses/29"
        },
        {
          id: 30,
          courseName: "Technology Trends in Logistics",
          image: "/technology trends.jpeg",
          description: "Exploring emerging technologies shaping the future of logistics.",
          link: "/courses/30"
        },
        {
          id: 31,
          courseName: "Quality Management in Logistics",
          image: "/quality control.jpeg",
          description: "Ensuring quality standards and improvements within logistics operations.",
          link: "/courses/31"
        },
        {
          id: 32,
          courseName: "Crisis Management in Supply Chains",
          image: "/crisis management.jpg",
          description: "Preparing and managing crisis situations within supply chains.",
          link: "/courses/32"
        },
        {
          id: 33,
          courseName: "Supplier Relationship Management",
          image: "/srm.png",
          description: "Strategies for maintaining strong supplier relationships.",
          link: "/courses/33"
        },
        {
          id: 34,
          courseName: "Data-Driven Decision Making in Logistics",
          image: "/data driven.jpg",
          description: "Using data analytics to make informed logistics decisions.",
          link: "/courses/34"
        },
        {
          id: 35,
          courseName: "Cross-Docking Operations",
          image: "/cross docking.jpg",
          description: "Techniques for cross-docking to streamline logistics processes.",
          link: "/courses/35"
        },
        {
          id: 36,
          courseName: "Transportation Law and Ethics",
          image: "/law and ethics.jpg",
          description: "Understanding legal and ethical considerations in transportation.",
          link: "/courses/36"
        },
        {
          id: 37,
          courseName: "Agile Supply Chain Management",
          image: "/agile supply chain.jpg",
          description: "Implementing agile principles to enhance flexibility in supply chains.",
          link: "/courses/37"
        },
        {
          id:38,
          courseName:"Ai and Machinelearning in supply chain",
          image:"/aisupply.png",
          description:"Applying ai and machinelearning techniques and tools to enhance supply chain cycle",
          
        }
       

      ];
      
      
      
    return (
        <>
            <div className='relative w-full h-[20rem] md:h-[500px] object-cover flex flex-col md:flex-row justify-around  items-center   md:justify-evenly '>
                <Image src="/courses.avif" fill className='absolute grayscale-[85%]' alt="hero" ></Image>
                <div className=' z-[1] text-white text-[31px] sm:text-[34px]  flex flex-col justify-center items-center    w-full md:w-[50%]   font-bold '><div className="md:text-[43px] mb-3">Courses </div>

                </div>




            </div>

            <div className='flex justify-center items-center flex-wrap'>
                {
                    courses.map((course) => (<Course id={course.id} image={course.image} desc={course.description} name={course.courseName}></Course>))
                }




            </div>
        </>
    )
}

export default page