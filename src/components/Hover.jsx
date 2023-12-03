import { useRef } from "react";
import MyButton from "./UA/button/MyButton";
import useHover from "../hooks/useHover";

const Hover = () => {

  const ref = useRef()

  const isHovering = useHover(ref)
  // console.log(isHovering);

  return (
    <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'yellowgreen' :  'yellow' }}>
      <MyButton  onClick={() => console.log(ref.current)}>LOG</MyButton>
    </div>
  )
}

export default Hover;