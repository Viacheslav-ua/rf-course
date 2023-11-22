import { Link, useMatch } from 'react-router-dom'

const MyLink = ({children, to, ...props}) => {

  const match = useMatch(to)
  console.log(match);

  return (
    <Link
      to={to}
      style={{
        color: match ? 'red' : 'blue',
        textDecoration: 'none',
        cursor: 'default',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
export default MyLink