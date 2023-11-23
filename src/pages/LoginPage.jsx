import { useLocation, useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import { useAuth } from '../hooks/useAuth'
import MyInput from '../components/UA/input/MyInput'
import MyButton from '../components/UA/button/MyButton'


const LoginPage = () => {
  const navigate = useNavigate() 
  const location = useLocation() 
  const { signin } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const user = form.username.value
    signin(user, () => navigate(fromPage, {replace: true}))
  }

  const fromPage = location.state?.from?.pathname || '/'
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <MyInput name="username"/>
      </label>
      <MyButton type="submit">
        Login
      </MyButton>
    </form>
  )
}
export default LoginPage;