import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {
  
    if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center', color: 'tomato' }}>Posts not found</h1>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {
          posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              />
            </CSSTransition>
          )
        }
      </TransitionGroup>

    </div>
  );
}

export default PostList;