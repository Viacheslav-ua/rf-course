import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, cb) {
  const observer = useRef()

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if(target.isIntersecting) {
        console.log('Intersecting')
        cb()
      }
    }, options)

    observer.current.observe(childRef.current)

    return function() {
      observer.current.unobserve(childRef.current)
    }

  }, [cb])
}