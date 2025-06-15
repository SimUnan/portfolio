import React, { useState, useEffect, useRef } from 'react'

// Enhanced Service Component
const Service = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger the animation of items
                        services.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleItems(prev => [...prev, index]);
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10">
                <SectionTitle>My Skills & Expertise</SectionTitle>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            Title={service.title} 
                            Icon={service.icon} 
                            Description={service.description}
                            isVisible={visibleItems.includes(index)}
                            delay={index * 150}
                        />
                    ))}
                </div>

                {/* Skills Summary */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            🚀 Always learning and exploring new technologies
                        </span>
                    </div>
                </div>
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
                Here are the technologies and tools I use to bring ideas to life
            </p>
        </div>
    )
}

// Enhanced Service Item Component
const ServiceItem = ({ Title, Icon, Description, isVisible, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`
                group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:scale-105 cursor-pointer
            `}
            style={{ transitionDelay: `${delay}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background with gradient and blur effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
                {/* Hover gradient overlay */}
                <div className={`
                    absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}></div>
                
                {/* Animated border */}
                <div className={`
                    absolute inset-0 rounded-2xl border-2 transition-all duration-300
                    ${isHovered 
                        ? 'border-purple-500/30 shadow-lg shadow-purple-500/10' 
                        : 'border-gray-200/50 dark:border-slate-700/50'
                    }
                `}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                    <div className={`
                        absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
                        transition-all duration-300 blur-lg
                        ${isHovered ? 'opacity-20 scale-110' : 'opacity-0 scale-100'}
                    `}></div>
                    <div className={`
                        relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isHovered 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                            : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300'
                        }
                    `}>
                        <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                </div>

                {/* Title */}
                <h3 className={`
                    font-bold text-xl mb-4 transition-colors duration-300
                    ${isHovered 
                        ? 'text-purple-600 dark:text-purple-400' 
                        : 'text-gray-800 dark:text-gray-100'
                    }
                `}>
                    {Title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {Description}
                </p>

                {/* Hover indicator */}
                <div className={`
                    mt-6 flex items-center text-sm font-medium transition-all duration-300
                    ${isHovered 
                        ? 'text-purple-600 dark:text-purple-400 translate-x-2' 
                        : 'text-gray-400 dark:text-gray-500 translate-x-0'
                    }
                `}>
                    <span>Explore more</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    )
}

// Services data (enhanced with better descriptions)
const services = [
    {
        title: "Frontend Development",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 10.93 5.16-1.191 9-5.38 9-10.93V7l-10-5z"/>
            </svg>
        ),
        description: "Building responsive, interactive web applications with Next.js, React.js, Tailwind CSS, and modern UI libraries",
    },
    {
        title: "Backend Development",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 12.75v6L12 22.25l7.5-3.5v-6L12 16.25l-7.5-3.5zM12 1.75L4.5 5.25v6L12 14.75l7.5-3.5v-6L12 1.75z"/>
            </svg>
        ),
        description: "Creating robust server-side applications with NestJS, Node.js, Express.js, and RESTful API development",
    },
    {
        title: "Database & Storage",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C9.24 2 7 3.79 7 6v2c0 2.21 2.24 4 5 4s5-1.79 5-4V6c0-2.21-2.24-4-5-4zM7 10v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c0 2.21-2.24 4-5 4s-5-1.79-5-4zM7 14v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c0 2.21-2.24 4-5 4s-5-1.79-5-4z"/>
            </svg>
        ),
        description: "Designing efficient data storage solutions with MongoDB, Firebase, Supabase, and database optimization",
    },
    {
        title: "Programming Languages",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
        ),
        description: "Proficient in JavaScript, TypeScript, Python, C, and C++ for versatile software development",
    },
    {
        title: "Web Technologies",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        ),
        description: "Expert in HTML5, CSS3, responsive design, SSR/SSG, and modern web performance optimization",
    },
    {
        title: "UI/UX Design",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        ),
        description: "Creating intuitive user experiences and beautiful interfaces using Figma and design systems",
    },
]

export default Service