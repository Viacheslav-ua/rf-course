import { usePagination } from '../../../hooks/usePagination'
import classes from './Pagination.module.css'

const Pagination = ({ totalPage, page, changePage }) => {
  const pagesArray = usePagination(totalPage)

  return (
    <div className={classes.page__wrapper }>
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)}
            className={p === page
              ? classes.page + ' ' + classes.page__current 
              : classes.page}
            key={p}
          >{p}</span>
        )}
      </div>
  )
}

export default Pagination;