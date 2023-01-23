import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Navbar from '../Navbar';


import * as S from './styles';

const Header = () => {
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
        <Typography color="#213058" variant="body1">
          Frete Grátis para todo Brasil
        </Typography>
      </Box>
      <S.Container>
        <S.BoxAlign to={'/'}>
        <Typography color="#ffffff" variant="h5">
          Platzi Shop
        </Typography>
        </S.BoxAlign>

        <S.ContainerSearch>
          <S.BoxSearch>
            <S.BoxSearchIcon>
              <Search style={{ color: '#ffffff' }} />
            </S.BoxSearchIcon>
          </S.BoxSearch>
        </S.ContainerSearch>

        <S.BoxAlign to={'/'}>
          <ShoppingBagOutlined style={{ color: '#ffffff' }}/>
        </S.BoxAlign>
      </S.Container>

      <S.ContainerNavbar
        display="flex"
        justifyContent="center"
        alignItems={'center'}
      >
        <Box width="70%">
          <Navbar />
        </Box>
      </S.ContainerNavbar>
    </Box>
  );
};

export default Header;
