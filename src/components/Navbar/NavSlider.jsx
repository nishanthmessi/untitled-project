import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { menuSlide, slide } from './animate'
import Magnetic from '../Magnetic'

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const NavSlider = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='fixed right-0 top-0 text-white bg-zinc-800 h-[100%] p-[160px] z-[5]'
    >
      <div className='flex flex-col text-4xl gap-12 mt-[70px]'>
        {navLinks.map((link, index) => (
          <motion.div
            variants={slide}
            initial='initial'
            animate='enter'
            exit='exit'
            custom={index}
          >
            <Magnetic>
              <Link key={index} to={link.href}>
                {link.title}
              </Link>
            </Magnetic>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default NavSlider
