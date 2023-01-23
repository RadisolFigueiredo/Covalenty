import { useNavigate } from 'react-router-dom';

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import { api } from '../../../services/api';
import { CategoryType } from '../../../context/categories';

type PropsCardCircle = {
  item: CategoryType;
};

const CardCircle = ({ item }: PropsCardCircle) => {
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
        <Typography gutterBottom variant="h5" component="div" color="#213058">
          {item.name}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default CardCircle;
