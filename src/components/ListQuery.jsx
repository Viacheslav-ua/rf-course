import { useCallback, useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";
import useRequest from "../hooks/useRequest";
import axios from "axios";

const ListQuery = () => {

  const [todos, error, loading] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
  }

  if(loading) return <h1>LOADING GO</h1>
  if(error) return <h1>REQUEST ERROR</h1>


  return (
    <div style={{height: '70vh', overflow: 'auto'}}>
      {todos && todos.map(todo => 
        <div key={todo.id} style={{padding: 30, border: '2px solid green'}}>{todo.id}. {todo.title}</div>
      )}
    </div>
  )
}

export default ListQuery;