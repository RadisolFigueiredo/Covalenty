import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryContext from '../../context/categories';
import { api } from '../../services/api';

const Navbar = () => {
  const navigate = useNavigate();
  const { mainCategories } = useContext(CategoryContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategory = async (item: any) => {
    try {
      const response = await api.get(`categories/${item.id}/products
      `);

      if (response.status === 200) {
        return navigate(`/products/${item.id}`, {
          state: { category: item, totalProducts: response.data.length },
        });
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        textAlign="center"
        width="100%"
        justifyContent="center"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#213058' }}>
          <Typography minWidth="100px" fontWeight={700}>
            Início
          </Typography>
        </Link>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ color: '#213058', ml: 2, fontWeight: 700 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          Categorias
          <KeyboardArrowDownIcon />
        </IconButton>
        <Link
          to="/tracking"
          style={{ textDecoration: 'none', color: '#213058' }}
        >
          <Typography minWidth={100} ml={5} fontWeight={700}>
            Rastreamento
          </Typography>
        </Link>
        <Link
          to="/deliveryTime"
          style={{ textDecoration: 'none', color: '#213058' }}
        >
          <Typography minWidth={100} ml={5} fontWeight={700}>
            Envio e Prazo de Entrega
          </Typography>{' '}
        </Link>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {mainCategories?.map((item: any) => (
          <Box key={item.id} onClick={() => handleCategory(item)}>
            <MenuItem>{item.name}</MenuItem>
          </Box>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
