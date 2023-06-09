import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../redux/slices/userApiSlice'
import { setCredentials } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (err) {
      toast.error(err.data.message || err.error)
    }
  }

  return (
    <div className='flex justify-center items-center h-[94vh]'>
      <form onSubmit={submitHandler}>
        <div className='p-8 border-2 rounded-lg w-[90vw] sm:w-[50vw] md:w-auto'>
          <div className='flex flex-col justify-between py-4 gap-4 my-4'>
            <label className='text-xl font-semibold text-gray-600'>Email</label>
            <input
              className='outline-none'
              type='email'
              placeholder='johnwick@mail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col justify-between py-4 gap-4 my-4'>
            <label className='text-xl font-semibold text-gray-600'>
              Password
            </label>
            <input
              className='outline-none'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type='submit'
            className='bg-zinc-800 text-white rounded-lg w-[20vw] p-3'
          >
            Login
          </button>

          <div className='mt-4'>
            <p>
              New User?{' '}
              <Link
                to='/signup'
                className='font-semibold hover:underline hover:text-gray-600'
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
