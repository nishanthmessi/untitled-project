import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Magnetic from './Magnetic'
import GsapMagnetic from './GsapMagnetic'

const Content = () => {
  const slideUp = {
    initial: {
      y: '100%',
    },
    open: (i) => ({
      y: 0,
      transition: { duration: 0.5, delay: 0.02 * i },
    }),
    closed: {
      y: '100%',
      transition: { duration: 0.5 },
    },
  }

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

  const description =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequiminima, laudantium maiores velit sint sunt.'
  const content = useRef(null)
  const isInView = useInView(content)

  return (
    <div
      ref={content}
      className='flex justify-center custom-container mt-[200px] py-[200px]'
    >
      <div className='flex'>
        <p className='text-4xl w-[80%] p-2'>
          {description.split(' ').map((word, index) => (
            <span
              key={index}
              className='inline-flex relative overflow-hidden mr-3'
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div className='flex flex-col gap-10'>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className='text-[1.7rem]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos.
        </motion.p>
        <GsapMagnetic>
          <div
            data-scroll
            data-scroll-speed={0.1}
            className='flex items-end cursor-pointer w-[180px] h-[180px]'
          >
            <p className='p-16 rounded-full bg-zinc-800 text-white'>About Me</p>
          </div>
        </GsapMagnetic>
      </div>
    </div>
  )
}

export default Content
