import { useEffect, useState } from 'react';

import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';
import { Category } from '../../types/category';

import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';

import * as S from './styles';

const Home = () => {
  const [categories, setCategories] = useState<Category[] | any>();

  const getProducts = async () => {
    try {
      const response = await api.get('products');
      console.log('PRODUTOS', response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get('categories');
      setCategories(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  });

  return (
    <>
      <S.Container>
        <S.BoxAlign>
          <Typography variant="h4">Logo</Typography>
        </S.BoxAlign>

        <S.ContainerSearch>
          <S.BoxSearch>
            <S.BoxSearchIcon>
              <Search style={{ color: '#ffffff' }} />
            </S.BoxSearchIcon>
          </S.BoxSearch>
        </S.ContainerSearch>

        <S.BoxAlign>
          <ShoppingBagOutlined />
        </S.BoxAlign>
      </S.Container>

      <S.ContainerNavbar display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} width="70%" justifyContent={'space-between'}>
          <Navbar options={categories} />
        </Box>
      </S.ContainerNavbar>
      
      <S.ContainerCarousel>
        <S.BoxCarousel>
          <S.WidthCarousel>
            <Carousel categories={categories} />
          </S.WidthCarousel>
        </S.BoxCarousel>
      </S.ContainerCarousel>
    </>
  );
};

export default Home;
