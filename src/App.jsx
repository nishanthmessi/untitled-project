import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
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
