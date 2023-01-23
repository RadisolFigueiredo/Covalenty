import { Box, Typography, Link, Divider } from '@mui/material';
import { menuFooter, politicasFooter } from '../../mock/footer';

const Footer = () => {
  return (
    <Box
      sx={{
        height: '30vh',
        backgroundColor: '#28696a',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: '80%',
            marginTop: '30px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Menu
            </Typography>
            {menuFooter.map((item) => (
              <Link
                key={item.id}
                href="#"
                variant="body2"
                underline="none"
                color="#ffffff"
              >
                {item.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '200px',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Políticas
            </Typography>
            {politicasFooter.map((item) => (
              <Link
                key={item.id}
                href="#"
                variant="body2"
                underline="none"
                color="#ffffff"
              >
                {item.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              height: '200px',

              flexDirection: 'column',
            }}
          >
            <Typography color="#ffffff" mb={2} variant="body1">
              Fale Conosco
            </Typography>
            <Typography color="#ffffff" variant="body2">
              Horário de Atendimento:
            </Typography>
            <Typography color="#ffffff" variant="body2">
              Seg. à Sab. 9:00h às 18:00h
            </Typography>
            <Typography color="#ffffff" variant="body2">
              E-mail: sac@lorenipsum.com.br
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            height: '20%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Typography paddingRight={5} color={'#ffffff'}>
            Copyright © 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
