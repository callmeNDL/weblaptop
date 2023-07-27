import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ count, page, setPage }) {
  console.log(count, "count");
  return (
    <Stack spacing={2} style={{ paddingBottom: 40 }}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        style={{ display: 'flex', justifyContent: 'center' }}
        onChange={(e, value) => {
          setPage(value)
        }}
      />
    </Stack>
  );
}
