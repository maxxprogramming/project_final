import React, { useState, useEffect } from 'react';
import DataMovies_style from './DataMovies_style.css'


function DataMovies() {
  const [dataMovies, setDataMovies] = useState();
  const [paramYoutube, setParamYoutube] = useState ();

  const [youTubeUrl, setYouTubeUrl] = useState('https://www.youtube.com/results?search_query=');

 
   

  useEffect(() => {
    fetchMoviesData();
  }, []);

  async function fetchMoviesData() {
    try {
      const response = await fetch(
        'https://64af02ecc85640541d4e06ee.mockapi.io/movies'
      );
      const jsonData = await response.json();
      setDataMovies(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    
  }, [dataMovies]);



  function getParamYoutube(event) {
    let dataFilter = dataMovies.filter((param) => param.id == event.target.id);
    setParamYoutube(dataFilter.map((data) => data.title));
  }
  
  useEffect(() => {
    const newYouTubeUrl = `https://www.youtube.com/results?search_query=${paramYoutube}`;
    setYouTubeUrl(newYouTubeUrl);
    window.open(newYouTubeUrl, '_blank');
  }, [paramYoutube]);
  
 

  return (
    <div className='container_list'>
    
      {dataMovies ? (
        dataMovies.map((movie) => (
          <div  key={movie.id} className='container_list_box-background'>
          <div><img src={movie.poster_path} alt={movie.title} /></div>
          <div className='container_list-rate'> <img  src='https://i.postimg.cc/qRCzZQyV/star.png' alt='star' /> {movie.vote_average}</div>
            <div>{movie.title} </div>
           
            <div id='container_list_follow'>+Seguir+ EXTRA</div>
            <div className='container_list-youtube'><img onClick={getParamYoutube} src='https://i.postimg.cc/B6hMMSTw/youtube.png' id={movie.id} alt="img-youtub"/></div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
    
  );
      }


export default DataMovies;
