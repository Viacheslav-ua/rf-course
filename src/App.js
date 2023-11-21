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
import PostService from "./API/postService";
import Loader from "./components/UA/loader/loader.";


function App() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [isPostsLoading, setIsPostsLoading] = useState(false)

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
    setIsPostsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)
  }


  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>

      <RdButton>Get Posts</RdButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <Counter />
      <ClassCounter />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'} />
      }

    </div>

  );
}

export default App;
