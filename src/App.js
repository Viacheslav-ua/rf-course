import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UA/select/MySelect";
import MyInput from "./components/UA/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('worked sortedPosts');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(p => p.title.toUpperCase().includes(searchQuery.toUpperCase()))
  }, [sortedPosts, searchQuery])

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
    setSelectedSort(sort)
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <Counter />
      <ClassCounter />

      <div>
        <hr style={{ margin: '15px 8px' }} />

        <MyInput
          placeholder="find"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

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

      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts'} />
        : <div><h1 style={{ textAlign: 'center', color: 'tomato' }}>posts not found</h1></div>
      }

    </div>

  );
}

export default App;
