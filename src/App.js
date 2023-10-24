import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {


  return (
    <div className="App">
      <div>
        <Counter />
        <ClassCounter />
        <PostItem />
      </div>
    </div>

  );
}

export default App;
