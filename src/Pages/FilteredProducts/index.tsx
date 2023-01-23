import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CardBasic from '../../components/Cards/CardBasic';

const FilteredProducts = () => {
  const location = useLocation();
  const { products } = location.state;
  const [offset, setOffset] = useState<number>(0);

  const textReturn = products.length > 1 ? 'items' : 'item';

  return (
    <Box minHeight={'51vh'}>
      {!!products.length ? (
        <>
          <Box>
            <Typography variant="h4" pt={5} textAlign="center">
              Sua busca retornou {products.length} {textReturn}
            </Typography>
            <CardBasic
              products={products}
              totalProducts={products.length}
              setOffset={setOffset}
            />
          </Box>
        </>
      ) : (
        <Box>
          <Typography variant="h4" pt={10} textAlign="center">
            Não encontramos nenhum resultado para sua busca
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default FilteredProducts;
