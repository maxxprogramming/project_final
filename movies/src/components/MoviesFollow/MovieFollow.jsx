import { useContext, useState } from 'react'
import { MovieContext } from '../../context/MoviesContext/MoviesContext'
import MovieFollow_style from './MovieFollow_style.css'


function MovieFollow() {
    const {followMovies} = useContext(MovieContext) ;


const followMoviesLength = followMovies.length;
const backgroundImg = followMovies.map((img)=> img.poster_path).pop();

const [isModalOpen, setIsModalOpen] = useState(false);

const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container_movieFollow'>
      MovieFollow

      <div
        className='base'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='indicator'>
          {isModalOpen && (
            <div className="modal indicator">
              <ul>
                {followMovies.map((movie, index) => (
                  <li key={index}>
                    {movie.title} ({movie.genre})
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className='noti_count' role='status'>
            {followMoviesLength}
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
=======
    )}
    </div>
</div>

</div>
   
  )
>>>>>>> followModule
}

export default MovieFollow