import { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';
import { useLocation } from 'react-router-dom';
import React from 'react';
import Pagination from '../../components/Pagination';

const Categories = () => {
  const location = useLocation();

  const category = location.state.category;
  const totalProducts = location.state.totalProducts;

  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<any>([]);

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
  }, [offset,category.id]);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    if (p > page) {
      setOffset((p - 2) * 12 + 12);
      setPage(page + 1);
    } else {
      if (p < page) {
        setOffset((p - 1) * 12);
        setPage(page - 1);
      }
    }
  };

  return (
    <>
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
          {products?.map((item: any) => (
            <Box key={item.id} mx={2} mb={5} width="250px" height="300px">
              <img src={item.images[0]} alt={item.title} width="100%" height='190px'/>
              <Box padding={1}>
                <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {totalProducts > 12 && (
        <Box my={5} width="100%" display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(totalProducts / 12)}
            onChange={(e, value) => handleChange(e, value)}
          />
        </Box>
      )}
    </>
  );
};
export default Categories;
