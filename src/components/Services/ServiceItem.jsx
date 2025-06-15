import React, { useState } from 'react'

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

export default ServiceItem