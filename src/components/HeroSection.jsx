import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const roles = ["Web Developer", "Frontend Engineer", "Creative Coder", "Problem Solver"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header id='hero' className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
            {/* Animated Background */}
            <div className='absolute inset-0'>
                <div 
                    className='absolute inset-0 opacity-30'
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
                    }}
                />
                
                {/* Floating particles */}
                <div className='absolute inset-0'>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute rounded-full bg-white opacity-10 animate-pulse'
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 4 + 1}px`,
                                height: `${Math.random() * 4 + 1}px`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${Math.random() * 3 + 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Grid pattern */}
                <div 
                    className='absolute inset-0 opacity-5'
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Main Content */}
            <div className='relative z-10 flex items-center justify-center min-h-screen px-4'>
                <div className='text-center max-w-4xl mx-auto'>
                    {/* Greeting with animation */}
                    <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className='inline-block mb-4'>
                            <span className='text-sm md:text-base text-purple-300 font-medium tracking-widest uppercase animate-pulse'>
                                Welcome to my portfolio
                            </span>
                        </div>
                    </div>

                    {/* Name with gradient text */}
                    <div className={`transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className='text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight'>
                            <span className='bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent'>
                                Hi, I'm{' '}
                            </span>
                            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse'>
                                Sim Unan
                            </span>
                        </h1>
                    </div>

                    {/* Animated role text */}
                    <div className={`transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className='h-16 md:h-20 flex items-center justify-center mb-8'>
                            <p className='text-xl md:text-3xl lg:text-4xl text-gray-300 font-light'>
                                I am a{' '}
                                <span className='text-purple-400 font-semibold transition-all duration-500 ease-in-out'>
                                    {roles[currentRole]}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className={`transform transition-all duration-1000 delay-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
                            Crafting beautiful, functional, and user-centered digital experiences with modern web technologies.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className={`transform transition-all duration-1000 delay-900 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <a 
                                href="#works" 
                                className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'
                            >
                                <span className='relative z-10'>View My Work</span>
                                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300'></div>
                            </a>
                            
                            <a 
                                href="#contact" 
                                className='group px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 ease-out transform hover:scale-105'
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className='flex flex-col items-center text-gray-400'>
                            <span className='text-sm mb-2 animate-pulse'>Scroll to explore</span>
                            <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
                                <div className='w-1 h-3 bg-gray-400 rounded-full animate-bounce mt-2'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-20 left-20 w-20 h-20 border border-purple-500/20 rounded-full animate-spin' style={{animationDuration: '20s'}}></div>
            <div className='absolute bottom-20 right-20 w-16 h-16 border border-pink-500/20 rounded-full animate-spin' style={{animationDuration: '15s'}}></div>
            <div className='absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping'></div>
            <div className='absolute top-1/3 right-10 w-3 h-3 bg-pink-400 rounded-full animate-ping' style={{animationDelay: '1s'}}></div>
        </header>
    );
};

export default HeroSection;