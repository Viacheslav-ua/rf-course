import MyButton from "./UA/button/MyButton"
import MyInput from "./UA/input/MyInput"

const Login = () => {


  return (
    <>
      <h4>Login</h4>
      <form action="">
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Login</MyButton>
      </form>
    </>
    
  )
}

export default Login