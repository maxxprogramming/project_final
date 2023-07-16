import logo from './logo.svg';
import './App.css';
import { MovieContext } from './context/MoviesContext/MoviesContext';
import { useState } from 'react';
import Movies from './api/movies';
import DataMovies from './components/MovieCard/DataMovies';

function App() {
  const [dataMovies, setDataMovies] = useState();

  //Follow module

  const [followMovies, setFollowMovies] = useState([]);




 // PRUEBA


  return (
    <div className="App">
     
  <MovieContext.Provider value={{ dataMovies , setDataMovies , followMovies, setFollowMovies }} >
 <Movies />
 <DataMovies />
</MovieContext.Provider>
    </div>
  );
}

export default App;
