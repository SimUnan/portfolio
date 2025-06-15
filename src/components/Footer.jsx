import React, { useState } from 'react'

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/SimUnan',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/simunan/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        // {
        //     name: 'Twitter',
        //     href: 'https://twitter.com/yourusername',
        //     icon: (
        //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        //         </svg>
        //     )
        // }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
            
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/5 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main footer content */}
                    <div className="text-center space-y-8">
                        {/* Logo/Name section */}
                        <div className="space-y-4">
                            <a
                                href='#hero'
                                className='inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105'
                            >
                                Sim Unan
                            </a>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Full-Stack Developer crafting beautiful digital experiences with modern web technologies
                            </p>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-3">
                            <a 
                                href="mailto:simunan002@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-200 rounded-full hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                                onMouseEnter={() => setHoveredLink('email')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                simunan002@gmail.com
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 bg-slate-800/50 border border-slate-700/50 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                    onMouseEnter={() => setHoveredLink(social.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                    
                                    {/* Tooltip */}
                                    <div className={`
                                        absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap transition-opacity duration-300
                                        ${hoveredLink === social.name ? 'opacity-100' : 'opacity-0'}
                                    `}>
                                        {social.name}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

                        {/* Bottom section */}
                        <div className="flex flex-col md:flex-row justify-end items-center gap-4 text-slate-400 text-sm">
                            {/* <div className="flex items-center gap-2">
                                <span>© {currentYear} Unan.</span>
                                <span>All rights reserved.</span>
                            </div> */}
                            
                            <div className="flex items-center gap-1">
                                <span>Made with</span>
                                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                                <span>and lots of ☕</span>
                            </div>
                        </div>

                        {/* Back to top hint */}
                        <div className="pt-4">
                            <a 
                                href="#hero"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                            >
                                <span>Back to top</span>
                                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer