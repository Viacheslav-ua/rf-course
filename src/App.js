import React, { useEffect, useState, useMemo } from "react";
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
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import { usePagination } from "./hooks/usePagination";


function App() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const pagesArray = usePagination(totalPage)

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    const totalCount = response.headers['x-total-count']
    setPosts(response.data)
    setTotalPage(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

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

  const changePage = (page) => {
    setPage(page)
    // fetchPosts()
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

      {postError &&
        <h1 style={{ color: 'red' }}>Error happen: {postError}</h1>
      }

      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'} />
      }

      <div className="page__wrapper">
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)}
            className={p === page ? 'page page__current' : 'page'}
            key={p}
          >{p}</span>
        )}
      </div>


    </div>

  );
}

export default App;
