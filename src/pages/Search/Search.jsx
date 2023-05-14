import {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import axios from 'axios';

import SingleContent from '../../components/SingleContent/SingleContent';
import Paginations from '../../components/Pagination/Pagination';
const Search = () => {
  const [value, setValue] = useState('one');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchSearch = async (e) => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/${value ? 'tv' : 'movie'}?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();

    // eslint-disable-next-line
  }, [value, page]);

  return (
    <div>
      <Box sx={{width: '100%'}}>
        <div style={{display: 'flex', margin: '10px 5px'}}>
          <TextField
            style={{flex: 1}}
            className='searchBox'
            label='Search'
            variant='filled'
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={(e) => fetchSearch(e)}
            variant='contained'
            style={{marginLeft: 10}}
          >
            <SearchIcon fontSize='large' />
          </Button>
        </div>
        <Tabs
          value={value}
          // variant='fullWidth'
          onChange={handleChange}
          textColor='primary'
          indicatorColor='secondary'
          aria-label='secondary tabs example'
          centered
        >
          <Tab value={'one'} label='Tv Series' style={{width: '50%'}} />
          <Tab value={'two'} label='Movies' style={{width: '50%'}} />
        </Tabs>
      </Box>
      <div className='trending-container'>
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster_path={c.poster_path}
              title={c.title || c.name}
              release_date={c.first_air_date || c.release_date}
              media_type={value == 'one' ? 'Tv' : 'Movie'}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (value ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        {numOfPages > 1 && <Paginations setPage={setPage} />}
      </div>
    </div>
  );
};

export default Search;
