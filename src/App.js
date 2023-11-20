import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UA/MyModal/MyModal";
import PostForm from "./components/PostForm";
import MyButton from "./components/UA/button/MyButton";
import { usePost } from "./hooks/usePosts";
import RdButton from "./components/UA/button/RdButton";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

  useEffect(() => {
    console.log('UseEffect work');
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([
      ...posts,
      newPost,
    ])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts([...response.data])
  }


  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>

      <RdButton onClick={fetchPosts}>Get Posts</RdButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <Counter />
      <ClassCounter />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'} />
    </div>

  );
}

export default App;
