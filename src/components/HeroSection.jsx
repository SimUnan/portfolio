import React from 'react'

const HeroSection = () => {
    return (
        <header id='hero'>
            <div className='flex items-center justify-center flex-col py-20'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 font-semibold text-primaryColor dark:text-primaryColorDark'>Hi, This is Sim Unan.</h1>
                    <p className='max-w-md text-md md:text-xl mb-4 md:mb-5'>I am a Web Developer</p>
                    <a href="#works" className='bg-indigo-600 text-white font-base px-5 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-150 ease-in-out shadow-lg hover:shadow-2xl'>See Works</a>
                </div>
            </div>
        </header>
    )
}

export default HeroSection
