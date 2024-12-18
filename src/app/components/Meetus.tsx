import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Meetus = () => {
    return (
        <>
            <div className='text-2xl text-[#053e7f] font-bold   my-2 mx-3'>Meetus</div>
            <div className='flex flex-col items-start justify-center gap-2 mx-3'>
                <div className='flex items-center justify-center gap-2'>
                    <LocalPhoneIcon className='text-blue-600'></LocalPhoneIcon>
                    <div className='text-blue-600'>+201146004472</div>

                </div>
                <div className='flex items-center justify-center gap-2'>
                    <AlternateEmailIcon className='text-blue-600'></AlternateEmailIcon>
                    <div className='text-blue-600'>shaarawyziad@gmail.com</div>

                </div>
                <div className='flex items-center justify-center gap-2'>
                    <LocationOnIcon className='text-blue-600'></LocationOnIcon>
                    <div className='text-blue-600'>Alexandria</div>

                </div>

            </div>
        </>
    )
}

export default Meetus