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

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
    }

    setPosts([...posts, newPost])
    // console.log(newPost);
    // console.log(bodyInputRef.current.value);

    setTitle('')
    setContent('')
  }

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {/* <MyInput
          type="text"
          placeholder="Post content"
          ref={bodyInputRef}
        /> */}

        <MyInput
          type="text"
          placeholder="Post content"
          value={content}
          onChange={e => setContent(e.target.value)}
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
