import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UA/select/MySelect";
import MyInput from "./components/UA/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

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
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
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
