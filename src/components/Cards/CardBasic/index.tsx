import { Box, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/formatCurrent';

const CardBasic = ({ products, totalProducts, setOffset }: any) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    if (p > page) {
      setOffset((p - 2) * 12 + 12);
      setPage(page + 1);
    } else {
      if (p < page) {
        setOffset((p - 1) * 12);
        setPage(page - 1);
      }
    }
  };

  const handleDetail = (id: number) => {
    return navigate(`/product-detail/${id}`, { state: { productId: id } });
  };

  return (
    <Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        mt="50px"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
          width="70%"
        >
          {products?.map((item: any) => (
            <Box
              key={item.id}
              mx={2}
              mb={5}
              width="250px"
              height="300px"
              onClick={() => handleDetail(item.id)}
              sx={{ cursor: 'pointer' }}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                width="100%"
                height="190px"
              />
              <Box padding={1}>
                <Typography variant="body1" fontSize={18}>
                  {item.title}
                </Typography>
                <Typography variant="body2" fontSize={18}>
                  {formatPrice(item.price)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {totalProducts > 12 && (
        <Box my={5} width="100%" display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(totalProducts / 12)}
            onChange={(e, value) => handleChange(e, value)}
          />
        </Box>
      )}
    </Box>
  );
};

export default CardBasic;
