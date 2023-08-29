import React from 'react'

import SectionTitle from '../SectionTitle.jsx'
import ServiceItem from './ServiceItem.jsx'

import { services } from '../data/services.js'

const Service = () => {
    return (
        <section>  
            <SectionTitle>My Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service) => (
                        <ServiceItem Title={service.title} Icon={service.icon} Description={service.description}/>
                ))}
            </div>
        </section>
    )
}

export default Service
