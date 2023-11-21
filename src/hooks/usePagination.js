import { useMemo } from "react"

export const usePagination = (totalPage) => {
  return useMemo(() => {
    let result = []
    for (let i = 0; i < totalPage; i++) {
      result.push(i + 1)
    }
    return result
  }, [totalPage])
}