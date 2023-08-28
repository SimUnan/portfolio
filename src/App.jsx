import React, { useEffect, useState } from 'react'

import HeroSection from './components/HeroSection'
import Service from './components/Services/Service.jsx'
import Works from './components/Works/Works.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }, [])

  const handleThemeSwticher = () => {
    setTheme(theme === 'dark' ? "light" : "dark");
    console.log(theme)
  }

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  console.log(theme)

  return (
    <>
      <button
        type='button'
        className='fixed z-10 right-2 top-2 text-white bg-primaryColor p-1 text-xl rounded-lg'
        onClick={handleThemeSwticher}
      >
        {theme === 'dark' ? "🌞" : "🌙"}
      </button>
      <div className={`font-Roboto bg-white dark:bg-slate-900 ${theme === "dark" ? "text-grayColorDark" : "text-grayColor"}`}>
        <div className='max-w-5xl w-11/12 mx-auto'>
          {/* Hero Section */}
          <HeroSection />
          {/* Service */}
          <Service />
          {/* Work */}
          <Works />
          {/* About me */}
          <AboutMe />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
