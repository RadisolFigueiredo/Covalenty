import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api';

const ProductDetails = () => {
  const location = useLocation();
  const { productId } = location.state;

  const [product, setProduct] = useState<any>([]);

  const getProductDetail = async () => {
    try {
      const response = await api.get(`products/${productId}
      `);
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [productId, product]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      height="80vh"
      pt={10}
    >
      <Box display="flex" flexDirection="row" width="70%">
        {!!product && (
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
              <img
                src={product.images[0]}
                alt={product.title}
                height="400px"
                width="500"
              />
              <Box display="flex" flexDirection="column">
                <Typography pl={3} pb={2} fontWeight={700} variant="h4">
                  {product.title}
                </Typography>
                <Typography pb={2} fontWeight={700} pl={3} variant="subtitle1">
                  {product.price}
                </Typography>
                <Typography variant="subtitle1" px={3}>
                  {product.description}
                </Typography>
              </Box>
            </Box>
            {product.images.length > 0 && (
              <Box display="flex" flexDirection="row">
                {product.images.map((item: string, index: number) => (
                  <Box
                    key={index}
                    mt={4}
                    mr={4}
                    display="flex"
                    flexDirection="row"
                  >
                    <img src={item} alt={product.title} height="200px" />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetails;