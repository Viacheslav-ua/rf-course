import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UA/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([
      ...posts,
      newPost,
    ])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <Counter />
      <ClassCounter />

      <div>
        <hr style={{ margin: '15px 8px' }} />
        <MySelect
          defaultValue="Order by"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: 'title', name: 'By name' },
            { value: 'content', name: 'By description' },
          ]}
        />
      </div>

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={'List of posts'} />
        : <div><h1 style={{ textAlign: 'center', color: 'tomato' }}>posts not found</h1></div>
      }

    </div>

  );
}

export default App;
