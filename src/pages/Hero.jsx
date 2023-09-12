import { motion } from 'framer-motion'
import transition from '../animations/transition'

const Hero = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
    }),
  }

  return (
    <>
      <motion.div className='flex flex-col justify-center items-center h-[91.75vh] bg-gradient-to-b from-white via-gray-200 to-cyan-400'>
        <motion.h1
          className='text-[8rem] font-extrabold text-center'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.35 }}
        >
          Bad Choice ?
        </motion.h1>
        <motion.h1
          className='text-[8rem] font-extrabold text-center -mt-12'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.55 }}
        >
          Everytime
        </motion.h1>
      </motion.div>
    </>
  )
}

export default transition(Hero)
