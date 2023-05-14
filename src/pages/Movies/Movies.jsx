import {useState, useEffect} from 'react';
import './movies.css';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import Paginations from '../../components/Pagination/Pagination';

const Movies = () => {
  // https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState();

  const handleFetchmovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    setMovies(data.results);
    console.log(data);
  };
  useEffect(() => {
    handleFetchmovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-movies'>
      {movies &&
        movies.map((m) => (
          <SingleContent
            key={m.id}
            id={m.id}
            poster_path={m.poster_path}
            title={m.title || c.name}
            release_date={m.first_air_date || m.release_date}
            media_type='movie'
            vote_average={m.vote_average}
          />
        ))}
      <Paginations />
    </div>
  );
};

export default Movies;
