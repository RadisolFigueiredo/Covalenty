import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';

import { Product } from '../../types/product';

import CardBasic from '../../components/Cards/CardBasic';

const Categories = () => {
  const location = useLocation();
  const category = location.state.category;
  const totalProducts = location.state.totalProducts;

  const [offset, setOffset] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const categoryName = products[0]?.category?.name;

  const getProducts = async () => {
    try {
      const response =
        await api.get(`categories/${category.id}/products?offset=${offset}&limit=12
      `);

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [offset, category.id]);

  return (
    <>
      {!!products.length && (
        <Box height="120vh" pb={10}>
          <Typography
            display="flex"
            justifyContent="center"
            my={5}
            variant="h4"
          >
            CATEGORIA {`${categoryName.toUpperCase()}`}
          </Typography>
          <CardBasic
            products={products}
            totalProducts={totalProducts}
            setOffset={setOffset}
          />
        </Box>
      )}
    </>
  );
};
export default Categories;
