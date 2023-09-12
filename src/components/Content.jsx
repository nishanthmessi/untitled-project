import { motion, useScroll, useTransform } from 'framer-motion'

const Content = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ scale }}
      className='flex justify-center items-center h-screen custom-container'
    >
      <motion.div style={{ scaleY: scrollYProgress }}>
        <p className='text-3xl w-[30%] outline-dashed p-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          minima, laudantium maiores velit sint sunt.
        </p>
      </motion.div>
      <motion.div style={{ scaleY: scrollYProgress }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Content
