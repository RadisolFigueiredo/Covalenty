import { useContext } from 'react';

import { Box, Typography } from '@mui/material';

import ProductContext from '../../context/products';

import CardBasic from '../../components/Cards/CardBasic';

export const FavoritesProducts = () => {
  const { favoritesProducts } = useContext(ProductContext);

  return (
    <Box minHeight="51vh">
      {!!favoritesProducts.length ? (
        <>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            mt={5}
            color="#213058"
          >
            Seus Favoritos
          </Typography>
          <CardBasic products={favoritesProducts} />
        </>
      ) : (
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mt={5}
          color="#213058"
        >
          Você ainda não favoritou nenhum produto =/
        </Typography>
      )}
    </Box>
  );
};
