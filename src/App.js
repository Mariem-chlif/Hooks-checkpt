import {useState} from 'react' ;
import './App.css';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterMovie from './Components/FilterMovie' ;


function App() {
  const [movies, setMovies] = useState([
    { 
      title :"Minions",
      rate :3,
      description :
      " The banana-yellow, linguistically garbled henchmen of Despicable Me star in this prequel, recounting the story of their villain-worshipping history.",
      img : "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Despicable_Me_Poster.jpg/220px-Despicable_Me_Poster.jpg"

    } , 
    { 
      title :"The Angry Birds Movie ",
      rate :5,
      description :
      " Sentenced to anger management class, grumpy Red becomes a hero who trains his fellow birds to unleash their inner fury when pigs invade their island.",
      img : "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Angry_Birds_Movie_poster.png"


    } , 
    { 
      title :"The SpongeBob SquarePants",
      rate :4,
      description :
      " When Mr. Krabs is accused of stealing King Neptune's crown, SpongeBob and Patrick set out on a wild adventure to prove his innocence",
      img : "https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg"


    } ,
    { 
      title :"Alvin and the Chipmunks",
      rate :4,
      description :
      " Furry trio Alvin, Simon and Theodore are on a cross-country trip to stop their guardian Dave from proposing to his girlfriend in this comic sequel",
      img : "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/AlvinChipmunksTheRoadChip_poster.jpg/220px-AlvinChipmunksTheRoadChip_poster.jpg"


    } ,
    { 
      title :"Next gan",
      rate :3,
      description :
      " When lonely Mai forms an unlikely bond with a top-secret robot, they embark on an intense, action-packed adventure to foil the plot of a vicious villain.",
      img : "https://images-na.ssl-images-amazon.com/images/I/71Tm96y93FL._AC_SL1482_.jpg"


    } ,
    { 
      title :"Sahara",
      rate :2,
      description :
      " When his new love is captured by an evil snake charmer, a young cobra and his scorpion best friend set out across the desert on a wild rescue mission.",
      img : "https://cdn.moviescore.com/posters/22952.jpg"


    } ,
    { 
      title :"The Boss Baby",
      rate :5,
      description :
      " The Boss Baby brings his big brother Tim to the office to teach him the art of business in this animated series sprung from the hit film.",
      img : "https://m.media-amazon.com/images/M/MV5BMDVlOWFlYWQtZDdjYS00MWI2LTk2MzUtYjg1N2QyOGIwZDIzXkEyXkFqcGdeQXVyNzQwMTExNDA@._V1_.jpg"


    } 

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
     
       <FilterMovie keyWord={keyWord}  setkeyRate={setkeyRate} keyRate={keyRate} search={search}/>
     <MovieList  movies = { movies.filter(
       (movie) =>
       movie.rate >= keyRate &&
       movie.title
       .toLocaleLowerCase()
       .includes(keyWord.toLocaleLowerCase().trim())
     )} addMovie={addMovie}/>
    
    </div>
  );
}

export default App;
