import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const imageContainer = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: '-=100px',
      end: document.body.offsetHeight,
      pin: true,
    })
  }, [])

  const projects = [
    {
      title: 'Notely',
      src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-78dc5.appspot.com/o/product-imgs%2Fproject-notely.png?alt=media&token=a48d51d0-0153-4eb4-9aa8-47e930d5bf4e',
    },
    {
      title: 'Pawsome Adoption',
      src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-78dc5.appspot.com/o/product-imgs%2Fproject-pet-adopt.png?alt=media&token=ed349337-7d73-47e8-bcb0-cc3fbf0c75fb',
    },
    {
      title: 'Flamingo',
      src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-78dc5.appspot.com/o/product-imgs%2Fproject-flamingo.png?alt=media&token=c16fc848-6a98-4120-b89f-fc15020e16c5',
    },
    {
      title: 'Fasten Rentals',
      src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-78dc5.appspot.com/o/product-imgs%2Fproject-fasten.png?alt=media&token=7049ce55-6c46-4022-baf5-bed802601620',
    },
  ]

  return (
    <div className='flex flex-col custom-container'>
      <div className='flex justify-between gap-10 h-[200px]'>
        <div ref={imageContainer} className='relative h-[100%] w-[80%]'>
          <img
            className='fill object-cover'
            alt='image'
            src={projects[selectedProject].src}
          />
        </div>
        <div className='flex flex-col relative mt-[200px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            obcaecati!
          </p>
        </div>
        <div className='items-end text-lg'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            iste nesciunt alias, ipsam dolore mollitia accusamus ducimus eaque
            recusandae porro.
          </p>
        </div>
      </div>
      <div className='flex flex-col mt-[200px] mb-20 border-b-[1px] border-black'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex justify-end border-t-[1px] border-black text-6xl font-semibold cursor-pointer'
            onMouseOver={() => {
              setSelectedProject(index)
            }}
          >
            <p className='m-0 mt-4 mb-2'>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
