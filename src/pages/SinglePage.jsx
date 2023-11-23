import { useParams } from 'react-router-dom';

const SinglePage = () => {

  const { id, title} = useParams();

  return (
    <div style={{fontSize: '24px'}}>
      <div>id = {id}</div>
      <div>title = {title}</div>
    </div>
  )
}

export default SinglePage