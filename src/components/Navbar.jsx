import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky flex justify-between py-6 custom-container'>
      <div className='text-2xl font-semibold'>logo</div>
      <ul className='flex gap-8 text-lg font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link>Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
