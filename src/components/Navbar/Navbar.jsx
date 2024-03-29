import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavSlider from './NavSlider'
import { AnimatePresence } from 'framer-motion'
import Menu4LineIcon from 'remixicon-react/Menu4LineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import Magnetic from '../Magnetic'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [])

  return (
    <>
      <div className='fixed right-0 z-10 p-[30px]'>
        <Magnetic>
          {!isActive ? (
            <div
              className='p-4 transition ease-in delay-300 bg-zinc-800 text-white rounded-full cursor-pointer'
              onClick={() => setIsActive(!isActive)}
            >
              <Menu4LineIcon className='h-10 w-10' />
            </div>
          ) : (
            <div
              className='p-4 transition ease-out delay-300 bg-[#ec4e39] text-white rounded-full cursor-pointer'
              onClick={() => setIsActive(!isActive)}
            >
              <CloseLineIcon className='h-10 w-10' />
            </div>
          )}
        </Magnetic>
      </div>
      <AnimatePresence mode='wait'>{isActive && <NavSlider />}</AnimatePresence>
    </>
  )
}

export default Navbar
