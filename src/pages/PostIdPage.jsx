import { useNavigate, useParams } from "react-router-dom"
import MyButton from "../components/UA/button/MyButton"
import { useEffect, useState } from "react"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/postService"
import Loader from "../components/UA/loader/loader"

const PostIdPage = () => {
  const [post, setPost] = useState({})
  const navigate = useNavigate()
  const params = useParams()
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
      <MyButton onClick={() => navigate(-1)}>Go Back</MyButton>
      <h1>Page of post with id - {params.id}</h1>
      {isLoading 
        ? <Loader />
        : <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      }
    </div>
  )
}

export default PostIdPage