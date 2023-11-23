import { Link, useMatch } from 'react-router-dom'

const MyLink = ({children, to, ...props}) => {

  const match = useMatch(to)
  console.log(match);

  return (
    <Link
      to={to}
      style={{
        color: match ? 'red' : 'white',
        textDecoration: 'none',
        cursor: 'default',
        marginRight: '20px',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
export default MyLink