import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='no-scrollbar data-scroll-container'>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}

export default App
