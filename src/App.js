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



  return (
    <div className="App">
      <PostForm create={createPost} />
      <Counter />
      <ClassCounter />
      <PostList posts={posts} title={'List of posts'} />
    </div>

  );
}

export default App;
