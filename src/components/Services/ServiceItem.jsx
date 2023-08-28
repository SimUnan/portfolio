import React from 'react'

const ServiceItem = ({Title, Icon, Description}) => {
    return (
        <div className='
            bg-slate-300 hover:bg-slate-200 
            dark:bg-slate-800 hover:dark:bg-slate-700 
            p-4 rounded-lg my-1 hover:-translate-y-2 transform duration-150'>
            <Icon className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'/>
            <h1 className='cursor-default font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1'>{Title}</h1>
            <p className='cursor-default text-md text-gray-600 dark:text-grayColorDark mb-1'>{Description}</p>
        </div>
    )
}

export default ServiceItem
