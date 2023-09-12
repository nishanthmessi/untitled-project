import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}

export default App
