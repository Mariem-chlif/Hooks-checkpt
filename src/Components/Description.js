import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Description = (props) => {
    const [movie , setMovie] = useState(null)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    useEffect(() => {setMovie (props.movies.filter( el => el.id  === props.match.params.id)[0] )})
   
    return (
        <Container>

            <Jumbotron>  
        { movie &&  <p>   <h1  style={{  fontStyle: 'italic ', color: '#000000'}} >{movie.title} </h1>  {movie.description}</p> }
       

        <div> 
      {movie && ( <div >  
        <Button onClick={handleShow} > Trailer </Button>
        <div>
        {show ? ((
              <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            )): null}</div>  </div>)}
         

</div>
<Link to = '/'> Home</Link>
        </Jumbotron>

       

        
        </Container>
      )
    
}

export default Description
