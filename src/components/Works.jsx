import { useEffect, useRef, useState } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.jpg'
import img10 from '../assets/images/10.jpg'
import img11 from '../assets/images/11.jpg'
import img12 from '../assets/images/12.jpg'
import img13 from '../assets/images/13.jpg'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
]

const Works = () => {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.55])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div>
      <div
        ref={gallery}
        className='relative flex h-[165vh] gap-4 p-2 bg-zinc-800 overflow-hidden'
      >
        <Column images={[images[0], images[1], images[2], images[3]]} y={y} />
        <Column images={[images[4], images[5], images[6], images[7]]} y={y2} />
        <Column
          images={[images[8], images[9], images[10], images[11]]}
          y={y3}
        />
      </div>
    </div>
  )
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className='relative flex flex-col gap-4 h-[100%] w-[33%] min-w-[250px] first:-top-[45%] even:-top-[75%] last:-top-[45%]'
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className='relative'>
          <img src={src} alt='img' className='object-cover rounded-md' />
        </div>
      ))}
    </motion.div>
  )
}

export default Works
