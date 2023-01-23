import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import CategoryContext from '../../../context/categories';
import { api } from '../../../services/api';

const CardCircle = ({ item }: any) => {
  const navigate = useNavigate();

  const getProductsByCategory = async () => {
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
    <Box
      sx={{
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={() => getProductsByCategory()}
    >
      <Card
        sx={{
          width: '100px',
          borderRadius: '100%',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100px"
            image={item.image}
            alt={item.name}
          />
        </CardActionArea>
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default CardCircle;
