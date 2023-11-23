import { useNavigate } from 'react-router-dom';
import '../styles/app.css'
import MyButton from './UA/button/MyButton';

const PostItem = ({ post, number, remove }) => {
  
  const navigate = useNavigate()


  const goBack = () => navigate(-1)
  
  return (
  <div className="post">
      <div className="post__content">
        <strong>{ number }. { post.title }</strong>
        <div>{post.id} {post.body}</div>
    </div>
    <div className="post__btn">
        <MyButton
          style={{
            color: 'green',
            margin: '0 10px'
          }}
          onClick={() => navigate(`/posts/${post.id}`)}
        >open</MyButton>
      <MyButton onClick={() => remove(post)} >delete</MyButton>
    </div>
    </div>
  );
};

export default PostItem;