import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CardBasic from '../../components/Cards/CardBasic';

const FilteredProducts = () => {
  const location = useLocation();
  const productsData = location.state.products;
  console.log('***********', productsData);
  const [offset, setOffset] = useState<number>(0);

  const textReturn = productsData.length > 1 ? 'items' : 'item';

  return (
    <Box>
      <Typography>
        Sua busca retornou {productsData.length} {textReturn}
      </Typography>
      <CardBasic
        products={productsData}
        totalProducts={productsData.length}
        setOffset={setOffset}
      />
    </Box>
  );
};
export default FilteredProducts;
