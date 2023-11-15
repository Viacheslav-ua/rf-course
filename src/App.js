import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import MyButton from "./components/UA/button/MyButton";
import MyInput from "./components/UA/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
  ])

  const bodyInputRef = useRef()

  // const [title, setTitle] = useState('')
  // const [content, setContent] = useState('')
  const [post, setPost] = useState({ title: '', content: '' })


  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([
      ...posts,
      { id: Date.now(), ...post, },
    ])
    // console.log(newPost);
    // console.log(bodyInputRef.current.value);

    setPost({ title: '', content: '' })
  }

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Post title"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />

        {/* <MyInput
          type="text"
          placeholder="Post content"
          ref={bodyInputRef}
        /> */}

        <MyInput
          type="text"
          placeholder="Post content"
          value={post.content}
          onChange={e => setPost({ ...post, content: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <Counter />
      <ClassCounter />
      <PostList posts={posts} title={'List of posts'} />
    </div>

  );
}

export default App;
