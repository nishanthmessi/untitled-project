import Magnetic from './Magnetic'
import GsapMagnetic from './GsapMagnetic'

const Socials = () => {
  return (
    <div className='flex gap-10 mt-10'>
      <Magnetic>
        <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='3rem'
          width='3rem'
          className='cursor-pointer transistion duration-300 hover:text-blue-600'
        >
          <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
        </svg>
      </Magnetic>
      <Magnetic>
        <svg
          fill='none'
          viewBox='0 0 15 15'
          height='3em'
          width='3em'
          className='cursor-pointer transistion duration-100 hover:text-blue-600'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 1a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1H2zm1.05 5h1.9v6h-1.9V6zm2.025-1.995a1.075 1.075 0 11-2.15 0 1.075 1.075 0 012.15 0zM12 8.357c0-1.805-1.167-2.507-2.326-2.507-.379-.018-.757.061-1.095.231-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357z'
            clipRule='evenodd'
          />
        </svg>
      </Magnetic>
    </div>
  )
}

export default Socials
