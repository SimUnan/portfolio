import React, { useState, useEffect, useRef } from "react";
import anime from '../../assets/image/anime.gif'

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
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
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
                <SectionTitle>About Me</SectionTitle>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Content Side */}
                    <div className={`lg:w-7/12 transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        {/* Main Description */}
                        <div className="space-y-6">
                            <p className='text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-light'>
                                Hi there! I'm <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sim Unan</span>, a passionate full-stack developer specializing in the modern web ecosystem. I love building cutting-edge web applications with Next.js and NestJS, creating digital experiences that make a real impact.
                            </p>
                            
                            <p className='text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
                                I thrive on transforming complex ideas into elegant, user-friendly digital experiences. My curiosity drives me to constantly explore emerging technologies and implement innovative solutions that make a real impact.
                            </p>

                            {/* Current Position */}
                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">Currently Working</span>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Frontend Developer</h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium">Digital Economy Business Committee (DEBC)</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">2024 - Present</p>
                            </div>

                            {/* Tech Stack Highlights */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">What I'm passionate about:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Next.js', 'NestJS', 'React', 'TypeScript', 'Node.js', 'TailwindCSS'].map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-4 py-2 bg-white dark:bg-slate-800 border border-purple-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    I'm actively seeking opportunities for on-site or remote full-stack developer positions where I can contribute to innovative projects and grow with a dynamic team.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a 
                                        href="mailto:Simunan002@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Get In Touch
                                    </a>
                                    
                                    <a 
                                        href="#works"
                                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200 transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        View My Work
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GIF Side */}
                    <div className={`lg:w-5/12 transform transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                            
                            {/* Main GIF container */}
                            <div className="relative bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl">
                                <img 
                                    src={anime}
                                    alt="Sim Unan - Coding Animation" 
                                    className="w-full aspect-square object-cover rounded-xl"
                                />
                                
                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                                    <div className="text-center">
                                        <div className="text-sm font-medium">Available for</div>
                                        <div className="text-xs opacity-90">New Opportunities</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating tech icons */}
                            {/* <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce shadow-lg">
                                JS
                            </div>
                            <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse shadow-lg">
                                ⚛️
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
                Get to know the person behind the code
            </p>
        </div>
    )
}

export default AboutMe;