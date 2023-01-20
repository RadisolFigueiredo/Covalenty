import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const CardCircle = ({ item }: any) => {
  return (
    <Box
      sx={{
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
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
