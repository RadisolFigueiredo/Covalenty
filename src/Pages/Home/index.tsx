import { useContext, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';

import CategoryContext from '../../context/categories';

import Carousel from '../../components/Carousel';
import CardCircle from '../../components/Cards/CardCircle';
import CardBasic from '../../components/Cards/CardBasic';

import * as S from './styles';

const Home = () => {
  const { setMainCategories, mainCategories } = useContext(CategoryContext);

  const [offset, setOffset] = useState<number>(0);
  const [products, setProducts] = useState<any>([]);
  const [totalProducts, setTotalProducts] = useState<any>([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get('products');
      setTotalProducts(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await api.get(`products?offset=${offset}&limit=12`);
      setProducts(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get(`categories?limit=5`);
      setMainCategories(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getCategories();
    getAllProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [offset]);

  return (
    <Box height="250vh">
      <S.ContainerCarousel>
        <S.BoxCarousel>
          <S.WidthCarousel>
            <Carousel />
          </S.WidthCarousel>
        </S.BoxCarousel>
      </S.ContainerCarousel>
      <Box display="flex" justifyContent="center" height="50vh">
        <Box width="70%" flexDirection="column">
          <Typography
            display="flex"
            justifyContent="center"
            my={5}
            variant="h4"
          >
            Categorias
          </Typography>

          <Box
            width="100%"
            display="flex"
            justifyContent="space-around"
            flexDirection="row"
            flexWrap="wrap"
          >
            {mainCategories?.map((item: any) => (
              <CardCircle key={item.id} item={item} />
            ))}
          </Box>
          <Box height="100vh" py={10}>
            <Typography
              display="flex"
              justifyContent="center"
              my={5}
              variant="h4"
            >
              NOSSOS PRODUTOS
            </Typography>
            <CardBasic
              products={products}
              totalProducts={totalProducts.length}
              setOffset={setOffset}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
