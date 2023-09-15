import { motion } from 'framer-motion'
import transition from '../animations/transition'
import Content from '../components/Content'
import Socials from '../components/Socials'
import Projects from '../components/Projects'

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
      <motion.div className='flex flex-col justify-center items-center h-[100vh] bg-[#0f0f0f]'>
        <motion.h1
          className='text-[8rem] font-extrabold text-center text-[#afa18f]'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          Hello There
        </motion.h1>
        <motion.h1
          className='text-[8rem] font-extrabold text-center -mt-12 text-[#ec4e39]'
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          I'm Nisanth
        </motion.h1>
      </motion.div>
      <Content />
      <Projects />
    </>
  )
}

export default transition(Hero)
