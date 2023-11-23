import { useNavigate, useParams } from "react-router-dom"
import MyButton from "../components/UA/button/MyButton"
import { useEffect, useState } from "react"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/postService"
import Loader from "../components/UA/loader/loader"

const PostIdPage = () => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const [fetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentByPostId(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <MyButton onClick={() => navigate(-1)}>Go Back</MyButton>
      <h1>Page of post with id - {params.id}</h1>
      {isLoading 
        ? <Loader />
        : <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      }
      <h2 style={{marginTop: 40}}>Comments</h2>
      {isComLoading
        ? <Loader />
        : <div>
          {comments.map(comment => 
            <div style={{marginTop: 15}}>
              <h5>{comment.email}</h5>
              <p>
                {comment.body}
              </p>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default PostIdPage