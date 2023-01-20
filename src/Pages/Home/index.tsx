import { useEffect, useState } from 'react';

import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';
import { Category } from '../../types/category';

import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';

import * as S from './styles';
import Footer from '../../components/Footer';
import CardCircle from '../../components/Cards/CardCircle';

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
      <Box
        sx={{
          height: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0e6d7',
        }}
      >
        <Typography variant="body1">Frete Grátis para todo Brasil</Typography>
      </Box>
      <S.Container>
        <S.BoxAlign>
          <Typography color="#ffffff" variant="h4">
            Logo
          </Typography>
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

      <S.ContainerNavbar display="flex" justifyContent="center" alignItems={'center'}>
        <Box width="70%">
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
            {categories?.map((item: any) => {
              return <CardCircle item={item} />;
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
