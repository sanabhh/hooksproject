import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
const CardMovies=({el,movies,setMovies})=>{
    const handleDelete=(a)=> setMovies(movies.filter(el=> el.id !== a))
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Link to={`/descMovie/${el.id}`}><Card.Title>{el.title}</Card.Title></Link>
        <Card.Text>
          {el.description}
          <br/>
          <Rating name="read-only" value={el.rating} readOnly />
  
        </Card.Text>
        <Button variant="primary" onClick={()=> handleDelete(el.id)}>Delete</Button>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    
    )
}

export default CardMovies