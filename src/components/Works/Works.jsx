import React, { useState, useEffect, useRef } from 'react'
import { works } from '../data/works';

// Enhanced Works Component
const Works = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger the animation of items
                        works.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleItems(prev => [...prev, index]);
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='works' ref={sectionRef} className="relative py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
                <SectionTitle>Recent Works</SectionTitle>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {works.map((work, index) => (
                        <WorkItem 
                            key={index}
                            title={work.title} 
                            ImgUrl={work.imgUrl} 
                            techs={work.tech}
                            gitUrl={work.workUrl}
                            isVisible={visibleItems.includes(index)}
                            delay={index * 200}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                {/* <div className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                            Want to see more projects?
                        </h3>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

// Enhanced Section Title Component
const SectionTitle = ({ children }) => {
    return (
        <div className="text-center mb-16">
            <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                    {children}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A showcase of my recent projects and creative solutions
            </p>
        </div>
    )
}

// Enhanced Work Item Component with Faster Animations
const WorkItem = ({ title, ImgUrl, techs, gitUrl, isVisible, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div 
            className={`
                group relative transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:scale-105 cursor-pointer
            `}
            style={{ transitionDelay: `${delay}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={gitUrl} target='_blank' rel="noopener noreferrer" className="block">
                <div className='relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-200'>
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-slate-700">
                        {/* Loading placeholder */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse"></div>
                        )}
                        
                        <img 
                            src={ImgUrl} 
                            alt={title}
                            className={`
                                w-full h-full object-cover transition-all duration-200 ease-out
                                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                                group-hover:scale-110
                            `}
                            onLoad={() => setImageLoaded(true)}
                        />
                        
                        {/* Overlay on hover */}
                        <div className={`
                            absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                            transition-opacity duration-150 ease-out
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}>
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center gap-2 text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    <span className="text-sm font-medium">View Project</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className='p-6'>
                        <h3 className={`
                            text-xl font-bold mb-4 transition-colors duration-150 ease-out
                            ${isHovered 
                                ? 'text-purple-600 dark:text-purple-400' 
                                : 'text-gray-800 dark:text-gray-100'
                            }
                        `}>
                            {title}
                        </h3>
                        
                        {/* Tech Stack */}
                        <div className='flex flex-wrap gap-2'>
                            {techs.map((tech, index) => (
                                <span 
                                    key={index}
                                    className={`
                                        px-3 py-1 rounded-full text-sm font-medium transition-all duration-150 ease-out
                                        ${isHovered
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                            : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }
                                    `}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Decorative border */}
                    <div className={`
                        absolute inset-0 rounded-2xl border-2 transition-all duration-150 ease-out pointer-events-none
                        ${isHovered 
                            ? 'border-purple-500/30 shadow-lg shadow-purple-500/10' 
                            : 'border-transparent'
                        }
                    `}></div>

                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                </div>
            </a>
        </div>
    )
}

export default Works