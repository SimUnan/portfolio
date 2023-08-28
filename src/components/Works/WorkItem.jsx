import React from 'react'

const WorkItem = ({title, ImgUrl, techs, gitUrl}) => {
    return (
        <>
        <a href={gitUrl} target='_blank'>
        <div 
            className='
                bg-slate-300 hover:bg-slate-200 
                dark:bg-slate-800 hover:dark:bg-slate-700 
                rounded-xl overflow-hidden hover:scale-105 transform duration-200 ease-in-out group
                '>
            <img src={ImgUrl} className='object-cover'/>
            <div className='flex flex-col gap-y-3 mt-2 px-5 py-2'>
                <h1 className='text-lg font-bold text-grayColor dark:text-grayColorDark group-hover:dark:text-slate-200'>{title}</h1>
                <div className='flex gap-2'>
                    {techs.map((tech) => (
                        <p className='bg-slate-200 dark:bg-slate-900 group-hover:bg-slate-400 group-hover:text-slate-100 group-hover:dark:bg-slate-800 py-1 px-3 rounded-xl text-grayColor dark:text-grayColorDark'>{tech}</p>
                    ))}
                </div>
            </div>
        </div>
        </a>
        </>
    )
}

export default WorkItem
