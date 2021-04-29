import React , {useState} from 'react';
import { Button } from 'react-bootstrap';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';



const MovieList = ({movies , addMovie}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
<div>
    <Button onClick={handleShow}> Add Movie</Button>
</div>
<AddMovie  show ={show} handleClose ={handleClose} addMovie={addMovie}/>


  <div   className="movies"  >
           {movies.map ((movie) => (  
           <MovieCard  movie = {movie}/>
           ))}

        </div>



      </div>
    );
}
export default MovieList 