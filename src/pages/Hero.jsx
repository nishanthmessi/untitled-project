import { motion } from 'framer-motion'
import transition from '../animations/transition'
import Content from '../components/Content'
import Socials from '../components/Socials'

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
      <motion.div className='flex flex-col justify-center items-center h-[100vh] bg-gradient-to-b from-white via-gray-200 to-cyan-400'>
        <motion.h1
          className='text-[8rem] font-extrabold text-center'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          Hello There
        </motion.h1>
        <motion.h1
          className='text-[8rem] font-extrabold text-center -mt-12'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          I'm Nisanth
        </motion.h1>
        <motion.div
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.35, delay: 0.55 }}
        >
          <Socials />
        </motion.div>
      </motion.div>
      <Content />
    </>
  )
}

export default transition(Hero)
