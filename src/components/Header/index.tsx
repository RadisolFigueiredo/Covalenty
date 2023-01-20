import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Navbar from '../Navbar';
import * as S from './styles';

const Header = ({ categories }: any) => {
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

      <S.ContainerNavbar
        display="flex"
        justifyContent="center"
        alignItems={'center'}
      >
        <Box width="70%">
          <Navbar options={categories} />
        </Box>
      </S.ContainerNavbar>
    </>
  );
};

export default Header;
