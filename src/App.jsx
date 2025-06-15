import React, { useEffect, useState } from 'react'

import HeroSection from './components/HeroSection'
import Service from './components/Services/Service.jsx'
import Works from './components/Works/Works.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Theme switcher with localStorage
  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-light">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Enhanced Theme Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className={`
            group relative p-3 rounded-full transition-all duration-300 ease-out
            ${isScrolled 
              ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg' 
              : 'bg-white/5 backdrop-blur-sm border border-white/10'
            }
            hover:bg-white/20 hover:scale-110 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-purple-400/50
          `}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Sun Icon */}
            <div className={`
              absolute inset-0 flex items-center justify-center transition-all duration-300
              ${theme === 'dark' ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}
            `}>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Moon Icon */}
            <div className={`
              absolute inset-0 flex items-center justify-center transition-all duration-300
              ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}
            `}>
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </div>
          </div>
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`
        font-Roboto transition-colors duration-500 ease-out
        ${theme === "dark" 
          ? "bg-slate-900 text-gray-100" 
          : "bg-gray-50 text-gray-900"
        }
      `}>
        {/* Hero Section - Full Width */}
        <HeroSection />
        
        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Section */}
          <section className="py-20">
            <Service />
          </section>
          
          {/* Work Section */}
          <section className="py-20">
            <Works />
          </section>
          
          {/* About Section */}
          <section className="py-20">
            <AboutMe />
          </section>
        </div>
        
        {/* Footer - Full Width */}
        <Footer />
        
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated background shapes */}
          <div className={`
            absolute top-1/4 -left-48 w-96 h-96 rounded-full opacity-5 blur-3xl
            ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-400'}
            animate-pulse
          `} style={{animationDuration: '4s'}} />
          <div className={`
            absolute bottom-1/4 -right-48 w-96 h-96 rounded-full opacity-5 blur-3xl
            ${theme === 'dark' ? 'bg-pink-500' : 'bg-purple-400'}
            animate-pulse
          `} style={{animationDuration: '6s', animationDelay: '2s'}} />
        </div>
      </div>
      
      {/* Back to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`
            fixed bottom-8 right-8 z-40 p-3 rounded-full transition-all duration-300 ease-out
            ${theme === 'dark' 
              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg'
            }
            hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50
            animate-bounce
          `}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}

export default App