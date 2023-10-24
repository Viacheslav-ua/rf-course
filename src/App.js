import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', content: 'Programming language' },
    { id: 2, title: 'Postgres', content: 'Data base' },
    { id: 3, title: 'Postgres3', content: 'Data base3' },
    { id: 4, title: 'Postgres4', content: 'Data base4' },
  ])

  return (
    <div className="App">
      <div>
        <Counter />
        <ClassCounter />
        <PostList posts={posts} title={'List of posts'} />

      </div>
    </div>

  );
}

export default App;
