import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";


const MovieCard = ({movie}) => {
    return (
        <div>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={movie.img}  className="img-movie"  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
   
    <div className = "star" >   
    <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rate}
         
        />
        </div>
        <Link to={`/description/${movie.id}`}>  <Button> Description </Button>  </Link>
       
  </Card.Body>
</Card>

            
        </div>
    )
}

export default MovieCard
