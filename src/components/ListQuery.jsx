import { useCallback, useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

const ListQuery = () => {


function fetchTodos(page, limit) {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })
}

  return (
    <div ref={parentRef} style={{height: '70vh', overflow: 'auto'}}>
      {todos.map(todo => 
        <div key={todo.id} style={{padding: 30, border: '2px solid green'}}>{todo.id}. {todo.title}</div>
      )}
    </div>
  )
}

export default ListQuery;