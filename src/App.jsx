import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytice from './components/Analytice'
import Numhr from './components/Numhr'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Gallery from './components/Gallery'


function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Hero />
      <Analytice/>
      <Numhr />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  )
}

export default App