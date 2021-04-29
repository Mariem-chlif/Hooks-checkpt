import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Card from 'react-bootstrap/Card';

const MovieCard = ({movie}) => {
    return (
        <div>

<Card style={{ width: '18rem' }}>
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
   
  </Card.Body>
</Card>

            
        </div>
    )
}

export default MovieCard
