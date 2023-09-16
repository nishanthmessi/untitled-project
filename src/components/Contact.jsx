import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const content = useRef(null)
  const isInView = useInView(content)

  return (
    <div ref={content}>
      <motion.h1
        variants={opacity}
        animate={isInView ? 'open' : 'closed'}
        className='flex flex-col text-[8rem] font-medium custom-container leading-tight'
      >
        <span>Let's get in</span>
        <span>touch</span>
      </motion.h1>
    </div>
  )
}

export default Contact
