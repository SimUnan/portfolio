import React from 'react'

import SectionTitle from '../SectionTitle.jsx'
import WorkItem from './WorkItem.jsx'

import {works} from '../data/works.js'

const Works = () => {
    return (
        <section id='works'>
            <SectionTitle>Recent Works</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 cursor-pointer'>
                {works.map((work, index) => (
                    <WorkItem 
                        key={index}
                        title={work.title} 
                        ImgUrl={work.imgUrl} 
                        techs={work.tech}
                        gitUrl={work.workUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Works
