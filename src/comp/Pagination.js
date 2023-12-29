import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({ totalPages, currentPage, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={10} style={{ justifyContent: 'center', marginTop: '20px' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationRounded;
