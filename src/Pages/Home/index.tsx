import { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';
import { Category } from '../../types/category';

import Carousel from '../../components/Carousel';

import * as S from './styles';
import Footer from '../../components/Footer';
import CardCircle from '../../components/Cards/CardCircle';
import Header from '../../components/Header';

const Home = () => {
  const [categories, setCategories] = useState<Category[] | any>();

  // const getProducts = async () => {
  //   try {
  //     const response = await api.get('products');
  //     // console.log('PRODUTOS', response.data);
  //   } catch (error) {
  //     console.log('ERROR:', error);
  //   }
  // };

  const getCategories = async () => {
    
    try {
      const response = await api.get(`categories?limit=5`);
      setCategories(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    // getProducts();
    getCategories();
  }, []);

  return (
    <>
      <Header categories={categories} />

      <S.ContainerCarousel>
        <S.BoxCarousel>
          <S.WidthCarousel>
            <Carousel categories={categories} />
          </S.WidthCarousel>
        </S.BoxCarousel>
      </S.ContainerCarousel>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '70%',
            flexDirection: 'column',
          }}
        >
          <Typography
            display="flex"
            justifyContent="center"
            my={5}
            variant="h4"
          >
            Categorias
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {categories?.map((item: any) => (
              <CardCircle key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
