import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = ({setPage}) => {
  const handlePagination = (e) => {
    setPage(e.target.textContent);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <Stack spacing={2}>
        <Pagination count={10} color='primary' onChange={handlePagination} />
      </Stack>
    </div>
  );
};

export default Paginations;
