import React, { useEffect, useState, useMemo, useRef } from "react";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UA/MyModal/MyModal";
import PostForm from "../components/PostForm";
import MyButton from "../components/UA/button/MyButton";
import { usePost } from "../hooks/usePosts";
import RdButton from "../components/UA/button/RdButton";
import PostService from "../API/postService";
import Loader from "../components/UA/loader/loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UA/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";


function Posts() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

  const lastElement = useRef()
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    const totalCount = response.headers['x-total-count']
    setPosts([...posts, ...response.data])
    setTotalPage(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPage, isPostsLoading, () => setPage(page + 1))

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

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'} />
      <div ref={lastElement} style={{height: 20, backgroundColor: 'red'}}></div>
    
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      }

      <Pagination totalPage={totalPage} page={page} changePage={changePage} />


    </div>

  );
}

export default Posts;