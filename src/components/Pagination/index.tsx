import { Pagination } from '@mui/material';
import { PaginationProps } from '../../types/pagination';

const PaginationComponent = ({ count, onChange }: PaginationProps) => {
  return (
    <Pagination
      count={count}
      onChange={onChange}
      shape="rounded"
      color="primary"
    />
  );
};

export default PaginationComponent;
