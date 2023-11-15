import '../styles/app.css'

const PostItem = ({post, number}) => {
  
  return (
  <div className="post">
      <div className="post__content">
        <strong>{ number }. { post.title }</strong>
        <div>{ post.content }</div>
    </div>
    <div className="post__btn">
      <button>delete</button>
    </div>
    </div>
  );
};

export default PostItem;