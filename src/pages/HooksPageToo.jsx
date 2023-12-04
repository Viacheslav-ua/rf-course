import { useState } from "react";
import MyInput from "../components/UA/input/MyInput";
import useDebounce from "../hooks/useDebounce";

const HooksPageToo= () => {
  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(search, 500)


  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  function onChange(e) {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <>
      <div style={{ paddingLeft: 20 }}>
        <MyInput 
        value={value} 
        onChange={onChange}
        style={{ width: 300, marginRight: 50 }}/>
      </div>

    </>
  )
}
export default HooksPageToo;