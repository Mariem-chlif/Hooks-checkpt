import {useState} from 'react' ;
import './App.css';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterMovie from './Components/FilterMovie' ;
import { BrowserRouter, Route, Link } from "react-router-dom";
import Description from './Components/Description';
import { v4 as uuidv4 } from 'uuid';
import {Navbar, Form, FormControl, Nav} from 'react-bootstrap'



function App() {
  const [movies, setMovies] = useState([
    { 
      id :uuidv4(),
      title :"Minions",
      rate :3,
      trailer : "https://www.youtube.com/embed/P9-FCC6I7u0",
      description :
      " The banana-yellow, linguistically garbled henchmen of Despicable Me star in this prequel, recounting the story of their villain-worshipping history.",
      img : "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Despicable_Me_Poster.jpg/220px-Despicable_Me_Poster.jpg"
      
    } , 
    { 
      id :uuidv4(),
      title :"The Angry Birds Movie ",
      rate :5,
      trailer : "https://www.youtube.com/embed/QRmKa7vvct4" ,
      description :
      " Sentenced to anger management class, grumpy Red becomes a hero who trains his fellow birds to unleash their inner fury when pigs invade their island.",
      img : "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Angry_Birds_Movie_poster.png"


    } , 
  
   
    { 
      id :uuidv4(),
      title :"Next gan",
      rate :3,
      trailer : "https://www.youtube.com/embed/uf3ALGKgpGU" ,
      description :
      " When lonely Mai forms an unlikely bond with a top-secret robot, they embark on an intense, action-packed adventure to foil the plot of a vicious villain.",
      img : "https://images-na.ssl-images-amazon.com/images/I/71Tm96y93FL._AC_SL1482_.jpg"


    } ,
    { 
      id :uuidv4(),
      title :"Sahara",
      rate :2,
      trailer : "https://www.youtube.com/embed/90EyWL5eTcA" ,
      description :
      " When his new love is captured by an evil snake charmer, a young cobra and his scorpion best friend set out across the desert on a wild rescue mission.",
      img : "https://cdn.moviescore.com/posters/22952.jpg"


    } ,
  

  ])

  const addMovie =(nMovie) =>{
    setMovies(movies.concat(nMovie))
  };

  const [ keyWord, setkeyWord] = useState("")
  const [ keyRate, setkeyRate] = useState(0)

  const search=(word)=>{
    setkeyWord(word);
  }
  return (
    <div >
    


     <BrowserRouter> 
     <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/">Home</Link>
    <Link to="/description">Description</Link>
     
    </Nav>
  </Navbar>

       <FilterMovie keyWord={keyWord}  setkeyRate={setkeyRate} keyRate={keyRate} search={search}/>
     <MovieList  movies = { movies.filter(
       (movie) =>
       movie.rate >= keyRate &&
       movie.title
       .toLocaleLowerCase()
       .includes(keyWord.toLocaleLowerCase().trim())
     )} addMovie={addMovie}/>

     <Route  path ="/description/:id"  render ={(props) => 
       <Description {...props}  movies ={movies} /> }  /> 
    </BrowserRouter>
    </div>
  );
}

export default App;
