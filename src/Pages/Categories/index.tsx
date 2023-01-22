import { useState, useEffect } from 'react';

import { Box, Typography, Pagination } from '@mui/material';

import { api } from '../../services/api';
import { useLocation } from 'react-router-dom';
import React from 'react';

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
  }, [offset]);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    console.log(e, p);

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
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '70%',
        }}
      >
        {products?.map((item: any) => (
          <Box
            key={item.id}
            sx={{
              width: '250px',
              height: '300px',
              marginBottom: '20px',
            }}
          >
            <img src={item.images[1]} alt={item.title} width="100%" />
            <Box padding={1}>
              <Typography>{item.title}</Typography>
              <Typography>{item.price}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {totalProducts > 12 && (
        <Box sx={{ marginY: 5 }}>
          <Pagination
            count={Math.ceil(totalProducts / 12)}
            color="primary"
            onChange={handleChange}
            shape="rounded"
            // page={Number(page)}
          />
        </Box>
      )}
    </Box>
  );
};
export default Categories;
