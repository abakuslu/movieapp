import axios from 'axios';
import './Trending.css';
import {useState, useEffect} from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import Paginations from '../../components/Pagination/Pagination';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&page=${page}`
    );
    // console.log(data);
    setTrending(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  // console.log(trending);

  return (
    <div className='trending-container'>
      {trending &&
        trending.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            media_type={c.media_type}
            title={c.title || c.name}
            vote_average={c.vote_average}
            release_date={c.release_date || c.first_air_date}
            poster_path={c.poster_path}
          />
        ))}
      <Paginations setPage={setPage} />
    </div>
  );
};

export default Trending;
