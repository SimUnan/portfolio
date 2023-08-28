import React from 'react'

const Footer = () => {
    return (
        <div className='mt-10 py-5 bg-slate-800 rounded-t-xl flex flex-col justify-center items-center'>
            <a
                href='#hero'
                className='text-slate-900 dark:text-slate-200 font-light'>
            Sim Unan
            </a>
            <a 
                className='text-slate-900 dark:text-slate-400'
                href="mailto:simunan002@gmail.com">
                simunan002@gmail.com
            </a>
            <p className='text-slate-700 text-sm'>© nanDev-Tech Creative 2023. ALl right reserved</p>
        </div>
    )
}

export default Footer
