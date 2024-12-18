import React from 'react'

const Pitchus = () => {
    return (
        <>
            <div className='text-2xl text-[#053e7f] font-bold   my-2 mx-3'>
                Pitch us

            </div>
            <div className='bg-[#004aac] p-10'>
                <form className='rounded-xl w-full bg-[#ffff]  flex flex-col p-3 items-center justify-center  '>
                    <input type="text" placeholder='enter your email' className='my-2 text-center mx-2 w-full outline-none  bg-[#e3e3e3] rounded-md' />
                    <textarea rows={4} cols={50} className="my-2 text-center w-full outline-none mx-2   bg-[#e3e3e3]  rounded-md" name="" id="" placeholder='Enter your message' ></textarea>
                    <button className='text-white outline-none bg-blue-600 rounded-md p-3'>Submit </button>
                </form>
            </div>

        </>

    )
}

export default Pitchus