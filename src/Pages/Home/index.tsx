import { useContext, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { api } from '../../services/api';

import Carousel from '../../components/Carousel';
import CardCircle from '../../components/Cards/CardCircle';

import * as S from './styles';
import CategoryContext from '../../context/categories';

const Home = () => {
  const { setMainCategories, mainCategories } = useContext(CategoryContext);
  // const [categories, setCategories] = useState<Category[] | any>();

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
      setMainCategories(response.data);
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
      <S.ContainerCarousel>
        <S.BoxCarousel>
          <S.WidthCarousel>
            <Carousel />
          </S.WidthCarousel>
        </S.BoxCarousel>
      </S.ContainerCarousel>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '50vh',
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
            {mainCategories?.map((item: any) => (
              <CardCircle key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
