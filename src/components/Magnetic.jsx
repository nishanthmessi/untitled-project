import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const Magnetic = ({ children }) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX, y: middleY })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }
  const { x, y } = position

  return (
    <motion.div
      className='relative'
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 180, damping: 20, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
