import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2} style={{ paddingBottom: 40 }}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  );
}
