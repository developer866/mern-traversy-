import { useState, useEffect } from 'react'
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../Components/Spinner'

function Login() {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <section className="heading">
        <h2>
          <FaSignInAlt /> Login
        </h2>
        <p>Login and start Setting Goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>

          <div className="form-group">

            <input type="email" className="form-control"
              id="email" name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">

            <input type="password" className="form-control"
              id="password" name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type='submit' className='btn btn-block'>Login</button>
          </div>

        </form>
      </section>
    </div>
  )
}

export default Login