import './singlecontent.css';
// import Badge from 'react-bootstrap/Badge';
import Badge from '@mui/material/Badge';

// https://image.tmdb.org/t/p/w300

const SingleContent = ({
  id,
  media_type,
  title,
  vote_average,
  release_date,
  poster_path,
}) => {
  return (
    <div>
      <div className='card-container'>
        {/* <Badge bg={vote_average > 6 ? 'danger' : 'success'} text='danger'>
          {vote_average}
        </Badge> */}
        <Badge
          className='badge'
          badgeContent={Math.round(vote_average)}
          color={Math.round(vote_average) > 6 ? 'primary' : 'secondary'}
        ></Badge>
        <div className='card-img'>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            className='card-img'
          />
        </div>
        <div className='description'>
          <h3 className='card-title'>{title}</h3>
          <div className='sub-description'>
            <span>{media_type}</span>
            <span>{release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
