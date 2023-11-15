import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  const createPost = (newPost) => {
    setPosts([
      ...posts,
      newPost,
    ])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <Counter />
      <ClassCounter />

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={'List of posts'} />
        : <div><h1 style={{ textAlign: 'center', color: 'tomato' }}>posts not found</h1></div>
      }

    </div>

  );
}

export default App;
