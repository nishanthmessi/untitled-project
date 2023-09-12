import { motion } from 'framer-motion'

const transition = (Child) => {
  return () => (
    <>
      <Child />
      <motion.div
        className='absolute top-0 left-0 w-[100%] h-[100vh] bg-black origin-bottom'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.3, 1] }}
      ></motion.div>
      <motion.div
        className='absolute top-0 left-0 w-[100%] h-[100vh] bg-black origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.3, 1] }}
      ></motion.div>
    </>
  )
}

export default transition
