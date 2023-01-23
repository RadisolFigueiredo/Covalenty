import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Pagination, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ProductContext from '../../../context/products';

import { formatPrice } from '../../../utils/formatCurrent';

import { Product } from '../../../types/product';
import { CardProps } from '../../../types/cardBasic';

const CardBasic = ({ products, totalProducts, setOffset }: CardProps) => {
  const navigate = useNavigate();
  const { favoritesProducts, removeFavorite, addFavorite } =
    useContext(ProductContext);

  const [page, setPage] = useState(0);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    if (totalProducts && setOffset !== undefined) {
      if (p > page) {
        setOffset((p - 2) * 12 + 12);
        setPage(page + 1);
      } else {
        if (p < page) {
          setOffset((p - 1) * 12);
          setPage(page - 1);
        }
      }
    }
  };

  const handleDetail = (id: number) => {
    return navigate(`/product-detail/${id}`, { state: { productId: id } });
  };

  return (
    <Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        mt="50px"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
          width="70%"
        >
          {products.map((item: Product) => (
            <Box key={item.id} mx={2} mb={5} width="250px" height="300px">
              <Box
                onClick={(e) => e.preventDefault()}
                position="absolute"
                textAlign="end"
                width="250px"
              >
                {favoritesProducts?.some(
                  (favorite: Product) => favorite.id === item.id
                ) ? (
                  <FavoriteIcon
                    onClick={() => removeFavorite(item.id)}
                    color="error"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => addFavorite(item)}
                    color="error"
                  />
                )}
              </Box>
              <Box
                onClick={() => handleDetail(item.id)}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width="100%"
                  height="190px"
                />
                <Box
                  display="flex"
                  flexDirection="row"
                  padding={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="body1" fontSize={18} color="#213058">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" fontSize={18} color="#213058">
                      {formatPrice(item.price)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {totalProducts && totalProducts > 12 && (
        <Box my={5} width="100%" display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(totalProducts / 12)}
            onChange={(e, value) => handleChange(e, value)}
          />
        </Box>
      )}
    </Box>
  );
};

export default CardBasic;
