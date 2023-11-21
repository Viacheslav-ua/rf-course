import '../styles/app.css'
import MyButton from './UA/button/MyButton';

const PostItem = ({post, number, remove}) => {
  
  return (
  <div className="post">
      <div className="post__content">
        <strong>{ number }. { post.title }</strong>
        <div>{post.id} {post.body}</div>
    </div>
    <div className="post__btn">
      <MyButton onClick={() => remove(post)} >delete</MyButton>
    </div>
    </div>
  );
};

export default PostItem;