import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { api } from '../../services/api';

import ProductContext from '../../context/products';

import Navbar from '../Navbar';

import * as S from './styles';

const Header = () => {
  const navigate = useNavigate();
  const { favoritesProducts } = useContext(ProductContext);
  const [search, setSearch] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const { data } = await api.get(`products/?title=${search}`);
      resetItems();
      navigate('/filtered-product', {
        state: { products: data },
      });
    } catch (err) {
      console.log('ERROR:', err);
    }
  }

  const resetItems = () => {
    setSearch('');
  };

  return (
    <Box height="19vh">
      <Box
        height="30px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: '#f0e6d7',
        }}
      >
        <Typography color="#213058" variant="body1" fontWeight={700}>
          Frete Grátis para todo Brasil
        </Typography>
      </Box>
      <S.Container>
        <S.BoxAlign to={'/'} onClick={() => resetItems()}>
          <Typography color="#ffffff" variant="h5">
            Platzi Shop
          </Typography>
        </S.BoxAlign>

        <S.ContainerSearch>
          <S.BoxSearch onSubmit={handleSubmit}>
            <S.Input
              type="text"
              name="search"
              value={search}
              id="search"
              placeholder="Buscar"
              onChange={(e) => setSearch(e.target.value)}
            />
            <S.BoxSearchIcon>
              <Search style={{ color: '#ffffff' }} />
            </S.BoxSearchIcon>
          </S.BoxSearch>
        </S.ContainerSearch>

        <S.BoxIconFavorites
          to={'/favorites'}
          $hasFavorite={!!favoritesProducts.length}
        >
          <FavoriteIcon fontSize="large" />
          <S.ChipFavoriteLength $hasFavorite={!!favoritesProducts.length}>
            <S.ProductInCartLength>
              {favoritesProducts.length}
            </S.ProductInCartLength>
          </S.ChipFavoriteLength>
        </S.BoxIconFavorites>
      </S.Container>

      <S.ContainerNavbar
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="70%">
          <Navbar />
        </Box>
      </S.ContainerNavbar>
    </Box>
  );
};

export default Header;
