import {useState, useEffect} from 'react';
import './tvseries.css';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import Singlecontent from '../../components/SingleContent/SingleContent';
import './Tvseries.css';

const Tvseries = () => {
  const [page, setPage] = useState(1);
  const [series, setseries] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const getSeries = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    console.log(data);
    setseries(data.results);
    setPage(data.total_pages);
  };

  useEffect(() => {
    getSeries();
  }, [page]);

  return (
    <div className='series-container'>
      {series &&
        series.map((s) => (
          <Singlecontent
            key={s.id}
            id={s.id}
            poster_path={s.poster_path}
            title={s.title || s.name}
            release_date={s.first_air_date || s.release_date}
            media_type='Tv Series'
            vote_average={s.vote_average}
          />
        ))}
      <Pagination setPage={setPage} />
    </div>
  );
};

export default Tvseries;
