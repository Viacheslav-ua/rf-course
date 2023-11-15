import { useState } from "react";
import MyInput from "./UA/input/MyInput";
import MyButton from "./UA/button/MyButton";

function PostForm({create}) {

  const [post, setPost] = useState({ title: '', content: '' })

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)

    setPost({ title: '', content: '' })
  }

  return (
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
  );
}

export default PostForm;