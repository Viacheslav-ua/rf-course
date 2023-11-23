import { useNavigate, useParams } from "react-router-dom"
import MyButton from "../components/UA/button/MyButton"

const PostIdPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div>
      <MyButton onClick={() => navigate(-1)}>Go Back</MyButton>
      <h1>Page of post with id - {id}</h1>
    </div>
  )
}

export default PostIdPage