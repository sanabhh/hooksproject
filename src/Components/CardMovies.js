import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating'
const CardMovies=({el,movies,setMovies})=>{
    const handleDelete=(a)=> setMovies(movies.filter(el=> el.id !== a))
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
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