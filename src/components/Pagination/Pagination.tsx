import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const CustomPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;

export default function PaginationControlled() {
  const [page, setPage] = useState(2);
  const handleChange = (event: ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };

  return (
    <CustomPagination>
      <Stack spacing={2}>
        <Pagination
          size='large'
          count={4}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </CustomPagination>
  );
}


export { Pagination };