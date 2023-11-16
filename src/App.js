import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UA/MyModal/MyModal";
import PostForm from "./components/PostForm";
import MyButton from "./components/UA/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('worked sortedPosts');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(p => p.title.toUpperCase().includes(filter.query.toUpperCase()))
  }, [sortedPosts, filter.query])

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


  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>

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
