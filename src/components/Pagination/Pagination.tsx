import { styled } from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;
export default function PaginationRounded() {
  return (
    <CustomPagination>
      <Stack spacing={2}>
        <Pagination
          count={10}
          color='primary'
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </CustomPagination>
  );
}

export { PaginationRounded };
