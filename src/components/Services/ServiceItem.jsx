import React from 'react'

const ServiceItem = ({ Title, Icon, Description }) => {
    return (
        <div className="
            bg-slate-300 hover:bg-slate-200 
            dark:bg-slate-800 hover:dark:bg-slate-700 
            p-5 rounded-xl my-3 shadow-md transition-transform transform hover:-translate-y-2 duration-200
        ">
            <Icon className="text-gray-800 dark:text-gray-300 w-7 h-7 mb-4" />
            <h1 className="cursor-default font-bold text-xl text-gray-700 dark:text-gray-100 mb-2">{Title}</h1>
            <p className="cursor-default text-md text-gray-700 dark:text-gray-400 leading-relaxed">{Description}</p>
        </div>
    )
}

export default ServiceItem
