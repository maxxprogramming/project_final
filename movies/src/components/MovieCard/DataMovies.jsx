import React, { useState, useEffect, useContext } from 'react';
import DataMovies_style from './DataMovies_style.css'
import { MovieContext } from '../../context/MoviesContext/MoviesContext';
import MovieFollow from '../MoviesFollow/MovieFollow';


function DataMovies() {
   const { dataMovies, setDataMovies , followMovies, setFollowMovies} = useContext(MovieContext);
  const [paramYoutube, setParamYoutube] = useState ();
  const [youTubeUrl, setYouTubeUrl] = useState('https://www.youtube.com/results?search_query=');

 


  function getParamYoutube(event) {
    let dataFilter = dataMovies.filter((param) => param.id == event.target.id);
    setParamYoutube(dataFilter.map((data) => data.title));
  }

  //Movie follow module


  function addFollow(event) {
    let dataFilter = dataMovies.filter((param) => param.id == event.target.id);
  
  
    const isAlreadyAdded = followMovies.some((movie) => movie.id === dataFilter[0].id);
  
    if (isAlreadyAdded) {
      console.log("Already exists");
    } else {
      const newFollowMovies = followMovies.concat(dataFilter);
      setFollowMovies(newFollowMovies);
     
    }
  }
  

  



  
  useEffect(() => {
    const newYouTubeUrl = `https://www.youtube.com/results?search_query=${paramYoutube}`;
    setYouTubeUrl(newYouTubeUrl);
    if (newYouTubeUrl === 'https://www.youtube.com/results?search_query=undefined' )
    { console.log("error getting link for youtube :)")} 
    else {
      window.open(newYouTubeUrl, '_blank')
    }
    ;
  }, [paramYoutube]);
  
 

  return (
  <>  <MovieFollow />
    
    <div className='container_list'>
   
      {dataMovies ? (
        dataMovies.map((movie) => (
          <div  key={movie.id} className='container_list_box-background'>
          <div><img src={movie.poster_path} alt={movie.title} /></div>
          <div className='container_list-rate'> <img  src='https://i.postimg.cc/qRCzZQyV/star.png' alt='star' /> {movie.vote_average}</div>
            <div>{movie.title} </div>
           
            <div className='container_list_follow'><div id={movie.id} onClick={addFollow}>Follow +</div></div>
            <div className='container_list-youtube'><img onClick={getParamYoutube} src='https://i.postimg.cc/B6hMMSTw/youtube.png' id={movie.id} alt="img-youtub"/></div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
    </>
  );
      }


export default DataMovies;
