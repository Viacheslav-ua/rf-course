import MyButton from "../components/UA/button/MyButton";
import MyInput from "../components/UA/input/MyInput";
import useInput from "../hooks/useInput";

const HooksPage = () => {
  const username = useInput('')
  const password = useInput('')

  return (
    <>
      <div style={{ paddingLeft: 20 }}>
        <MyInput
        {...username}
          style={{ width: 300, marginRight: 50 }}
          placeholder="Username"
        />
        <MyInput
        {...password}
          style={{ width: 300, marginRight: 50 }}
          type="password"
          placeholder="Password"
        />
        <MyButton onClick={() => console.log(username.value, password.value)}>LOG</MyButton>
      </div>
    </>
  )
}
export default HooksPage;